/* GitHub activity: refreshes the static snapshot in the HTML with live data
   from the public GitHub REST API. If the request fails (offline, rate limit),
   the snapshot stays as is. Responses are cached per session. */
(function () {
  const root = document.querySelector('[data-github]');
  if (!root || !window.fetch) return;

  const user = root.dataset.githubUser;
  const CACHE_KEY = `gh-activity:${user}`;
  const CACHE_TTL = 30 * 60 * 1000;
  const MAX_LANGUAGES = 6;
  const RECENT_COUNT = 5;

  // Muted palette: accent for the leading language, greys for the rest.
  const LANGUAGE_COLORS = {
    TypeScript: 'var(--accent)',
    JavaScript: '#9aa3b2',
    HTML: '#6b7280',
    Go: '#00add8',
  };
  const FALLBACK_COLORS = ['#4b5160', '#3a3f4b', '#30343d', '#2a2e37'];
  const OTHER_COLOR = '#2a2e37';

  const $ = (selector) => root.querySelector(selector);

  const readCache = () => {
    try {
      const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY));
      if (cached && Date.now() - cached.time < CACHE_TTL) return cached.data;
    } catch { /* storage unavailable */ }
    return null;
  };

  const writeCache = (data) => {
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({ time: Date.now(), data }));
    } catch { /* storage unavailable */ }
  };

  const getJSON = async (url, signal) => {
    const response = await fetch(url, { signal, headers: { Accept: 'application/vnd.github+json' } });
    if (!response.ok) throw new Error(`GitHub API ${response.status}`);
    return response.json();
  };

  const fetchData = async () => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
      const [profile, repos] = await Promise.all([
        getJSON(`https://api.github.com/users/${user}`, controller.signal),
        getJSON(`https://api.github.com/users/${user}/repos?per_page=100&sort=pushed`, controller.signal),
      ]);
      return {
        publicRepos: profile.public_repos,
        createdAt: profile.created_at,
        repos: repos
          .filter((repo) => !repo.fork)
          .map(({ name, html_url, language, pushed_at }) => ({ name, html_url, language, pushed_at })),
      };
    } finally {
      clearTimeout(timeout);
    }
  };

  /* Rendering ------------------------------------------------------------ */
  const t = (key, vars, fallback) => (window.i18n ? window.i18n.t(key, vars) : fallback);

  const formatDate = (iso) => {
    const date = new Date(iso);
    const days = Math.floor((Date.now() - date.getTime()) / 86400000);
    if (days < 1) return t('github.today', null, 'today');
    if (days < 30) return t('github.daysAgo', { n: days }, `${days}d ago`);
    return date.toLocaleDateString(t('github.dateLocale', null, 'en-US'), { month: 'short', year: 'numeric', timeZone: 'UTC' });
  };

  // Re-formats every date in the "recently active" list for the current language.
  const localizeDates = () => {
    $('[data-github-recent]').querySelectorAll('time').forEach((time) => {
      time.textContent = formatDate(time.dateTime);
    });
  };

  const countLanguages = (repos) => {
    const counts = new Map();
    repos.forEach(({ language }) => {
      if (language) counts.set(language, (counts.get(language) || 0) + 1);
    });
    return Array.from(counts, ([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
  };

  const renderLanguages = (languages) => {
    const total = languages.reduce((sum, lang) => sum + lang.count, 0);
    if (!total) return;

    const top = languages.slice(0, MAX_LANGUAGES);
    const otherCount = languages.slice(MAX_LANGUAGES).reduce((sum, lang) => sum + lang.count, 0);
    let fallbackIndex = 0;
    const segments = top.map((lang) => ({
      ...lang,
      color: LANGUAGE_COLORS[lang.name] || FALLBACK_COLORS[fallbackIndex++ % FALLBACK_COLORS.length],
    }));
    if (otherCount) segments.push({ name: t('github.other', null, 'Other'), count: otherCount, color: OTHER_COLOR });

    const bar = $('[data-github-langbar]');
    const legend = $('[data-github-legend]');
    bar.replaceChildren(
      ...segments.map((segment) => {
        const span = document.createElement('span');
        span.style.setProperty('--w', `${((segment.count / total) * 100).toFixed(1)}%`);
        span.style.setProperty('--c', segment.color);
        return span;
      })
    );
    // Live label replaces the translated snapshot label
    bar.removeAttribute('data-i18n-attr');
    bar.setAttribute(
      'aria-label',
      segments.map((s) => t('github.langItem', s, `${s.name} ${s.count} repositories`)).join(', ')
    );

    legend.replaceChildren(
      ...segments.map((segment) => {
        const li = document.createElement('li');
        const count = document.createElement('span');
        li.style.setProperty('--c', segment.color);
        li.textContent = segment.name;
        count.textContent = segment.count;
        li.append(count);
        return li;
      })
    );
  };

  const renderRecent = (repos) => {
    const list = $('[data-github-recent]');
    const recent = repos
      .filter((repo) => repo.name.toLowerCase() !== user.toLowerCase())
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
      .slice(0, RECENT_COUNT);
    if (!recent.length) return;

    list.replaceChildren(
      ...recent.map((repo) => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        const name = document.createElement('span');
        const lang = document.createElement('span');
        const time = document.createElement('time');

        link.href = repo.html_url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        name.className = 'activity__name';
        name.textContent = repo.name;
        lang.className = 'activity__lang';
        lang.textContent = repo.language || '';
        time.dateTime = repo.pushed_at;
        time.textContent = formatDate(repo.pushed_at);

        link.append(name, lang, time);
        li.append(link);
        return li;
      })
    );
  };

  const render = (data) => {
    const languages = countLanguages(data.repos);

    $('[data-github-repos]').textContent = data.publicRepos;
    $('[data-github-since]').textContent = new Date(data.createdAt).getFullYear();
    $('[data-github-lang-count]').textContent = languages.length;
    if (languages[0]) $('[data-github-primary]').textContent = languages[0].name;

    renderLanguages(languages);
    renderRecent(data.repos);

    const status = $('[data-github-status]');
    if (window.i18n) window.i18n.setKey(status, 'github.live');
    else status.textContent = 'Live from the GitHub API';
    $('[data-github-status-dot]').classList.replace('status-dot--muted', 'status-dot--live');
  };

  /* Language changes: re-render live data, or just re-format the snapshot dates */
  let liveData = null;
  localizeDates();
  if (window.i18n) {
    window.i18n.onChange(() => (liveData ? render(liveData) : localizeDates()));
  }

  /* Load lazily, when the section approaches the viewport ---------------- */
  const load = async () => {
    const cached = readCache();
    if (cached) {
      liveData = cached;
      return render(cached);
    }
    try {
      const data = await fetchData();
      writeCache(data);
      liveData = data;
      render(data);
    } catch {
      // Keep the static snapshot already in the markup.
    }
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        load();
      },
      { rootMargin: '600px 0px' }
    );
    observer.observe(root);
  } else {
    load();
  }
})();
