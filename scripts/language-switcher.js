/* Language switcher in the navbar: a small dropdown on desktop, an inline
   segmented control inside the mobile menu (layout handled in CSS). */
(function () {
  const switcher = document.querySelector('[data-lang-switcher]');
  if (!switcher || !window.i18n) return;

  const toggle = switcher.querySelector('[data-lang-toggle]');
  const current = switcher.querySelector('[data-lang-current]');
  const options = Array.from(switcher.querySelectorAll('[data-lang-option]'));
  const isDropdown = () => getComputedStyle(toggle).display !== 'none';

  const sync = () => {
    current.textContent = window.i18n.lang.toUpperCase();
    options.forEach((option) => {
      const active = option.dataset.langOption === window.i18n.lang;
      option.setAttribute('aria-current', active ? 'true' : 'false');
    });
  };

  const isOpen = () => switcher.classList.contains('is-open');

  const setOpen = (open, { focus } = {}) => {
    switcher.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    if (open && focus) {
      (options.find((o) => o.getAttribute('aria-current') === 'true') || options[0]).focus();
    }
  };

  toggle.addEventListener('click', () => setOpen(!isOpen(), { focus: true }));

  toggle.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setOpen(true, { focus: true });
    }
  });

  options.forEach((option, index) => {
    option.addEventListener('click', () => {
      window.i18n.setLanguage(option.dataset.langOption);
      if (isDropdown()) {
        setOpen(false);
        toggle.focus();
      }
    });

    option.addEventListener('keydown', (event) => {
      let target;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') target = options[(index + 1) % options.length];
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') target = options[(index - 1 + options.length) % options.length];
      if (event.key === 'Home') target = options[0];
      if (event.key === 'End') target = options[options.length - 1];
      if (target) {
        event.preventDefault();
        target.focus();
      }
      if (event.key === 'Escape' && isDropdown() && isOpen()) {
        event.stopPropagation();
        setOpen(false);
        toggle.focus();
      }
    });
  });

  // Close when focus or clicks leave the switcher
  document.addEventListener('click', (event) => {
    if (isOpen() && !switcher.contains(event.target)) setOpen(false);
  });
  switcher.addEventListener('focusout', (event) => {
    if (isOpen() && !switcher.contains(event.relatedTarget)) setOpen(false);
  });

  window.i18n.onChange(sync);
  sync();
})();
