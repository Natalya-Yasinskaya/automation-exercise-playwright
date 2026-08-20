import { APIRequestContext, expect } from '@playwright/test';
import { UserData } from '../helpers/test-data';

export class ApiClient {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createAccount(userData: UserData) {
    const response = await this.request.post('/api/createAccount', {
      form: { ...userData },
    });

    const body = await response.json();
    expect(Number(body.responseCode)).toBe(201);
  }

  async getProductsList() {
    return await this.request.get('/api/productsList');
  }

  async deleteAccount(email: string, password: string) {
    await this.request.delete('/api/deleteAccount', {
      form: { email, password },
    });
  }
}