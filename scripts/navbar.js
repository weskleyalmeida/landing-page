/* Navbar: scrolled state, mobile menu and active-section highlighting. */
(function () {
  const navbar = document.querySelector('[data-navbar]');
  if (!navbar) return;

  const toggle = navbar.querySelector('[data-nav-toggle]');
  const toggleLabel = toggle.querySelector('.visually-hidden');
  const links = Array.from(navbar.querySelectorAll('[data-nav-link]'));
  const desktopQuery = window.matchMedia('(min-width: 861px)');

  /* Scrolled state ------------------------------------------------------- */
  const onScroll = () => navbar.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile menu ---------------------------------------------------------- */
  const setOpen = (open) => {
    navbar.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    const labelKey = open ? 'nav.closeMenu' : 'nav.openMenu';
    if (window.i18n) window.i18n.setKey(toggleLabel, labelKey);
    else toggleLabel.textContent = open ? 'Close menu' : 'Open menu';
  };

  toggle.addEventListener('click', () => setOpen(!navbar.classList.contains('is-open')));

  links.forEach((link) => link.addEventListener('click', () => setOpen(false)));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navbar.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  desktopQuery.addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });

  /* Active section ------------------------------------------------------- */
  const sectionLinks = new Map();
  links.forEach((link) => {
    const id = link.getAttribute('href').slice(1);
    const section = document.getElementById(id);
    if (section && !link.classList.contains('btn')) sectionLinks.set(section, link);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = sectionLinks.get(entry.target);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove('is-active'));
          link.classList.add('is-active');
          link.setAttribute('aria-current', 'true');
        } else {
          link.classList.remove('is-active');
          link.removeAttribute('aria-current');
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  sectionLinks.forEach((_, section) => observer.observe(section));
})();
