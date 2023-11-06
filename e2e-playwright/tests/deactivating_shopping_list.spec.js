import { test, expect } from '@playwright/test';

test('deactivating shopping list', async ({ page }) => {
  await page.goto('http://localhost:7777/lists');
  await page.locator('li').filter({ hasText: 'Apple Deactivate list!' }).getByRole('button');
});