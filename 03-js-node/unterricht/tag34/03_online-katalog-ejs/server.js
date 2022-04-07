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
  let products = data.split(/\n|\r/);
  products.shift(); // erste Zeile bzw. erster Eintrag im Array wird entfernt (Kopfzellinformationen)

  const pages = products
    .filter((row) => row !== '') // Leere Einträge rausfiltern
    .map((row) => recordToHTML(row));

  app.get('/', (req, res) => {
    res.render('index.ejs', { products: pages });
  });

  app.get('/product/:idx', (req, res) => {
    console.log(req.params);
    const { idx } = req.params;
    res.send(pages[Number(idx) - 1]);
  });
});

const recordToHTML = (record) => {
  const fields = record.split(/\s*,\s*/);

  let html = `
      <h1>${fields[0]}</h1>
      <p>${fields[1]}</p>
      <p>Price: EUR ${fields[3]}</p>`;

  if (Number(fields[2]) <= 5) {
    html += `<p>Last items in stock!</p>`;
  }

  return html;
};

app.listen(port, host, () => {
  console.log(color.magenta(`Server is running at: http://${host}:${port}.`));
  console.log(color.magenta('CTRL + C to shutdown server.'));
});
