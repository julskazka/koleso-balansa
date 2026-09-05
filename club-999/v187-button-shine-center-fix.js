(()=>{
  const STYLE_ID='club999-button-shine-v188-style';
  const TARGET='club999-shine-v188-target';
  const LAYER='club999-shine-v188-layer';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;

    document.getElementById('club999-button-shine-v187-style')?.remove();
    document.getElementById('club999-button-shine-v186-style')?.remove();
    document.getElementById('club999-all-button-shine-v185-style')?.remove();

    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .${TARGET}{
        position:relative!important;
        isolation:isolate!important;
        overflow:hidden!important;
        display:flex!important;
        align-items:center!important;
        justify-content:center!important;
        text-align:center!important;
        text-indent:0!important;
      }

      /* Keep the text centering from v187 exactly as approved. */
      .${TARGET}>.club999-v168-copy{
        position:absolute!important;
        z-index:30!important;
        inset:0!important;
        left:0!important;
        right:0!important;
        top:0!important;
        bottom:0!important;
        display:flex!important;
        align-items:center!important;
        justify-content:center!important;
        width:100%!important;
        max-width:100%!important;
        height:100%!important;
        box-sizing:border-box!important;
        margin:0!important;
        padding:0 16px!important;
        transform:none!important;
        translate:none!important;
        text-align:center!important;
        text-indent:0!important;
        white-space:normal!important;
        pointer-events:none!important;
      }

      /* Dedicated absolute overlay. It never participates in button layout. */
      .${TARGET}>.${LAYER}{
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
        background:none!important;
        box-shadow:none!important;
        filter:none!important;
        opacity:1!important;
        transform:none!important;
        translate:none!important;
        animation:none!important;
        overflow:hidden!important;
        pointer-events:none!important;
      }

      /* Soft lacquer highlight at the top. */
      .${TARGET}>.${LAYER}::before{
        content:""!important;
        position:absolute!important;
        z-index:1!important;
        top:2px!important;
        left:8%!important;
        width:84%!important;
        height:10px!important;
        margin:0!important;
        padding:0!important;
        border:0!important;
        border-radius:999px!important;
        background:radial-gradient(ellipse at 50% 0%,rgba(255,255,255,.92) 0%,rgba(255,255,255,.54) 24%,rgba(255,248,214,.18) 56%,rgba(255,255,255,0) 80%)!important;
        box-shadow:none!important;
        filter:blur(.18px)!important;
        opacity:.90!important;
        transform:none!important;
        animation:none!important;
        pointer-events:none!important;
      }

      /* Visible moving shine, isolated from the button's own pseudo-elements. */
      .${TARGET}>.${LAYER}::after{
        content:""!important;
        position:absolute!important;
        z-index:2!important;
        top:-92%!important;
        left:-48%!important;
        width:25%!important;
        height:290%!important;
        margin:0!important;
        padding:0!important;
        border:0!important;
        border-radius:42%!important;
        background:linear-gradient(90deg,
          rgba(255,255,255,0) 0%,
          rgba(255,255,255,.10) 12%,
          rgba(255,250,226,.72) 32%,
          rgba(255,255,255,1) 48%,
          rgba(255,255,255,1) 52%,
          rgba(255,250,226,.76) 68%,
          rgba(255,255,255,.10) 88%,
          rgba(255,255,255,0) 100%)!important;
        box-shadow:0 0 16px rgba(255,255,245,.94),0 0 30px rgba(246,216,135,.50)!important;
        filter:blur(.22px)!important;
        opacity:0!important;
        transform:rotate(18deg)!important;
        animation:club999ButtonSweepV188 2.55s ease-in-out infinite!important;
        will-change:left,opacity!important;
        pointer-events:none!important;
      }

      @keyframes club999ButtonSweepV188{
        0%,14%{left:-48%;opacity:0}
        22%{opacity:1}
        70%{left:123%;opacity:1}
        82%,100%{left:123%;opacity:0}
      }

      @media(max-width:700px){
        .${TARGET}>.club999-v168-copy{padding:0 14px!important}
        .${TARGET}>.${LAYER}::before{left:7%!important;width:86%!important;height:9px!important}
        .${TARGET}>.${LAYER}::after{width:29%!important;animation-duration:2.7s!important}
      }
    `;
    document.head.appendChild(style);
  }

  function visibleButton(el){
    if(!el) return false;
    const r=el.getBoundingClientRect();
    const cs=getComputedStyle(el);
    if(r.width<130 || r.height<32 || cs.display==='none' || cs.visibility==='hidden' || Number(cs.opacity)===0) return false;
    const text=norm(el.textContent);
    if(!text || text==='×' || text==='✕' || text==='закрыть' || text==='close') return false;
    return true;
  }

  function collect(){
    const selectors=[
      '.hero41__button',
      '.club999-v168-cta',
      '[data-purchase]',
      '.button--primary',
      '.section-action .button',
      '.club999-question-button-v152',
      '.button--pay-v109',
      '.club999-access-polish-v178',
      '.club999-access-final-v181',
      'button'
    ];
    const direct=selectors.flatMap(sel=>[...document.querySelectorAll(sel)]);
    const links=[...document.querySelectorAll('a,[role="button"]')].filter(el=>{
      const cls=(el.className||'').toString().toLowerCase();
      return cls.includes('button') || cls.includes('cta') || el.hasAttribute('data-purchase');
    });
    return [...new Set([...direct,...links])].filter(visibleButton);
  }

  function ensureButton(btn){
    btn.classList.remove('club999-shine-v185-target','club999-shine-v186-target','club999-shine-v187-target');
    btn.classList.add(TARGET);

    /* Main CTA buttons already have this absolute child from v166; reuse it so
       v166 keeps its expected 2-child structure and never rebuilds the label. */
    let layer=btn.querySelector(':scope > .club999-v168-shine');
    if(layer){
      layer.classList.add(LAYER);
    }else{
      layer=btn.querySelector(':scope > .'+LAYER);
      if(!layer){
        layer=document.createElement('span');
        layer.className=LAYER;
        layer.setAttribute('aria-hidden','true');
        btn.appendChild(layer);
      }
    }
  }

  function apply(){
    injectStyle();
    collect().forEach(ensureButton);
  }

  let scheduled=false;
  const observer=new MutationObserver(()=>{
    if(scheduled) return;
    scheduled=true;
    requestAnimationFrame(()=>{
      scheduled=false;
      apply();
    });
  });
  /* childList only: do not observe our own class/style updates, so the animation
     is never restarted by a self-triggering observer loop. */
  observer.observe(document.documentElement,{subtree:true,childList:true});

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    apply();
    if(tries>=45) clearInterval(timer);
  },140);

  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [300,700,1400,2400,4800,7000].forEach(ms=>setTimeout(apply,ms));
})();
