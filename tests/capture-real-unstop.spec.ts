import { test, expect } from '@playwright/test';

test('capture real unstop', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('https://unstop.com/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'real_unstop_desktop_full.png', fullPage: false });

  // Try to click sidebar toggle if exists
  const sidebarToggle = page.locator('.sidebar-toggle, [aria-label*="menu"], #mobile-menu-toggle').first();
  if (await sidebarToggle.isVisible()) {
    await sidebarToggle.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'real_unstop_sidebar_open.png' });
  }

  // Mobile
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('https://unstop.com/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'real_unstop_mobile.png' });
});
