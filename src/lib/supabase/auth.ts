'use client';

import { createClient } from './client';

export async function signInWithGoogle(redirectTo: string = '/account') {
  const supabase = createClient();
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
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
  const supabase = createClient();
  await supabase.auth.signOut();
  if (typeof window !== 'undefined') {
    window.location.href = '/';
  }
}
