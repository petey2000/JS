const moment = require('moment');

const nextSaturday = moment().day('Saturday').format('DD.MM.YYYY');

console.log(nextSaturday);

// Übung 7: Warten auf das Wochenende
// In dieser Übung soll ein Programm geschrieben werden, das die Frage »Welches Datum hat der kommende Samstag?« beantwortet.

// Mit dem moment-Modul kann das Datum leicht ermittelt werden. Der folgende Aufruf gibt das Datum als String in der Form Tag.Monat.Jahr zurück...

// Installieren Sie das moment-Modul mit npm und schreiben Sie ein kurzes Programm, dass das gesuchte Datum ausgibt! Vergessen Sie die entsprechende require(…)-Anweisung nicht, um das Modul einzubinden.
