(()=>{
  const STYLE_ID='club999-real-direction-cards-v91';
  const SPRITE='data:image/webp;base64,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...';
  const map={
    'Тело':['body','0','0'],
    'Энергия':['energy','100%','0'],
    'Дело':['work','0','44.444%'],
    'Отношения':['relations','100%','44.444%'],
    'Окружение':['community','0','88.889%'],
    'Красота':['beauty','100%','88.889%']
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
      #directions .direction-card.club999-direction-popup.v91-real-card{
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
      #directions .direction-card.club999-direction-popup.v91-real-card::before{
        content:''!important;
        display:block!important;
        position:absolute!important;
        inset:7px!important;
        z-index:3!important;
        border:1px solid rgba(247,220,143,.16)!important;
        border-radius:16px!important;
        pointer-events:none!important;
      }
      #directions .direction-card.club999-direction-popup.v91-real-card::after{
        content:''!important;
        display:block!important;
        position:absolute!important;
        inset:0!important;
        z-index:2!important;
        pointer-events:none!important;
        background:linear-gradient(180deg,rgba(1,18,25,0) 45%,rgba(1,18,25,.05) 58%,rgba(1,15,22,.88) 100%)!important;
      }
      #directions .v91-card-picture{
        position:absolute!important;
        inset:0!important;
        z-index:1!important;
        display:block!important;
        width:100%!important;
        height:100%!important;
        border-radius:inherit!important;
        background-image:url("${SPRITE}")!important;
        background-repeat:no-repeat!important;
        background-size:200% auto!important;
        background-color:#012a34!important;
        pointer-events:none!important;
      }
      #directions .v91-real-card[data-direction-theme="body"] .v91-card-picture{background-position:0 0!important}
      #directions .v91-real-card[data-direction-theme="energy"] .v91-card-picture{background-position:100% 0!important}
      #directions .v91-real-card[data-direction-theme="work"] .v91-card-picture{background-position:0 44.444%!important}
      #directions .v91-real-card[data-direction-theme="relations"] .v91-card-picture{background-position:100% 44.444%!important}
      #directions .v91-real-card[data-direction-theme="community"] .v91-card-picture{background-position:0 88.889%!important}
      #directions .v91-real-card[data-direction-theme="beauty"] .v91-card-picture{background-position:100% 88.889%!important}
      #directions .v91-card-copy{
        position:relative!important;
        z-index:4!important;
        margin:0!important;
        padding:18px 16px 15px!important;
        background:transparent!important;
      }
      #directions .v91-card-title{
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
        #directions .direction-card.club999-direction-popup.v91-real-card{aspect-ratio:1/1!important;border-radius:18px!important}
        #directions .v91-card-picture{background-size:200% 300%!important}
        #directions .v91-real-card[data-direction-theme="work"] .v91-card-picture{background-position:0 50%!important}
        #directions .v91-real-card[data-direction-theme="relations"] .v91-card-picture{background-position:100% 50%!important}
        #directions .v91-real-card[data-direction-theme="community"] .v91-card-picture{background-position:0 100%!important}
        #directions .v91-real-card[data-direction-theme="beauty"] .v91-card-picture{background-position:100% 100%!important}
        #directions .direction-card.club999-direction-popup.v91-real-card::before{inset:6px!important;border-radius:13px!important}
        #directions .v91-card-copy{padding:13px 11px 11px!important}
        #directions .v91-card-title{font-size:18px!important}
        #directions .club999-direction-popup__plus{top:9px!important;right:9px!important;width:29px!important;height:29px!important}
      }
      @media(max-width:390px){
        #directions .direction-grid{gap:8px!important}
        #directions .v91-card-copy{padding:11px 10px 10px!important}
        #directions .v91-card-title{font-size:16.5px!important}
        #directions .club999-direction-popup__plus{width:27px!important;height:27px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function apply(){
    addStyle();
    const cards=[...document.querySelectorAll('#directions .direction-card.club999-direction-popup')];
    if(cards.length!==6) return false;
    let ready=0;
    cards.forEach(card=>{
      const title=(card.querySelector('.club999-direction-popup__name')||card.querySelector('.v90-card-title')||card.querySelector('h3'))?.textContent?.trim();
      const cfg=map[title];
      if(!cfg) return;
      card.classList.remove('v90-real-card');
      card.classList.add('v91-real-card');
      card.dataset.directionTheme=cfg[0];
      card.innerHTML=`<span class="v91-card-picture" aria-hidden="true"></span><span class="club999-direction-popup__plus" aria-hidden="true"></span><div class="v91-card-copy"><h3 class="v91-card-title">${title}</h3></div>`;
      ready+=1;
    });
    return ready===6;
  }

  function init(){
    let tries=0;
    if(apply()) return;
    const timer=setInterval(()=>{
      tries+=1;
      if(apply()||tries>=60) clearInterval(timer);
    },100);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
