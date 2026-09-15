(() => {
  'use strict';

  const SECTORS = ['Тело', 'Энергия', 'Дело', 'Отношения', 'Окружение', 'Красота'];
  const normalize = (value) => String(value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();

  function getSavedSector() {
    const resultText = normalize(document.getElementById('result')?.textContent);
    const fromResult = SECTORS.find((sector) => resultText.includes(sector));
    if (fromResult) return fromResult;

    const cardText = normalize(document.querySelector('.wheel-used-sector-v24')?.textContent);
    if (SECTORS.includes(cardText)) return cardText;

    return '';
  }

  function syncWheelToSector() {
    const wheel = document.getElementById('wheel');
    if (!wheel) return;

    const sector = getSavedSector();
    if (!sector) return;

    const index = SECTORS.indexOf(sector);
    if (index < 0) return;

    const angle = -60 * index;
    wheel.style.setProperty('transition', 'none', 'important');
    wheel.style.setProperty('transform', `rotate(${angle}deg)`, 'important');
    wheel.dataset.syncedSector = sector;
  }

  const scheduleSync = () => {
    requestAnimationFrame(syncWheelToSector);
    [80, 180, 400, 900, 1600].forEach((delay) => setTimeout(syncWheelToSector, delay));
  };

  scheduleSync();
  document.addEventListener('DOMContentLoaded', scheduleSync, { once: true });
  window.addEventListener('wheel:free-spin-used', scheduleSync);

  const observer = new MutationObserver((mutations) => {
    if (mutations.some((mutation) => mutation.type === 'childList' || mutation.type === 'characterData')) {
      scheduleSync();
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true
  });
})();
