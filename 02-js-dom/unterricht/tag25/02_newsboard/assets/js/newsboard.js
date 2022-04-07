'use strict';

(() => {
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
  DOM.progressbar = $('#messages_progress');

  // console.log(DOM);
  // === INIT =========

  const init = () => {
    initProgressbar();
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
    showMessageByNumber(updateFirstMessageNumber());
  };

  // 10.1
  const onClickLast = (e) => {
    showMessageByNumber(updateLastMessageNumber());
  };

  const onClickNext = (e) => {
    e.preventDefault(); // Standardverhalten unterbinden
    console.log('next');
    showMessageByNumber(incCurrentMessageNumber());
  };

  const onClickPrev = (e) => {
    e.preventDefault(); // Standardverhalten unterbinden
    console.log('prev');
    showMessageByNumber(decCurrentMessageNumber());
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

  const initProgressbar = () => {
    DOM.progressbar.max = MESSAGES.length;
    DOM.progressbar.value = 1;
  };

  const showFirstMessage = () => showMessageByNumber(updateFirstMessageNumber());

  const incCurrentMessageNumber = () => (DOM.progressbar.value += 1);
  const decCurrentMessageNumber = () => (DOM.progressbar.value -= 1);
  const updateLastMessageNumber = () => (DOM.progressbar.value = MESSAGES.length);
  const updateFirstMessageNumber = () => (DOM.progressbar.value = 1);

  init();
})();

// Übung 10: Newsboard: Das geht noch besser
// Das Newsboard wartet noch auf das Vervollständigen seiner Funktionen.

// 1. Belegen Sie die Links » und « mit Funktionalität. Der Link mit der Aufschrift « soll es erlauben, zur ersten Nachricht zu springen, der Link » zur letzen.

// 2. Der bisher eher sinnlose rote Kreis in der linken oberen Ecke soll nun die Gesamtanzahl der Nachrichten anzeigen. Schreiben Sie eine Funktion, die diese Anzahl ausliest und in das <span> mit der Klasse message_number einträgt.

// 3. Unterstützen Sie ab sofort das Navigieren durch die News mit der Tastatur. Die Pfeiltasten nach links und rechts sollen dabei jeweils die gleiche Funktionalität wie die Buttons < und > ermöglichen.

// 4. Auch das Springen auf die erste bzw. letzte Position soll nun mit Tastatur möglich sein. Die Tastenkombination dafür ist alt und die Pfeiltaste nach links (zur ersten Nachricht) bzw. rechts (zur letzten Nachricht).
