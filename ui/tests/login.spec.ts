import { test, expect } from '@playwright/test';

test('login works with valid credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/\/secure/);
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});
