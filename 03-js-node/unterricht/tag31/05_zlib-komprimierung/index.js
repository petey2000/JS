const fs = require('fs');
const zlib = require('zlib');

const targetFolder = 'compressed';
const data = fs.readFileSync('products.html', 'UTF8');
const compressedData = zlib.gzipSync(data);
// console.log(compressedData); // => <Buffer 1f 8b 08 00 00 00...

if (!fs.existsSync(targetFolder)) {
  fs.mkdirSync(targetFolder);
}

fs.writeFileSync(`${targetFolder}/products.html.gz`, compressedData);
