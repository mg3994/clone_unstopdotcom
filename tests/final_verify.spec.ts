import { test, expect } from '@playwright/test';

const ROUTES = [
  '/',
  '/competitions',
  '/jobs',
  '/internships',
  '/practice',
  '/mentor',
  '/events',
  '/courses',
  '/auth/login',
  '/auth/signup'
];

test('verify all main routes', async ({ page }) => {
  for (const route of ROUTES) {
    await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000); // Wait for content
    const screenshotName = route === '/' ? 'home' : route.replace(/\//g, '_');
    await page.screenshot({ path: `final_verify_${screenshotName}.png`, fullPage: true });

    // Check for some common elements
    if (route !== '/auth/login' && route !== '/auth/signup') {
       // Check if at least one nav is visible
       await expect(page.locator('nav').first()).toBeVisible();
    }
  }
});
