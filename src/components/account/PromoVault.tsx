'use client';

import React, { useState } from 'react';
import {
  Gift,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GooglePlayIcon } from '@/components/icons/GooglePlayIcon';

interface PromoCodeItem {
  id: string;
  appName: string;
  appSlug: string;
  code: string;
  redeemUrl: string;
  isOfficialConsoleCode: boolean;
  rewardDescription: string;
  rewardValue: string;
  status: 'unlocked' | 'claimed';
}

interface PromoVaultProps {
  promoCodes: PromoCodeItem[];
}

export function PromoVault({ promoCodes }: PromoVaultProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#059669', '#0284c7', '#f59e0b'],
    });

    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  return (
    <section id="promo-vault" className="space-y-4 scroll-mt-24">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-950 flex items-center gap-2">
            <Gift className="w-5 h-5 text-amber-500" />
            <span>Unlocked Promo Codes &amp; Reward Vault</span>
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            Your earned lifetime unlock promo codes from the official Google Play Console vault.
          </p>
        </div>

        <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold">
          {promoCodes.length} Codes Available
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {promoCodes.map((item) => {
          const isCopied = copiedCode === item.code;

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-amber-300 hover:shadow-md transition"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold">
                    {item.appName}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 font-semibold">
                    {item.rewardValue}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-sm text-slate-950">
                    {item.rewardDescription}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Permanent ad-free unlock and full version license for enrolled testers.
                  </p>
                </div>

                {/* The Code Box */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">
                      Google Play Code
                    </span>
                    <span className="font-mono font-bold text-sm text-slate-950 tracking-wider">
                      {item.code}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(item.code)}
                    className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs font-medium flex items-center gap-1.5 transition shadow-2xs cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Redemption Action */}
              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <a
                  href={item.redeemUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold text-center flex items-center justify-center gap-2 transition shadow-xs"
                >
                  <GooglePlayIcon className="w-3.5 h-3.5 text-white" />
                  <span>Redeem in Google Play Store ↗</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Redemption Guide Note */}
      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-slate-700 space-y-1">
        <div className="flex items-center gap-1.5 text-amber-800 font-semibold">
          <HelpCircle className="w-4 h-4 text-amber-600" />
          <span>How to redeem on your Android device:</span>
        </div>
        <p className="leading-relaxed pl-5 text-slate-600">
          Open the <strong>Google Play Store app</strong> &gt; tap your profile picture at top right &gt; tap <strong>Payments &amp; subscriptions</strong> &gt; tap <strong>Redeem code</strong>, or simply click the green <em>&ldquo;Redeem in Google Play Store&rdquo;</em> button above to open the redeem dialog with the code pre-filled.
        </p>
      </div>
    </section>
  );
}
