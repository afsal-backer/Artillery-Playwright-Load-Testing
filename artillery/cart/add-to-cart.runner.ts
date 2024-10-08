import { Page } from '@playwright/test'
import { loginToSauceLabs } from '../../tests/login/login.page'
import { testAddToCart } from './add-to-cart.actions'


export async function addToCartTest(page: Page, context: any) {
  console.log("Load testing in progress")
  await page.goto(context.vars.target)
  await loginToSauceLabs(page)
  await testAddToCart(page, context)
}


