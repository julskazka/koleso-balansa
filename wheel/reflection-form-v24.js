(() => {
  'use strict';

  const FORM_ID = '6OilaTGVmsR7PrL9f6h2ni';
  const NAME_INPUT_ID = 'reflectionNameV24';
  const STYLE_ID = 'reflection-form-v24-style';

  window.WHEEL_NOTIBOT_CONFIG = Object.assign(
    {},
    window.WHEEL_NOTIBOT_CONFIG || {},
    { reflectionFormId: FORM_ID }
  );

  const normalize = (value) => String(value ?? '').trim();

  function findAnswer(answers, titles) {
    const source = Array.isArray(answers) ? answers : [];
    const wanted = new Set(titles.map(normalize));
    return source.find((item) => wanted.has(normalize(item?.title))) || null;
  }

  function getFirstAnswer(item) {
    const values = Array.isArray(item?.answers) ? item.answers : [];
    return normalize(values[0]);
  }

  function getUserName(notibot) {
    const user = notibot?.getUser?.() || {};
    const fullName = normalize(
      user.fullName ||
      user.full_name ||
      user.displayName ||
      user.display_name ||
      user.name
    );
    if (fullName) return fullName;

    const firstName = normalize(user.firstName || user.first_name);
    const lastName = normalize(user.lastName || user.last_name);
    return normalize([firstName, lastName].filter(Boolean).join(' '));
  }

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .reflection-name-wrap-v24 { margin-top: 16px; }
      .reflection-name-label-v24 {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 8px;
        color: inherit;
        font: inherit;
        font-weight: 700;
      }
      .reflection-name-label-v24 span {
        opacity: .68;
        font-size: .82em;
        font-weight: 500;
      }
      .reflection-name-input-v24 {
        width: 100%;
        min-height: 46px;
        box-sizing: border-box;
        padding: 11px 14px;
        border: 1px solid rgba(238, 202, 111, .42);
        border-radius: 14px;
        outline: none;
        background: rgba(3, 35, 44, .72);
        color: #fff6d7;
        font: 500 16px/1.35 Arial, sans-serif;
        box-shadow: inset 0 1px 0 rgba(255,255,255,.06);
      }
      .reflection-name-input-v24::placeholder { color: rgba(235, 231, 212, .56); }
      .reflection-name-input-v24:focus {
        border-color: rgba(244, 210, 119, .82);
        box-shadow: 0 0 0 3px rgba(232, 192, 82, .10), inset 0 1px 0 rgba(255,255,255,.08);
      }
      @media (max-width: 520px) {
        .reflection-name-wrap-v24 { margin-top: 13px; }
        .reflection-name-input-v24 {
          min-height: 43px;
          padding: 9px 12px;
          border-radius: 13px;
          font-size: 15px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function setStatus(message) {
    const status = document.getElementById('reflectionStatus');
    if (!status) return;
    status.textContent = message;
    status.classList.add('is-visible');
  }

  function syncSubmitState() {
    const submit = document.getElementById('reflectionSubmit');
    const selected = document.querySelector('input[name="reflectionAnswer"]:checked');
    if (!submit) return;

    submit.disabled = !selected;
    if (!submit.disabled && submit.textContent === 'Повторить сохранение') {
      submit.textContent = 'Сохранить ответ';
    }
  }

  function installNameField() {
    const card = document.querySelector('.reflection-card');
    const noteWrap = card?.querySelector('.reflection-note-wrap');
    const status = card?.querySelector('#reflectionStatus');
    if (!card || !noteWrap || document.getElementById(NAME_INPUT_ID)) return false;

    addStyles();

    const wrap = document.createElement('div');
    wrap.className = 'reflection-name-wrap-v24';
    wrap.innerHTML = `
      <label class="reflection-name-label-v24" for="${NAME_INPUT_ID}">
        Ваше имя
        <span>по желанию</span>
      </label>
      <input
        class="reflection-name-input-v24"
        id="${NAME_INPUT_ID}"
        type="text"
        name="full_name"
        autocomplete="name"
        placeholder="Введите ваше имя"
        maxlength="120"
      >
    `;

    if (status) card.insertBefore(wrap, status);
    else noteWrap.insertAdjacentElement('afterend', wrap);

    const input = wrap.querySelector('input');
    const savedName = normalize(sessionStorage.getItem('wheelReflectionName'));
    if (savedName) input.value = savedName;

    input.addEventListener('input', () => {
      const name = normalize(input.value);
      if (name) sessionStorage.setItem('wheelReflectionName', name);
      else sessionStorage.removeItem('wheelReflectionName');
    });

    document.querySelectorAll('input[name="reflectionAnswer"]').forEach((radio) => {
      radio.addEventListener('change', () => requestAnimationFrame(syncSubmitState));
    });

    requestAnimationFrame(syncSubmitState);
    return true;
  }

  function wrapSubmitForm() {
    const notibot = window.NotibotIntegration;
    if (!notibot || typeof notibot.submitForm !== 'function') return false;
    if (notibot.submitForm.__reflectionV24Wrapped) return true;

    const originalSubmitForm = notibot.submitForm.bind(notibot);

    const wrapped = (formId, answers, options) => {
      if (String(formId) !== FORM_ID) {
        return originalSubmitForm(formId, answers, options);
      }

      const stateItem = findAnswer(answers, [
        'Состояние после практики',
        'Как изменилось ваше состояние после практики?'
      ]);
      const observationItem = findAnswer(answers, [
        'Комментарий после практики',
        'Что вы заметили в своём состоянии?'
      ]);
      const nameInput = document.getElementById(NAME_INPUT_ID);
      const fullName = normalize(nameInput?.value) || getUserName(notibot);
      const stateValue = getFirstAnswer(stateItem);
      const observationValue = getFirstAnswer(observationItem);

      if (!stateValue) {
        return Promise.reject(new Error('Не выбран ответ о состоянии после практики'));
      }

      const mappedAnswers = [
        {
          title: 'Как изменилось ваше состояние после практики?',
          answers: [stateValue]
        },
        {
          title: 'Что вы заметили в своём состоянии?',
          answers: [observationValue]
        }
      ];

      if (fullName) {
        mappedAnswers.push({ title: 'Ваше имя', answers: [fullName] });
      }

      return originalSubmitForm(formId, mappedAnswers, {
        ...(options || {}),
        attachIdentity: false
      });
    };

    wrapped.__reflectionV24Wrapped = true;
    notibot.submitForm = wrapped;

    const input = document.getElementById(NAME_INPUT_ID);
    if (input && !normalize(input.value)) {
      const detectedName = getUserName(notibot);
      if (detectedName) {
        input.value = detectedName;
        sessionStorage.setItem('wheelReflectionName', detectedName);
      }
    }

    return true;
  }

  function installConnectionGuard() {
    const submit = document.getElementById('reflectionSubmit');
    if (!submit || submit.dataset.connectionGuardV24 === 'true') return false;

    submit.dataset.connectionGuardV24 = 'true';

    submit.addEventListener('click', async (event) => {
      const notibot = window.NotibotIntegration;
      if (notibot?.getState?.().connected) return;

      event.preventDefault();
      event.stopImmediatePropagation();
      submit.disabled = true;
      submit.textContent = 'Подключаем сохранение…';
      setStatus('Подключаемся к форме Notibot…');

      const startedAt = Date.now();
      while (Date.now() - startedAt < 5000) {
        wrapSubmitForm();
        if (window.NotibotIntegration?.getState?.().connected) {
          submit.disabled = false;
          submit.textContent = 'Сохранить ответ';
          submit.click();
          return;
        }
        await new Promise((resolve) => setTimeout(resolve, 150));
      }

      submit.disabled = false;
      submit.textContent = 'Повторить сохранение';
      setStatus('Не удалось подключиться к Notibot. Откройте страницу внутри бота и повторите.');
    }, true);

    return true;
  }

  function install() {
    const nameReady = installNameField();
    const wrapperReady = wrapSubmitForm();
    const guardReady = installConnectionGuard();
    return nameReady || wrapperReady || guardReady;
  }

  install();

  let attempts = 0;
  const timer = setInterval(() => {
    attempts += 1;
    install();
    if (attempts >= 80 || (
      document.getElementById(NAME_INPUT_ID) &&
      window.NotibotIntegration?.submitForm?.__reflectionV24Wrapped &&
      document.getElementById('reflectionSubmit')?.dataset.connectionGuardV24 === 'true'
    )) {
      clearInterval(timer);
    }
  }, 150);

  const observer = new MutationObserver(() => install());
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
