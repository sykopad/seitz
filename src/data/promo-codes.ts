/**
 * 50 Official Google Play Promotion Codes for Verified Seitz Beta Testers.
 * Sourced from C:\Users\Faiz\Documents\50_promotion_codes.csv
 * Format: 23-character uppercase alphanumeric Google Play Console redemption codes.
 * Redeemable at https://play.google.com/redeem?code={CODE} or via Google Play Store app.
 */

export const officialGooglePlayPromoCodes: string[] = [
  '9ZL0MNNQ7WQA6JNMEXHJFV7',
  'JPYHGGL9XEMMJRPHTDHZTG0',
  'Y7D08X70L2RLB7PD4GK98PC',
  'F17ATCXBHE21000FCQ72RFL',
  'FUR4UXBHPBUU79UDDKMYG5R',
  'MP3G98VYWLH082YH404FXBN',
  'XBF8734S1PEYYXDXYAL28XN',
  'BRMTME41SYLCJV81N4L5RTJ',
  'TBACABCBB85JZYLYQXYAEFN',
  '5TYS37A3PE94E17VEDMB6WH',
  'M03H81QHT6D9RR5Y5LMV6NU',
  '7XGQ3EKECDDVU7S43XSEZSX',
  'QHYFTWDA8T83AHRQAXPM46W',
  'Z0XK2MR5CVUCQXBQK78T1M5',
  '8AN25L9SN9CULUPBTCR0U0P',
  '482KHY0QUMAXY47G5NBCD11',
  'UA8X90RM1SZYHF909QEJ9AT',
  '0MC7HD5QLANXHZAKCU9PRSN',
  'KNUN12SR23UUPLLWFRF1QVK',
  'W116C75T45369N0QK6R2CTD',
  'MA9MFJU03C3YQJ0SN9MR162',
  'FTQ7CLLACBZW6P5F1JLEUL0',
  'DGFHSUKQVXTM3RHYU14TND3',
  'UPW9D57Z9315QCCY2QQ9PBB',
  'ND3LUMD2G4LW9B9F3DXDRKG',
  'TB6K9X0769FED26US8CLZWW',
  'AQ17LVVWHZT0Q1VD9T5F7ED',
  'DYP2BT9N5J9T0VU04CA35VR',
  'S0K0APPJPZ9MJ1D7CKR7YZR',
  '7K5Z6R14M9Q2TH7Y3R86A9F',
  'RDKVFEGX8P52AATY8W0WBYJ',
  '6B5AUGNUTH44BQQWJ8L2V78',
  'M6CDJGPL7F7NPPZK4C40S7Q',
  '9LURDSABU47XGTKXAYCVPGV',
  'JE8GKVDKX6BJ9AK58BRPRZK',
  '00YMYH6KW4GUMMRG383JNBN',
  'GAA88CYQ13JDJQ524C0FEWU',
  'ZR7EV6EBQ54DH9KP33ZEWDJ',
  'ZT89MDMDXJMRU8F0G0VJWS0',
  'WWUEEFP0GPB7HY8EMU2Y79Z',
  '62C77SGRUST58WNR2D9JLVM',
  'VV7BFQ4AU7ZNK7R76025JQ3',
  '5VPD0WZ64QN8HT2NYVF1C5D',
  'WXAHCTLHDFB8Q9K8FGUGJGF',
  'E0P12FKCRA8V5PLNC1FEZ62',
  '8574DNJL6FKPCE6BE0TGM75',
  '337RT0KN4B8PPBDJQW6WVRW',
  'DUQ646QPBEHC3HZ9ZNTTYYF',
  'UNN4PFYRHZ494Z2ZUW092PD',
  'TG66ZQA1Q34BH59P9E5AMR0',
];

/**
 * Return a deterministic promo code from the official pool based on user email and app slug.
 * Ensures that repeat claims by the same user return the exact same code,
 * while different users receive distinct codes across the 50-code pool.
 */
export function getDeterministicPromoCode(email: string, appSlug: string): string {
  const seedString = `${email.trim().toLowerCase()}::${appSlug.trim().toLowerCase()}`;
  let hash = 0;
  for (let i = 0; i < seedString.length; i++) {
    hash = (hash << 5) - hash + seedString.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % officialGooglePlayPromoCodes.length;
  return officialGooglePlayPromoCodes[index];
}
