'use strict';

(() => {
  // === DOM & VARS ===
  const DOM = {};
  DOM.nerdShop = document.querySelector('.m-nerdshop');
  DOM.table = DOM.nerdShop.querySelector('table');
  DOM.tBody = DOM.table.querySelector('tbody');
  DOM.trDummy = DOM.tBody.querySelector('tr');
  DOM.buttonAdd = DOM.table.querySelector('.button-add');

  DOM.modalProduct = DOM.nerdShop.querySelector('#modal-product');
  DOM.formProduct = DOM.modalProduct.querySelector('.form-product');
  DOM.spanActions = Array.from(DOM.modalProduct.querySelectorAll('.modal-action'));

  // Formularfelder
  DOM.inputCode = DOM.formProduct.querySelector('input[name="code"]');
  DOM.inputDescription = DOM.formProduct.querySelector('input[name="description"]');
  DOM.textareaTagline = DOM.formProduct.querySelector('textarea[name="tagline"]');
  DOM.inputQuantity = DOM.formProduct.querySelector('input[name="quantity"]');
  DOM.inputPrice = DOM.formProduct.querySelector('input[name="price"]');

  // DOM.buttonModalAdd = DOM.modalProduct.querySelector('.button-modal-add');
  DOM.buttonModalClose = DOM.modalProduct.querySelector('.button-modal-close');

  const bsProductModal = new bootstrap.Modal(DOM.modalProduct);

  console.log(DOM);
  // === INIT =========

  const init = () => {
    console.log('init');
    getProducts().then((data) => createProductRows(data));
    DOM.buttonAdd.addEventListener('click', onClickButtonAdd);
    DOM.formProduct.addEventListener('submit', onFormProductSubmit);
  };

  // === EVENTS / XHR =======
  const onFormProductSubmit = (e) => {
    e.preventDefault();

    console.log('Formular wurde versendet');
    const formEl = e.currentTarget;
    const action = formEl.dataset.action || 'add';
    //const method = formEl.method;

    const product = {
      code: DOM.inputCode.value,
      shortdesc: DOM.inputDescription.value,
      tagline: DOM.textareaTagline.value,
      quantity: DOM.inputQuantity.value,
      price: DOM.inputPrice.value,
    };

    if (action === 'add') {
      addProduct(product).then((data) => {
        console.log(data);
        if (data.success) {
          bsProductModal.hide();
          DOM.formProduct.reset(); // Formular leeren
          getProducts().then((data) => createProductRows(data));
        }
      });
    } else {
      updateProduct(product).then((data) => {
        console.log(data);
        if (data.success) {
          bsProductModal.hide();
          DOM.formProduct.reset(); // Formular leeren
          getProducts().then((data) => createProductRows(data));
        }
      });
    }
  };

  const onClickButtonAdd = (e) => {
    const btn = e.currentTarget;
    console.log('click', btn);

    showModalAddData();
  };

  const onClickButtonEdit = (e) => {
    const btn = e.currentTarget;
    const code = btn.dataset.code;

    getProductByCode(code).then((data) => showModalEditData(data));

    console.log('click', code);
  };

  const onClickButtonDelete = (e) => {
    const btn = e.currentTarget;
    const code = btn.dataset.code;
    // const index = getProductIndexByButton(btn);
    // console.log(index);
    console.log(code);
    console.log('click', btn);

    deleteProductByCode(code).then((data) => {
      getProducts().then((data) => createProductRows(data));
    });
  };

  const getProductIndexByButton = (btn) => {
    const trEl = btn.parentNode.parentNode;
    return Array.from(DOM.tBody.querySelectorAll('tr')).findIndex((el) => el === trEl);
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

  // AJAX - GET - Produkt holen
  const getProductByCode = (code) => {
    return new Promise((resolve) => {
      fetch(`/api/product/${code}`)
        .then((resp) => resp.json())
        .then((data) => resolve(data))
        .catch((err) => console.error(err));
    });
  };

  // AJAX - POST - Produkt senden (erstellen)
  const addProduct = (product) => {
    return new Promise((resolve) => {
      fetch('/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => resolve(data))
        .catch((err) => console.error(err));
    });
  };

  // AJAX - PUT - Produkt aktualisieren
  const updateProduct = (product) => {
    return new Promise((resolve) => {
      fetch('/api/product', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => resolve(data))
        .catch((err) => console.error(err));
    });
  };

  // AJAX - DELETE - Produkte löschen
  const deleteProductByCode = (code) => {
    return new Promise((resolve) => {
      fetch('/api/product', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
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
    return products.map((product, idx) => {
      const { code, shortdesc: description, tagline, quantity, price, stockwarn } = product;

      const trEl = DOM.trDummy.cloneNode(true);

      const btnDeleteEl = trEl.querySelector('.button-delete');
      const btnEditEl = trEl.querySelector('.button-edit');

      const cbStockwarnEl = trEl.querySelector('.td-stockwarn input');
      // Durch das Klonen müssen die Elemente für Produktzeile nicht über JS erstellt werden.
      // const trEl = document.createElement('tr');
      // const tdCodeEl = document.createElement('td');
      // tdCodeEl.classList.add('td-code');

      btnDeleteEl.dataset.code = code;
      btnDeleteEl.dataset.index = idx;
      btnDeleteEl.addEventListener('click', onClickButtonDelete);

      btnEditEl.dataset.code = code;
      btnEditEl.dataset.index = idx;
      btnEditEl.addEventListener('click', onClickButtonEdit);

      //code mitgeben
      // btnDeleteEl.addEventListener('click', (e) => {
      //   onClickButtonDelete(e, code);
      // });

      trEl.querySelector('.td-code').textContent = code;
      trEl.querySelector('.td-desc').textContent = description;
      trEl.querySelector('.td-tagline').textContent = tagline;
      trEl.querySelector('.td-quantity').textContent = quantity;
      trEl.querySelector('.td-price').textContent = price;

      cbStockwarnEl.checked = stockwarn;
      cbStockwarnEl.id = `cb-stockwarn-${idx}`;

      return trEl;
    });
  };

  const showModalAddData = () => {
    DOM.formProduct.dataset.action = 'add';
    // DOM.formProduct.method = 'post';

    DOM.spanActions.forEach((el) => (el.textContent = 'Add'));
    DOM.inputCode.disabled = false;

    // Fomular leeren
    DOM.formProduct.reset();
  };

  const showModalEditData = (product) => {
    const { code, shortdesc: description, tagline, quantity, price } = product;

    DOM.formProduct.dataset.action = 'edit';
    // DOM.formProduct.method = 'put';

    DOM.spanActions.forEach((el) => (el.textContent = 'Edit'));

    DOM.inputCode.disabled = true;

    // Formular mit Produktdaten befüllen
    DOM.inputCode.value = code;
    DOM.inputDescription.value = description;
    DOM.textareaTagline.value = tagline;
    DOM.inputQuantity.value = quantity;
    DOM.inputPrice.value = price;
  };

  init();
})();
