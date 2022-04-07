'use strict';

import moment from '../../node_modules/moment/dist/moment.js';

// import moment from 'moment' // < Schreibweise mit direkter Suche in node_modules nur über bundler (parcel, browserify, require.js, rollup, webpack)
(() => {
  // === DOM & VARS ===
  const DOM = {};
  DOM.datetime = document.querySelector('.datetime');
  // === INIT =========

  const init = () => {
    console.log('init');
    const date = moment().format('DD.MM.YYYY');
    DOM.datetime.textContent = date;
  };

  // === EVENTS / XHR =======

  // === FUNCTIONS ====

  init();
})();
