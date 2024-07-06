const { join } = require('path');
const  { filePathEnv } = require('..');
exports.config = {
    runner: 'local',
    specs: [
        './features/**/*.feature'
    ],
    maxInstances: 1,
    capabilities: [{
        // platformName: 'Android',
        // automationName: 'UiAutomator2',
        //app: './mobile-automation-qa/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
        // deviceName: 'emulator-5554',
        // platformVersion: '11.0',
        // noReset: true,
        // fullReset: false
    "platformName": "Android",
     "appium:noReset": false,
     "appium:automationName":'UiAutomator2',
     "appium:deviceName": "emulator-5554",
      maxInstances: 1,
     "appium:newCommandTimeout": 240,
     "appium:app":androidAppPath,
     "appium:appActivity": 'com.swaglabsmobileapp.SplashActivity',
     "appium:autoAcceptAlerts": true,
     "appium:clearDeviceLogsOnStart":true,
     "appium:autoGrantPermissions": true,
     "appium:platformVersion": "=8.1.0",
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    cucumberOpts: {
        require: ['./features/step_definitions/**/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    services: ['appium'],
    appium: {
        args: {
            address: '127.0.0.1',
            port: 4723
        },
        command: 'appium'
    }
};
