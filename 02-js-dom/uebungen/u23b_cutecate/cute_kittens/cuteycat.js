'use strict';

(() => {

  // Lösung aus dem Buch
/*   const NUMBER_OF_WINNERS = 3

  const mayAddCutie = cutie =>
      $$('#cutest li').length < NUMBER_OF_WINNERS && !isInCutest(cutie)

  const isInCutest = cutie =>
      $$('#cutest li span').filter(span => span.textContent === cutie.textContent)
          .length > 0

  $on($$('#candidates li'), 'click', e => {
      const cutie = e.currentTarget
      if (!mayAddCutie(cutie)) return

      $('#cutest').appendChild(
          $on(cutie.cloneNode(true), 'click', e => e.currentTarget.remove()),
      )
  }) */

  const $ = (qs) => document.querySelector(qs);
  const $$ = (qs) => Array.from(document.querySelectorAll(qs));

// =========================
// 	DOM
// =========================
const DOM = {}
// Our Cats
DOM.candidatesSection = $('#candidates_section'); // => section
DOM.candidates = DOM.candidatesSection.querySelector('#candidates');  // => ul
DOM.ourCatsList = Array.from(DOM.candidates.querySelectorAll('li'));  // => all li

// Cutest Cats
DOM.cutestSection = $('#cutest_section'); // => section
DOM.cutest = DOM.cutestSection.querySelector('#cutest');  // => ul
DOM.cutestCatsList = Array.from(DOM.cutest.querySelectorAll('li'));  // => all li

// =========================
// 	VARS
// =========================
const NUMBER_OF_WINNERS = 3

// =========================
// 	INIT
// =========================
const init = () => {
  addEventsToOurCats();
}

// =========================
// 	EVENTS / XHR
// =========================
const addEventsToOurCats = () => {
  DOM.ourCatsList.forEach((liEl) => {
    liEl.addEventListener('click', addToCustestCats)
  });
};

const addToCustestCats = (e) => {
  if (DOM.cutest.childElementCount < NUMBER_OF_WINNERS && e.currentTarget.dataset.selected !== 'true') {
    e.currentTarget.dataset.selected = 'true';
    const clonedEl = e.currentTarget.cloneNode(true);
    clonedEl.addEventListener('click', removeCatFromCutestList);
    DOM.cutest.appendChild(clonedEl);
  }
};

const removeCatFromCutestList = (e) => {
  setOurCatOfUnselected(e);
  e.currentTarget.remove();
}

// =========================
// 	FUNCTIONS
// =========================
const setOurCatOfUnselected = (event) => {
  DOM.ourCatsList.forEach((el) => {
    if (el.innerHTML === event.currentTarget.innerHTML) {
      el.dataset.selected = 'false';
    }
  });
}


// =========================
// =========================
init();

})();



