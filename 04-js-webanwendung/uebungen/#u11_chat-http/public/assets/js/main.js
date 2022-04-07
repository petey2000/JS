'use strict';

(() => {
  // === DOM & VARS ===
  const DOM = {};

  // === INIT =========

  const init = () => {};

  // === EVENTS / XHR =======

  // === FUNCTIONS ====

  init();
})();

// Übung 11: Nachrichten POSTen

// Schreiben Sie eine kleine Anwendung, die Chat-Nachrichten entgegen nimmt, in einem Array abspeichert und als Webseite wieder aus gibt.

// Der Server definiert zwei Routen:

// POST /message — nimmt eine Chat-Nachricht entgegen.
// Eine Chat-Nachricht besteht der Einfachheit halber nur aus einem String, z.B.:

// { "content": "Hi, how ar
// { "content": "Hi, how are you?" }

// GET /message/ — liefert ein JSON mit einem Array der bisher eingegangenen Chat-Nachrichten.
// Z.B.:

// [{ content: 'Hi, how are you?' }, { content: 'Fine! You?' }]
// [{ content: 'Hi, how are you?' }, { content: 'Fine! You?' }]
// ​
// Das Frontend ruft die Nachrichten per AJAX (Fetch-API) ab und stellt sie im Browser dar.

// Der Test-Client benutzt das request-Modul um eine Nachricht zu senden.
