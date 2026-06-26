import { test, expect } from '@playwright/test';

test('verify sidebar v3 architecture and persona switching', async ({ page }) => {
  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });

  // Toggle sidebar to expand it
  console.log('Expanding sidebar...');
  const toggleBtn = page.locator('button img[src*="squarehalf_dualtone.svg"]').locator('xpath=..');
  await toggleBtn.click();
  await page.waitForTimeout(500);

  // Take screenshot of Talent (default)
  await page.screenshot({ path: 'verification/screenshots/sidebar_talent_final.png' });

  // Verify Host button existence and style
  const hostBtn = page.locator('.workspace-header button');
  await expect(hostBtn).toBeVisible();

  // Hover over a nav item to trigger MegaMenu
  console.log('Hovering over Practice...');
  await page.hover('a:has-text("Practice")');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'verification/screenshots/megamenu_hover.png' });

  // Click Mentor persona
  console.log('Clicking Mentor persona...');
  await page.click('button:has-text("Mentor")');
  await page.waitForTimeout(1000); // Wait for transition
  await page.screenshot({ path: 'verification/screenshots/sidebar_mentor_final.png' });

  // Verify NavSidebar profile updated
  const profileName = page.locator('.active-profile span.font-bold').first();
  await expect(profileName).toContainText('Mentor');
});
