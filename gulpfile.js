'use strict';

var gulp = require('gulp');
var ngConstant = require('gulp-ng-constant');

gulp.paths = {
  src : './',
  dist : './dist/',
  tmp : '.tmp/',
  e2e : 'test/e2e/',
  test : 'test/'
};

require('require-dir')('./gulp');

gulp.task('config:test', function() {
  let tmpENV = process.env.NODE_ENV;

  process.env.NODE_ENV = 'test';
  gulp.start('config', function() {
    process.env.NODE_ENV = tmpENV;
  });
});
