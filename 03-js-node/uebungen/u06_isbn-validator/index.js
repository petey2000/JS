const fs = require('fs');
const { parse } = require('csv-parse/sync');
const validator = require('validator');

const data = fs.readFileSync('books.csv', 'utf8');

const recordsAr = parse(data, {
  delimiter: ',',
  columns: true,
  skip_empty_lines: false,
});

const booksNotValid = recordsAr.filter((book) => !validator.isISBN(book.ISBN));

console.log(booksNotValid);
