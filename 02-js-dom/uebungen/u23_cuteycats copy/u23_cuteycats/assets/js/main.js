'use strict';

(() => {
  // === DOM & VARS ===
  const DOM = {};
  DOM.cuteyCat = $('.m-cutey-cat');
  DOM.listCatVote = DOM.cuteyCat.querySelector('.list-cat-vote');
  DOM.listItemsCatVote = Array.from(DOM.listCatVote.querySelectorAll('li'));
  DOM.listCatSelection = DOM.cuteyCat.querySelector('.list-cat-selection');

  // === INIT =========

  const init = () => {
    //DOM.listItemsCatVote.on('click', onClickCatVote);
    DOM.listItemsCatVote.forEach((li) => {
      li.style.cursor = 'pointer';
      li.addEventListener('click', onClickCatVote);
    });
  };

  // === EVENTS / XHR =======
  const onClickCatVote = (e) => {
    const liEl = e.currentTarget;
    if (DOM.listCatSelection.children.length >= 3 || isInCatSelection(liEl)) return;

    const cloneLiEl = liEl.cloneNode(true);
    cloneLiEl.addEventListener('click', onClickCatSelection);
    DOM.listCatSelection.appendChild(cloneLiEl);
  };

  const onClickCatSelection = (e) => {
    const liEl = e.currentTarget;
    // liEl.remove();
    liEl.parentNode.removeChild(liEl);
  };

  // === FUNCTIONS ====

  /**
   * isInCatSelection -  überprüft, ob angeklicktes Element bereits in der rechten Auflistung existiert.
   * @param {Node} liEl
   * @returns {Boolean}
   */
  const isInCatSelection = (liEl) => {
    const foundIndex = Array.from(DOM.listCatSelection.children).findIndex((el) => {
      return el.querySelector('img').alt === liEl.querySelector('img').alt;
    });

    return foundIndex !== -1;
  };

  init();
})();
