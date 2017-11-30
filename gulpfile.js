'use strict';

global.$ = {
  path: {
    tasks: require('./gulp/config/tasks')
  },
  gulp: require('gulp'),
  del: require('del'),
  browserify: require('browserify'),
  source: require('vinyl-source-stream'),
  glob: require('glob'),
  babel: require('gulp-babel'),
  watcher: require('gulp-watch'),
  gp: require('gulp-load-plugins')()
};

$.path.tasks.forEach((taskPath) => {
  require(taskPath)();
});

$.gulp.task(
  'dev',
  $.gulp.series(
    'clean:js',
    'clean:styles',
    $.gulp.parallel(
      'app-styles:dev',
      'app-logic')));

$.gulp.task(
  'build',
  $.gulp.series(
    'clean:js',
    'clean:styles',
    $.gulp.parallel(
      //'vendor-styles',
      'app-styles:build',
      'vendor-logic',
      'app-logic',
      'img'),
    'app-logic:production'));

$.gulp.task(
  'default',
  $.gulp.series('clean:js', 'clean:styles', 'dev', $.gulp.parallel('watch')));