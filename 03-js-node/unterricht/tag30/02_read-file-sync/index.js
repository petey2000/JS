const fs = require('fs'); // Module aus der Standardbibliothek von Node wird geladen.

const data = fs.readFileSync('csv/products.csv', 'utf8');

console.log(data);
