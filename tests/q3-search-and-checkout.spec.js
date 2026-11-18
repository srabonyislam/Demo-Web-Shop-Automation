
const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const SearchPage = require('../pages/SearchPage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

test('Q3 - Search product and complete checkout', async ({ page }) => {

    const email = `sqaassignment${Date.now()}@gmail.com`;
    const password = 'Test@12345';

    // Step 1: Register a new customer
    await page.goto('/register');

    await page.locator('#gender-female').click();
    await page.locator('#FirstName').fill('Test');
    await page.locator('#LastName').fill('Customer');
    await page.locator('#Email').fill(email);
    await page.locator('#Password').fill(password);
    await page.locator('#ConfirmPassword').fill(password);

    await page.locator('#register-button').click();

    await expect(
        page.getByText('Your registration completed')
    ).toBeVisible();

    // Step 2: Login
    const loginPage = new LoginPage(page);

    await page.goto('/login');
    await loginPage.login(email, password);

    await expect(
        page.getByRole('link', { name: 'Log out' })
    ).toBeVisible();

    // Step 3: Search for the product
    const searchPage = new SearchPage(page);

    await page.goto('/');
    await searchPage.searchProduct('Computing and Internet');

    await expect(
        page.getByRole('heading', { name: /search/i })
    ).toBeVisible();

    // Step 4: Open the first matching product
    await page.getByRole('link', {
        name: 'Computing and Internet',
        exact: true
    }).first().click();

    // Step 5: Change quantity and add product to cart
    const productPage = new ProductPage(page);

    await productPage.updateQuantity(2);
    await productPage.addToCart();

    // Step 6: Open cart and verify product and quantity
    await page.goto('/cart');

    const cartPage = new CartPage(page);

    await expect(cartPage.productName).toContainText(
        'Computing and Internet'
    );

    await expect(cartPage.quantity).toHaveValue('2');

    // Step 7: Accept terms and proceed to checkout
    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.acceptTerms();
    await checkoutPage.proceedToCheckout();

    // Step 8: Fill billing address
    await checkoutPage.fillBillingAddress();
    await checkoutPage.continueBilling();

    // Step 9: Continue shipping address
    await checkoutPage.continueShippingAddress();

    // Step 10: Select shipping method
    await checkoutPage.selectShippingMethod();

    // Step 11: Select payment method
    await checkoutPage.selectPaymentMethod();

    // Step 12: Continue payment information
    await checkoutPage.continuePaymentInfo();

    // Step 13: Confirm order
    await checkoutPage.confirmOrder();

    // Step 14: Verify order confirmation
    await expect(
        checkoutPage.orderConfirmation
    ).toBeVisible();
});
