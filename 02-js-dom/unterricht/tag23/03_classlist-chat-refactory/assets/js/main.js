'use strict';

(() => {
  const $ = (qs) => document.querySelector(qs);
  const $$ = (qs) => Array.from(document.querySelectorAll(qs));

  // === DOM & VARS ===
  const DOM = {};
  DOM.listItems = $$('#chat_members li');

  // === INIT =========
  const init = () => {
    highlightChatMembersBy('ert');
  };

  // === EVENTS / XHR =======

  // === FUNCTIONS ====
  const highlightChatMembersBy = (searchValue) => {
    const filteredListItems = DOM.listItems.filter((el) => el.textContent.includes(searchValue));

    filteredListItems.forEach((el) => el.classList.add('highlighted'));
  };

  init();
})();
