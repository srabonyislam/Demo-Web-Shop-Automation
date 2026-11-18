
class CheckoutPage {
    constructor(page) {
        this.page = page;

        // Billing address fields
        this.firstName = page.locator('#BillingNewAddress_FirstName');
        this.lastName = page.locator('#BillingNewAddress_LastName');
        this.email = page.locator('#BillingNewAddress_Email');
        this.company = page.locator('#BillingNewAddress_Company');
        this.country = page.locator('#BillingNewAddress_CountryId');
        this.state = page.locator('#BillingNewAddress_StateProvinceId');
        this.city = page.locator('#BillingNewAddress_City');
        this.address = page.locator('#BillingNewAddress_Address1');
        this.zipCode = page.locator('#BillingNewAddress_ZipPostalCode');
        this.phone = page.locator('#BillingNewAddress_PhoneNumber');

        // Billing continue
        this.billingContinueButton =
          page.locator('#billing-buttons-container .new-address-next-step-button');

        // Shipping address
        this.shippingAddress =
            page.locator('#shipping-address-select');

        this.shippingAddressContinueButton =
        page.locator('#shipping-buttons-container .new-address-next-step-button');

        // Shipping method
        this.groundShipping =
            page.locator('#shippingoption_0');

        this.shippingContinueButton =
            page.locator('#shipping-method-buttons-container .shipping-method-next-step-button');

        // Payment method
        this.cashOnDelivery =
            page.locator('#paymentmethod_0');

        this.paymentMethodContinueButton =
            page.locator('.payment-method-next-step-button');

        // Payment information
        this.paymentInfoContinueButton =
            page.locator('.payment-info-next-step-button');

        // Cart terms and checkout
        this.termsCheckbox =
            page.locator('#termsofservice');

        this.checkoutButton =
            page.locator('#checkout');

        // Order confirmation
        this.confirmButton =
            page.locator('.confirm-order-next-step-button');

        this.orderConfirmation = page.getByText(
            'Your order has been successfully processed!'
        );
    }

    // Fill billing address
    async fillBillingAddress() {
        await this.country.selectOption('10');
        await this.city.fill('Dhaka');
        await this.address.fill('House 2, Test Road');
        await this.zipCode.fill('1216');
        await this.phone.fill('01700000000');
    }

    // Continue billing
    async continueBilling() {
        await this.billingContinueButton.click();
    }

    // Select shipping address
    async continueShippingAddress() {
        await this.shippingAddressContinueButton.click();
    }

    // Select shipping method
    async selectShippingMethod() {
        await this.groundShipping.check();
        await this.shippingContinueButton.click();
    }

    // Select payment method
    async selectPaymentMethod() {
        await this.cashOnDelivery.check();
        await this.paymentMethodContinueButton.click();
    }

    // Continue payment information
    async continuePaymentInfo() {
        await this.paymentInfoContinueButton.click();
    }

    // Accept terms and conditions
    async acceptTerms() {
        await this.termsCheckbox.check();
    }

    // Proceed to checkout
    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    // Confirm order
    async confirmOrder() {
        await this.confirmButton.click();
    }
}

module.exports = CheckoutPage;

