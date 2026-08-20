import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/products.page';

test.describe('UI: Поиск товара', () => {

  test('Открытие страницы Products, поиск и проверка результатов', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const searchQuery = 'Jeans';

    await productsPage.goto();
    await productsPage.searchProduct(searchQuery);

    await expect(productsPage.searchedProductsTitle).toHaveText('Searched Products');
    await expect(productsPage.productTitles.first()).toBeVisible();

    const productTitles = await productsPage.productTitles.allTextContents();
    
    expect(productTitles.length).toBeGreaterThan(0);

    for (const title of productTitles) {
      expect(title.toLowerCase()).toContain(searchQuery.toLowerCase());
    }
  });

});