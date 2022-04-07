const newsText = 'Soll man Kinder impfen lassen? Was für, was gegen eine Kinderimpfung spricht';

const printWords = (str, idx = 0) => {
  const words = str.split(/\s/);
  // Guard - Abbruch wenn alle Wörter ausgegeben wurden
  if (idx >= words.length) return;

  console.log(words[idx]);

  setTimeout(() => {
    printWords(str, ++idx);
  }, 1000);
};

const printWords2 = (str) => {
  const words = str.split(/\s/);

  words.forEach((word, idx) => {
    setTimeout(() => console.log(word), (idx + 1) * 1000);
  });
};

printWords(newsText);

// Übung 1: Die Pyramide abbrechen

// Schreiben Sie Codebeispiel 2 so um, dass keine Pyramide entsteht. Benutzen Sie dazu, wie im Text angedeutet, eine Funktion, die das n-te Wort ausgibt und sich per setTimeout(…) mit n + 1 als Parameter aufruft, solange noch Worte im Satz vorhanden sind.
