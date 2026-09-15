(() => {
  'use strict';

  const TITLE = 'Одна практика уже у вас';
  let observer = null;

  function applyTitleFix() {
    const card = document.getElementById('wheelUsedCardV24');
    const title = card?.querySelector('h3');
    if (!title) return false;

    if (title.textContent.trim() !== TITLE || title.querySelector('br')) {
      title.textContent = TITLE;
    }

    title.style.setProperty('font-size', 'clamp(16px, 2.2vw, 27px)', 'important');
    title.style.setProperty('line-height', '1.05', 'important');
    title.style.setProperty('letter-spacing', '-0.035em', 'important');
    title.style.setProperty('white-space', 'nowrap', 'important');
    title.style.setProperty('max-width', 'none', 'important');
    title.style.setProperty('width', '100%', 'important');
    title.style.setProperty('text-align', 'center', 'important');
    return true;
  }

  function tryApply() {
    if (!applyTitleFix()) return;
    observer?.disconnect();
    observer = null;
  }

  tryApply();
  document.addEventListener('DOMContentLoaded', tryApply, { once: true });

  if (!applyTitleFix()) {
    observer = new MutationObserver(() => tryApply());
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  [100, 300, 700, 1500, 3000, 5000, 8000].forEach((delay) => setTimeout(tryApply, delay));
})();
