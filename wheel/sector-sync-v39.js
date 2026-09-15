(() => {
  'use strict';

  const SECTORS = ['Тело', 'Энергия', 'Дело', 'Отношения', 'Окружение', 'Красота'];
  const normalize = (value) => String(value || '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  let observer = null;
  let appliedSector = '';

  function getSavedSector() {
    const cardText = normalize(
      document.querySelector('#wheelUsedCardV24 .wheel-used-sector-v24')?.textContent
    );
    const fromCard = SECTORS.find((sector) => cardText.includes(sector));
    if (fromCard) return fromCard;

    const resultText = normalize(document.getElementById('result')?.textContent);
    if (!resultText.startsWith('Ваш сектор:')) return '';
    return SECTORS.find((sector) => resultText.includes(sector)) || '';
  }

  function applySavedSector() {
    const sector = getSavedSector();
    if (!sector) return false;

    const wheel = document.getElementById('wheel');
    if (!wheel || wheel.classList.contains('is-spinning')) return false;

    const index = SECTORS.indexOf(sector);
    if (index < 0) return false;

    const angle = -60 * index;
    wheel.style.setProperty('transition', 'none', 'important');
    wheel.style.setProperty('transform', `rotate(${angle}deg)`, 'important');
    wheel.dataset.syncedSector = sector;
    wheel.dataset.sectorSyncMode = 'saved-record-angle-v45';
    appliedSector = sector;
    return true;
  }

  function stopObserver() {
    observer?.disconnect();
    observer = null;
  }

  function trySync() {
    if (applySavedSector()) {
      stopObserver();
      return true;
    }
    return false;
  }

  function observeUntilSavedStateExists() {
    if (observer || appliedSector) return;
    observer = new MutationObserver(() => {
      requestAnimationFrame(trySync);
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  trySync();
  observeUntilSavedStateExists();

  document.addEventListener('DOMContentLoaded', () => {
    trySync();
    observeUntilSavedStateExists();
  }, { once: true });

  window.addEventListener('wheel:free-spin-used', (event) => {
    appliedSector = '';
    const sector = normalize(event?.detail?.sector);
    if (SECTORS.includes(sector)) {
      requestAnimationFrame(() => {
        setTimeout(trySync, 80);
      });
    } else {
      observeUntilSavedStateExists();
    }
  });

  [250, 700, 1500, 3000, 5000].forEach((delay) => {
    setTimeout(() => {
      if (!appliedSector) trySync();
    }, delay);
  });
})();
