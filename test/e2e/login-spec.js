// ...
var screenshot = require('./../screenshot');

describe('Test Login page', function() {
  var ptor;
  beforeEach(function() {
    // doing something here
    // ptor = protractor.getInstance();
  });

  var width = 1600;
  var height = 2400;
  browser.driver.manage().window().setSize(width, height);
  // browser.driver.manage().window().maximize();

  // clean up

  describe('Testing login page', function() {

    var loginUrl = browser.params.baseUrl + browser.params.login.uri;

    it('it can be accessed from Homepage by click on Login button', function() {
      browser.ignoreSynchronization = true;
      browser.get(browser.params.baseUrl);
      browser.manage().deleteAllCookies();

      browser.executeScript('window.sessionStorage.clear();');
      browser.executeScript('window.localStorage.clear();');

      console.log("Clearing previous cookies/storage")
      browser.sleep(2000);

      var btnLogin = by.id('btnLogin');
      var loginContainer = by.css('.sign_in_container');

      browser.driver.isElementPresent(btnLogin).then(function(isPresent) {
        expect(isPresent).toBe(true);

        browser.driver.findElement(btnLogin).then(function(elem) {
          elem.click().then(function() {
            expect(browser.getTitle()).toEqual('Login | Ideapod');
            expect(browser.getCurrentUrl()).toEqual(loginUrl);
          });
        });

      });

    });

    // browser.ignoreSynchronization = false;
    it('or it can be accessed directly.', function() {
      browser.get(loginUrl);

    });

    it('It should have a title', function() {
      expect(browser.getTitle()).toEqual('Login | Ideapod');

      // Take screenshot for homepage
      // browser.takeScreenshot().then(function(png) {
      //
      // screenshot.writeScreenShot(png, 'login-direct.png');
      // });
    });

    it('should have a username field', function() {
      expect(element.all(by.model('user.email')).count()).toBe(1);
    });

    it('should have a password field', function() {
      expect(element.all(by.model('user.password')).count()).toBe(1);
    });

    it('a submit button', function() {
      expect(element.all(by.id('btnLogin')).count()).toBe(1);
    });

    it('a connect with Facebook button', function() {
      expect(element.all(by.id('btnFacebook')).count()).toBe(1);
    });

    it('and a forgot password link', function() {
      expect(element.all(by.id('lnkForgotPassword')).count()).toBe(1);
    });

    // Connect with email
    it('It should show error in case wrong email/password', function() {
      element(by.model('user.email')).sendKeys(browser.params.login.email);
      element(by.model('user.password')).sendKeys(browser.params.login.invalidPassword);

      element(by.id('btnLogin')).click().then(function() {

        var error = by.css('.alert-error');

        browser.driver.isElementPresent(error).then(function(isPresent) {
          expect(isPresent).toBe(true);

          browser.wait(function() {
            return element(error).isDisplayed().then(function(isDisplayed) {
              return isDisplayed
            });
          }, 3000);

          browser.driver.findElement(error).then(function(elem) {
            expect(elem.getText()).toMatch('Invalid email or password.');
          });
        });

      });

    });

    // Connect with email
    it('It should do a redirection after successful login', function() {
      var email = element(by.model('user.email'));
      email.clear();
      email.sendKeys(browser.params.login.email);

      var password = element(by.model('user.password'));
      password.clear();
      password.sendKeys(browser.params.login.validPassword);

      browser.ignoreSynchronization = true;
      element(by.id('btnLogin')).click().then(function() {
        var error = element(by.css('.alert-error'));

        error.isDisplayed().then(function(isDisplayed) {
          if (isDisplayed) {
            expect(error.getText()).toMatch('Invalid email or password.');
          } else {
            browser.driver.wait(function() {
              return browser.driver.isElementPresent(by.id('user-dropdown-menu')).then(function(el) {
                return el === true;
              });
            }).then(function() {
              expect(browser.getCurrentUrl()).not.toEqual(loginUrl);
            });
          }
        });
      });

    });

    // TODO: Connect with Facebook
  });

});
