(() => {
  'use strict';

  const REMOVE_TEXTS = [
    'Открыть все направления за 51 ₽',
    'Первая практика — наш подарок для вас. Остальные направления доступны в клубе.'
  ];

  const normalize = (value) => String(value || '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  function removePriceBlock() {
    const elements = Array.from(document.querySelectorAll('button, a, p, div, span, section'));

    elements.forEach((element) => {
      const text = normalize(element.textContent);
      if (!text) return;

      if (REMOVE_TEXTS.some((target) => text === target)) {
        const removable = element.closest('.price-51-card, .price-51-wrap, .unlock-card, .unlock-block') || element;
        removable.remove();
      }
    });
  }

  removePriceBlock();
  document.addEventListener('DOMContentLoaded', removePriceBlock, { once: true });

  const observer = new MutationObserver(removePriceBlock);
  observer.observe(document.documentElement, { childList: true, subtree: true });

  [100, 300, 700, 1200, 2200].forEach((delay) => setTimeout(removePriceBlock, delay));
})();
