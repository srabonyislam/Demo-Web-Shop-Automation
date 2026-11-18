
class CartPage {
    constructor(page) {
        this.page = page;

        // Cart page locators
        this.productName = page.locator('.product-name');
        this.quantity = page.locator('input.qty-input');
    }

    async getProductName() {
        return await this.productName.textContent();
    }

    async getQuantity() {
        return await this.quantity.inputValue();
    }
}

module.exports = CartPage;
