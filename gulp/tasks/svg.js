(function () {
  'use strict';

  const IMAGES = require('./../config/config.js').IMAGES;

  module.exports = () => {
    $.gulp.task('svg', () => {
      return $.gulp.src(IMAGES.SRC.SVG)
        .pipe($.gp.svgmin({
                            js2svg: {
                              pretty: true
                            }
                          }))
        .pipe($.gp.cheerio({
                             run: ($) => {
                               $('[fill]').removeAttr('fill');
                               $('[stroke]').removeAttr('stroke');
                               $('[style]').removeAttr('style');
                             },
                             parserOptions: {
                               xmlMode: true
                             }
                           }))
        .pipe($.gp.replace(';gt;', '>'))
        .pipe($.gp.svgSprite({
                               mode: {
                                 symbol: {
                                   sprite: 'sprite.svg'
                                 }
                               }
                             }))
        .pipe($.gulp.dest(IMAGES.DEST.SVG));
    });
  };
})();