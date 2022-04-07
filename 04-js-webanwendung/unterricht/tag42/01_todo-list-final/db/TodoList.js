const TodoList = {
  list: [],
  get() {
    return this.list;
  },
  add(text) {
    this.list.push({ text: String(text), done: false, createdAt: new Date() });
  },
  set(idx, done) {
    this.list[idx].done = done;
  },
  delete(idx) {
    this.list.splice(idx, 1);
  },

  clean() {
    this.list = this.list.filter((todo) => !todo.done);
  },
  dump() {
    console.log(JSON.stringify(this.list));
  },
};

module.exports = TodoList;
