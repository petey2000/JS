'use strict';

(() => {
  const $ = (qs) => document.querySelector(qs);
  const $$ = (qs) => Array.from(document.querySelectorAll(qs));

  // ========= DOM & VARS =========
  const DOM = {};
  DOM.card1 = $('.card1');
  DOM.card1Img = DOM.card1.querySelector('img');

  DOM.card2 = $('.card2');
  DOM.card2Img = DOM.card2.querySelector('img');

  DOM.card3 = $('.card3');
  DOM.card3Img = DOM.card3.querySelector('img');

  DOM.card4 = $('.card4');
  DOM.card4Img = DOM.card4.querySelector('img');

  DOM.card5 = $('.card5');
  DOM.card5Img = DOM.card5.querySelector('img');

  // ========= INIT =========

  const init = () => {
    getPic().then((data) => {
      createPic(DOM.card1Img, data.image);
    });

    getPic().then((data) => {
      createPic(DOM.card2Img, data.image);
    });

    getPic().then((data) => {
      createPic(DOM.card3Img, data.image);
    });

    getPic().then((data) => {
      createPic(DOM.card4Img, data.image);
    });

    getPic().then((data) => {
      createPic(DOM.card5Img, data.image);
    });
  };

  // ========= EVENTS / XHR =========
  const getPic = () => {
    return new Promise((resolve, reject) => {
      fetch('https://randomfox.ca/floof/')
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => console.error(err));

        
    });
  };

  // ========= FUNCTIONS =========
  const createPic = (domImg, pic) => {
    domImg.src = pic;
  };

  init();
})();
