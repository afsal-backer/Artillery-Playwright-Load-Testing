import { Page } from '@playwright/test'
import { loginToSauceLabs } from '../../tests/login/login.page'
import { testAddToCart } from './add-to-cart.actions'


export async function addToCartTest(page: Page, context: any) {
  await page.goto(context.vars.target)
  await loginToSauceLabs(page, context)
  await testAddToCart(page, context)
}

// export async function beforeTest() {
//   await setUserSession()
// }

// export async function afterTest() {
//   await endUserSession()
// }
