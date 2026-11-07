export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type TesterStatus =
  | 'registered'
  | 'invited'
  | 'active_testing'
  | 'completed'
  | 'blacklisted';

export type CampaignStatus =
  | 'cohort_forming'
  | 'in_testing'
  | 'completed';

export interface Tester {
  id: string;
  created_at: string;
  full_name: string;
  google_email: string;
  device_model: string;
  android_version: string;
  interested_categories: string[];
  commitment_accepted: boolean;
  source: 'website' | 'visita_legacy' | 'tiktok' | 'facebook' | string;
  status: TesterStatus;
  notes?: string | null;
}

export interface TestingCampaign {
  id: string;
  created_at: string;
  app_name: string;
  package_name: string;
  track_status: CampaignStatus;
  target_testers: number;
  active_testers_count: number;
  start_date?: string | null;
  end_date?: string | null;
  opt_in_url: string;
  reward_description: string;
}

export interface FeedbackSubmission {
  id: string;
  created_at: string;
  campaign_id?: string | null;
  google_email: string;
  device_model: string;
  android_version: string;
  stability_rating: string;
  navigation_rating: number;
  bug_glitches_notes?: string | null;
  most_useful_feature?: string | null;
  feature_improvement_request?: string | null;
  is_currently_installed: boolean;
}

export interface CommunityVote {
  id: string;
  created_at: string;
  project_id: string;
  voter_email?: string | null;
  ip_hash?: string | null;
}

export interface ClientTestingOrder {
  id: string;
  created_at: string;
  client_name: string;
  client_email: string;
  client_phone?: string | null;
  app_name: string;
  package_name: string;
  app_category?: string | null;
  opt_in_link?: string | null;
  test_credentials?: string | null;
  tier: 'standard_15' | 'pro_25';
  preferred_escrow: 'direct' | 'upwork' | 'fiverr';
  payment_status: 'pending' | 'paid' | 'escrow_funded' | 'refunded';
  cohort_status: 'intake' | 'group_invited' | 'active_testing' | 'completed' | 'cancelled';
  notes?: string | null;
}

export interface PromoCode {
  id: string;
  created_at: string;
  app_slug: string;
  code: string;
  is_redeemed: boolean;
  assigned_to_email?: string | null;
  redeemed_at?: string | null;
  expires_at?: string | null;
}

export interface BugBounty {
  id: string;
  created_at: string;
  tester_email: string;
  tester_name?: string | null;
  app_slug: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description?: string | null;
  points_awarded: number;
  status: 'submitted' | 'verified' | 'rewarded' | 'rejected';
}

export interface ProjectInquiry {
  id: string;
  created_at: string;
  full_name: string;
  business_email: string;
  preferred_platform: 'direct' | 'upwork' | 'fiverr' | 'other';
  project_scope: string;
  budget_range?: string | null;
  timeline?: string | null;
  project_details: string;
  status: 'new' | 'reviewed' | 'contacted' | 'closed';
}

export type Database = {
  public: {
    Tables: {
      testers: {
        Row: Tester;
        Insert: Omit<Tester, 'id' | 'created_at'> & { id?: string; created_at?: string };
        Update: Partial<Tester>;
        Relationships: [];
      };
      testing_campaigns: {
        Row: TestingCampaign;
        Insert: Omit<TestingCampaign, 'id' | 'created_at'> & { id?: string; created_at?: string };
        Update: Partial<TestingCampaign>;
        Relationships: [];
      };
      feedback_submissions: {
        Row: FeedbackSubmission;
        Insert: Omit<FeedbackSubmission, 'id' | 'created_at'> & { id?: string; created_at?: string };
        Update: Partial<FeedbackSubmission>;
        Relationships: [];
      };
      project_inquiries: {
        Row: ProjectInquiry;
        Insert: Omit<ProjectInquiry, 'id' | 'created_at'> & { id?: string; created_at?: string };
        Update: Partial<ProjectInquiry>;
        Relationships: [];
      };
      community_votes: {
        Row: CommunityVote;
        Insert: Omit<CommunityVote, 'id' | 'created_at'> & { id?: string; created_at?: string };
        Update: Partial<CommunityVote>;
        Relationships: [];
      };
      client_testing_orders: {
        Row: ClientTestingOrder;
        Insert: Omit<ClientTestingOrder, 'id' | 'created_at'> & { id?: string; created_at?: string };
        Update: Partial<ClientTestingOrder>;
        Relationships: [];
      };
      promo_codes: {
        Row: PromoCode;
        Insert: Omit<PromoCode, 'id' | 'created_at'> & { id?: string; created_at?: string };
        Update: Partial<PromoCode>;
        Relationships: [];
      };
      bug_bounties: {
        Row: BugBounty;
        Insert: Omit<BugBounty, 'id' | 'created_at'> & { id?: string; created_at?: string };
        Update: Partial<BugBounty>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
