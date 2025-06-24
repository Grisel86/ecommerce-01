import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../POM/HomePage';
import { SearchResultsPage } from '../POM/SearchResultsPage';
import { ProductDetailPage } from '../POM/ProductDetailPage';
import { World } from '../support/world';

let homePage: HomePage;
let resultsPage: SearchResultsPage;
let productPage: ProductDetailPage;

Given('el usuario navega a la página de inicio de MercadoLibre', async function (this: World) {
    await this.page.goto('https://www.mercadolibre.com.ar');
    homePage = new HomePage(this.page);
    resultsPage = new SearchResultsPage(this.page);
    productPage = new ProductDetailPage(this.page);
    await homePage.acceptCookies();
});

When('busca {string}', async function (this: World, term: string) {
    await homePage.search(term);
});

Then('se muestran resultados relacionados', async function (this: World) {
    const hasResults = await resultsPage.containsResultsFor('iPhone 13');
    expect(hasResults).toBeTruthy();
});

Then('selecciona el primer producto', async function (this: World) {
    await resultsPage.selectFirstProduct();
});

Then('el producto tiene un precio visible', async function (this: World) {
    const price = await productPage.getPrice();
    expect(price).not.toBeNull();
    console.log('Precio:', price);
});

Then('el producto ofrece al menos un método de pago', async function (this: World) {
    const hasPayment =
        (await productPage.hasPaymentMethod('tarjeta')) ||
        (await productPage.hasPaymentMethod('transferencia'));
    expect(hasPayment).toBeTruthy();
});

Then('el producto ofrece cuotas sin interés', async function (this: World) {
    const hasCuotas = await productPage.hasInstallments();
    expect(hasCuotas).toBeTruthy();
});

Then('el producto tiene envío gratis', async function (this: World) {
    const envioGratis = await productPage.hasFreeShipping();
    expect(envioGratis).toBeTruthy();
});
