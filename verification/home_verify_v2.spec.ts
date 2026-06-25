import { test, expect } from '@playwright/test';

test('verify home page content v2', async ({ page }) => {
  await page.goto('http://localhost:3060');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'verification/screenshots/home_content_v2.png', fullPage: true });
});
