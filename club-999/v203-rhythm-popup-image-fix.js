(()=>{
  const STYLE_ID='club999-v203-rhythm-popup-image-fix';
  const DIR_PARTS=[
    './assets/v100/p01.txt','./assets/v100/p02.txt','./assets/v100/p03.txt','./assets/v100/p04.txt','./assets/v100/p05.txt',
    './assets/v100/p06.txt','./assets/v100/p07.txt','./assets/v100/p08.txt','./assets/v100/p09.txt','./assets/v100/p10.txt'
  ];
  const set=(el,p,v)=>el&&el.style.setProperty(p,v,'important');
  let directionSprite='';

  function injectStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      /* v203 — tighter, consistent vertical rhythm */
      .section:not(.hero):not(.final){
        margin-top:0!important;
        margin-bottom:0!important;
        box-sizing:border-box!important;
      }
      @media(max-width:700px){
        .section:not(.hero):not(.final){
          padding-top:22px!important;
          padding-bottom:22px!important;
        }
        #directions.section,
        .directions.section#directions{
          padding-top:18px!important;
          padding-bottom:18px!important;
        }
        .club999-cross-section-v103,
        .club999-expert-section-v112{
          padding-top:18px!important;
          padding-bottom:20px!important;
        }
        .section:not(.hero):not(.final) .section-heading,
        .section:not(.hero):not(.final) .section-heading--split,
        .section:not(.hero):not(.final) .directions__heading,
        .section:not(.hero):not(.final) .audience__intro{
          margin-top:0!important;
          margin-bottom:18px!important;
        }
        .section:not(.hero):not(.final) .section-action{
          margin-top:18px!important;
        }
        .club999-expert-gallery-copy-v111{margin-top:11px!important}
      }
      @media(max-width:380px){
        .section:not(.hero):not(.final){
          padding-top:20px!important;
          padding-bottom:20px!important;
        }
        #directions.section,
        .directions.section#directions,
        .club999-cross-section-v103,
        .club999-expert-section-v112{
          padding-top:16px!important;
          padding-bottom:18px!important;
        }
      }
      @media(min-width:701px){
        .section:not(.hero):not(.final){
          padding-top:36px!important;
          padding-bottom:36px!important;
        }
        #directions.section,
        .directions.section#directions,
        .club999-cross-section-v103,
        .club999-expert-section-v112{
          padding-top:28px!important;
          padding-bottom:30px!important;
        }
        .section:not(.hero):not(.final) .section-heading,
        .section:not(.hero):not(.final) .section-heading--split,
        .section:not(.hero):not(.final) .directions__heading,
        .section:not(.hero):not(.final) .audience__intro{
          margin-top:0!important;
          margin-bottom:24px!important;
        }
      }

      /* Restore and hold direction-popup artwork; v92 used to hide it. */
      .club999-direction-popup-sheet__hero,
      #club999DirectionsPopupArt{
        display:block!important;
        visibility:visible!important;
        opacity:1!important;
      }
      .club999-v203-popup-art{
        position:relative!important;
        width:100%!important;
        aspect-ratio:16/8!important;
        flex:0 0 auto!important;
        margin:0 0 14px!important;
        overflow:hidden!important;
        border-radius:18px!important;
        border:1px solid rgba(239,204,104,.28)!important;
        background-color:#012a34!important;
        background-repeat:no-repeat!important;
        background-size:200% 300%!important;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.05),0 8px 20px rgba(0,10,18,.16)!important;
      }
      .club999-v203-popup-art::after{
        content:''!important;
        position:absolute!important;
        inset:0!important;
        pointer-events:none!important;
        background:linear-gradient(180deg,rgba(0,0,0,0) 62%,rgba(1,18,25,.22) 100%)!important;
      }
      .club999-v203-popup-art[data-theme="body"]{background-position:0 0!important}
      .club999-v203-popup-art[data-theme="energy"]{background-position:100% 0!important}
      .club999-v203-popup-art[data-theme="work"]{background-position:0 50%!important}
      .club999-v203-popup-art[data-theme="relations"]{background-position:100% 50%!important}
      .club999-v203-popup-art[data-theme="community"]{background-position:0 100%!important}
      .club999-v203-popup-art[data-theme="beauty"]{background-position:100% 100%!important}
      .club999-direction-popup-layer img,
      .modal img,
      [data-modal] img,
      [role="dialog"] img{
        visibility:visible!important;
        opacity:1!important;
        content-visibility:visible!important;
      }
      @media(max-width:700px){
        .club999-v203-popup-art{aspect-ratio:16/9!important;margin-bottom:12px!important;border-radius:15px!important}
      }
    `;
    document.head.appendChild(s);
  }

  function applyRhythm(){
    const w=Math.round(window.visualViewport?.width||document.documentElement.clientWidth||innerWidth||390);
    const v=w<=380?20:(w<=700?22:36);
    document.querySelectorAll('.section:not(.hero):not(.final)').forEach(section=>{
      if(section.closest('.modal,[role="dialog"]')) return;
      set(section,'margin-top','0');
      set(section,'margin-bottom','0');
      if(section.id==='directions'||section.classList.contains('club999-cross-section-v103')||section.classList.contains('club999-expert-section-v112')){
        const compact=w<=380?16:(w<=700?18:28);
        set(section,'padding-top',compact+'px');
        set(section,'padding-bottom',(compact+(w<=700?2:2))+'px');
      }else{
        set(section,'padding-top',v+'px');
        set(section,'padding-bottom',v+'px');
      }
    });
  }

  async function loadDirectionSprite(){
    if(directionSprite) return directionSprite;
    try{
      const chunks=await Promise.all(DIR_PARTS.map(async path=>{
        const r=await fetch(path+'?v=203',{cache:'force-cache'});
        if(!r.ok) throw new Error(path);
        return (await r.text()).trim();
      }));
      directionSprite='data:image/webp;base64,'+chunks.join('');
    }catch(error){
      console.error('v203 popup artwork preload failed',error);
    }
    return directionSprite;
  }

  function stabilizeImages(root=document){
    root.querySelectorAll?.('.club999-direction-popup-layer img,.modal img,[data-modal] img,[role="dialog"] img').forEach(img=>{
      const src=img.getAttribute('src');
      if(src&&!img.dataset.v203Src) img.dataset.v203Src=src;
      if(!src&&img.dataset.v203Src) img.setAttribute('src',img.dataset.v203Src);
      img.loading='eager';
      set(img,'display','block');
      set(img,'visibility','visible');
      set(img,'opacity','1');
      set(img,'content-visibility','visible');
    });
  }

  async function ensurePopupArt(theme){
    const popup=document.getElementById('club999DirectionsPopup');
    const content=popup?.querySelector('.club999-direction-popup-sheet__content');
    if(!popup||!content) return;
    let art=popup.querySelector('#club999DirectionsPopupArt');
    if(!art){
      art=document.createElement('div');
      art.id='club999DirectionsPopupArt';
      art.className='club999-direction-popup-sheet__hero club999-v203-popup-art';
      const eyebrow=content.querySelector('.club999-direction-popup-sheet__eyebrow');
      content.insertBefore(art,eyebrow||content.firstChild);
    }
    art.classList.add('club999-v203-popup-art');
    art.dataset.theme=theme||'body';
    const sprite=await loadDirectionSprite();
    if(sprite) set(art,'background-image',`url("${sprite}")`);
    set(art,'display','block');
    set(art,'visibility','visible');
    set(art,'opacity','1');
  }

  function installPopupGuard(){
    document.addEventListener('click',event=>{
      const card=event.target.closest?.('#directions .direction-card.club999-direction-popup');
      if(!card) return;
      const theme=card.dataset.directionTheme||'body';
      requestAnimationFrame(()=>ensurePopupArt(theme));
      setTimeout(()=>ensurePopupArt(theme),80);
      setTimeout(()=>ensurePopupArt(theme),350);
    },true);

    const obs=new MutationObserver(mutations=>{
      let popupTouched=false;
      mutations.forEach(m=>{
        const el=m.target.nodeType===1?m.target:m.target.parentElement;
        if(el?.closest?.('.club999-direction-popup-layer,.modal,[data-modal],[role="dialog"]')) popupTouched=true;
      });
      if(popupTouched){
        stabilizeImages(document);
        const popup=document.getElementById('club999DirectionsPopup');
        if(popup?.classList.contains('is-open')){
          const active=document.activeElement?.closest?.('#directions .direction-card.club999-direction-popup');
          const theme=active?.dataset.directionTheme||popup.querySelector('#club999DirectionsPopupArt')?.dataset.theme||'body';
          ensurePopupArt(theme);
        }
      }
    });
    obs.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['class','style','src','srcset']});
  }

  function apply(){
    injectStyle();
    applyRhythm();
    stabilizeImages(document);
  }

  let resizeTimer=0;
  const burst=()=>{
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [180,500,1100,2200,4200].forEach(ms=>setTimeout(apply,ms));
  };
  addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(burst,90)},{passive:true});
  if(window.visualViewport) visualViewport.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(burst,90)},{passive:true});

  installPopupGuard();
  loadDirectionSprite();
  burst();
})();
