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

  describe('Testing Homepage', function() {
    it('It can be accessible.', function() {
      browser.get(browser.params.baseUrl);
    });

    it('Page title must match', function() {
      expect(browser.getTitle()).toEqual('ATeam');
    });

    it('It should have a search input', function() {
      expect(element.all(by.id('exampleInputName2')).count()).toEqual(1);
    });

    it('Url must match', function() {
      var url = "http://ateam.greenglobal.vn:85/";
      expect(browser.getCurrentUrl()).toEqual(url);
    });

    it('Contact form should have fullname field', function() {
      expect(element.all(by.model('LandingCtrl.contact.fullName')).count()).toEqual(1);
    });

    it('Check if a popup has been opened', function() {
      var btnLogin = by.css('.login-bt');
      browser.driver.findElement(btnLogin).then(function(elem) {
        elem.click().then(function() {
          expect(element.all(by.css('.signup-form')).count()).toEqual(1);
        });
      });
    });

    it('Popup can be closed', function() {
      var closeButton = by.css('.modal-popup-content button[type="button"]');
      browser.driver.findElement(closeButton).then(function(elem) {
        elem.click().then(function() {
          browser.sleep(1000);
          expect(element.all(by.css('.signup-form')).count()).toEqual(0);
        });
      })
    });

    // search
    it ('Search function must be working properly', function() {
      element(by.id('exampleInputName2')).sendKeys('la');

      element(by.css('.search-form-banner button[type="submit"]')).click();

      var resultContainer = by.css('.list-item-history-container');
      browser.wait(function() {

        return browser.driver.isElementPresent(resultContainer).then(function(isPresent) {
          return isPresent;
        });
      },3000);

      expect(element.all(by.css('.list-item-history-container .item-content')).count()).toBeGreaterThan(0);
    })
  });

});
