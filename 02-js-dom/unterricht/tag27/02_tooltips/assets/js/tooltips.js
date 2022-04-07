'use strict';

(() => {
  // === DOM & VARS ===
  const DOM = {};
  DOM.tooltip = $('#tooltip');
  DOM.keywords = $$('span.keyword');

  console.log($('body'));

  // === INIT =========

  const init = () => {
    // DOM.keywords.on('mouseenter', onEnterKeyword);
    // DOM.keywords.on('mouseleave', onLeaveKeyword);

    console.log(DOM.keywords);
    DOM.keywords.forEach((el) => {
      el.addEventListener('mousemove', onMoveKeyword);
      el.addEventListener('mouseleave', onLeaveKeyword);
    });
  };

  // === EVENTS / XHR =======
  const onLeaveKeyword = (e) => {
    console.log('leave');
    hideTooltip();
  };

  const onMoveKeyword = (e) => {
    const spanEl = e.currentTarget;
    const text = spanEl.dataset.tooltip || 'no explanation found';
    console.log(e.currentTarget);

    const x = e.clientX;
    const y = e.clientY;

    // DOM.tooltip.style.left = `${spanEl.offsetLeft - 170}px`;
    // DOM.tooltip.style.top = `${spanEl.offsetTop - 140}px`;
    DOM.tooltip.style.left = `${x + 15}px`;
    DOM.tooltip.style.top = `${y + 15}px`;
    DOM.tooltip.textContent = text;

    showTooltip();
  };

  // === FUNCTIONS ====
  const showTooltip = () => {
    // DOM.tooltip.style.display = 'block'
    DOM.tooltip.classList.add('show');
    DOM.tooltip.classList.remove('hide');
  };

  const hideTooltip = () => {
    //DOM.tooltip.style.display = 'none';
    DOM.tooltip.classList.remove('show');
    DOM.tooltip.classList.add('hide');
  };

  init();
})();
