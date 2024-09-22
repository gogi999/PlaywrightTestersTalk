import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('327r12r81gr78');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('ifreoghoqwhfoqh');
  await page.getByRole('main').click();
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});
