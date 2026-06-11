/* ===== Bách Hoa Tửu Landing Page — Script ===== */

// Image helpers — bound to global so inline onload/onerror can call them.
// `imgOk` marks the photo as loaded -> CSS fades it in and hides .css-fallback sibling.
// `imgFail` removes the broken <img> so the .css-fallback (or gallery placeholder) shows.
window.imgOk = function (img) { img.classList.add('is-loaded'); };
window.imgFail = function (img) {
  var fig = img.closest('.gallery__item');
  if (fig) fig.classList.add('img-missing');
  img.remove();
};

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

  // Notify Popup — social proof rotation
  const notifyPop = document.getElementById('notify-pop');
  if (notifyPop) {
    const samples = [
      ['Anh Tuấn · Q.3, TP.HCM', 'Vừa đặt Thùng 5 chai Vuông · 4 phút trước'],
      ['Chị Linh · Hà Nội', 'Vừa đặt 2 chai Tròn Premium · 12 phút trước'],
      ['Anh Đức · Đà Nẵng', 'Vừa đặt Lốc 4 chai nhựa · 18 phút trước'],
      ['Anh Hùng · Bình Tân', 'Vừa đặt Thùng 5 chai Tròn · 26 phút trước'],
      ['Chị Mai · Q.7, TP.HCM', 'Vừa đặt 1 chai Vuông Premium · 33 phút trước'],
      ['Anh Phong · Biên Hòa', 'Vừa đặt Lốc 4 chai nhựa · 41 phút trước'],
      ['Chị Hằng · Vũng Tàu', 'Vừa đặt 2 chai Tròn · 52 phút trước'],
    ];
    let idx = 0;
    const nameEl = notifyPop.querySelector('.notify-pop__name');
    const metaEl = notifyPop.querySelector('.notify-pop__meta');
    function showNext() {
      const [name, meta] = samples[idx % samples.length];
      nameEl.textContent = name;
      metaEl.textContent = meta;
      notifyPop.classList.add('visible');
      notifyPop.setAttribute('aria-hidden', 'false');
      setTimeout(() => {
        notifyPop.classList.remove('visible');
        notifyPop.setAttribute('aria-hidden', 'true');
      }, 5000);
      idx++;
    }
    notifyPop.querySelector('.notify-pop__close')?.addEventListener('click', () => {
      notifyPop.remove();
    });
    // First popup after 8s, then every 18s
    setTimeout(showNext, 8000);
    setInterval(showNext, 18000);
  }

  // Alert Bar — hide on scroll-down past 200px, show on scroll-up
  const alertBar = document.getElementById('alert-bar');
  if (alertBar) {
    let lastY = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      alertBar.classList.toggle('hidden', y > 200 && y > lastY);
      lastY = y;
    }, { passive: true });
  }

  // Countdown — fake 24h promo countdown (resets per session)
  const cdH = document.getElementById('cd-h');
  const cdM = document.getElementById('cd-m');
  const cdS = document.getElementById('cd-s');
  if (cdH && cdM && cdS) {
    let endTs = parseInt(sessionStorage.getItem('bht_countdown_end') || '0', 10);
    const now = Date.now();
    if (!endTs || endTs < now) {
      endTs = now + 24 * 60 * 60 * 1000;
      sessionStorage.setItem('bht_countdown_end', String(endTs));
    }
    function pad(n) { return String(n).padStart(2, '0'); }
    function tickCountdown() {
      const diff = Math.max(0, endTs - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      cdH.textContent = pad(h);
      cdM.textContent = pad(m);
      cdS.textContent = pad(s);
    }
    tickCountdown();
    setInterval(tickCountdown, 1000);
  }

  // Order form submission — opens Zalo chat with prefilled order details
  const orderForm = document.getElementById('order-form');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(orderForm);
      const name = (data.get('name') || '').toString().trim();
      const phone = (data.get('phone') || '').toString().trim();
      const product = (data.get('product') || '').toString().trim();
      const note = (data.get('note') || '').toString().trim();
      if (!name || !phone || !product) {
        orderForm.reportValidity?.();
        return;
      }
      const msg = `[Đặt hàng từ web]\nHọ tên: ${name}\nSĐT: ${phone}\nSản phẩm: ${product}` + (note ? `\nGhi chú: ${note}` : '');
      // Open Zalo chat in new tab with prefilled message
      const zaloUrl = `https://zalo.me/0923177091?body=${encodeURIComponent(msg)}`;
      window.open(zaloUrl, '_blank', 'noopener');
      // Show inline success state
      orderForm.classList.add('submitted');
      orderForm.innerHTML = `
        <div class="order-form__success">
          <div class="icon">✅</div>
          <h3>Đã gửi đơn của bác!</h3>
          <p>Sáu Phước đã nhận được thông tin của bác <strong>${name}</strong>.<br>Nhân viên sẽ gọi <strong>${phone}</strong> để xác nhận trong <strong>15 phút</strong>.</p>
          <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted)">Nếu cửa sổ Zalo không tự mở, vui lòng nhắn trực tiếp số 092 3177 091.</p>
        </div>`;
    });
  }

  // Product card "Đặt mua ngay" — pre-select product in form
  document.querySelectorAll('[data-product]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-product');
      const sel = document.querySelector('#order-form [name="product"]');
      if (sel && target) {
        const opt = Array.from(sel.options).find(o => o.textContent.includes(target));
        if (opt) sel.value = opt.value;
      }
    });
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
        const v = Math.floor(eased * target);
        el.textContent = v >= 1000 ? v.toLocaleString('vi-VN') : v;
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
        background: `rgba(184,134,45,${Math.random() * .25 + .15})`,
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
