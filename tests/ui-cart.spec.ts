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
    const cartProduct = cartPage.getFirstProductDetails();

    await expect(cartProduct.name).toHaveText(addedProduct.name);
    await expect(cartProduct.price).toHaveText(addedProduct.price);
    await expect(cartProduct.quantity).toHaveText('1');
    await expect(cartProduct.total).toHaveText(addedProduct.price);
  });
});