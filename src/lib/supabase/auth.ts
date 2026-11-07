'use client';

import { createClient } from './client';

export function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) return false;
  if (url.includes('placeholder') || anonKey.includes('placeholder')) return false;

  return true;
}

export async function signInWithGoogle(redirectTo: string = '/account') {
  if (!isSupabaseConfigured()) {
    const errorMsg =
      'Supabase credentials are not configured. Please add your real NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local.';
    console.error('Google SSO Error:', errorMsg);
    throw new Error(errorMsg);
  }

  const supabase = createClient();
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const callbackUrl = `${origin}/auth/callback?next=${encodeURIComponent(redirectTo)}`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: callbackUrl,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });

  if (error) {
    console.error('Google SSO Error:', error.message);
    throw error;
  }

  return data;
}

export async function signOutClient() {
  if (!isSupabaseConfigured()) {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
    return;
  }

  const supabase = createClient();
  await supabase.auth.signOut();
  if (typeof window !== 'undefined') {
    window.location.href = '/';
  }
}
