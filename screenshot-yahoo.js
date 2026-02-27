const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 700 });
  await page.goto('https://finance.yahoo.com', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: process.argv[2], fullPage: false });
  await browser.close();
})();
