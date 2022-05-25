import puppeteer from 'puppeteer';

const homeUrl = 'http://localhost:3000/';

test('header link redirect', async () => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto(homeUrl);

    // await page.click('#home-link');
    let openedPageClass = await page.$eval('.AppContainer', (el) => el.children);

    expect(openedPageClass).toBeDefined();
    // expect(openedPageClass).toContain({"0": "div.cardContainer"});

    await browser.close();
});