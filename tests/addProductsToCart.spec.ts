import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductListPage } from '../pages/ProductListPage';

test('Is product added to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productListPage = new ProductListPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await productListPage.addProductToCart.click();
    await productListPage.shoppingCartIcon.click();

    const shoppingCartItem = page.locator("#item_4_title_link");
    await expect(shoppingCartItem).toContainText("Sauce Labs Backpack");
});