const $ = (qs) => document.querySelector(qs);
const $$ = (qs) => Array.from(document.querySelectorAll(qs));

const $on = (el, ev, fn) => {
  Array.isArray(el) ? el.forEach((ae) => $on(ae, ev, fn)) : el.addEventListener(ev, fn);
  return el;
};

// Helferfunktionen von Paul Irish (bling.js)
// https://gist.github.com/paulirish/12fb951a8b893a454b32
// Node Objekt erhält neue Methode on - Kurzschreibweise für addEventListener
Node.prototype.on = function (name, fn) {
  this.addEventListener(name, fn);
  return this;
};

NodeList.prototype.__proto__ = Array.prototype;

// Array Objekt erhänt neue Methoden on und addEventlistener - Kurzschreibweise für Schleifendurchlauf mit addEventListener
Array.prototype.on = Array.prototype.addEventListener = function (name, fn) {
  this.forEach((elem) => elem.addEventListener(name, fn));
  return this;
};
