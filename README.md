## Install npm packages
```sh
npm install
```

## Config
Application parameters should be put in `./test/test-config.json`

## Protractor settings
All protractor settings are put in ``./test/protractor.conf.js`

## Update webdriver standalone
```sh
$ ./node_modules/.bin/webdriver-manager update --standalone
```

## Start selenium standalone
```
$ ./node_modules/.bin/webdriver-manager start
```

## Perform the test and get output
```sh
npm test
```
