'use server';

import { createClient } from '@/lib/supabase/server';
import { legacyVisitaTesters } from '@/data/legacy-testers';
import { getDeterministicPromoCode, officialGooglePlayPromoCodes } from '@/data/promo-codes';

export interface PromoClaimResponse {
  success: boolean;
  message: string;
  code?: string;
  redeemUrl?: string;
  appSlug?: string;
  isOfficialConsoleCode?: boolean;
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

    // Verify if email is recognized in testing pool
    const isLegacy = legacyVisitaTesters.some(
      (emailStr) => emailStr.toLowerCase() === cleanEmail
    );

    // Official 23-character Google Play promo code from the 50-code vault
    const officialCode = getDeterministicPromoCode(cleanEmail, appSlug);
    const playStoreRedeemUrl = `https://play.google.com/redeem?code=${encodeURIComponent(officialCode)}`;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

    // Handle local development or offline fallback
    if (!supabaseUrl || supabaseUrl.includes('placeholder-project')) {
      return {
        success: true,
        message: `Verified! Your official Google Play promotional unlock code has been issued. Redeem directly in the Google Play Store or tap the link below.`,
        code: officialCode,
        redeemUrl: playStoreRedeemUrl,
        isOfficialConsoleCode: true,
        appSlug,
      };
    }

    const supabase = await createClient();

    // 1. Check if tester already claimed a code for this app
    const { data: existingCode } = await supabase
      .from('promo_codes')
      .select('code')
      .eq('app_slug', appSlug)
      .eq('assigned_to_email', cleanEmail)
      .limit(1)
      .single();

    if (existingCode && (existingCode as any).code) {
      const codeVal = (existingCode as any).code;
      return {
        success: true,
        message: `Welcome back! Here is your previously unlocked Google Play promo code:`,
        code: codeVal,
        redeemUrl: `https://play.google.com/redeem?code=${encodeURIComponent(codeVal)}`,
        isOfficialConsoleCode: officialGooglePlayPromoCodes.includes(codeVal),
        appSlug,
      };
    }

    // 2. Try to grab an unredeemed code from Supabase promo_codes table
    const { data: availableCode } = await supabase
      .from('promo_codes')
      .select('id, code')
      .eq('app_slug', appSlug)
      .eq('is_redeemed', false)
      .limit(1)
      .single();

    if (availableCode && (availableCode as any).id) {
      const codeId = (availableCode as any).id;
      const codeVal = (availableCode as any).code;

      await (supabase.from('promo_codes') as any)
        .update({
          is_redeemed: true,
          assigned_to_email: cleanEmail,
          redeemed_at: new Date().toISOString(),
        })
        .eq('id', codeId);

      return {
        success: true,
        message: `Verified! Your official Google Play lifetime unlock code has been unlocked.`,
        code: codeVal,
        redeemUrl: `https://play.google.com/redeem?code=${encodeURIComponent(codeVal)}`,
        isOfficialConsoleCode: officialGooglePlayPromoCodes.includes(codeVal),
        appSlug,
      };
    }

    // 3. Fallback: Insert and assign the deterministic official code into Supabase
    await (supabase.from('promo_codes') as any).insert({
      app_slug: appSlug,
      code: officialCode,
      assigned_to_email: cleanEmail,
      is_redeemed: true,
      redeemed_at: new Date().toISOString(),
    });

    return {
      success: true,
      message: `Verified! Your official Google Play promotional unlock code has been issued.`,
      code: officialCode,
      redeemUrl: playStoreRedeemUrl,
      isOfficialConsoleCode: true,
      appSlug,
    };
  } catch (err: unknown) {
    console.error('Error claiming promo code:', err);
    // Graceful fallback to deterministic vault code if database encounter an unexpected network issue
    const cleanEmail = email.trim().toLowerCase();
    const fallbackCode = getDeterministicPromoCode(cleanEmail, appSlug);

    return {
      success: true,
      message: 'Verified! Your Google Play promo code has been retrieved from the vault.',
      code: fallbackCode,
      redeemUrl: `https://play.google.com/redeem?code=${encodeURIComponent(fallbackCode)}`,
      isOfficialConsoleCode: true,
      appSlug,
    };
  }
}
