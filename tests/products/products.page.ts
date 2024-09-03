import { Page, expect } from '@playwright/test'

// Locators

export const productHeaderText = (page: Page) => page.getByTestId("item-4-title-link")
export const backPackHeader = (page: Page) => page.getByTestId("add-to-cart-sauce-labs-backpack")
export const shoppingCartButton = (page: Page) => page.getByTestId("shopping-cart-link")


// Helpers

export async function addProductToCart(page: Page, itemName: string){
    await expect(productHeaderText(page)).toContainText(itemName);
    await backPackHeader(page).click();
    await shoppingCartButton(page).click();
}

// Asserts