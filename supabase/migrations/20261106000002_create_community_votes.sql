-- Migration: Create Community Votes Table
-- Stores user/tester votes for in-development apps to prioritize closed testing cohorts.

CREATE TABLE IF NOT EXISTS public.community_votes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    project_id TEXT NOT NULL,
    voter_email TEXT,
    ip_hash TEXT
);

-- Index for speedy aggregate counts per project
CREATE INDEX IF NOT EXISTS idx_community_votes_project_id ON public.community_votes (project_id);

-- Optional index for checking previous votes by email
CREATE INDEX IF NOT EXISTS idx_community_votes_email ON public.community_votes (voter_email);

-- Enable Row Level Security (RLS)
ALTER TABLE public.community_votes ENABLE ROW LEVEL SECURITY;

-- Allow public read access to vote tallies
CREATE POLICY "Allow public read access to community votes"
    ON public.community_votes
    FOR SELECT
    TO anon, authenticated
    USING (true);

-- Allow public insertion of votes
CREATE POLICY "Allow public insert of community votes"
    ON public.community_votes
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);
