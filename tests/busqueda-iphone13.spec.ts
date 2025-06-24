// tests/busqueda-iphone13.spec.ts
import { test, expect } from '@playwright/test';
import { HomePage } from '../POM/HomePage';
import { SearchResultsPage } from '../POM/SearchResultsPage';
import {ProductDetailPage} from '../POM/ProductDetailPage';


test('Buscar iPhone 13 y validar precio y método de pago', async ({ page }) => {
    const home = new HomePage(page);
    const results = new SearchResultsPage(page);
    const product = new ProductDetailPage(page);

    await page.goto('https://www.mercadolibre.com.ar');
    await home.acceptCookies();
    await home.search('iPhone 13');

    const hasResults = await results.containsResultsFor('iPhone 13');
    expect(hasResults).toBeTruthy();

    await results.selectFirstProduct();

    const price = await product.getPrice();
    expect(price).not.toBeNull();
    console.log('Precio del producto:', price);

    const hasPaymentOption =
        (await product.hasPaymentMethod('tarjeta')) ||
        (await product.hasPaymentMethod('transferencia'));

    expect(hasPaymentOption).toBeTruthy();
    console.log('Método de pago disponible: OK');
});
