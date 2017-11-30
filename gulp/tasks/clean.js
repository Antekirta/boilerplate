'use strict';

const STYLES = require('./../config/config.js').STYLES;
const SCRIPTS = require('./../config/config.js').SCRIPTS;

module.exports = () => {
  $.gulp.task('clean:js', () => {
    return $.del([
                   SCRIPTS.DEST.FOLDER
                 ]);
  });

  $.gulp.task('clean:styles', () => {
    return $.del([
                   STYLES.DEST.FOLDER
                 ]);
  });
};