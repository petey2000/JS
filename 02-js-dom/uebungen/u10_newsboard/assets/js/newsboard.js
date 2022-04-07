'use strict';

(() => {
  const $ = (qs) => document.querySelector(qs);
  const $$ = (qs) => Array.from(document.querySelectorAll(qs));

  // === DOM & VARS ===
  const DOM = {};
  DOM.newsboardContent = $('.newsboard_content');
  DOM.btnPrev = $('.newsboard button[title="prev"]');
  DOM.btnNext = $('.newsboard button[title="next"]');
  // 10.1
  DOM.btnFirst = $('.newsboard button[title="first"]');
  DOM.btnLast = $('.newsboard button[title="last"]');
  // 10.2
  DOM.messageNumber = $('.newsboard .message_number');

  let currentMessageNumber = 1;

  // console.log(DOM);
  // === INIT =========

  const init = () => {
    showMessageNumber();

    showFirstMessage();
    DOM.btnPrev.addEventListener('click', onClickPrev);
    DOM.btnNext.addEventListener('click', onClickNext);

    //10.1
    DOM.btnFirst.addEventListener('click', onClickFirst);
    DOM.btnLast.addEventListener('click', onClickLast);

    window.addEventListener('keyup', onKeyUp);
  };

  // === EVENTS / XHR =======
  const onKeyUp = (e) => {
    // 10.3 & 10.4
    if (e.key === 'ArrowRight' && e.altKey) {
      onClickLast(e);
    } else if (e.key === 'ArrowLeft' && e.altKey) {
      onClickFirst(e);
    } else if (e.key === 'ArrowRight') {
      onClickNext(e);
    } else if (e.key === 'ArrowLeft') {
      onClickPrev(e);
    }

    console.log(e.code); //=> Key code der gedrückten Taste
    // console.log(e.altKey); // => true | false
    // console.log(e);
  };

  // 10.1
  const onClickFirst = (e) => {
    currentMessageNumber = 1;
    showMessageByNumber(currentMessageNumber);
  };

  // 10.1
  const onClickLast = (e) => {
    currentMessageNumber = MESSAGES.length;
    showMessageByNumber(currentMessageNumber);
  };

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
  const showMessageNumber = () => {
    DOM.messageNumber.textContent = MESSAGES.length;
  };

  const showMessageByNumber = (messageNumber) => {
    DOM.newsboardContent.innerHTML = MESSAGES[messageNumber - 1];
  };

  const showFirstMessage = () => showMessageByNumber(currentMessageNumber);

  init();
})();

// Übung 10: Newsboard: Das geht noch besser
// Das Newsboard wartet noch auf das Vervollständigen seiner Funktionen.

// 1. Belegen Sie die Links » und « mit Funktionalität. Der Link mit der Aufschrift « soll es erlauben, zur ersten Nachricht zu springen, der Link » zur letzen.

// 2. Der bisher eher sinnlose rote Kreis in der linken oberen Ecke soll nun die Gesamtanzahl der Nachrichten anzeigen. Schreiben Sie eine Funktion, die diese Anzahl ausliest und in das <span> mit der Klasse message_number einträgt.

// 3. Unterstützen Sie ab sofort das Navigieren durch die News mit der Tastatur. Die Pfeiltasten nach links und rechts sollen dabei jeweils die gleiche Funktionalität wie die Buttons < und > ermöglichen.

// 4. Auch das Springen auf die erste bzw. letzte Position soll nun mit Tastatur möglich sein. Die Tastenkombination dafür ist alt und die Pfeiltaste nach links (zur ersten Nachricht) bzw. rechts (zur letzten Nachricht).
