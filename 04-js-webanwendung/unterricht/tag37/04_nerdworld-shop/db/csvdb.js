const fs = require('fs');

let products = [];
const STOCK_WARN = 5;

const loadProductsFromFile = (file, encoding = 'utf-8') => {
  const data = fs.readFileSync(file, encoding);

  const rows = data.split(/\n|\r/);
  const header = rows.shift();

  products = rows.filter((row) => row !== '').map((row) => recordToObject(row));
};

const recordToObject = (str) => {
  // str --> MUG0007,coffee mug with LCD level indicator,never again reach for the empty mug,20,49.90
  const fields = str.split(/\s*,\s*/); // => ["MUG0007", "coffee mug with LCD level indicator", ...]
  return {
    code: fields[0],
    shortdesc: fields[1],
    tagline: fields[2],
    quantity: fields[3],
    price: fields[4],
    stockwarn: Number(fields[3]) <= STOCK_WARN,
  };
};

const getProducts = () => products;

const getProductByCode = (code) => {
  const product = products.find((product) => {
    return product.code.toLowerCase() === code.toLowerCase();
  });
  return product;
};

// console.log(getProductByCode("MUG0013")) ;

// loadProductsFromFile('data/products.csv');

module.exports = {
  loadProductsFromFile,
  getProducts, // <- ES6 shorthand for:  getProducts: getProducts
  getProductByCode,
};
