export type ProjectCategory = 
  | 'All' 
  | 'Civic & GovTech' 
  | 'FinTech & SaaS' 
  | 'AI & Media' 
  | 'Games & Simulations'
  | 'Developer Tools & Utilities';

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  description: string;
  websiteUrl?: string;
  githubUrl?: string;
  localPath?: string;
  logoUrl?: string;
  tags: string[];
  featured: boolean;
  highlights: string[];
  techStack: {
    frontend: string;
    backend: string;
    database: string;
    styling: string;
    specialized?: string;
  };
}

export type ApifyCategory = 
  | 'All'
  | 'Intelligence & News'
  | 'Market & Real Estate'
  | 'Media, RAG & LLM'
  | 'GovTech & Local Data';

export interface ApifyActorItem {
  id: string;
  name: string;
  slug: string;
  category: ApifyCategory;
  description: string;
  features: string[];
  tags: string[];
  localPath?: string;
}

export interface ServiceTierItem {
  id: string;
  tierNumber: string;
  title: string;
  focusArea: string;
  timeline: string;
  startingRateUSD: number;
  startingRateZAR: number;
  bestFor: string;
  deliverables: string[];
  popular?: boolean;
}
