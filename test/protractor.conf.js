var seleniumDrivers = require('../node_modules/protractor/config.json').webdriverVersions;

var configFile = '';

configFile = "test-config.json";

var myConfig = require('../' + configFile);
//var config = require("test-config.json");

exports.config = {
  webAddress : myConfig.websiteUrl,
  framework : 'jasmine2',
  seleniumAddress : 'http://localhost:4444/wd/hub',
  // seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-' + seleniumDrivers.selenium + '.jar',
  localSeleniumStandaloneOpts: {
    // The port to start the Selenium Server on, or null if the server should
    // find its own unused port.
    port: null,
    // Additional command line options to pass to selenium. For example,
    // if you need to change the browser timeout, use
    // seleniumArgs: ['-browserTimeout=60']
    args: []
  },
  specs : [ 'e2e/**/*-spec.js' ],
  onPrepare : function() {
    var SpecReporter = require('jasmine-spec-reporter');
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace : 'all'
    }));
  },
  onComplete: function() {
    console.log('Protractor test completed.');
  },
  capabilities: {
    'browserName': 'chrome',

    /*
     * Can be used to specify the phantomjs binary path.
     * This can generally be ommitted if you installed phantomjs globally.
     */
    'phantomjs.binary.path': require('phantomjs').path,

    /*
     * Command line args to pass to ghostdriver, phantomjs's browser driver.
     * See https://github.com/detro/ghostdriver#faq
     */
    'phantomjs.ghostdriver.cli.args': ['--debug=true']
  },

  // multiCapabilities : [ {
  // browserName : 'firefox'
  // }, {
  // browserName : 'chrome'
  // } ],
  params : {
    baseUrl : myConfig.websiteUrl,
    login : {
      email : 'binhqd@gmail.com',
      invalidPassword : '123123',
      validPassword : '123^%$78',
      uri: 'users/sign_in'
    },
    idea: {
      createUrl: 'create'
    }
  }
};
