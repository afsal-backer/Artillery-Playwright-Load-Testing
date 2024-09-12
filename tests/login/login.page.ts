import { Page } from '@playwright/test'

// Locators

export const userNameField = (page: Page) => page.getByTestId("username")
export const passwordField = (page: Page) => page.getByTestId("password")
export const loginButton = (page: Page) => page.getByTestId("login-button")

// Helpers

export async function loginToSauceLabs(page: Page){
    await userNameField(page).fill('standard_user');
    await passwordField(page).fill('secret_sauce');
    await loginButton(page).click();
}

// Asserts