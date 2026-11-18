class LoginPage {
    constructor(page) {
        this.page = page;

        // Define your locators here
        this.usernameField = page.locator('#Email');
        this.passwordField = page.locator('#Password');
        this.loginButton = page.locator('.login-button');
        this.errorMessage = page.getByText('No customer account found');
    }

    async login(username, password) {
        // Fill username
        await this.usernameField.fill(username);
        // Fill password
        await this.passwordField.fill(password);
        // Click login button
        await this.loginButton.click();
    }
}

module.exports = LoginPage;