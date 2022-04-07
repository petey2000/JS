const { getTransformedName: tn } = require('./modules/transformedName/transformedName');

const fullname = tn({ firstName: 'Max', lastName: 'Mustermann' });

console.log(fullname);

//

// Übung 9: W. A. Mozart
// Erstellen Sie ein Modul, das eine Funktion exportiert, die Namen abkürzt! Überlegen Sie sich selbst passende Bezeichner für das Modul und die Funktion.

// Die Funktion erhält als Argument ein String-Array mit einem oder mehreren Personennamen. Jeder Name besteht aus einem oder mehreren Vornamen gefolgt von genau einem Nachnamen (mit Leerzeichen getrennt). Beispiele für Argumente sind:

// [ 'Ladislaus Jones' ]
// [ 'Ladislaus Jones', 'Heribert Gold' ]
// [ 'Wolfgang Amadeus Mozart' ]
// Die Funktion gibt ein String-Array mit den entsprechenden Abkürzungen zurück. Ein abgekürzter Name besteht aus dem Anfangsbuchstaben des Vornamens, gefolgt von einem Punkt (wiederholt für alle Vornamen, falls es mehr als einen gibt), gefolgt vom Nachnamen. Die Rückgabewerte für obige Beispiele sehen so aus:
