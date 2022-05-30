import puppeteer from 'puppeteer'

const homeUrl = 'http://localhost:3000/';
const userIdKey = 'userId';

test('login test', async () => {
    let browser = await puppeteer.launch({
        headless: false
    });
    let page = browser.newPage();
    await page.goto(homeUrl);

    //-----------------------------------
    await page.click('#uname');
    await page.type('Rik');

    await page.click('#pw')
    await page.type('qwerty123');

    await page.click('#loginbtn');
    //-----------------------------------

    let openedPageClass = await page.$eval('.AppContainer', el => el.children);
    const storedUserId = sessionStorage.getItem(userIdKey);

    expect(openedPageClass).toBeDefined();
    expect(storedUserId).toBe(2);
});