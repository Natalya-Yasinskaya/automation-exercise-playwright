import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/products.page';

test.describe('UI: Поиск товара', () => {

  test('Открытие страницы Products, поиск и проверка результатов', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const searchQuery = 'Jeans';

    await productsPage.goto();
    await productsPage.searchProduct(searchQuery);

    await productsPage.expectSearchPageVisible();
    await productsPage.expectProductsContainKeyword(searchQuery);
  });

});