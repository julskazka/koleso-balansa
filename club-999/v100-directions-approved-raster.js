(()=>{
  const STYLE_ID='club999-directions-approved-raster-v100';
  const PARTS=[
    './assets/v100/p01.txt',
    './assets/v100/p02.txt',
    './assets/v100/p03.txt',
    './assets/v100/p04.txt',
    './assets/v100/p05.txt',
    './assets/v100/p06.txt',
    './assets/v100/p07.txt',
    './assets/v100/p08.txt',
    './assets/v100/p09.txt',
    './assets/v100/p10.txt'
  ];
  const OLD_STYLE_IDS=[
    'club999-directions-jewelry-v99',
    'club999-directions-luxe-art-v98',
    'club999-directions-luxe-svg-v97',
    'club999-directions-polish-v95',
    'club999-directions-polish-v96'
  ];

  function addStyle(){
    document.getElementById(STYLE_ID)?.remove();
    OLD_STYLE_IDS.forEach(id=>document.getElementById(id)?.remove());
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      #directions .direction-card.club999-direction-popup.v92-real-card{
        border:2px solid rgba(241,190,76,.98)!important;
        background:#011922!important;
        box-shadow:
          0 0 0 1px rgba(255,240,190,.18),
          0 0 10px rgba(255,193,62,.48),
          0 0 24px rgba(218,151,29,.20),
          0 14px 30px rgba(0,7,12,.34),
          inset 0 0 14px rgba(255,198,76,.06)!important;
      }
      #directions .direction-card.club999-direction-popup.v92-real-card::before{
        display:block!important;
        content:''!important;
        position:absolute!important;
        inset:6px!important;
        z-index:4!important;
        border:1px solid rgba(255,226,139,.82)!important;
        border-radius:16px!important;
        box-shadow:
          0 0 8px rgba(255,198,69,.30),
          inset 0 0 7px rgba(255,209,91,.10)!important;
        pointer-events:none!important;
      }
      #directions .direction-card.club999-direction-popup.v92-real-card::after{
        display:block!important;
        content:''!important;
        position:absolute!important;
        inset:0!important;
        z-index:2!important;
        pointer-events:none!important;
        background:linear-gradient(180deg,rgba(0,8,13,0) 62%,rgba(0,8,13,.10) 76%,rgba(0,7,11,.66) 100%)!important;
      }
      #directions .v92-card-picture{
        position:absolute!important;
        inset:0!important;
        z-index:1!important;
        display:block!important;
        width:100%!important;
        height:100%!important;
        border-radius:inherit!important;
        overflow:hidden!important;
        background-repeat:no-repeat!important;
        background-size:200% 300%!important;
        background-color:#011922!important;
        filter:none!important;
        transform:none!important;
        opacity:1!important;
        visibility:visible!important;
        pointer-events:none!important;
      }
      #directions .v92-card-picture::before,
      #directions .v92-card-picture::after{display:none!important;content:none!important}
      #directions .v92-card-picture > *{display:none!important}
      #directions .v92-real-card[data-direction-theme="body"] .v92-card-picture{background-position:0 0!important}
      #directions .v92-real-card[data-direction-theme="energy"] .v92-card-picture{background-position:100% 0!important}
      #directions .v92-real-card[data-direction-theme="work"] .v92-card-picture{background-position:0 50%!important}
      #directions .v92-real-card[data-direction-theme="relations"] .v92-card-picture{background-position:100% 50%!important}
      #directions .v92-real-card[data-direction-theme="community"] .v92-card-picture{background-position:0 100%!important}
      #directions .v92-real-card[data-direction-theme="beauty"] .v92-card-picture{background-position:100% 100%!important}
      #directions .v92-card-copy{z-index:5!important}
      #directions .v92-card-title{
        color:#ffe5a4!important;
        text-shadow:0 2px 9px rgba(0,0,0,.98),0 0 8px rgba(255,200,72,.40)!important;
      }
      #directions .club999-direction-popup__plus{
        z-index:6!important;
        border-color:rgba(248,207,105,.98)!important;
        background:rgba(2,31,39,.74)!important;
        box-shadow:
          0 0 0 1px rgba(255,239,176,.16),
          0 0 12px rgba(255,196,65,.43),
          inset 0 1px 0 rgba(255,255,255,.14)!important;
      }
      @media(max-width:700px){
        #directions .direction-card.club999-direction-popup.v92-real-card::before{
          inset:5px!important;
          border-radius:13px!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  async function loadSprite(){
    const chunks=await Promise.all(PARTS.map(async path=>{
      const response=await fetch(path+'?v=100',{cache:'no-store'});
      if(!response.ok) throw new Error('Не загрузился '+path);
      return (await response.text()).trim();
    }));
    return 'data:image/webp;base64,'+chunks.join('');
  }

  function apply(sprite){
    addStyle();
    const cards=[...document.querySelectorAll('#directions .direction-card.club999-direction-popup.v92-real-card')];
    if(cards.length!==6) return false;
    let count=0;
    cards.forEach(card=>{
      const picture=card.querySelector('.v92-card-picture');
      if(!picture) return;
      picture.replaceChildren();
      picture.removeAttribute('style');
      picture.style.setProperty('background-image',`url("${sprite}")`,'important');
      card.dataset.v100='approved-raster';
      count+=1;
    });
    return count===6;
  }

  async function init(){
    try{
      const sprite=await loadSprite();
      let tries=0;
      const paint=()=>{
        tries+=1;
        const done=apply(sprite);
        if(done && tries>=4) clearInterval(timer);
        if(tries>=18) clearInterval(timer);
      };
      const timer=setInterval(paint,250);
      paint();
      setTimeout(()=>apply(sprite),1200);
      setTimeout(()=>apply(sprite),2600);
    }catch(error){
      console.error('Direction v100 raster artwork failed',error);
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
