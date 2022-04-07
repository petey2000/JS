'use strict';


(() => {
const $ = (qs) => document.querySelector(qs);
const $$ = (qs) => Array.from(document.querySelectorAll(qs));

  // === DOM & VARS ===
  const DOM = {};

  DOM.tabs = $$('.tabs article');
  DOM.nav = $$('.tabs > nav ul li')

  console.log(DOM.nav);

  // === INIT =========

  const init = () => {

    DOM.nav.forEach((el => {
      el.addEventListener ('click', chooseTab)}));

    DOM.tabs.forEach((el)=>{el.style.display = 'none'})  
    DOM.tabs[0].style = 'block'
    DOM.nav[0].classList.add('active')

     

  };

  

  // === EVENTS / XHR =======

  const chooseTab = (e)=>{
    DOM.nav.forEach((el => {el.classList.remove('active')}));
    e.currentTarget.classList.add('active')
    const index = DOM.nav.indexOf(e.currentTarget);

    DOM.tabs.forEach((el)=>{el.style.display = 'none'}) 
    DOM.tabs[index].style = 'block'


    
    
    
    
    
    

  }

  // === FUNCTIONS ====

  init();
})();
