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
 */
export async function sendTesterWelcomeEmail(tester: {
  fullName: string;
  googleEmail: string;
  deviceModel: string;
}): Promise<EmailResult> {
  if (!resend) {
    console.log('[Dev Resend Mock] Tester Welcome Email to:', tester.googleEmail);
    return { success: true, messageId: 'mock-tester-welcome-id' };
  }

  try {
    const firstName = tester.fullName.split(' ')[0] || 'Tester';
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: tester.googleEmail,
      subject: 'Welcome to the Seitz Testing Lab — Your Priority Testing Access',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #090a0f; color: #f3f4f6; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
          <h2 style="color: #10b981; margin-top: 0;">Welcome to the Seitz Testing Lab, ${firstName}!</h2>
          <p style="color: #e5e7eb; font-size: 14px; line-height: 1.6;">
            Your Android device (<strong>${tester.deviceModel}</strong>) is officially registered in our private beta community.
          </p>

          <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); padding: 16px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #10b981; margin-top: 0; margin-bottom: 8px;">Next Step: Join Our Google Group</h4>
            <p style="font-size: 13px; color: #d1d5db; margin: 0 0 12px 0; line-height: 1.5;">
              To automatically receive direct closed-track Google Play links without manual individual invites, please confirm you are a member of our centralized testing group:
            </p>
            <a href="https://groups.google.com/u/2/g/seitz/" style="display: inline-block; background: #10b981; color: #000000; font-weight: bold; font-size: 12px; padding: 10px 16px; border-radius: 6px; text-decoration: none; text-transform: uppercase;">
              Open Seitz Google Group →
            </a>
          </div>

          <h4 style="color: #ffffff; margin-bottom: 8px;">How You Earn Your Lifetime Promo Code:</h4>
          <ol style="font-size: 13px; color: #9ca3af; line-height: 1.6; padding-left: 20px;">
            <li>Install upcoming test builds via the Google Play Store closed track.</li>
            <li>Keep the app installed for the continuous 14-day evaluation window.</li>
            <li>Complete a quick 3-minute check-in halfway through to confirm app stability.</li>
          </ol>

          <p style="font-size: 13px; color: #9ca3af; margin-top: 24px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 16px;">
            Warm regards,<br>
            <strong>Muhammed Faiz Seitz</strong><br>
            Developer at <a href="https://seitz.co.za" style="color: #38bdf8;">Seitz.co.za</a> | Creator of "I Tell You Stuff"
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
