import { Page } from '@playwright/test';

export class SearchResultsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectFirstProduct() {
        await this.page.locator('ol > li').first().click();
    }

    async containsResultsFor(term: string) {
        const texts = await this.page.locator('.ui-search-item__title').allTextContents();
        return texts.some(text => text.includes(term));
    }
}
