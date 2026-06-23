const { chromium } = require('playwright');
const fs = require('fs');

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('https://unstop.com/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(5000); // Wait for animations/load
  await page.screenshot({ path: 'unstop_live_desktop.png' });
  await browser.close();
}

run().catch(console.error);
