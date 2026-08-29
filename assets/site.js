(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // theme toggle: system -> light -> dark -> system
  // (the pre-paint state is set by a small inline script in each page's <head>)
  var tbtn = document.querySelector('.theme-toggle');
  if (tbtn) {
    tbtn.addEventListener('click', function () {
      var cur = root.getAttribute('data-theme');
      var next = cur === 'light' ? 'dark' : (cur === 'dark' ? '' : 'light');
      if (next) { root.setAttribute('data-theme', next); } else { root.removeAttribute('data-theme'); }
      try { localStorage.setItem('cr-theme', next); } catch (e) {}
    });
  }

  // mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // placeholder links (LinkedIn, etc. with no destination yet)
  document.querySelectorAll('[data-placeholder-link]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); });
  });

  // reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }
})();
