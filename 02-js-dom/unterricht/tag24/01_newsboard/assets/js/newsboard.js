'use strict';

(() => {
  const $ = (qs) => document.querySelector(qs);
  const $$ = (qs) => Array.from(document.querySelectorAll(qs));

  // === DOM & VARS ===
  const DOM = {};
  DOM.newsboardContent = $('.newsboard_content');
  DOM.btnNext = $('.newsboard button[title="next"]');
  DOM.btnPrev = $('.newsboard button[title="prev"]');

  let currentMessageNumber = 1;

  // === INIT =========

  const init = () => {
    showFirstMessage();
    DOM.btnNext.addEventListener('click', onClickNext);
    DOM.btnPrev.addEventListener('click', onClickPrev);
  };

  // === EVENTS / XHR =======
  const onClickNext = (e) => {
    e.preventDefault(); // Standardverhalten unterbinden
    console.log('next');
    showMessageByNumber(++currentMessageNumber);
  };

  const onClickPrev = (e) => {
    e.preventDefault(); // Standardverhalten unterbinden
    console.log('prev');
    showMessageByNumber(--currentMessageNumber);
  };

  // fetch('https://cat-fact.herokuapp.com/facts')
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  // === FUNCTIONS ====
  const showMessageByNumber = (messageNumber) => {
    DOM.newsboardContent.innerHTML = MESSAGES[messageNumber - 1];
  };

  const showFirstMessage = () => showMessageByNumber(currentMessageNumber);

  init();
})();
