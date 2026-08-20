import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  protected override url = '/login';

  readonly emailInput = this.page.getByTestId('login-email');
  readonly passwordInput = this.page.getByTestId('login-password');
  readonly loginButton = this.page.getByTestId('login-button');
  readonly loggedInAsText = this.page.locator('header').locator('text=Logged in as');
  readonly errorMessage = this.page.locator('form[action="/login"] p');

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}