import { test, expect } from '@playwright/test';

test('simple capture', async ({ page }) => {
  await page.goto('http://localhost:3050', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(5000);
  await page.screenshot({ path: '/home/jules/verification/screenshots/dashboard_v4_simple.png', fullPage: true });
});
