# Module 07_Automation – Hacker News Sorting Validation

This module showcases a real-world browser automation challenge built using [Playwright](https://playwright.dev/). The goal is to verify that the **first 100 posts** on Hacker News' [“newest” page](https://news.ycombinator.com/newest) are sorted in **descending chronological order** — from **newest to oldest**.

## 🔍 Objective

- Navigate to Hacker News
- Dynamically load enough posts by clicking the “More” link
- Extract each article’s relative timestamp (e.g., `3 hours ago`)
- Convert those values to minutes
- Validate that the articles are sorted from newest to oldest

---

## 🧪 Technologies Used

- [Playwright Test](https://playwright.dev/docs/test-intro)
- JavaScript
- Node.js

---

## 🚀 How to Run the Test

1. **Clone this repo:** or navigate to your portfolio root:

2. **Install dependencies:** (if not already done):
   npm install

3. **Run the test:**
   node index.js
   npx playwright test hn-sorting.spec.js

   Or list all tests:
   npx playwright test --list

## 📁 Files

* hn-sorting.spec.js – Main test script written with Playwright Test

* playwright.config.js – Default configuration (generated during setup)

* README.md – You're reading it now :)

## ✅ Expected Output

**If posts are sorted correctly:**

✔ First 100 Hacker News articles are sorted newest to oldest
If not, the test will fail and log the exact point of failure.

## 📌 Learning Outcomes

* How to automate multi-page scraping in Playwright

* Using test fixtures and assertions with expect()

* Parsing and converting relative time values

* Writing reusable, modular test logic

## 📚 Notes

* Hacker News loads 30 posts per page, so the script dynamically clicks “More” until 100 are collected.

* Posts are verified by comparing their converted timestamps in ascending order (i.e., newest post has the smallest number of minutes).

* Selector logic uses safe attribute targeting to avoid DOMExceptions.

## 🧠 Reflection

This module demonstrates how browser automation can go beyond UI clicks — and be applied to verify content accuracy, sorting logic, and time-sensitive behavior in production environments.

## 🧩 Bonus Ideas

* Add article titles and URLs to logs

* Export result data to CSV or JSON

* Run the test in all 3 major browsers: Chromium, WebKit, Firefox