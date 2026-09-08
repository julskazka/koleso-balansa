(() => {
  'use strict';

  const STYLE_ID = 'wheel-post-spin-decoration-clean-v34-style';

  const styleText = `
    .wheel-next-step-kicker-v32::before,
    .wheel-next-step-kicker-v32::after,
    .wheel-next-step-kicker-v32 *::before,
    .wheel-next-step-kicker-v32 *::after {
      content: none !important;
      display: none !important;
      width: 0 !important;
      height: 0 !important;
      border: 0 !important;
      background: none !important;
      background-image: none !important;
      box-shadow: none !important;
    }

    .wheel-next-step-kicker-v32,
    .wheel-next-step-kicker-v32 * {
      border-top: 0 !important;
      border-bottom: 0 !important;
      background-image: none !important;
      box-shadow: none !important;
      text-decoration: none !important;
    }
  `;

  const normalize = (value) => String(value || '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  function ensureStyle() {
    let style = document.getElementById(STYLE_ID);
    if (!style) {
      style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = styleText;
    }
    document.head.appendChild(style);
  }

  function isInteractive(element) {
    return element.matches('button,a,input,textarea,select,[role="button"],[tabindex]');
  }

  function hideEmptyDecoration(element) {
    if (!element || isInteractive(element)) return;
    if (normalize(element.textContent)) return;
    element.style.setProperty('display', 'none', 'important');
  }

  function clean() {
    ensureStyle();

    const root = document.querySelector('.wheel-next-step-redesign-v32');
    const kicker = root?.querySelector('.wheel-next-step-kicker-v32');
    if (!root || !kicker) return;

    /* Убираем пустой декоративный элемент, который остаётся перед kicker. */
    let previous = kicker.previousElementSibling;
    while (previous) {
      const nextPrevious = previous.previousElementSibling;
      hideEmptyDecoration(previous);
      previous = nextPrevious;
    }

    /* И любые пустые декоративные вложения внутри самого kicker. */
    kicker.querySelectorAll('*').forEach(hideEmptyDecoration);

    ensureStyle();
  }

  clean();
  document.addEventListener('DOMContentLoaded', clean, { once: true });

  const observer = new MutationObserver((mutations) => {
    if (mutations.some((mutation) => mutation.addedNodes.length)) {
      requestAnimationFrame(clean);
    }
  });

  if (document.body) observer.observe(document.body, { childList: true, subtree: true });
  else document.addEventListener('DOMContentLoaded', () => {
    observer.observe(document.body, { childList: true, subtree: true });
  }, { once: true });

  [250, 700, 1400, 2600].forEach((delay) => setTimeout(clean, delay));
})();
