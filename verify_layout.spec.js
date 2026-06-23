const { test, expect } = require('@playwright/test');

test('verify subpages and layout', async ({ page }) => {
  // Desktop verification
  const routes = ['/internships', '/jobs', '/practice', '/mentor', '/competitions', '/courses', '/events'];

  for (const route of routes) {
    await page.goto(`http://localhost:3000${route}`);
    await page.waitForTimeout(2000); // Wait for animations
    await page.screenshot({ path: `verify_desktop_${route.replace('/', '')}.png`, fullPage: false });
  }

  // Mobile verification
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3000/');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verify_mobile_home.png' });

  // Open mobile menu
  await page.click('button:has(svg.text-slate-600)'); // The Menu icon button
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'verify_mobile_menu.png' });
});
