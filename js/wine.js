/* ========================================
   WINE PAGE — LANGUAGE HANDLER (partagé)
   Inclus par toutes les pages /pages/*.html
   ======================================== */
(function () {
  'use strict';

  function applyLang(lang) {
    document.documentElement.lang = lang;

    // Blocs de contenu bilingues
    document.querySelectorAll('.lang-fr').forEach(function (el) {
      el.style.display = lang === 'fr' ? '' : 'none';
    });
    document.querySelectorAll('.lang-en').forEach(function (el) {
      el.style.display = lang === 'en' ? '' : 'none';
    });

    // Listes de distinctions bilingues
    document.querySelectorAll('.awards-fr').forEach(function (el) {
      el.style.display = lang === 'fr' ? '' : 'none';
    });
    document.querySelectorAll('.awards-en').forEach(function (el) {
      el.style.display = lang === 'en' ? '' : 'none';
    });

    // Bouton téléchargement
    var dlBtn = document.querySelector('.btn-download');
    if (dlBtn) {
      dlBtn.textContent = lang === 'en'
        ? 'Download technical sheet'
        : 'Télécharger la fiche technique';
      // Remettre l'icône (le ::before CSS s'en charge, on garde juste le texte)
    }

    // Synchroniser i18n.js si présent
    if (typeof i18n !== 'undefined') { i18n.applyLang(lang, false); }

    // Boutons actifs
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