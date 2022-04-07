'use strict';

(() => {
  const $ = (qs) => document.querySelector(qs);
  const $$ = (qs) => Array.from(document.querySelectorAll(qs));

  // === DOM & VARS ===
  const DOM = {};
  DOM.imagesTours = $$('#pois > img');
  DOM.infoBox = $('#info');
  DOM.pois = $('#pois');
  const infoContent = DOM.infoBox.innerHTML;

  // === INIT =========
  const init = () => {
    DOM.infoBox.dataset.content = DOM.infoBox.innerHTML;
    DOM.pois.addEventListener('mouseleave', onMouseLeaveImages);
    DOM.imagesTours.forEach((el) => el.addEventListener('mouseenter', onMouseEnterImage));
  };

  // === EVENTS / XHR =======
  const onMouseLeaveImages = (e) => {
    DOM.infoBox.innerHTML = infoContent;
  };

  const onMouseEnterImage = (e) => {
    const imageEl = e.currentTarget;

    showInfoData(imageEl);
  };

  // === FUNCTIONS ====
  const showInfoData = (el) => {
    const flagName = el.dataset.flagName;
    const flagIcon = el.id; // el.dataset.countryCode
    const descriptionText = el.dataset.description;
    const headlineText = el.alt;

    DOM.infoBox.innerHTML = `<h3>
      <img src="assets/img/${flagIcon}.png" alt="${flagName}" title="${flagName}">
        ${headlineText}
      </h3>
      <p>
        ${descriptionText}
      </p>`;
  };

  init();
})();
