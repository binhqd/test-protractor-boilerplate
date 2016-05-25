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
