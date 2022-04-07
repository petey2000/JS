const fs = require('fs');
const zlib = require('zlib');
const gzipCompressor = zlib.createGzip();

const inputStream = fs.createReadStream('data/products.html');
const outputStream = fs.createWriteStream('products.html.gz');

inputStream.on('open', (data) => {
  console.log('Stream start');
});

inputStream.on('data', (data) => {
  console.log(`Pakete (Daten) geladen: ${data.length}`);
  outputStream.write(zlib.gzipSync(data));
});

inputStream.on('end', (data) => {
  console.log(`Pakete (Daten) fertig gestreamt bzw. geladen`);
});
