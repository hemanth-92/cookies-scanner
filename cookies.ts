const { firefox } = require("playwright");
(async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the website
  await page.goto("https://youtube.com");

  // Get cookies
  const cookies = await context.cookies();
  console.log(cookies);

  // Close the browser
  await browser.close();
})();
