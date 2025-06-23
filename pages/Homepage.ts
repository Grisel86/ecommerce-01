import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchInput = 'input[name="as_word"]';
    readonly searchButton = 'button.nav-search-btn';

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://www.mercadolibre.com.ar/');
    }

    async search(term: string) {
        await this.page.fill(this.searchInput, term);
        await this.page.press(this.searchInput, 'Enter');
    }
}
