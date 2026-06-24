import { test, expect } from '@playwright/test';

test('inspect unstop sidebar', async ({ page }) => {
  await page.goto('https://unstop.com/');
  await page.waitForTimeout(3000);

  // Take screenshot of initial state
  await page.screenshot({ path: 'real_sidebar_initial.png' });

  // Hover over one of the items
  const practiceItem = page.locator('unstop-side-nav-item').filter({ hasText: 'Practice' }).first();
  if (await practiceItem.isVisible()) {
    await practiceItem.hover();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'real_sidebar_hover.png' });
  }

  // Get CSS of a nav item
  const navItem = page.locator('unstop-side-nav-item').first();
  if (await navItem.isVisible()) {
     const styles = await navItem.evaluate((el) => {
       const style = window.getComputedStyle(el);
       return {
         backgroundColor: style.backgroundColor,
         color: style.color,
         padding: style.padding,
         borderRadius: style.borderRadius,
         height: style.height,
         fontSize: style.fontSize,
         fontWeight: style.fontWeight
       };
     });
     console.log('Nav Item Styles:', JSON.stringify(styles, null, 2));
  }
});
