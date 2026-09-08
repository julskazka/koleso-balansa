(() => {
  'use strict';

  const STYLE_ID = 'wheel-post-spin-fix-v28-style';
  const ROOT_ID = 'app-root';

  const normalize = (value) => String(value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();

  const addStyles = () => {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .wheel-copy-clean-v28,
      .wheel-copy-clean-v28 * {
        background: transparent !important;
        box-shadow: none !important;
      }

      .wheel-copy-clean-v28 {
        font-weight: 400 !important;
      }

      .wheel-copy-clean-v28 strong,
      .wheel-copy-clean-v28 b {
        font-weight: 600 !important;
      }

      .wheel-price-highlight-v28 {
        background: linear-gradient(180deg, rgba(9, 60, 70, .82), rgba(5, 41, 53, .90)) !important;
        border-color: rgba(230, 194, 101, .42) !important;
        box-shadow: inset 0 1px 0 rgba(255,255,255,.035) !important;
        font-weight: 600 !important;
      }

      .wheel-price-highlight-v28,
      .wheel-price-highlight-v28 * {
        font-weight: 600 !important;
      }
    `;
    document.head.appendChild(style);
  };

  const replaceKnownPriceText = (value) => {
    let next = value || '';

    next = next.replace(
      /Открыть все направления за\s+(?:5+)?1\s*₽/gu,
      'Открыть все направления за 51 ₽'
    );

    next = next.replace(
      /Узнать, что входит в 7 дней за\s+(?:5+)?1\s*₽/gu,
      'Узнать, что входит в 7 дней за 51 ₽'
    );

    next = next.replace(
      /(Посмотрите, как можно продолжить работу с собой в течение 7 дней за)\s+(?:5+)?1\s*₽/gu,
      '$1 51 ₽'
    );

    next = next.replace(
      /(7 дней в «Центре Ресурсов» за)\s+(?:5+)?1\s*₽/gu,
      '$1 51 ₽'
    );

    return next;
  };

  const fixTextNodes = (root) => {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const current = node.nodeValue || '';
      const next = replaceKnownPriceText(current);
      if (next !== current) node.nodeValue = next;
    }
  };

  const setButtonLabel = (button, label) => {
    if (!button) return;
    const spans = Array.from(button.querySelectorAll('span'));
    const labelSpan = spans.length ? spans[spans.length - 1] : null;
    if (labelSpan) {
      labelSpan.textContent = label;
      return;
    }

    const textNodes = Array.from(button.childNodes).filter((node) => node.nodeType === Node.TEXT_NODE);
    if (textNodes.length) {
      textNodes[textNodes.length - 1].nodeValue = label;
      return;
    }

    button.textContent = label;
  };

  const fixClubButtons = () => {
    document.querySelectorAll('[data-open-wheel-club]').forEach((button) => {
      setButtonLabel(button, 'Открыть все направления за 51 ₽');
    });

    document.querySelectorAll('button,a').forEach((button) => {
      const text = normalize(button.textContent);
      if (/^Узнать, что входит в 7 дней за\s+(?:5+)?1\s*₽$/u.test(text)) {
        setButtonLabel(button, 'Узнать, что входит в 7 дней за 51 ₽');
      }
    });
  };

  const markCleanCopy = (root) => {
    if (!root) return;

    root.querySelectorAll('p,div,span').forEach((element) => {
      const text = normalize(element.textContent);

      if (
        (text.startsWith('Сегодня колесо привело вас к теме') && text.length < 360) ||
        text === 'В «Центре Ресурсов» собраны практики, эксперты и материалы для разных состояний и жизненных запросов.'
      ) {
        element.classList.add('wheel-copy-clean-v28');

        let parent = element.parentElement;
        let depth = 0;
        while (parent && depth < 2 && normalize(parent.textContent) === text) {
          parent.classList.add('wheel-copy-clean-v28');
          parent = parent.parentElement;
          depth += 1;
        }
      }

      if (
        text.startsWith('Посмотрите, как можно продолжить работу с собой в течение 7 дней за') &&
        text.length < 180
      ) {
        element.classList.add('wheel-price-highlight-v28');

        let parent = element.parentElement;
        let depth = 0;
        while (parent && depth < 2 && normalize(parent.textContent) === text) {
          parent.classList.add('wheel-price-highlight-v28');
          parent = parent.parentElement;
          depth += 1;
        }
      }
    });
  };

  const apply = () => {
    addStyles();
    const root = document.getElementById(ROOT_ID) || document.body;
    fixTextNodes(root);
    fixTextNodes(document.body);
    fixClubButtons();
    markCleanCopy(root);
  };

  apply();
  document.addEventListener('DOMContentLoaded', apply, { once: true });

  let scheduled = false;
  const scheduleApply = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      apply();
    });
  };

  const startObserver = () => {
    if (!document.body) return;
    const observer = new MutationObserver(scheduleApply);
    observer.observe(document.body, { childList: true, subtree: true });
  };

  if (document.body) startObserver();
  else document.addEventListener('DOMContentLoaded', startObserver, { once: true });

  [200, 600, 1200, 2200].forEach((delay) => setTimeout(apply, delay));
})();
