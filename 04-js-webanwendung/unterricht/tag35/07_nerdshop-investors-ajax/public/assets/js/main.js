'use strict';

(() => {
  const $ = (qs) => document.querySelector(qs);
  const $$ = (qs) => Array.from(document.querySelectorAll(qs));

  // === DOM & VARS ===
  const DOM = {};
  DOM.stockInfo = $('.stock-info');
  DOM.volume = DOM.stockInfo.querySelector('.volume');
  DOM.price = DOM.stockInfo.querySelector('.price');
  DOM.time = DOM.stockInfo.querySelector('.time');

  console.log(DOM);
  // === INIT =========

  const init = () => {
    console.log('init');
    getStockInfo();
  };

  // === EVENTS / XHR =======
  const getStockInfo = () => {
    // seit ES6 AJAJ über fetch - API
    fetch('/info')
      .then((res) => res.json())
      .then((data) => showStockData(data))
      .catch((err) => console.error(err));

    setTimeout(getStockInfo, 1000);
  };

  // === FUNCTIONS ====
  const showStockData = (data) => {
    DOM.price.textContent = data.price;
    DOM.volume.textContent = data.volume;
    DOM.time.textContent = data.time;
  };

  init();
})();
