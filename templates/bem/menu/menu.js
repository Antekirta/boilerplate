'use strict';

const BEM_BLOCKS = require('./../../../common/client/scripts/constants/BEM_BLOCKS');

const block = BEM_BLOCKS.MENU;

const elems = {
  list: block + '__list'
};

const mods = {
  opened: {
    name: elems.list + '--opened'
  }
};

function openMenu(menu) {
  menu.find('.' + elems.list).addClass(mods.opened.name);
}

function closeMenu(menu) {
  menu.find('.' + elems.list).removeClass(mods.opened.name);
}

module.exports = {
  openMenu: openMenu,

  closeMenu: closeMenu
};