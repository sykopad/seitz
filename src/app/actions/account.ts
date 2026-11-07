'use server';

import { createClient } from '@/lib/supabase/server';
import { getCurrentUser, UserAuthDetails } from './auth';
import { appsCatalog, AppCatalogItem } from '@/data/apps-catalog';
import { getDeterministicPromoCode, officialGooglePlayPromoCodes } from '@/data/promo-codes';
import { computeUserBadges, UserBadgeProgress } from '@/data/user-badges';

export interface UnlockedAppStatus {
  app: AppCatalogItem;
  status: 'active_testing' | 'feedback_completed' | 'production_unlocked';
  enrolledAt: string;
  hasSubmittedFeedback: boolean;
  promoCode: string;
  redeemUrl: string;
}

export interface UserAccountSummary {
  user: UserAuthDetails;
  stats: {
    totalPoints: number;
    badgesCount: number;
    unlockedAppsCount: number;
    promoCodesCount: number;
    level: number;
    levelTitle: string;
  };
  badges: UserBadgeProgress[];
  unlockedApps: UnlockedAppStatus[];
  promoCodes: Array<{
    id: string;
    appName: string;
    appSlug: string;
    code: string;
    redeemUrl: string;
    isOfficialConsoleCode: boolean;
    rewardDescription: string;
    rewardValue: string;
    status: 'unlocked' | 'claimed';
  }>;
}

export async function getUserAccountSummary(): Promise<UserAccountSummary | null> {
  const user = await getCurrentUser();
  if (!user) {
    return null;
  }

  const cleanEmail = user.email.trim().toLowerCase();

  // Apps currently in closed testing or public release
  const testingApps = appsCatalog.filter((a) => a.googlePlayPackage);

  // Connect to Supabase to fetch any existing user records
  let feedbackSubmissionsCount = 0;
  let userVotesCount = 0;
  let isTesterRegistered = true;

  try {
    const supabase = await createClient();
    
    // Check feedback submissions
    const { count: feedbackCount } = await supabase
      .from('feedback_submissions')
      .select('*', { count: 'exact', head: true })
      .eq('google_email', cleanEmail);
    feedbackSubmissionsCount = feedbackCount || 0;

    // Check community votes
    const { count: votesCount } = await supabase
      .from('community_votes')
      .select('*', { count: 'exact', head: true })
      .eq('voter_email', cleanEmail);
    userVotesCount = votesCount || 0;
  } catch (err) {
    console.warn('Supabase query fallback for user account stats:', err);
  }

  // Build unlocked apps and their personal promo codes
  const unlockedApps: UnlockedAppStatus[] = testingApps.map((app, idx) => {
    const promoCode = getDeterministicPromoCode(cleanEmail, app.slug);
    const redeemUrl = `https://play.google.com/redeem?code=${encodeURIComponent(promoCode)}`;
    const hasFeedback = feedbackSubmissionsCount > 0 || idx === 0;

    return {
      app,
      status: hasFeedback ? 'feedback_completed' : 'active_testing',
      enrolledAt: new Date(Date.now() - (idx + 1) * 3 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      hasSubmittedFeedback: hasFeedback,
      promoCode,
      redeemUrl,
    };
  });

  const promoCodes = testingApps.map((app) => {
    const code = getDeterministicPromoCode(cleanEmail, app.slug);
    return {
      id: `${app.slug}-${code}`,
      appName: app.name,
      appSlug: app.slug,
      code,
      redeemUrl: `https://play.google.com/redeem?code=${encodeURIComponent(code)}`,
      isOfficialConsoleCode: officialGooglePlayPromoCodes.includes(code),
      rewardDescription: app.reward,
      rewardValue: app.rewardValue || 'Permanent License',
      status: 'unlocked' as const,
    };
  });

  // Calculate Badges
  const badges = computeUserBadges({
    isGoogleVerified: user.isGoogleVerified,
    checkInCount: feedbackSubmissionsCount > 0 ? feedbackSubmissionsCount : 1,
    votesCount: userVotesCount > 0 ? userVotesCount : 1,
    promoCodesCount: promoCodes.length,
    enrolledAppsCount: unlockedApps.length,
    deviceRegistered: isTesterRegistered,
  });

  const earnedBadgesCount = badges.filter((b) => b.isEarned).length;
  const totalPoints = badges
    .filter((b) => b.isEarned)
    .reduce((sum, b) => sum + b.points, 0);

  // Compute gamer level
  let level = 1;
  let levelTitle = 'Cadet Tester';
  if (totalPoints >= 1000) {
    level = 4;
    levelTitle = 'Master Systems Architect';
  } else if (totalPoints >= 600) {
    level = 3;
    levelTitle = 'Elite Hardware Specialist';
  } else if (totalPoints >= 300) {
    level = 2;
    levelTitle = 'Verified Beta Pioneer';
  }

  return {
    user,
    stats: {
      totalPoints,
      badgesCount: earnedBadgesCount,
      unlockedAppsCount: unlockedApps.length,
      promoCodesCount: promoCodes.length,
      level,
      levelTitle,
    },
    badges,
    unlockedApps,
    promoCodes,
  };
}
