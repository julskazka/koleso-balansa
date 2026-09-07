(() => {
  const norm = (value) => (value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();

  const addStyles = () => {
    if (document.getElementById('v104-start-one-question-styles')) return;
    const style = document.createElement('style');
    style.id = 'v104-start-one-question-styles';
    style.textContent = `
      .v104-question-wrap{
        position:relative;
        width:100%;
        max-width:760px;
        margin:24px auto 16px;
        padding:22px 18px 20px;
        box-sizing:border-box;
        text-align:center;
        overflow:hidden;
      }
      .v104-question-wrap:before,
      .v104-question-wrap:after{
        content:'';
        position:absolute;
        left:8%;
        right:8%;
        height:1px;
        background:linear-gradient(90deg,transparent,rgba(240,204,105,.52),transparent);
        box-shadow:0 0 10px rgba(232,196,97,.16);
      }
      .v104-question-wrap:before{top:0}
      .v104-question-wrap:after{bottom:0}
      .v104-question-glow{
        position:absolute;
        inset:0;
        pointer-events:none;
        background:
          radial-gradient(circle at 50% 10%,rgba(29,138,150,.16),transparent 42%),
          radial-gradient(circle at 24% 70%,rgba(12,91,110,.12),transparent 34%);
        filter:blur(2px);
      }
      .v104-question-title{
        position:relative;
        margin:0 0 13px;
        color:#f2d58b;
        font-family:Georgia,'Times New Roman',serif;
        font-size:30px;
        line-height:1.08;
        font-weight:700;
        text-shadow:0 0 16px rgba(241,204,105,.16);
      }
      .v104-question-text{
        position:relative;
        margin:0 auto 13px;
        max-width:690px;
        color:#f7f8f7;
        font-size:15px;
        line-height:1.48;
        font-weight:600;
      }
      .v104-question-final{
        position:relative;
        margin:0 auto;
        max-width:700px;
        color:#f2d58b;
        font-size:16px;
        line-height:1.43;
        font-weight:800;
      }
      @media (min-width:700px){
        .v104-question-wrap{margin:30px auto 20px;padding:26px 24px 23px}
        .v104-question-title{font-size:38px;margin-bottom:15px}
        .v104-question-text{font-size:16px;margin-bottom:15px}
        .v104-question-final{font-size:17px}
      }
      @media (max-width:420px){
        .v104-question-wrap{margin:20px auto 13px;padding:18px 12px 17px}
        .v104-question-title{font-size:27px;line-height:1.07;margin-bottom:11px}
        .v104-question-text{font-size:14px;line-height:1.43;margin-bottom:11px}
        .v104-question-final{font-size:14.5px;line-height:1.4}
      }
    `;
    document.head.appendChild(style);
  };

  const findTrialCard = () => {
    for (const marker of document.querySelectorAll('div,p,span,h2,h3,h4')) {
      const markerText = norm(marker.textContent);
      if (markerText !== 'ПРОБНЫЙ ДОСТУП') continue;

      let node = marker;
      for (let i = 0; i < 8 && node && node !== document.body; i += 1, node = node.parentElement) {
        const text = norm(node.textContent);
        if (
          text.includes('ПРОБНЫЙ ДОСТУП') &&
          text.includes('7 дней') &&
          text.includes('Открыть доступ') &&
          (text.includes('999 ₽') || text.includes('999 Р'))
        ) return node;
      }
    }
    return null;
  };

  const apply = () => {
    if (document.querySelector('.v104-question-wrap')) return;
    addStyles();

    const card = findTrialCard();
    if (!card || !card.parentElement) return;

    const wrapper = document.createElement('section');
    wrapper.className = 'v104-question-wrap';
    wrapper.innerHTML = `
      <span class="v104-question-glow" aria-hidden="true"></span>
      <h2 class="v104-question-title">Начните с одного вопроса</h2>
      <p class="v104-question-text">Не нужно заранее понимать, какой специалист вам нужен и какой подход окажется вашим.</p>
      <p class="v104-question-final">За семь дней можно посмотреть, сравнить и попробовать — а потом решить на собственном опыте.</p>`;

    card.parentElement.insertBefore(wrapper, card);
  };

  apply();
  document.addEventListener('DOMContentLoaded', apply, { once: true });
  [100, 350, 800, 1500, 2600].forEach((delay) => setTimeout(apply, delay));
})();
