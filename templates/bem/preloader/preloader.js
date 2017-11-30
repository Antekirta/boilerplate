'use strict';

const BEM_BLOCKS = require('./../../../common/client/scripts/constants/BEM_BLOCKS');
const EVENTS = require('./../../../common/client/scripts/constants/EVENTS');

const block = BEM_BLOCKS.PRELOADER;

$(document).ready(() => {
  const $preloader = $('.' + block);

  $preloader.fadeOut('slow');
});