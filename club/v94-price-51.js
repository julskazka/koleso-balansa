(() => {
  const replacePrice = (value) => {
    if (!value) return value;
    return value.replace(/(^|[^0-9])1\s*₽/g, (match, prefix) => `${prefix}51 ₽`);
  };

  const replaceInRoot = (root = document.body) => {
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach((node) => {
      const next = replacePrice(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
    });

    root.querySelectorAll?.('[title], [aria-label]').forEach((el) => {
      ['title', 'aria-label'].forEach((attr) => {
        if (!el.hasAttribute(attr)) return;
        const current = el.getAttribute(attr);
        const next = replacePrice(current);
        if (next !== current) el.setAttribute(attr, next);
      });
    });

    document.title = replacePrice(document.title);
  };

  replaceInRoot();
  document.addEventListener('DOMContentLoaded', () => replaceInRoot(), { once: true });
  [100, 500, 1500].forEach((delay) => setTimeout(() => replaceInRoot(), delay));
})();
