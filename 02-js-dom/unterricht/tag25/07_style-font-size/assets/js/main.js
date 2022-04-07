'use strict';

(() => {
  // === DOM & VARS ===

  const DOM = {};
  DOM.btnVeryBig = $('#very_big');
  DOM.btnBig = $('#big');
  DOM.btnNormal = $('#normal');
  DOM.btnSmall = $('#small');

  DOM.btnIncrease = $('#inc');
  DOM.btnDecrease = $('#dec');

  DOM.btns = $$('.button-controls button');

  DOM.text = $('p');

  // === INIT =========

  const init = () => {
    // DOM.text.style.fontSize = '16px';
    DOM.text.style.fontSize = window.getComputedStyle(DOM.text).fontSize;

    // DOM.btnVeryBig.addEventListener('click', (e) => {
    //   setFontSizeTo(36);
    // });
    // DOM.btnBig.on('click', (e) => {
    //   setFontSizeTo(24);
    // });
    // DOM.btnNormal.on('click', (e) => {
    //   setFontSizeTo(16);
    // });
    // DOM.btnSmall.on('click', (e) => {
    //   setFontSizeTo(14);
    // });

    // DOM.btnIncrease.on('click', (e) => {
    //   console.log('click');
    //   setFontSizeTo(currentFontSize() + 5);
    // });
    // DOM.btnDecrease.on('click', (e) => {
    //   console.log('click');
    //   setFontSizeTo(currentFontSize() - 5);
    // });

    DOM.btns.forEach((el) => el.addEventListener('click', onClickButtons));

    // Mit Helper Array-on-Methode
    // DOM.btns.on('click', (e) => {
    //   console.log('click');
    // });
  };

  // === EVENTS / XHR =======
  const onClickButtons = (e) => {
    const button = e.currentTarget;
    const id = button.id;

    console.log(button);

    // if(id === 'very_big') {
    //   setFontSizeTo(36);
    // } else if (id === 'big') {
    //   setFontSizeTo(24);
    // } else if (id === 'small') {

    // }
    switch (id) {
      case 'very_big':
        setFontSizeTo(36);
        break;
      case 'big':
        setFontSizeTo(24);
        break;
      case 'normal':
        setFontSizeTo(16);
        break;
      case 'small':
        setFontSizeTo(14);
        break;
      case 'inc':
        setFontSizeTo(currentFontSize() + 5);
        break;
      case 'dec':
        setFontSizeTo(currentFontSize() - 5);
        break;
    }
  };

  // === FUNCTIONS ====
  const setFontSizeTo = (size) => (DOM.text.style.fontSize = size + 'px');

  const currentFontSize = () => parseInt(DOM.text.style.fontSize);

  init();
})();
