'use strict';

(() => {
  // === DOM & VARS ===
  const DOM = {};
  DOM.chat = document.querySelector('.m-chat');
  DOM.inputMessage = DOM.chat.querySelector('input[name="message"]');
  DOM.userCounter = DOM.chat.querySelector('.user-counter');
  DOM.buttonSend = DOM.chat.querySelector('.button-send');
  DOM.chatMessages = DOM.chat.querySelector('.chat-messages');
  DOM.clientAlert = DOM.chat.querySelector('.client-alert');

  console.log(DOM);

  const socket = io.connect(); // Socket- IO Objekt existiert durch Einbindung von "/socket.io/socket.io.js"

  // === INIT =========

  const init = () => {
    console.log('init');
  };

  // === EVENTS / XHR =======
  socket.on('server message', (data) => {
    const { message } = data;
    console.log(message);
    DOM.chatMessages.innerHTML += `<span class="server">Server</span>: ${message}<br>`;
  });

  // === FUNCTIONS ====

  init();
})();
