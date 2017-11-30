'use strict';

const BEM_BLOCKS = require('./../../../common/client/scripts/constants/BEM_BLOCKS');
const EVENTS = require('./../../../common/client/scripts/constants/EVENTS');
const OFFSETS = require('./../../../common/client/scripts/constants/OFFSETS');

const block = BEM_BLOCKS.GO_TO_TOP;

const mods = {
  hidden: {
    name: block + '--hidden'
  }
};

$(document).ready(() => {
  const goToTop = $('.' + block);

  $(window).on(EVENTS.WINDOW.SCROLL, toggleHiddenMode);

  goToTop.on(EVENTS.ELEMENT.CLICK, goUp);

  function goUp() {
    $('html, body').animate({scrollTop: 0}, 'slow');
  }

  function toggleHiddenMode() {
    window.pageYOffset > OFFSETS.SITE_HEADER ? showBlock() : hideBlock();
  }

  function showBlock() {
    goToTop.removeClass(mods.hidden.name);
  }

  function hideBlock() {
    goToTop.addClass(mods.hidden.name);
  }
});