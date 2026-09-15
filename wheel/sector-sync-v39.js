(() => {
  'use strict';

  const SECTORS = ['Тело', 'Энергия', 'Дело', 'Отношения', 'Окружение', 'Красота'];
  const normalize = (value) => String(value || '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  let observer = null;
  let scheduled = false;
  let syncedSector = '';

  function hasSavedResult() {
    const resultText = normalize(document.getElementById('result')?.textContent);
    return Boolean(
      document.documentElement.classList.contains('wheel-free-spin-used-v24') ||
      document.getElementById('wheelUsedCardV24') ||
      resultText.startsWith('Ваш сектор:')
    );
  }

  function getSavedSector() {
    if (!hasSavedResult()) return '';

    const cardSector = normalize(document.querySelector('#wheelUsedCardV24 .wheel-used-sector-v24')?.textContent);
    const fromCard = SECTORS.find((sector) => cardSector.includes(sector));
    if (fromCard) return fromCard;

    const resultText = normalize(document.getElementById('result')?.textContent);
    const fromResult = SECTORS.find((sector) => resultText.includes(sector));
    return fromResult || '';
  }

  function getSectorLabels(svg) {
    const known = new Set(SECTORS.map((sector) => sector.toUpperCase()));
    return Array.from(svg.querySelectorAll('text')).filter((element) =>
      known.has(normalize(element.textContent).toUpperCase())
    );
  }

  function sortClockwiseFromTop(svg, labels) {
    const svgRect = svg.getBoundingClientRect();
    const centerX = svgRect.left + svgRect.width / 2;
    const centerY = svgRect.top + svgRect.height / 2;

    return labels.map((label) => {
      const rect = label.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const dx = x - centerX;
      const dy = y - centerY;
      let angle = Math.atan2(dx, -dy);
      if (angle < 0) angle += Math.PI * 2;
      return { label, angle };
    }).sort((a, b) => a.angle - b.angle).map(({ label }) => label);
  }

  function syncWheelToSector() {
    const sector = getSavedSector();
    if (!sector) return false;
    if (sector === syncedSector) return true;

    const wheel = document.getElementById('wheel');
    const svg = wheel?.querySelector('svg');
    if (!wheel || !svg || wheel.classList.contains('is-spinning')) return false;

    const labels = getSectorLabels(svg);
    if (labels.length !== 6) return false;

    const ordered = sortClockwiseFromTop(svg, labels);
    if (ordered.length !== 6) return false;

    const startIndex = SECTORS.indexOf(sector);
    ordered.forEach((label, position) => {
      label.textContent = SECTORS[(startIndex + position) % SECTORS.length].toUpperCase();
    });

    syncedSector = sector;
    wheel.dataset.syncedSector = sector;
    wheel.dataset.sectorSyncMode = 'saved-result-v44';
    return true;
  }

  function scheduleSync() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      if (syncWheelToSector() && observer) {
        observer.disconnect();
        observer = null;
      }
    });
  }

  function observeUntilSynced() {
    if (observer || syncedSector || !document.documentElement) return;
    observer = new MutationObserver(scheduleSync);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['class']
    });
  }

  scheduleSync();
  observeUntilSynced();

  document.addEventListener('DOMContentLoaded', () => {
    scheduleSync();
    observeUntilSynced();
  }, { once: true });

  window.addEventListener('load', scheduleSync, { once: true });
  window.addEventListener('wheel:free-spin-used', () => {
    syncedSector = '';
    scheduleSync();
    observeUntilSynced();
  });

  [150, 400, 800, 1400, 2400, 4000, 6500].forEach((delay) => setTimeout(scheduleSync, delay));
})();
