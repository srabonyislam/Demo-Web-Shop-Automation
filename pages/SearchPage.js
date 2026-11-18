
class SearchPage {
    constructor(page) {
        this.page = page;

        this.searchInput = page.locator('#small-searchterms');
        this.searchButton = page.locator('.search-box-button');
    }

    async searchProduct(productName) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }
}

module.exports = SearchPage;
