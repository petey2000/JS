'use strict';

(() => {
  // === DOM & VARS ===
  const DOM = {};

  DOM.lichtStatus = document.querySelector('.image');

  const socket = io.connect(); // Socket- IO Objekt existiert durch Einbindung von "/socket.io/socket.io.js"

  console.log(DOM);

  socket.on('setLight', s => {
    DOM.lichtStatus.src = [
        'assets/img/light-off.png',
        'assets/img/light-on.png',
    ][Number(s)]
})







socket.emit('getLight')



  
  let connected = false;

  // === INIT =========

  const init = () => {

    DOM.lichtStatus.addEventListener('click', onClickSend);



  };

 
  // === EVENTS / XHR =======

  const onClickSend = ()=>{


    socket.emit('toggleLight')

   
  }



  // === FUNCTIONS ====

  init();
})();
