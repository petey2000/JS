// Module aus der Node- Standardbibliothek
const fs = require('fs');
const zlib = require('zlib');

const data = fs.readFileSync('csv/products.csv', 'utf-8');

const products = data.split(/\n/);
products.shift();

const getProducts = () => {
  return products
    .filter((row) => row !== '')
    .map((row) => {
      return row.split(/\s*,\s*/).map((str) => str.trim());
    });
};

const getHtmlDocument = () => {
  const headerStr = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Home</title>
  </head>
  <body>`;

  const contentStr = getProducts()
    .map((ar) => {
      return `<h2>${ar[0]}</h2>
      <p>${ar[1]}</p>
    `;
    })
    .join('');

  const footerStr = `<body></html>`;

  return headerStr + contentStr + footerStr;
};

fs.writeFileSync('archive.html', getHtmlDocument());

fs.writeFileSync('archive.html.gz', zlib.gzipSync(getHtmlDocument()), 'utf-8');

// Übung 3: Ohne Umwege
// Kombinieren Sie Codebeispiel 34 und Codebeispiel 54. Die Datei products.html.gz soll direkt aus der Datei products.csv erzeugt werden, ohne Umweg über die Datei products.html!
