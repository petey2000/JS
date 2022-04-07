const range = (startOrEnd, end, step) =>
  end !== undefined
    ? rangeFromStartToEnd(startOrEnd, end, step)
    : rangeFromStartToEnd(0, startOrEnd);

const rangeFromStartToEnd = (start, end, step = 1) => {
  const length = Math.max(Math.ceil((end - start) / step), 0);
  const result = Array(length);
  const sign = Math.sign(step);
  let index = 0;
  for (let value = start; value * sign < end * sign; value += step) {
    result[index] = value;
    index += 1;
  }
  return result;
};

console.log(range(10)); //=> [0,...,9];
console.log(range(5, 10)); //=> [5,...,9];
console.log(range(5, 10, 2)); //=> [5,7,9];
