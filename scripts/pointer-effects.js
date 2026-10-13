/* Pointer-driven effects: hero parallax, project spotlight, and pausing the
   hero topology animation while it is off screen. */
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* Hero topology: pause SMIL animations when hidden or with reduced motion */
  const topology = document.querySelector('.topology');
  if (topology && typeof topology.pauseAnimations === 'function') {
    if (reduceMotion) {
      topology.pauseAnimations();
    } else if ('IntersectionObserver' in window) {
      new IntersectionObserver(([entry]) => {
        entry.isIntersecting ? topology.unpauseAnimations() : topology.pauseAnimations();
      }).observe(topology);
    }
  }

  if (reduceMotion || !finePointer) return;

  /* Hero parallax — a few pixels at most */
  const hero = document.querySelector('.hero');
  const visual = document.querySelector('[data-parallax]');
  if (hero && visual) {
    let frame = 0;
    hero.addEventListener('pointermove', (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        visual.style.setProperty('--px', `${(x * -14).toFixed(1)}px`);
        visual.style.setProperty('--py', `${(y * -10).toFixed(1)}px`);
      });
    });
    hero.addEventListener('pointerleave', () => {
      visual.style.setProperty('--px', '0px');
      visual.style.setProperty('--py', '0px');
    });
  }

  /* Project spotlight follows the pointer */
  document.querySelectorAll('.project').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    });
  });
})();
