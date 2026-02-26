/* ========================================
   CHÂTEAU MARTINAT - MAIN JAVASCRIPT
   ======================================== */

// ============================================
// AGE VERIFICATION
// ============================================
const ageVerification = {
  popup:  document.getElementById('age-verification-popup'),
  yesBtn: document.getElementById('verify-button-yes'),
  noBtn:  document.getElementById('verify-button-no'),

  init() {
    // Absent sur les sous-pages → on sort silencieusement
    if (!this.popup || !this.yesBtn || !this.noBtn) return;

    const isVerified = sessionStorage.getItem('ageVerified');
    if (isVerified === 'true') {
      this.hidePopup();
    } else {
      this.showPopup();
    }
    this.yesBtn.addEventListener('click', () => this.verifyAge(true));
    this.noBtn.addEventListener('click',  () => this.verifyAge(false));
  },

  verifyAge(isAdult) {
    if (isAdult) {
      sessionStorage.setItem('ageVerified', 'true');
      this.hidePopup();
    } else {
      this.popup.innerHTML = `<div class="popup-content" style="border-color:rgba(184,134,11,0.3);">
        <p style="color:#f5f5f5;font-size:1.1rem;font-family:var(--font-primary);line-height:1.8;">
          Vous devez avoir 18 ans ou plus pour accéder à ce site.<br><br>
          You must be 18 or over to access this website.
        </p>
      </div>`;
    }
  },

  showPopup() { this.popup.style.display = 'flex'; },
  hidePopup() { this.popup.style.display = 'none'; }
};

// ============================================
// MENU NAVIGATION
// ============================================
const menuNav = {
  openBtn:   document.getElementById('openMenu'),
  closeBtn:  document.getElementById('closeMenu'),
  menu:      document.getElementById('menu'),
  menuLinks: document.querySelectorAll('.menu-links a'),

  init() {
    if (!this.openBtn || !this.closeBtn || !this.menu) return;

    this.openBtn.addEventListener('click',  () => this.openMenu());
    this.closeBtn.addEventListener('click', () => this.closeMenu());

    this.menuLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.menu.getAttribute('aria-hidden') === 'false') {
        this.closeMenu();
      }
    });
  },

  openMenu() {
    this.menu.setAttribute('aria-hidden', 'false');
    this.openBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  },

  closeMenu() {
    this.menu.setAttribute('aria-hidden', 'true');
    this.openBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
};

// ============================================
// SMOOTH SCROLL
// ============================================
const smoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 70;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      });
    });
  }
};

// ============================================
// REVEAL ON SCROLL
// ============================================
const revealOnScroll = {
  init() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(reveal => observer.observe(reveal));
  }
};

// ============================================
// HEADER SCROLL EFFECT
// ============================================
const headerScroll = {
  header: document.querySelector('.topbar'),
  init() {
    if (!this.header) return;
    window.addEventListener('scroll', () => {
      this.header.style.boxShadow = window.scrollY > 100
        ? '0 4px 12px rgba(0, 0, 0, 0.15)'
        : '0 2px 4px rgba(0, 0, 0, 0.1)';
    });
  }
};

// ============================================
// LAZY LOADING IMAGES
// ============================================
const lazyLoadImages = {
  init() {
    if ('loading' in HTMLImageElement.prototype) return;
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          imageObserver.unobserve(img);
        }
      });
    });
    images.forEach(img => imageObserver.observe(img));
  }
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  ageVerification.init();
  menuNav.init();
  smoothScroll.init();
  revealOnScroll.init();
  headerScroll.init();
  lazyLoadImages.init();
  // i18n s'initialise automatiquement via i18n.js — pas besoin de l'appeler ici

  console.log('🍷 Château Martinat website loaded successfully!');
});