
const { test, expect } = require('@playwright/test');

const RegisterPage = require('../pages/RegisterPage');
const LoginPage = require('../pages/LoginPage');
const ShoppingPage = require('../pages/ShoppingPage');
const CartPage = require('../pages/CartPage');

test('Q2 - Register, login and add product to cart', async ({ page }) => {

    // Generate a unique email for every test execution
    const email = `ostadassignment${Date.now()}@gmail.com`;
    const password = 'Test@12345';

    // STEP 1: Register a new customer
    const registerPage = new RegisterPage(page);

    await page.goto('/register');

    await registerPage.register(
        'Test',
        'Customer',
        email,
        password
    );

    await expect(
        page.getByText('Your registration completed')
    ).toBeVisible();

    // STEP 2: Login with the new account
    const loginPage = new LoginPage(page);

    await page.goto('/login');

    await loginPage.login(email, password);

    await expect(
        page.getByRole('link', { name: 'Log out' })
    ).toBeVisible();

    // STEP 3: Select a book and add it to cart
    const shoppingPage = new ShoppingPage(page);

    await shoppingPage.openBooksCategory();
    await shoppingPage.openProduct();
    await shoppingPage.addProductToCart();

    // STEP 4: Open shopping cart
    await page.goto('/cart');

    // STEP 5: Verify product name and quantity
    const cartPage = new CartPage(page);

    await expect(cartPage.productName).toContainText(
        'Computing and Internet'
    );

    await expect(cartPage.quantity).toHaveValue('1');
});
