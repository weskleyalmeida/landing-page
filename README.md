# Wesley Fernandes — Landing Page

Personal landing page for Wesley Fernandes, Fullstack Developer & Cloud Engineer.
All content is based on the public GitHub profile [github.com/w3sll3y](https://github.com/w3sll3y).

## Stack

Static site with no build step and no dependencies: semantic HTML, modular CSS and a few small vanilla JS files.
It runs by opening `index.html` directly, or on any static host (GitHub Pages, S3 + CloudFront, Vercel, Netlify).

```
index.html                 All sections (semantic markup + inline SVG icon sprite)
styles/
  base.css                 Design tokens, reset, typography, buttons, tags, reveal animation
  navbar.css  hero.css  about.css  certification.css  architecture.css  projects.css
  stack.css   github.css  learning.css  personal.css  contact.css  footer.css
scripts/
  navbar.js                Scrolled state, mobile menu, active section
  reveal.js                Reveal-on-scroll (IntersectionObserver)
  pointer-effects.js       Hero parallax, project spotlight, pauses hero animation off screen
  github-activity.js       Refreshes GitHub stats with live data from the public REST API
  contact.js               Copy email to clipboard
assets/
  favicon.svg  apple-touch-icon.png  og-image.png (1200×630)
```

Each section in `index.html` is delimited by a `<!-- ============ Name ============ -->` comment and
has its own stylesheet.

## Local preview

Double-click `index.html`, or serve the folder with any static server.

## Editing

- **Colors / fonts / spacing**: tokens at the top of `styles/base.css` (`--accent` is the single highlight color).
- **Tech icons**: `<symbol id="i-…">` entries in the SVG sprite at the top of `<body>` (from [devicon](https://devicon.dev)).
  Add a symbol, then reference it with `<svg><use href="#i-name"/></svg>`. Brand hover color is set per item via `style="--brand:#hex"`.
- **GitHub section**: the markup holds a static snapshot; `scripts/github-activity.js` replaces it with live data
  (cached per session). If the API is unavailable or rate-limited, the snapshot stays.

## Languages (i18n)

The page is available in Portuguese (default), English and Spanish, with no reload when switching.

- **Translations**: `translations/pt.js`, `en.js`, `es.js`, organized by section (`nav`, `hero`, `about`, `projects`, …).
  All three files must have the same keys.
- **Markup hooks** (applied by `scripts/i18n.js`):
  `data-i18n="hero.lede"` (text), `data-i18n-html="hero.title"` (trusted markup),
  `data-i18n-attr="aria-label:contact.emailAria"` (attributes, including the SEO `<meta>` tags).
- **Initial language**: the inline script in `<head>` uses the saved choice (`localStorage.language`),
  then the browser language (pt / en / es), and falls back to Portuguese.
- **Switcher**: `scripts/language-switcher.js` + `styles/language.css` (dropdown on desktop, inline in the mobile menu).
- The HTML itself is written in Portuguese, so crawlers and no-JS visitors get the default language.
- Project names, technology names and contact links are intentionally not translated.

## Themes (dark / light)

- **Tokens**: every colour lives in CSS custom properties in `styles/base.css` — `:root` is the dark theme
  (the original design), `:root[data-theme="light"]` overrides it for light mode.
- **Light-only tweaks** that tokens don't cover (softer glows, the code panel kept as a dark "editor window",
  the portrait shadow) and the toggle button styles are in `styles/theme.css`.
- **Initial theme**: the inline script in `<head>` applies it before first paint — saved choice
  (`localStorage.theme`), then `prefers-color-scheme`, then dark. No flash on load.
- **Toggle**: `scripts/theme.js` (button next to the language switcher; label translated via `theme.*` keys).

## Before deploying

Replace the relative social-preview URLs with absolute ones once the domain is known:

- `og:image` and `twitter:image` → `[SITE_URL]/assets/og-image.png`
- add `<link rel="canonical" href="[SITE_URL]/">` (placeholder comment in `<head>`)
