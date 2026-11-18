
class RegisterPage {
    constructor(page) {
        this.page = page;

        this.femaleOption = page.locator('#gender-female');
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');
        this.registerButton = page.locator('#register-button');
    }

    async register(first, last, email, password) {
        await this.femaleOption.click();
        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.confirmPassword.fill(password);
        await this.registerButton.click();
    }
}

module.exports = RegisterPage;
