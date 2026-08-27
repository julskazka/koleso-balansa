(() => {
  'use strict';

  const STORAGE_PREFIX = 'wheel_free_spin_v24';
  const BROWSER_KEY = `${STORAGE_PREFIX}:browser`;
  const STYLE_ID = 'wheel-free-spin-v24-style';
  const CARD_ID = 'wheelUsedCardV24';
  const OFFER_ID = 'wheelUsedOfferV24';
  const CLUB_PAGE_ID = '1HyKwZ5uhzwdI74llc7iTV';
  const EXTERNAL_CLUB_URL = 'https://t.me/anna_kolieso_bot/aboutme?startapp=a_1HyKwZ5uhzwdI74llc7iTV_lp';
  const SECTORS = ['Тело', 'Энергия', 'Дело', 'Отношения', 'Окружение', 'Красота'];

  let storageKey = BROWSER_KEY;
  let currentRecord = null;
  let ready = false;
  let resultObserver = null;

  const normalize = (value) => String(value ?? '').trim();

  function safeParse(value) {
    try {
      const parsed = JSON.parse(value);
      return parsed && parsed.used && SECTORS.includes(parsed.sector) ? parsed : null;
    } catch (_) {
      return null;
    }
  }

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

  function readRecord() {
    return safeParse(localStorage.getItem(storageKey));
  }

  function saveRecord(record) {
    currentRecord = record;
    localStorage.setItem(storageKey, JSON.stringify(record));
  }

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      html.wheel-free-spin-used-v24 #spinButton,
      html.wheel-free-spin-used-v24 .caption { display: none !important; }
      html.wheel-free-spin-used-v24 #wheel { cursor: pointer !important; }

      .wheel-used-card-v24 {
        width: min(100%, 520px);
        box-sizing: border-box;
        margin: 18px auto 0;
        padding: 22px 20px;
        border: 1px solid rgba(229, 196, 105, .34);
        border-radius: 22px;
        background: linear-gradient(180deg, rgba(9, 67, 61, .92), rgba(3, 37, 46, .96));
        box-shadow: 0 18px 48px rgba(0, 0, 0, .22), inset 0 1px 0 rgba(255,255,255,.06);
        color: #f8f0d8;
        text-align: center;
      }
      .wheel-used-kicker-v24 {
        margin-bottom: 8px;
        color: #d9bd70;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: .14em;
        text-transform: uppercase;
      }
      .wheel-used-card-v24 h3 {
        margin: 0 0 10px;
        color: #fff5d1;
        font-size: clamp(23px, 5.5vw, 31px);
        line-height: 1.12;
      }
      .wheel-used-card-v24 p {
        margin: 0 auto 12px;
        max-width: 440px;
        color: rgba(246, 242, 225, .84);
        font-size: 15px;
        line-height: 1.5;
      }
      .wheel-used-sector-v24 {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 150px;
        margin: 2px 0 14px;
        padding: 9px 18px;
        border: 1px solid rgba(236, 203, 112, .45);
        border-radius: 999px;
        background: rgba(218, 183, 86, .09);
        color: #f2d98f;
        font-size: 20px;
        font-weight: 800;
      }
      .wheel-used-actions-v24 {
        display: grid;
        gap: 10px;
        margin-top: 18px;
      }
      .wheel-used-button-v24 {
        min-height: 46px;
        border: 0;
        border-radius: 14px;
        padding: 11px 16px;
        font: 700 15px/1.25 Arial, sans-serif;
        cursor: pointer;
      }
      .wheel-used-button-v24.is-primary {
        background: linear-gradient(180deg, #fff9e7 0%, #ead8ab 100%);
        color: #073b36;
        box-shadow: inset 0 2px 1px rgba(255,255,255,.86), 0 9px 22px rgba(0,0,0,.20);
      }
      .wheel-used-button-v24.is-secondary {
        border: 1px solid rgba(235, 204, 117, .42);
        background: rgba(255,255,255,.035);
        color: #f6e5b4;
      }

      .wheel-used-offer-v24 {
        position: fixed;
        inset: 0;
        z-index: 2147483000;
        display: none;
        align-items: flex-end;
        justify-content: center;
        padding: 16px;
        box-sizing: border-box;
        background: rgba(0, 12, 18, .72);
        backdrop-filter: blur(7px);
      }
      .wheel-used-offer-v24.is-open { display: flex; }
      .wheel-used-dialog-v24 {
        position: relative;
        width: min(100%, 520px);
        max-height: min(88svh, 720px);
        overflow: auto;
        box-sizing: border-box;
        padding: 28px 22px 22px;
        border: 1px solid rgba(230, 197, 105, .38);
        border-radius: 24px 24px 18px 18px;
        background: linear-gradient(180deg, #08473f 0%, #032630 100%);
        color: #f8f0d8;
        text-align: center;
        box-shadow: 0 24px 70px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.07);
      }
      .wheel-used-close-v24 {
        position: absolute;
        top: 10px;
        right: 12px;
        width: 36px;
        height: 36px;
        border: 0;
        border-radius: 50%;
        background: rgba(255,255,255,.06);
        color: #fff1c7;
        font-size: 25px;
        line-height: 1;
        cursor: pointer;
      }
      .wheel-used-dialog-v24 h2 {
        margin: 6px 24px 11px;
        color: #fff5d2;
        font-size: clamp(25px, 6vw, 34px);
        line-height: 1.12;
      }
      .wheel-used-dialog-v24 p {
        margin: 0 auto 13px;
        max-width: 440px;
        color: rgba(246, 242, 225, .84);
        font-size: 15px;
        line-height: 1.52;
      }
      .wheel-used-dialog-v24 .wheel-used-actions-v24 { margin-top: 20px; }

      @media (min-width: 701px) {
        .wheel-used-offer-v24 { align-items: center; }
        .wheel-used-dialog-v24 { border-radius: 24px; }
        .wheel-used-actions-v24 { grid-template-columns: 1fr 1fr; }
      }
      @media (max-width: 520px) {
        .wheel-used-card-v24 { padding: 19px 15px; border-radius: 18px; }
        .wheel-used-card-v24 p,
        .wheel-used-dialog-v24 p { font-size: 14px; }
        .wheel-used-button-v24 { min-height: 43px; border-radius: 13px; }
        .wheel-used-dialog-v24 { padding: 26px 16px 18px; }
      }
    `;
    document.head.appendChild(style);
  }

  function getElements() {
    return {
      wheel: document.getElementById('wheel'),
      button: document.getElementById('spinButton'),
      result: document.getElementById('result'),
      modal: document.getElementById('practiceModal')
    };
  }

  function openClub() {
    const notibot = window.NotibotIntegration;
    try {
      if (notibot?.getState?.().connected && typeof notibot.openArticle === 'function') {
        notibot.openArticle(CLUB_PAGE_ID);
        return;
      }
      if (notibot?.getState?.().connected && typeof notibot.openLink === 'function') {
        notibot.openLink(`/page/${CLUB_PAGE_ID}`);
        return;
      }
    } catch (error) {
      console.warn('Не удалось открыть клуб через Notibot', error);
    }
    window.location.assign(EXTERNAL_CLUB_URL);
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
    const status = document.getElementById('reflectionStatus');
    if (status) status.classList.remove('is-visible');
    document.getElementById('practiceSheet')?.classList.remove('show-reflection', 'reflection-saved');
  }

  function openSavedPractice() {
    const record = currentRecord || readRecord();
    if (!record?.practice) {
      showOffer();
      return;
    }

    const practice = record.practice;
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
    closeOffer();

    const modal = document.getElementById('practiceModal');
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('practice-open');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    try { window.NotibotIntegration?.setScrollLock?.(true); } catch (_) {}
    document.getElementById('practiceClose')?.focus();
  }

  function ensureOffer() {
    let offer = document.getElementById(OFFER_ID);
    if (offer) return offer;

    offer = document.createElement('div');
    offer.id = OFFER_ID;
    offer.className = 'wheel-used-offer-v24';
    offer.setAttribute('aria-hidden', 'true');
    offer.innerHTML = `
      <section class="wheel-used-dialog-v24" role="dialog" aria-modal="true" aria-labelledby="wheelUsedTitleV24">
        <button class="wheel-used-close-v24" type="button" aria-label="Закрыть">×</button>
        <div class="wheel-used-kicker-v24">Бесплатное вращение использовано</div>
        <h2 id="wheelUsedTitleV24">Одна практика уже у вас</h2>
        <p>Колесо уже выбрало для вас направление:</p>
        <div class="wheel-used-sector-v24" data-wheel-used-sector></div>
        <p>Но одна практика — это только начало. В клубе можно открыть все шесть направлений и выбирать практики под своё состояние, а не ждать случайного результата.</p>
        <div class="wheel-used-actions-v24">
          <button class="wheel-used-button-v24 is-secondary" type="button" data-open-saved-practice>Вернуться к своей практике</button>
          <button class="wheel-used-button-v24 is-primary" type="button" data-open-wheel-club>Открыть все направления за 1 ₽</button>
        </div>
      </section>
    `;
    document.body.appendChild(offer);

    offer.addEventListener('click', (event) => {
      if (event.target === offer || event.target.closest('.wheel-used-close-v24')) closeOffer();
      if (event.target.closest('[data-open-saved-practice]')) openSavedPractice();
      if (event.target.closest('[data-open-wheel-club]')) openClub();
    });
    return offer;
  }

  function showOffer() {
    const record = currentRecord || readRecord();
    if (!record) return;
    const offer = ensureOffer();
    offer.querySelectorAll('[data-wheel-used-sector]').forEach((element) => {
      element.textContent = record.sector;
    });
    offer.classList.add('is-open');
    offer.setAttribute('aria-hidden', 'false');
    try { window.NotibotIntegration?.setScrollLock?.(true); } catch (_) {}
    offer.querySelector('.wheel-used-close-v24')?.focus();
  }

  function closeOffer() {
    const offer = document.getElementById(OFFER_ID);
    if (!offer) return;
    offer.classList.remove('is-open');
    offer.setAttribute('aria-hidden', 'true');
    if (!document.getElementById('practiceModal')?.classList.contains('is-open')) {
      try { window.NotibotIntegration?.setScrollLock?.(false); } catch (_) {}
    }
  }

  function ensureUsedCard(record) {
    const { button, result } = getElements();
    if (!button || !result) return false;

    document.documentElement.classList.add('wheel-free-spin-used-v24');
    result.innerHTML = `Ваш сектор: <strong>${record.sector}</strong>`;
    result.classList.add('is-visible');

    let card = document.getElementById(CARD_ID);
    if (!card) {
      card = document.createElement('section');
      card.id = CARD_ID;
      card.className = 'wheel-used-card-v24';
      button.insertAdjacentElement('afterend', card);
    }

    card.innerHTML = `
      <div class="wheel-used-kicker-v24">Ваша практика</div>
      <h3>Одна практика уже у вас</h3>
      <p>Колесо выбрало для вас направление:</p>
      <div class="wheel-used-sector-v24">${record.sector}</div>
      <p>В клубе можно открыть все шесть направлений и выбирать практики под своё состояние.</p>
      <div class="wheel-used-actions-v24">
        <button class="wheel-used-button-v24 is-secondary" type="button" data-open-saved-practice>Вернуться к своей практике</button>
        <button class="wheel-used-button-v24 is-primary" type="button" data-open-wheel-club>Открыть все направления за 1 ₽</button>
      </div>
    `;

    card.onclick = (event) => {
      if (event.target.closest('[data-open-saved-practice]')) openSavedPractice();
      if (event.target.closest('[data-open-wheel-club]')) openClub();
    };
    return true;
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

  function persistFirstResult(sector) {
    if (currentRecord || !SECTORS.includes(sector)) return;

    let attempts = 0;
    const timer = setInterval(() => {
      attempts += 1;
      const practice = snapshotPractice(sector);
      if (!practice && attempts < 30) return;
      clearInterval(timer);

      const record = {
        version: 1,
        used: true,
        sector,
        usedAt: new Date().toISOString(),
        practice: practice || null
      };
      saveRecord(record);
      ensureUsedCard(record);
      window.dispatchEvent(new CustomEvent('wheel:free-spin-used', { detail: record }));
    }, 100);
  }

  function extractSectorFromResult() {
    const text = normalize(document.getElementById('result')?.textContent);
    return SECTORS.find((sector) => text.includes(sector)) || '';
  }

  function watchFirstResult() {
    const result = document.getElementById('result');
    if (!result || resultObserver) return;

    resultObserver = new MutationObserver(() => {
      if (currentRecord) return;
      const sector = extractSectorFromResult();
      if (sector) persistFirstResult(sector);
    });
    resultObserver.observe(result, { childList: true, subtree: true, characterData: true, attributes: true });
  }

  function blockRepeat(event) {
    if (!ready || !currentRecord) return;
    if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    event.stopImmediatePropagation();
    showOffer();
  }

  function installInterceptors() {
    const { wheel, button } = getElements();
    if (!wheel || !button) return false;

    if (wheel.dataset.freeSpinV24 !== 'true') {
      wheel.dataset.freeSpinV24 = 'true';
      wheel.addEventListener('click', blockRepeat, true);
      wheel.addEventListener('keydown', blockRepeat, true);
    }
    if (button.dataset.freeSpinV24 !== 'true') {
      button.dataset.freeSpinV24 = 'true';
      button.addEventListener('click', blockRepeat, true);
    }
    watchFirstResult();
    return true;
  }

  function setCheckingState(checking) {
    const button = document.getElementById('spinButton');
    if (!button || currentRecord) return;
    if (checking) {
      button.dataset.originalTextV24 = button.textContent;
      button.textContent = 'Проверяем доступ…';
      button.disabled = true;
    } else {
      button.textContent = button.dataset.originalTextV24 || 'Крутить колесо';
      button.disabled = false;
    }
  }

  async function resolveStorage() {
    const embedded = window.parent !== window;
    if (!embedded) {
      storageKey = BROWSER_KEY;
      currentRecord = readRecord();
      ready = true;
      return;
    }

    setCheckingState(true);
    const startedAt = Date.now();
    while (Date.now() - startedAt < 4000) {
      const identityId = getIdentityId();
      if (identityId) {
        storageKey = makeAccountKey(identityId);
        currentRecord = readRecord();
        ready = true;
        setCheckingState(false);
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 120));
    }

    storageKey = BROWSER_KEY;
    currentRecord = readRecord();
    ready = true;
    setCheckingState(false);
  }

  async function install() {
    addStyles();

    let attempts = 0;
    while (attempts < 100 && !installInterceptors()) {
      attempts += 1;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    await resolveStorage();
    if (currentRecord) ensureUsedCard(currentRecord);

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeOffer();
    });
  }

  install();
})();
