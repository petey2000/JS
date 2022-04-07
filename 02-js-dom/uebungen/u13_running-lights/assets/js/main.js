'use strict';

(() => {
  // === DOM & VARS ===
  const DOM = {};
  DOM.lights = $$('.light-bulbs > img');

  const LIGHT_PATH_OFF = 'assets/img/light_off.png';
  const LIGHT_PATH_ON = 'assets/img/light_on.png';

  console.log(DOM);

  // === INIT =========

  const init = () => {
    DOM.lights.forEach((el) => el.addEventListener('mouseenter', onMouseEnterLight));
    //DOM.lights.on('mouseenter', onMouseEnterLight);
  };

  // === EVENTS =======
  const onMouseEnterLight = (e) => {
    const lightEl = e.currentTarget;
    setLightsOff(); // alle Lichter aus
    setNextLightOnBy(lightEl);
  };

  // === FUNCTIONS ====
  const setLightsOff = () => {
    DOM.lights.forEach((el) => (el.src = LIGHT_PATH_OFF));
  };

  const setNextLightOnBy = (lightEl) => {
    const currentIdx = DOM.lights.indexOf(lightEl);
    const nextIdx = DOM.lights.length - 1 === currentIdx ? 0 : currentIdx + 1;
    DOM.lights[nextIdx].src = LIGHT_PATH_ON;
  };

  init();
})();
