'use server';

import { createClient } from '@/lib/supabase/server';
import { sendTesterWelcomeEmail } from '@/lib/email';

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

    // Send welcome email with Google Group invite via Resend
    await sendTesterWelcomeEmail({
      fullName: data.fullName.trim(),
      googleEmail: data.googleEmail.trim().toLowerCase(),
      deviceModel: data.deviceModel.trim(),
    });

    return {
      success: true,
      message: `Welcome to the Seitz Testing Lab, ${data.fullName.split(' ')[0]}! Your device has been added to our priority cohort list. You will receive an email as soon as the next testing round opens on Google Play.`,
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
