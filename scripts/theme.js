/* Theme switcher (dark / light).

   The initial theme is resolved by the inline script in <head> before first paint
   (saved choice → prefers-color-scheme → dark) and set as <html data-theme>.
   A manual choice is saved in localStorage under "theme" and takes priority;
   without one, the page follows changes to the system preference. */
(function () {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) return;

  const STORAGE_KEY = 'theme';
  const META_COLORS = { dark: '#08090b', light: '#fafafb' };
  const FALLBACK_LABELS = { 'theme.toLight': 'Switch to light mode', 'theme.toDark': 'Switch to dark mode' };
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const systemLight = window.matchMedia('(prefers-color-scheme: light)');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let transitionTimer;

  const current = () => (root.dataset.theme === 'light' ? 'light' : 'dark');

  const readSaved = () => {
    try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
  };

  // The label describes the action, so it flips with the theme (and follows the language via i18n).
  const syncToggle = () => {
    const key = current() === 'dark' ? 'theme.toLight' : 'theme.toDark';
    const label = window.i18n ? window.i18n.t(key) : FALLBACK_LABELS[key];
    toggle.dataset.i18nAttr = `aria-label:${key};title:${key}`;
    toggle.setAttribute('aria-label', label);
    toggle.setAttribute('title', label);
    if (metaTheme) metaTheme.setAttribute('content', META_COLORS[current()]);
  };

  const apply = (theme, { animate = false } = {}) => {
    if (animate && !reduceMotion.matches) {
      root.classList.add('theme-transition');
      clearTimeout(transitionTimer);
      transitionTimer = setTimeout(() => root.classList.remove('theme-transition'), 400);
    }
    root.dataset.theme = theme;
    syncToggle();
  };

  toggle.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* storage unavailable */ }
    apply(next, { animate: true });
  });

  systemLight.addEventListener('change', (event) => {
    if (!readSaved()) apply(event.matches ? 'light' : 'dark', { animate: true });
  });

  syncToggle();
})();
