const fs = require('fs');
const express = require('express');
const color = require('chalk');
const ejs = require('ejs'); // bindet das Modul "express" im Hintergrund automatisch ein.

const app = express();
// Hostdaten
const host = 'localhost';
const port = 3000;

app.set('view engine', 'ejs'); // EJS wird als Template Engine eingestellt
// Standard Template Ordner views wird zu public
app.set('views', 'public');

// Middleware
app.use(express.static('./public'));

fs.readFile('data/products.csv', 'UTF8', (error, data) => {
  const products = data
    .split(/\n|\r/)
    .filter((row) => row !== '') // Leere Einträge rausfiltern
    .map((row) => recordToObject(row));

  products.shift(); // erste Zeile bzw. erster Eintrag im Array wird entfernt (Kopfzellinformationen)

  console.log(products);

  app.get('/', (req, res) => {
    res.render('index', { products: products });
  });

  app.get('/product/:idx', (req, res) => {
    console.log(req.params);
    const { idx } = req.params;
    res.render('product', { product: products[idx] });
  });

  // Rückgabe der JSON Struktur
  app.get('/api/products', (req, res) => {
    res.send(products);
  });
});

const recordToObject = (record) => {
  const fields = record.split(/\s*,\s*/);
  return {
    shortdesc: fields[0],
    tagline: fields[1],
    quantity: fields[2],
    price: fields[3],
    stockwarn: fields[2] <= 5 ? true : false,
  };
};

// const recordToHTML = (record) => {
//   const fields = record.split(/\s*,\s*/);

//   let html = `
//       <h1>${fields[0]}</h1>
//       <p>${fields[1]}</p>
//       <p>Price: EUR ${fields[3]}</p>`;

//   if (Number(fields[2]) <= 5) {
//     html += `<p>Last items in stock!</p>`;
//   }

//   return html;
// };

app.listen(port, host, () => {
  console.log(color.magenta(`Server is running at: http://${host}:${port}.`));
  console.log(color.magenta('CTRL + C to shutdown server.'));
});
