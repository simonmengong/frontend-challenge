/**
 * @jest-environment puppeteer
 */
import 'expect-puppeteer';

beforeAll(async () => {
    jest.setTimeout(60000);
    await page.goto('http://localhost:3000/extension')
});

describe('dom manipulation view', () =>{
    jest.setTimeout(60000);
    it("contains the budget to beat button text value", async () => {
        await page.waitForSelector(".injected-button");
        const text = await page.$eval(".injected-button", (e) => e.textContent);
        expect(text).toContain("Budget-to-Beat:");
    });
});