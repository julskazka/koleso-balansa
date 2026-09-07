(() => {
  const PHRASE_RE = /Выбрать\s+одну\s+тему\s*[—–-]\s*уже\s+достаточно\.?/iu;

  const apply = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      const original = (node.nodeValue || '').replace(/\u00a0/g, ' ');
      if (!PHRASE_RE.test(original)) return;

      const cleaned = original.replace(PHRASE_RE, '').replace(/[ \t]{2,}/g, ' ');
      if (cleaned.trim()) {
        node.nodeValue = cleaned;
        return;
      }

      const prev = node.previousSibling;
      node.remove();
      if (prev && prev.nodeType === Node.ELEMENT_NODE && prev.tagName === 'BR') {
        prev.remove();
      }
    });
  };

  apply();
  document.addEventListener('DOMContentLoaded', apply, { once: true });
  [100, 400, 1000, 2000].forEach((delay) => setTimeout(apply, delay));
})();
