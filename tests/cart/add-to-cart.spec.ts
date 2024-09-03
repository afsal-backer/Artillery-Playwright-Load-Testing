import { test, expect } from '@playwright/test';
import * as login from '../login/login.page'
import * as product from '../products/products.page'
import * as cart from './cart.page'
import { domainToRunTestAgainst } from  '../../playwright.config'

test('Add to cart test', async ({ page }) => {
  await page.goto(domainToRunTestAgainst);
  await login.loginToSauceLabs(page)
  await product.addProductToCart(page, 'Sauce Labs Backpack')
  await cart.assertItemInCart(page, 'Sauce Labs Backpack')
});


