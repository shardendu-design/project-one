import { test, expect } from '@playwright/test';

test('mark item as collected', async ({ page }) => {
  await page.goto('http://localhost:7777/lists/14');
  await page.getByRole('button', { name: 'Mark Collected' }).first().click();
  await page.getByText('Avacado').first().click();
});