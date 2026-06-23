import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        # Set viewport to a common desktop size
        await page.set_viewport_size({"width": 1440, "height": 900})
        try:
            await page.goto("https://unstop.com/", wait_until="networkidle")
            # Wait a bit for any overlays to settle
            await asyncio.sleep(5)
            # Try to close any popups if they appear (common on Unstop)
            try:
                await page.click("button.close-btn", timeout=2000)
            except:
                pass

            await page.screenshot(path="real_unstop_desktop.png")
            print("Screenshot of real Unstop saved.")
        except Exception as e:
            print(f"Error capturing real Unstop: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
