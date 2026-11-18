const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Q1 - Invalid login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Open website
    await page.goto('/');

    // Navigate to Login page
    await page.getByRole('link', { name: 'Log in' }).click();

    // Enter invalid credentials
    await loginPage.login(
        'invaliduser123@example.com',
        'WrongPassword123'
    );

    // Verify error message
    await expect(loginPage.errorMessage).toBeVisible();

    // Verify user remains on Login page
    await expect(page).toHaveURL(/login/i);

});