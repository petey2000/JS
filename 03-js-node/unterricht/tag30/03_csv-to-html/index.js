const fs = require('fs'); // Module aus der Standardbibliothek von Node wird geladen.
const data = fs.readFileSync('csv/products.csv', 'utf8');

const products = data.split(/\n|\r/);
const headerAr = products
  .shift() // => Short Description , Tagline,Quantity  ,Price
  .split(/\s*,\s*/) // => [" Short Description", "Tagline", "Quantity", "Price "]
  .map((str) => str.trim());

console.log(headerAr); // => ["Short Description", "Tagline", "Quantity", "Price"]

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

console.log(getHtmlArray(products));

const writeHtmlDocument = () => {
  const headerStr = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Home</title>
</head>
<body>`;

  const footerStr = `  
</body>
</html>
`;

  const htmlDocument = `
${headerStr}
${getHtmlArray().join('')}
${footerStr}`;

  fs.writeFileSync('home.html', htmlDocument, 'utf8');
};

writeHtmlDocument();
