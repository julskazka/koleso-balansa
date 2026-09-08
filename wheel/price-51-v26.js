(() => {
  'use strict';

  const replacePrice = (root = document.body) => {
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      const value = node.nodeValue || '';
      if (!/1\s*₽/u.test(value)) return;
      node.nodeValue = value.replace(/1\s*₽/gu, '51 ₽');
    });
  };

  replacePrice();
  document.addEventListener('DOMContentLoaded', () => replacePrice(), { once: true });

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const value = node.nodeValue || '';
          if (/1\s*₽/u.test(value)) node.nodeValue = value.replace(/1\s*₽/gu, '51 ₽');
          return;
        }
        if (node.nodeType === Node.ELEMENT_NODE) replacePrice(node);
      });

      if (mutation.type === 'characterData' && mutation.target?.nodeType === Node.TEXT_NODE) {
        const value = mutation.target.nodeValue || '';
        if (/1\s*₽/u.test(value)) mutation.target.nodeValue = value.replace(/1\s*₽/gu, '51 ₽');
      }
    }
  });

  const startObserver = () => {
    if (!document.body) return;
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true
    });
  };

  if (document.body) startObserver();
  else document.addEventListener('DOMContentLoaded', startObserver, { once: true });

  [150, 500, 1200, 2500].forEach((delay) => setTimeout(() => replacePrice(), delay));
})();
