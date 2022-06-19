import puppeteer from 'puppeteer'

// jest.useFakeTimers()

const loginUrl = 'http://localhost:3000/login';
const userIdKey = 'userId';

test('login test', async () => {
    let browser = await puppeteer.launch({
        headless: false
    });
    let page = await browser.newPage();
    await page.goto(loginUrl);

    //-----------------------------------
    await page.type('#uname', 'Rik');
    await page.type('#pw', 'qwerty123');

    await page.click('#loginbtn');
    //-----------------------------------

    // let openedPageClass = await page.$eval('.AppContainer', el => el.children);
    const storedUserId = sessionStorage.getItem(userIdKey);

    // expect(openedPageClass).toBeDefined();
    expect(storedUserId).toBe(2);
});