'use server';

import { createClient } from '@/lib/supabase/server';
import { sendInquiryNotification } from '@/lib/email';

export interface InquiryFormData {
  fullName: string;
  businessEmail: string;
  preferredPlatform: 'direct' | 'upwork' | 'fiverr' | 'other';
  projectScope: string;
  budgetRange?: string;
  timeline?: string;
  projectDetails: string;
}

export interface InquiryResponse {
  success: boolean;
  message: string;
  error?: string;
}

export async function submitInquiry(data: InquiryFormData): Promise<InquiryResponse> {
  try {
    if (!data.fullName || !data.businessEmail || !data.projectDetails || !data.projectScope) {
      return {
        success: false,
        message: 'Please complete all required fields.',
        error: 'Missing required fields',
      };
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.businessEmail)) {
      return {
        success: false,
        message: 'Please provide a valid email address.',
        error: 'Invalid email address',
      };
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    // Check if we are in local development with placeholder Supabase URL
    if (!supabaseUrl || supabaseUrl.includes('placeholder-project')) {
      console.log('[Dev Inquiry Recorded Locally]:', data);
      return {
        success: true,
        message: 'Thank you! Your project request has been logged. I will review your requirements and respond within 24 hours.',
      };
    }

    const supabase = await createClient();

    const { error } = await (supabase.from('project_inquiries') as any).insert({
      full_name: data.fullName.trim(),
      business_email: data.businessEmail.trim().toLowerCase(),
      preferred_platform: data.preferredPlatform || 'direct',
      project_scope: data.projectScope,
      budget_range: data.budgetRange || null,
      timeline: data.timeline || null,
      project_details: data.projectDetails.trim(),
      status: 'new',
    });

    if (error) {
      console.error('Supabase inquiry insert error:', error);
      return {
        success: false,
        message: 'Could not record inquiry directly to database. Please email byseitz.agency@gmail.com directly.',
        error: error.message,
      };
    }

    // Dispatch notification to admin via Resend
    await sendInquiryNotification({
      fullName: data.fullName.trim(),
      businessEmail: data.businessEmail.trim().toLowerCase(),
      preferredPlatform: data.preferredPlatform,
      projectScope: data.projectScope,
      budgetRange: data.budgetRange,
      timeline: data.timeline,
      projectDetails: data.projectDetails.trim(),
    });

    return {
      success: true,
      message: 'Thank you! Your project request has been submitted. I will review your requirements and respond within 24 hours.',
    };
  } catch (err: unknown) {
    console.error('Unexpected inquiry error:', err);
    return {
      success: false,
      message: 'An unexpected error occurred. Please reach out to byseitz.agency@gmail.com.',
      error: err instanceof Error ? err.message : 'Unknown error',
    };
  }
}
