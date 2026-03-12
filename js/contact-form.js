(function () {
  'use strict';

  const FORMSPREE = 'https://formspree.io/f/REMPLACE_PAR_TON_ID';
  const RECIPIENTS = ['l.donze@chateau-martinat.com', 's.donze@chateau-martinat.com'];

  const MSG = {
    fr: {
      success:      'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.',
      errorGeneric: 'Une erreur est survenue. Merci de réessayer ou de nous écrire directement par email.',
      required:     'Ce champ est obligatoire.',
      email:        'Adresse email invalide.',
      phone:        'Numéro de téléphone invalide.',
    },
    en: {
      success:      'Thank you for your message! We will get back to you as soon as possible.',
      errorGeneric: 'An error occurred. Please try again or contact us by email.',
      required:     'This field is required.',
      email:        'Invalid email address.',
      phone:        'Invalid phone number.',
    }
  };

  function lang() { return localStorage.getItem('martinat_lang') || 'fr'; }
  function t(k)   { return MSG[lang()]?.[k] || MSG.fr[k]; }

  function validateField(input) {
    const group = input.closest('.form-group');
    const errEl = group && group.querySelector('.form-error-msg');
    let ok = true, msg = '';

    input.classList.remove('input-error');
    group && group.classList.remove('has-error');

    if (input.required && !input.value.trim()) {
      ok = false; msg = t('required');
    } else if (input.type === 'email' && input.value) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) { ok = false; msg = t('email'); }
    } else if (input.type === 'tel' && input.value) {
      if (!/^[+\d][\d\s\-().]{5,19}$/.test(input.value)) { ok = false; msg = t('phone'); }
    }

    if (!ok) {
      input.classList.add('input-error');
      group && group.classList.add('has-error');
      if (errEl) errEl.textContent = msg;
    }
    return ok;
  }

  function validateAll(form) {
    var fields = form.querySelectorAll('input[required], select[required], textarea[required]');
    var ok = true;
    fields.forEach(function (f) { if (!validateField(f)) ok = false; });
    return ok;
  }

  function showFeedback(form, type, text) {
    var fb = form.querySelector('.form-feedback');
    if (!fb) return;
    fb.className = 'form-feedback ' + type;
    var span = fb.querySelector('.feedback-text');
    if (span) span.textContent = text;
    fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function hideFeedback(form) {
    var fb = form.querySelector('.form-feedback');
    if (fb) fb.className = 'form-feedback';
  }

  async function onSubmit(e) {
    e.preventDefault();
    var form = e.target;
    var btn  = form.querySelector('.btn-submit');

    hideFeedback(form);

    if (!validateAll(form)) {
      var first = form.querySelector('.input-error');
      if (first) first.focus();
      return;
    }

    btn.classList.add('loading');
    btn.disabled = true;

    try {
      var data = new FormData(form);
      data.append('_langue', lang());

      var res = await fetch(FORMSPREE, {
        method:  'POST',
        body:    data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        showFeedback(form, 'success', t('success'));
        form.reset();
      } else {
        showFeedback(form, 'form-error', t('errorGeneric'));
      }
    } catch (_) {
      showFeedback(form, 'form-error', t('errorGeneric'));
    } finally {
      btn.classList.remove('loading');
      btn.disabled = false;
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.contact-form').forEach(function (form) {
      form.querySelectorAll('input, select, textarea').forEach(function (f) {
        f.addEventListener('blur',  function () { validateField(this); });
        f.addEventListener('input', function () {
          if (this.classList.contains('input-error')) validateField(this);
        });
      });
      form.addEventListener('submit', onSubmit);
    });
  });
})();