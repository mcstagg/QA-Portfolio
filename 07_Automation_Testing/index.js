const { chromium } = require("playwright");

// Collect posts and their age from the current page
async function collectPostDataFromPage(page, postData, max = 100) {
  const articleRows = await page.locator("tr.athing").all();

  for (const row of articleRows) {
    const articleId = await row.getAttribute("id");
    if (!articleId) continue;

    // Safer attribute-based selector
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

    if (postData.length >= max) break;
  }
}

async function sortHackerNewsArticles() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://news.ycombinator.com/newest");

  const postData = [];

  // Loop through pages until 100 posts are collected
  while (postData.length < 100) {
    await collectPostDataFromPage(page, postData, 100);

    if (postData.length < 100) {
      const moreLink = page.locator("a.morelink");
      if (await moreLink.isVisible()) {
        await Promise.all([
          page.waitForNavigation(),
          moreLink.click(),
        ]);
      } else {
        console.warn("⚠️ No more pages available before hitting 100 posts.");
        break;
      }
    }
  }

  // Log the collected ages
  postData.forEach((post, i) => {
    console.log(`Post ${i + 1}: ${post.text} → ${post.minutes} minutes`);
  });

  // ✅ Check if sorted (ascending by minutes = newest to oldest)
  const isSorted = postData.every(
    (post, i, arr) => i === 0 || arr[i - 1].minutes <= post.minutes
  );

  for (let i = 1; i < postData.length; i++) {
    if (postData[i - 1].minutes > postData[i].minutes) {
      console.log(
        `❌ Sort error: Post ${i} (${postData[i - 1].minutes} min) is newer than Post ${i + 1} (${postData[i].minutes} min)`
      );
    }
  }

  console.log(
    isSorted
      ? "✅ First 100 Hacker News articles are sorted newest to oldest."
      : "❌ Articles are NOT sorted newest to oldest."
  );

  await browser.close();
}

(async () => {
  await sortHackerNewsArticles();
})();