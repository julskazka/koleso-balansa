(() => {
  const OLD_HEADING = 'Не нужно смотреть всё подряд';

  const removeOldHeading = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      if ((node.nodeValue || '').trim() !== OLD_HEADING) return;
      const element = node.parentElement;
      if (!element) return;
      if ((element.textContent || '').trim() !== OLD_HEADING) return;
      element.remove();
    });
  };

  removeOldHeading();
  document.addEventListener('DOMContentLoaded', removeOldHeading, { once: true });
  [100, 400, 1000, 2000].forEach((delay) => setTimeout(removeOldHeading, delay));
})();
