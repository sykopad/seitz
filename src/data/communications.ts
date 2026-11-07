export const GOOGLE_GROUP_URL = 'https://groups.google.com/u/2/g/seitz/';
export const TESTING_PORTAL_URL = 'https://seitz.co.za/testers';

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  audience: string;
  channel: 'email' | 'whatsapp' | 'sms';
  content: string;
}

export const communicationsTemplates: EmailTemplate[] = [
  {
    id: 'vip-migration-73-testers',
    name: 'VIP Welcome & Migration for 73 Visita Testers',
    subject: 'A quick thank you from Seitz, and an invite to VIP early access',
    audience: '73 Legacy Visita Testers (recruited via Facebook & TikTok "I Tell You Stuff")',
    channel: 'email',
    content: `Hi everyone,

Faiz here. If you are receiving this, you were one of the first 73 people who stepped up to help test the Visita closed beta on Google Play. Whether you joined directly from our community outreach, followed along from Facebook, or hopped over from my TikTok channel "I Tell You Stuff," I want to say thank you for being in my corner from day one.

Your participation helped test real-world civic tech, and as I expand our software development pipeline under my developer brand, Seitz, I want to make sure you get the best perks first.

I am establishing the Seitz Testing Lab at seitz.co.za/testers to organize closed testing cohorts for upcoming Android tools, utilities, civic platforms, and games. Under Google Play's current rules, personal developer accounts need at least 12 testers opted in continuously for 14 days before an app can go public.

Instead of opening this up to strangers, I want to reward the community that is already here.

What this means for you:
• Free lifetime access to paid apps: Whenever an upcoming utility or app reaches its official public launch, you will receive lifetime promo codes and pro features unlocked for free, rather than paying store prices.
• First look at upcoming builds: You get early hands-on access to test new concepts before anyone else sees them.
• Zero pressure, real community: You already know my style from "I Tell You Stuff" and Facebook: no corporate runaround, just building things that solve practical problems. All we ask is that you install the test builds via Google Play, check out the core features over the 14-day window, and share your honest feedback or bug findings.

Because you are already on the Visita testing list, you are automatically on our master Google Group:
${GOOGLE_GROUP_URL}

If your Google Play email or primary Android device has changed, or if you want to let me know which categories of apps you are most excited to test next (utilities, civic platforms, or productivity tools), you can review your details and check out the new hub here:
${TESTING_PORTAL_URL}

Thank you again for the ongoing support and for helping turn these ideas into working software. Watch your inbox over the next few weeks for the first batch of private test invites.

Warm regards,
Muhammed Faiz Seitz
Developer at Seitz.co.za | Creator of "I Tell You Stuff"`,
  },
  {
    id: 'whatsapp-sms-teaser',
    name: 'Short WhatsApp / SMS Broadcast (<300 chars)',
    subject: 'VIP Testing Lab Announcement',
    audience: 'TikTok / WhatsApp / SMS Contacts',
    channel: 'whatsapp',
    content: `Hey! Faiz here from "I Tell You Stuff". Expanding our app builds under Seitz! Join our private VIP tester lab for free lifetime access to all upcoming Android apps. Takes 1 min: seitz.co.za/testers`,
  },
  {
    id: 'day-7-retention-checkin',
    name: 'Day-7 Mid-Point Retention Reminder',
    subject: 'Day 7 check-in: How is the build running on your device?',
    audience: 'Active Testing Cohort at Day 7',
    channel: 'email',
    content: `Hi there,

Faiz here from the Seitz Testing Lab. We have officially crossed the halfway mark (Day 7) of our 14-day continuous closed-testing window on Google Play!

A quick reminder on how you qualify for your lifetime unlock:
1. Keep the app installed: Google monitors continuous opt-in days. Please do not uninstall the build until the full 14 days conclude.
2. Open the app today: Opening the build every few days registers active device engagement on our Google Play Console dashboard.
3. Spotted any glitch or freeze? If anything looked broken, stuttered, or felt confusing, simply reply directly to this email with a quick description or screenshot.

Thank you again for backing indie software development. We will send the final 3-minute check-in on Day 13 before unlocking your lifetime promo code!

Best regards,
Muhammed Faiz Seitz
Seitz Testing Lab | Seitz.co.za`,
  },
  {
    id: 'post-feedback-autoresponder',
    name: 'Post-Feedback Confirmation & Lifetime Code Promise',
    subject: 'Feedback received — you are locked in for lifetime access',
    audience: 'Testers who submit the 3-minute feedback questionnaire',
    channel: 'email',
    content: `Hi there,

Thanks for taking a few minutes to submit your check-in. Your feedback is logged and goes directly into our development notes as we tune the build.

To make sure your testing credit remains valid and your account qualifies for lifetime promo access:
• Keep the app installed: Google Play requires continuous opt-in across the full 14-day window. Please keep the build installed on your phone until the current testing cycle concludes.
• Open it occasionally: You do not need to use it daily, but opening it every couple of days helps register genuine device engagement on the Play Console.
• Found another glitch? If you spot another bug or screen issue between now and day 14, reply directly to this email with details or a quick screenshot.

Once the 14-day cohort wraps up and we submit the production build to Google, your lifetime unlock code will be sent straight to this inbox.

Thanks again for helping polish the software.

Best regards,
Faiz Seitz
Seitz Testing Lab | Seitz.co.za`,
  },
];
