'use strict';

(() => {
  // === DOM & VARS ===
  const DOM = {};
  DOM.formContact = document.querySelector('.form-contact');
  DOM.inputEmail = DOM.formContact.querySelector('#input-email');

  console.log(DOM);

  // === INIT =========

  const init = () => {
    DOM.formContact.noValidate = true;
    DOM.formContact.addEventListener('submit', onSubmitContact);
  };

  // === EVENTS / XHR =======
  const onSubmitContact = (e) => {
    console.log('send');
    let error = false;

    if (validator.isEmail(DOM.inputEmail.value)) {
      DOM.inputEmail.classList.add('is-valid');
      DOM.inputEmail.classList.remove('is-invalid');
    } else {
      error = true;
      DOM.inputEmail.classList.add('is-invalid');
      DOM.inputEmail.classList.remove('is-valid');
    }

    if (!error) {
      DOM.formContact.submit();
    }
  };

  // === FUNCTIONS ====

  init();
})();
