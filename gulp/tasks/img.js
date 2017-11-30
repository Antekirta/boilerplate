(function () {
  'use strict';

  const IMAGES = require('./../config/config.js').IMAGES;

  module.exports = () => {
    $.gulp.task('img', () => {
      return $.gulp.src(IMAGES.SRC.RASTER)
        .pipe($.gp.imagemin())
        .pipe($.gulp.dest(IMAGES.DEST.RASTER));
    });
  };
})();