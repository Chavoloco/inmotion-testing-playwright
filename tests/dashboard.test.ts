import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.inmotionhosting.com/');
});

test('it loads', async ({ page }) => {
  await expect(page).toHaveTitle(/InMotion Hosting | Premier Web Host & Server Provider/);
  const logo = await page.locator('img[alt="InMotion Hosting Logo"]');
  await expect(logo).toBeVisible();
});
