const fs = require('fs');

let products = [];
let csvHeaderStr = '';

const STOCK_WARN_QUANTITY = 5;
const NOT_FOUND = -1;

const loadProductsFromFile = (file = 'data/products.csv', encoding = 'utf-8') => {
  const data = fs.readFileSync(file, encoding);

  const rows = data.split(/\n|\r/);
  csvHeaderStr = rows.shift();

  products = rows.filter((row) => row !== '').map((row) => recordToObject(row));
};

const saveProductsToFile = (file = 'data/products.csv', encoding = 'utf-8') => {
  const csvContent = products
    .map((p) => {
      return `${p.code},${p.shortdesc},${p.tagline},${p.quantity},${p.price}`;
    })
    .join('\n');

  const csvStr = csvHeaderStr + '\n' + csvContent;
  fs.writeFileSync(file, csvStr, encoding);
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
    stockwarn: Number(fields[3]) <= STOCK_WARN_QUANTITY,
  };
};

const getProducts = () => products;

const getProductByCode = (code) => {
  const product = products.find((product) => {
    return product.code.toLowerCase() === code.toLowerCase();
  });
  return product;
};

// hinzufügen eines Produkt-Objektes (product) im Produkt Array (products)
const insertProduct = (product) => {
  const index = getIndexByCode(product.code);
  // Guard - Abbruch, wenn Produktcode bereits vorhanden.
  if (index !== NOT_FOUND) return false;

  product.stockwarn = product.quantity <= STOCK_WARN_QUANTITY;
  products.push(product);
  return true;
};

// aktualisieren eines Produkt-Objektes (product) im Produkt Array (products)
const updateProduct = (product) => {
  const index = getIndexByCode(product.code);

  // Guard - Abbruch, wenn Produktcode nicht vorhanden.
  if (index === NOT_FOUND) return false;

  product.stockwarn = product.quantity <= STOCK_WARN_QUANTITY;
  products[index] = product; // Product Objekt wird überschreiben
  return true;
};

// löschen eines Produkt-Objektes (product) im Produkt Array (products)
const deleteProduct = (product) => {
  const index = getIndexByCode(product.code);

  // Guard - Abbruch, wenn Produktcode nicht vorhanden.
  if (index === NOT_FOUND) return false;

  products.splice(index, 1); // Product Objekt wird gelöscht
  return true;
};

// löschen eines Produkt-Objektes (product) im Produkt Array (products)
const deleteProductByCode = (code) => {
  const index = getIndexByCode(code);

  // Guard - Abbruch, wenn Produktcode nicht vorhanden.
  if (index === NOT_FOUND) return false;

  products.splice(index, 1); // Product Objekt wird gelöscht
  return true;
};

const getIndexByCode = (code) => {
  return products.findIndex((product) => {
    return product.code.toLowerCase() === code.toLowerCase();
  });
};

// console.log(getProductByCode("MUG0013")) ;

// loadProductsFromFile('data/products.csv');

module.exports = {
  loadProductsFromFile,
  getProducts, // <- ES6 shorthand for:  getProducts: getProducts
  getProductByCode,
  insertProduct,
  updateProduct,
  deleteProduct,
  deleteProductByCode,
  saveProductsToFile,
};
