(()=>{
  const STYLE_ID='club999-icons-shine-v193-style';
  const BUTTON_CLASS='club999-button-v193';
  const SHINE='.club999-v168-shine';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    [
      'club999-button-shine-v192-style',
      'club999-button-shine-v188-style',
      'club999-button-shine-v187-style',
      'club999-button-shine-v186-style',
      'club999-all-button-shine-v185-style',
      'club999-global-button-shine-v182-style'
    ].forEach(id=>document.getElementById(id)?.remove());

    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      /* One icon language across every list: rounded square, gold line art, soft glow. */
      .club999-subscription-v183 .club999-subscription-icon-v183,
      .club999-subscription-card-v183 .club999-subscription-icon-v183,
      .club999-unified-row-v190 .club999-unified-icon-v190,
      .club999-whofor-row-v136 .club999-whofor-icon-v136,
      .club999-resource-row-v124 .club999-resource-icon-v124,
      .club999-unified-icon-v190.club999-subscription-icon-v183,
      .club999-unified-icon-v190.club999-whofor-icon-v136{
        border-radius:8px!important;
        border:1px solid rgba(244,207,91,.78)!important;
        background:
          radial-gradient(circle at 34% 25%,rgba(255,235,151,.24) 0%,rgba(255,235,151,.07) 30%,transparent 48%),
          linear-gradient(145deg,rgba(10,91,101,.94),rgba(3,35,45,.98))!important;
        box-shadow:
          inset 0 0 0 1px rgba(255,255,255,.055),
          inset 0 0 10px rgba(82,205,196,.09),
          0 0 7px rgba(240,201,81,.26),
          0 0 14px rgba(69,188,184,.10)!important;
        color:#f3d16f!important;
        -webkit-text-fill-color:#f3d16f!important;
      }
      .club999-subscription-v183 .club999-subscription-icon-v183 svg,
      .club999-subscription-card-v183 .club999-subscription-icon-v183 svg,
      .club999-unified-row-v190 .club999-unified-icon-v190 svg,
      .club999-whofor-row-v136 .club999-whofor-icon-v136 svg,
      .club999-resource-row-v124 .club999-resource-icon-v124 svg{
        fill:none!important;
        stroke:#f3d16f!important;
        filter:drop-shadow(0 0 2.5px rgba(243,209,111,.38))!important;
      }
      .club999-subscription-v183 .club999-subscription-icon-v183 .dot,
      .club999-unified-row-v190 .club999-unified-icon-v190 .dot,
      .club999-whofor-row-v136 .club999-whofor-icon-v136 .dot,
      .club999-resource-row-v124 .club999-resource-icon-v124 .dot{
        fill:#f3d16f!important;
        stroke:#f3d16f!important;
      }

      /* Stable shine: no DOM rebuilding, so the animation never restarts itself. */
      .${BUTTON_CLASS}{
        position:relative!important;
        overflow:hidden!important;
        isolation:isolate!important;
      }
      .${BUTTON_CLASS}>${SHINE}{
        display:block!important;
        position:absolute!important;
        z-index:20!important;
        inset:0!important;
        left:0!important;
        right:0!important;
        top:0!important;
        bottom:0!important;
        width:100%!important;
        height:100%!important;
        min-width:0!important;
        min-height:0!important;
        max-width:none!important;
        max-height:none!important;
        margin:0!important;
        padding:0!important;
        border:0!important;
        border-radius:inherit!important;
        background:transparent!important;
        box-shadow:none!important;
        filter:none!important;
        opacity:1!important;
        transform:none!important;
        translate:none!important;
        animation:none!important;
        overflow:hidden!important;
        pointer-events:none!important;
      }
      .${BUTTON_CLASS}>${SHINE}::before{
        content:""!important;
        display:block!important;
        position:absolute!important;
        z-index:1!important;
        top:1px!important;
        left:7%!important;
        width:86%!important;
        height:10px!important;
        border-radius:999px!important;
        background:radial-gradient(ellipse at 50% 0%,rgba(255,255,255,.98) 0%,rgba(255,255,255,.70) 20%,rgba(255,246,205,.28) 47%,rgba(255,255,255,0) 80%)!important;
        opacity:.90!important;
        filter:blur(.12px)!important;
        pointer-events:none!important;
      }
      .${BUTTON_CLASS}>${SHINE}::after{
        content:""!important;
        display:block!important;
        position:absolute!important;
        z-index:2!important;
        top:-100%!important;
        left:-48%!important;
        width:30%!important;
        height:300%!important;
        border-radius:44%!important;
        background:linear-gradient(90deg,
          rgba(255,255,255,0) 0%,
          rgba(255,255,255,.08) 12%,
          rgba(255,244,190,.60) 30%,
          rgba(255,255,255,.98) 45%,
          rgba(255,255,255,1) 50%,
          rgba(255,255,255,.98) 55%,
          rgba(255,244,190,.62) 70%,
          rgba(255,255,255,.08) 88%,
          rgba(255,255,255,0) 100%)!important;
        box-shadow:0 0 15px rgba(255,255,248,.96),0 0 28px rgba(244,207,104,.52)!important;
        filter:blur(.18px)!important;
        opacity:.96!important;
        transform:rotate(18deg)!important;
        animation:club999ButtonSweepV193 2.45s linear infinite!important;
        animation-play-state:running!important;
        will-change:left!important;
        pointer-events:none!important;
      }
      @keyframes club999ButtonSweepV193{
        0%{left:-48%;opacity:.72}
        8%{opacity:1}
        90%{left:126%;opacity:1}
        100%{left:126%;opacity:.72}
      }
      .${BUTTON_CLASS}>.club999-v168-copy{
        z-index:30!important;
      }
      @media(max-width:700px){
        .${BUTTON_CLASS}>${SHINE}::before{height:9px!important;left:6%!important;width:88%!important}
        .${BUTTON_CLASS}>${SHINE}::after{width:34%!important;animation-duration:2.55s!important}
      }
    `;
    document.head.appendChild(style);
  }

  function visibleButton(el){
    if(!el) return false;
    const r=el.getBoundingClientRect();
    const cs=getComputedStyle(el);
    if(r.width<120||r.height<30||cs.display==='none'||cs.visibility==='hidden'||Number(cs.opacity)===0) return false;
    const t=norm(el.textContent);
    return !!t && t!=='×' && t!=='✕' && t!=='закрыть' && t!=='close';
  }

  function collectButtons(){
    const selectors=[
      '.hero41__button',
      '.club999-v168-cta',
      '[data-purchase]',
      '.button--primary',
      '.section-action .button',
      '.club999-question-button-v152',
      '.button--pay-v109',
      '.club999-access-polish-v178',
      '.club999-access-final-v181'
    ];
    const direct=selectors.flatMap(sel=>[...document.querySelectorAll(sel)]);
    const byText=[...document.querySelectorAll('button,a,[role="button"]')].filter(el=>{
      const t=norm(el.textContent);
      return t.includes('вступить')||t.includes('найти свою точку опоры')||t.includes('посмотреть, что есть внутри')||t.includes('задать вопрос');
    });
    return [...new Set([...direct,...byText])].filter(visibleButton);
  }

  function ensureButton(btn){
    btn.classList.add(BUTTON_CLASS);
    let shine=btn.querySelector(':scope > .club999-v168-shine');
    if(!shine){
      shine=document.createElement('span');
      shine.className='club999-v168-shine';
      shine.setAttribute('aria-hidden','true');
      btn.prepend(shine);
    }
  }

  function apply(){
    injectStyle();
    collectButtons().forEach(ensureButton);
  }

  let queued=false;
  const observer=new MutationObserver(()=>{
    if(queued) return;
    queued=true;
    requestAnimationFrame(()=>{queued=false;apply()});
  });
  observer.observe(document.documentElement,{subtree:true,childList:true});

  apply();
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [250,700,1500,3000,5200,8000].forEach(ms=>setTimeout(apply,ms));
})();
