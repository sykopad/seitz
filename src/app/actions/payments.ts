'use server';

import {
  createPayPalOrder,
  capturePayPalOrder,
  TestingTierId,
  TESTING_TIERS,
} from '@/lib/paypal/client';
import { createClient } from '@/lib/supabase/server';
import { sendClientOrderConfirmationEmail, sendClientOrderNotificationEmail } from '@/lib/email';

export interface InitiatePaymentResult {
  success: boolean;
  orderId?: string;
  tierId?: TestingTierId;
  priceUsd?: number;
  message?: string;
  error?: string;
}

export interface CapturePaymentResult {
  success: boolean;
  orderId?: string;
  captureId?: string;
  amount?: string;
  payerEmail?: string;
  message?: string;
  error?: string;
}

/**
 * Initiates a client PayPal order for Google Play closed testing
 */
export async function initiateClientPayment(
  tierId: TestingTierId,
  appDetails: {
    appName: string;
    packageName: string;
    clientEmail: string;
    clientName: string;
  }
): Promise<InitiatePaymentResult> {
  try {
    const tier = TESTING_TIERS[tierId] || TESTING_TIERS.tier_20;

    const { orderId } = await createPayPalOrder(tierId, appDetails);

    return {
      success: true,
      orderId,
      tierId: tier.id,
      priceUsd: tier.priceUsd,
      message: `PayPal order created for ${tier.name} ($${tier.priceUsd.toFixed(2)} USD).`,
    };
  } catch (err: unknown) {
    console.error('[Initiate Payment Error]:', err);
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to create PayPal order',
    };
  }
}

/**
 * Captures the client PayPal payment and initializes the tester bounty pool
 */
export async function completeClientPayment(
  orderId: string,
  details: {
    tierId: TestingTierId;
    appName: string;
    packageName: string;
    clientName: string;
    clientEmail: string;
    optInLink?: string;
    testCredentials?: string;
    notes?: string;
  }
): Promise<CapturePaymentResult> {
  try {
    const tier = TESTING_TIERS[details.tierId] || TESTING_TIERS.tier_20;

    // 1. Capture order via PayPal REST API
    const capture = await capturePayPalOrder(orderId);

    if (capture.status !== 'COMPLETED') {
      return {
        success: false,
        orderId,
        error: `PayPal payment not completed. Current status: ${capture.status}`,
      };
    }

    // 2. Persist order & cohort funding in Supabase
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      if (supabaseUrl && !supabaseUrl.includes('placeholder')) {
        const supabase = await createClient();
        await (supabase.from('client_orders') as any).insert({
          order_id: orderId,
          capture_id: capture.captureId,
          tier: details.tierId,
          amount_usd: tier.priceUsd,
          tester_pool_usd: tier.totalTesterPoolUsd,
          platform_margin_usd: tier.platformMarginUsd,
          tester_count: tier.testerCount,
          bounty_per_tester_usd: tier.bountyPerTesterUsd,
          client_name: details.clientName,
          client_email: details.clientEmail,
          payer_email: capture.payer.email,
          app_name: details.appName,
          package_name: details.packageName,
          opt_in_link: details.optInLink || null,
          test_credentials: details.testCredentials || null,
          notes: details.notes || null,
          status: 'paid_and_recruiting',
          created_at: new Date().toISOString(),
        });
      }
    } catch (dbErr) {
      console.warn('[Supabase Order Record Notice - Processed Locally]:', dbErr);
    }

    // 3. Dispatch confirmation emails
    try {
      await sendClientOrderConfirmationEmail({
        clientName: details.clientName,
        clientEmail: details.clientEmail,
        appName: details.appName,
        packageName: details.packageName,
        tier: details.tierId,
        preferredEscrow: 'PayPal Instant Escrow',
      });

      await sendClientOrderNotificationEmail({
        clientName: details.clientName,
        clientEmail: details.clientEmail,
        appName: details.appName,
        packageName: details.packageName,
        tier: details.tierId,
        preferredEscrow: 'PayPal',
        notes: `Paid via PayPal (${capture.captureId}). Order: ${orderId}. Tester Bounty Pool: $${tier.totalTesterPoolUsd} ($${tier.bountyPerTesterUsd}/tester). Platform margin: $${tier.platformMarginUsd}. App details: ${details.notes || 'None'}`,
      });
    } catch (emailErr) {
      console.error('[Email Dispatch Notice]:', emailErr);
    }

    return {
      success: true,
      orderId,
      captureId: capture.captureId,
      amount: capture.amount,
      payerEmail: capture.payer.email,
      message: `Payment of $${tier.priceUsd.toFixed(2)} USD confirmed! Your ${tier.testerCount}-tester cohort and bounty pool have been activated.`,
    };
  } catch (err: unknown) {
    console.error('[Complete Payment Error]:', err);
    return {
      success: false,
      orderId,
      error: err instanceof Error ? err.message : 'Failed to capture PayPal payment',
    };
  }
}
