-- Migration: 20261106000000_create_testers_and_campaigns.sql
-- Description: Core tables and RLS policies for Seitz.co.za and The Seitz Testing Lab (/testers)

-- 1. Enable UUID extension if not enabled
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Table: testers
CREATE TABLE IF NOT EXISTS public.testers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    full_name TEXT NOT NULL,
    google_email TEXT NOT NULL UNIQUE,
    device_model TEXT NOT NULL,
    android_version TEXT NOT NULL,
    interested_categories TEXT[] DEFAULT '{}',
    commitment_accepted BOOLEAN NOT NULL DEFAULT FALSE,
    source TEXT DEFAULT 'website', -- 'visita_legacy', 'website', 'tiktok', 'facebook'
    status TEXT DEFAULT 'registered', -- 'registered', 'invited', 'active_testing', 'completed', 'blacklisted'
    notes TEXT
);

-- Index for quick lookup by email and status
CREATE INDEX IF NOT EXISTS idx_testers_google_email ON public.testers(google_email);
CREATE INDEX IF NOT EXISTS idx_testers_status ON public.testers(status);

-- 3. Table: testing_campaigns
CREATE TABLE IF NOT EXISTS public.testing_campaigns (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    app_name TEXT NOT NULL,
    package_name TEXT NOT NULL,
    track_status TEXT DEFAULT 'cohort_forming', -- 'cohort_forming', 'in_testing', 'completed'
    target_testers INT DEFAULT 15,
    active_testers_count INT DEFAULT 0,
    start_date DATE,
    end_date DATE,
    opt_in_url TEXT NOT NULL,
    reward_description TEXT NOT NULL
);

-- 4. Table: feedback_submissions
CREATE TABLE IF NOT EXISTS public.feedback_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    campaign_id UUID REFERENCES public.testing_campaigns(id) ON DELETE SET NULL,
    google_email TEXT NOT NULL,
    device_model TEXT NOT NULL,
    android_version TEXT NOT NULL,
    stability_rating TEXT NOT NULL,
    navigation_rating INT NOT NULL CHECK (navigation_rating BETWEEN 1 AND 5),
    bug_glitches_notes TEXT,
    most_useful_feature TEXT,
    feature_improvement_request TEXT,
    is_currently_installed BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE INDEX IF NOT EXISTS idx_feedback_campaign ON public.feedback_submissions(campaign_id);
CREATE INDEX IF NOT EXISTS idx_feedback_email ON public.feedback_submissions(google_email);

-- 5. Table: project_inquiries
CREATE TABLE IF NOT EXISTS public.project_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    full_name TEXT NOT NULL,
    business_email TEXT NOT NULL,
    preferred_platform TEXT NOT NULL DEFAULT 'direct', -- 'direct', 'upwork', 'fiverr', 'other'
    project_scope TEXT NOT NULL,
    budget_range TEXT,
    timeline TEXT,
    project_details TEXT NOT NULL,
    status TEXT DEFAULT 'new' -- 'new', 'reviewed', 'contacted', 'closed'
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.testers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testing_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feedback_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_inquiries ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Testers
-- Allow anonymous public submission for registration
CREATE POLICY "Public can register as a tester"
    ON public.testers
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Restrict tester records viewing to authenticated service role / admins
CREATE POLICY "Admin can view all testers"
    ON public.testers
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Admin can update testers"
    ON public.testers
    FOR UPDATE
    TO authenticated
    USING (true);

-- RLS Policies: Testing Campaigns
-- Allow public to see active campaigns
CREATE POLICY "Public can view testing campaigns"
    ON public.testing_campaigns
    FOR SELECT
    TO anon, authenticated
    USING (true);

-- Only admin can modify campaigns
CREATE POLICY "Admin can manage campaigns"
    ON public.testing_campaigns
    FOR ALL
    TO authenticated
    USING (true);

-- RLS Policies: Feedback Submissions
-- Allow public to submit 3-minute check-ins
CREATE POLICY "Public can submit feedback"
    ON public.feedback_submissions
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

CREATE POLICY "Admin can view all feedback"
    ON public.feedback_submissions
    FOR SELECT
    TO authenticated
    USING (true);

-- RLS Policies: Project Inquiries
-- Allow public to submit client inquiries
CREATE POLICY "Public can submit project inquiries"
    ON public.project_inquiries
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

CREATE POLICY "Admin can view and manage inquiries"
    ON public.project_inquiries
    FOR ALL
    TO authenticated
    USING (true);
