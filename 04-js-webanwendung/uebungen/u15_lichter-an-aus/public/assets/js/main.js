'use strict';

(() => {
  // === DOM & VARS ===
  const DOM = {};
  DOM.bulbControl = document.querySelector('.m-bulb-control');
  DOM.imageBulb = DOM.bulbControl.querySelector('.bulb > img');

  const socket = io.connect();

  // === INIT =========

  const init = () => {
    socket.emit('get light status'); // Anfrage an Server nach status

    DOM.imageBulb.addEventListener('click', onClickImageBulb);
  };

  // === EVENTS / XHR =======
  const onClickImageBulb = (e) => {
    socket.emit('toggle light status');
  };

  // WS Events ==============
  socket.on('set light status', (status) => {
    console.log('status:', status);
    setLight(status);
  });

  // === FUNCTIONS ====
  const setLight = (status) => {
    DOM.imageBulb.src = status ? `assets/img/light-on.png` : `assets/img/light-off.png`;
  };

  init();
})();
