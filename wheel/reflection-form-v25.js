(() => {
  'use strict';

  const FORM_ID = '69cGsZT0FiHaSjDptu1xFo';
  const ROOT_ID = 'reflectionQuizV25';
  const SECTORS = [
    { label: 'Тело', value: 'body' },
    { label: 'Дело', value: 'work' },
    { label: 'Энергия', value: 'energy' },
    { label: 'Отношения', value: 'relationships' },
    { label: 'Окружение', value: 'environment' },
    { label: 'Красота', value: 'beauty' }
  ];
  const STATES = [
    { label: 'Стало легче', value: 'lighter' },
    { label: 'Стало спокойнее', value: 'calmer' },
    { label: 'Появилось больше энергии', value: 'more_energy' },
    { label: 'Что-то изменилось, но пока не понимаю что', value: 'changed_unclear' },
    { label: 'Пока не заметил(а) изменений', value: 'no_changes' }
  ];
  const norm = (value) => String(value ?? '').trim();
  let submitting = false;

  window.WHEEL_NOTIBOT_CONFIG = Object.assign({}, window.WHEEL_NOTIBOT_CONFIG || {}, { reflectionFormId: FORM_ID });

  function stringifyDetails(value) {
    if (value === null || value === undefined || value === '') return '';
    if (typeof value === 'string') return value;
    try { return JSON.stringify(value); } catch (_) { return String(value); }
  }

  function friendlyError(error) {
    const text = norm(error?.message || error);
    const code = norm(error?.code);
    const origin = norm(error?.origin);
    const details = stringifyDetails(error?.details);
    if (/too many|много запрос|429/i.test(text)) return 'Слишком много запросов. Подождите несколько секунд и попробуйте ещё раз.';

    let message = text
      ? (code && code !== 'ERR_UNKNOWN' ? `Ошибка Notibot: ${code} — ${text}` : `Ошибка Notibot: ${text}`)
      : 'Не удалось сохранить ответ. Попробуйте ещё раз.';

    if (origin && origin !== 'unknown') message += `\nИсточник: ${origin}`;
    if (details) message += `\nДетали: ${details}`;
    return message;
  }

  function addStyle() {
    if (document.getElementById('reflectionQuizV25Style')) return;
    const style = document.createElement('style');
    style.id = 'reflectionQuizV25Style';
    style.textContent = `
      .reflection-card.rq-active-v25 > :not(#${ROOT_ID}){display:none!important}
      .reflection-stage.rq-quiz-active-v25 #reflectionSubmit{display:none!important}
      #${ROOT_ID}{display:block!important;width:100%;box-sizing:border-box}
      .rq-progress{margin:0 0 12px;color:rgba(242,215,140,.78);font:700 11px/1.2 Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase}
      .rq-step{display:none}.rq-step.is-active{display:block}
      .rq-title{margin:0 0 14px;color:#fff5d8;font:700 18px/1.35 Arial,sans-serif}
      .rq-options{display:grid;gap:9px}
      .rq-option{display:flex;align-items:center;gap:10px;padding:11px 12px;border:1px solid rgba(238,202,111,.34);border-radius:13px;background:rgba(3,35,44,.62);color:#fff6d7;font:500 15px/1.35 Arial,sans-serif}
      .rq-option input{margin:0;accent-color:#d7aa3d}
      .rq-input,.rq-textarea{width:100%;box-sizing:border-box;padding:11px 13px;border:1px solid rgba(238,202,111,.42);border-radius:14px;outline:none;background:rgba(3,35,44,.72);color:#fff6d7;font:500 15px/1.4 Arial,sans-serif}
      .rq-textarea{min-height:108px;resize:vertical}
      .rq-hint{margin:8px 0 0;color:rgba(245,240,224,.62);font:500 12px/1.35 Arial,sans-serif}
      .rq-nav{display:flex;gap:9px;margin-top:16px}
      .rq-btn{min-height:44px;padding:10px 15px;border-radius:14px;border:1px solid rgba(238,202,111,.46);font:700 14px/1.2 Arial,sans-serif}
      .rq-back{background:transparent;color:#ead59a}.rq-next,.rq-submit{flex:1;background:linear-gradient(180deg,#f2d783,#d9aa38);color:#08313a}.rq-btn:disabled{opacity:.48}
      .rq-status{margin:12px 0 0;color:#f5e4b0;font:600 13px/1.4 Arial,sans-serif;white-space:pre-wrap;overflow-wrap:anywhere}.rq-success{text-align:center;color:#fff5d8;font:600 16px/1.45 Arial,sans-serif}
      @media(max-width:520px){.rq-title{font-size:17px}.rq-option{font-size:14.5px}}
    `;
    document.head.appendChild(style);
  }

  async function waitForNotibot(timeoutMs = 5000) {
    const started = Date.now();
    while (Date.now() - started < timeoutMs) {
      const notibot = window.NotibotIntegration;
      if (notibot && typeof notibot.submitForm === 'function' && notibot.getState?.().connected) return notibot;
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
    return null;
  }

  function buildAnswers(v) {
    const answers = [
      { title: 'Какая сфера вам выпала в Колесе Ресурса?', answers: [v.sectorLabel] },
      { title: 'Как изменилось ваше состояние после практики?', answers: [v.stateLabel] },
      { title: 'Что вы заметили в своём состоянии?', answers: [v.observation] },
      { title: 'Ваше имя', answers: [v.name] }
    ];

    if (v.expert) {
      answers.push({ title: 'Задайте свой вопрос эксперту по этой теме', answers: [v.expert] });
    }

    return answers;
  }

  function showSuccess(v) {
    window.dispatchEvent(new CustomEvent('wheel:reflection-saved', {
      detail: {
        sector: v.sectorLabel,
        answer: v.stateLabel,
        note: v.observation,
        name: v.name,
        expertQuestion: v.expert,
        createdAt: new Date().toISOString(),
        notibot: true
      }
    }));

    const sheet = document.getElementById('practiceSheet');
    if (sheet) {
      sheet.classList.add('reflection-saved');
      requestAnimationFrame(() => { sheet.scrollTop = 0; });
    }

    try { window.NotibotIntegration?.hapticNotification?.('success'); } catch (_) {}
  }

  function install() {
    const card = document.querySelector('.reflection-card');
    const stage = card?.closest('.reflection-stage');
    if (!card || document.getElementById(ROOT_ID)) return false;
    addStyle();

    card.insertAdjacentHTML('afterbegin', `
      <div id="${ROOT_ID}">
        <div class="rq-progress">Вопрос <span data-current>1</span> из 5</div>
        <section class="rq-step is-active" data-step="0">
          <h3 class="rq-title">Какая сфера вам выпала в Колесе Ресурса?</h3>
          <div class="rq-options">${SECTORS.map((item) => `<label class="rq-option"><input type="radio" name="rqSector" value="${item.value}" data-label="${item.label}"><span>${item.label}</span></label>`).join('')}</div>
        </section>
        <section class="rq-step" data-step="1">
          <h3 class="rq-title">Как изменилось ваше состояние после практики?</h3>
          <div class="rq-options">${STATES.map((item) => `<label class="rq-option"><input type="radio" name="rqState" value="${item.value}" data-label="${item.label}"><span>${item.label}</span></label>`).join('')}</div>
        </section>
        <section class="rq-step" data-step="2">
          <h3 class="rq-title">Что вы заметили в своём состоянии?</h3>
          <textarea id="rqObservation" class="rq-textarea" maxlength="1200" placeholder="Напишите несколько слов"></textarea>
        </section>
        <section class="rq-step" data-step="3">
          <h3 class="rq-title">Ваше имя</h3>
          <input id="rqName" class="rq-input" type="text" maxlength="120" autocomplete="name" placeholder="Введите ваше имя">
        </section>
        <section class="rq-step" data-step="4">
          <h3 class="rq-title">Задайте свой вопрос эксперту по этой теме</h3>
          <textarea id="rqExpert" class="rq-textarea" maxlength="1600" placeholder="Ваш вопрос"></textarea>
          <p class="rq-hint">Необязательно</p>
        </section>
        <div class="rq-nav">
          <button type="button" class="rq-btn rq-back" data-back style="display:none">Назад</button>
          <button type="button" class="rq-btn rq-next" data-next disabled>Далее</button>
          <button type="button" class="rq-btn rq-submit" data-submit style="display:none">Сохранить ответ</button>
        </div>
        <div class="rq-status" data-status></div>
      </div>
    `);
    card.classList.add('rq-active-v25');
    stage?.classList.add('rq-quiz-active-v25');

    const root = document.getElementById(ROOT_ID);
    const steps = [...root.querySelectorAll('[data-step]')];
    const current = root.querySelector('[data-current]');
    const back = root.querySelector('[data-back]');
    const next = root.querySelector('[data-next]');
    const submit = root.querySelector('[data-submit]');
    const status = root.querySelector('[data-status]');
    let step = 0;

    const values = () => {
      const sector = root.querySelector('input[name="rqSector"]:checked');
      const state = root.querySelector('input[name="rqState"]:checked');
      return {
        sectorValue: norm(sector?.value),
        sectorLabel: norm(sector?.dataset.label),
        stateValue: norm(state?.value),
        stateLabel: norm(state?.dataset.label),
        observation: norm(root.querySelector('#rqObservation')?.value),
        name: norm(root.querySelector('#rqName')?.value),
        expert: norm(root.querySelector('#rqExpert')?.value)
      };
    };

    const valid = () => {
      const v = values();
      return step === 0 ? !!v.sectorValue : step === 1 ? !!v.stateValue : step === 2 ? !!v.observation : step === 3 ? !!v.name : true;
    };

    const render = () => {
      steps.forEach((item, index) => item.classList.toggle('is-active', index === step));
      current.textContent = step + 1;
      back.style.display = step ? '' : 'none';
      next.style.display = step < 4 ? '' : 'none';
      submit.style.display = step === 4 ? '' : 'none';
      next.disabled = submitting || !valid();
      submit.disabled = submitting;
    };

    root.addEventListener('input', render);
    root.addEventListener('change', render);
    back.onclick = () => { if (!submitting && step) step -= 1; render(); };
    next.onclick = () => { if (!submitting && valid() && step < 4) step += 1; render(); };

    submit.onclick = async () => {
      if (submitting) return;
      const v = values();
      if (!v.sectorValue || !v.stateValue || !v.observation || !v.name) return;

      submitting = true;
      render();
      status.textContent = 'Подключаем сохранение…';

      const notibot = await waitForNotibot();
      if (!notibot) {
        submitting = false;
        render();
        status.textContent = 'Не удалось подключиться к Notibot. Закройте и снова откройте Mini App, затем повторите.';
        return;
      }

      const answers = buildAnswers(v);
      status.textContent = 'Сохраняем ответ…';
      try {
        await notibot.submitForm(FORM_ID, answers, { attachIdentity: false });
        submitting = false;
        status.textContent = '';
        showSuccess(v);
      } catch (error) {
        console.error('Reflection form V2 submit failed', {
          formId: FORM_ID,
          code: error?.code,
          origin: error?.origin,
          message: error?.message,
          details: error?.details,
          answers
        });
        submitting = false;
        render();
        status.textContent = friendlyError(error);
        try { notibot.hapticNotification?.('error'); } catch (_) {}
      }
    };

    render();
    return true;
  }

  install();
  document.addEventListener('DOMContentLoaded', install, { once: true });
  let tries = 0;
  const timer = setInterval(() => {
    tries += 1;
    if (install() || tries > 80) clearInterval(timer);
  }, 150);
})();
