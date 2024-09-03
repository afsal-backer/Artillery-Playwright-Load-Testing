import { Page, expect } from '@playwright/test'

import * as product from '../../tests/products/products.page'
import * as cart from '../../tests/cart/cart.page'

export async function testAddToCart(page: Page, context: any) {
  await product.addProductToCart(page, 'Sauce Labs Backpack')
  await cart.assertItemInCart(page, 'Sauce Labs Backpack')
}
