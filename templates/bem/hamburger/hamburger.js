'use strict';

const BEM_BLOCKS = require('./../../../common/client/scripts/constants/BEM_BLOCKS');
const COMPONENTS = require('./../../../common/client/scripts/constants/COMPONENTS');
const EVENTS = require('./../../../common/client/scripts/constants/EVENTS');

const block = BEM_BLOCKS.HAMBURGER;

const mods = {
  opened: {
    name: block + '--opened',

    status: false
  }
};

$(document).ready(() => {
  const hamburger = $('.' + block);

  const siteHeader = $('.' + COMPONENTS.SITE_HEADER);

  hamburger.on('click', toggleHamburger);

  function toggleHamburger() {
    mods.opened.status ? closeHamburger() : openHamburger();
  }

  function openHamburger() {
    hamburger.addClass(mods.opened.name);

    mods.opened.status = true;

    siteHeader.trigger(EVENTS.CUSTOM.HAMBURGER.OPENED);
  }

  function closeHamburger() {
    hamburger.removeClass(mods.opened.name);

    mods.opened.status = false;

    siteHeader.trigger(EVENTS.CUSTOM.HAMBURGER.CLOSED);
  }
});