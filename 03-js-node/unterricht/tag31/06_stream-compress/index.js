const fs = require('fs');
const zlib = require('zlib');
const gzipCompressor = zlib.createGzip();

let inputStream = fs.createReadStream('data/products.html');

inputStream.on('open', (data) => {
  console.log('Stream start');
});

inputStream.on('data', (data) => {
  console.log(`Pakete (Daten) geladen: ${data.length}`);
});

inputStream.on('end', (data) => {
  console.log(`Pakete (Daten) fertig gestreamt bzw. geladen`);
});

let outputStream = fs.createWriteStream('products.html.gz');

inputStream.pipe(gzipCompressor).pipe(outputStream);
