'use server';

import { createClient } from '@/lib/supabase/server';
import { sendTesterWelcomeEmail } from '@/lib/email';
import { enrollUserInSeitzGoogleGroup } from '@/app/actions/google-group';

export interface TesterRegistrationData {
  fullName: string;
  googleEmail: string;
  deviceModel: string;
  androidVersion: string;
  interestedCategories: string[];
  commitmentAccepted: boolean;
}

export interface TesterResponse {
  success: boolean;
  message: string;
  error?: string;
}

export async function registerTester(data: TesterRegistrationData): Promise<TesterResponse> {
  try {
    if (!data.fullName || !data.googleEmail || !data.deviceModel || !data.androidVersion) {
      return {
        success: false,
        message: 'Please complete all required fields.',
        error: 'Missing required fields',
      };
    }

    if (!data.commitmentAccepted) {
      return {
        success: false,
        message: 'Please accept the 14-day retention commitment agreement.',
        error: 'Commitment not accepted',
      };
    }

    // Google Play account email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.googleEmail)) {
      return {
        success: false,
        message: 'Please provide a valid Google Play email address.',
        error: 'Invalid email address',
      };
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    // Handle local development fallback
    if (!supabaseUrl || supabaseUrl.includes('placeholder-project')) {
      console.log('[Dev Tester Registration Recorded Locally]:', data);
      return {
        success: true,
        message: `Welcome to the Seitz Testing Lab, ${data.fullName.split(' ')[0]}! Your device details have been registered. Watch your inbox for direct Google Play closed-testing invitations.`,
      };
    }

    const supabase = await createClient();

    // Check if email already registered
    const { data: existing } = await (supabase.from('testers') as any)
      .select('id, status')
      .eq('google_email', data.googleEmail.trim().toLowerCase())
      .single();

    if (existing) {
      return {
        success: true,
        message: 'You are already registered in the Seitz Testing Lab! We have your device on file and will dispatch the next cohort invite to your email.',
      };
    }

    const { error } = await (supabase.from('testers') as any).insert({
      full_name: data.fullName.trim(),
      google_email: data.googleEmail.trim().toLowerCase(),
      device_model: data.deviceModel.trim(),
      android_version: data.androidVersion,
      interested_categories: data.interestedCategories || [],
      commitment_accepted: data.commitmentAccepted,
      source: 'website',
      status: 'registered',
    });

    if (error) {
      console.error('Supabase tester insert error:', error);
      return {
        success: false,
        message: 'Could not register tester at this moment. Please email byseitz.agency@gmail.com.',
        error: error.message,
      };
    }

    // Automatically enroll user in Seitz Google Group (authorizes all 4 Google Play apps)
    await enrollUserInSeitzGoogleGroup(
      data.googleEmail.trim().toLowerCase(),
      data.fullName.trim(),
      data.deviceModel.trim()
    );

    return {
      success: true,
      message: `Welcome to the Seitz Testing Lab, ${data.fullName.split(' ')[0]}! You are officially enrolled in seitz@googlegroups.com with instant closed-track access to all 4 live Google Play apps. Check your inbox for your 1-click opt-in links!`,
    };
  } catch (err: unknown) {
    console.error('Unexpected tester registration error:', err);
    return {
      success: false,
      message: 'An unexpected error occurred. Please reach out to byseitz.agency@gmail.com.',
      error: err instanceof Error ? err.message : 'Unknown error',
    };
  }
}
