(function () {
  'use strict';

  const STYLES = require('./../config/config.js').STYLES;
  const SCRIPTS = require('./../config/config.js').SCRIPTS;

  module.exports = () => {
    $.gulp.task('watch', () => {
      $.watcher(STYLES.SRC.APP, $.gulp.series('app-styles:dev'));
      $.watcher(SCRIPTS.SRC.APP, $.gulp.series('app-logic'));
    })
  };
})();