'use strict';

(() => {
  // =========================
  // 	DOM & VARS
  // =========================
  const DOM = {};
  DOM.articles = $$('.tabs .articles .article');
  DOM.tabs = $$('.tabs nav ul.taps-list li');

  // =========================
  // 	INIT
  // =========================
  const init = () => {
    disableAllArticles();
    showArticle(0);

    DOM.tabs.forEach((article, index) => {
      article.addEventListener('click', (e) => {
        onClickTab(e, index);
      });
    });
  };

  // =========================
  // 	EVENTS / XHR
  // =========================
  const onClickTab = (e, index) => {
    const tabEl = e.currentTarget;
    // const index = DOM.tabs.indexOf(tabEl);

    disableAllArticles();
    showArticle(index);
  };

  // =========================
  // 	FUNCTIONS
  // =========================
  const hideArticle = (article) => {
    article.style.visibility = 'hidden';
    article.style.height = '0px';
  };

  const visibleArticle = (index) => {
    DOM.tabs[index].classList.add('active');

    DOM.articles[index].style.visibility = 'visible';
    DOM.articles[index].style.height = 'auto';
  };

  const disableAllArticles = () => {
    DOM.articles.forEach((element, index) => {
      hideArticle(element);
      DOM.tabs[index].classList.remove('active');
    });
  };

  const showArticle = (index) => {
    visibleArticle(index);
  };

  // =========================
  // =========================
  init();
})();
