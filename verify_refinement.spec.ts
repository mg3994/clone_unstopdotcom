import { test, expect } from '@playwright/test';

test('verify layout refinement', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'refined_clone_desktop.png', fullPage: true });
});
