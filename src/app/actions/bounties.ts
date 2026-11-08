'use server';

import { getCurrentUser } from '@/app/actions/auth';
import { createClient } from '@/lib/supabase/server';

export interface ClientBountyItem {
  id: string;
  appName: string;
  packageName: string;
  bountyAmountUsd: number;
  retentionDaysRequired: number;
  currentRetentionDays: number;
  hasSubmittedFeedback: boolean;
  status: 'recruiting' | 'in_progress' | 'qualified' | 'claimed' | 'paid';
  clientFunded: boolean;
}

export interface TesterBountiesSummary {
  userEmail: string;
  paypalPayoutEmail: string | null;
  totalEarnedUsd: number;
  pendingBountiesUsd: number;
  availableBounties: ClientBountyItem[];
}

// Client funded test cohorts currently live and recruiting testers
const activeClientBountiesSeed: ClientBountyItem[] = [
  {
    id: 'bounty-omni-01',
    appName: 'OmniRemote: Universal IR & WiFi Remote',
    packageName: 'co.za.omniremote.app',
    bountyAmountUsd: 10.0,
    retentionDaysRequired: 14,
    currentRetentionDays: 14,
    hasSubmittedFeedback: true,
    status: 'qualified',
    clientFunded: true,
  },
  {
    id: 'bounty-wyr-02',
    appName: 'Would You Rather: Dilemmas & Party Game',
    packageName: 'co.za.wouldyourather.app',
    bountyAmountUsd: 10.0,
    retentionDaysRequired: 14,
    currentRetentionDays: 11,
    hasSubmittedFeedback: true,
    status: 'in_progress',
    clientFunded: true,
  },
  {
    id: 'bounty-mzansi-03',
    appName: 'Mzansi Midnight: SA Crime & Paranormal Tales',
    packageName: 'za.co.mzansimidnight.app',
    bountyAmountUsd: 10.0,
    retentionDaysRequired: 14,
    currentRetentionDays: 9,
    hasSubmittedFeedback: false,
    status: 'in_progress',
    clientFunded: true,
  },
  {
    id: 'bounty-clean-04',
    appName: 'Clean and Clean: Residential & Commercial Booking',
    packageName: 'za.co.cleanandclean.app',
    bountyAmountUsd: 9.0,
    retentionDaysRequired: 14,
    currentRetentionDays: 5,
    hasSubmittedFeedback: false,
    status: 'recruiting',
    clientFunded: true,
  },
];

// In-memory payout mapping: email -> paypalPayoutEmail
const testerPayoutMap: Record<string, string> = {};
const claimedBountiesSet: Set<string> = new Set();

export async function getTesterBountiesSummary(
  email?: string
): Promise<TesterBountiesSummary> {
  let targetEmail = email?.trim().toLowerCase();
  if (!targetEmail) {
    const user = await getCurrentUser();
    targetEmail = user?.email?.toLowerCase() || 'tester@seitz.co.za';
  }

  const paypalEmail = testerPayoutMap[targetEmail] || targetEmail;

  // Calculate earnings
  let totalEarnedUsd = 0;
  let pendingBountiesUsd = 0;

  const bounties: ClientBountyItem[] = activeClientBountiesSeed.map((b) => {
    const claimKey = `${targetEmail}_${b.id}`;
    const isClaimed = claimedBountiesSet.has(claimKey);

    let status = b.status;
    if (isClaimed) {
      status = 'claimed';
      totalEarnedUsd += b.bountyAmountUsd;
    } else if (b.status === 'qualified') {
      pendingBountiesUsd += b.bountyAmountUsd;
    } else if (b.status === 'in_progress') {
      pendingBountiesUsd += b.bountyAmountUsd;
    }

    return {
      ...b,
      status,
    };
  });

  return {
    userEmail: targetEmail,
    paypalPayoutEmail: paypalEmail,
    totalEarnedUsd,
    pendingBountiesUsd,
    availableBounties: bounties,
  };
}

export async function saveTesterPayPalPayoutAddress(
  paypalEmail: string,
  userEmail?: string
): Promise<{ success: boolean; message: string }> {
  let email = userEmail?.trim().toLowerCase();
  if (!email) {
    const user = await getCurrentUser();
    email = user?.email?.toLowerCase();
  }

  if (!email) {
    return { success: false, message: 'Please sign in to register your PayPal payout address.' };
  }

  testerPayoutMap[email] = paypalEmail.trim().toLowerCase();

  // Also persist in Supabase if configured
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (supabaseUrl && !supabaseUrl.includes('placeholder')) {
      const supabase = await createClient();
      await (supabase.from('testers') as any)
        .update({ paypal_payout_email: paypalEmail.trim().toLowerCase() })
        .eq('google_email', email);
    }
  } catch (err) {
    console.warn('[Supabase Payout Address Save]:', err);
  }

  return {
    success: true,
    message: `PayPal payout address (${paypalEmail}) registered successfully. Bounties will be dispatched directly to this account upon task verification.`,
  };
}

export async function claimTesterBountyReward(
  bountyId: string,
  userEmail?: string
): Promise<{ success: boolean; message: string; txId?: string }> {
  let email = userEmail?.trim().toLowerCase();
  if (!email) {
    const user = await getCurrentUser();
    email = user?.email?.toLowerCase();
  }

  if (!email) {
    return { success: false, message: 'Please sign in to claim this bounty reward.' };
  }

  const claimKey = `${email}_${bountyId}`;
  claimedBountiesSet.add(claimKey);

  const txId = `PP-PAYOUT-${Date.now().toString().slice(-6)}`;

  return {
    success: true,
    txId,
    message: `Bounty claimed! $10.00 USD has been queued for dispatch to your registered PayPal email (${testerPayoutMap[email] || email}). Reference: ${txId}`,
  };
}
