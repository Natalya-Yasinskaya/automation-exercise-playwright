import { BasePage } from './base.page';
import { expect } from '@playwright/test';

export class ProductsPage extends BasePage {
  protected override url = '/products';

  readonly searchInput = this.page.locator('#search_product');
  readonly searchButton = this.page.locator('#submit_search');
  readonly searchedProductsTitle = this.page.locator('.title.text-center');
  readonly productTitles = this.page.locator('.productinfo p');

  readonly firstProductCard = this.page.locator('.product-image-wrapper').first();
  readonly continueShoppingButton = this.page.locator('button:has-text("Continue Shopping")');

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async addFirstProductToCart() {
    const name = (await this.firstProductCard.locator('.productinfo p').innerText()).trim();
    const price = (await this.firstProductCard.locator('.productinfo h2').innerText()).trim();

    await this.firstProductCard.locator('.productinfo .add-to-cart').click();
    await this.continueShoppingButton.click();

    return { name, price };
  }

  async expectSearchPageVisible() {
    await expect(this.searchedProductsTitle).toHaveText('Searched Products');
  }

  async expectProductsContainKeyword(keyword: string) {
    const productTitles = await this.productTitles.allTextContents();
    expect(productTitles.length).toBeGreaterThan(0);

    for (const title of productTitles) {
      expect(title.toLowerCase()).toContain(keyword.toLowerCase());
    }
  }
}