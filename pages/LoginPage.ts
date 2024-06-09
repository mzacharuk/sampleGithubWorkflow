import { Page } from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly userNameInput;
    readonly passwordInput;
    readonly loginButton;

    constructor(page){
        this.page = page;
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async login(){
        await this.userNameInput.fill('standard_user');
        await this.passwordInput.fill('secret_sauce');
        await this.loginButton.click();
    }
}