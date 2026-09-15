(() => {
  'use strict';

  const SECTORS = ['Тело', 'Энергия', 'Дело', 'Отношения', 'Окружение', 'Красота'];
  const ANGLES = {
    'Тело': 0,
    'Энергия': -60,
    'Дело': -120,
    'Отношения': -180,
    'Окружение': -240,
    'Красота': -300
  };

  const normalize = (value) => String(value || '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  let wheelObserver = null;
  let observedWheel = null;
  let scheduled = false;
  let usedSeenAt = 0;

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

  function getElementRotation(element) {
    if (!element) return 0;
    const transform = getComputedStyle(element).transform;
    if (!transform || transform === 'none') return 0;

    const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
      const values = matrix3d[1].split(',').map(Number);
      if (values.length >= 2 && values.every((value) => Number.isFinite(value))) {
        return Math.atan2(values[1], values[0]) * 180 / Math.PI;
      }
    }

    const matrix2d = transform.match(/^matrix\((.+)\)$/);
    if (matrix2d) {
      const values = matrix2d[1].split(',').map(Number);
      if (values.length >= 2 && Number.isFinite(values[0]) && Number.isFinite(values[1])) {
        return Math.atan2(values[1], values[0]) * 180 / Math.PI;
      }
    }

    return 0;
  }

  function getBaseLabelAngle(text) {
    if (!text.dataset.sectorSyncBaseTransform) {
      text.dataset.sectorSyncBaseTransform = text.getAttribute('transform') || '';
    }
    const match = text.dataset.sectorSyncBaseTransform.match(/rotate\(\s*(-?\d+(?:\.\d+)?)/i);
    return match ? Number(match[1]) : 0;
  }

  function keepLabelsReadable(svg, targetAngle) {
    const sectorNames = new Set(SECTORS.map((sector) => sector.toUpperCase()));

    svg.querySelectorAll('text').forEach((text) => {
      if (!sectorNames.has(normalize(text.textContent).toUpperCase())) return;

      const x = Number(text.getAttribute('x'));
      const y = Number(text.getAttribute('y'));
      if (!Number.isFinite(x) || !Number.isFinite(y)) return;

      const baseAngle = getBaseLabelAngle(text);
      text.setAttribute('transform', `rotate(${baseAngle - targetAngle} ${x} ${y})`);
    });
  }

  function attachWheelObserver(wheel) {
    if (!wheel || observedWheel === wheel) return;
    wheelObserver?.disconnect();
    observedWheel = wheel;
    wheelObserver = new MutationObserver(() => scheduleSync());
    wheelObserver.observe(wheel, {
      attributes: true,
      attributeFilter: ['style', 'class']
    });
  }

  function syncWheelToSector() {
    const wheel = document.getElementById('wheel');
    const svg = wheel?.querySelector('svg');
    if (!wheel || !svg) return;

    attachWheelObserver(wheel);

    if (!hasSavedResult()) {
      usedSeenAt = 0;
      return;
    }

    if (!usedSeenAt) usedSeenAt = Date.now();

    // Не вмешиваемся в живое вращение. Если внешний скрипт по ошибке
    // оставил класс is-spinning, через 4.5 с всё равно восстанавливаем итог.
    if (wheel.classList.contains('is-spinning') && Date.now() - usedSeenAt < 4500) {
      setTimeout(scheduleSync, 180);
      return;
    }

    const sector = getSavedSector();
    if (!sector || ANGLES[sector] === undefined) return;

    const targetAngle = ANGLES[sector];
    const outerAngle = getElementRotation(wheel);
    const innerAngle = targetAngle - outerAngle;

    svg.style.setProperty('transform-origin', '50% 50%', 'important');
    svg.style.setProperty('transform-box', 'fill-box', 'important');
    svg.style.setProperty('transition', 'none', 'important');
    svg.style.setProperty('transform', `rotate(${innerAngle}deg)`, 'important');

    keepLabelsReadable(svg, targetAngle);

    wheel.dataset.syncedSector = sector;
    wheel.dataset.syncedTargetAngle = String(targetAngle);
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
  window.addEventListener('wheel:free-spin-used', scheduleSync);
  window.addEventListener('load', scheduleSync, { once: true });

  const pageObserver = new MutationObserver((mutations) => {
    if (mutations.some((mutation) =>
      mutation.type === 'childList' ||
      mutation.type === 'characterData' ||
      (mutation.type === 'attributes' && mutation.attributeName === 'class')
    )) {
      scheduleSync();
    }
  });

  pageObserver.observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ['class']
  });

  [100, 250, 500, 900, 1600, 3000, 4800, 6500, 9000].forEach((delay) => {
    setTimeout(scheduleSync, delay);
  });
})();
