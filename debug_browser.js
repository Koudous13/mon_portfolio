const puppeteer = require('puppeteer');

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({ executablePath: "C:\\\\Users\\\\HP\\\\.cache\\\\puppeteer\\\\chrome\\\\win64-151.0.7922.71\\\\chrome-win64\\\\chrome.exe" });
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

  console.log("Navigating to https://koudousdaouda-portfolio.vercel.app/ ...");
  await page.goto('https://koudousdaouda-portfolio.vercel.app/', { waitUntil: 'networkidle0' });
  
  console.log("Done. Closing browser.");
  await browser.close();
})();
