const { test, expect } = require('@playwright/test');

test('Verify Home Page Content', async ({ page }) => {
  test.setTimeout(60000);
  await page.setViewportSize({ width: 1440, height: 3000 });
  await page.goto('http://localhost:3060', { waitUntil: 'domcontentloaded' });

  // Wait for images and dynamic content
  await page.waitForTimeout(10000);

  await page.screenshot({ path: 'verification/screenshots/home_content_v1.png' });
});
