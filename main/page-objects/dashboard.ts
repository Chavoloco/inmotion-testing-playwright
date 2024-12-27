import { Locator, Page, expect } from '@playwright/test';

export class DashboardPage {
    private page: Page;
    private elements: { [key: string]: Locator };

  
    constructor(page: Page) {
      this.page = page;

      // Define the elements that we will interact with
        this.elements = {
            logo: this.page.locator('img[alt="InMotion Hosting Logo"]'),
            sidebar: this.page.locator('i.fa-imh-menu-red'),
            navBarDropdown: this.page.locator('#navbarNavDropdown'),
            blogPosts: this.page.locator('.latest-blog-posts'),
            headerManuList: this.page.locator('#navbarNavDropdown .nav1 .nav-item'),
        }
    }
  
    async getWebElement(key: string): Promise<Locator> {
        return this.elements[key];
    }

    async goToHomepage() {
      await this.page.goto('https://www.inmotionhosting.com/');
    }
  
    async assertTitle(title: string) {
      await expect(this.page).toHaveTitle(title);
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

    async returnHeaderList() {
        return this.elements.headerManuList;
    }
  
    async assertHeaderDropdownVisible(elmnt: String) {
        switch (elmnt.trim().toLocaleLowerCase()) {
            case 'blogposts':
                await expect(this.elements.blogPosts).toBeVisible();
                break;
            default:
                throw new Error('Element not found');
                break;
        }
      const blogPosts = await this.page.locator('.latest-blog-posts');
      await expect(blogPosts).toBeVisible();
    }
  }