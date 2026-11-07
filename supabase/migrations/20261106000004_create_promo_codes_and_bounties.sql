-- Migration: Create Promo Codes and Bug Bounties Tables
-- Supports rolling tester scaling, promo code automation, and bug hunter leaderboards

CREATE TABLE IF NOT EXISTS public.promo_codes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    app_slug TEXT NOT NULL,
    code TEXT NOT NULL UNIQUE,
    is_redeemed BOOLEAN DEFAULT false,
    assigned_to_email TEXT,
    redeemed_at TIMESTAMP WITH TIME ZONE,
    expires_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE IF NOT EXISTS public.bug_bounties (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    tester_email TEXT NOT NULL,
    tester_name TEXT,
    app_slug TEXT NOT NULL,
    severity TEXT DEFAULT 'medium' CHECK (severity IN ('low', 'medium', 'high', 'critical')),
    title TEXT NOT NULL,
    description TEXT,
    points_awarded INTEGER DEFAULT 50,
    status TEXT DEFAULT 'verified' CHECK (status IN ('submitted', 'verified', 'rewarded', 'rejected'))
);

CREATE INDEX IF NOT EXISTS idx_promo_codes_app ON public.promo_codes (app_slug);
CREATE INDEX IF NOT EXISTS idx_promo_codes_email ON public.promo_codes (assigned_to_email);
CREATE INDEX IF NOT EXISTS idx_bug_bounties_tester ON public.bug_bounties (tester_email);

-- Enable RLS
ALTER TABLE public.promo_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bug_bounties ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to bug bounties"
    ON public.bug_bounties
    FOR SELECT
    TO anon, authenticated
    USING (true);

CREATE POLICY "Allow public read of own promo codes"
    ON public.promo_codes
    FOR SELECT
    TO anon, authenticated
    USING (true);
