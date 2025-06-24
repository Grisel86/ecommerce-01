// POM/HomePage.ts
import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async acceptCookies() {
        const cookieBtn = this.page.locator('button', { hasText: 'Aceptar cookies' });
        if (await cookieBtn.isVisible()) {
            await cookieBtn.click();
        }
    }

    async search(term: string) {
        const searchBox = this.page.locator('input[name="as_word"]');
        await searchBox.waitFor({ state: 'visible', timeout: 5000 });
        await searchBox.fill(term);

        const searchButton = this.page.locator('button.nav-search-btn, button[type="submit"]');
        await searchButton.first().click();
    }
}

