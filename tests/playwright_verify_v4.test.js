import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1440, height: 900 } });

test('capture dashboard states', async ({ page }) => {
  // Increase timeout for slow dev server
  test.setTimeout(120000);

  console.log('Navigating to page...');
  try {
    await page.goto('http://localhost:3050', { waitUntil: 'networkidle', timeout: 60000 });
  } catch (e) {
    console.log('Initial goto failed, retrying once...');
    await page.waitForTimeout(5000);
    await page.goto('http://localhost:3050', { waitUntil: 'load', timeout: 60000 });
  }

  console.log('Page loaded, waiting for 3s...');
  await page.waitForTimeout(3000);

  // 1. Dashboard Home
  await page.screenshot({ path: '/home/jules/verification/screenshots/dashboard_v4_home.png', fullPage: true });

  // 2. Expand Sidebar
  const toggleBtn = page.locator('button[aria-label="Toggle Sidebar"]');
  console.log('Looking for toggle button...');
  await expect(toggleBtn).toBeVisible({ timeout: 15000 });
  await toggleBtn.click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/screenshots/dashboard_v4_expanded.png' });

  // 3. Hover Practice for MegaMenu
  console.log('Hovering Practice...');
  await page.hover('nav >> text=Practice');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/screenshots/dashboard_v4_megamenu.png' });

  // 4. Switch Persona to Mentor
  console.log('Clicking Mentor...');
  await page.click('aside >> text=Mentor');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/screenshots/dashboard_v4_mentor.png' });
});
