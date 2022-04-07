const fs = require('fs');
// import fs from 'fs';

fs.readFile('csv/products.csv', 'utf8', (error, data) => {
  const products = data.split('\n'); // CSV Sting to Array
  products.shift(); // erster Eintrag im Array wird entfernt und zurückgegeben
  console.log('Datei fertig verarbeitet');

  getHtmlArray(products).forEach((html) => {
    console.log(html);
    console.log('========');
  });
});

// weiter im code

// Weitere Aufgabe im Code
for (let i = 0; i < 20000000; i++) {}
console.log('ready. Fertig gezählt');

const recordToHtml = (str) => {
  const fields = str.split(/\s*,\s*/); // => z.B. ["coffee mug with LCD level indicator","never again reach for the empty mug","20","49.90"]

  let html = `
  <h1>${fields[0]}</h1>
  <p>${fields[1]}</p>
  <p>Price: EUR ${fields[3]}</p>`;

  if (Number(fields[2]) <= 5) {
    html += `<p>Last items in stock!</p>`;
  }

  return html;
};

const getHtmlArray = (products) => {
  return products.filter((rowStr) => rowStr !== '').map((rowStr) => recordToHtml(rowStr));
};
