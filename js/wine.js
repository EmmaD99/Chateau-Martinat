(function () {
  'use strict';

  // wine.js — pages de vin individuelles
  // La visibilité .lang-fr / .lang-en est gérée par les classes CSS
  // html.lang-active-fr / html.lang-active-en posées par le script inline
  // du <head>. Ce fichier se contente de brancher les boutons langue.

  function applyLang(lang) {
    document.documentElement.lang = lang;

    // Mise à jour de la classe sur <html>
    document.documentElement.classList.remove('lang-active-fr', 'lang-active-en');
    document.documentElement.classList.add('lang-active-' + lang);

    // Délégation à i18n si disponible (data-i18n)
    if (typeof i18n !== 'undefined') {
      i18n.applyLang(lang, false);
    }

    // Boutons langue actif/inactif
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