'use strict';

let fields = [];

const quotedCSV = '"very big, soft computer mouse","the cutest peripheral ever","10","39.90"';

fields = quotedCSV.split('","').map((str) => str.replace(/\"/g, ''));

console.log(fields);

// Übung 1: CSV-Datensätze mit Anführungszeichen
// Bisher haben wir die Felder in einem CSV-Datensatz einfach mit der Anweisung:

// record.split(",");
// ​
// in einzelne Felder zerlegt. In der Praxis kann es aber vorkommen, dass ein einzelnes Feld ein Komma enthält. Das Problem wird üblicherweise gelöst, indem die einzelnen Felder noch mit Anführungszeichen umgeben werden. Hier ist ein Beispiel:

// "very big, soft computer mouse","the cutest peripheral ever","10","39.90"
// ​
// Das erste Feld enthält ein Komma (very big, soft computer mouse), trotzdem ist die Unterteilung eindeutig. Schreiben Sie ein kurzes Programm, dass diesen Datensatz korrekt zerlegt und die einzelnen Felder ausgibt:

// const quotedCSV = '"very big, soft computer mouse","the cutest peripheral ever","10","39.90"';

// all fields are quoted
