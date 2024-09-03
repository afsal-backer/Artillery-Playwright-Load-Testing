import { Page, expect } from '@playwright/test'

// Locators

export const cartItemHeaderText = (page: Page) => page.getByTestId("inventory-item-name")


// Helpers

export async function assertItemInCart(page: Page, itemName: string){
    await expect(cartItemHeaderText(page)).toContainText(itemName);
}

// Asserts