const times = (n, fn) => {
  const result = new Array(n);
  for (let i = 0; i < n; i += 1) {
    result[i] = fn();
  }
  return result;
};

console.log(times(5, () => Math.floor(Math.random() * 6) + 1));
