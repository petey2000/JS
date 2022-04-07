const add = (...numbers) => {
  const ar = Array.isArray(numbers[0]) ? numbers[0] : numbers;
  return ar.reduce((n1, n2) => Number(n1) + Number(n2), 0);
};

module.exports = add;
