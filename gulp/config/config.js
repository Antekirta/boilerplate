'use strict';

const PUBLIC = './public/';

const SRC = {
  BEM: './templates/bem/',

  COMPONENTS: './templates/bem/',

  COMMON: {
    STYLES: './common/client/stylus/',

    SCRIPTS: '/common/client/scripts/'
  },

  IMAGES: PUBLIC + 'images/'
};

const DIST = {
  CSS: './public/css/',

  JS: './public/js/',

  IMAGES: PUBLIC + 'images/'
};

// Exported constants

const STYLES = {
  SRC: {
    APP: [
      SRC.BEM + '**/*.styl',
      SRC.COMPONENTS + '**/*.styl',
      SRC.COMMON.STYLES + '*.styl'
    ],

    VENDOR: []
  },

  DEST: {
    FOLDER: DIST.CSS,

    FILENAME: {
      APP: 'app-styles.min.css',

      VENDOR: 'vendor-styles.min.css'
    }
  }
};

const SCRIPTS = {
  SRC: {
    APP: [
      SRC.BEM + '**/*.js',
      SRC.COMPONENTS + '**/*.js',
      SRC.COMMON.SCRIPTS + '**/*.js'
    ],

    VENDOR: [
      './node_modules/lodash/lodash.min.js',
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/slick-carousel/slick/slick.min.js'
    ]
  },

  DEST: {
    FOLDER: DIST.JS,

    FILENAME: {
      APP: 'app-logic.min.js',

      VENDOR: 'vendor-logic.min.js'
    }
  }
};

const IMAGES = {
  SRC: {
    SVG: SRC.IMAGES + 'svg/*',

    RASTER: SRC.IMAGES + '*'
  },

  DEST: {
    SVG: SRC.IMAGES + 'svg/',

    RASTER: SRC.IMAGES
  }
};

module.exports = {
  STYLES: STYLES,

  SCRIPTS: SCRIPTS,

  IMAGES: IMAGES
};