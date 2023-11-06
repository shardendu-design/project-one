import { test, expect } from '@playwright/test';

test('showing single shopping list', async ({ page }) => {
  await page.goto('http://localhost:7777/lists');
  await page.getByRole('link', { name: 'List One' });
  await page.getByRole('heading', { name: 'Shopping List - List One' });
  await page.getByRole('heading', { name: 'Name: List One' });
  await page.getByText('Name: Add Item');
});