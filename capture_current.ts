import { chromium } from 'playwright';

async function capture() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    // Wait a bit for images to load
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'current_clone_desktop.png', fullPage: true });

    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'current_clone_mobile.png' });

    console.log('Screenshots captured successfully');
  } catch (error) {
    console.error('Error capturing screenshots:', error);
  } finally {
    await browser.close();
  }
}

capture();
