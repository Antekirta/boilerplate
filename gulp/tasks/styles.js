(function () {
  'use strict';

  const PATHS = require('./../config/config.js').STYLES;

  module.exports = () => {
    $.gulp.task('app-styles:dev', () => {
      return $.gulp.src(PATHS.SRC.APP)
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.stylus({
                            'include css': true
                          }))
        .on('error', $.gp.notify.onError((error) => {
          return {
            title: 'Stylus',
            message: error.message
          };
        }))
        .pipe($.gp.sourcemaps.write())
        .pipe($.gp.concat(PATHS.DEST.FILENAME.APP))
        .pipe($.gp.autoprefixer({
                                  browsers: ['last 3 versions']
                                }))
        .pipe($.gulp.dest(PATHS.DEST.FOLDER));
    });

    $.gulp.task('app-styles:build', () => {
      return $.gulp.src(PATHS.SRC.APP)
        .pipe($.gp.stylus({
                            'include css': true
                          }))
        .pipe($.gp.concat(PATHS.DEST.FILENAME.APP))
        .pipe($.gp.autoprefixer({
                                  browsers: ['last 3 versions']
                                }))
        .pipe($.gp.csscomb())
        .pipe($.gp.csso())
        .pipe($.gulp.dest(PATHS.DEST.FOLDER));
    });

    $.gulp.task('vendor-styles', () => {
      if (PATHS.SRC.VENDOR.length) {
        return $.gulp.src(PATHS.SRC.VENDOR)
          .pipe($.gp.stylus({
                              'include css': true
                            }))
          .pipe($.gp.concat(PATHS.DEST.FILENAME.VENDOR))
          .pipe($.gp.autoprefixer({
                                    browsers: ['last 3 versions']
                                  }))
          .pipe($.gp.csscomb())
          .pipe($.gp.csso())
          .pipe($.gulp.dest(PATHS.DEST.FOLDER));
      }
    });
  };
})();