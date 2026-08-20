import { BasePage } from './base.page';

export class CartPage extends BasePage {
  protected override url = '/view_cart';
  readonly cartTableRows = this.page.locator('#cart_info_table tbody tr');

  getFirstProductDetails() {
    const firstProductRow = this.cartTableRows.first();
    return {
      name: firstProductRow.locator('.cart_description a'),
      price: firstProductRow.locator('.cart_price p'),
      quantity: firstProductRow.locator('.cart_quantity button'),
      total: firstProductRow.locator('.cart_total .cart_total_price'),
    };
  }
}