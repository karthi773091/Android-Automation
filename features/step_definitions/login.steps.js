const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../pages/login.page');
const assert = require('chai').assert;

Given('I launch the app', async () => {
    await LoginPage.launchApp();
});

When('I enter username {string}', async (username) => {
    await LoginPage.enterUsername(username);
});

When('I enter password {string}', async (password) => {
    await LoginPage.enterPassword(password);
});

When('I click on the login button', async () => {
    await LoginPage.clickLoginButton();
});

Then('I should see the welcome message', async () => {
    const welcomeMessage = await LoginPage.getWelcomeMessage();
    assert.exists(welcomeMessage, 'Welcome message is not displayed');
});

Then('I should see an error message', async () => {
    const errorMessage = await LoginPage.getErrorMessage();
    assert.exists(errorMessage, 'Error message is not displayed');
});
