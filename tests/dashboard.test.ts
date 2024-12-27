import { expect, test } from '@playwright/test';
import { DashboardPage } from '../main/page-objects/dashboard';
import assert from 'assert';

let dashboard : DashboardPage;

test.beforeEach(async ({page}) => {
  dashboard = new DashboardPage(page);
  await dashboard.goToHomepage();
});

test('it loads', async () => {
  await dashboard.assertTitle("InMotion Hosting | Premier Web Host & Server Provider");
  await dashboard.assertLogoVisible();
});

test('it verifies header dropdowns are visible', async ({ page }) => {
  const navBarDropdown = await page.locator('#navbarNavDropdown');
  await expect(navBarDropdown).toBeVisible();
});

test('it displays the latest blog posts', async ({ page }) => {
  const blogPosts = await page.locator('.latest-blog-posts');
  await expect(blogPosts).toBeVisible();
});
