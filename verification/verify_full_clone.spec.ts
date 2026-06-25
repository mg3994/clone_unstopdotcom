import { test, expect } from '@playwright/test';

test('capture full home page clone', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 5000 });
  test.setTimeout(120000);

  await page.goto('http://localhost:3060/', {
    waitUntil: 'networkidle',
    timeout: 60000
  });

  await page.waitForTimeout(5000);

  await page.screenshot({
    path: 'verification/screenshots/full_clone_home.png',
    fullPage: true
  });

  // Also check other routes
  await page.goto('http://localhost:3060/practice', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'verification/screenshots/practice_page.png', fullPage: true });

  await page.goto('http://localhost:3060/jobs', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'verification/screenshots/jobs_page.png', fullPage: true });

  await page.goto('http://localhost:3060/competitions', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'verification/screenshots/competitions_page.png', fullPage: true });
});
