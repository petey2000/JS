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
    DOM.btnProductAdd.on('click', onClickProductAdd);
  };

  // === EVENTS / XHR =======
  const onClickProductAdd = (e) => {
    console.log('click');
    addProduct({
      name: DOM.inputProductName.value,
      price: DOM.inputProductPrice.value,
    });
  };
  // === FUNCTIONS ====
  const addProduct = (product) => {
    //  const name = product.name;
    //  const price = product.price;
    const { name = 'no product name', price = 0.0 } = product; // Destructering

    const tdNameEl = createTdEl(name);
    const tdPriceEl = createTdEl(price);
    const trEl = createTrEl([tdNameEl, tdPriceEl]);

    DOM.tableBody.appendChild(trEl);
    console.log(trEl);
  };

  const createTdEl = (text = 'no value') => {
    const tdEl = document.createElement('td');
    tdEl.textContent = text;
    return tdEl;
  };

  const createTrEl = (tdEls = []) => {
    const trEl = document.createElement('tr');
    tdEls.forEach((el) => trEl.appendChild(el));
    // trEl.appendChild(tdNameEl);
    // trEl.appendChild(tdPriceEl);
    return trEl;
  };

  init();
})();
