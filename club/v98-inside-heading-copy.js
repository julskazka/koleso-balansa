(() => {
  const OLD_HEADING = 'Что внутри Центра Ресурса';
  const NEW_HEADING = 'Внутри — не ещё один архив материалов';
  const SUBTITLE = 'Здесь можно начать со своего текущего вопроса и двигаться только туда, где сейчас действительно нужен ответ.';

  const findExact = (text) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if ((node.nodeValue || '').trim() === text) return node;
    }
    return null;
  };

  const apply = () => {
    const oldTextNode = findExact(OLD_HEADING);
    const existingHeadingNode = findExact(NEW_HEADING);
    const heading = (oldTextNode || existingHeadingNode)?.parentElement;
    if (!heading) return;

    if (oldTextNode) oldTextNode.nodeValue = NEW_HEADING;
    if (heading.dataset.v98InsideCopy === 'true') return;

    const subtitle = document.createElement('p');
    subtitle.textContent = SUBTITLE;
    subtitle.className = 'v98-inside-subtitle';
    subtitle.style.setProperty('max-width', '720px', 'important');
    subtitle.style.setProperty('margin', '10px auto 20px', 'important');
    subtitle.style.setProperty('padding', '0 14px', 'important');
    subtitle.style.setProperty('font-size', '15px', 'important');
    subtitle.style.setProperty('line-height', '1.5', 'important');
    subtitle.style.setProperty('font-weight', '400', 'important');
    subtitle.style.setProperty('text-align', 'center', 'important');
    subtitle.style.setProperty('color', 'rgba(244, 249, 246, 0.92)', 'important');

    heading.insertAdjacentElement('afterend', subtitle);
    heading.dataset.v98InsideCopy = 'true';
  };

  apply();
  document.addEventListener('DOMContentLoaded', apply, { once: true });
  [100, 400, 1000, 2000].forEach((delay) => setTimeout(apply, delay));
})();
