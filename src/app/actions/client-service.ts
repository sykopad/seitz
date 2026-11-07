'use server';

import { createClient } from '@/lib/supabase/server';
import {
  sendClientOrderNotificationEmail,
  sendClientOrderConfirmationEmail,
} from '@/lib/email';

export interface ClientTestingOrderData {
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  appName: string;
  packageName: string;
  appCategory?: string;
  optInLink?: string;
  testCredentials?: string;
  tier: 'standard_15' | 'pro_25';
  preferredEscrow: 'direct' | 'upwork' | 'fiverr';
  notes?: string;
  termsAccepted: boolean;
}

export interface ClientTestingOrderResponse {
  success: boolean;
  message: string;
  orderId?: string;
  error?: string;
}

export async function submitClientTestingOrder(
  data: ClientTestingOrderData
): Promise<ClientTestingOrderResponse> {
  try {
    if (!data.clientName || !data.clientEmail || !data.appName || !data.packageName) {
      return {
        success: false,
        message: 'Please fill in all required fields (Name, Email, App Name, Package Name).',
        error: 'Missing required fields',
      };
    }

    if (!data.termsAccepted) {
      return {
        success: false,
        message: 'Please accept the service terms and Google Play policy disclosure.',
        error: 'Terms not accepted',
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.clientEmail)) {
      return {
        success: false,
        message: 'Please provide a valid email address.',
        error: 'Invalid email address',
      };
    }

    // Basic package name format check (e.g., com.example.app)
    const packageRegex = /^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)+$/;
    if (!packageRegex.test(data.packageName.trim())) {
      return {
        success: false,
        message: 'Please provide a valid Android package name (e.g. com.company.app).',
        error: 'Invalid package name',
      };
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

    // Handle local development fallback
    if (!supabaseUrl || supabaseUrl.includes('placeholder-project')) {
      console.log('[Dev Client Testing Order Recorded Locally]:', data);

      // Trigger Resend email mocks/notifications
      await Promise.allSettled([
        sendClientOrderNotificationEmail(data),
        sendClientOrderConfirmationEmail(data),
      ]);

      return {
        success: true,
        message: `Order received! We've sent onboarding instructions to ${data.clientEmail}. Add our group seitz@googlegroups.com in your Play Console to begin.`,
        orderId: 'mock-order-' + Date.now(),
      };
    }

    const supabase = await createClient();

    const { data: insertedOrder, error: insertError } = await (
      supabase.from('client_testing_orders') as any
    )
      .insert({
        client_name: data.clientName.trim(),
        client_email: data.clientEmail.trim().toLowerCase(),
        client_phone: data.clientPhone ? data.clientPhone.trim() : null,
        app_name: data.appName.trim(),
        package_name: data.packageName.trim(),
        app_category: data.appCategory || 'general',
        opt_in_link: data.optInLink ? data.optInLink.trim() : null,
        test_credentials: data.testCredentials ? data.testCredentials.trim() : null,
        tier: data.tier,
        preferred_escrow: data.preferredEscrow,
        payment_status: 'pending',
        cohort_status: 'intake',
        notes: data.notes ? data.notes.trim() : null,
      })
      .select('id')
      .single();

    if (insertError) {
      console.error('Supabase client order insert error:', insertError);
      return {
        success: false,
        message: 'Failed to record order in database. Please contact us directly at byseitz.agency@gmail.com.',
        error: insertError.message,
      };
    }

    // Dispatch background email notifications via Resend
    await Promise.allSettled([
      sendClientOrderNotificationEmail(data),
      sendClientOrderConfirmationEmail(data),
    ]);

    return {
      success: true,
      message: `Your closed testing order for ${data.appName} has been registered! Check your inbox (${data.clientEmail}) for immediate Google Play Console setup steps.`,
      orderId: insertedOrder?.id,
    };
  } catch (err: unknown) {
    console.error('Unexpected error in submitClientTestingOrder:', err);
    return {
      success: false,
      message: 'An unexpected error occurred while processing your request. Please try again.',
      error: err instanceof Error ? err.message : 'Unknown error',
    };
  }
}
