// POM/ProductDetailPage.ts
import { Page } from '@playwright/test';

export class ProductDetailPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getPrice(): Promise<string | null> {
        const priceLocator = this.page.locator('[class*="price-tag"] span[class*="fraction"]');

        if (await priceLocator.first().isVisible()) {
            return await priceLocator.first().textContent();
        }

        return null;
    }

    async hasPaymentMethod(method: string): Promise<boolean> {
        const paymentSection = this.page.locator('[id*="pago"]', { hasText: method });
        return await paymentSection.isVisible();
    }
}

