(() => {
  'use strict';

  const STORAGE_PREFIX = 'wheel_free_spin_v24';
  const BROWSER_KEY = `${STORAGE_PREFIX}:browser`;
  const SECTORS = ['Тело', 'Энергия', 'Дело', 'Отношения', 'Окружение', 'Красота'];
  let suppressClickUntil = 0;

  const normalize = (value) => String(value ?? '').trim();

  function getIdentityId() {
    const notibot = window.NotibotIntegration;
    const identity = notibot?.getIdentity?.() || {};
    const user = notibot?.getUser?.() || {};
    return normalize(
      identity.notibotUserId ||
      identity.telegramId ||
      identity.maxId ||
      user.notibotUserId ||
      user.id ||
      user.userId ||
      user.user_id
    );
  }

  function makeAccountKey(identityId) {
    return `${STORAGE_PREFIX}:account:${encodeURIComponent(identityId)}`;
  }

  function safeParse(value) {
    try {
      const parsed = JSON.parse(value);
      return parsed?.used && SECTORS.includes(parsed.sector) ? parsed : null;
    } catch (_) {
      return null;
    }
  }

  function findRecord() {
    const identityId = getIdentityId();
    const preferredKey = identityId ? makeAccountKey(identityId) : BROWSER_KEY;
    const preferred = safeParse(localStorage.getItem(preferredKey));
    if (preferred) return { key: preferredKey, record: preferred };

    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith(`${STORAGE_PREFIX}:`)) continue;
      const record = safeParse(localStorage.getItem(key));
      if (record?.practice) return { key, record };
    }

    return preferred ? { key: preferredKey, record: preferred } : null;
  }

  function snapshotPractice(sector) {
    const sectorElement = document.getElementById('practiceSector');
    if (normalize(sectorElement?.textContent) !== sector) return null;
    return {
      sector,
      description: normalize(document.getElementById('practiceDescription')?.textContent),
      title: normalize(document.getElementById('practiceTitle')?.textContent),
      content: document.getElementById('practiceContent')?.innerHTML || '',
      after: document.getElementById('afterList')?.innerHTML || '',
      continuation: normalize(document.getElementById('continuationSectorText')?.textContent),
      reflectionClub: normalize(document.getElementById('reflectionClubSectorText')?.textContent)
    };
  }

  function resetReflectionView() {
    document.querySelectorAll('input[name="reflectionAnswer"]').forEach((input) => { input.checked = false; });
    const note = document.getElementById('reflectionNote');
    if (note) note.value = '';
    const submit = document.getElementById('reflectionSubmit');
    if (submit) {
      submit.disabled = true;
      submit.textContent = 'Сохранить ответ';
    }
    document.getElementById('reflectionStatus')?.classList.remove('is-visible');
    document.getElementById('practiceSheet')?.classList.remove('show-reflection', 'reflection-saved');
  }

  function openImmediately() {
    const found = findRecord();
    if (!found?.record) return false;

    let { key, record } = found;
    let practice = record.practice;

    if (!practice) {
      practice = snapshotPractice(record.sector);
      if (practice) {
        record = { ...record, practice };
        try { localStorage.setItem(key, JSON.stringify(record)); } catch (_) {}
      }
    }

    if (!practice) return false;

    const assignments = [
      ['practiceSector', practice.sector || record.sector, 'textContent'],
      ['practiceDescription', practice.description, 'textContent'],
      ['practiceTitle', practice.title, 'textContent'],
      ['practiceContent', practice.content, 'innerHTML'],
      ['afterList', practice.after, 'innerHTML'],
      ['continuationSectorText', practice.continuation, 'textContent'],
      ['reflectionClubSectorText', practice.reflectionClub, 'textContent']
    ];

    assignments.forEach(([id, value, property]) => {
      const element = document.getElementById(id);
      if (element && value !== undefined && value !== null) element[property] = value;
    });

    resetReflectionView();

    const offer = document.getElementById('wheelUsedOfferV24');
    if (offer) {
      offer.classList.remove('is-open');
      offer.setAttribute('aria-hidden', 'true');
    }

    const modal = document.getElementById('practiceModal');
    if (!modal) return false;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('practice-open');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    try { window.NotibotIntegration?.setScrollLock?.(true); } catch (_) {}

    return true;
  }

  function getButton(event) {
    const target = event.target instanceof Element ? event.target : null;
    return target?.closest?.('[data-open-saved-practice]') || null;
  }

  function handlePointerUp(event) {
    if (!getButton(event)) return;
    if (!openImmediately()) return;

    suppressClickUntil = Date.now() + 800;
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  function handleClick(event) {
    if (!getButton(event)) return;

    if (Date.now() < suppressClickUntil) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }

    if (!openImmediately()) return;
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  const style = document.createElement('style');
  style.textContent = '[data-open-saved-practice]{touch-action:manipulation!important;-webkit-tap-highlight-color:transparent;}';
  document.head.appendChild(style);

  document.addEventListener('pointerup', handlePointerUp, true);
  document.addEventListener('click', handleClick, true);
})();
