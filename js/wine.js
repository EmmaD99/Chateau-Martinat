(function () {
  'use strict';

  function applyLang(lang) {
    document.documentElement.lang = lang;

    document.documentElement.classList.remove('lang-active-fr', 'lang-active-en');
    document.documentElement.classList.add('lang-active-' + lang);

    if (typeof i18n !== 'undefined') {
      i18n.applyLang(lang, false);
    }

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved = localStorage.getItem('martinat_lang') || 'fr';
    applyLang(saved);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.dataset.lang;
        localStorage.setItem('martinat_lang', lang);
        applyLang(lang);
      });
    });
  });
})();