import { test, expect } from '@playwright/test';

test('capture sidebar screenshots', async ({ page }) => {
  // Use 3000 which is our default dev port
  await page.goto('http://localhost:3000/', { waitUntil: 'load', timeout: 60000 });

  // Wait for sidebars
  await page.waitForSelector('aside', { state: 'visible' });

  // Screenshot initial state (Collapsed)
  await page.screenshot({ path: 'verification/screenshots/sidebar_fidelity_v2_collapsed.png' });

  // Toggle Expand
  const toggleBtn = page.locator('button').filter({ has: page.locator('img[src*="squarehalf"]') }).first();
  await toggleBtn.click();
  await page.waitForTimeout(1000);

  // Screenshot expanded state
  await page.screenshot({ path: 'verification/screenshots/sidebar_fidelity_v2_expanded.png' });
});
