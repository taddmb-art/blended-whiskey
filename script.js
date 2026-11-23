(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }
  document.querySelector('#year').textContent = new Date().getFullYear();
  const showsEl = document.getElementById('shows-list');
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const shows = (window.BLENDED_WHISKEY_SHOWS || []).filter(s => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(s.date || '')) return false;
    const d = new Date(s.date + 'T12:00:00');
    return !isNaN(d) && d >= today;
  }).sort((a,b) => a.date.localeCompare(b.date));
  if (shows.length) {
    showsEl.textContent = '';
    for (const s of shows) {
      const date = new Date(s.date + 'T12:00:00');
      const row = document.createElement('div'); row.className='show-row';
      const dt = document.createElement('div'); dt.className='show-date';
      dt.append(document.createTextNode(date.toLocaleDateString('en-US',{month:'short',day:'numeric'}).toUpperCase()));
      const small = document.createElement('small'); small.textContent=date.toLocaleDateString('en-US',{weekday:'short',year:'numeric'}).toUpperCase();dt.append(small);
      const venue = document.createElement('strong'); venue.className='show-venue';venue.textContent=s.venue || 'LIVE SHOW';
      const meta = document.createElement('div'); meta.className='show-meta';meta.textContent=[s.location,s.time].filter(Boolean).join(' · ');
      const link = document.createElement('a');link.className='show-link';link.textContent='DETAILS ↗';
      const url = typeof s.url === 'string' && /^https:\/\//.test(s.url) ? s.url : 'https://www.facebook.com/share/18dgxqQFx3/';
      link.href=url;link.target='_blank';link.rel='noopener noreferrer';
      row.append(dt,venue,meta,link);showsEl.append(row);
    }
  }
})();
