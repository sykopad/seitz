'use server';

import { createClient } from '@/lib/supabase/server';
import { sendDeletionRequestNotification } from '@/lib/email';

export interface DeletionRequestData {
  email: string;
  appName: string;
  scope: 'full_account' | 'testing_enrollment' | 'cleanup_data' | 'other';
  notes?: string;
  confirmation: boolean;
}

export interface DeletionResponse {
  success: boolean;
  message: string;
  referenceId?: string;
}

export async function submitDeletionRequest(data: DeletionRequestData): Promise<DeletionResponse> {
  try {
    if (!data.email || !data.appName || !data.confirmation) {
      return {
        success: false,
        message: 'Please provide your account email, select an application, and confirm your request.',
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: 'Please provide a valid email address.',
      };
    }

    const referenceId = `DEL-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // Dispatch email notification to admin / information officer
    await sendDeletionRequestNotification({
      email: data.email.trim().toLowerCase(),
      appName: data.appName,
      scope: data.scope,
      notes: data.notes?.trim() || null,
    });

    return {
      success: true,
      referenceId,
      message: `Your deletion request has been recorded under Reference #${referenceId}. Your account and associated data will be verified and permanently purged within 30 days per Google Play and POPIA regulations.`,
    };
  } catch (err: unknown) {
    console.error('Data deletion submission error:', err);
    return {
      success: false,
      message: 'Unable to submit deletion request at this moment. You can also email byseitz.agency@gmail.com directly with subject [DATA DELETION REQUEST].',
    };
  }
}
