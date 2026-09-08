(() => {
  'use strict';

  const STYLE_ID = 'wheel-post-spin-fix-v29-style';
  const ROOT_ID = 'app-root';

  const normalize = (value) => String(value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();

  const addStyles = () => {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      /* Единый фон смыслового блока после практики. */
      .continuation-card {
        isolation: isolate !important;
        background:
          radial-gradient(circle at 86% 10%, rgba(73, 157, 181, .14) 0%, transparent 31%),
          radial-gradient(circle at 14% 88%, rgba(219, 181, 87, .055) 0%, transparent 24%),
          linear-gradient(180deg, rgba(5, 48, 61, .97) 0%, rgba(3, 30, 43, .985) 100%) !important;
        box-shadow:
          inset 0 1px 0 rgba(255, 247, 215, .055),
          0 18px 38px rgba(0, 0, 0, .22),
          0 0 22px rgba(217, 171, 65, .045) !important;
      }

      /* Обычные абзацы должны лежать прямо на общем фоне карточки,
         без прямоугольных тёмных подложек. */
      .continuation-card p:not(.continuation-note),
      .continuation-card p:not(.continuation-note) * {
        background: transparent !important;
        background-image: none !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        filter: none !important;
      }

      .continuation-card p:not(.continuation-note) {
        font-weight: 400 !important;
      }

      .continuation-card p:not(.continuation-note) strong,
      .continuation-card p:not(.continuation-note) b {
        font-weight: 600 !important;
      }

      .continuation-card p:not(.continuation-note)::before,
      .continuation-card p:not(.continuation-note)::after {
        content: none !important;
        display: none !important;
      }

      /* Акцентную плашку с предложением 7 дней сохраняем отдельной. */
      .continuation-card .continuation-note {
        background:
          radial-gradient(circle at 92% 12%, rgba(73, 157, 181, .10), transparent 32%),
          linear-gradient(180deg, rgba(7, 57, 69, .90), rgba(4, 40, 53, .94)) !important;
        background-image:
          radial-gradient(circle at 92% 12%, rgba(73, 157, 181, .10), transparent 32%),
          linear-gradient(180deg, rgba(7, 57, 69, .90), rgba(4, 40, 53, .94)) !important;
        border-color: rgba(230, 194, 101, .42) !important;
        box-shadow: inset 0 1px 0 rgba(255,255,255,.035) !important;
        font-weight: 600 !important;
      }

      .continuation-card .continuation-note,
      .continuation-card .continuation-note * {
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

  const apply = () => {
    addStyles();
    fixTextNodes(document.getElementById(ROOT_ID));
    fixTextNodes(document.getElementById('wheelUsedOfferV24'));
    fixClubButtons();
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
