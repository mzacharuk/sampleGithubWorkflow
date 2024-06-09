import { Page } from '@playwright/test';

export class ProductListPage{
    readonly page;
    readonly addProductToCart;
    readonly shoppingCartIcon;

    constructor(page){
        this.page = page;
        this.addProductToCart = page.locator('#add-to-cart-sauce-labs-backpack');
        this.shoppingCartIcon = page.locator('#shopping_cart_container');
    }
}