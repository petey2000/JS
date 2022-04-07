'use strict';

(() => {
  // =========================
  // 	VARS
  // =========================
  const URL_API = 'https://swapi.api.webmasters-akademie.dev/planets/';

  // =========================
  // 	DOM
  // =========================

  const DOM = {};
  DOM.allPlanets = document.querySelector('.all-planets');

  // =========================
  // 	INIT
  // =========================
  const init = () => {
    fetchPlanets()
      .then((data) => (DOM.allPlanets.innerHTML = getAllPlanetNames(data).join(', ')))
      .catch((err) => console.error(err + ' Daten können icht angezeigt werden. Verdammt!'));
  };

  // =========================
  // 	EVENTS / XHR
  // =========================
  const fetchPlanets = () => {
    return new Promise((resolve, reject) => {
      fetch(URL_API)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) =>
          console.log(err + ' Beim Auslesen der Daten ist was schief gegangen. Relax!')
        );
    });
  };
  // =========================
  // 	FUNCTIONS
  // =========================
  const getAllPlanetNames = (data) => data.map((el) => el.name);

  // =========================
  // =========================
  init();
})();
