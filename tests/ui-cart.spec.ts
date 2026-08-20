import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/products.page';
import { CartPage } from '../pages/cart.page';

test.describe('UI: Корзина товаров', () => {
  test('Добавление товара в корзину и проверка содержимого', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await productsPage.goto();
    const addedProduct = await productsPage.addFirstProductToCart();
    await cartPage.goto();
    const cartProduct = await cartPage.getFirstProductDetails();

    expect(cartProduct.name).toBe(addedProduct.name);
    expect(cartProduct.price).toBe(addedProduct.price);
    expect(cartProduct.quantity).toBe('1');
    expect(cartProduct.total).toBe(addedProduct.price);
  });
});