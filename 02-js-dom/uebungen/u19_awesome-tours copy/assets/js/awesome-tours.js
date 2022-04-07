'use strict';
const $ = qs => document.querySelector (qs);
const $$ = qs => Array.from (document.querySelectorAll (qs));

(() => {
  // === DOM & VARS ===
  const DOM = {};

  DOM.imagesTours = $$ ('#pois > img');
  DOM.infoBox = $ ('#info');

  // === INIT =========

  const init = () => {
    DOM.imagesTours.forEach ((el) =>
      el.addEventListener ('mouseenter', onMouseEnterImage)
    );
  };

  // === EVENTS / XHR =======
  const onMouseEnterImage = e => {
    const imageEl = e.currentTarget;
    const flagName = imageEl.dataset.flagName;
    const flagIcon = imageEl.id;

    const descriptionText = imageEl.dataset.description;
    const headlineText = imageEl.alt;

    DOM.infoBox.innerHTML = `<h3><img src ="assets/img/${flagIcon}.png" alt ="${flagName}"></h3><p>${descriptionText}</p>`;
  };

  // === FUNCTIONS ====

  init ();
}) ();
