(() => {
  const TARGET_TEXT = 'Начните с того, что действительно актуально для вас сейчас.';
  const SOURCE_TEXT = 'Не нужно смотреть всё подряд';

  const findElementByExactText = (text) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if ((node.nodeValue || '').trim() !== text) continue;
      return node.parentElement;
    }
    return null;
  };

  const apply = () => {
    const target = findElementByExactText(TARGET_TEXT);
    if (!target || target.dataset.v95Heading === 'true') return;

    const source = findElementByExactText(SOURCE_TEXT);
    if (!source) return;

    const sourceStyle = getComputedStyle(source);
    const properties = [
      'font-family',
      'font-size',
      'font-weight',
      'font-style',
      'line-height',
      'letter-spacing',
      'color',
      'text-align',
      'text-transform',
      'text-shadow'
    ];

    properties.forEach((property) => {
      target.style.setProperty(property, sourceStyle.getPropertyValue(property), 'important');
    });

    target.style.setProperty('display', 'block', 'important');
    target.style.setProperty('width', '100%', 'important');
    target.style.setProperty('max-width', sourceStyle.maxWidth !== 'none' ? sourceStyle.maxWidth : '780px', 'important');
    target.style.setProperty('margin-left', 'auto', 'important');
    target.style.setProperty('margin-right', 'auto', 'important');
    target.style.setProperty('margin-top', '18px', 'important');
    target.style.setProperty('margin-bottom', '18px', 'important');

    target.setAttribute('role', 'heading');
    target.setAttribute('aria-level', '3');
    target.dataset.v95Heading = 'true';
  };

  apply();
  document.addEventListener('DOMContentLoaded', apply, { once: true });
  [100, 400, 1000, 2000].forEach((delay) => setTimeout(apply, delay));
})();
