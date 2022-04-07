const moment = require('moment');

const date = moment().format('YYYY-MM-DD');
const nextSaturday = moment().day('Saturday').format('DD.MM.YYYY');

const myDate = new Date();
const currentMonth = myDate.getMonth() + 1; // => 0 - 11

console.log(currentMonth);
console.log(myDate);
console.log(date);
console.log(nextSaturday);
