'use strict';

import Example from './modules/Example.js';
// import Filterizr from 'filterizr'; // => Schreibweise nicht möglich ohne Verwendung eines Bundlers (Webpack, Rollup, Browserify, Parcel..., Babel)
import Filterizr from '../../node_modules/filterizr/dist/filterizr.min.js'; // Derzeit möglich Schreibweise in ES6 (nur in aktuellen Browsers)

(() => {
  // === DOM & VARS ===
  const DOM = {};

  // === INIT =========

  const init = () => {
    Example();
  };

  // === EVENTS / XHR =======

  // === FUNCTIONS ====

  init();
})();
