import { When, Then } from '@cucumber/cucumber';
import axios from 'axios';
import { strict as assert } from 'assert';

let response;

When('consulto el endpoint de sitios', async () => {
    response = await axios.get('https://api.mercadolibre.com/sites/MLA');
});

Then('debe responder con código 200 y contener el país {string}', async (pais) => {
    assert.equal(response.status, 200);
    assert.equal(response.data.name, pais);
});
