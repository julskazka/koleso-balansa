(() => {
  'use strict';

  const ROOT_ID = 'reflectionQuizV25';
  let successShown = false;

  function addStyle() {
    if (document.getElementById('reflectionFinishV26Style')) return;
    const style = document.createElement('style');
    style.id = 'reflectionFinishV26Style';
    style.textContent = `
      #${ROOT_ID} .rq-finish-v26{
        color:#fff5d8;
        font:500 15px/1.55 Arial,sans-serif;
        text-align:left;
      }
      #${ROOT_ID} .rq-finish-v26 h3{
        margin:0 0 18px;
        color:#fff5d8;
        font:800 20px/1.3 Arial,sans-serif;
      }
      #${ROOT_ID} .rq-finish-v26 p{margin:0 0 16px}
      #${ROOT_ID} .rq-finish-v26 .rq-finish-list{margin:0 0 16px}
      #${ROOT_ID} .rq-finish-v26 strong{font-weight:800}
      @media(max-width:520px){
        #${ROOT_ID} .rq-finish-v26{font-size:14.5px;line-height:1.5}
        #${ROOT_ID} .rq-finish-v26 h3{font-size:19px}
      }
    `;
    document.head.appendChild(style);
  }

  function renderSuccess() {
    if (!successShown) return;
    addStyle();

    const root = document.getElementById(ROOT_ID);
    const card = root?.closest('.reflection-card');
    const stage = root?.closest('.reflection-stage');
    const sheet = document.getElementById('practiceSheet');
    if (!root) return;

    card?.classList.add('rq-active-v25');
    stage?.classList.add('rq-quiz-active-v25');
    sheet?.classList.remove('reflection-saved');

    root.innerHTML = `
      <div class="rq-finish-v26">
        <h3>Спасибо! Мы получили ваши ответы 🤍</h3>
        <p>А теперь можно не останавливаться на одной практике.</p>
        <p>Переходите в «Центр Ресурса» и выбирайте, куда хочется пойти дальше:</p>
        <div class="rq-finish-list">
          — продолжить тему, которая выпала вам в Колесе, и посмотреть, что ещё есть по ней;<br>
          — выбрать экспертов и материалы по этой сфере;<br>
          — или открыть любое другое направление, которое сейчас кажется важнее.
        </div>
        <p>Не нужно изучать всё. <strong>Начните с того, что актуально именно вам сейчас.</strong></p>
      </div>
    `;

    if (sheet) sheet.scrollTop = 0;
  }

  window.addEventListener('wheel:reflection-saved', () => {
    successShown = true;
    setTimeout(renderSuccess, 0);
    setTimeout(renderSuccess, 80);
    setTimeout(renderSuccess, 250);
  });
})();
