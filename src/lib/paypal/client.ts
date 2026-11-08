export type TestingTierId = 'tier_12' | 'tier_20' | 'tier_30';

export interface TestingTierPricing {
  id: TestingTierId;
  name: string;
  testerCount: number;
  priceUsd: number;
  bountyPerTesterUsd: number;
  totalTesterPoolUsd: number;
  platformMarginUsd: number;
  description: string;
}

export const TESTING_TIERS: Record<TestingTierId, TestingTierPricing> = {
  tier_12: {
    id: 'tier_12',
    name: 'Starter Cohort',
    testerCount: 12,
    priceUsd: 199.0,
    bountyPerTesterUsd: 10.0,
    totalTesterPoolUsd: 120.0,
    platformMarginUsd: 79.0,
    description: '12 verified Android testers meeting Google Play 14-day closed testing prerequisites.',
  },
  tier_20: {
    id: 'tier_20',
    name: 'Standard Fast-Track',
    testerCount: 20,
    priceUsd: 299.0,
    bountyPerTesterUsd: 10.0,
    totalTesterPoolUsd: 200.0,
    platformMarginUsd: 99.0,
    description: '20 active testers with daily retention tracking & detailed private stability reports.',
  },
  tier_30: {
    id: 'tier_30',
    name: 'Enterprise Guaranteed',
    testerCount: 30,
    priceUsd: 399.0,
    bountyPerTesterUsd: 9.0,
    totalTesterPoolUsd: 270.0,
    platformMarginUsd: 129.0,
    description: '30 power testers across diverse Android OEMs with expedited 14-day production clearance.',
  },
};

function getPayPalBaseUrl(): string {
  const mode = process.env.PAYPAL_MODE || 'sandbox';
  return mode === 'live'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';
}

/**
 * Retrieves a short-lived OAuth 2.0 access token from PayPal
 */
export async function getPayPalAccessToken(): Promise<string> {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret || clientId.includes('placeholder')) {
    throw new Error('PayPal client credentials are not configured in environment.');
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const baseUrl = getPayPalBaseUrl();

  const response = await fetch(`${baseUrl}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
    signal: AbortSignal.timeout(10000),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('[PayPal Token Error]:', response.status, errorText);
    throw new Error(`Failed to authenticate with PayPal: ${response.statusText}`);
  }

  const data = await response.json();
  return data.access_token;
}

/**
 * Creates a PayPal Order for the selected client testing cohort
 */
export async function createPayPalOrder(
  tierId: TestingTierId,
  appDetails: {
    appName: string;
    packageName: string;
    clientEmail: string;
  }
) {
  const tier = TESTING_TIERS[tierId] || TESTING_TIERS.tier_20;
  const accessToken = await getPayPalAccessToken();
  const baseUrl = getPayPalBaseUrl();

  const response = await fetch(`${baseUrl}/v2/checkout/orders`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [
        {
          reference_id: `SEITZ-${tier.id}-${Date.now()}`,
          description: `Seitz Testing Lab: ${tier.name} (${tier.testerCount} Testers for ${appDetails.appName})`,
          custom_id: JSON.stringify({
            tierId: tier.id,
            packageName: appDetails.packageName,
            clientEmail: appDetails.clientEmail,
            testerPool: tier.totalTesterPoolUsd,
            bountyPerTester: tier.bountyPerTesterUsd,
          }),
          amount: {
            currency_code: 'USD',
            value: tier.priceUsd.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: tier.priceUsd.toFixed(2),
              },
            },
          },
          items: [
            {
              name: `Google Play Testing: ${tier.name}`,
              description: `Cohort of ${tier.testerCount} verified human testers for ${appDetails.packageName}. Includes tester incentive pool ($${tier.totalTesterPoolUsd.toFixed(2)}) + Seitz compliance management.`,
              unit_amount: {
                currency_code: 'USD',
                value: tier.priceUsd.toFixed(2),
              },
              quantity: '1',
              category: 'DIGITAL_GOODS',
            },
          ],
        },
      ],
      application_context: {
        brand_name: 'Seitz Systems Studio',
        landing_page: 'NO_PREFERENCE',
        user_action: 'PAY_NOW',
        return_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/services/google-play-testing?status=success`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/services/google-play-testing?status=cancelled`,
      },
    }),
    signal: AbortSignal.timeout(10000),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('[PayPal Create Order Error]:', response.status, errorText);
    throw new Error(`PayPal order creation failed: ${response.statusText}`);
  }

  const order = await response.json();
  return {
    orderId: order.id,
    tier,
  };
}

/**
 * Captures an approved PayPal payment order
 */
export async function capturePayPalOrder(orderId: string) {
  const accessToken = await getPayPalAccessToken();
  const baseUrl = getPayPalBaseUrl();

  const response = await fetch(`${baseUrl}/v2/checkout/orders/${orderId}/capture`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    signal: AbortSignal.timeout(12000),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('[PayPal Capture Order Error]:', response.status, errorText);
    throw new Error(`Failed to capture PayPal order: ${response.statusText}`);
  }

  const captureData = await response.json();
  const capture = captureData.purchase_units?.[0]?.payments?.captures?.[0];

  return {
    orderId: captureData.id,
    status: captureData.status, // "COMPLETED"
    captureId: capture?.id,
    amount: capture?.amount?.value,
    currency: capture?.amount?.currency_code,
    payer: {
      name: `${captureData.payer?.name?.given_name || ''} ${captureData.payer?.name?.surname || ''}`.trim(),
      email: captureData.payer?.email_address,
      payerId: captureData.payer?.payer_id,
    },
  };
}
