import { test, expect } from '@playwright/test';

test('verify home page content v3', async ({ page }) => {
  // Set a large viewport for a high-res screenshot
  await page.setViewportSize({ width: 1440, height: 4000 });

  // Increase timeout for the whole test
  test.setTimeout(120000);

  console.log('Navigating to home page...');
  await page.goto('http://localhost:3060/', {
    waitUntil: 'networkidle',
    timeout: 60000
  });

  // Wait a bit more for any lazy-loaded styles or images
  await page.waitForTimeout(5000);

  console.log('Taking screenshot...');
  await page.screenshot({
    path: 'verification/screenshots/home_content_v3.png',
    fullPage: true
  });

  console.log('Verification screenshot saved to verification/screenshots/home_content_v3.png');
});
