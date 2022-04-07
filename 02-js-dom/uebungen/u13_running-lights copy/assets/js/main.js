'use strict';

(() => {
  // === DOM & VARS ===
  const $ = qs => document.querySelector (qs);
  const $$ = qs => Array.from (document.querySelectorAll (qs));

  const DOM = {};

  DOM.lights = $$ ('.light-bulbs > img');

  

  // === INIT =========

  const init = () => {
    DOM.lights.forEach (el => {
      el.addEventListener ('mouseenter', changeLight);
    });
  };

  // === EVENTS / XHR =======

  const changeLight = e => {
    if (e.currentTarget.getAttribute ('src') === 'assets/img/light_on.png') {
      const currentIndexLightOn = DOM.lights.indexOf (e.currentTarget);
      DOM.lights[currentIndexLightOn].src = 'assets/img/light_off.png';
      
      DOM.lights[currentIndexLightOn <= DOM.lights.length -2 ? currentIndexLightOn + 1 : 0 ].src = 'assets/img/light_on.png';
      
      
    }
  }

  // === FUNCTIONS ====

  init ();
}) ();
