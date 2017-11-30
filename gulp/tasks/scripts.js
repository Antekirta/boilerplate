(function () {
  'use strict';

  const PATHS = require('./../config/config.js').SCRIPTS;

  module.exports = () => {
    $.gulp.task('app-logic', () => {
      var src = [];

      PATHS.SRC.APP.forEach(pattern => {
        $.glob.sync(pattern).forEach(filePath => {
          src.push(filePath);
        });
      });

      return $.browserify({
                            entries: src
                          })
        .bundle()
        .pipe($.source(PATHS.DEST.FILENAME.APP))
        .pipe($.gulp.dest(PATHS.DEST.FOLDER));
    });

    $.gulp.task('app-logic:production', () => {
      return $.gulp.src(PATHS.DEST.FOLDER + PATHS.DEST.FILENAME.APP)
        .pipe($.babel({
                        minified: true
                      }))
        .pipe($.gulp.dest(PATHS.DEST.FOLDER));
    });

    $.gulp.task('vendor-logic', () => {
      return $.gulp.src(PATHS.SRC.VENDOR)
        .pipe($.gp.concat(PATHS.DEST.FILENAME.VENDOR))
        .pipe($.babel({
                        minified: true
                      }))
        .pipe($.gulp.dest(PATHS.DEST.FOLDER));
    });
  };
})();