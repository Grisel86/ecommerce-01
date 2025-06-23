import { test, expect } from '@playwright/test';

test('GET MercadoLibre site info (MLA)', async ({ request }) => {
  const response = await request.get('https://api.mercadolibre.com/sites/MLA');

  // ✅ Response básico
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  // ✅ Validar response
  const body = await response.json();
  expect(body).toHaveProperty('id', 'MLA');
  expect(body).toHaveProperty('name', 'Argentina');
  expect(body.default_currency_id).toBe('ARS');
  expect(body.country_id).toBe('AR');
});
