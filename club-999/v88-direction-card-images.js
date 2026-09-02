(()=>{
  const STYLE_ID='club999-direction-art-v88';
  const SPRITE='/koleso-balansa/club-999/assets/directions-v87.webp?v=88';
  const positions={
    'Тело':['0','0'],
    'Энергия':['-100%','0'],
    'Дело':['0','-100%'],
    'Отношения':['-100%','-100%'],
    'Окружение':['0','-200%'],
    'Красота':['-100%','-200%']
  };

  function addStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      #directions .direction-card.club999-direction-popup{
        aspect-ratio:1/1!important;
        padding:0!important;
        overflow:hidden!important;
        border:0!important;
        border-radius:24px!important;
        background:#032b35!important;
        box-shadow:0 16px 34px rgba(0,9,17,.28),0 0 22px rgba(71,204,215,.08)!important;
      }
      #directions .direction-card.club999-direction-popup::before{display:none!important;content:none!important}
      #directions .direction-card.club999-direction-popup::after{
        content:''!important;
        display:block!important;
        position:absolute!important;
        inset:0!important;
        z-index:2!important;
        pointer-events:none!important;
        background:linear-gradient(180deg,rgba(1,18,25,0) 48%,rgba(1,18,25,.10) 60%,rgba(1,15,22,.82) 100%)!important;
      }
      #directions .club999-direction-popup__art{
        position:absolute!important;
        inset:0!important;
        z-index:1!important;
        width:100%!important;
        height:100%!important;
        overflow:hidden!important;
        pointer-events:none!important;
        background:none!important;
      }
      #directions .club999-direction-popup__art svg{display:none!important}
      #directions .club999-direction-popup__art .club999-direction-sprite-v88{
        position:absolute!important;
        width:200%!important;
        height:300%!important;
        max-width:none!important;
        display:block!important;
        object-fit:fill!important;
        user-select:none!important;
        -webkit-user-drag:none!important;
      }
      #directions .club999-direction-popup__copy{
        position:relative!important;
        z-index:3!important;
        margin:0!important;
        padding:18px 18px 16px!important;
        border-radius:0!important;
        background:transparent!important;
        backdrop-filter:none!important;
        -webkit-backdrop-filter:none!important;
      }
      #directions .club999-direction-popup__name{
        margin:0!important;
        color:#f8e2a3!important;
        font-family:Georgia,'Times New Roman',serif!important;
        font-size:clamp(24px,2.3vw,31px)!important;
        line-height:1.02!important;
        letter-spacing:-.02em!important;
        text-shadow:0 2px 11px rgba(0,0,0,.82),0 0 20px rgba(229,189,82,.18)!important;
      }
      #directions .club999-direction-popup__hint{display:none!important}
      #directions .club999-direction-popup__plus{
        top:14px!important;
        right:14px!important;
        width:34px!important;
        height:34px!important;
        border:1px solid rgba(247,220,143,.9)!important;
        background:rgba(2,33,43,.72)!important;
        box-shadow:0 0 0 3px rgba(239,203,111,.06),0 0 18px rgba(239,203,111,.3),inset 0 1px 0 rgba(255,255,255,.12)!important;
        backdrop-filter:blur(8px)!important;
        -webkit-backdrop-filter:blur(8px)!important;
      }
      .club999-direction-popup-sheet__hero,
      #club999DirectionsPopupArt,
      [data-direction-join]{display:none!important}
      .club999-direction-popup-sheet__actions{justify-content:center!important;padding-top:14px!important}
      .club999-direction-popup-sheet__actions .club999-direction-popup-sheet__close-button{
        min-width:82px!important;
        height:29px!important;
        padding:0 13px!important;
        border:1px solid rgba(235,198,100,.52)!important;
        border-radius:999px!important;
        background:linear-gradient(180deg,rgba(244,213,128,.1),rgba(6,48,57,.82))!important;
        color:#f5dda0!important;
        font:700 10.5px/1 Arial,sans-serif!important;
        box-shadow:0 0 9px rgba(224,181,75,.07),inset 0 1px 0 rgba(255,255,255,.05)!important;
      }
      .club999-direction-popup-sheet__close{
        width:30px!important;
        height:30px!important;
        font-size:16px!important;
        border-color:rgba(242,212,118,.34)!important;
      }
      @media(max-width:700px){
        #directions .direction-grid{gap:10px!important}
        #directions .direction-card.club999-direction-popup{aspect-ratio:1/1!important;border-radius:18px!important}
        #directions .club999-direction-popup__copy{padding:13px 12px 11px!important}
        #directions .club999-direction-popup__name{font-size:18px!important}
        #directions .club999-direction-popup__plus{top:9px!important;right:9px!important;width:30px!important;height:30px!important}
      }
      @media(max-width:390px){
        #directions .direction-grid{gap:8px!important}
        #directions .club999-direction-popup__copy{padding:11px 10px 10px!important}
        #directions .club999-direction-popup__name{font-size:16.5px!important}
        #directions .club999-direction-popup__plus{width:28px!important;height:28px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function paint(){
    addStyle();
    const cards=[...document.querySelectorAll('#directions .direction-card.club999-direction-popup')];
    if(cards.length!==6) return false;
    let painted=0;
    cards.forEach(card=>{
      const title=card.querySelector('.club999-direction-popup__name')?.textContent?.trim();
      const art=card.querySelector('.club999-direction-popup__art');
      const pos=positions[title];
      if(!art || !pos) return;
      let img=art.querySelector('.club999-direction-sprite-v88');
      if(!img){
        art.innerHTML='';
        img=document.createElement('img');
        img.className='club999-direction-sprite-v88';
        img.alt='';
        img.setAttribute('aria-hidden','true');
        img.decoding='async';
        img.src=SPRITE;
        art.appendChild(img);
      }
      img.style.left=pos[0];
      img.style.top=pos[1];
      painted+=1;
    });
    return painted===6;
  }

  function init(){
    let tries=0;
    const run=()=>{tries+=1;return paint()||tries>=50};
    if(run()) return;
    const timer=setInterval(()=>{if(run()) clearInterval(timer)},120);
    const observer=new MutationObserver(()=>requestAnimationFrame(paint));
    observer.observe(document.documentElement,{childList:true,subtree:true});
    setTimeout(()=>observer.disconnect(),8000);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();