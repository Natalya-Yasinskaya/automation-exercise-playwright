import { BasePage } from './base.page';
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {
  protected override url = '/login';

  readonly emailInput = this.page.locator('[data-qa="login-email"]');
  readonly passwordInput = this.page.locator('[data-qa="login-password"]');
  readonly loginButton = this.page.locator('[data-qa="login-button"]');
  readonly loggedInAsText = this.page.locator('header').locator('text=Logged in as');
  readonly errorMessage = this.page.locator('form[action="/login"] p');

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectErrorMessage(expectedText: string) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(expectedText);
  }
}