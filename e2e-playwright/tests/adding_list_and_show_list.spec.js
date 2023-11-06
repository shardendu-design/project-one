import { test, expect } from '@playwright/test';

test('adding list and showing list', async ({ page }) => {
  await page.goto('http://localhost:7777/lists');
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('list three');
  await page.getByRole('textbox').press('Enter');
  await page.getByRole('link', { name: 'List One' });
});