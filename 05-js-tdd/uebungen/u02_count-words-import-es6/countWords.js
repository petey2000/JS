const countWords = (str) => {
  return str.length === 0 ? 0 : str.split(/\W/).length;
};

console.log(countWords('')); //=> 0;
console.log(countWords('word')); //=> 1;
console.log(countWords('This is a string')); // => 4

export default countWords;
