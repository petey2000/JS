'use strict';

(() => {
  // === DOM & VARS ===
  const DOM = {};
  DOM.body = document.querySelector('body');
  DOM.loginUsername = document.querySelector('.m-login-username');
  DOM.inputUsername = DOM.loginUsername.querySelector('.input-username');

  DOM.chat = document.querySelector('.m-chat');
  DOM.inputMessage = DOM.chat.querySelector('input[name="message"]');
  DOM.userCounter = DOM.chat.querySelector('.user-counter');
  DOM.buttonSend = DOM.chat.querySelector('.button-send');
  DOM.chatMessages = DOM.chat.querySelector('.chat-messages');
  DOM.clientAlert = DOM.chat.querySelector('.client-alert');

  console.log(DOM);

  const socket = io.connect(); // Socket- IO Objekt existiert durch Einbindung von "/socket.io/socket.io.js"

  let username = '';
  let connected = false;
  // === INIT =========

  const init = () => {
    window.addEventListener('keyup', onKeyUp);
    console.log('init');

    DOM.buttonSend.addEventListener('click', onClickSend);
  };

  // === EVENTS / XHR =======
  const onClickSend = (e) => {
    const message = DOM.inputMessage.value;
    DOM.inputMessage.value = '';

    DOM.chatMessages.innerHTML += `<span class="client">${username}</span>: ${message}<br/>`;

    socket.emit('client message', { username, message });
  };

  const onKeyUp = (e) => {
    if (e.key.toLowerCase() === 'enter' && DOM.inputUsername.value !== '') {
      setUsername();
    }
  };

  socket.on('user connected', (data) => {
    connected = true;
    showCurrentUsers(data);
  });

  socket.on('user joined', (data) => {
    const { username } = data;
    DOM.clientAlert.textContent = `${username} has joined`;
    showCurrentUsers(data);
  });

  socket.on('user left', (data) => {
    const { username } = data;
    DOM.clientAlert.textContent = `${username} has left`;
    showCurrentUsers(data);
  });

  socket.on('server message', (data) => {
    const { message } = data;
    console.log(message);
    DOM.chatMessages.innerHTML += `<span class="server">Server</span>: ${message}<br>`;
  });

  socket.on('new message', (data) => {
    const { username, message } = data;
    DOM.chatMessages.innerHTML += `<span class="client">${username}</span>: ${message}<br/>`;
  });

  // === FUNCTIONS ====
  const showCurrentUsers = (data) => {
    const { userCounter } = data;
    const message = userCounter === 1 ? `1 User online` : `${userCounter} Users online`;
    DOM.userCounter.textContent = message;
  };

  const setUsername = () => {
    username = DOM.inputUsername.value;

    DOM.loginUsername.classList.add('animate__animated', 'animate__flipOutX', 'animate__fast');
    DOM.body.style.overflow = 'hidden';

    DOM.loginUsername.addEventListener('animationend', (e) => {
      // DOM.loginUsername.remove(); // <- kein IE11 support
      DOM.loginUsername.parentNode.removeChild(DOM.loginUsername);
      // DOM.body.style.overflow = 'inherit';
      DOM.body.removeAttribute('style');
    });
    console.log(username);
    socket.emit('add user', username); // send Username to server;
  };

  init();
})();
