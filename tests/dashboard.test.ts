import { expect, test } from '@playwright/test';
import { DashboardPage as dashboard} from '../main/page-objects/dashboard';

test.beforeEach(async () => {
  await dashboard.goToHomepage();
});

test('it loads', async ({ page }) => {
  await expect(page).toHaveTitle(/InMotion Hosting | Premier Web Host & Server Provider/);
  const logo = await page.locator('img[alt="InMotion Hosting Logo"]');
  await expect(logo).toBeVisible();
});

test('it has a side bar menu', async ({ page }) => {
  const sidebar = await page.locator('i.fa-imh-menu-red');
  await expect(sidebar).toBeVisible();
  sidebar.click();
  const navBarDropdown = await page.locator('#navbarNavDropdown');
  await expect(navBarDropdown).toBeVisible();
});

test('it displays the latest blog posts', async ({ page }) => {
  const blogPosts = await page.locator('.latest-blog-posts');
  await expect(blogPosts).toBeVisible();
});


