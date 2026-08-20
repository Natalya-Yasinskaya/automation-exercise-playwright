import { test, expect } from '@playwright/test';
import { ApiClient } from '../api/api.client';

test.describe('API: Список товаров', () => {
  test('Получение списка всех товаров и проверка структуры одного товара', async ({ request }) => {
    const api = new ApiClient(request);

    const response = await api.getProductsList();
    const body = JSON.parse(await response.text());
    const firstProduct = body.products?.[0];

    expect(response.status()).toBe(200);
    expect(body).toHaveProperty('products');
    expect(body.products.length).toBeGreaterThan(0);

    expect(firstProduct).toHaveProperty('id');
    expect(firstProduct).toHaveProperty('name');
    expect(firstProduct).toHaveProperty('price');
    expect(firstProduct).toHaveProperty('brand');
    expect(firstProduct).toHaveProperty('category');
  });
});