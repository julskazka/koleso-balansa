(()=>{
  const STYLE_ID='club999-button-shine-v189-style';
  const TARGET='club999-shine-v189-target';
  const HOST='club999-shine-v189-host';
  const GLOSS='club999-shine-v189-gloss';
  const SWEEP='club999-shine-v189-sweep';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;

    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .${TARGET}{
        position:relative!important;
        isolation:isolate!important;
        overflow:hidden!important;
      }

      /* Preserve the approved centered-label geometry. */
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
        height:100%!important;
        box-sizing:border-box!important;
        margin:0!important;
        padding:0 14px!important;
        transform:none!important;
        translate:none!important;
        text-align:center!important;
        text-indent:0!important;
        pointer-events:none!important;
      }

      /* New isolated shine host. No pseudo-elements on the button itself. */
      .${TARGET}>.${HOST}{
        display:block!important;
        position:absolute!important;
        z-index:20!important;
        inset:0!important;
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

      .${TARGET}>.${HOST}>.${GLOSS}{
        display:block!important;
        position:absolute!important;
        z-index:1!important;
        top:2px!important;
        left:7%!important;
        width:86%!important;
        height:10px!important;
        margin:0!important;
        padding:0!important;
        border:0!important;
        border-radius:999px!important;
        background:radial-gradient(ellipse at 50% 0%,rgba(255,255,255,.96) 0%,rgba(255,255,255,.62) 24%,rgba(255,247,208,.24) 52%,rgba(255,255,255,0) 80%)!important;
        box-shadow:none!important;
        filter:blur(.12px)!important;
        opacity:.95!important;
        transform:none!important;
        pointer-events:none!important;
      }

      .${TARGET}>.${HOST}>.${SWEEP}{
        display:block!important;
        position:absolute!important;
        z-index:2!important;
        top:-88%!important;
        left:-34%!important;
        width:22%!important;
        height:278%!important;
        margin:0!important;
        padding:0!important;
        border:0!important;
        border-radius:46%!important;
        background:linear-gradient(90deg,
          rgba(255,255,255,0) 0%,
          rgba(255,255,255,.10) 12%,
          rgba(255,249,223,.74) 31%,
          rgba(255,255,255,1) 47%,
          rgba(255,255,255,1) 53%,
          rgba(255,249,223,.78) 69%,
          rgba(255,255,255,.10) 88%,
          rgba(255,255,255,0) 100%)!important;
        box-shadow:0 0 16px rgba(255,255,245,.98),0 0 28px rgba(246,213,127,.55)!important;
        filter:blur(.18px)!important;
        opacity:.96!important;
        transform:rotate(18deg) translate3d(0,0,0)!important;
        animation:club999SweepV189 1.85s linear infinite!important;
        will-change:transform!important;
        pointer-events:none!important;
      }

      @keyframes club999SweepV189{
        from{transform:rotate(18deg) translate3d(0,0,0)!important}
        to{transform:rotate(18deg) translate3d(760%,0,0)!important}
      }

      /* Requested breathing room before this specific CTA only. */
      .${TARGET}[data-club999-v189-anchor="point"]{
        margin-top:14px!important;
      }

      @media(max-width:700px){
        .${TARGET}>.${HOST}>.${GLOSS}{top:2px!important;height:9px!important}
        .${TARGET}>.${HOST}>.${SWEEP}{width:24%!important;animation-duration:1.95s!important}
        .${TARGET}[data-club999-v189-anchor="point"]{margin-top:14px!important}
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

  function buildShine(btn){
    btn.classList.add(TARGET);
    btn.style.setProperty('position','relative','important');
    btn.style.setProperty('overflow','hidden','important');
    btn.style.setProperty('isolation','isolate','important');

    const text=norm(btn.textContent);
    if(text.includes('найти свою точку опоры')) btn.dataset.club999V189Anchor='point';

    let host=btn.querySelector(':scope > .club999-v168-shine');
    if(host){
      host.classList.add(HOST);
    }else{
      host=btn.querySelector(':scope > .'+HOST);
      if(!host){
        host=document.createElement('span');
        host.className=HOST;
        host.setAttribute('aria-hidden','true');
        btn.appendChild(host);
      }
    }

    let gloss=host.querySelector(':scope > .'+GLOSS);
    if(!gloss){
      gloss=document.createElement('span');
      gloss.className=GLOSS;
      gloss.setAttribute('aria-hidden','true');
      host.appendChild(gloss);
    }

    let sweep=host.querySelector(':scope > .'+SWEEP);
    if(!sweep){
      sweep=document.createElement('span');
      sweep.className=SWEEP;
      sweep.setAttribute('aria-hidden','true');
      host.appendChild(sweep);
    }
  }

  function apply(){
    injectStyle();
    collect().forEach(buildShine);
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
  observer.observe(document.documentElement,{subtree:true,childList:true});

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    apply();
    if(tries>=70) clearInterval(timer);
  },140);

  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [250,600,1200,2200,4200,7000,10000].forEach(ms=>setTimeout(apply,ms));
})();
