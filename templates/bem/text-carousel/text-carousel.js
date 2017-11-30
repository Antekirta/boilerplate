'use strict';

const BEM_BLOCKS = require('./../../../common/client/scripts/constants/BEM_BLOCKS');

const block = BEM_BLOCKS.TEXT_CAROUSEL;

const elems = {
  list: block + '__list'
};

function init(className, options) {
  $('.' + className).find('.' + elems.list).slick(options);
}

module.exports = {
  init: init
};