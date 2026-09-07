(() => {
  const TARGET_TEXT = 'Выбрать одну тему — уже достаточно.';

  const removeTarget = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      if ((node.nodeValue || '').trim() !== TARGET_TEXT) return;
      const element = node.parentElement;
      if (!element) return;
      if ((element.textContent || '').trim() !== TARGET_TEXT) return;
      element.remove();
    });
  };

  removeTarget();
  document.addEventListener('DOMContentLoaded', removeTarget, { once: true });
  [100, 400, 1000, 2000].forEach((delay) => setTimeout(removeTarget, delay));
})();
