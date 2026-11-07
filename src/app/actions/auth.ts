'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export interface UserAuthDetails {
  id: string;
  email: string;
  fullName: string;
  avatarUrl: string | null;
  createdAt: string;
  isGoogleVerified: boolean;
}

export async function getCurrentUser(): Promise<UserAuthDetails | null> {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return null;
    }

    const metadata = user.user_metadata || {};
    const fullName =
      metadata.full_name ||
      metadata.name ||
      user.email?.split('@')[0] ||
      'Seitz Tester';

    const avatarUrl =
      metadata.avatar_url ||
      metadata.picture ||
      null;

    return {
      id: user.id,
      email: user.email || '',
      fullName,
      avatarUrl,
      createdAt: user.created_at,
      isGoogleVerified: user.app_metadata?.provider === 'google' || !!metadata.email_verified,
    };
  } catch (err) {
    console.error('Error fetching current user:', err);
    return null;
  }
}

export async function signOutUser() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/');
}
