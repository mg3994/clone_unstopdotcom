import { test, expect } from '@playwright/test';

test('capture full home page clone', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 5000 });
  test.setTimeout(180000);

  await page.goto('http://localhost:3060/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Wait for images to load manually with a long timeout
  await page.waitForTimeout(15000);

  await page.screenshot({
    path: 'verification/screenshots/full_clone_home.png',
    fullPage: true
  });
});
