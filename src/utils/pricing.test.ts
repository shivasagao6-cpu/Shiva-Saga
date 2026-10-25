import test from 'node:test';
import assert from 'node:assert/strict';
import { PRICING_TIERS, generateMailtoUrl } from './pricing';

test('PRICING_TIERS contains exactly Starter, Growth, Pro with correct pricing', () => {
  assert.equal(PRICING_TIERS.length, 3);
  assert.equal(PRICING_TIERS[0].name, 'Starter');
  assert.equal(PRICING_TIERS[0].price, 99);
  assert.equal(PRICING_TIERS[1].name, 'Growth');
  assert.equal(PRICING_TIERS[1].price, 180);
  assert.equal(PRICING_TIERS[2].name, 'Pro');
  assert.equal(PRICING_TIERS[2].price, 300);
});

test('generateMailtoUrl outputs valid mailto link with encoded project inquiry', () => {
  const url = generateMailtoUrl({
    clientName: 'Sarah Jenkins',
    phoneNumber: '555-0199',
    businessName: 'VaultPay',
    facebookLink: 'fb.com/vaultpay',
    instagramLink: '@vaultpay',
    productName: 'VaultPay App',
    projectDetails: 'Need 6 reels highlighting budgeting features',
    selectedPackage: 'Growth ($180 - 6 reels and 2 posts)',
  });

  assert.match(url, /^mailto:shivaugccreater@gmail\.com\?subject=New%20UGC%20project%20inquiry&body=/);
  assert.match(url, /VaultPay/);
  assert.match(url, /Sarah%20Jenkins/);
});
