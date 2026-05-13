/* ===== Bách Hoa Tửu Landing Page — Script ===== */
(function () {
  'use strict';

  // Age Gate
  const gate = document.getElementById('age-gate');
  if (localStorage.getItem('bht_age_verified')) {
    gate.classList.add('hidden');
    setTimeout(() => gate.remove(), 600);
  }
  document.getElementById('age-yes')?.addEventListener('click', () => {
    localStorage.setItem('bht_age_verified', '1');
    gate.classList.add('hidden');
    setTimeout(() => gate.remove(), 600);
  });
  document.getElementById('age-no')?.addEventListener('click', () => {
    gate.querySelector('p').textContent = 'Rất tiếc, bạn chưa đủ tuổi để xem nội dung này.';
    gate.querySelector('.age-gate__buttons').style.display = 'none';
  });

  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Mobile menu
  const toggle = document.getElementById('menu-toggle');
  const links = document.querySelector('.navbar__links');
  toggle?.addEventListener('click', () => {
    links.classList.toggle('open');
  });
  links?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });

  // Count-up animation
  function animateCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = +el.dataset.count;
      const duration = 2000;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  // Intersection Observer for reveals + counters
  let countersDone = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (!countersDone && entry.target.closest('.hero__trust')) {
          countersDone = true;
          animateCounters();
        }
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right,.hero__trust').forEach(el => {
    observer.observe(el);
  });

  // Hero particles
  const canvas = document.getElementById('particles');
  if (canvas) {
    const particles = [];
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 3 + 1;
      Object.assign(p.style, {
        position: 'absolute',
        width: size + 'px',
        height: size + 'px',
        borderRadius: '50%',
        background: `rgba(212,168,67,${Math.random() * .3 + .05})`,
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
        animationDelay: Math.random() * 3 + 's',
      });
      canvas.appendChild(p);
    }
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Trigger counters on load if hero is visible
  if (window.scrollY < 100) {
    setTimeout(animateCounters, 800);
    countersDone = true;
  }
})();
