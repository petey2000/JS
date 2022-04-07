'use strict';

(() => {
  const $ = (qs) => document.querySelector(qs);
  const $$ = (qs) => Array.from(document.querySelectorAll(qs));

  // === DOM & VARS ===
  const DOM = {};
  DOM.body = $('body');
  DOM.lightBulbs = $('.light-bulbs');
  DOM.lights = $$('.light-bulbs > img'); //Array.from(DOM.lightBulbs.querySelectorAll('img'));

  //console.log(DOM);

  // === INIT =========

  const init = () => {
    DOM.lights.forEach((el) => el.addEventListener('mouseenter', onEnterLight));

    // for (let i = 0; i < DOM.lights.length; i++) {
    //   const light = DOM.lights[i];
    //   light.addEventListener('mouseover', onEnterLight);
    // }
  };

  // === EVENTS ===
  const onEnterLight = (e) => {
    let light = e.currentTarget;
    if (isActiveLight(light)) {
      DOM.lights[(getActiveLightPos(light) + 1) % DOM.lights.length].src =
        'assets/img/light_on.png';
      light.src = 'assets/img/light_off.png';
    }
  };

  const getActiveLightPos = (light) => {
    for (let i = 0; i < DOM.lights.length; i++) {
      if (DOM.lights[i].src.includes('assets/img/light_on.png')) return i;
    }
  };

  const isActiveLight = (light) => {
    return light.src.includes('assets/img/light_on.png');
  };

  // === FUNCTIONS ====

  init();
})();
