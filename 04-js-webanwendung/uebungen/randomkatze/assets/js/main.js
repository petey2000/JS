'use strict';
const $ = (qs) => document.querySelector(qs);
const $$ = (qs) => Array.from(document.querySelectorAll(qs));

(() => {

// === DOM & VARS ===
const DOM = {};
DOM.card1 = $('.card1');
DOM.card1Img = DOM.card1.querySelector('img');

DOM.card2 = $('.card2');
 DOM.card2Img = DOM.card2.querySelector('img');

DOM.card3 = $('.card3');
DOM.card3Img = DOM.card3.querySelector('img');

DOM.card4 = $('.card4');
DOM.card4Img = DOM.card4.querySelector('img');

DOM.card5 = $('.card5');
DOM.card5Img = DOM.card5.querySelector('img');

DOM.card6 = $('.card6');
DOM.card6Img = DOM.card6.querySelector('img');

DOM.card7 = $('.card7');
DOM.card7Img = DOM.card7.querySelector('img');
// === INIT =========

const init = () => {

  getPic();
  getPic2();
  getPic3();
  getPic4();
  getPic5();
  getPic6();
  getPic7();
  

}

// === EVENTS / XHR =======
const getPic =()=>{
  fetch('https://aws.random.cat/meow')
  .then((res)=>res.json())
  .then((data)=>showPic(data.file));

  setTimeout(getPic, 1000);
}
const getPic2 =()=>{
  fetch('https://aws.random.cat/meow')
  .then((res)=>res.json())
  .then((data)=>showPic2(data.file));

  setTimeout(getPic2, 1000);
}
const getPic3 =()=>{
  fetch('https://aws.random.cat/meow')
  .then((res)=>res.json())
  .then((data)=>showPic3(data.file));

  setTimeout(getPic3, 1000);
}
const getPic4 =()=>{
  fetch('https://aws.random.cat/meow')
  .then((res)=>res.json())
  .then((data)=>showPic4(data.file));

  setTimeout(getPic4, 1000);
}
const getPic5 =()=>{
  fetch('https://aws.random.cat/meow')
  .then((res)=>res.json())
  .then((data)=>showPic5(data.file));

  setTimeout(getPic5, 1000);
}
const getPic6 =()=>{
  fetch('https://aws.random.cat/meow')
  .then((res)=>res.json())
  .then((data)=>showPic6(data.file));

  setTimeout(getPic6, 1000);
}
const getPic7 =()=>{
  fetch('https://aws.random.cat/meow')
  .then((res)=>res.json())
  .then((data)=>showPic7(data.file));

  setTimeout(getPic7, 1000);
}
// === FUNCTIONS ====

const showPic = (data)=>{

  DOM.card1Img.src = data;
  };
const showPic2 = (data)=>{

  DOM.card2Img.src = data;
  };
const showPic3 = (data)=>{

  DOM.card3Img.src = data;
  };
const showPic4 = (data)=>{

  DOM.card4Img.src = data;
  };
const showPic5 = (data)=>{

  DOM.card5Img.src = data;
  };
const showPic6 = (data)=>{

  DOM.card6Img.src = data;
  };
const showPic7 = (data)=>{

  DOM.card7Img.src = data;
  };






init();

})();