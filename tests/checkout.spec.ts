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

    const checkoutButton = page.locator('#checkout');
    await checkoutButton.click();

    const firstName = page.locator('#first-name');
    await firstName.fill('Michal');

    const lastName = page.locator('#last-name');
    await lastName.fill('Test');

    const zipCode = page.locator('#postal-code');
    await zipCode.fill('2333');

    const continueButton = page.locator('#continue');
    await continueButton.click();

    const finishButton = page.locator('#finish');
    await finishButton.click();

    const titleCheckout = page.locator(`span[data-test='title']`);
    await expect(titleCheckout).toHaveText("Checkout: Complete!");

    const orderCompleteHeader = page.locator('[data-test="complete-header"]')
    await expect(orderCompleteHeader).toHaveText("Thank you for your order!");

});