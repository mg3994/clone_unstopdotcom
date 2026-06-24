const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  const routes = [
    '',
    'competitions',
    'jobs',
    'internships',
    'practice',
    'mentor',
    'events',
    'courses'
  ];

  for (const route of routes) {
    const url = `http://localhost:3002/${route}`;
    console.log(`Verifying ${url}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.evaluate(() => window.scrollBy(0, 500));
      await page.waitForTimeout(2000);
      const filename = `verify_${route || 'home'}.png`;
      await page.screenshot({ path: filename, fullPage: false });
      console.log(`Saved ${filename}`);
    } catch (e) {
      console.error(`Failed to capture ${url}: ${e.message}`);
    }
  }

  await browser.close();
})();
