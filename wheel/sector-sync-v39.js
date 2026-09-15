(() => {
  'use strict';

  const SECTORS = ['Тело', 'Энергия', 'Дело', 'Отношения', 'Окружение', 'Красота'];
  const normalize = (value) => String(value || '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  let observer = null;
  let scheduled = false;

  function getSavedSector() {
    const cardSector = normalize(document.querySelector('.wheel-used-sector-v24')?.textContent);
    const fromCard = SECTORS.find((sector) => cardSector.includes(sector));
    if (fromCard) return fromCard;

    const resultText = normalize(document.getElementById('result')?.textContent);
    const fromResult = SECTORS.find((sector) => resultText.includes(sector));
    if (fromResult) return fromResult;

    const practiceText = normalize(document.getElementById('practiceSector')?.textContent);
    return SECTORS.includes(practiceText) ? practiceText : '';
  }

  function getSectorLabels(svg) {
    const known = new Set(SECTORS.map((sector) => sector.toUpperCase()));
    return Array.from(svg.querySelectorAll('text')).filter((element) => {
      const current = normalize(element.textContent).toUpperCase();
      const original = normalize(element.dataset.sectorSyncOriginalText).toUpperCase();
      return known.has(current) || known.has(original);
    }).slice(0, 6);
  }

  function sortLabelsClockwiseFromTop(svg, labels) {
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
    }).sort((a, b) => a.angle - b.angle).map((item) => item.label);
  }

  function syncWheelToSector() {
    const sector = getSavedSector();
    const wheel = document.getElementById('wheel');
    const svg = wheel?.querySelector('svg');
    if (!sector || !wheel || !svg || wheel.classList.contains('is-spinning')) return false;

    const labels = getSectorLabels(svg);
    if (labels.length !== 6) return false;

    labels.forEach((label) => {
      if (!label.dataset.sectorSyncOriginalText) {
        label.dataset.sectorSyncOriginalText = normalize(label.textContent);
      }
    });

    const ordered = sortLabelsClockwiseFromTop(svg, labels);
    if (ordered.length !== 6) return false;

    const startIndex = SECTORS.indexOf(sector);
    ordered.forEach((label, position) => {
      const expected = SECTORS[(startIndex + position) % SECTORS.length].toUpperCase();
      if (normalize(label.textContent).toUpperCase() !== expected) {
        label.textContent = expected;
      }
    });

    wheel.dataset.syncedSector = sector;
    wheel.dataset.sectorSyncMode = 'position-labels-v43';
    return true;
  }

  function scheduleSync() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      const done = syncWheelToSector();
      if (done && observer) {
        observer.disconnect();
        observer = null;
      }
    });
  }

  function observeUntilSynced() {
    if (observer || !document.documentElement) return;
    observer = new MutationObserver(() => scheduleSync());
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true
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
    scheduleSync();
    observeUntilSynced();
  });

  [100, 250, 500, 900, 1600, 3000, 5000, 8000].forEach((delay) => {
    setTimeout(scheduleSync, delay);
  });
})();
