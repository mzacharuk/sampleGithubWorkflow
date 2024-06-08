import { Page } from "@playwright/test";

export class LoginPage{
    readonly page;
    readonly username;
    readonly password;
    readonly loginButton;

    constructor(page){
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator("//input[@id='login-button']");
    }

    async login(){
        await this.username.fill('standard_user');
        await this.password.fill('secret_sauce');
        await this.loginButton.click();
    }
}