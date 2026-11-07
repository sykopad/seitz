'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export function TesterFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Why do apps require 14 days of closed testing?',
      a: 'Under Google Play Console policy, personal developer accounts created after November 2023 must run a closed test with at least 12 opted-in testers continuously for at least 14 days before production access can be unlocked. This ensures every app undergoes real-world device testing and quality checks before public release.',
    },
    {
      q: 'Is this safe for my phone?',
      a: 'Yes, 100%. All test builds are distributed directly through the official Google Play Store infrastructure via Google Play Console closed testing tracks. You are not sideloading untrusted APK files or granting special developer permissions outside the Play Store.',
    },
    {
      q: 'Do I have to pay anything to download the test app?',
      a: 'No. Closed testing track builds are 100% free for all invited testers, even if the application will eventually be a paid download upon public store release.',
    },
    {
      q: 'How often do I have to open the app?',
      a: 'You do not need to use it 24/7. However, Google monitors genuine device engagement. You should open the app a few times a week, try out the navigation, and test primary buttons or workflows rather than letting it sit unopened in your app drawer.',
    },
    {
      q: 'What happens if I uninstall the app early?',
      a: 'Google Play tracks continuous opt-in days. If a tester uninstalls the build before the continuous 14 days conclude, that device drops off the continuous counter, which can delay the app’s launch review. Testers who uninstall early are ineligible for lifetime promo codes and future test cohorts.',
    },
    {
      q: 'How and when do I receive my free gift or promo code?',
      a: 'Once the 14-day continuous testing cycle concludes and basic feedback is submitted, your unique lifetime Google Play promo code or premium unlock is delivered directly to your registered Google email address.',
    },
    {
      q: 'Am I required to leave a public 5-star review on the Play Store?',
      a: 'No, absolutely not. Google Play closed testing feedback is private between you and the developer. In strict compliance with Google Play Developer policies, we do not solicit, buy, or require public store ratings or reviews. In fact, closed beta builds do not even have public rating pages on Google Play.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-white/70 leading-relaxed">
          Everything you need to know about joining the Seitz Testing Lab, Google Play closed tracks, and claiming your permanent rewards.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.q}
              className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition"
              >
                <span className="font-semibold text-sm sm:text-base text-white">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-emerald-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
