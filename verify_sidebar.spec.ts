
import { test, expect } from '@playwright/test';

test('verify sidebar expansion', async ({ page }) => {
  await page.goto('http://localhost:3002/');

  // Wait for the page to load
  await page.waitForSelector('img[alt="Unstop"]');

  // Take screenshot of initial state (collapsed)
  await page.screenshot({ path: 'sidebar_collapsed.png' });

  // Find the toggle button in PersonaSidebar and click it
  // It's the button with the squarehalf icon
  const toggleButton = page.locator('button img[src*="squarehalf"]').locator('..');
  await toggleButton.click();

  // Wait for expansion transition
  await page.waitForTimeout(500);

  // Take screenshot of expanded state
  await page.screenshot({ path: 'sidebar_expanded.png' });

  // Verify "Workspace" label is visible
  const workspaceLabel = page.locator('text=Workspace');
  await expect(workspaceLabel).toBeVisible();

  // Verify "Host" text is visible
  const hostText = page.locator('text=Host');
  await expect(hostText).toBeVisible();
});
