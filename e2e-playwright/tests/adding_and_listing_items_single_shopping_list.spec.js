import { test, expect } from '@playwright/test';

test('adding and listing items in single list', async ({ page }) => {
  await page.goto('http://localhost:7777/lists/14');
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Avacado');
  await page.getByRole('textbox').press('Enter');
  await page.getByRole('list').click();
});