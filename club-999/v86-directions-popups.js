(()=>{
  const STYLE_ID='club999-directions-popups-v86';
  const POPUP_ID='club999DirectionsPopup';
  const OPEN_CLASS='club999-directions-popup-open';

  const cardThemes={
    'Тело':'body',
    'Энергия':'energy',
    'Дело':'work',
    'Отношения':'relations',
    'Окружение':'community',
    'Красота':'beauty'
  };

  const artByTitle={
    'Тело': sceneBody,
    'Энергия': sceneEnergy,
    'Дело': sceneWork,
    'Отношения': sceneRelations,
    'Окружение': sceneCommunity,
    'Красота': sceneBeauty
  };

  function sceneFrame(inner){
    return `<svg viewBox="0 0 320 240" aria-hidden="true" focusable="false"><defs>
      <radialGradient id="nb1" cx="30%" cy="24%" r="70%"><stop offset="0" stop-color="rgba(126,246,248,.42)"/><stop offset="0.35" stop-color="rgba(64,196,202,.18)"/><stop offset="1" stop-color="rgba(64,196,202,0)"/></radialGradient>
      <radialGradient id="nb2" cx="76%" cy="18%" r="62%"><stop offset="0" stop-color="rgba(244,217,130,.34)"/><stop offset="0.4" stop-color="rgba(244,217,130,.12)"/><stop offset="1" stop-color="rgba(244,217,130,0)"/></radialGradient>
      <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f8e6b3"/><stop offset="0.5" stop-color="#e4c26f"/><stop offset="1" stop-color="#c89d3d"/></linearGradient>
      <linearGradient id="aquaLine" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#bbfdff"/><stop offset="0.35" stop-color="#6fe9ed"/><stop offset="1" stop-color="#2fb8c1"/></linearGradient>
      <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <rect x="0" y="0" width="320" height="240" fill="transparent"/>
    <ellipse cx="84" cy="52" rx="82" ry="44" fill="url(#nb1)"/>
    <ellipse cx="252" cy="44" rx="76" ry="38" fill="url(#nb2)"/>
    <g opacity=".7">
      <circle cx="56" cy="36" r="1.4" fill="#f7e3a4"/><circle cx="82" cy="28" r="1.1" fill="#9feff0"/><circle cx="242" cy="32" r="1.2" fill="#f7e3a4"/><circle cx="268" cy="46" r="1.1" fill="#9feff0"/><circle cx="212" cy="64" r="1" fill="#d9f7fb"/><circle cx="146" cy="28" r=".95" fill="#f7e3a4"/>
    </g>
    ${inner}
    <path d="M30 206C74 176 118 188 154 188c31 0 61-9 93-24 18-9 31-16 43-16" fill="none" stroke="rgba(98,231,237,.23)" stroke-width="2" stroke-linecap="round"/>
  </svg>`;
  }

  function sceneBody(){
    return sceneFrame(`
      <g filter="url(#softGlow)">
        <ellipse cx="160" cy="168" rx="74" ry="42" fill="rgba(3,25,32,.42)"/>
        <path d="M125 146c11-21 24-34 35-34 12 0 24 13 36 34" fill="none" stroke="url(#goldLine)" stroke-width="5.2" stroke-linecap="round"/>
        <path d="M109 183c19-16 30-41 35-76 2-16 8-25 16-25s14 9 16 25c4 35 16 60 35 76" fill="none" stroke="url(#aquaLine)" stroke-width="7.2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="160" cy="142" r="26" fill="rgba(249,232,178,.08)" stroke="url(#goldLine)" stroke-width="2.5"/>
        <path d="M160 123v38M141 142h38" stroke="rgba(123,238,243,.55)" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M129 106c8 7 19 11 31 11s23-4 31-11" fill="none" stroke="url(#goldLine)" stroke-width="3" stroke-linecap="round" opacity=".75"/>
      </g>`);
  }

  function sceneEnergy(){
    return sceneFrame(`
      <g filter="url(#softGlow)">
        <path d="M160 46l21 46 50 7-37 31 11 49-45-25-45 25 11-49-37-31 50-7z" fill="rgba(250,238,190,.06)" stroke="url(#goldLine)" stroke-width="5" stroke-linejoin="round"/>
        <path d="M160 65l10 21 24 4-17 14 5 24-22-12-22 12 5-24-17-14 24-4z" fill="rgba(111,233,237,.12)" stroke="url(#aquaLine)" stroke-width="3.6" stroke-linejoin="round"/>
        <path d="M84 182c17-14 31-21 44-21 17 0 24 10 32 10 10 0 16-4 26-12 10-8 18-12 30-12 15 0 30 8 44 23" fill="none" stroke="url(#aquaLine)" stroke-width="6.2" stroke-linecap="round"/>
        <path d="M103 202c14-9 27-14 39-14 14 0 24 6 36 6 10 0 21-6 34-6 13 0 26 5 40 14" fill="none" stroke="url(#goldLine)" stroke-width="3" stroke-linecap="round" opacity=".8"/>
      </g>`);
  }

  function sceneWork(){
    return sceneFrame(`
      <g filter="url(#softGlow)">
        <ellipse cx="160" cy="170" rx="82" ry="36" fill="rgba(4,30,37,.44)"/>
        <circle cx="160" cy="126" r="56" fill="rgba(248,229,177,.04)" stroke="url(#goldLine)" stroke-width="4.4"/>
        <circle cx="160" cy="126" r="24" fill="rgba(111,233,237,.08)" stroke="url(#aquaLine)" stroke-width="3.8"/>
        <path d="M160 71v-16M160 197v-16M105 126H89M231 126h-16" stroke="url(#goldLine)" stroke-width="3" stroke-linecap="round" opacity=".8"/>
        <path d="M160 126l44-42" fill="none" stroke="url(#goldLine)" stroke-width="5.2" stroke-linecap="round"/>
        <path d="M183 102l34-7-8 34" fill="none" stroke="url(#aquaLine)" stroke-width="4.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M94 186l25-23M118 208l27-26" fill="none" stroke="url(#aquaLine)" stroke-width="3.3" stroke-linecap="round" opacity=".68"/>
      </g>`);
  }

  function sceneRelations(){
    return sceneFrame(`
      <g filter="url(#softGlow)">
        <path d="M125 87c15 0 27 10 35 24 9-14 20-24 35-24 21 0 37 17 37 38 0 41-72 76-72 76s-72-35-72-76c0-21 16-38 37-38z" fill="rgba(250,238,190,.05)" stroke="url(#goldLine)" stroke-width="5" stroke-linejoin="round"/>
        <path d="M102 130h32M186 130h32M160 71v22" fill="none" stroke="url(#aquaLine)" stroke-width="3.4" stroke-linecap="round" opacity=".92"/>
        <path d="M122 171l20-13 18 11 18-19 22 16" fill="none" stroke="url(#aquaLine)" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="143" cy="112" r="3.5" fill="#f7e3a4"/><circle cx="177" cy="112" r="3.5" fill="#f7e3a4"/>
      </g>`);
  }

  function sceneCommunity(){
    return sceneFrame(`
      <g filter="url(#softGlow)">
        <circle cx="160" cy="120" r="22" fill="rgba(250,238,190,.06)" stroke="url(#goldLine)" stroke-width="4"/>
        <circle cx="104" cy="83" r="18" fill="rgba(111,233,237,.06)" stroke="url(#aquaLine)" stroke-width="3.8"/>
        <circle cx="217" cy="83" r="18" fill="rgba(111,233,237,.06)" stroke="url(#aquaLine)" stroke-width="3.8"/>
        <circle cx="240" cy="164" r="18" fill="rgba(111,233,237,.06)" stroke="url(#aquaLine)" stroke-width="3.8"/>
        <circle cx="80" cy="164" r="18" fill="rgba(111,233,237,.06)" stroke="url(#aquaLine)" stroke-width="3.8"/>
        <path d="M120 92l22 15M200 92l-22 15M224 151l-35-18M96 151l35-18" fill="none" stroke="url(#goldLine)" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M104 65v-16M217 65v-16M240 182v16M80 182v16" fill="none" stroke="rgba(248,229,177,.76)" stroke-width="2.7" stroke-linecap="round"/>
      </g>`);
  }

  function sceneBeauty(){
    return sceneFrame(`
      <g filter="url(#softGlow)">
        <path d="M160 60c24 0 44 17 44 38 0 19-16 38-44 61-29-23-44-42-44-61 0-21 20-38 44-38z" fill="rgba(250,238,190,.05)" stroke="url(#goldLine)" stroke-width="5"/>
        <path d="M160 92c10 0 18 8 18 18 0 9-8 18-18 29-10-11-18-20-18-29 0-10 8-18 18-18z" fill="rgba(111,233,237,.12)" stroke="url(#aquaLine)" stroke-width="3.3"/>
        <path d="M112 182c18-13 34-19 48-19s30 6 48 19" fill="none" stroke="url(#aquaLine)" stroke-width="5.4" stroke-linecap="round"/>
        <path d="M133 150l12 12M187 150l-12 12M160 128v18" fill="none" stroke="url(#goldLine)" stroke-width="3.2" stroke-linecap="round" opacity=".85"/>
      </g>`);
  }

  function escapeHtml(value){
    return String(value).replace(/[&<>\"]/g, ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[ch]));
  }

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      body.${OPEN_CLASS}{overflow:hidden!important;touch-action:none!important}
      #directions .direction-grid{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:16px!important;align-items:stretch!important}
      #directions .direction-card.club999-direction-popup{position:relative!important;display:flex!important;flex-direction:column!important;justify-content:flex-end!important;min-height:0!important;aspect-ratio:1/1.06!important;padding:0!important;overflow:hidden!important;cursor:pointer!important;isolation:isolate!important;border-radius:24px!important;border:1px solid rgba(228,193,98,.28)!important;background:linear-gradient(180deg,rgba(6,50,61,.98),rgba(3,28,38,.995))!important;box-shadow:0 16px 30px rgba(0,10,18,.22),inset 0 1px 0 rgba(255,255,255,.07)!important;transition:transform .2s ease, box-shadow .2s ease, border-color .2s ease!important}
      #directions .direction-card.club999-direction-popup::before{content:'';position:absolute;inset:8px;border-radius:18px;border:1px solid rgba(247,224,161,.12);pointer-events:none;z-index:1}
      #directions .direction-card.club999-direction-popup::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 22% 14%,rgba(118,237,241,.18),transparent 28%),radial-gradient(circle at 78% 14%,rgba(245,216,128,.16),transparent 22%),linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.05) 45%,rgba(0,0,0,.24) 100%);pointer-events:none;z-index:1}
      #directions .direction-card.club999-direction-popup:hover,
      #directions .direction-card.club999-direction-popup:focus-visible{transform:translateY(-2px)!important;border-color:rgba(240,209,116,.42)!important;box-shadow:0 20px 38px rgba(0,10,18,.26),0 0 22px rgba(87,210,219,.08),inset 0 1px 0 rgba(255,255,255,.09)!important;outline:none!important}
      #directions .direction-card.club999-direction-popup:active{transform:translateY(1px) scale(.993)!important}
      #directions .club999-direction-popup__plus{position:absolute;top:12px;right:12px;z-index:4;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;border:1px solid rgba(243,212,123,.78);background:linear-gradient(180deg,rgba(246,220,141,.2),rgba(8,47,58,.8));box-shadow:0 0 14px rgba(243,212,123,.18),inset 0 1px 0 rgba(255,255,255,.12);pointer-events:none}
      #directions .club999-direction-popup__plus::before,
      #directions .club999-direction-popup__plus::after{content:'';position:absolute;width:12px;height:1.6px;border-radius:999px;background:#f7e5af;box-shadow:0 0 10px rgba(243,212,123,.48)}
      #directions .club999-direction-popup__plus::after{transform:rotate(90deg)}
      #directions .club999-direction-popup__art{position:absolute;inset:0;z-index:0;pointer-events:none}
      #directions .club999-direction-popup__art svg{display:block;width:100%;height:100%}
      #directions .club999-direction-popup__copy{position:relative;z-index:3;display:flex;flex-direction:column;gap:6px;margin:0 10px 10px;padding:14px 14px 13px;border-radius:18px;background:linear-gradient(180deg,rgba(5,34,42,.18),rgba(3,23,30,.56));backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
      #directions .club999-direction-popup__name{margin:0!important;color:#f6e4ad!important;font-family:Georgia,"Times New Roman",serif!important;font-size:clamp(22px,2.1vw,28px)!important;line-height:1.02!important;letter-spacing:-.02em!important}
      #directions .club999-direction-popup__hint{margin:0!important;color:rgba(244,245,240,.8)!important;font-size:12px!important;line-height:1.3!important}
      #directions .direction-card.club999-direction-popup > .direction-card__top,
      #directions .direction-card.club999-direction-popup > h3,
      #directions .direction-card.club999-direction-popup > p,
      #directions .direction-card.club999-direction-popup > small{display:none!important}

      .club999-direction-popup-layer{position:fixed;inset:0;z-index:1200;display:flex;align-items:flex-end;justify-content:center;padding:14px;opacity:0;pointer-events:none;transition:opacity .2s ease}
      .club999-direction-popup-layer.is-open{opacity:1;pointer-events:auto}
      .club999-direction-popup-layer__backdrop{position:absolute;inset:0;border:0;background:rgba(2,13,20,.66);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
      .club999-direction-popup-sheet{position:relative;z-index:1;width:min(720px,100%);max-height:min(calc(100dvh - 28px),880px);display:flex;flex-direction:column;overflow:hidden;border-radius:28px;border:1px solid rgba(229,193,101,.26);background:radial-gradient(circle at 20% 10%,rgba(97,225,227,.12),transparent 24%),radial-gradient(circle at 84% 12%,rgba(240,214,138,.1),transparent 20%),linear-gradient(180deg,rgba(8,59,70,.985),rgba(4,34,44,.994) 56%,rgba(2,19,27,.997));box-shadow:0 34px 80px rgba(0,6,12,.5),inset 0 1px 0 rgba(255,255,255,.08)}
      .club999-direction-popup-sheet::before{content:'';position:absolute;inset:10px;border-radius:22px;border:1px solid rgba(247,224,161,.12);pointer-events:none}
      .club999-direction-popup-sheet__close{position:absolute;top:12px;right:12px;z-index:4;width:34px;height:34px;border-radius:50%;border:1px solid rgba(242,212,118,.4);background:rgba(4,34,43,.5);color:#f5dda0;font-size:19px;line-height:1;cursor:pointer;box-shadow:inset 0 1px 0 rgba(255,255,255,.06)}
      .club999-direction-popup-sheet__content{position:relative;z-index:2;display:flex;flex:1 1 auto;flex-direction:column;min-height:0;overflow:hidden;padding:24px 22px max(18px,env(safe-area-inset-bottom))}
      .club999-direction-popup-sheet__eyebrow{margin:0 0 10px;color:#d8b96a;font-size:10px;font-weight:800;letter-spacing:.2em;text-transform:uppercase}
      .club999-direction-popup-sheet__title{margin:0;color:#f6e4ad;font-family:Georgia,"Times New Roman",serif;font-size:clamp(30px,4vw,42px);line-height:1.04;letter-spacing:-.02em;max-width:90%}
      .club999-direction-popup-sheet__body{min-height:0;margin-top:14px;padding-right:6px;overflow:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;color:rgba(247,245,238,.94)}
      .club999-direction-popup-sheet__body p{margin:0 0 14px;font-size:16px;line-height:1.58;color:rgba(247,245,238,.94)}
      .club999-direction-popup-sheet__chips{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 16px}
      .club999-direction-popup-sheet__chip{display:inline-flex;align-items:center;min-height:30px;padding:6px 11px;border-radius:999px;border:1px solid rgba(248,225,160,.14);background:rgba(255,255,255,.04);color:rgba(255,255,255,.92);font-size:12.5px;line-height:1.2}
      .club999-direction-popup-sheet__note{padding:15px 15px 16px;border-radius:18px;border:1px solid rgba(241,213,123,.14);background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.012)),rgba(3,26,34,.38);box-shadow:inset 0 1px 0 rgba(255,255,255,.05)}
      .club999-direction-popup-sheet__note strong{display:block;margin-bottom:6px;color:#f6e4ad;font-size:14px;line-height:1.3}
      .club999-direction-popup-sheet__note p{margin:0;font-size:14px;line-height:1.5;color:rgba(247,245,238,.84)}
      .club999-direction-popup-sheet__actions{display:flex;justify-content:center;padding:15px 0 2px}
      .club999-direction-popup-sheet__actions .club999-direction-popup-sheet__close-button{appearance:none;-webkit-appearance:none;min-width:96px;height:34px;padding:0 16px;border:1px solid rgba(235,198,100,.6);border-radius:999px;background:linear-gradient(180deg,rgba(244,213,128,.14),rgba(6,48,57,.9));color:#f5dda0;font:700 11.5px/1 Arial,sans-serif;letter-spacing:.01em;box-shadow:0 0 12px rgba(224,181,75,.1),inset 0 1px 0 rgba(255,255,255,.08);cursor:pointer}
      .club999-direction-popup-sheet__actions .club999-direction-popup-sheet__close-button:active{transform:scale(.97)}

      @media(max-width:700px){
        #directions .direction-grid{gap:12px!important}
        #directions .direction-card.club999-direction-popup{aspect-ratio:1/1.14!important;border-radius:20px!important}
        #directions .direction-card.club999-direction-popup::before{inset:7px;border-radius:15px}
        #directions .club999-direction-popup__plus{top:10px;right:10px;width:31px;height:31px}
        #directions .club999-direction-popup__plus::before,
        #directions .club999-direction-popup__plus::after{width:11px}
        #directions .club999-direction-popup__copy{margin:0 8px 8px;padding:11px 11px 10px;border-radius:15px}
        #directions .club999-direction-popup__name{font-size:19px!important}
        #directions .club999-direction-popup__hint{font-size:10.8px!important}

        .club999-direction-popup-layer{padding:10px}
        .club999-direction-popup-sheet{width:100%;max-height:calc(100dvh - 10px);border-radius:24px}
        .club999-direction-popup-sheet::before{inset:8px;border-radius:18px}
        .club999-direction-popup-sheet__close{top:10px;right:10px;width:31px;height:31px;font-size:17px}
        .club999-direction-popup-sheet__content{padding:20px 18px max(16px,env(safe-area-inset-bottom))}
        .club999-direction-popup-sheet__eyebrow{margin-bottom:8px;font-size:9px}
        .club999-direction-popup-sheet__title{font-size:28px;max-width:88%}
        .club999-direction-popup-sheet__body{margin-top:12px}
        .club999-direction-popup-sheet__body p{font-size:15px;line-height:1.52}
        .club999-direction-popup-sheet__chip{font-size:12px}
        .club999-direction-popup-sheet__actions{padding-top:14px}
        .club999-direction-popup-sheet__actions .club999-direction-popup-sheet__close-button{min-width:92px;height:32px;padding:0 15px;font-size:11px}
      }
      @media(max-width:390px){
        #directions .direction-grid{gap:10px!important}
        #directions .direction-card.club999-direction-popup{aspect-ratio:1/1.18!important;border-radius:18px!important}
        #directions .club999-direction-popup__name{font-size:17px!important}
        #directions .club999-direction-popup__hint{font-size:10.2px!important}
        .club999-direction-popup-sheet__title{font-size:26px}
        .club999-direction-popup-sheet__body p{font-size:14.5px}
      }
    `;
    document.head.appendChild(style);
  }

  function parseCard(card){
    const title=card.querySelector('h3')?.textContent?.trim()||'';
    const description=card.querySelector('p')?.textContent?.trim()||'';
    const keywords=(card.querySelector('small')?.textContent||'').split('·').map(item=>item.trim()).filter(Boolean);
    return {title,description,keywords,theme:cardThemes[title]||'body',art:(artByTitle[title]||sceneBody)()};
  }

  function upgradeCards(cardsData){
    const cards=[...document.querySelectorAll('#directions .direction-grid .direction-card')];
    cards.forEach((card,index)=>{
      const data=cardsData[index];
      if(!data) return;
      card.classList.add('club999-direction-popup');
      card.setAttribute('role','button');
      card.setAttribute('tabindex','0');
      card.setAttribute('aria-haspopup','dialog');
      card.setAttribute('aria-label',`${data.title}. Нажмите, чтобы открыть описание направления.`);
      card.dataset.directionPopupIndex=String(index);
      card.dataset.directionTheme=data.theme;
      card.innerHTML=`<span class="club999-direction-popup__plus" aria-hidden="true"></span><div class="club999-direction-popup__art" aria-hidden="true">${data.art}</div><div class="club999-direction-popup__copy"><h3 class="club999-direction-popup__name">${escapeHtml(data.title)}</h3><p class="club999-direction-popup__hint">Нажмите, чтобы посмотреть подробнее</p></div>`;
    });
  }

  function buildPopup(){
    if(document.getElementById(POPUP_ID)) return document.getElementById(POPUP_ID);
    const layer=document.createElement('div');
    layer.id=POPUP_ID;
    layer.className='club999-direction-popup-layer';
    layer.setAttribute('aria-hidden','true');
    layer.innerHTML=`
      <button class="club999-direction-popup-layer__backdrop" type="button" aria-label="Закрыть окно"></button>
      <div class="club999-direction-popup-sheet" role="dialog" aria-modal="true" aria-labelledby="club999DirectionsPopupTitle">
        <button class="club999-direction-popup-sheet__close" type="button" aria-label="Закрыть">×</button>
        <div class="club999-direction-popup-sheet__content">
          <div class="club999-direction-popup-sheet__eyebrow">НАПРАВЛЕНИЕ</div>
          <h3 class="club999-direction-popup-sheet__title" id="club999DirectionsPopupTitle"></h3>
          <div class="club999-direction-popup-sheet__body" id="club999DirectionsPopupBody"></div>
          <div class="club999-direction-popup-sheet__actions">
            <button class="club999-direction-popup-sheet__close-button" type="button" data-direction-close>Закрыть</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(layer);
    return layer;
  }

  function setScrollLock(locked){
    document.body.classList.toggle(OPEN_CLASS, locked);
    document.body.classList.toggle('modal-open', locked);
    try{ window.NotibotIntegration?.setScrollLock?.(locked); }catch(_){ }
  }

  function renderPopupBody(data){
    const chips=data.keywords.map(item=>`<span class="club999-direction-popup-sheet__chip">${escapeHtml(item)}</span>`).join('');
    return `
      <p>${escapeHtml(data.description)}</p>
      <div class="club999-direction-popup-sheet__chips">${chips}</div>
      <div class="club999-direction-popup-sheet__note">
        <strong>Внутри можно начать с того, что откликается именно сейчас</strong>
        <p>В этом направлении вы сможете находить материалы, экспертов и эфиры по теме, а затем выбирать то, что хочется внедрить в свою жизнь дальше.</p>
      </div>`;
  }

  function install(cardsData){
    addStyle();
    upgradeCards(cardsData);
    const popup=buildPopup();
    const titleNode=popup.querySelector('#club999DirectionsPopupTitle');
    const bodyNode=popup.querySelector('#club999DirectionsPopupBody');
    const closeButtons=popup.querySelectorAll('.club999-direction-popup-sheet__close, .club999-direction-popup-layer__backdrop, [data-direction-close]');
    let lastTrigger=null;

    function openPopup(index){
      const data=cardsData[index];
      if(!data) return;
      lastTrigger=document.querySelector(`[data-direction-popup-index="${index}"]`);
      titleNode.textContent=data.title;
      bodyNode.innerHTML=renderPopupBody(data);
      popup.classList.add('is-open');
      popup.setAttribute('aria-hidden','false');
      setScrollLock(true);
      requestAnimationFrame(()=>popup.querySelector('.club999-direction-popup-sheet__close')?.focus());
    }

    function closePopup(){
      popup.classList.remove('is-open');
      popup.setAttribute('aria-hidden','true');
      setScrollLock(false);
      lastTrigger?.focus?.();
    }

    document.querySelectorAll('#directions [data-direction-popup-index]').forEach(card=>{
      const open=()=>openPopup(Number(card.dataset.directionPopupIndex));
      card.addEventListener('click',open);
      card.addEventListener('keydown',event=>{
        if(event.key==='Enter' || event.key===' '){
          event.preventDefault();
          open();
        }
      });
    });

    closeButtons.forEach(button=>button.addEventListener('click',closePopup));
    window.addEventListener('keydown',event=>{
      if(event.key==='Escape' && popup.classList.contains('is-open')) closePopup();
    });
  }

  function init(){
    const cards=[...document.querySelectorAll('#directions .direction-grid .direction-card')];
    if(cards.length!==6) return false;
    const cardsData=cards.map(parseCard);
    install(cardsData);
    return true;
  }

  if(!init()){
    let attempts=0;
    const timer=setInterval(()=>{
      attempts+=1;
      if(init() || attempts>=40) clearInterval(timer);
    },150);
  }
})();