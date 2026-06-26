import { test, expect } from '@playwright/test';

test('final verification of unstop clone', async ({ page }) => {
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveTitle(/Unstop/);

  // Check for Hero
  await expect(page.locator('h1 >> text=Unlock Your Career!')).toBeVisible();

  // Toggle Sidebar
  const toggleBtn = page.locator('button img[src*="squarehalf_dualtone.svg"]').locator('xpath=..');
  await toggleBtn.click();

  // Check for Sidebar Expansion
  await expect(page.locator('text=Main Menu')).toBeVisible();

  // Check Jobs page using sidebar link
  await page.locator('nav >> a:has-text("Jobs")').click();
  await page.waitForURL(/.*jobs/);
  await expect(page.locator('h1')).toContainText('Jobs');

  // Check Mobile View
  await page.setViewportSize({ width: 375, height: 812 });
  // Sidebar should be hidden on mobile
  await expect(page.locator('nav').first()).toBeHidden();

  await page.screenshot({ path: 'verification/screenshots/final_mobile.png' });
});
