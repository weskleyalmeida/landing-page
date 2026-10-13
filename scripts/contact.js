/* Copy-to-clipboard for the contact email. */
(function () {
  const button = document.querySelector('[data-copy]');
  if (!button || !navigator.clipboard) {
    if (button) button.hidden = true;
    return;
  }

  const label = button.querySelector('[data-copy-label]');
  const setLabel = (key, fallback) => {
    if (window.i18n) window.i18n.setKey(label, key);
    else label.textContent = fallback;
  };
  let timer;

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      setLabel('contact.copied', 'Copied');
      button.classList.add('is-copied');
    } catch {
      setLabel('contact.copyFailed', 'Copy failed');
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      setLabel('contact.copy', 'Copy email');
      button.classList.remove('is-copied');
    }, 2000);
  });
})();
