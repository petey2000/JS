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
    DOM.btnPrev.addEventListener('click', onClickPrev /* , checkIfFirstPage */);
    DOM.btnNext.addEventListener('click', onClickNext);

    // 3. ALTERNATIVE:
    // Ich test das Ganze jetzt mit einem komplett neuen Eventlistener für vorerst zwei Buttons.
    // DOM.btnPrev.addEventListener('click', checkIfFirstPage());
    DOM.btnNext.addEventListener('click', checkIfFirstPage());

    //10.1
    DOM.btnFirst.addEventListener('click', onClickFirst);
    DOM.btnLast.addEventListener('click', onClickLast);
    // Wenn ich die Funktion zur Überprüfung in alle Eventlistener zur Ausführung packe, fehlt die 1. Nachricht und es wird auch nicht korrekt ausgeführt. Grund: Ausgangsvalue war die 1. Nachricht als. textContent und somit wurde diese auch wieder gegeben.
    window.addEventListener('keyup', onKeyUp);

    // ******************************

    checkIfFirstPage();
    // Check beim laden der Seite, ob an 1. Stelle:
    // wird die Init-Funktion, danach bei einem Klick eigentlich nochmal ausgelöst? nein oder?

    // 1. ALTERNATIVE:
    // window.addEventListener('click', checkIfFirstPage());
    // eigentlich sollte ja einfach nur bei jedem Klick ausgeführt werden? Nicht performant aber sollte funktionieren.

    // 2. ALTERNATIVE:
    // DOM.addEventListener('click', checkIfFirstPage());
    // Wie kann ich nochmal das Objekt ansteuern? DOM ist ja keine Funktion.
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

    // console.log(e.code); //=> Key code der gedrückten Taste
    // console.log(e.altKey); // => true | false
    // console.log(e);
  };

  // 10.1
  const onClickFirst = (e) => {
    showMessageByNumber(updateFirstMessageNumber());
    checkIfFirstPage();
    checkIfLastPage();
  };

  // 10.1
  const onClickLast = (e) => {
    showMessageByNumber(updateLastMessageNumber());
    // DOM.btnPrev.removeAttribute('disabled');
    // DOM.btnFirst.removeAttribute('disabled');
    checkIfFirstPage();
    checkIfLastPage();
  };

  const onClickNext = (e) => {
    e.preventDefault(); // Standardverhalten unterbinden
    console.log('next');
    showMessageByNumber(incCurrentMessageNumber());
    DOM.btnPrev.removeAttribute('disabled');
    DOM.btnFirst.removeAttribute('disabled');
    checkIfFirstPage();
    checkIfLastPage();
  };

  const onClickPrev = (e) => {
    e.preventDefault(); // Standardverhalten unterbinden
    console.log('prev');
    showMessageByNumber(decCurrentMessageNumber());
    DOM.btnPrev.removeAttribute('disabled');
    DOM.btnFirst.removeAttribute('disabled');
    checkIfFirstPage();
    checkIfLastPage();

    // console.log('showMessageByNumber: ' + updateFirstMessageNumber.innerHTML);
    // ist undefined, weil updateFirstMessageNumber keinen return Wert abspeichert, sondern direkt das DOM Objekt im value ändert.

    // Wie komme ich an den korrekten value zum Vergleich der If Bedingung?
  };

  // fetch('https://cat-fact.herokuapp.com/facts')
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  // === FUNCTIONS ====

  // const messageArrLastIndex = MESSAGES.length - 1;
  // console.log('check Index calc: ' + messageArrLastIndex);

  const checkIfLastPage = () => {
    // const currentIndex = DOM.progressbar.value;
    // const arrayLengthForLast = MESSAGES.length;
    // const lastMessage = MESSAGES[messageArrLastIndex];
    if (DOM.progressbar.value === MESSAGES.length) {
      DOM.btnNext.setAttribute('disabled', 'true');
      DOM.btnLast.setAttribute('disabled', 'true');
      // console.log('=== textContent.innerHTM ===');
      // console.log(currentIndex);
      // console.log('=== lastMessage.innerHTML ===');
      // console.log(arrayLengthForLast);
    } else {
      DOM.btnNext.removeAttribute('disabled');
      DOM.btnLast.removeAttribute('disabled');
      console.log('not on last page.');
    }
  };

  const checkIfFirstPage = () => {
    // const textContent = DOM.newsboardContent.innerHTML;

    // Reiner Text wie im 1. Array vorhanden funktioniert.
    // `<h1>Tutoren streiken!!!</h1>
    // <h2>1. Message: Alle Einsendeaufgaben werden ab sofort mit 0 Punkten bewertet</h2>
    // <p>[&hellip;]</p>
    // <p>am 25.09.2015 von K. Einer</p>`;

    // const textContent = showFirstMessage(); // evtl. ist hier der Rückgabewert doch nicht passen.
    // Ich brauche scheinbar eine Variable um den Wert der 1. Indexstelle bzw. Message Anzeige ab zu fangen.
    // const startingMessage = MESSAGES[0];

    // console.log('=== textContent value ===');
    // console.log(DOM.newsboardContent.innerHTML);
    // console.log('=== startingMessage value ===');
    // console.log(startingMessage);

    if (/* textContent.innerHTML === startingMessage.innerHTML &&  */ DOM.progressbar.value === 1) {
      DOM.btnPrev.setAttribute('disabled', 'true');
      DOM.btnFirst.setAttribute('disabled', 'true');
      // DOM.progressbar.value ganz am Ende meiner Zeit hinzugefügt, da btnPrev bei Sprung von 3 auf 2 ebenfalls schon ausgegraut wird.
      // console.log('DOM.btnPrev :' + DOM.btnPrev.innerHTML);

      // Jetzt brauch ich das Atribut disable = true??
      // alert('you are on the first page.');
      // Atribut und Value muss jeweils in einem eigenen String getrennt vom Komma stehen.
      // Jetzt ist btnPrev dauerhaft deaktiviert, ergo brauch ich nen Listener onClick bei jedem klick
    } else {
      // DOM.btnPrev.setAttribute('disabled', 'false');
      DOM.btnPrev.removeAttribute('disabled');
      DOM.btnFirst.removeAttribute('disabled');
      // console.log('DOM.btnPrev :' + DOM.btnPrev.innerHTML);
    }
  };

  // HÄ, der Inhalt ist auch schon ohne .innerHTML gleich, warum brauch ich den nochmal?

  const showMessageNumber = () => {
    DOM.messageNumber.textContent = MESSAGES.length;
  };

  const showMessageByNumber = (messageNumber) => {
    DOM.newsboardContent.innerHTML = MESSAGES[messageNumber - 1];

    return DOM.newsboardContent.innerHTML;
  };

  // AHHHHHHHHHHHHHHHHHHHHHHHHH: .textContent = Text ohne HTML Elemente / .innerHTML = HTML-Elemente + Text wie im Array am jeweiligen Index hinterlegt.

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

// console.log('=== MESSAGES.lenght ===');
// console.log(MESSAGES.length);
// console.log(MESSAGES[0]);

// Vorgehen: 1. Ich brauche einen Eventlistener, der bei Array 0 button first & prev deaktiviert.

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
