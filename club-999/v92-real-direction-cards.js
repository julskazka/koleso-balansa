(()=>{
  const STYLE_ID='club999-real-direction-cards-v92';
  const parts=[
    './assets/directions-v92-b64-01.txt',
    './assets/directions-v92-b64-02.txt',
    './assets/directions-v92-b64-03.txt',
    './assets/directions-v92-b64-04.txt',
    './assets/directions-v92-b64-05.txt',
    './assets/directions-v92-b64-06.txt'
  ];
  const map={
    'Тело':'body',
    'Энергия':'energy',
    'Дело':'work',
    'Отношения':'relations',
    'Окружение':'community',
    'Красота':'beauty'
  };

  function addStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      #directions .direction-grid{
        display:grid!important;
        grid-template-columns:repeat(2,minmax(0,1fr))!important;
        gap:16px!important;
      }
      #directions .direction-card.club999-direction-popup.v92-real-card{
        position:relative!important;
        display:flex!important;
        flex-direction:column!important;
        justify-content:flex-end!important;
        aspect-ratio:4/3!important;
        min-height:0!important;
        padding:0!important;
        overflow:hidden!important;
        isolation:isolate!important;
        border:1px solid rgba(226,188,96,.30)!important;
        border-radius:22px!important;
        background:#012a34!important;
        box-shadow:0 16px 34px rgba(0,9,17,.28),0 0 22px rgba(44,162,182,.08),inset 0 1px 0 rgba(255,255,255,.05)!important;
      }
      #directions .direction-card.club999-direction-popup.v92-real-card::before{
        content:''!important;
        display:block!important;
        position:absolute!important;
        inset:7px!important;
        z-index:3!important;
        border:1px solid rgba(247,220,143,.16)!important;
        border-radius:16px!important;
        pointer-events:none!important;
      }
      #directions .direction-card.club999-direction-popup.v92-real-card::after{
        content:''!important;
        display:block!important;
        position:absolute!important;
        inset:0!important;
        z-index:2!important;
        pointer-events:none!important;
        background:linear-gradient(180deg,rgba(1,18,25,0) 45%,rgba(1,18,25,.05) 58%,rgba(1,15,22,.88) 100%)!important;
      }
      #directions .v92-card-picture{
        position:absolute!important;
        inset:0!important;
        z-index:1!important;
        display:block!important;
        width:100%!important;
        height:100%!important;
        border-radius:inherit!important;
        background-repeat:no-repeat!important;
        background-size:200% auto!important;
        background-color:#012a34!important;
        pointer-events:none!important;
      }
      #directions .v92-real-card[data-direction-theme="body"] .v92-card-picture{background-position:0 0!important}
      #directions .v92-real-card[data-direction-theme="energy"] .v92-card-picture{background-position:100% 0!important}
      #directions .v92-real-card[data-direction-theme="work"] .v92-card-picture{background-position:0 44.444%!important}
      #directions .v92-real-card[data-direction-theme="relations"] .v92-card-picture{background-position:100% 44.444%!important}
      #directions .v92-real-card[data-direction-theme="community"] .v92-card-picture{background-position:0 88.889%!important}
      #directions .v92-real-card[data-direction-theme="beauty"] .v92-card-picture{background-position:100% 88.889%!important}
      #directions .v92-card-copy{
        position:relative!important;
        z-index:4!important;
        margin:0!important;
        padding:18px 16px 15px!important;
        background:transparent!important;
      }
      #directions .v92-card-title{
        margin:0!important;
        color:#f8e2a3!important;
        font-family:Georgia,'Times New Roman',serif!important;
        font-size:clamp(24px,2.3vw,31px)!important;
        line-height:1.02!important;
        letter-spacing:-.02em!important;
        text-shadow:0 2px 12px rgba(0,0,0,.92),0 0 19px rgba(229,189,82,.20)!important;
      }
      #directions .club999-direction-popup__plus{
        position:absolute!important;
        top:13px!important;
        right:13px!important;
        z-index:5!important;
        display:grid!important;
        place-items:center!important;
        width:32px!important;
        height:32px!important;
        border:1px solid rgba(247,220,143,.90)!important;
        border-radius:50%!important;
        background:rgba(2,33,43,.72)!important;
        box-shadow:0 0 0 3px rgba(239,203,111,.05),0 0 17px rgba(239,203,111,.29),inset 0 1px 0 rgba(255,255,255,.12)!important;
        backdrop-filter:blur(8px)!important;
        -webkit-backdrop-filter:blur(8px)!important;
        pointer-events:none!important;
      }
      #directions .club999-direction-popup__plus::before,
      #directions .club999-direction-popup__plus::after{
        content:''!important;
        position:absolute!important;
        width:11px!important;
        height:1.5px!important;
        border-radius:999px!important;
        background:#f7e5af!important;
        box-shadow:0 0 9px rgba(243,212,123,.48)!important;
      }
      #directions .club999-direction-popup__plus::after{transform:rotate(90deg)!important}
      .club999-direction-popup-sheet__hero,
      #club999DirectionsPopupArt,
      [data-direction-join]{display:none!important}
      .club999-direction-popup-sheet__actions{justify-content:center!important;padding-top:12px!important}
      .club999-direction-popup-sheet__actions .club999-direction-popup-sheet__close-button{
        min-width:78px!important;
        height:28px!important;
        padding:0 12px!important;
        border:1px solid rgba(235,198,100,.48)!important;
        border-radius:999px!important;
        background:linear-gradient(180deg,rgba(244,213,128,.08),rgba(6,48,57,.80))!important;
        color:#f5dda0!important;
        font:700 10px/1 Arial,sans-serif!important;
        box-shadow:0 0 8px rgba(224,181,75,.06),inset 0 1px 0 rgba(255,255,255,.05)!important;
      }
      .club999-direction-popup-sheet__close{
        width:29px!important;
        height:29px!important;
        font-size:15px!important;
        border-color:rgba(242,212,118,.32)!important;
      }
      @media(max-width:700px){
        #directions .direction-grid{gap:10px!important}
        #directions .direction-card.club999-direction-popup.v92-real-card{aspect-ratio:1/1!important;border-radius:18px!important}
        #directions .v92-card-picture{background-size:200% 300%!important}
        #directions .v92-real-card[data-direction-theme="work"] .v92-card-picture{background-position:0 50%!important}
        #directions .v92-real-card[data-direction-theme="relations"] .v92-card-picture{background-position:100% 50%!important}
        #directions .v92-real-card[data-direction-theme="community"] .v92-card-picture{background-position:0 100%!important}
        #directions .v92-real-card[data-direction-theme="beauty"] .v92-card-picture{background-position:100% 100%!important}
        #directions .direction-card.club999-direction-popup.v92-real-card::before{inset:6px!important;border-radius:13px!important}
        #directions .v92-card-copy{padding:13px 11px 11px!important}
        #directions .v92-card-title{font-size:18px!important}
        #directions .club999-direction-popup__plus{top:9px!important;right:9px!important;width:29px!important;height:29px!important}
      }
      @media(max-width:390px){
        #directions .direction-grid{gap:8px!important}
        #directions .v92-card-copy{padding:11px 10px 10px!important}
        #directions .v92-card-title{font-size:16.5px!important}
        #directions .club999-direction-popup__plus{width:27px!important;height:27px!important}
      }
    `;
    document.head.appendChild(style);
  }

  async function loadSprite(){
    const chunks=await Promise.all(parts.map(async path=>{
      const response=await fetch(path+'?v=92',{cache:'no-store'});
      if(!response.ok) throw new Error('Не загрузился '+path);
      return (await response.text()).trim();
    }));
    return 'data:image/webp;base64,'+chunks.join('');
  }

  function apply(sprite){
    addStyle();
    const cards=[...document.querySelectorAll('#directions .direction-card.club999-direction-popup')];
    if(cards.length!==6) return false;
    let ready=0;
    cards.forEach(card=>{
      const title=(card.querySelector('.club999-direction-popup__name')||card.querySelector('.v90-card-title')||card.querySelector('h3'))?.textContent?.trim();
      const theme=map[title];
      if(!theme) return;
      card.classList.remove('v90-real-card','v91-real-card');
      card.classList.add('v92-real-card');
      card.dataset.directionTheme=theme;
      card.innerHTML=`<span class="v92-card-picture" aria-hidden="true"></span><span class="club999-direction-popup__plus" aria-hidden="true"></span><div class="v92-card-copy"><h3 class="v92-card-title">${title}</h3></div>`;
      const picture=card.querySelector('.v92-card-picture');
      picture.style.setProperty('background-image',`url("${sprite}")`,'important');
      ready+=1;
    });
    return ready===6;
  }

  async function init(){
    try{
      const sprite=await loadSprite();
      let tries=0;
      if(apply(sprite)) return;
      const timer=setInterval(()=>{
        tries+=1;
        if(apply(sprite)||tries>=60) clearInterval(timer);
      },100);
    }catch(error){
      console.error('Direction cards artwork failed',error);
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
