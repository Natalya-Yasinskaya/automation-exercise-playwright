import { test as base, expect } from '@playwright/test';
import { ApiClient } from '../api/api.client';
import { LoginPage } from '../pages/login.page';
import { generateUserData, UserData } from '../helpers/test-data';

type AuthFixtures = {
  registeredUser: {
    user: UserData;
    loginPage: LoginPage;
  };
};

export const test = base.extend<AuthFixtures>({
  registeredUser: async ({ page, request }, use) => {
    const api = new ApiClient(request);
    const loginPage = new LoginPage(page);
    const userData = generateUserData();

    await api.createAccount(userData);

    await use({ user: userData, loginPage });

    await api.deleteAccount(userData.email, userData.password);
  },
});

export { expect };