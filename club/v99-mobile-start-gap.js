(() => {
  const TARGET_TEXT = 'Начните с того, что действительно актуально для вас сейчас.';

  const apply = () => {
    if (!window.matchMedia('(max-width: 520px)').matches) return;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if ((node.nodeValue || '').trim() !== TARGET_TEXT) continue;
      const element = node.parentElement;
      if (!element) return;
      element.style.setProperty('margin-top', '-10px', 'important');
      return;
    }
  };

  apply();
  document.addEventListener('DOMContentLoaded', apply, { once: true });
  window.addEventListener('resize', apply);
  [100, 400, 1000, 2000].forEach((delay) => setTimeout(apply, delay));
})();
