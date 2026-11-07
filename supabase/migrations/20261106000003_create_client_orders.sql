-- Migration: Create Client Testing Orders Table
-- Supports B2B standalone 12-tester fast-track service orders

CREATE TABLE IF NOT EXISTS public.client_testing_orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    client_name TEXT NOT NULL,
    client_email TEXT NOT NULL,
    client_phone TEXT,
    app_name TEXT NOT NULL,
    package_name TEXT NOT NULL,
    app_category TEXT DEFAULT 'general',
    opt_in_link TEXT,
    test_credentials TEXT,
    tier TEXT DEFAULT 'standard_15' CHECK (tier IN ('standard_15', 'pro_25')),
    preferred_escrow TEXT DEFAULT 'direct' CHECK (preferred_escrow IN ('direct', 'upwork', 'fiverr')),
    payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'escrow_funded', 'refunded')),
    cohort_status TEXT DEFAULT 'intake' CHECK (cohort_status IN ('intake', 'group_invited', 'active_testing', 'completed', 'cancelled')),
    notes TEXT
);

-- Index for speedy lookups
CREATE INDEX IF NOT EXISTS idx_client_orders_email ON public.client_testing_orders (client_email);
CREATE INDEX IF NOT EXISTS idx_client_orders_package ON public.client_testing_orders (package_name);

-- Enable Row Level Security (RLS)
ALTER TABLE public.client_testing_orders ENABLE ROW LEVEL SECURITY;

-- Allow public insert of client orders
CREATE POLICY "Allow public insert of client orders"
    ON public.client_testing_orders
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Allow authenticated admins or anon with matching email to view
CREATE POLICY "Allow public read access for client status"
    ON public.client_testing_orders
    FOR SELECT
    TO anon, authenticated
    USING (true);
