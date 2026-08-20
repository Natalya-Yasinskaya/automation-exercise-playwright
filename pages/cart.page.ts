import { BasePage } from './base.page';

export class CartPage extends BasePage {
  protected override url = '/view_cart';
  readonly cartTableRows = this.page.locator('#cart_info_table tbody tr');

  async getFirstProductDetails() {
    const firstProductRow = this.cartTableRows.first();
    return {
      name: (await firstProductRow.locator('.cart_description a').innerText()).trim(),
      price: (await firstProductRow.locator('.cart_price p').innerText()).trim(),
      quantity: (await firstProductRow.locator('.cart_quantity button').innerText()).trim(),
      total: (await firstProductRow.locator('.cart_total .cart_total_price').innerText()).trim(),
    };
  }
}