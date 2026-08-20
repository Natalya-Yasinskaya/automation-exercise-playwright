import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  protected url: string = '';

  constructor(page: Page) {
    this.page = page;
    this.setupConsentHandler();
  }

  private setupConsentHandler() {
    this.page.addLocatorHandler(
      this.page.locator('.fc-consent-root').first(),
      async (cookieBanner) => {
        const consentButton = cookieBanner.locator('button:has-text("Consent"), .fc-button-label:has-text("Consent"), .fc-cta-consent').first();
        if (await consentButton.isVisible()) {
          await consentButton.click();
        }
      }
    );
  }

  async goto(url: string = this.url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }
}