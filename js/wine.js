(function () {
  'use strict';

  function applyLang(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-fr').forEach(function (el) {
      el.style.display = lang === 'fr' ? '' : 'none';
    });
    document.querySelectorAll('.lang-en').forEach(function (el) {
      el.style.display = lang === 'en' ? '' : 'none';
    });

    document.querySelectorAll('.awards-fr').forEach(function (el) {
      el.style.display = lang === 'fr' ? '' : 'none';
    });
    document.querySelectorAll('.awards-en').forEach(function (el) {
      el.style.display = lang === 'en' ? '' : 'none';
    });

    if (typeof i18n !== 'undefined') { i18n.applyLang(lang, false); }

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