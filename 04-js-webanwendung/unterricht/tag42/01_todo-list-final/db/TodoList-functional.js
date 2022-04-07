let list = [];

const get = () => {
  return list;
};

const add = (text) => {
  list.push({ text: String(text), done: false });
};

const set = (ix, done) => {
  list[ix].done = done;
};

const clean = () => {
  list = list.filter((todo) => !todo.done);
};

const dump = () => {
  console.log(JSON.stringify(list));
};

module.exports = {
  get,
  add,
  set,
  clean,
  dump,
};
