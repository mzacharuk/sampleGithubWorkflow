import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('succesfull login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
});

test('product added to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#shopping_cart_container').click();

    await expect(page.locator("#item_4_title_link")).toContainText("Sauce Labs Backpack");
});

