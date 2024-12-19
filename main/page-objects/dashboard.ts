import { Page, expect } from '@playwright/test';

export class DashboardPage {
    private page: Page;
    static goToHomepage: any; 
  
    constructor(page: Page) {
      this.page = page;
    }
  
    async goToHomepage() {
      await this.page.goto('https://www.inmotionhosting.com/');
    }
  
    async assertTitle() {
      await expect(this.page).toHaveTitle(/InMotion Hosting | Premier Web Host & Server Provider/);
    }
  
    async assertLogoVisible() {
      const logo = await this.page.locator('img[alt="InMotion Hosting Logo"]');
      await expect(logo).toBeVisible();
    }
  
    async assertSidebarVisible() {
      const sidebar = await this.page.locator('i.fa-imh-menu-red');
      await expect(sidebar).toBeVisible();
    }
  
    async clickSidebar() {
      const sidebar = await this.page.locator('i.fa-imh-menu-red');
      await sidebar.click();
    }
  
    async assertNavBarDropdownVisible() {
      const navBarDropdown = await this.page.locator('#navbarNavDropdown');
      await expect(navBarDropdown).toBeVisible();
    }
  
    async assertBlogPostsVisible() {
      const blogPosts = await this.page.locator('.latest-blog-posts');
      await expect(blogPosts).toBeVisible();
    }
  }