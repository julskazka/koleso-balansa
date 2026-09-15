(() => {
  'use strict';

  const SECTORS = ['Тело', 'Энергия', 'Дело', 'Отношения', 'Окружение', 'Красота'];
  const normalize = (value) => String(value || '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  let scheduled = false;
  let lockedSector = '';

  function getSavedSector() {
    const resultText = normalize(document.getElementById('result')?.textContent);
    const fromResult = SECTORS.find((sector) => resultText.includes(sector));
    if (fromResult) return fromResult;

    const cardText = normalize(document.querySelector('.wheel-used-sector-v24')?.textContent);
    const fromCard = SECTORS.find((sector) => cardText.includes(sector));
    if (fromCard) return fromCard;

    const practiceText = normalize(document.getElementById('practiceSector')?.textContent);
    if (SECTORS.includes(practiceText)) return practiceText;

    return '';
  }

  function hasSavedResult() {
    return Boolean(
      document.documentElement.classList.contains('wheel-free-spin-used-v24') ||
      document.getElementById('wheelUsedCardV24') ||
      normalize(document.getElementById('result')?.textContent).startsWith('Ваш сектор:')
    );
  }

  function getSectorLabels(svg) {
    const known = new Set(SECTORS.map((sector) => sector.toUpperCase()));
    return Array.from(svg.querySelectorAll('text')).filter((text) => {
      const current = normalize(text.textContent).toUpperCase();
      const original = normalize(text.dataset.sectorSyncOriginalText).toUpperCase();
      return known.has(current) || known.has(original);
    }).slice(0, 6);
  }

  function rememberOriginalLabels(labels) {
    labels.forEach((label) => {
      if (!label.dataset.sectorSyncOriginalText) {
        label.dataset.sectorSyncOriginalText = normalize(label.textContent);
      }
    });
  }

  function arrangeLabels(labels, sector) {
    const startIndex = SECTORS.indexOf(sector);
    if (startIndex < 0 || labels.length !== 6) return;

    labels.forEach((label, position) => {
      const nextSector = SECTORS[(startIndex + position) % SECTORS.length];
      label.textContent = nextSector.toUpperCase();
    });
  }

  function lockWheelVisual(wheel) {
    wheel.style.setProperty('transition', 'none', 'important');
    wheel.style.setProperty('transform', 'rotate(0deg)', 'important');
  }

  function syncWheelToSector() {
    const wheel = document.getElementById('wheel');
    const svg = wheel?.querySelector('svg');
    if (!wheel || !svg || !hasSavedResult()) return;
    if (wheel.classList.contains('is-spinning')) return;

    const sector = getSavedSector();
    if (!sector) return;

    const labels = getSectorLabels(svg);
    if (labels.length !== 6) return;

    rememberOriginalLabels(labels);
    lockWheelVisual(wheel);
    arrangeLabels(labels, sector);

    lockedSector = sector;
    wheel.dataset.syncedSector = sector;
    wheel.dataset.sectorSyncMode = 'labels';
  }

  function scheduleSync() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      syncWheelToSector();
    });
  }

  scheduleSync();
  document.addEventListener('DOMContentLoaded', scheduleSync, { once: true });
  window.addEventListener('load', scheduleSync, { once: true });
  window.addEventListener('wheel:free-spin-used', scheduleSync);

  const observer = new MutationObserver((mutations) => {
    if (mutations.some((mutation) =>
      mutation.type === 'childList' ||
      mutation.type === 'characterData' ||
      mutation.type === 'attributes'
    )) {
      scheduleSync();
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ['class', 'style']
  });

  [100, 250, 500, 900, 1600, 3000, 5000, 8000].forEach((delay) => {
    setTimeout(scheduleSync, delay);
  });
})();
