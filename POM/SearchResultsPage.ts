
import { Page } from '@playwright/test';

export class ProductDetailPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getPrice(): Promise<string | null> {
        // Selector más flexible para el precio
        const price = this.page.locator('[class*="price-tag"] span[class*="fraction"]');
        if (await price.first().isVisible()) {
            return await price.first().textContent();
        }
        return null;
    }

    async hasPaymentMethod(method: string): Promise<boolean> {
        // Verifica por texto dentro de posibles secciones de pago
        const methods = await this.page.locator('div:has-text("tarjeta"), div:has-text("transferencia"), div:has-text("cuotas")').allTextContents();
        return methods.some(text => text.toLowerCase().includes(method.toLowerCase()));
    }

    async hasInstallments(): Promise<boolean> {
        const cuotas = this.page.locator('div:has-text("cuotas sin interés")');
        return await cuotas.first().isVisible();
    }

    async hasFreeShipping(): Promise<boolean> {
        const envio = this.page.locator('span:has-text("Envío gratis")');
        return await envio.first().isVisible();
    }
}

