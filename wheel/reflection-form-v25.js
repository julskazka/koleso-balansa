(() => {
  'use strict';

  const FORM_ID = '6OilaTGVmsR7PrL9f6h2ni';
  const ROOT_ID = 'reflectionQuizV25';
  const SECTORS = ['Тело','Дело','Энергия','Отношения','Окружение','Красота'];
  const STATES = ['Стало легче','Стало спокойнее','Появилось больше энергии','Что-то изменилось, но пока не понимаю что','Пока не заметил(а) изменений'];
  const norm = (value) => String(value ?? '').trim();
  let getQuizValues = null;
  let quizSubmit = null;
  let quizStatus = null;
  let submitting = false;

  window.WHEEL_NOTIBOT_CONFIG = Object.assign({}, window.WHEEL_NOTIBOT_CONFIG || {}, { reflectionFormId: FORM_ID });

  function stringifyDetails(value) {
    if (value === null || value === undefined || value === '') return '';
    if (typeof value === 'string') return value;
    try {
      return JSON.stringify(value);
    } catch (_) {
      return String(value);
    }
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

  function wrapSubmitForm() {
    const notibot = window.NotibotIntegration;
    if (!notibot || typeof notibot.submitForm !== 'function') return false;
    if (notibot.submitForm.__reflectionQuizV25Wrapped) return true;

    const originalSubmitForm = notibot.submitForm.bind(notibot);
    const wrapped = (formId, answers, options) => {
      if (String(formId) !== FORM_ID || typeof getQuizValues !== 'function') {
        return originalSubmitForm(formId, answers, options);
      }

      const v = getQuizValues();
      if (!v.sector || !v.state || !v.observation || !v.name) {
        return Promise.reject(new Error('Не заполнены обязательные поля формы'));
      }

      const mappedAnswers = [
        { title: 'Какая сфера вам выпала в Колесе Ресурса?', answers: [v.sector] },
        { title: 'Как изменилось ваше состояние после практики?', answers: [v.state] },
        { title: 'Что вы заметили в своём состоянии?', answers: [v.observation] },
        { title: 'Ваше имя', answers: [v.name] }
      ];
      if (v.expert) mappedAnswers.push({ title: 'Задайте свой вопрос эксперту по этой теме', answers: [v.expert] });

      const request = originalSubmitForm(formId, mappedAnswers, { ...(options || {}), attachIdentity: false });
      return Promise.resolve(request).then((result) => {
        submitting = false;
        if (quizSubmit) quizSubmit.disabled = false;
        if (quizStatus) quizStatus.textContent = '';
        return result;
      }).catch((error) => {
        console.error('Reflection form V2 submit failed', {
          code: error?.code,
          origin: error?.origin,
          message: error?.message,
          details: error?.details
        });
        submitting = false;
        if (quizSubmit) quizSubmit.disabled = false;
        if (quizStatus) quizStatus.textContent = friendlyError(error);
        throw error;
      });
    };

    wrapped.__reflectionQuizV25Wrapped = true;
    notibot.submitForm = wrapped;
    return true;
  }

  async function waitForNotibot(timeoutMs = 5000) {
    const started = Date.now();
    while (Date.now() - started < timeoutMs) {
      wrapSubmitForm();
      const notibot = window.NotibotIntegration;
      if (notibot && typeof notibot.submitForm === 'function' && notibot.getState?.().connected) return true;
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
    return false;
  }

  function syncNativeFields(v) {
    document.querySelectorAll('input[name="reflectionAnswer"]').forEach((radio) => {
      radio.checked = norm(radio.value) === v.state;
    });
    const note = document.getElementById('reflectionNote');
    if (note) note.value = v.observation;
    const nativeSubmit = document.getElementById('reflectionSubmit');
    if (nativeSubmit) nativeSubmit.disabled = false;
  }

  function install() {
    const card = document.querySelector('.reflection-card');
    const stage = card?.closest('.reflection-stage');
    if (!card || document.getElementById(ROOT_ID)) {
      wrapSubmitForm();
      return false;
    }
    addStyle();

    card.insertAdjacentHTML('afterbegin', `
      <div id="${ROOT_ID}">
        <div class="rq-progress">Вопрос <span data-current>1</span> из 5</div>
        <section class="rq-step is-active" data-step="0">
          <h3 class="rq-title">Какая сфера вам выпала в Колесе Ресурса?</h3>
          <div class="rq-options">${SECTORS.map((v) => `<label class="rq-option"><input type="radio" name="rqSector" value="${v}"><span>${v}</span></label>`).join('')}</div>
        </section>
        <section class="rq-step" data-step="1">
          <h3 class="rq-title">Как изменилось ваше состояние после практики?</h3>
          <div class="rq-options">${STATES.map((v) => `<label class="rq-option"><input type="radio" name="rqState" value="${v}"><span>${v}</span></label>`).join('')}</div>
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

    getQuizValues = () => ({
      sector: norm(root.querySelector('input[name="rqSector"]:checked')?.value),
      state: norm(root.querySelector('input[name="rqState"]:checked')?.value),
      observation: norm(root.querySelector('#rqObservation')?.value),
      name: norm(root.querySelector('#rqName')?.value),
      expert: norm(root.querySelector('#rqExpert')?.value)
    });
    quizSubmit = submit;
    quizStatus = status;

    const valid = () => {
      const v = getQuizValues();
      return step === 0 ? !!v.sector : step === 1 ? !!v.state : step === 2 ? !!v.observation : step === 3 ? !!v.name : true;
    };

    const render = () => {
      steps.forEach((item, index) => item.classList.toggle('is-active', index === step));
      current.textContent = step + 1;
      back.style.display = step ? '' : 'none';
      next.style.display = step < 4 ? '' : 'none';
      submit.style.display = step === 4 ? '' : 'none';
      if (!submitting) next.disabled = !valid();
    };

    root.addEventListener('input', render);
    root.addEventListener('change', render);
    back.onclick = () => { if (!submitting && step) step -= 1; render(); };
    next.onclick = () => { if (!submitting && valid() && step < 4) step += 1; render(); };

    submit.onclick = async () => {
      if (submitting) return;
      const v = getQuizValues();
      submitting = true;
      submit.disabled = true;
      status.textContent = 'Подключаем сохранение…';

      const ready = await waitForNotibot();
      if (!ready) {
        submitting = false;
        submit.disabled = false;
        status.textContent = 'Не удалось подключиться к Notibot. Закройте и снова откройте Mini App, затем повторите.';
        return;
      }

      syncNativeFields(v);
      wrapSubmitForm();
      status.textContent = 'Сохраняем ответ…';

      const nativeSubmit = document.getElementById('reflectionSubmit');
      if (!nativeSubmit) {
        submitting = false;
        submit.disabled = false;
        status.textContent = 'Не удалось найти сохранение формы. Обновите Mini App и повторите.';
        return;
      }

      nativeSubmit.click();
    };

    wrapSubmitForm();
    render();
    return true;
  }

  install();
  document.addEventListener('DOMContentLoaded', install, { once: true });
  let tries = 0;
  const timer = setInterval(() => {
    tries += 1;
    install();
    wrapSubmitForm();
    if (tries > 80 || (document.getElementById(ROOT_ID) && window.NotibotIntegration?.submitForm?.__reflectionQuizV25Wrapped)) clearInterval(timer);
  }, 150);
})();
