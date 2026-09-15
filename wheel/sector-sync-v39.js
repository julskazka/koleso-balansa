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
  const normalize = (value) => String(value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();

  let wheelObserver = null;
  let observedWheel = null;
  let scheduled = false;

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
    if (!wheel) return;
    attachWheelObserver(wheel);

    if (!hasSavedResult() || wheel.classList.contains('is-spinning')) return;

    const sector = getSavedSector();
    if (!sector || ANGLES[sector] === undefined) return;

    const targetTransform = `rotate(${ANGLES[sector]}deg)`;
    const currentTransform = normalize(wheel.style.getPropertyValue('transform')).replace(/\s+/g, '');
    const normalizedTarget = targetTransform.replace(/\s+/g, '');

    if (currentTransform !== normalizedTarget || wheel.style.getPropertyPriority('transform') !== 'important') {
      wheel.style.setProperty('transition', 'none', 'important');
      wheel.style.setProperty('transform', targetTransform, 'important');
    }

    if (wheel.dataset.syncedSector !== sector) {
      wheel.dataset.syncedSector = sector;
    }
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

  [100, 250, 500, 900, 1600, 3000, 5200, 7000, 9000].forEach((delay) => {
    setTimeout(scheduleSync, delay);
  });
})();
