import { After, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000);

After(async function (scenario) {
    if (scenario.result?.status === 'FAILED') {
        const buffer = await this.page.screenshot();
        this.attach(buffer, 'image/png');
    }
});

