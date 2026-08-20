import { test, expect } from '../fixtures/auth.fixture';
import { LoginPage } from '../pages/login.page';

test.describe('UI + API: Авторизация пользователя', () => {

  test('Успешная авторизация зарегистрированного пользователя', async ({ registeredUser }) => {
    const { user, loginPage } = registeredUser;

    await loginPage.goto();
    await loginPage.login(user.email, user.password);

    await expect(loginPage.loggedInAsText).toBeVisible();
  });

  test('Авторизация с неверным паролем', async ({ registeredUser }) => {
    const { user, loginPage } = registeredUser;

    await loginPage.goto();
    await loginPage.login(user.email, 'WrongPassword123!');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Your email or password is incorrect!');
  });

  test('Авторизация незарегистрированного пользователя', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('non_existent_user_99999@gmail.com', 'Password123!');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Your email or password is incorrect!');
  });

});