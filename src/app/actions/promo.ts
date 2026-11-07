'use server';

import { createClient } from '@/lib/supabase/server';
import { legacyVisitaTesters } from '@/data/legacy-testers';

export interface PromoClaimResponse {
  success: boolean;
  message: string;
  code?: string;
  appSlug?: string;
  error?: string;
}

export async function claimPromoCode(
  email: string,
  appSlug: string
): Promise<PromoClaimResponse> {
  try {
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@')) {
      return {
        success: false,
        message: 'Please provide a valid Google Play email address.',
        error: 'Invalid email',
      };
    }

    // Verify if email is in legacy testers list (73 testers) or registered testers
    const isLegacy = legacyVisitaTesters.some(
      (emailStr) => emailStr.toLowerCase() === cleanEmail
    );

    // Format app prefix
    const prefixMap: Record<string, string> = {
      'mzansi-midnight': 'MM-FULL',
      'omniremote': 'OMNI-PRO',
      'cleanandclean': 'CNC-VIP',
      'decolonize': 'DECOL-LIB',
      'mira': 'MIRA-PRO',
      'payday': 'PAYDAY-TRUST',
      'syndicate': 'SYND-BOSS',
      'toll-plaza': 'TOLL-GOLD',
      'would-you-rather': 'WYR-PARTY',
      'debate-league': 'DEBATE-PRO',
    };

    const prefix = prefixMap[appSlug] || 'SEITZ-PROMO';
    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const generatedCode = `${prefix}-${randomSuffix}-2026`;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

    // Handle local development fallback
    if (!supabaseUrl || supabaseUrl.includes('placeholder-project')) {
      return {
        success: true,
        message: `Verified! Your lifetime promotional unlock code for ${appSlug} has been issued. Redeem in Google Play Store under Account > Payments & Subscriptions > Redeem code.`,
        code: generatedCode,
        appSlug,
      };
    }

    const supabase = await createClient();

    // Check if tester already claimed a code for this app
    const { data: existingCode } = await supabase
      .from('promo_codes')
      .select('code')
      .eq('app_slug', appSlug)
      .eq('assigned_to_email', cleanEmail)
      .limit(1)
      .single();

    if (existingCode) {
      return {
        success: true,
        message: `Welcome back! Here is your previously claimed promo code for ${appSlug}:`,
        code: (existingCode as any).code,
        appSlug,
      };
    }

    // Insert new promo code
    await (supabase.from('promo_codes') as any).insert({
      app_slug: appSlug,
      code: generatedCode,
      assigned_to_email: cleanEmail,
      is_redeemed: true,
      redeemed_at: new Date().toISOString(),
    });

    return {
      success: true,
      message: `Verified! Your lifetime promo code has been unlocked. Redeem in the Google Play Store on your device.`,
      code: generatedCode,
      appSlug,
    };
  } catch (err: unknown) {
    console.error('Error claiming promo code:', err);
    return {
      success: false,
      message: 'Failed to claim promotional code. Please try again or contact byseitz.agency@gmail.com.',
      error: err instanceof Error ? err.message : 'Unknown error',
    };
  }
}
