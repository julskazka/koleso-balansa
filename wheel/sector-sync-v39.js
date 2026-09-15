(() => {
  'use strict';

  const SECTORS = ['Тело', 'Энергия', 'Дело', 'Отношения', 'Окружение', 'Красота'];
  const KNOWN = new Set(SECTORS.map((sector) => sector.toUpperCase()));
  const TAU = Math.PI * 2;

  const normalize = (value) => String(value || '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

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

  function getSectorLabels(svg) {
    return Array.from(svg.querySelectorAll('text')).filter((label) => {
      const text = normalize(label.textContent).toUpperCase();
      return KNOWN.has(text);
    });
  }

  function pointAngle(cx, cy, x, y) {
    let angle = Math.atan2(y - cy, x - cx);
    if (angle < 0) angle += TAU;
    return angle;
  }

  function angularDistance(a, b) {
    const diff = Math.abs(a - b) % TAU;
    return Math.min(diff, TAU - diff);
  }

  function applySavedSector() {
    const sector = getSavedSector();
    if (!sector || sector === appliedSector) return Boolean(sector);

    const wheel = document.getElementById('wheel');
    const svg = wheel?.querySelector('svg');
    const pointer = document.querySelector('.interactive-wheel .pointer, .wheel-stage .pointer, .pointer');
    if (!wheel || !svg || !pointer || wheel.classList.contains('is-spinning')) return false;

    const labels = getSectorLabels(svg);
    if (labels.length !== 6) return false;

    const svgRect = svg.getBoundingClientRect();
    const pointerRect = pointer.getBoundingClientRect();
    if (!svgRect.width || !svgRect.height || !pointerRect.width || !pointerRect.height) return false;

    const cx = svgRect.left + svgRect.width / 2;
    const cy = svgRect.top + svgRect.height / 2;
    const pointerAngle = pointAngle(
      cx,
      cy,
      pointerRect.left + pointerRect.width / 2,
      pointerRect.top + pointerRect.height / 2
    );

    const measured = labels.map((label) => {
      const rect = label.getBoundingClientRect();
      return {
        label,
        angle: pointAngle(cx, cy, rect.left + rect.width / 2, rect.top + rect.height / 2)
      };
    });

    const anchor = measured.reduce((best, item) => {
      if (!best) return item;
      return angularDistance(item.angle, pointerAngle) < angularDistance(best.angle, pointerAngle)
        ? item
        : best;
    }, null);
    if (!anchor) return false;

    const clockwiseFromPointer = measured
      .slice()
      .sort((a, b) => {
        const da = (a.angle - anchor.angle + TAU) % TAU;
        const db = (b.angle - anchor.angle + TAU) % TAU;
        return da - db;
      });

    const startIndex = SECTORS.indexOf(sector);
    clockwiseFromPointer.forEach(({ label }, position) => {
      label.textContent = SECTORS[(startIndex + position) % SECTORS.length].toUpperCase();
    });

    wheel.dataset.syncedSector = sector;
    wheel.dataset.sectorSyncMode = 'pointer-label-v46';
    appliedSector = sector;
    return true;
  }

  function trySync() {
    requestAnimationFrame(() => applySavedSector());
  }

  trySync();
  document.addEventListener('DOMContentLoaded', trySync, { once: true });
  window.addEventListener('load', trySync, { once: true });

  window.addEventListener('wheel:free-spin-used', () => {
    appliedSector = '';
    [120, 350, 700].forEach((delay) => setTimeout(trySync, delay));
  });

  [200, 500, 900, 1500, 2500, 4000, 6000, 8000].forEach((delay) => {
    setTimeout(() => {
      if (!appliedSector) trySync();
    }, delay);
  });
})();
