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

    /* Более компактный вводный блок во всех практиках. */
    .practice-content > p:first-child {
      margin-bottom: 18px !important;
      padding: 12px 13px 12px 15px !important;
      border-radius: 0 12px 12px 0 !important;
      font-size: 15px !important;
      line-height: 1.5 !important;
    }

    /* Ещё более плотные списки во всех практиках. */
    .practice-content ul,
    .practice-content ol {
      margin-top: 10px !important;
      margin-bottom: 16px !important;
      padding-top: 12px !important;
      padding-bottom: 2px !important;
    }

    .practice-content li {
      min-height: 0 !important;
      margin-bottom: 4px !important;
      line-height: 1.38 !important;
    }

    .practice-content ul li:last-child,
    .practice-content ol li:last-child {
      margin-bottom: 2px !important;
    }

    /* Меньше текст в карточках с вопросами после практики. */
    .after-list li {
      font-size: 16px !important;
      line-height: 1.45 !important;
    }

    /* Главная CTA-кнопка перехода к рефлексии. */
    .reflection-cta-highlight-v35 {
      background: linear-gradient(180deg, #f2d783 0%, #d9aa38 100%) !important;
      color: #08313a !important;
      -webkit-text-fill-color: #08313a !important;
      border: 1px solid rgba(242, 215, 131, .96) !important;
      box-shadow:
        0 10px 24px rgba(217, 170, 56, .24),
        inset 0 1px 0 rgba(255, 245, 207, .42) !important;
      font-weight: 800 !important;
    }

    .reflection-cta-highlight-v35:hover {
      transform: translateY(-1px) !important;
      box-shadow:
        0 12px 28px rgba(217, 170, 56, .30),
        inset 0 1px 0 rgba(255, 245, 207, .5) !important;
    }

    .reflection-cta-highlight-v35:active {
      transform: translateY(0) !important;
    }

    @media (min-width: 481px) {
      .practice-content > p:first-child {
        padding: 14px 15px 14px 18px !important;
        font-size: 17px !important;
        line-height: 1.55 !important;
      }

      .after-list li {
        font-size: 17px !important;
      }
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

  function highlightReflectionButton() {
    document.querySelectorAll('button,a,[role="button"]').forEach((element) => {
      if (normalize(element.textContent) === 'Перейти к рефлексии') {
        element.classList.add('reflection-cta-highlight-v35');
      }
    });
  }

  function clean() {
    ensureStyle();
    highlightReflectionButton();

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
