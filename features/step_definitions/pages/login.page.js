class LoginPage {
    get usernameField() { return $('~username') }  // Update the selector based on your app's properties
    get passwordField() { return $('~password') }  // Update the selector based on your app's properties
    get loginButton() { return $('~loginButton') }  // Update the selector based on your app's properties
    get welcomeMessage() { return $('~welcomeMessage') }  // Update the selector based on your app's properties
    get errorMessage() { return $('~errorMessage') }  // Update the selector based on your app's properties

    async launchApp() {
        await browser.url('');  // Launch the app, leave URL empty for mobile apps
    }

    async enterUsername(username) {
        await this.usernameField.setValue(username);
    }

    async enterPassword(password) {
        await this.passwordField.setValue(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async getWelcomeMessage() {
        return await this.welcomeMessage.isDisplayed();
    }

    async getErrorMessage() {
        return await this.errorMessage.isDisplayed();
    }
}

module.exports = new LoginPage();
