const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set console listener to catch errors
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  
  await page.goto('https://koudousdaouda-portfolio.vercel.app/', { waitUntil: 'networkidle0' });
  
  await page.screenshot({ path: 'vercel_screenshot.png' });
  
  const html = await page.content();
  const fs = require('fs');
  fs.writeFileSync('rendered_html.txt', html);
  
  await browser.close();
})();
