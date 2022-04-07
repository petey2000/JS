'use strict';

(() => {
  // === DOM & VARS ===
  const DOM = {};

  DOM.todoList = document.querySelector('.m-todolist');
  DOM.list = DOM.todoList.querySelector('.list');
  DOM.dummyTodo = DOM.todoList.querySelector('li');
  DOM.inputTodo = DOM.todoList.querySelector('.input-todo');
  DOM.buttonTodoAdd = DOM.todoList.querySelector('.button-add-todo');
  DOM.buttonTodosClean = DOM.todoList.querySelector('.button-clean-todos');

  // Verbindung mit Server via WS über socket.io
  const socket = io.connect();

  console.log(DOM);

  // === INIT =========

  const init = () => {
    socket.emit('get todos');

    DOM.buttonTodoAdd.addEventListener('click', onClickTodoAdd);
    DOM.buttonTodoAdd.disabled = true;

    DOM.buttonTodosClean.addEventListener('click', onClickTodosClean);

    window.addEventListener('keyup', onKeyUp);

    console.log('init');
  };

  // === EVENTS / XHR =======
  const onKeyUp = (e) => {
    DOM.buttonTodoAdd.disabled = DOM.inputTodo.value === '' ? true : false;

    if (e.key.toLowerCase() === 'enter') {
      onClickTodoAdd(e);
    }
  };

  const onClickTodosClean = (e) => {
    socket.emit('clean todos');
  };

  const onClickTodoAdd = (e) => {
    const text = DOM.inputTodo.value.trim();
    socket.emit('add todo', text);
    DOM.inputTodo.value = '';
    DOM.buttonTodoAdd.disabled = true;
  };

  const onClickTodoDelete = (e) => {
    const btnEl = e.currentTarget;
    const idx = btnEl.dataset.idx;
    socket.emit('delete todo', idx);
  };

  const onChangeTodoStatus = (e) => {
    const cbEl = e.currentTarget;
    const idx = cbEl.dataset.idx;
    console.log('change', idx);
    socket.emit('change todo', idx, cbEl.checked);
  };

  // === WS Events ==========

  socket.on('fetch todos', (data) => {
    createTodoList(data);
  });

  // === FUNCTIONS ====
  const getFormattedDate = (date = new Date()) => {
    return new Date(date).toLocaleDateString('de-DE', {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const createTodoList = (todos) => {
    DOM.list.textContent = '';
    todos.forEach((todo, idx) => {
      const liEl = DOM.dummyTodo.cloneNode(true);

      const cbEl = liEl.querySelector('input[type="checkbox"]');
      const labelEl = liEl.querySelector('label');
      const dateTimeEl = liEl.querySelector('.datetime');
      const buttonDelete = liEl.querySelector('.button-delete-todo');

      const id = `cb-todo-${idx}`;

      cbEl.id = id;
      cbEl.dataset.idx = idx;
      cbEl.checked = todo.done;
      // if (todo.done) {
      //   cbEl.setAttribute('checked','checked');
      // } else {
      //   cbEl.removeAttribute('checked');
      // }

      cbEl.addEventListener('change', onChangeTodoStatus);

      buttonDelete.dataset.idx = idx;
      buttonDelete.addEventListener('click', onClickTodoDelete);
      // buttonDelete.addEventListener('click', (e) => onClickTodoDelete(e, idx));

      // dateTimeEl.textContent = getFormattedDate(todo.createdAt);
      dateTimeEl.textContent = moment(todo.createdAt).format('DD.MM.YYYY hh:mm');

      labelEl.htmlFor = id; // labelEl.setAttribute('for',id)
      labelEl.textContent = todo.text;

      DOM.list.appendChild(liEl);
    });
  };

  init();
})();
