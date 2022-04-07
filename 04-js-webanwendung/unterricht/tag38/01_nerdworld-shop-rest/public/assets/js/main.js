'use strict';

(() => {
  // === DOM & VARS ===
  const DOM = {};
  DOM.nerdShop = document.querySelector('.m-nerdshop');
  DOM.table = DOM.nerdShop.querySelector('table');
  DOM.tBody = DOM.table.querySelector('tbody');
  DOM.trDummy = DOM.tBody.querySelector('tr');
  DOM.buttonAdd = DOM.table.querySelector('.button-add');

  DOM.modalProductAdd = DOM.nerdShop.querySelector('#modal-product-add');
  DOM.formProductAdd = DOM.modalProductAdd.querySelector('.form-product-add');

  // Formularfelder
  DOM.inputCode = DOM.formProductAdd.querySelector('input[name="code"]');
  DOM.inputDescription = DOM.formProductAdd.querySelector('input[name="description"]');
  DOM.textareaTagline = DOM.formProductAdd.querySelector('textarea[name="tagline"]');
  DOM.inputQuantity = DOM.formProductAdd.querySelector('input[name="quantity"]');
  DOM.inputPrice = DOM.formProductAdd.querySelector('input[name="price"]');

  DOM.buttonModalAdd = DOM.modalProductAdd.querySelector('.button-modal-add');
  DOM.buttonModalClose = DOM.modalProductAdd.querySelector('.button-modal-close');

  console.log(DOM);
  // === INIT =========

  const init = () => {
    console.log('init');
    getProducts().then((data) => createProductRows(data));
    DOM.buttonAdd.addEventListener('click', onClickButtonAdd);
    DOM.formProductAdd.addEventListener('submit', onFormProductSubmit);
  };

  // === EVENTS / XHR =======
  const onFormProductSubmit = (e) => {
    e.preventDefault();
    console.log('Formular wurde versendet');

    const product = {
      code: DOM.inputCode.value,
      shortdesc: DOM.inputDescription.value,
      tagline: DOM.textareaTagline.value,
      quanity: DOM.inputQuantity.value,
      price: DOM.inputPrice.value,
    };

    addProduct(product);
  };

  const onClickButtonAdd = (e) => {
    const btn = e.currentTarget;
    console.log('click', btn);
  };

  // AJAX - POST - Produkt senden (erstellen)
  const addProduct = (product) => {
    fetch('/api/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((resp) => resp.json())
      .then((data) => console.log('data:', data))
      .catch((err) => console.error(err));
  };

  // AJAX - GET - Produkte holen
  const getProducts = () => {
    return new Promise((resolve) => {
      fetch('/api/products')
        .then((resp) => resp.json())
        .then((data) => resolve(data))
        .catch((err) => console.error(err));
    });
  };

  // === FUNCTIONS ====
  const createProductRows = (products) => {
    const trEls = createTrEls(products);
    console.log(trEls);

    DOM.tBody.textContent = '';
    trEls.forEach((trEl) => {
      DOM.tBody.appendChild(trEl);
    });
  };

  const createTrEls = (products) => {
    return products.map((product) => {
      const { code, shortdesc: description, tagline, quantity, price, stockwarn } = product;

      const trEl = DOM.trDummy.cloneNode(true);

      // Durch das Klonen müssen die Elemente für Produktzeile nicht über JS erstellt werden.
      // const trEl = document.createElement('tr');
      // const tdCodeEl = document.createElement('td');
      // tdCodeEl.classList.add('td-code');

      trEl.querySelector('.td-code').textContent = code;
      trEl.querySelector('.td-desc').textContent = description;
      trEl.querySelector('.td-tagline').textContent = tagline;
      trEl.querySelector('.td-quantity').textContent = quantity;
      trEl.querySelector('.td-price').textContent = price;
      trEl.querySelector('.td-stockwarn').textContent = stockwarn;

      return trEl;
    });
  };

  init();
})();
