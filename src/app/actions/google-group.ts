'use server';

import { createClient } from '@/lib/supabase/server';
import {
  addMemberToSeitzGroup,
  GroupEnrollmentResult,
  SEITZ_GOOGLE_GROUP,
  SEITZ_APPS_WITH_GOOGLE_GROUP_ACCESS,
} from '@/lib/google-groups/client';
import { sendTesterWelcomeEmail } from '@/lib/email';

export async function enrollUserInSeitzGoogleGroup(
  email: string,
  fullName?: string,
  deviceModel?: string
): Promise<GroupEnrollmentResult> {
  const cleanEmail = email.trim().toLowerCase();

  // 1. Programmatically enroll member in the Google Group service
  const result = await addMemberToSeitzGroup(cleanEmail, fullName);

  // 2. Persist or update tester status in Supabase
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (supabaseUrl && !supabaseUrl.includes('placeholder')) {
      const supabase = await createClient();

      // Check if user already exists
      const { data: existing } = await (supabase.from('testers') as any)
        .select('id, google_email')
        .eq('google_email', cleanEmail)
        .single();

      if (existing) {
        await (supabase.from('testers') as any)
          .update({
            updated_at: new Date().toISOString(),
          })
          .eq('id', existing.id);
      } else {
        await (supabase.from('testers') as any).insert({
          full_name: fullName || cleanEmail.split('@')[0],
          google_email: cleanEmail,
          device_model: deviceModel || 'Android Device',
          android_version: 'Android 10+',
          commitment_accepted: true,
          source: 'google_sso_group_auto_enroll',
          status: 'registered',
        });
      }
    }
  } catch (err: unknown) {
    console.error('[Supabase Tester Auto-Enroll Error]:', err);
  }

  // 3. Dispatch the Multi-App All-Access Welcome Email via Resend
  try {
    await sendTesterWelcomeEmail({
      fullName: fullName || cleanEmail.split('@')[0],
      googleEmail: cleanEmail,
      deviceModel: deviceModel || 'Android Device',
    });
  } catch (err: unknown) {
    console.error('[Welcome Email Dispatch Error]:', err);
  }

  return result;
}

export async function getSeitzGroupApps() {
  return {
    group: SEITZ_GOOGLE_GROUP,
    apps: SEITZ_APPS_WITH_GOOGLE_GROUP_ACCESS,
  };
}
