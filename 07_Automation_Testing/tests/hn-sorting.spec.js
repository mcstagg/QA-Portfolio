const { test, expect } = require('@playwright/test');

test('First 100 Hacker News articles are sorted newest to oldest', async ({ page }) => {
  await page.goto('https://news.ycombinator.com/newest');

  const postData = [];

  // Helper to extract posts and ages
  async function collectPostDataFromPage() {
    const articleRows = await page.locator("tr.athing").all();

    for (const row of articleRows) {
      const articleId = await row.getAttribute("id");
      if (!articleId) continue;

      const ageSelector = `tr[id="${articleId}"] + tr span.age`;
      if ((await page.locator(ageSelector).count()) === 0) continue;

      const ageText = await page.locator(ageSelector).innerText();
      const [num, unit] = ageText.split(" ");
      const n = parseInt(num, 10);
      let minutes = Number.MAX_SAFE_INTEGER;

      if (unit.startsWith("second")) minutes = 0;
      else if (unit.startsWith("minute")) minutes = n;
      else if (unit.startsWith("hour")) minutes = n * 60;
      else if (unit.startsWith("day")) minutes = n * 60 * 24;

      postData.push({ text: ageText, minutes });

      if (postData.length >= 100) break;
    }
  }

  // Loop until we gather 100
  while (postData.length < 100) {
    await collectPostDataFromPage();
    if (postData.length < 100) {
      const moreLink = page.locator("a.morelink");
      await Promise.all([page.waitForNavigation(), moreLink.click()]);
    }
  }

  // Validate
  for (let i = 1; i < postData.length; i++) {
    expect(postData[i - 1].minutes).toBeLessThanOrEqual(postData[i].minutes);
  }

  console.log("✅ Articles are in correct order.");
});