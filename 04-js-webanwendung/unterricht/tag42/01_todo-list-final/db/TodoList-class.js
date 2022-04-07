class TodoList {
  list = [];

  constructor() {
    console.log();
  }

  get() {
    return this.list;
  }
  add(text) {
    this.list.push({ text: String(text), done: false });
  }
  set(ix, done) {
    this.list[ix].done = done;
  }
  clean() {
    this.list = list.filter((todo) => !todo.done);
  }
  dump() {
    console.log(JSON.stringify(this.list));
  }
}

module.exports = TodoList;
