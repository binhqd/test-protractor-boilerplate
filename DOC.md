## Prepare windows
### Set windows size
```javascript
var width = 1600;
var height = 2400;
browser.driver.manage().window().setSize(width, height);
```
### Get a page by enter an URL
```javascript
it('It can be accessible.', function() {
  browser.get("http://yourdomain.com");
});
```
### Clear site data
```javascript
browser.manage().deleteAllCookies();
browser.executeScript('window.sessionStorage.clear();');
browser.executeScript('window.localStorage.clear();');
```
### Check title
```javascript
it('Page title must match', function() {
  expect(browser.getTitle()).toEqual('Login | Ideapod');
});
```

### Check url
```javascript
it('Url must match', function() {
  var url = "http://somedomain.com/someuri/something";
  expect(browser.getCurrentUrl()).toEqual(url);
});
```
### Check if element exist
#### Using class
```javascript
it('It should have this input', function() {
  expect(element.all(by.css('someInputClass')).count()).toEqual(1);
});
```
#### Using ID
```javascript
it('It should have a search input', function() {
  expect(element.all(by.id('someInputID')).count()).toEqual(1);
});
```
#### Using model
```javascript
it('Contact form should have fullname field', function() {
  expect(element.all(by.model('LandingCtrl.contact.fullName')).count()).toEqual(1);
});
```
### Check if a popup is working correctly
```javascript
it('Check if a popup has been opened', function() {
  browser.wait(function() {
    var elementToFind = by.css('.modal-registration-form');

    return browser.driver.isElementPresent(elementToFind).then(function(isPresent) {
     return isPresent;
    });
  },15000);

  element.all(by.css('.modal-registration-form')).then(function(elements) {
    expect(elements.length).toBe(1);
  });
});
```
### Form checking
```javascript

```
