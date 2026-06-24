import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test('inspect unstop side nav popups', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://unstop.com/');
  await page.waitForLoadState('networkidle');

  // Take a full page screenshot to debug
  await page.screenshot({ path: 'debug_unstop_home.png', fullPage: true });

  const navItems = ['Practice', 'Mentorships', 'Jobs', 'Courses'];
  const results = {};

  for (const itemText of navItems) {
    try {
      console.log(`Inspecting ${itemText}...`);

      // Try to find the element by text in various containers
      const item = page.locator(`span:has-text("${itemText}"), a:has-text("${itemText}"), div:has-text("${itemText}")`).filter({ has: page.locator('svg, .menu-icon, img') }).first();

      // If not found, try a simpler approach
      const fallback = page.locator(`a:has-text("${itemText}")`).first();
      const target = (await item.count() > 0) ? item : fallback;

      if (await target.count() > 0) {
        // Scroll into view if needed
        await target.scrollIntoViewIfNeeded();

        // Hover
        await target.hover({ force: true });
        await page.waitForTimeout(2000);

        await page.screenshot({ path: `popup_${itemText.toLowerCase()}.png` });

        const popupData = await page.evaluate(() => {
          // Look for any new visible overlays or divs with high z-index that appeared
          const overlays = Array.from(document.querySelectorAll('div, section, aside')).filter(el => {
            const style = window.getComputedStyle(el);
            const zIndex = parseInt(style.zIndex);
            return zIndex > 100 && style.display !== 'none' && style.visibility !== 'hidden';
          });

          if (overlays.length === 0) return { found: false };

          // Pick the most likely one (usually the last one added or one with specific class)
          const subMenu = overlays[overlays.length - 1];
          const style = window.getComputedStyle(subMenu);

          return {
            found: true,
            className: subMenu.className,
            html: subMenu.innerHTML.substring(0, 2000),
            backgroundColor: style.backgroundColor,
            boxShadow: style.boxShadow,
            borderRadius: style.borderRadius
          };
        });

        results[itemText] = popupData;
      } else {
        console.log(`Could not find element for ${itemText}`);
      }
    } catch (e) {
      console.error(`Error with ${itemText}:`, e);
    }
  }

  fs.writeFileSync('popup_inspection.json', JSON.stringify(results, null, 2));
});
