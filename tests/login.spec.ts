import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Successful login to saucedemo.com', async ({ page }) => {
 const loginPage = new LoginPage(page);

  await page.goto('https://www.saucedemo.com/');

  await loginPage.login();

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});