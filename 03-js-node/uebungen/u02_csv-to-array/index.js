'use strict';

let fields = [];
let chars = [];
let quoteEnd = 0;
let count = 0;
let fieldString = '';

const mixedCSV = '"very big, soft computer mouse","the cutest peripheral ever",10,39.90';

chars = mixedCSV.split('');

console.log(chars);

for (let i = 0; i < mixedCSV.length; i++) {
  let char = chars.shift();

  if (char === '"') {
    quoteEnd++;
    char = '';
  }

  if (char === ',') {
    if (quoteEnd === 1) {
      fieldString += char;
    } else {
      fields[count] = fieldString;
      fieldString = '';
      count++;
      quoteEnd = 0;
    }
  } else {
    fieldString += char;
  }

  if (i === mixedCSV.length - 1) {
    fields[count] = fieldString;
  }
}

console.log(fields);

// Ansatz 2

let fields = [];
let index = 0;
let state = 'outside';

mixedCSV.split('').forEach((char) => {
  if (state === 'quoted') {
    fields[index] += char; // => [",v,e,r,y..."]
    if (char === '"') {
      state = 'outside';
      index += 1;
    }
  } else if (state === 'unquoted') {
    if (char === ',') {
      state = 'outside';
      index += 1;
    } else {
      fields[index] += char;
    }
  } else if (state === 'outside') {
    fields[index] = char; //=> [",...
    if (char === '"') {
      state = 'quoted';
    } else if (char !== ',') {
      state = 'unquoted';
    }
  }
});

console.log(fields);

// Übung 2: CSV-Datensätze mit Anführungszeichen — Teil 2
// In der Praxis finden sich auch CSV-Datensätze, wo manche Felder mit Anführungszeichen umgeben sind und manche nicht.

// Schreiben Sie nun ein Programm, das auch mit diesen Fällen zurechtkommt! Folgender Datensatz soll korrekt zerlegt werden:

// const mixedCSV = '"very big, soft computer mouse","the cutest peripheral ever",10,39.90';

const test = mixedCSV.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);

// https://stackoverflow.com/questions/11456850/split-a-string-by-commas-but-ignore-commas-within-double-quotes-using-javascript

// ".*?"  <-  double quotes + anything but double quotes + double quotes
// |           OR
//[^",\s]+    1 or more characters exclusive double quotes, comma or spaces of any kind
// )
// (?=            FOLLOWED BY
// \s*,        0 or more empty spaces and a comma
// |           OR
// \s*$        0 or more empty spaces and nothing else (end of string)
// )
