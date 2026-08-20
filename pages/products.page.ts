import { BasePage } from './base.page';

export class ProductsPage extends BasePage {
  protected override url = '/products';

  readonly searchInput = this.page.getByPlaceholder('Search Product');
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
    const nameLocator = this.firstProductCard.locator('.productinfo p');
    const priceLocator = this.firstProductCard.locator('.productinfo h2');

    await nameLocator.waitFor({ state: 'visible' });

    const name = (await nameLocator.innerText()).trim();
    const price = (await priceLocator.innerText()).trim();

    await this.firstProductCard.locator('.productinfo .add-to-cart').click();
    await this.continueShoppingButton.click();

    return { name, price };
  }
}