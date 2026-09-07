(() => {
  const norm = (value) => (value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
  const HEADING = 'Что можно успеть за семь дней';
  const OLD_SUBTITLE = 'Семь дней — достаточно, чтобы составить своё мнение.';
  const OLD_CARD_TITLE = 'Смотреть весь архив за семь дней не нужно';

  const icons = [
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="6.5"/><circle cx="12" cy="12" r="2.3"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><circle cx="16.5" cy="9" r="2.3"/><path d="M3.8 18c.6-3.3 2.4-5 5.2-5s4.7 1.7 5.3 5M14.1 14.2c2.9-.6 5 .7 6 3.8"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h11M13 4l3 3-3 3M19 17H8M11 14l-3 3 3 3"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.5h10.5A2.5 2.5 0 0 1 18 7v12H7.5A2.5 2.5 0 0 1 5 16.5z"/><path d="M7 7h7M7 10h6M18 8.5h1.5v10H9"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h16v11H9l-4.5 3v-3H4z"/><path d="M9.6 9.2a2.5 2.5 0 1 1 3.4 2.3c-.9.4-1 1-1 1.7M12 15.1h.01"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.2-7-9.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 7 4.5C19 15.8 12 20 12 20z"/><path d="M9.3 11.6l1.8 1.8 3.8-4"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M8.5 12.2l2.2 2.2 4.8-5M12 2.5v2M12 19.5v2"/></svg>'
  ];

  const items = [
    'понять, какая тема сейчас требует внимания в первую очередь;',
    'познакомиться с несколькими экспертами по своему вопросу;',
    'сравнить разные подходы;',
    'попробовать практические материалы;',
    'задать вопрос о своей ситуации;',
    'понять, кому из экспертов хочется доверять дальше;',
    'решить, нужен ли вам клуб после семи дней.'
  ];

  const addStyles = () => {
    if (document.getElementById('v102-seven-days-styles')) return;
    const style = document.createElement('style');
    style.id = 'v102-seven-days-styles';
    style.textContent = `
      .v102-seven-days-copy{width:100%;max-width:760px;margin:14px auto 0;text-align:center;box-sizing:border-box}
      .v102-seven-days-lead{margin:0 auto 14px;max-width:720px;color:#f6f7f8;font-size:15px;line-height:1.48;font-weight:600}
      .v102-seven-days-label{margin:18px 0 11px;color:#f2d58b;font-family:Georgia,'Times New Roman',serif;font-size:21px;line-height:1.15;font-weight:700;text-shadow:0 0 14px rgba(241,204,105,.16)}
      .v102-seven-days-list{display:grid;grid-template-columns:1fr;gap:7px;width:100%;margin:0 auto}
      .v102-seven-days-item{display:flex;align-items:center;gap:10px;min-height:44px;padding:7px 10px;border:1px solid rgba(224,184,76,.30);border-radius:12px;background:linear-gradient(180deg,rgba(10,61,70,.76),rgba(4,39,49,.88));box-shadow:inset 0 0 0 1px rgba(255,232,160,.025),0 5px 14px rgba(0,0,0,.12);box-sizing:border-box;text-align:left}
      .v102-seven-days-icon{position:relative;display:grid;place-items:center;flex:0 0 30px;width:30px;height:30px;border-radius:50%;border:1px solid rgba(238,204,112,.66);background:radial-gradient(circle at 50% 42%,rgba(241,210,119,.18),rgba(11,72,77,.45) 62%,rgba(4,38,49,.2));box-shadow:0 0 13px rgba(226,190,91,.20),inset 0 0 8px rgba(226,190,91,.10)}
      .v102-seven-days-icon:after{content:'';position:absolute;width:3px;height:3px;border-radius:50%;background:#ffe6a1;right:-2px;top:1px;box-shadow:0 0 7px #ffe6a1}
      .v102-seven-days-icon svg{width:17px;height:17px;fill:none;stroke:#f1d37c;stroke-width:1.55;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 3px rgba(241,211,124,.26))}
      .v102-seven-days-item-text{color:#f7f8f7;font-size:13px;line-height:1.34;font-weight:600}
      @media (min-width:700px){
        .v102-seven-days-copy{margin-top:17px}
        .v102-seven-days-lead{font-size:16px;margin-bottom:16px}
        .v102-seven-days-label{font-size:23px;margin-top:20px}
        .v102-seven-days-list{grid-template-columns:1fr 1fr;gap:9px}
        .v102-seven-days-item{min-height:48px;padding:8px 11px}
        .v102-seven-days-item:last-child{grid-column:1 / -1;max-width:calc(50% - 4.5px);width:100%;justify-self:center}
        .v102-seven-days-item-text{font-size:14px}
      }
      @media (max-width:420px){
        .v102-seven-days-copy{margin-top:12px}
        .v102-seven-days-lead{font-size:14px;line-height:1.43;margin-bottom:12px}
        .v102-seven-days-label{font-size:20px;margin:16px 0 9px}
        .v102-seven-days-item{min-height:42px;padding:6px 9px;border-radius:11px;gap:9px}
        .v102-seven-days-icon{flex-basis:28px;width:28px;height:28px}
        .v102-seven-days-icon svg{width:16px;height:16px}
        .v102-seven-days-item-text{font-size:12.5px;line-height:1.3}
      }
    `;
    document.head.appendChild(style);
  };

  const findElement = (root, text, exact = true) => {
    const all = root.querySelectorAll('*');
    for (const el of all) {
      const value = norm(el.textContent);
      if ((exact && value === text) || (!exact && value.includes(text))) return el;
    }
    return null;
  };

  const findSection = (heading) => {
    let node = heading;
    for (let i = 0; i < 7 && node && node !== document.body; i += 1, node = node.parentElement) {
      const text = norm(node.textContent);
      if (text.includes(HEADING) && (text.includes('Семь дней') || text.includes(OLD_CARD_TITLE))) return node;
    }
    return heading.parentElement;
  };

  const findCard = (section) => {
    const title = findElement(section, OLD_CARD_TITLE, false);
    if (!title) return null;
    let node = title;
    for (let i = 0; i < 5 && node && node !== section; i += 1, node = node.parentElement) {
      const text = norm(node.textContent);
      if (text.includes(OLD_CARD_TITLE) && (text.includes('Достаточно выбрать') || node.children.length > 1)) return node;
    }
    return title.parentElement;
  };

  const apply = () => {
    if (document.querySelector('.v102-seven-days-copy')) return;
    addStyles();

    let heading = null;
    for (const el of document.querySelectorAll('h1,h2,h3,h4,div,p')) {
      if (norm(el.textContent) === HEADING) { heading = el; break; }
    }
    if (!heading) {
      for (const el of document.querySelectorAll('h1,h2,h3,h4,div,p')) {
        if (norm(el.textContent).includes(HEADING)) { heading = el; break; }
      }
    }
    if (!heading) return;

    const section = findSection(heading);
    if (!section) return;

    const subtitle = findElement(section, OLD_SUBTITLE, true) || findElement(section, 'Семь дней — достаточно', false);
    if (subtitle) {
      subtitle.textContent = 'Семь дней нужны не для того, чтобы посмотреть всё, а чтобы разобраться хотя бы в одном актуальном для себя вопросе.';
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'v102-seven-days-copy';
    wrapper.innerHTML = `
      <p class="v102-seven-days-lead">Выберите тему, познакомьтесь с несколькими подходами, задайте свой вопрос и посмотрите, что действительно подходит именно вам.</p>
      <div class="v102-seven-days-label">За это время можно:</div>
      <div class="v102-seven-days-list">
        ${items.map((text, index) => `<div class="v102-seven-days-item"><span class="v102-seven-days-icon">${icons[index]}</span><span class="v102-seven-days-item-text">${text}</span></div>`).join('')}
      </div>`;

    const oldCard = findCard(section);
    if (oldCard && oldCard.parentElement) {
      oldCard.replaceWith(wrapper);
    } else if (subtitle && subtitle.parentElement) {
      subtitle.insertAdjacentElement('afterend', wrapper);
    } else {
      heading.insertAdjacentElement('afterend', wrapper);
    }
  };

  apply();
  document.addEventListener('DOMContentLoaded', apply, { once: true });
  [100, 350, 800, 1500, 2600].forEach((delay) => setTimeout(apply, delay));
})();
