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

    setButtonStatus(DOM.progressbar.value);

    

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
    setButtonStatus(DOM.progressbar.value);
    
  };

  // 10.1
  const onClickLast = (e) => {
    showMessageByNumber(updateLastMessageNumber());
    setButtonStatus(DOM.progressbar.value);
  };

  const onClickNext = (e) => {
    e.preventDefault(); // Standardverhalten unterbinden
    
    showMessageByNumber(incCurrentMessageNumber());
    setButtonStatus(DOM.progressbar.value);
  };

  const onClickPrev = (e) => {
    e.preventDefault(); // Standardverhalten unterbinden
    
    showMessageByNumber(decCurrentMessageNumber());
    
    
    
    setButtonStatus(DOM.progressbar.value);
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

  const setButtonStatus = (currentMsgId)=>{
    console.log(currentMsgId);
    
    if (currentMsgId > 1 && currentMsgId <= MESSAGES.length) {
     
      DOM.btnPrev.disabled = false;
      DOM.btnFirst.disabled = false;
      DOM.btnNext.disabled = false;
      DOM.btnLast.disabled = false;
    };
    if (currentMsgId <= 1){
      DOM.btnPrev.disabled = true;
      DOM.btnFirst.disabled = true;
      DOM.btnNext.disabled = false;
      DOM.btnLast.disabled = false;
     
    };
    if (currentMsgId > MESSAGES.length-1){
      DOM.btnPrev.disabled = false;
      DOM.btnFirst.disabled = false;
      DOM.btnNext.disabled = true;
      DOM.btnLast.disabled = true;
    };

  };


  const showFirstMessage = () => showMessageByNumber(updateFirstMessageNumber());

  const incCurrentMessageNumber = () => (DOM.progressbar.value += 1);
  const decCurrentMessageNumber = () => (DOM.progressbar.value -= 1);
  const updateLastMessageNumber = () => (DOM.progressbar.value = MESSAGES.length);
  const updateFirstMessageNumber = () => (DOM.progressbar.value = 1);

  init();
})();

// Übung 12: Newsboard: Jetzt ist aber Schluss!
// Die neuen Features des Newsboards sind schon fast fertig. Problematisch ist aber, dass die Vorwärts- und Rückwärts-Buttons auch aktiv sind, wenn es keine vorige bzw. nächste Nachricht mehr gibt. Dies führt zu einem sehr unschönen Fehler.

// 12.1. Machen Sie die Links (a-Element), die der Steuerung der Newsboards dienen, zu echten Buttons (button-Element). Damit lassen sie sich im Bedarfsfall deaktivieren.

// 12.2 Sorgen Sie dafür, dass die Vor- und Rückwärts-Buttons jeweils deaktiviert werden, sobald der Anwender am Anfang bzw. Ende der Nachrichtenliste angekommen ist.

// 12.3 Auch die Buttons, die den Anwender zur ersten bzw. zur letzten Nachricht führen, sollen deaktiviert sein, sobald sich der Anwender bei der ersten bzw. letzten Nachricht befindet.

// ===============================================

// Übung 10: Newsboard: Das geht noch besser
// Das Newsboard wartet noch auf das Vervollständigen seiner Funktionen.

// 1. Belegen Sie die Links » und « mit Funktionalität. Der Link mit der Aufschrift « soll es erlauben, zur ersten Nachricht zu springen, der Link » zur letzen.

// 2. Der bisher eher sinnlose rote Kreis in der linken oberen Ecke soll nun die Gesamtanzahl der Nachrichten anzeigen. Schreiben Sie eine Funktion, die diese Anzahl ausliest und in das <span> mit der Klasse message_number einträgt.

// 3. Unterstützen Sie ab sofort das Navigieren durch die News mit der Tastatur. Die Pfeiltasten nach links und rechts sollen dabei jeweils die gleiche Funktionalität wie die Buttons < und > ermöglichen.

// 4. Auch das Springen auf die erste bzw. letzte Position soll nun mit Tastatur möglich sein. Die Tastenkombination dafür ist alt und die Pfeiltaste nach links (zur ersten Nachricht) bzw. rechts (zur letzten Nachricht).
