/* i18n — applies the dictionaries in translations/*.js to the page.

   Markup hooks:
     data-i18n="section.key"                 → textContent
     data-i18n-html="section.key"            → innerHTML (only for trusted dictionary strings with markup)
     data-i18n-attr="attr:section.key; ..."  → attributes (aria-label, content, …)

   The initial language is resolved by the inline script in <head> (saved choice → browser
   language → Portuguese) and exposed as <html data-lang>. A manual choice is saved in
   localStorage under "language" and takes priority on later visits.

   API: window.i18n.t(key, vars), .lang, .languages, .setLanguage(lang), .setKey(el, key), .onChange(fn) */
(function () {
  const root = document.documentElement;
  const dictionaries = window.I18N || {};
  const STORAGE_KEY = 'language';
  const FALLBACK = 'pt';
  const HTML_LANG = { pt: 'pt-BR', en: 'en', es: 'es' };
  const listeners = [];

  let lang = HTML_LANG[root.dataset.lang] ? root.dataset.lang : FALLBACK;

  const lookup = (key, dictionary) =>
    key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), dictionary);

  const t = (key, vars) => {
    let value = lookup(key, dictionaries[lang]);
    if (value == null) value = lookup(key, dictionaries[FALLBACK]);
    if (value == null) {
      console.warn(`[i18n] Missing translation: ${key}`);
      return key;
    }
    if (vars) value = value.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? vars[name] : match));
    return value;
  };

  const updateSchema = () => {
    const schema = document.getElementById('person-schema');
    if (!schema) return;
    try {
      const data = JSON.parse(schema.textContent);
      data.jobTitle = t('meta.role');
      schema.textContent = JSON.stringify(data);
    } catch { /* leave structured data untouched */ }
  };

  const apply = (scope = document) => {
    scope.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    scope.querySelectorAll('[data-i18n-html]').forEach((el) => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    scope.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':').map((part) => part.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });
    root.lang = HTML_LANG[lang];
    root.dataset.lang = lang;
    updateSchema();
  };

  const setLanguage = (next) => {
    if (!HTML_LANG[next] || next === lang) return;
    lang = next;
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* storage unavailable */ }
    apply();
    listeners.forEach((fn) => fn(lang));
  };

  // Points an element at a different key (e.g. "Copy" → "Copied") so later language changes keep it in sync.
  const setKey = (el, key) => {
    el.dataset.i18n = key;
    el.textContent = t(key);
  };

  window.i18n = {
    t,
    setKey,
    setLanguage,
    onChange: (fn) => listeners.push(fn),
    languages: Object.keys(HTML_LANG),
    get lang() { return lang; },
  };

  apply();
  root.classList.remove('i18n-pending');
})();
