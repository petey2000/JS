'use strict';

(() => {
  const $ = (qs) => document.querySelector(qs);
  const $$ = (qs) => Array.from(document.querySelectorAll(qs));

  // === DOM & VARS ===
  const DOM = {};
  DOM.jokes = $('.m-jokes');
  DOM.blockquote = DOM.jokes.querySelector('blockquote');
  DOM.buttonJoke = DOM.jokes.querySelector('.button-joke');
  // === INIT =========

  const init = () => {
    getJoke().then((data) => createJoke(data.value));

    DOM.buttonJoke.addEventListener('click', onClickJoke);
    DOM.blockquote.addEventListener('animationend', onAnimationEnd);
  };

  // === EVENTS / XHR =======
  const onAnimationEnd = (e) => {
    const el = e.currentTarget;
    if (el.classList.contains('animate__backOutDown')) {
      getJoke().then((data) => {
        el.classList.remove('animate__backOutDown');
        el.classList.add('animate__backInDown');
        createJoke(data.value);
      });
    }
  };

  const onClickJoke = (e) => {
    // getJoke();
    DOM.blockquote.classList.remove('animate__backInDown');
    DOM.blockquote.classList.add('animate__backOutDown');
  };

  const getJoke = () => {
    return new Promise((resolve, reject) => {
      fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then((data) => resolve(data)) // createJoke(data.value)
        .catch((err) => console.error(err));
    });
  };

  // === FUNCTIONS ====
  const createJoke = (joke) => {
    DOM.blockquote.textContent = joke;
  };

  init();
})();
