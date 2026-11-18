

class ProductPage {
    constructor(page) {
        this.page = page;
        this.quantityInput = page.locator('#addtocart_13_EnteredQuantity');
        this.addToCartButton = page.locator('#add-to-cart-button-13');
        this.cartNotification = page.locator('.bar-notification');
    }

    async updateQuantity(quantity) {
        await this.quantityInput.fill(String(quantity));
    }

    async addToCart() {
        await this.addToCartButton.click();

        // Wait until the website confirms the product was added
        await this.cartNotification.waitFor({
            state: 'visible',
            timeout: 10000
        });
    }
}

module.exports = ProductPage;

