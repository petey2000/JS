// const fs = require('fs'); // Module aus der Standardbibliothek von Node wird geladen.
import fs from 'fs'; // ES6 Module import Schreibweise wird mittlerweile unterstützt.

const data = fs.readFileSync('csv/products.csv', 'utf8');

console.log(data);
