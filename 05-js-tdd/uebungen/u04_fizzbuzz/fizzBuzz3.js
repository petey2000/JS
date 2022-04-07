const moduloFunktion = (element) => {
  if (element % 3 === 0 && element % 5 === 0) return 'FizzBuzz';
  if (element % 3 === 0) return 'Fizz';
  if (element % 5 === 0) return 'Buzz';
  return element;
};


module.exports = moduloFunktion;