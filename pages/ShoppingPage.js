
class ShoppingPage {
    constructor(page) {
        this.page = page;

        this.booksCategory = page.getByRole('link', {
            name: 'Books',
            exact: true
        }).first();

        this.productLink = page.getByRole('link', {
            name: 'Computing and Internet',
            exact: true
        });

        this.addToCartButton = page.locator('#add-to-cart-button-13');
    }

    async openBooksCategory() {
        await this.booksCategory.click();
    }

    async openProduct() {
        await this.productLink.click();
    }

    async addProductToCart() {
        await this.addToCartButton.click();

        await this.page.locator('.bar-notification').waitFor({
            state: 'visible',
            timeout: 10000
        });
    }
}

module.exports = ShoppingPage;
