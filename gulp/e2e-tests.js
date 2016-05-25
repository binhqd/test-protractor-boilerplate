'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var browserSync = require('browser-sync');

var paths = gulp.paths;
var $ = require('gulp-load-plugins')({
  pattern : [ 'gulp-*', 'main-bower-files', 'uglify-save-license', 'del' ]
});

// Downloads the selenium webdriver
gulp.task('webdriver-update', $.protractor.webdriver_update);

gulp.task('webdriver-standalone', $.protractor.webdriver_standalone);

function runProtractor(done) {
  gulp.src(paths.test + '/e2e/**/*.js').pipe($.protractor.protractor({
    configFile : paths.test + 'protractor.conf.js'
  })).on('error', function(err) {
    // Make sure failed tests cause gulp to exit non-zero
    browserSync.exit();
    process.exit(1);
    done();
    throw err;
  }).on('end', function() {
    // Close browser sync server
    browserSync.exit();
    process.exit();
    done();
  });
}

gulp.task('protractor', runProtractor);
