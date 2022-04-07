'use strict';

(() => {
  // === DOM & VARS ===
  const DOM = {};
  DOM.productManager = $('.m-product-manager');
  DOM.btnProductAdd = DOM.productManager.querySelector('.button-product-add');
  DOM.inputProductName = DOM.productManager.querySelector('.input-product-name');
  DOM.inputProductPrice = DOM.productManager.querySelector('.input-product-price');

  DOM.tableProduct = DOM.productManager.querySelector('table');
  DOM.tableBody = DOM.tableProduct.querySelector('tbody');

  // console.log(DOM);

  // === INIT =========
  const init = () => {
    initProducts();
    disableNonFunctionalButtons();
    DOM.btnProductAdd.on('click', onClickProductAdd);
  };

  // === EVENTS / XHR =======
  // const xhr = new XMLHttpRequest();
  // xhr.open('GET', 'http://localhost:8888/data/product_list.json');
  // xhr.send();
  // xhr.addEventListener('readystatechange', (e) => {
  //   // console.log(xhr.readyState);
  //   if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
  //     console.log(xhr.responseText);
  //     const products = JSON.parse(xhr.responseText);
  //     products.forEach((product) => addProduct(product));
  //   }
  // });

  // fetch('http://127.0.0.1:8080/data/product_list.json')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  const onClickMoveUp = (e) => {
    console.log('click move up');
    const buttonEl = e.currentTarget;
    const trCurrentEl = buttonEl.parentNode.parentNode;
    console.log(trCurrentEl);
    DOM.tableBody.insertBefore(trCurrentEl, trCurrentEl.previousElementSibling);
    // parentNode.insertBefore(refElement, targetChild) targetChild - Kindelement vor dem das Referenzelement platziert wird.
    disableNonFunctionalButtons();
  };

  const onClickMoveDown = (e) => {
    console.log('click move down');
    const buttonEl = e.currentTarget;
    const trCurrentEl = buttonEl.parentNode.parentNode;
    DOM.tableBody.insertBefore(trCurrentEl, trCurrentEl.nextElementSibling.nextElementSibling);
    disableNonFunctionalButtons();
  };

  const onClickProductDelete = (e) => {
    console.log('click delete');
    const buttonEl = e.currentTarget;
    // buttonEl.parentNode.parentNode.remove(); // Node.remove() <- kein IE11 Support
    DOM.tableBody.removeChild(buttonEl.parentNode.parentNode);
    disableNonFunctionalButtons();
  };

  const onClickProductAdd = (e) => {
    console.log('click');
    if (DOM.inputProductName.value === '' && DOM.inputProductPrice.value === '') return;

    addProduct({
      name: DOM.inputProductName.value,
      price: DOM.inputProductPrice.value,
    });
    disableNonFunctionalButtons();
  };
  // === FUNCTIONS ====
  const addProduct = (product) => {
    //  const name = product.name;
    //  const price = product.price;
    const { name = 'no product name', price = 0.0 } = product; // Destructering

    const tdNameEl = createTdEl(name);
    const tdPriceEl = createTdEl(price);
    const tdButtonEl = createTdElWithButtons();
    const trEl = createTrEl([tdNameEl, tdPriceEl, tdButtonEl]);

    DOM.tableBody.appendChild(trEl);
  };

  const initProducts = () => {
    PRODUCTS.forEach((product) => addProduct(product));
  };

  const disableNonFunctionalButtons = () => {
    Array.from(DOM.tableBody.querySelectorAll('tr')).forEach((trEl) => {
      trEl.querySelector('.button-move-up').disabled =
        trEl.previousElementSibling === null ? true : false;
      trEl.querySelector('.button-move-down').disabled = !trEl.nextElementSibling;
    });
  };

  const createTdEl = (text = 'no value') => {
    const tdEl = document.createElement('td');
    tdEl.textContent = text;
    return tdEl;
  };

  const createTdElWithButtons = () => {
    const tdEl = document.createElement('td');
    const btnDeleteEl = createBtn({
      text: 'Delete',
      eventHandler: onClickProductDelete,
      classNames: ['btn-danger', 'button-product-delete'],
      iconName: 'trash-alt',
    });
    const btnMoveUpEl = createBtn({
      text: 'Move Up',
      eventHandler: onClickMoveUp,
      classNames: ['btn-secondary', 'button-move-up'],
      iconName: 'chevron-up',
    });
    const btnMoveDownEl = createBtn({
      text: 'Move Down',
      eventHandler: onClickMoveDown,
      classNames: ['btn-secondary', 'button-move-down'],
      iconName: 'chevron-down',
    });
    // const btnUserEl = createBtn({
    //   text: 'Login',
    //   eventHandler: (e) => {
    //     console.log('login');
    //   },
    //   classNames: ['btn-primary', 'button-user-login'],
    //   iconName: 'user',
    // });

    tdEl.appendChild(btnDeleteEl);
    tdEl.appendChild(btnMoveUpEl);
    tdEl.appendChild(btnMoveDownEl);
    // tdEl.appendChild(btnUserEl);

    return tdEl;
  };

  const createBtn = (options) => {
    const {
      text = '',
      eventHandler = (e) => {
        console.log('nothing defined');
      },
      classNames = ['btn-primary'],
      iconName = 'dot-circle',
    } = options;

    const btnEl = document.createElement('button');
    const iconEl = document.createElement('i');
    const spanEl = document.createElement('span');

    btnEl.addEventListener('click', eventHandler);
    btnEl.classList.add('btn', ...classNames);
    iconEl.classList.add('fas', `fa-${iconName}`);
    spanEl.classList.add('sr-only');
    spanEl.textContent = text;

    btnEl.appendChild(iconEl);
    btnEl.appendChild(spanEl);
    return btnEl;
  };

  // const createBtnMoveDown = () => {
  //   const btnEl = document.createElement('button');
  //   const iconEl = document.createElement('i');
  //   const spanEl = document.createElement('span');

  //   btnEl.addEventListener('click', onClickMoveDown);
  //   btnEl.classList.add('btn', 'btn-secondary', 'button-move-down');
  //   iconEl.classList.add('fas', 'fa-chevron-down');
  //   spanEl.classList.add('sr-only');
  //   spanEl.textContent = 'Move Down';

  //   btnEl.appendChild(iconEl);
  //   btnEl.appendChild(spanEl);
  //   return btnEl;
  // };

  // const createBtnMoveUp = () => {
  //   const btnEl = document.createElement('button');
  //   const iconEl = document.createElement('i');
  //   const spanEl = document.createElement('span');

  //   btnEl.addEventListener('click', onClickMoveUp);
  //   btnEl.classList.add('btn', 'btn-secondary', 'button-move-up');
  //   iconEl.classList.add('fas', 'fa-chevron-up');
  //   spanEl.classList.add('sr-only');
  //   spanEl.textContent = 'Move Up';

  //   btnEl.appendChild(iconEl);
  //   btnEl.appendChild(spanEl);
  //   return btnEl;
  // };

  // const createBtnDelete = () => {
  //   const btnEl = document.createElement('button');
  //   const iconEl = document.createElement('i');
  //   const spanEl = document.createElement('span');

  //   btnEl.addEventListener('click', onClickProductDelete);
  //   btnEl.classList.add('btn', 'btn-danger', 'button-product-delete');
  //   iconEl.classList.add('fas', 'fa-trash-alt');
  //   spanEl.classList.add('sr-only');
  //   spanEl.textContent = 'Delete';

  //   btnEl.appendChild(iconEl); //=> <button class="btn btn-danger button-product-delete"><i class="fas fa-trash-alt"></i></button>
  //   btnEl.appendChild(spanEl); //=> <button class="btn btn-danger button-product-delete"><i class="fas fa-trash-alt"></i><span>Delete</span></button>

  //   return btnEl;
  // };

  const createTrEl = (tdEls = []) => {
    const trEl = document.createElement('tr');
    tdEls.forEach((el) => trEl.appendChild(el));
    // trEl.appendChild(tdNameEl);
    // trEl.appendChild(tdPriceEl);
    return trEl;
  };

  init();
})();
