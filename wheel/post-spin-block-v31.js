(() => {
  'use strict';

  const STYLE_ID = 'wheel-post-spin-block-v33-style';
  const ROOT_CLASS = 'wheel-next-step-redesign-v32';

  const normalize = (value) => String(value || '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const styleText = `
    .${ROOT_CLASS} {
      position: relative !important;
      margin: 16px 6px 8px !important;
      padding: 18px 16px 16px !important;
      border: 1px solid rgba(229,190,91,.38) !important;
      border-radius: 18px !important;
      background:
        radial-gradient(circle at 86% 8%, rgba(49,137,156,.11), transparent 34%),
        linear-gradient(180deg, rgba(5,48,60,.90), rgba(3,31,43,.95)) !important;
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,.035),
        0 12px 28px rgba(0,0,0,.13) !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      overflow: hidden !important;
      text-align: left !important;
    }

    .${ROOT_CLASS}::before,
    .${ROOT_CLASS}::after {
      content: none !important;
      display: none !important;
      background: none !important;
      box-shadow: none !important;
    }

    .wheel-next-step-kicker-v32 {
      margin: 0 0 7px !important;
      padding: 0 !important;
      border: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
      color: #e3bc67 !important;
      -webkit-text-fill-color: #e3bc67 !important;
      font-size: 10px !important;
      font-weight: 800 !important;
      line-height: 1.2 !important;
      letter-spacing: .12em !important;
      text-transform: uppercase !important;
    }

    .wheel-next-step-kicker-v32::before,
    .wheel-next-step-kicker-v32::after {
      content: none !important;
      display: none !important;
      background: none !important;
      box-shadow: none !important;
    }

    .wheel-next-step-title-v32 {
      margin: 0 0 13px !important;
      padding: 0 !important;
      border: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
      color: #f2d78c !important;
      -webkit-text-fill-color: #f2d78c !important;
      font-family: Georgia, 'Times New Roman', serif !important;
      font-size: 24px !important;
      font-weight: 600 !important;
      line-height: 1.12 !important;
      letter-spacing: -.015em !important;
      text-shadow: 0 0 12px rgba(243,217,143,.06) !important;
      text-align: left !important;
    }

    .wheel-next-step-copy-v32,
    .wheel-next-step-copy-v32 * {
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

    .wheel-next-step-copy-v32 {
      margin-top: 0 !important;
      margin-bottom: 12px !important;
      color: rgba(248,245,235,.90) !important;
      font-size: 15px !important;
      font-weight: 400 !important;
      line-height: 1.48 !important;
      text-align: left !important;
    }

    .wheel-next-step-copy-v32 strong,
    .wheel-next-step-copy-v32 b {
      font-weight: 600 !important;
    }

    .wheel-next-step-note-v32 {
      position: relative !important;
      margin: 15px 0 0 !important;
      padding: 12px 13px !important;
      border: 1px solid rgba(229,190,91,.30) !important;
      border-left: 2px solid #dfb649 !important;
      border-radius: 13px !important;
      background:
        linear-gradient(180deg, rgba(8,58,70,.74), rgba(5,42,54,.82)) !important;
      box-shadow: inset 0 1px 0 rgba(255,255,255,.025) !important;
      color: #f7f1df !important;
      font-size: 14.5px !important;
      font-weight: 600 !important;
      line-height: 1.42 !important;
      text-align: left !important;
    }

    .wheel-next-step-note-v32::before,
    .wheel-next-step-note-v32::after {
      content: none !important;
      display: none !important;
      background: none !important;
      box-shadow: none !important;
    }

    .wheel-next-step-note-v32,
    .wheel-next-step-note-v32 * {
      color: #f7f1df !important;
      -webkit-text-fill-color: #f7f1df !important;
    }

    @media (max-width: 520px) {
      .${ROOT_CLASS} {
        margin: 14px 5px 6px !important;
        padding: 16px 14px 14px !important;
        border-radius: 16px !important;
      }

      .wheel-next-step-kicker-v32 {
        margin-bottom: 6px !important;
        font-size: 9.5px !important;
      }

      .wheel-next-step-title-v32 {
        margin-bottom: 12px !important;
        font-size: 22px !important;
        line-height: 1.13 !important;
      }

      .wheel-next-step-copy-v32 {
        margin-bottom: 11px !important;
        font-size: 14.5px !important;
        line-height: 1.46 !important;
      }

      .wheel-next-step-note-v32 {
        margin-top: 13px !important;
        padding: 11px 12px !important;
        border-radius: 12px !important;
        font-size: 14px !important;
        line-height: 1.4 !important;
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
    root.classList.remove('wheel-next-step-redesign-v31');
    root.classList.add(ROOT_CLASS);

    const kicker = findSmallestByText(root, (text) => text === 'СЛЕДУЮЩИЙ ШАГ');
    const kickerEl = climbSameText(kicker, root);
    kickerEl?.classList.remove('wheel-next-step-kicker-v31');
    kickerEl?.classList.add('wheel-next-step-kicker-v32');

    const titleEl = climbSameText(target.heading, root);
    titleEl?.classList.remove('wheel-next-step-title-v31');
    titleEl?.classList.add('wheel-next-step-title-v32');

    const firstCopy = findSmallestByText(root, (text) =>
      text.startsWith('Сегодня колесо привело вас к теме') && text.length < 420
    );
    const firstCopyEl = climbSameText(firstCopy, root);
    firstCopyEl?.classList.remove('wheel-next-step-copy-v31');
    firstCopyEl?.classList.add('wheel-next-step-copy-v32');

    const secondCopy = findSmallestByText(root, (text) =>
      text.startsWith('В «Центре Ресурсов» собраны практики') && text.length < 260
    );
    const secondCopyEl = climbSameText(secondCopy, root);
    secondCopyEl?.classList.remove('wheel-next-step-copy-v31');
    secondCopyEl?.classList.add('wheel-next-step-copy-v32');

    const note = findSmallestByText(root, (text) =>
      text.startsWith('Посмотрите, как можно продолжить работу с собой') && text.length < 240
    );
    const noteEl = climbSameText(note, root);
    noteEl?.classList.remove('wheel-next-step-note-v31');
    noteEl?.classList.add('wheel-next-step-note-v32');

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
