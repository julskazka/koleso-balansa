(() => {
  'use strict';

  const STYLE_ID = 'wheel-post-spin-block-v31-style';
  const ROOT_CLASS = 'wheel-next-step-redesign-v31';

  const normalize = (value) => String(value || '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const styleText = `
    /* Новый дизайн только для блока «Вы увидели только один сектор из шести». */
    .${ROOT_CLASS} {
      position: relative !important;
      margin: 20px 10px 4px !important;
      padding: 20px 6px 8px !important;
      border: 0 !important;
      border-radius: 0 !important;
      background: transparent !important;
      background-color: transparent !important;
      background-image: none !important;
      box-shadow: none !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      overflow: visible !important;
      text-align: left !important;
    }

    .${ROOT_CLASS}::before {
      content: '' !important;
      display: block !important;
      width: 96px !important;
      height: 1px !important;
      margin: 0 0 18px !important;
      background: linear-gradient(90deg, #e6bd62 0%, rgba(230,189,98,.48) 55%, transparent 100%) !important;
      box-shadow: 0 0 12px rgba(230,189,98,.16) !important;
    }

    .wheel-next-step-kicker-v31 {
      margin: 0 0 10px !important;
      padding: 0 !important;
      border: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
      color: #e5bd64 !important;
      -webkit-text-fill-color: #e5bd64 !important;
      font-size: 12px !important;
      font-weight: 800 !important;
      line-height: 1.2 !important;
      letter-spacing: .13em !important;
      text-transform: uppercase !important;
    }

    .wheel-next-step-title-v31 {
      margin: 0 0 20px !important;
      padding: 0 !important;
      border: 0 !important;
      background: transparent !important;
      background-image: none !important;
      box-shadow: none !important;
      color: #f3d98f !important;
      -webkit-text-fill-color: #f3d98f !important;
      font-family: Georgia, 'Times New Roman', serif !important;
      font-size: clamp(28px, 7.2vw, 36px) !important;
      font-weight: 600 !important;
      line-height: 1.08 !important;
      letter-spacing: -.02em !important;
      text-shadow: 0 0 16px rgba(243,217,143,.08) !important;
      text-align: left !important;
    }

    .wheel-next-step-copy-v31,
    .wheel-next-step-copy-v31 * {
      margin-left: 0 !important;
      margin-right: 0 !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      border: 0 !important;
      border-radius: 0 !important;
      background: transparent !important;
      background-color: transparent !important;
      background-image: none !important;
      box-shadow: none !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      filter: none !important;
    }

    .wheel-next-step-copy-v31 {
      margin-top: 0 !important;
      margin-bottom: 17px !important;
      color: rgba(248,245,235,.92) !important;
      font-size: 17px !important;
      font-weight: 400 !important;
      line-height: 1.56 !important;
      text-align: left !important;
    }

    .wheel-next-step-copy-v31 strong,
    .wheel-next-step-copy-v31 b {
      font-weight: 600 !important;
    }

    .wheel-next-step-note-v31 {
      position: relative !important;
      margin: 22px 0 0 !important;
      padding: 16px 17px 16px 42px !important;
      border: 1px solid rgba(229,190,91,.38) !important;
      border-left: 3px solid #e2b94f !important;
      border-radius: 16px !important;
      background:
        radial-gradient(circle at 92% 10%, rgba(40,132,151,.13), transparent 34%),
        linear-gradient(180deg, rgba(7,53,66,.92), rgba(4,37,50,.96)) !important;
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,.035),
        0 10px 24px rgba(0,0,0,.14) !important;
      color: #f7f1df !important;
      font-size: 16px !important;
      font-weight: 600 !important;
      line-height: 1.5 !important;
      text-align: left !important;
    }

    .wheel-next-step-note-v31::before {
      content: '✦' !important;
      position: absolute !important;
      left: 16px !important;
      top: 17px !important;
      color: #e5bd64 !important;
      font-size: 14px !important;
      line-height: 1 !important;
      text-shadow: 0 0 10px rgba(229,189,100,.28) !important;
    }

    .wheel-next-step-note-v31,
    .wheel-next-step-note-v31 * {
      color: #f7f1df !important;
      -webkit-text-fill-color: #f7f1df !important;
    }

    @media (max-width: 520px) {
      .${ROOT_CLASS} {
        margin: 16px 8px 2px !important;
        padding: 18px 4px 6px !important;
      }

      .${ROOT_CLASS}::before {
        width: 82px !important;
        margin-bottom: 16px !important;
      }

      .wheel-next-step-title-v31 {
        margin-bottom: 17px !important;
        font-size: clamp(27px, 8vw, 33px) !important;
      }

      .wheel-next-step-copy-v31 {
        margin-bottom: 15px !important;
        font-size: 16px !important;
        line-height: 1.52 !important;
      }

      .wheel-next-step-note-v31 {
        margin-top: 19px !important;
        padding: 15px 15px 15px 39px !important;
        border-radius: 15px !important;
        font-size: 15.5px !important;
      }

      .wheel-next-step-note-v31::before {
        left: 14px !important;
        top: 16px !important;
      }
    }
  `;

  function ensureStylesLast() {
    let style = document.getElementById(STYLE_ID);
    if (!style) {
      style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = styleText;
    }
    document.head.appendChild(style);
  }

  function findSmallestByText(root, predicate) {
    if (!root) return null;
    const candidates = Array.from(root.querySelectorAll('h1,h2,h3,h4,p,div,section,span,strong'))
      .filter((element) => predicate(normalize(element.textContent)));
    if (!candidates.length) return null;
    return candidates.sort((a, b) => a.querySelectorAll('*').length - b.querySelectorAll('*').length)[0];
  }

  function climbSameText(element, stopAt) {
    if (!element) return null;
    const text = normalize(element.textContent);
    let current = element;
    while (
      current.parentElement &&
      current.parentElement !== stopAt &&
      normalize(current.parentElement.textContent) === text
    ) {
      current = current.parentElement;
    }
    return current;
  }

  function findTargetBlock() {
    const heading = findSmallestByText(document, (text) =>
      text === 'Вы увидели только один сектор из шести' ||
      text.includes('Вы увидели только один сектор из шести')
    );
    if (!heading) return null;

    let current = heading.parentElement;
    while (current && current !== document.body) {
      const text = normalize(current.textContent);
      if (
        text.includes('Сегодня колесо привело вас к теме') &&
        text.includes('В «Центре Ресурсов» собраны практики') &&
        text.includes('Посмотрите, как можно продолжить работу с собой') &&
        text.length < 1400
      ) {
        return { root: current, heading };
      }
      current = current.parentElement;
    }

    return { root: heading.parentElement, heading };
  }

  function redesign() {
    ensureStylesLast();

    const target = findTargetBlock();
    if (!target?.root) return;

    const root = target.root;
    root.classList.add(ROOT_CLASS);

    const kicker = findSmallestByText(root, (text) => text === 'СЛЕДУЮЩИЙ ШАГ');
    climbSameText(kicker, root)?.classList.add('wheel-next-step-kicker-v31');

    climbSameText(target.heading, root)?.classList.add('wheel-next-step-title-v31');

    const firstCopy = findSmallestByText(root, (text) =>
      text.startsWith('Сегодня колесо привело вас к теме') && text.length < 420
    );
    climbSameText(firstCopy, root)?.classList.add('wheel-next-step-copy-v31');

    const secondCopy = findSmallestByText(root, (text) =>
      text.startsWith('В «Центре Ресурсов» собраны практики') && text.length < 260
    );
    climbSameText(secondCopy, root)?.classList.add('wheel-next-step-copy-v31');

    const note = findSmallestByText(root, (text) =>
      text.startsWith('Посмотрите, как можно продолжить работу с собой') && text.length < 240
    );
    climbSameText(note, root)?.classList.add('wheel-next-step-note-v31');

    ensureStylesLast();
  }

  redesign();
  document.addEventListener('DOMContentLoaded', redesign, { once: true });

  let scheduled = false;
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      redesign();
    });
  };

  const startObserver = () => {
    if (!document.body) return;
    const observer = new MutationObserver((mutations) => {
      if (mutations.some((mutation) => mutation.addedNodes.length)) schedule();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  };

  if (document.body) startObserver();
  else document.addEventListener('DOMContentLoaded', startObserver, { once: true });

  [250, 700, 1400, 2600, 4200].forEach((delay) => setTimeout(redesign, delay));
})();
