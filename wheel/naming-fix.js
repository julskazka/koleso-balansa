(() => {
  const replacements = [
    ['Крутите Колесо Ресурса', 'Крутите Колесо Баланса'],
    ['Внутри «Колеса Баланса» собраны практики, эксперты и материалы для разных состояний и жизненных запросов.', 'В «Центре Ресурсов» собраны практики, эксперты и материалы для разных состояний и жизненных запросов.'],
    ['7 дней в «Колесе Баланса» за 1 ₽', '7 дней в «Центре Ресурсов» за 1 ₽'],
    ['Внутри клуба можно продолжить эту работу и получить поддержку ещё в пяти жизненных сферах.', 'В «Центре Ресурсов» можно продолжить эту работу и получить поддержку ещё в пяти жизненных сферах.']
  ];

  const applyNaming = () => {
    document.title = 'Колесо Баланса';
    const root = document.getElementById('app-root');
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const current = node.nodeValue || '';
      let next = current;
      replacements.forEach(([from, to]) => {
        next = next.split(from).join(to);
      });
      if (next !== current) node.nodeValue = next;
    }

    root.querySelectorAll('[aria-label]').forEach((element) => {
      const current = element.getAttribute('aria-label') || '';
      const next = current.split('Колесо Ресурса').join('Колесо Баланса');
      if (next !== current) element.setAttribute('aria-label', next);
    });
  };

  applyNaming();

  const root = document.getElementById('app-root');
  if (root) {
    const observer = new MutationObserver(applyNaming);
    observer.observe(root, { childList: true, subtree: true, characterData: true });
  }
})();
