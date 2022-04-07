'use strict';

(() => {
  const $ = (qs) => document.querySelector(qs);
  const $$ = (qs) => Array.from(document.querySelectorAll(qs));

  // === DOM & VARS ===
  const DOM = {};
  // const listItemsEls = $$('#chat_members li');
  DOM.listItems = $$('#chat_members li');
  DOM.inputSearch = $('#member_search input');

  console.log(DOM);

  // === INIT =========
  const init = () => {
    DOM.inputSearch.addEventListener('keyup', onKeyUp);
  };

  // === EVENTS / XHR =======
  const onKeyUp = (e) => {
    console.log(e);
    const inputEl = e.target;

    DOM.listItems.forEach((el) => el.classList.remove('highlighted'));

    highlightChatMembersBy(inputEl.value);
  };

  // === FUNCTIONS ====
  const highlightChatMembersBy = (searchValue) => {
    if (searchValue === '') return; // Guard, vorzeitiger Funktionsabschluss, wenn Suchstring leer ist.

    const filteredListItems = DOM.listItems.filter((el) => el.textContent.toLowerCase().includes(searchValue.toLowerCase()));

    filteredListItems.forEach((el) => el.classList.add('highlighted'));
  };

  init();
})();
