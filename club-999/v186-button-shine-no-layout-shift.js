(()=>{
  const STYLE_ID='club999-button-shine-v186-style';
  const TARGET='club999-shine-v186-target';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function injectStyle(){
    document.getElementById('club999-all-button-shine-v185-style')?.remove();
    const old=document.getElementById(STYLE_ID);
    if(old) old.remove();

    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .${TARGET}{
        position:relative!important;
        isolation:isolate!important;
        overflow:hidden!important;
      }

      /* Old child-based shine is disabled: it was able to interfere with label layout. */
      .${TARGET}>.club999-v168-shine,
      .${TARGET}>.club999-shine-v185-layer{
        display:none!important;
      }

      /* Preserve the exact centered-label geometry created by v166. */
      .${TARGET}>.club999-v168-copy{
        position:absolute!important;
        z-index:30!important;
        inset:0!important;
        display:grid!important;
        place-items:center!important;
        width:100%!important;
        height:100%!important;
        margin:0!important;
        padding:0 14px!important;
        transform:none!important;
        translate:none!important;
        text-align:center!important;
        pointer-events:none!important;
      }

      /* Soft permanent lacquer highlight. Does not add any DOM nodes. */
      .${TARGET}::before{
        content:""!important;
        display:block!important;
        position:absolute!important;
        z-index:18!important;
        pointer-events:none!important;
        top:2px!important;
        left:7%!important;
        width:86%!important;
        height:11px!important;
        margin:0!important;
        padding:0!important;
        border:0!important;
        border-radius:999px!important;
        background:radial-gradient(ellipse at 50% 0%,rgba(255,255,255,.94) 0%,rgba(255,255,255,.58) 24%,rgba(255,248,214,.22) 55%,rgba(255,255,255,0) 79%)!important;
        box-shadow:none!important;
        filter:blur(.15px)!important;
        opacity:.92!important;
        transform:none!important;
        animation:none!important;
      }

      /* Moving light sweep. Pure pseudo-element, so button text cannot move. */
      .${TARGET}::after{
        content:""!important;
        display:block!important;
        position:absolute!important;
        z-index:19!important;
        pointer-events:none!important;
        top:-78%!important;
        left:-48%!important;
        width:28%!important;
        height:260%!important;
        margin:0!important;
        padding:0!important;
        border:0!important;
        border-radius:38%!important;
        background:linear-gradient(90deg,
          rgba(255,255,255,0) 0%,
          rgba(255,255,255,.10) 14%,
          rgba(255,249,225,.72) 34%,
          rgba(255,255,255,1) 49%,
          rgba(255,255,255,1) 52%,
          rgba(255,249,225,.76) 66%,
          rgba(255,255,255,.10) 84%,
          rgba(255,255,255,0) 100%)!important;
        box-shadow:0 0 15px rgba(255,255,245,.92),0 0 28px rgba(245,211,123,.48)!important;
        filter:blur(.25px)!important;
        opacity:0!important;
        transform:rotate(18deg)!important;
        animation:club999ButtonSweepV186 2.45s cubic-bezier(.38,.02,.30,1) infinite!important;
        will-change:left,opacity!important;
      }

      @keyframes club999ButtonSweepV186{
        0%,10%{left:-48%;opacity:0}
        17%{opacity:.96}
        72%{opacity:.96}
        88%,100%{left:124%;opacity:0}
      }

      @media(max-width:700px){
        .${TARGET}::before{top:2px!important;left:7%!important;width:86%!important;height:10px!important}
        .${TARGET}::after{width:32%!important;animation-duration:2.6s!important}
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
    if(!text) return false;
    if(text==='×' || text==='✕' || text==='закрыть' || text==='close') return false;
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
    const buttonLinks=[...document.querySelectorAll('a,[role="button"]')].filter(el=>{
      const cls=(el.className||'').toString().toLowerCase();
      return cls.includes('button') || cls.includes('cta') || el.hasAttribute('data-purchase');
    });

    return [...new Set([...direct,...buttonLinks])].filter(visibleButton);
  }

  function cleanupOld(){
    document.querySelectorAll('.club999-shine-v185-layer').forEach(el=>el.remove());
    document.querySelectorAll('.club999-shine-v185-target').forEach(el=>el.classList.remove('club999-shine-v185-target'));
  }

  function apply(){
    injectStyle();
    cleanupOld();
    collect().forEach(btn=>{
      btn.classList.add(TARGET);
      btn.style.setProperty('position','relative','important');
      btn.style.setProperty('overflow','hidden','important');
      btn.style.setProperty('isolation','isolate','important');
    });
  }

  let raf=0;
  const observer=new MutationObserver(()=>{
    cancelAnimationFrame(raf);
    raf=requestAnimationFrame(apply);
  });
  observer.observe(document.documentElement,{subtree:true,childList:true});

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    apply();
    if(tries>=80) clearInterval(timer);
  },120);

  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [300,700,1400,2400,4200,7000].forEach(ms=>setTimeout(apply,ms));
})();
