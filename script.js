const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'whatsapp_click', {
          event_category: 'engagement',
          event_label: link.dataset.waLocation || 'unknown'
        });
        gtag('event', 'conversion', {
          'send_to': 'AW-18390353422/B-iPCNnn6OEcEI6MmsFE',
          'value': 1.0,
          'currency': 'BRL'
        });
      }
    });
  });
