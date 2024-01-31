// import { test, expect } from '@playwright/test';
const { test, expect } = require('./fixtures')

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});