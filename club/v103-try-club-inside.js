(() => {
  const norm = (value) => (value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();

  const addStyles = () => {
    if (document.getElementById('v103-try-club-inside-styles')) return;
    const style = document.createElement('style');
    style.id = 'v103-try-club-inside-styles';
    style.textContent = `
      .v103-try-wrap{width:100%;max-width:760px;margin:0 auto 18px;text-align:center;box-sizing:border-box}
      .v103-try-title{margin:0 0 14px;color:#f2d58b;font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1.08;font-weight:700;text-shadow:0 0 16px rgba(241,204,105,.16)}
      .v103-try-text{margin:0 auto 12px;max-width:720px;color:#f7f8f7;font-size:15px;line-height:1.48;font-weight:600}
      .v103-try-highlight{margin:15px auto 14px;max-width:700px;color:#f2d58b;font-size:16px;line-height:1.4;font-weight:800}
      .v103-try-steps{display:grid;grid-template-columns:1fr;gap:7px;width:100%;max-width:680px;margin:0 auto 16px}
      .v103-try-step{display:flex;align-items:center;gap:10px;min-height:40px;padding:7px 11px;border:1px solid rgba(224,184,76,.27);border-radius:12px;background:linear-gradient(180deg,rgba(10,61,70,.72),rgba(4,39,49,.86));box-shadow:inset 0 0 0 1px rgba(255,232,160,.025),0 4px 12px rgba(0,0,0,.10);box-sizing:border-box;text-align:left;color:#f7f8f7;font-size:13.5px;line-height:1.3;font-weight:650}
      .v103-try-icon{position:relative;display:grid;place-items:center;flex:0 0 25px;width:25px;height:25px;border-radius:50%;border:1px solid rgba(238,204,112,.58);background:radial-gradient(circle at 50% 42%,rgba(241,210,119,.16),rgba(11,72,77,.40) 64%,rgba(4,38,49,.18));box-shadow:0 0 11px rgba(226,190,91,.16),inset 0 0 7px rgba(226,190,91,.08);color:#f1d37c;font-size:12px;line-height:1}
      .v103-try-icon:after{content:'';position:absolute;width:3px;height:3px;border-radius:50%;background:#ffe6a1;right:-1px;top:1px;box-shadow:0 0 6px #ffe6a1}
      .v103-try-final{margin:16px auto 0;max-width:720px;color:#f7f8f7;font-size:15px;line-height:1.48;font-weight:800}
      @media (min-width:700px){
        .v103-try-wrap{margin-bottom:20px}
        .v103-try-title{font-size:40px;margin-bottom:16px}
        .v103-try-text{font-size:16px}
        .v103-try-highlight{font-size:18px;margin:17px auto 15px}
        .v103-try-steps{grid-template-columns:1fr 1fr;gap:9px;max-width:740px}
        .v103-try-step{min-height:43px;font-size:14px}
        .v103-try-step:last-child{grid-column:1 / -1;max-width:calc(50% - 4.5px);width:100%;justify-self:center}
        .v103-try-final{font-size:16px}
      }
      @media (max-width:420px){
        .v103-try-wrap{margin-bottom:15px}
        .v103-try-title{font-size:28px;line-height:1.07;margin-bottom:12px}
        .v103-try-text{font-size:14px;line-height:1.43;margin-bottom:10px}
        .v103-try-highlight{font-size:15px;line-height:1.35;margin:13px auto 12px}
        .v103-try-steps{gap:6px;margin-bottom:13px}
        .v103-try-step{min-height:38px;padding:6px 10px;border-radius:11px;font-size:12.5px;gap:9px}
        .v103-try-icon{flex-basis:23px;width:23px;height:23px;font-size:11px}
        .v103-try-final{font-size:14px;line-height:1.43;margin-top:13px}
      }
    `;
    document.head.appendChild(style);
  };

  const findHeading = () => {
    for (const el of document.querySelectorAll('h1,h2,h3,h4,div,p')) {
      const text = norm(el.textContent);
      if (/^Почему доступ стоит\s+51\s*₽$/u.test(text) || /^Почему доступ стоит\s+1\s*₽$/u.test(text)) return el;
    }
    for (const el of document.querySelectorAll('h1,h2,h3,h4,div,p')) {
      if (norm(el.textContent).includes('Почему доступ стоит')) return el;
    }
    return null;
  };

  const findButton = (root) => {
    for (const el of root.querySelectorAll('a,button,div,p,span')) {
      const text = norm(el.textContent);
      if (text === 'Открыть доступ на 7 дней' || text.startsWith('Открыть доступ на 7 дней')) return el;
    }
    return null;
  };

  const findSection = (heading) => {
    let node = heading;
    for (let i = 0; i < 9 && node && node !== document.body; i += 1, node = node.parentElement) {
      const text = norm(node.textContent);
      if (text.includes('Почему доступ стоит') && text.includes('Открыть доступ на 7 дней') && (text.includes('Первые 7 дней') || text.includes('999 ₽'))) return node;
    }
    return null;
  };

  const topChild = (section, element) => {
    let node = element;
    while (node && node.parentElement !== section) node = node.parentElement;
    return node && node.parentElement === section ? node : null;
  };

  const apply = () => {
    if (document.querySelector('.v103-try-wrap')) return;
    addStyles();

    const heading = findHeading();
    if (!heading) return;
    const section = findSection(heading);
    if (!section) return;

    const button = findButton(section);
    if (!button) return;
    const buttonTop = topChild(section, button);
    if (!buttonTop) return;

    const headingTop = topChild(section, heading);
    if (!headingTop) return;

    const children = Array.from(section.children);
    const startIndex = children.indexOf(headingTop);
    const endIndex = children.indexOf(buttonTop);
    if (startIndex < 0 || endIndex < 0 || endIndex <= startIndex) return;

    for (let i = startIndex; i < endIndex; i += 1) {
      const child = children[i];
      if (child && child.parentElement === section) child.remove();
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'v103-try-wrap';
    wrapper.innerHTML = `
      <h2 class="v103-try-title">7 дней, чтобы попробовать клуб изнутри</h2>
      <p class="v103-try-text">Не нужно заранее решать, подходит ли вам клуб «Центр Ресурса» и хотите ли вы оставаться.</p>
      <p class="v103-try-highlight">Сначала посмотрите всё на собственном опыте.</p>
      <div class="v103-try-steps">
        <div class="v103-try-step"><span class="v103-try-icon">✦</span><span>Выберите тему.</span></div>
        <div class="v103-try-step"><span class="v103-try-icon">✦</span><span>Познакомьтесь с экспертами.</span></div>
        <div class="v103-try-step"><span class="v103-try-icon">✦</span><span>Посмотрите несколько материалов.</span></div>
        <div class="v103-try-step"><span class="v103-try-icon">✦</span><span>Задайте свой вопрос.</span></div>
        <div class="v103-try-step"><span class="v103-try-icon">✦</span><span>Попробуйте то, что откликнулось.</span></div>
      </div>
      <p class="v103-try-final">Через семь дней вы будете решать не по описанию клуба, а по собственному опыту — нужен ли он вам дальше.</p>`;

    section.insertBefore(wrapper, buttonTop);
  };

  apply();
  document.addEventListener('DOMContentLoaded', apply, { once: true });
  [100, 350, 800, 1500, 2600].forEach((delay) => setTimeout(apply, delay));
})();
