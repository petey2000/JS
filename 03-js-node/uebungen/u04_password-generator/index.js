const crypto = require('crypto');

const PASSWORD_LENGTH = 10;

const str = '23456789abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ!.,;#$%/+*';

let buf = crypto.randomBytes(PASSWORD_LENGTH);
console.log(Array.from(buf));
let password = Array.from(buf)
  .map((byte) => str.charAt(byte % str.length))
  .join('');

console.log(password);

// Übung 4: Passwortgenerator

// Was macht der folgende Code?
// OK: Der Titel verrät es schon. Versuchen Sie dennoch, das Programm zu verstehen! Benutzen Sie die Dokumentation der Standardbibliothek, um nachzuschlagen, was crypto.randomBytes(…) genau macht!

// Bonusfrage: Warum sind in den Zeichen «1», «i» und «l» nicht enthalten, genau so wenig wie «0» und «o»?
