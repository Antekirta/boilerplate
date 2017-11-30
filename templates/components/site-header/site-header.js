'use strict';

const COMPONENTS = require('./../../../common/client/scripts/constants/COMPONENTS');
const BEM_BLOCKS = require('./../../../common/client/scripts/constants/BEM_BLOCKS');
const EVENTS = require('./../../../common/client/scripts/constants/EVENTS');
const OFFSETS = require('./../../../common/client/scripts/constants/OFFSETS');

const menuAPI = require('./../../bem-blocks/menu/menu');

const block = COMPONENTS.SITE_HEADER;

const mods = {
  scrolled: {
    name: block + '--scrolled',
    status: false
  }
};

const $siteHeader = $('.' + block);
const $mainMenu = $('.' + block + '__' + BEM_BLOCKS.MENU);

$(window).on(EVENTS.WINDOW.SCROLL, toggleHeaderMode);

$siteHeader.on(EVENTS.CUSTOM.HAMBURGER.OPENED, openMenu);
$siteHeader.on(EVENTS.CUSTOM.HAMBURGER.CLOSED, closeMenu);

function toggleHeaderMode() {
  window.pageYOffset > OFFSETS.SITE_HEADER ? setScrolledMode() : setUsualMode();

  function setScrolledMode() {
    $siteHeader.addClass(mods.scrolled.name);

    mods.scrolled.status = true;
  }

  function setUsualMode() {
    $siteHeader.removeClass(mods.scrolled.name);

    mods.scrolled.status = false;
  }
}

function openMenu() {
  menuAPI.openMenu($mainMenu);
}

function closeMenu() {
  menuAPI.closeMenu($mainMenu);
}