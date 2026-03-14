(function () {
  'use strict';

  // Carrousel
  var track   = document.getElementById('galleryTrack');
  var prevBtn = document.getElementById('galleryPrev');
  var nextBtn = document.getElementById('galleryNext');
  var slides  = Array.from(document.querySelectorAll('.gallery-carousel-slide'));
  var total   = slides.length;
  var idx     = 0;

  if (!track || !slides.length) return;

  function visibleCount() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    return 3;
  }

  function updateCarousel() {
    var vis = visibleCount();
    var max = total - vis;
    if (idx > max) idx = max;
    if (idx < 0)   idx = 0;
    track.style.transform = 'translateX(-' + (100 / vis) * idx + '%)';
    slides.forEach(function(s) { s.style.minWidth = (100 / vis) + '%'; });
  }

  prevBtn.addEventListener('click', function() { idx = Math.max(0, idx-1); updateCarousel(); });
  nextBtn.addEventListener('click', function() { var vis=visibleCount(); idx=Math.min(total-vis,idx+1); updateCarousel(); });
  window.addEventListener('resize', updateCarousel);
  updateCarousel();

  // Lightbox
  var lightbox = document.getElementById('galleryLightbox');
  var lbImg    = document.getElementById('lightboxImg');
  var closeBtn = document.getElementById('lightboxClose');
  var lbPrev   = document.getElementById('lightboxPrev');
  var lbNext   = document.getElementById('lightboxNext');
  var current  = 0;

  if (!lightbox) return;

  function openLb(i) {
    current = i;
    lbImg.src = slides[i].dataset.src;
    lbImg.alt = slides[i].querySelector('img').alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() { lightbox.classList.remove('open'); document.body.style.overflow = ''; lbImg.src = ''; }
  function lbGoPrev() { current = (current-1+total)%total; lbImg.src = slides[current].dataset.src; }
  function lbGoNext() { current = (current+1)%total; lbImg.src = slides[current].dataset.src; }

  slides.forEach(function(s,i) { s.addEventListener('click', function(){ openLb(i); }); });
  closeBtn.addEventListener('click', closeLb);
  lbPrev.addEventListener('click', lbGoPrev);
  lbNext.addEventListener('click', lbGoNext);
  lightbox.addEventListener('click', function(e){ if(e.target===lightbox) closeLb(); });
  document.addEventListener('keydown', function(e){
    if (!lightbox.classList.contains('open')) return;
    if (e.key==='Escape') closeLb();
    if (e.key==='ArrowLeft') lbGoPrev();
    if (e.key==='ArrowRight') lbGoNext();
  });
})();