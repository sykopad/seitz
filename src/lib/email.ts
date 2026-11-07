import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.RESEND_FROM_EMAIL || 'Seitz Testing Lab <onboarding@resend.dev>';
const adminEmail = process.env.CONTACT_NOTIFICATION_EMAIL || 'byseitz.agency@gmail.com';

export const resend = resendApiKey && !resendApiKey.includes('placeholder')
  ? new Resend(resendApiKey)
  : null;

export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Dispatches an email notification to admin when a new project inquiry is submitted
 */
export async function sendInquiryNotification(inquiry: {
  fullName: string;
  businessEmail: string;
  preferredPlatform: string;
  projectScope: string;
  budgetRange?: string | null;
  timeline?: string | null;
  projectDetails: string;
}): Promise<EmailResult> {
  if (!resend) {
    console.log('[Dev Resend Mock] Admin Inquiry Notification:', inquiry);
    return { success: true, messageId: 'mock-inquiry-email-id' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      replyTo: inquiry.businessEmail,
      subject: `[New Inquiry] ${inquiry.fullName} - ${inquiry.projectScope}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #090a0f; color: #f3f4f6; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
          <h2 style="color: #38bdf8; margin-top: 0;">New Project Scoping Inquiry</h2>
          <p style="color: #9ca3af; font-size: 14px;">A new freelance request was submitted through <strong>seitz.co.za</strong>.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #9ca3af; width: 140px;">Client Name:</td>
              <td style="padding: 8px 0; color: #ffffff; font-weight: 600;">${inquiry.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Business Email:</td>
              <td style="padding: 8px 0; color: #38bdf8;"><a href="mailto:${inquiry.businessEmail}" style="color: #38bdf8;">${inquiry.businessEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Preferred Platform:</td>
              <td style="padding: 8px 0; color: #ffffff; text-transform: capitalize;">${inquiry.preferredPlatform}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Project Scope:</td>
              <td style="padding: 8px 0; color: #ffffff;">${inquiry.projectScope}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Budget:</td>
              <td style="padding: 8px 0; color: #ffffff;">${inquiry.budgetRange || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Timeline:</td>
              <td style="padding: 8px 0; color: #ffffff;">${inquiry.timeline || 'Not specified'}</td>
            </tr>
          </table>

          <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); margin-top: 16px;">
            <div style="color: #9ca3af; font-size: 12px; text-transform: uppercase; margin-bottom: 8px;">Project Requirements:</div>
            <p style="white-space: pre-wrap; font-size: 14px; line-height: 1.6; margin: 0; color: #e5e7eb;">${inquiry.projectDetails}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend inquiry email error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, messageId: data?.id };
  } catch (err: unknown) {
    console.error('Unexpected email dispatch error:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

/**
 * Sends a welcome email to a newly enrolled tester with Google Group access links
 * and direct closed-testing opt-in links for all 4 Google Play apps.
 */
export async function sendTesterWelcomeEmail(tester: {
  fullName: string;
  googleEmail: string;
  deviceModel: string;
}): Promise<EmailResult> {
  if (!resend) {
    console.log('[Dev Resend Mock] Tester All-Access Pass Email to:', tester.googleEmail);
    return { success: true, messageId: 'mock-tester-welcome-id' };
  }

  try {
    const firstName = tester.fullName.split(' ')[0] || 'Tester';
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: tester.googleEmail,
      subject: 'Seitz Testing Lab — Google Play All-Access Pass (4 Apps)',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 620px; margin: 0 auto; padding: 28px 20px; background: #ffffff; color: #1e293b; border-radius: 16px; border: 1px solid #e2e8f0;">
          <div style="border-bottom: 2px solid #10b981; padding-bottom: 16px; margin-bottom: 20px;">
            <span style="font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #047857; font-weight: bold; background: #ecfdf5; padding: 4px 10px; border-radius: 6px; border: 1px solid #a7f3d0;">
              Google Play Closed Beta • All-Access Pass
            </span>
            <h1 style="color: #0f172a; margin: 12px 0 4px 0; font-size: 22px;">Welcome to the Seitz Testing Lab, ${firstName}!</h1>
            <p style="color: #64748b; font-size: 13px; margin: 0;">Registered Google Email: <strong>${tester.googleEmail}</strong></p>
          </div>

          <p style="color: #334155; font-size: 14px; line-height: 1.6;">
            Your single email registration connects you to our centralized testing group: <strong style="color: #047857;">seitz@googlegroups.com</strong>. Because this group is linked across all our apps on Google Play Console, <strong>you have instant access to test all 4 live apps</strong>!
          </p>

          <!-- Group Confirmation Box -->
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 18px; border-radius: 12px; margin: 20px 0;">
            <div style="display: flex; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 14px; font-weight: bold; color: #166534;">Step 1: Confirm Google Group Membership</span>
            </div>
            <p style="font-size: 13px; color: #15803d; margin: 0 0 12px 0; line-height: 1.5;">
              Tap below to confirm you are in <strong>seitz@googlegroups.com</strong> (1-click auto-join):
            </p>
            <a href="https://groups.google.com/g/seitz" target="_blank" style="display: inline-block; background: #10b981; color: #ffffff; font-weight: bold; font-size: 13px; padding: 10px 18px; border-radius: 8px; text-decoration: none;">
              Open Seitz Google Group (1-Click Join) →
            </a>
          </div>

          <!-- Apps Grid -->
          <h3 style="color: #0f172a; font-size: 16px; margin: 24px 0 12px 0;">Step 2: Tap "Become a Tester" on Each App</h3>
          <p style="font-size: 13px; color: #64748b; margin-bottom: 16px;">
            Tap the web opt-in links below from your Android device or browser to enroll in the closed track:
          </p>

          <table style="width: 100%; border-collapse: separate; border-spacing: 0 10px;">
            <!-- OmniRemote -->
            <tr>
              <td style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px;">
                <div style="font-weight: bold; color: #0f172a; font-size: 14px;">1. OmniRemote (Universal IR & WiFi Remote)</div>
                <div style="font-size: 12px; color: #64748b; margin: 4px 0 10px 0;">Samsung, LG, Sony, Roku & Android TV hardware protocol control.</div>
                <div>
                  <a href="https://play.google.com/apps/testing/co.za.omniremote.app" target="_blank" style="display: inline-block; background: #0284c7; color: #ffffff; font-size: 11px; font-weight: bold; padding: 6px 12px; border-radius: 6px; text-decoration: none; margin-right: 8px;">
                    Opt-In on Play Store →
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=co.za.omniremote.app" target="_blank" style="display: inline-block; background: #e2e8f0; color: #334155; font-size: 11px; font-weight: 600; padding: 6px 12px; border-radius: 6px; text-decoration: none;">
                    Direct Store Page
                  </a>
                </div>
              </td>
            </tr>

            <!-- Would You Rather -->
            <tr>
              <td style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px;">
                <div style="font-weight: bold; color: #0f172a; font-size: 14px;">2. Would You Rather (Dilemmas & Party Game)</div>
                <div style="font-size: 12px; color: #64748b; margin: 4px 0 10px 0;">500+ philosophical, absurd, and party dilemma cards with local multiplayer.</div>
                <div>
                  <a href="https://play.google.com/apps/testing/co.za.wouldyourather.app" target="_blank" style="display: inline-block; background: #0284c7; color: #ffffff; font-size: 11px; font-weight: bold; padding: 6px 12px; border-radius: 6px; text-decoration: none; margin-right: 8px;">
                    Opt-In on Play Store →
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=co.za.wouldyourather.app" target="_blank" style="display: inline-block; background: #e2e8f0; color: #334155; font-size: 11px; font-weight: 600; padding: 6px 12px; border-radius: 6px; text-decoration: none;">
                    Direct Store Page
                  </a>
                </div>
              </td>
            </tr>

            <!-- Mzansi Midnight -->
            <tr>
              <td style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px;">
                <div style="font-weight: bold; color: #0f172a; font-size: 14px;">3. Mzansi Midnight (SA True Crime & Paranormal)</div>
                <div style="font-size: 12px; color: #64748b; margin: 4px 0 10px 0;">Audio-narrated investigative South African mysteries and folklore stories.</div>
                <div>
                  <a href="https://play.google.com/apps/testing/za.co.mzansimidnight.app" target="_blank" style="display: inline-block; background: #0284c7; color: #ffffff; font-size: 11px; font-weight: bold; padding: 6px 12px; border-radius: 6px; text-decoration: none; margin-right: 8px;">
                    Opt-In on Play Store →
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=za.co.mzansimidnight.app" target="_blank" style="display: inline-block; background: #e2e8f0; color: #334155; font-size: 11px; font-weight: 600; padding: 6px 12px; border-radius: 6px; text-decoration: none;">
                    Direct Store Page
                  </a>
                </div>
              </td>
            </tr>

            <!-- Clean & Clean -->
            <tr>
              <td style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px;">
                <div style="font-weight: bold; color: #0f172a; font-size: 14px;">4. Clean and Clean (Cleaning Services Booking)</div>
                <div style="font-size: 12px; color: #64748b; margin: 4px 0 10px 0;">Real-time booking, vetted cleaners, and instant appointment scheduling.</div>
                <div>
                  <a href="https://play.google.com/apps/testing/za.co.cleanandclean.app" target="_blank" style="display: inline-block; background: #0284c7; color: #ffffff; font-size: 11px; font-weight: bold; padding: 6px 12px; border-radius: 6px; text-decoration: none; margin-right: 8px;">
                    Opt-In on Play Store →
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=za.co.cleanandclean.app" target="_blank" style="display: inline-block; background: #e2e8f0; color: #334155; font-size: 11px; font-weight: 600; padding: 6px 12px; border-radius: 6px; text-decoration: none;">
                    Direct Store Page
                  </a>
                </div>
              </td>
            </tr>
          </table>

          <!-- 14-Day Instructions -->
          <div style="background: #f1f5f9; padding: 16px; border-radius: 10px; margin: 24px 0 16px 0;">
            <h4 style="color: #0f172a; margin: 0 0 8px 0; font-size: 13px;">How to Claim Your Lifetime Promo Codes:</h4>
            <ol style="margin: 0; padding-left: 20px; font-size: 12px; color: #475569; line-height: 1.6;">
              <li>Install test builds via Google Play and keep them installed for 14 continuous days.</li>
              <li>Log in to your Member Portal at <a href="https://seitz.co.za/account" style="color: #0284c7;">seitz.co.za/account</a> to view your active retention and badges.</li>
              <li>Your 23-character Google Play promo codes unlock in your account upon milestone completion!</li>
            </ol>
          </div>

          <p style="font-size: 12px; color: #94a3b8; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 16px;">
            Warm regards,<br>
            <strong>Muhammed Faiz Seitz</strong><br>
            Developer at <a href="https://seitz.co.za" style="color: #0284c7;">Seitz.co.za</a> | Founder, Seitz Testing Lab
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend tester welcome email error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, messageId: data?.id };
  } catch (err: unknown) {
    console.error('Unexpected welcome email dispatch error:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

/**
 * Sends a confirmation email to a tester after submitting the 3-minute check-in form
 */
export async function sendFeedbackConfirmationEmail(feedback: {
  googleEmail: string;
  deviceModel: string;
  stabilityRating: string;
}): Promise<EmailResult> {
  if (!resend) {
    console.log('[Dev Resend Mock] Feedback Autoresponder to:', feedback.googleEmail);
    return { success: true, messageId: 'mock-feedback-email-id' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: feedback.googleEmail,
      subject: 'Feedback received — you are locked in for lifetime access',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #090a0f; color: #f3f4f6; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
          <h2 style="color: #10b981; margin-top: 0;">Feedback Logged — Thank You!</h2>
          <p style="color: #e5e7eb; font-size: 14px; line-height: 1.6;">
            Thanks for taking a few minutes to submit your check-in for your <strong>${feedback.deviceModel}</strong>. Your feedback is logged and goes directly into our development notes as we polish the build.
          </p>

          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 16px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #38bdf8; margin-top: 0; margin-bottom: 8px;">To Guarantee Your Free Lifetime Access:</h4>
            <ul style="font-size: 13px; color: #d1d5db; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li><strong>Keep the app installed:</strong> Google Play requires continuous opt-in across the full 14-day window. Please leave the build installed until the cohort completes.</li>
              <li><strong>Open it occasionally:</strong> Opening the app every few days registers genuine device engagement on our Play Console dashboard.</li>
              <li><strong>Spotted another glitch?</strong> Reply directly to this email with any additional screen bugs or observations.</li>
            </ul>
          </div>

          <p style="color: #9ca3af; font-size: 13px; line-height: 1.6;">
            Once the 14-day cohort wraps up and we submit the production build to Google, your unique lifetime unlock code will be dispatched straight to this inbox.
          </p>

          <p style="font-size: 13px; color: #9ca3af; margin-top: 24px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 16px;">
            Best regards,<br>
            <strong>Muhammed Faiz Seitz</strong><br>
            Seitz Testing Lab | <a href="https://seitz.co.za" style="color: #38bdf8;">Seitz.co.za</a>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend feedback confirmation email error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, messageId: data?.id };
  } catch (err: unknown) {
    console.error('Unexpected feedback email dispatch error:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

/**
 * Dispatches an email notification to admin when a new client signs up for the 12-tester fast-track service
 */
export async function sendClientOrderNotificationEmail(order: {
  clientName: string;
  clientEmail: string;
  clientPhone?: string | null;
  appName: string;
  packageName: string;
  tier: string;
  preferredEscrow: string;
  optInLink?: string | null;
  testCredentials?: string | null;
  notes?: string | null;
}): Promise<EmailResult> {
  if (!resend) {
    console.log('[Dev Resend Mock] Client Testing Order Received:', order);
    return { success: true, messageId: 'mock-client-order-id' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      replyTo: order.clientEmail,
      subject: `[New 12-Tester Order] ${order.clientName} - ${order.appName} (${order.tier})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #090a0f; color: #f3f4f6; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
          <h2 style="color: #10b981; margin-top: 0;">🚀 New Google Play 12-Tester Order</h2>
          <p style="color: #9ca3af; font-size: 14px;">A client has ordered the 14-day closed testing fast-track service through <strong>seitz.co.za</strong>.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #9ca3af; width: 140px;">Client:</td>
              <td style="padding: 8px 0; color: #ffffff; font-weight: 600;">${order.clientName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Email:</td>
              <td style="padding: 8px 0; color: #38bdf8;"><a href="mailto:${order.clientEmail}" style="color: #38bdf8;">${order.clientEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Phone/WhatsApp:</td>
              <td style="padding: 8px 0; color: #ffffff;">${order.clientPhone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">App Name:</td>
              <td style="padding: 8px 0; color: #10b981; font-weight: bold;">${order.appName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Package Name:</td>
              <td style="padding: 8px 0; color: #ffffff; font-family: monospace;">${order.packageName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Tier:</td>
              <td style="padding: 8px 0; color: #f59e0b; font-weight: 600;">${order.tier === 'pro_25' ? 'Pro 25-Device Cohort ($499)' : 'Standard 15-Device Cohort ($299)'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Preferred Escrow:</td>
              <td style="padding: 8px 0; color: #ffffff; text-transform: capitalize;">${order.preferredEscrow}</td>
            </tr>
            ${order.optInLink ? `
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Opt-in / Track Link:</td>
              <td style="padding: 8px 0; color: #38bdf8;"><a href="${order.optInLink}" style="color: #38bdf8;">${order.optInLink}</a></td>
            </tr>
            ` : ''}
          </table>

          ${order.testCredentials ? `
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 14px; border-radius: 8px; margin: 16px 0;">
            <strong style="color: #e2e8f0; font-size: 13px;">Test Credentials:</strong>
            <pre style="color: #94a3b8; font-size: 12px; margin: 8px 0 0; white-space: pre-wrap;">${order.testCredentials}</pre>
          </div>
          ` : ''}

          ${order.notes ? `
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 14px; border-radius: 8px; margin: 16px 0;">
            <strong style="color: #e2e8f0; font-size: 13px;">Client Notes:</strong>
            <p style="color: #94a3b8; font-size: 13px; margin: 8px 0 0;">${order.notes}</p>
          </div>
          ` : ''}

          <p style="font-size: 13px; color: #9ca3af; margin-top: 24px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 16px;">
            Next Step: Reply with Google Group sync instructions (<code>seitz@googlegroups.com</code>) or send invoice/escrow contract.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend client order admin email error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, messageId: data?.id };
  } catch (err: unknown) {
    console.error('Unexpected client order email dispatch error:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

/**
 * Dispatches onboarding instructions email to client
 */
export async function sendClientOrderConfirmationEmail(order: {
  clientName: string;
  clientEmail: string;
  appName: string;
  packageName: string;
  tier: string;
  preferredEscrow: string;
}): Promise<EmailResult> {
  if (!resend) {
    console.log('[Dev Resend Mock] Client Order Confirmation to Client:', order);
    return { success: true, messageId: 'mock-client-conf-id' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: order.clientEmail,
      subject: `Order Confirmed: Google Play Closed Testing for ${order.appName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #090a0f; color: #f3f4f6; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
          <h2 style="color: #10b981; margin-top: 0;">Cohort Onboarding Initialized</h2>
          <p style="color: #e2e8f0; font-size: 15px;">Hello <strong>${order.clientName}</strong>,</p>
          <p style="color: #9ca3af; font-size: 14px; line-height: 1.6;">
            Thank you for choosing the Seitz Testing Lab to fulfill Google Play's 12-tester, 14-day continuous closed testing requirement for <strong>${order.appName}</strong> (<code>${order.packageName}</code>).
          </p>

          <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); padding: 18px; border-radius: 10px; margin: 20px 0;">
            <h4 style="color: #10b981; margin-top: 0; margin-bottom: 8px;">Next Step: Add Our Master Tester Group</h4>
            <p style="font-size: 13px; color: #d1d5db; line-height: 1.6; margin: 0 0 10px;">
              To grant our 15 Android testers access in one single click without managing individual emails:
            </p>
            <ol style="font-size: 13px; color: #d1d5db; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li>Log in to your <strong>Google Play Console</strong>.</li>
              <li>Go to <strong>Testing &gt; Closed testing</strong> &gt; Select your track.</li>
              <li>Under <strong>Testers</strong>, choose <strong>Google Groups</strong>.</li>
              <li>Add our master group email: <code style="color: #38bdf8; background: #000; padding: 2px 6px; border-radius: 4px;">seitz@googlegroups.com</code></li>
              <li>Save changes and copy the <strong>Opt-in link</strong> (starts with <em>play.google.com/apps/testing/...</em>).</li>
            </ol>
          </div>

          <p style="color: #9ca3af; font-size: 13px; line-height: 1.6;">
            We will verify your track setup, deploy devices, and begin the 14-day continuous retention window. At the end of the cohort, you will receive our complete bug report and copy-paste ready answers for the Google Play Production Access Questionnaire.
          </p>

          <p style="font-size: 13px; color: #9ca3af; margin-top: 24px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 16px;">
            Best regards,<br>
            <strong>Muhammed Faiz Seitz</strong><br>
            Founder & Lead Engineer | <a href="https://seitz.co.za" style="color: #38bdf8;">Seitz.co.za</a><br>
            WhatsApp / Direct: byseitz.agency@gmail.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend client confirmation email error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, messageId: data?.id };
  } catch (err: unknown) {
    console.error('Unexpected client confirmation dispatch error:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

/**
 * Dispatches an email notification to admin when an account or data deletion request is submitted
 */
export async function sendDeletionRequestNotification(request: {
  email: string;
  appName: string;
  scope: string;
  notes?: string | null;
}): Promise<EmailResult> {
  if (!resend) {
    console.log('[Dev Resend Mock] Data Deletion Request Received:', request);
    return { success: true, messageId: 'mock-deletion-request-id' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      replyTo: request.email,
      subject: `[DATA DELETION REQUEST] ${request.appName} - ${request.email}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #090a0f; color: #f3f4f6; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.3);">
          <h2 style="color: #ef4444; margin-top: 0;">⚠️ Account & Data Deletion Request</h2>
          <p style="color: #9ca3af; font-size: 14px;">A user has submitted an official data erasure request under Google Play / POPIA / GDPR.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #9ca3af; width: 140px;">User Email:</td>
              <td style="padding: 8px 0; color: #ffffff; font-weight: 600;">${request.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">App / Service:</td>
              <td style="padding: 8px 0; color: #38bdf8; font-weight: bold;">${request.appName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Deletion Scope:</td>
              <td style="padding: 8px 0; color: #f59e0b;">${request.scope}</td>
            </tr>
            ${request.notes ? `
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">User Notes:</td>
              <td style="padding: 8px 0; color: #e2e8f0;">${request.notes}</td>
            </tr>
            ` : ''}
          </table>

          <div style="background: rgba(239, 68, 68, 0.08); padding: 14px; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.2); margin-top: 16px;">
            <p style="margin: 0; font-size: 12px; color: #fca5a5;">
              Statutory Requirement: Purge account records in Supabase Auth, associated database tables, and cloud storage within 30 days. Send confirmation to user once complete.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend deletion request admin email error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, messageId: data?.id };
  } catch (err: unknown) {
    console.error('Unexpected deletion request email dispatch error:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}
