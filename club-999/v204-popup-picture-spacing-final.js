(()=>{
  const STYLE_ID='club999-v204-popup-picture-spacing-final';
  const set=(el,p,v)=>el&&el.style.setProperty(p,v,'important');

  function injectStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      /* v204 — final vertical rhythm: no doubled section gaps */
      .section:not(.hero):not(.final){
        margin-top:0!important;
        margin-bottom:0!important;
        box-sizing:border-box!important;
      }
      @media(max-width:700px){
        .section:not(.hero):not(.final){
          padding-top:16px!important;
          padding-bottom:16px!important;
        }
        #directions.section,
        .directions.section#directions,
        .club999-cross-section-v103,
        .club999-expert-section-v112{
          padding-top:14px!important;
          padding-bottom:16px!important;
        }
        .section:not(.hero):not(.final) .section-heading,
        .section:not(.hero):not(.final) .section-heading--split,
        .section:not(.hero):not(.final) .directions__heading,
        .section:not(.hero):not(.final) .audience__intro{
          margin-top:0!important;
          margin-bottom:16px!important;
        }
        .section:not(.hero):not(.final) .section-action{margin-top:16px!important}

        .section.final{
          margin-top:0!important;
          margin-bottom:max(16px,env(safe-area-inset-bottom))!important;
          padding-top:28px!important;
          padding-bottom:24px!important;
        }
      }
      @media(max-width:380px){
        .section:not(.hero):not(.final){padding-top:14px!important;padding-bottom:14px!important}
        #directions.section,
        .directions.section#directions,
        .club999-cross-section-v103,
        .club999-expert-section-v112{padding-top:12px!important;padding-bottom:14px!important}
        .section.final{margin-bottom:max(14px,env(safe-area-inset-bottom))!important;padding-top:26px!important;padding-bottom:22px!important}
      }
      @media(min-width:701px){
        .section:not(.hero):not(.final){padding-top:28px!important;padding-bottom:28px!important}
        #directions.section,
        .directions.section#directions,
        .club999-cross-section-v103,
        .club999-expert-section-v112{padding-top:24px!important;padding-bottom:26px!important}
        .section:not(.hero):not(.final) .section-heading,
        .section:not(.hero):not(.final) .section-heading--split,
        .section:not(.hero):not(.final) .directions__heading,
        .section:not(.hero):not(.final) .audience__intro{margin-bottom:22px!important}
        .section.final{margin-bottom:24px!important;padding-bottom:34px!important}
      }

      /* Popup picture is a new element, so old v92 hide rules cannot target it. */
      .club999-v204-popup-picture{
        position:relative!important;
        display:block!important;
        width:100%!important;
        aspect-ratio:16/9!important;
        flex:0 0 auto!important;
        margin:14px 0 13px!important;
        overflow:hidden!important;
        border-radius:18px!important;
        border:1px solid rgba(239,204,104,.30)!important;
        background-color:#012a34!important;
        background-repeat:no-repeat!important;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.05),0 8px 20px rgba(0,10,18,.18)!important;
        visibility:visible!important;
        opacity:1!important;
      }
      .club999-v204-popup-picture::after{
        content:''!important;
        position:absolute!important;
        inset:0!important;
        pointer-events:none!important;
        background:linear-gradient(180deg,rgba(0,0,0,0) 64%,rgba(1,18,25,.20) 100%)!important;
      }
      .club999-v204-popup-picture>svg{
        display:block!important;
        width:100%!important;
        height:100%!important;
      }
      @media(max-width:700px){
        .club999-v204-popup-picture{margin:12px 0 11px!important;border-radius:15px!important;aspect-ratio:16/8.7!important}
      }
    `;
    document.head.appendChild(s);
  }

  function applyRhythm(){
    const w=Math.round(window.visualViewport?.width||document.documentElement.clientWidth||innerWidth||390);
    const regular=w<=380?14:(w<=700?16:28);
    const compact=w<=380?12:(w<=700?14:24);
    document.querySelectorAll('.section:not(.hero):not(.final)').forEach(section=>{
      if(section.closest('.modal,[role="dialog"]')) return;
      const isCompact=section.id==='directions'||section.classList.contains('club999-cross-section-v103')||section.classList.contains('club999-expert-section-v112');
      set(section,'margin-top','0');
      set(section,'margin-bottom','0');
      set(section,'padding-top',(isCompact?compact:regular)+'px');
      set(section,'padding-bottom',(isCompact?compact+2:regular)+'px');
    });

    document.querySelectorAll('.section.final').forEach(final=>{
      set(final,'margin-top','0');
      set(final,'margin-bottom',w<=380?'max(14px, env(safe-area-inset-bottom))':(w<=700?'max(16px, env(safe-area-inset-bottom))':'24px'));
      if(w<=380){set(final,'padding-top','26px');set(final,'padding-bottom','22px')}
      else if(w<=700){set(final,'padding-top','28px');set(final,'padding-bottom','24px')}
      else set(final,'padding-bottom','34px');
    });
  }

  function removeOldPopupArt(popup){
    popup?.querySelectorAll('#club999DirectionsPopupArt,.club999-v203-popup-art').forEach(el=>el.remove());
  }

  function sourcePicture(card){
    const own=card?.querySelector('.v92-card-picture');
    if(own){
      const cs=getComputedStyle(own);
      if(cs.backgroundImage && cs.backgroundImage!=='none') return {node:own,style:cs};
    }
    const any=[...document.querySelectorAll('#directions .v92-card-picture')].find(el=>{
      const cs=getComputedStyle(el);
      return cs.backgroundImage&&cs.backgroundImage!=='none';
    });
    return any?{node:any,style:getComputedStyle(any)}:null;
  }

  function ensurePopupPicture(card){
    const popup=document.getElementById('club999DirectionsPopup');
    if(!popup) return;
    removeOldPopupArt(popup);
    const content=popup.querySelector('.club999-direction-popup-sheet__content');
    const title=popup.querySelector('.club999-direction-popup-sheet__title');
    const body=popup.querySelector('.club999-direction-popup-sheet__body');
    if(!content||!body) return;

    let art=popup.querySelector('.club999-v204-popup-picture');
    if(!art){
      art=document.createElement('div');
      art.className='club999-v204-popup-picture';
      if(title?.nextSibling) content.insertBefore(art,title.nextSibling);
      else content.insertBefore(art,body);
    }

    const source=sourcePicture(card);
    if(source){
      art.replaceChildren();
      const cs=source.style;
      set(art,'background-image',cs.backgroundImage);
      set(art,'background-position',cs.backgroundPosition);
      set(art,'background-size',cs.backgroundSize);
      set(art,'background-repeat','no-repeat');
      set(art,'display','block');
      set(art,'visibility','visible');
      set(art,'opacity','1');
      return;
    }

    /* Fallback to the SVG artwork already present before v92 rebuilt the cards. */
    const theme=card?.dataset.directionTheme||'body';
    const fallbackSvg={
      body:'<svg viewBox="0 0 320 180" aria-hidden="true"><rect width="320" height="180" fill="#063642"/><circle cx="160" cy="90" r="48" fill="none" stroke="#f2d477" stroke-width="3"/><path d="M120 126c13-38 25-57 40-57s27 19 40 57" fill="none" stroke="#69d9dc" stroke-width="6" stroke-linecap="round"/></svg>',
      energy:'<svg viewBox="0 0 320 180" aria-hidden="true"><rect width="320" height="180" fill="#063642"/><path d="M160 35l16 36 39 6-29 25 9 38-35-20-35 20 9-38-29-25 39-6z" fill="none" stroke="#f2d477" stroke-width="4"/></svg>',
      work:'<svg viewBox="0 0 320 180" aria-hidden="true"><rect width="320" height="180" fill="#063642"/><circle cx="150" cy="94" r="45" fill="none" stroke="#69d9dc" stroke-width="4"/><path d="M150 94l65-49M194 46h24v24" fill="none" stroke="#f2d477" stroke-width="5" stroke-linecap="round"/></svg>',
      relations:'<svg viewBox="0 0 320 180" aria-hidden="true"><rect width="320" height="180" fill="#063642"/><path d="M160 137s-67-34-67-76c0-19 14-33 32-33 15 0 27 9 35 22 8-13 20-22 35-22 18 0 32 14 32 33 0 42-67 76-67 76z" fill="none" stroke="#f2d477" stroke-width="4"/></svg>',
      community:'<svg viewBox="0 0 320 180" aria-hidden="true"><rect width="320" height="180" fill="#063642"/><circle cx="160" cy="88" r="21" fill="none" stroke="#f2d477" stroke-width="4"/><circle cx="90" cy="62" r="17" fill="none" stroke="#69d9dc" stroke-width="4"/><circle cx="230" cy="62" r="17" fill="none" stroke="#69d9dc" stroke-width="4"/><path d="M108 68l31 12M212 68l-31 12" stroke="#f2d477" stroke-width="3"/></svg>',
      beauty:'<svg viewBox="0 0 320 180" aria-hidden="true"><rect width="320" height="180" fill="#063642"/><path d="M160 31c31 0 52 22 52 47 0 29-27 55-52 76-25-21-52-47-52-76 0-25 21-47 52-47z" fill="none" stroke="#f2d477" stroke-width="4"/><path d="M160 62c13 0 23 10 23 23 0 12-10 24-23 36-13-12-23-24-23-36 0-13 10-23 23-23z" fill="none" stroke="#69d9dc" stroke-width="3"/></svg>'
    };
    art.style.removeProperty('background-image');
    art.style.removeProperty('background-position');
    art.style.removeProperty('background-size');
    art.innerHTML=fallbackSvg[theme]||fallbackSvg.body;
  }

  function schedulePicture(card){
    const run=()=>ensurePopupPicture(card);
    requestAnimationFrame(()=>requestAnimationFrame(run));
    [40,120,320,700].forEach(ms=>setTimeout(run,ms));
  }

  function installPopupHooks(){
    document.addEventListener('click',event=>{
      const card=event.target.closest?.('#directions .direction-card.club999-direction-popup');
      if(card) schedulePicture(card);
    });
    document.addEventListener('keydown',event=>{
      if(event.key!=='Enter'&&event.key!==' ') return;
      const card=event.target.closest?.('#directions .direction-card.club999-direction-popup');
      if(card) schedulePicture(card);
    });
  }

  function apply(){injectStyle();applyRhythm()}
  let rt=0;
  const burst=()=>{apply();requestAnimationFrame(()=>requestAnimationFrame(apply));[160,480,1000,2200,4200].forEach(ms=>setTimeout(apply,ms))};
  addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(burst,80)},{passive:true});
  if(window.visualViewport) visualViewport.addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(burst,80)},{passive:true});
  installPopupHooks();
  burst();
})();
