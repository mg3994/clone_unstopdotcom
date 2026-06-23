const { test, expect } = require('@playwright/test');

test('verify subpages and layout', async ({ page }) => {
  // Mobile verification
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

  // Dump the HTML to see what's actually there
  const content = await page.content();
  console.log('Page content length:', content.length);

  await page.screenshot({ path: 'verify_mobile_home.png' });

  // Try to find the button by aria-label since ID might be missing in production if something weird happened
  const menuButton = page.locator('[aria-label="Open Menu"]');
  const count = await menuButton.count();
  console.log('Menu button count:', count);

  if (count > 0) {
    await menuButton.click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'verify_mobile_menu.png' });
  }

  // Desktop verification for important pages
  await page.setViewportSize({ width: 1440, height: 900 });
  const routes = ['/internships', '/competitions', '/courses'];

  for (const route of routes) {
    await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `verify_desktop_${route.replace('/', '')}.png` });
  }
});
