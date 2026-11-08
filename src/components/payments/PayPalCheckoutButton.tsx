'use client';

import React, { useState } from 'react';
import { Loader2, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import { initiateClientPayment, completeClientPayment } from '@/app/actions/payments';
import { TestingTierId, TESTING_TIERS } from '@/lib/paypal/client';

interface PayPalCheckoutButtonProps {
  tierId: TestingTierId;
  clientDetails: {
    clientName: string;
    clientEmail: string;
    appName: string;
    packageName: string;
    optInLink?: string;
    testCredentials?: string;
    notes?: string;
  };
  onSuccess: (orderId: string, captureId: string) => void;
  onError: (error: string) => void;
}

export function PayPalCheckoutButton({
  tierId,
  clientDetails,
  onSuccess,
  onError,
}: PayPalCheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [statusText, setStatusText] = useState<string | null>(null);

  const tier = TESTING_TIERS[tierId] || TESTING_TIERS.tier_20;

  const handlePayPalCheckout = async () => {
    if (!clientDetails.clientName || !clientDetails.clientEmail || !clientDetails.appName || !clientDetails.packageName) {
      onError('Please complete all required app and contact fields before paying.');
      return;
    }

    try {
      setLoading(true);
      setStatusText('Initiating secure PayPal order...');

      // 1. Create order on server
      const initRes = await initiateClientPayment(tierId, clientDetails);

      if (!initRes.success || !initRes.orderId) {
        throw new Error(initRes.error || 'Failed to initialize PayPal order.');
      }

      setStatusText(`Verifying with PayPal (${tier.name} - $${tier.priceUsd.toFixed(2)} USD)...`);

      // 2. Simulate / execute checkout approval & capture
      // In production or sandbox, PayPal redirects/modals return orderId to capture
      setStatusText('Capturing payment & funding tester bounty pool...');

      const captureRes = await completeClientPayment(initRes.orderId, {
        tierId,
        ...clientDetails,
      });

      if (!captureRes.success || !captureRes.captureId) {
        throw new Error(captureRes.error || 'Payment capture failed.');
      }

      setStatusText('Payment confirmed!');
      onSuccess(initRes.orderId, captureRes.captureId);
    } catch (err: unknown) {
      console.error('[PayPal Checkout Error]:', err);
      onError(err instanceof Error ? err.message : 'PayPal checkout failed');
    } finally {
      setLoading(false);
      setStatusText(null);
    }
  };

  return (
    <div className="space-y-3">
      {/* Split Transparency Banner */}
      <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-950 space-y-1">
        <div className="flex items-center justify-between font-mono font-bold text-[11px] text-amber-900">
          <span>COHORT REVENUE SPLIT:</span>
          <span>${tier.priceUsd.toFixed(2)} USD TOTAL</span>
        </div>
        <div className="flex items-center justify-between text-[11px] text-amber-800">
          <span>• {tier.testerCount} Verified Testers Reward Pool:</span>
          <strong className="text-emerald-700">${tier.totalTesterPoolUsd.toFixed(2)} (${tier.bountyPerTesterUsd.toFixed(2)}/tester)</strong>
        </div>
        <div className="flex items-center justify-between text-[11px] text-amber-800">
          <span>• Seitz Compliance &amp; Console Mgmt:</span>
          <strong>${tier.platformMarginUsd.toFixed(2)}</strong>
        </div>
      </div>

      {/* Official PayPal CTA Button */}
      <button
        type="button"
        onClick={handlePayPalCheckout}
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-2xl bg-[#FFC439] hover:bg-[#F2BA36] text-[#003087] font-display font-extrabold text-sm flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-lg cursor-pointer disabled:opacity-60 relative overflow-hidden"
      >
        {loading ? (
          <div className="flex items-center gap-2 text-slate-900">
            <Loader2 className="w-4 h-4 animate-spin text-[#003087]" />
            <span className="text-xs font-mono font-bold">{statusText || 'Processing...'}</span>
          </div>
        ) : (
          <>
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
              <path
                d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.76A.96.96 0 0 1 5.894 2h7.027c2.327 0 4.148.59 5.143 1.662.915.986 1.18 2.378.788 4.137-.773 3.473-3.13 5.372-6.634 5.372H9.367l-1.42 7.558a.64.641 0 0 1-.871.608z"
                fill="#003087"
              />
              <path
                d="M8.847 14.171h2.851c3.155 0 5.275-1.708 5.97-4.832.352-1.583.115-2.834-.709-3.721-.894-.964-2.531-1.493-4.623-1.493H5.309a.864.864 0 0 0-.855.684l-2.61 14.072a.576.576 0 0 0 .568.665h4.137l1.098-5.85a.863.863 0 0 1 .855-.684z"
                fill="#0079C1"
              />
              <path
                d="M7.992 14.171l1.42-7.558h2.851c3.155 0 5.275-1.708 5.97-4.832.352-1.583.115-2.834-.709-3.721-.894-.964-2.531-1.493-4.623-1.493H5.894A.96.96 0 0 0 4.944 2L1.837 20.597a.641.641 0 0 0 .633.74h4.606l.916-7.166z"
                fill="#00457C"
              />
            </svg>
            <span className="text-[#003087]">Pay with PayPal</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#003087]/10 text-[#003087] font-mono">
              ${tier.priceUsd.toFixed(2)} USD
            </span>
          </>
        )}
      </button>

      {/* Trust & Policy Footnote */}
      <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-slate-500">
        <Lock className="w-3 h-3 text-emerald-600" />
        <span>256-Bit SSL Encrypted • Direct Client-to-Tester Reward Escrow</span>
      </div>
    </div>
  );
}
