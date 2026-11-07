'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  User,
  LogOut,
  Gift,
  Award,
  Layers,
  ChevronDown,
  Loader2,
  ShieldCheck,
} from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { signInWithGoogle, signOutClient } from '@/lib/supabase/auth';

interface UserInfo {
  id: string;
  email: string;
  fullName: string;
  avatarUrl: string | null;
}

interface UserAuthButtonProps {
  compact?: boolean;
}

export function UserAuthButton({ compact = false }: UserAuthButtonProps) {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [signingIn, setSigningIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supabase = createClient();

    // 1. Get initial session
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        const metadata = user.user_metadata || {};
        setUser({
          id: user.id,
          email: user.email || '',
          fullName:
            metadata.full_name ||
            metadata.name ||
            user.email?.split('@')[0] ||
            'Tester',
          avatarUrl: metadata.avatar_url || metadata.picture || null,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    // 2. Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const metadata = session.user.user_metadata || {};
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          fullName:
            metadata.full_name ||
            metadata.name ||
            session.user.email?.split('@')[0] ||
            'Tester',
          avatarUrl: metadata.avatar_url || metadata.picture || null,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      setSigningIn(true);
      await signInWithGoogle('/account');
    } catch {
      setSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    setDropdownOpen(false);
    await signOutClient();
  };

  if (loading) {
    return (
      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center animate-pulse">
        <div className="w-4 h-4 rounded-full bg-slate-300" />
      </div>
    );
  }

  // Authenticated State
  if (user) {
    const initials = user.fullName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 p-1 pl-1.5 pr-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 shadow-xs transition cursor-pointer"
          aria-label="User Account Menu"
        >
          {user.avatarUrl ? (
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-emerald-500/40">
              <Image
                src={user.avatarUrl}
                alt={user.fullName}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-500 to-sky-500 text-white font-bold text-xs flex items-center justify-center">
              {initials}
            </div>
          )}

          {!compact && (
            <span className="text-xs font-medium text-slate-800 max-w-[100px] truncate hidden md:inline">
              {user.fullName}
            </span>
          )}

          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
              dropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white border border-slate-200 shadow-xl py-2 z-50 animate-fadeIn">
            {/* User Profile Summary */}
            <div className="px-4 py-3 border-b border-slate-100">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-display font-bold text-sm text-slate-900 truncate">
                  {user.fullName}
                </span>
                <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 text-[9px] font-mono font-bold shrink-0">
                  Verified
                </span>
              </div>
              <p className="text-xs font-mono text-slate-500 truncate">{user.email}</p>
            </div>

            {/* Menu Links */}
            <div className="py-1 text-xs">
              <Link
                href="/account"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2.5 text-slate-700 hover:text-emerald-700 hover:bg-slate-50 transition font-medium"
              >
                <User className="w-4 h-4 text-emerald-600" />
                <span>Tester Dashboard &amp; Profile</span>
              </Link>

              <Link
                href="/account#promo-vault"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2.5 text-slate-700 hover:text-amber-700 hover:bg-slate-50 transition font-medium"
              >
                <Gift className="w-4 h-4 text-amber-600" />
                <span>Unlocked Promo Codes</span>
              </Link>

              <Link
                href="/account#badges"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2.5 text-slate-700 hover:text-sky-700 hover:bg-slate-50 transition font-medium"
              >
                <Award className="w-4 h-4 text-sky-600" />
                <span>Earned Badges &amp; Trophies</span>
              </Link>

              <Link
                href="/account#unlocked-apps"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2.5 text-slate-700 hover:text-violet-700 hover:bg-slate-50 transition font-medium"
              >
                <Layers className="w-4 h-4 text-violet-600" />
                <span>My Active App Cohorts</span>
              </Link>
            </div>

            {/* Sign Out */}
            <div className="pt-1 border-t border-slate-100">
              <button
                type="button"
                onClick={handleSignOut}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs text-rose-700 hover:bg-rose-50 transition font-medium text-left cursor-pointer"
              >
                <LogOut className="w-4 h-4 text-rose-600" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Unauthenticated State: Sign in with Google Button
  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      disabled={signingIn}
      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-medium text-xs shadow-xs transition hover:shadow-sm cursor-pointer disabled:opacity-60"
    >
      {signingIn ? (
        <Loader2 className="w-4 h-4 animate-spin text-slate-500" />
      ) : (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
      )}
      <span className="font-semibold text-slate-700">
        {compact ? 'Sign In' : 'Sign in with Google'}
      </span>
    </button>
  );
}
