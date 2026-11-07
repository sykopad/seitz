export interface BadgeDefinition {
  id: string;
  name: string;
  category: 'verification' | 'testing' | 'community' | 'rewards';
  icon: string;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  description: string;
  criteria: string;
  points: number;
}

export interface UserBadgeProgress extends BadgeDefinition {
  isEarned: boolean;
  earnedAt?: string;
  progressPercent: number;
}

export const ALL_BADGES: BadgeDefinition[] = [
  {
    id: 'google_verified',
    name: 'Google Verified Tester',
    category: 'verification',
    icon: 'ShieldCheck',
    tier: 'gold',
    description: 'Signed in with verified Google Identity matching Play Console testing tracks.',
    criteria: 'Sign in with an active Google Account.',
    points: 100,
  },
  {
    id: 'fourteen_day_streak',
    name: '14-Day Cohort Survivor',
    category: 'testing',
    icon: 'Flame',
    tier: 'platinum',
    description: 'Maintained continuous 14-day installation across closed beta tracks without early uninstall.',
    criteria: 'Keep test apps installed for 14 continuous days.',
    points: 250,
  },
  {
    id: 'bug_hunter',
    name: 'Bug Bounty Scout',
    category: 'testing',
    icon: 'Sparkles',
    tier: 'silver',
    description: 'Submitted qualitative device performance metrics and crash telemetry via the 3-minute check-in.',
    criteria: 'Submit at least 1 closed beta feedback check-in.',
    points: 150,
  },
  {
    id: 'community_architect',
    name: 'Community Architect',
    category: 'community',
    icon: 'Vote',
    tier: 'bronze',
    description: 'Backed indie software and game concepts in the Community Prioritization Hub.',
    criteria: 'Cast at least 1 community vote.',
    points: 75,
  },
  {
    id: 'promo_collector',
    name: 'Vault Keyholder',
    category: 'rewards',
    icon: 'Key',
    tier: 'gold',
    description: 'Unlocked official 23-character Google Play lifetime promotional unlock codes.',
    criteria: 'Unlock at least 1 promotional license code.',
    points: 200,
  },
  {
    id: 'hardware_specialist',
    name: 'Hardware Specialist',
    category: 'testing',
    icon: 'Smartphone',
    tier: 'silver',
    description: 'Enrolled authentic physical hardware across Samsung, Xiaomi, Pixel, or Motorola.',
    criteria: 'Register physical device details in testing lab.',
    points: 100,
  },
  {
    id: 'suite_explorer',
    name: 'Portfolio Pioneer',
    category: 'community',
    icon: 'Compass',
    tier: 'platinum',
    description: 'Engaged across multiple Seitz applications (OmniRemote, Mzansi Midnight, Clean & Clean).',
    criteria: 'Enroll in 2 or more app testing cohorts.',
    points: 300,
  },
];

export function computeUserBadges(userStats: {
  isGoogleVerified: boolean;
  checkInCount: number;
  votesCount: number;
  promoCodesCount: number;
  enrolledAppsCount: number;
  deviceRegistered: boolean;
}): UserBadgeProgress[] {
  return ALL_BADGES.map((b) => {
    let isEarned = false;
    let progressPercent = 0;

    switch (b.id) {
      case 'google_verified':
        isEarned = userStats.isGoogleVerified;
        progressPercent = isEarned ? 100 : 0;
        break;
      case 'fourteen_day_streak':
        // Earned if user has at least 1 check-in or enrolled in testing
        isEarned = userStats.checkInCount > 0 || userStats.enrolledAppsCount > 0;
        progressPercent = isEarned ? 100 : 70;
        break;
      case 'bug_hunter':
        isEarned = userStats.checkInCount > 0;
        progressPercent = isEarned ? 100 : 30;
        break;
      case 'community_architect':
        isEarned = userStats.votesCount > 0;
        progressPercent = isEarned ? 100 : 25;
        break;
      case 'promo_collector':
        isEarned = userStats.promoCodesCount > 0;
        progressPercent = isEarned ? 100 : 50;
        break;
      case 'hardware_specialist':
        isEarned = userStats.deviceRegistered || userStats.checkInCount > 0;
        progressPercent = isEarned ? 100 : 50;
        break;
      case 'suite_explorer':
        isEarned = userStats.enrolledAppsCount >= 2;
        progressPercent = Math.min(100, (userStats.enrolledAppsCount / 2) * 100);
        break;
    }

    return {
      ...b,
      isEarned,
      progressPercent,
      earnedAt: isEarned ? new Date().toISOString() : undefined,
    };
  });
}
