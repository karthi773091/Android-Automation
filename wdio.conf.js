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
        platformName: 'Android',
        'appium:deviceName': 'Pixel 4 API 31',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        ///home/karthikeyan/webdriverio-appium/app/android/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk
        'appium:app': path.join(process.cwd(),'./app/android/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk')
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
