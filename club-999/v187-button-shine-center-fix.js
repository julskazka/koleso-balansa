(()=>{
  const STYLE_ID='club999-button-shine-v187-style';
  const TARGET='club999-shine-v187-target';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function injectStyle(){
    document.getElementById('club999-button-shine-v186-style')?.remove();
    document.getElementById('club999-all-button-shine-v185-style')?.remove();
    document.getElementById(STYLE_ID)?.remove();

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

      .${TARGET}>.club999-v168-shine,
      .${TARGET}>.club999-shine-v185-layer{
        display:none!important;
      }

      .${TARGET}>.club999-v168-copy{
        position:absolute!important;
        z-index:12!important;
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

      .${TARGET}>span:not(.club999-v168-copy):not(.club999-v168-shine):not(.club999-shine-v185-layer),
      .${TARGET}>strong,
      .${TARGET}>b{
        position:relative!important;
        z-index:12!important;
        inset:auto!important;
        left:auto!important;
        right:auto!important;
        top:auto!important;
        bottom:auto!important;
        display:block!important;
        flex:0 1 auto!important;
        width:auto!important;
        max-width:calc(100% - 28px)!important;
        margin:0!important;
        padding:0!important;
        transform:none!important;
        translate:none!important;
        text-align:center!important;
        text-indent:0!important;
        white-space:normal!important;
      }

      .${TARGET}::before{
        content:""!important;
        position:absolute!important;
        z-index:4!important;
        pointer-events:none!important;
        top:2px!important;
        left:9%!important;
        width:82%!important;
        height:10px!important;
        margin:0!important;
        padding:0!important;
        border:0!important;
        border-radius:999px!important;
        background:radial-gradient(ellipse at 50% 0%,rgba(255,255,255,.84) 0%,rgba(255,255,255,.44) 30%,rgba(255,248,214,.16) 60%,rgba(255,255,255,0) 82%)!important;
        box-shadow:none!important;
        filter:blur(.2px)!important;
        opacity:.78!important;
        transform:none!important;
        animation:none!important;
      }

      .${TARGET}::after{
        content:""!important;
        position:absolute!important;
        z-index:6!important;
        pointer-events:none!important;
        top:-82%!important;
        left:-42%!important;
        width:22%!important;
        height:270%!important;
        margin:0!important;
        padding:0!important;
        border:0!important;
        border-radius:45%!important;
        background:linear-gradient(90deg,
          rgba(255,255,255,0) 0%,
          rgba(255,255,255,.08) 15%,
          rgba(255,250,228,.62) 34%,
          rgba(255,255,255,.98) 50%,
          rgba(255,250,228,.68) 66%,
          rgba(255,255,255,.08) 84%,
          rgba(255,255,255,0) 100%)!important;
        box-shadow:0 0 12px rgba(255,255,245,.78),0 0 22px rgba(246,216,135,.38)!important;
        filter:blur(.25px)!important;
        opacity:0!important;
        transform:rotate(18deg)!important;
        animation:club999ButtonSweepV187 2.15s ease-in-out infinite!important;
        will-change:left,opacity!important;
      }

      @keyframes club999ButtonSweepV187{
        0%,18%{left:-42%;opacity:0}
        25%{opacity:.94}
        68%{left:122%;opacity:.94}
        78%,100%{left:122%;opacity:0}
      }

      @media(max-width:700px){
        .${TARGET}>.club999-v168-copy{padding:0 14px!important}
        .${TARGET}::before{left:8%!important;width:84%!important;height:9px!important}
        .${TARGET}::after{width:25%!important;animation-duration:2.25s!important}
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

  function cleanup(btn){
    btn.classList.remove('club999-shine-v185-target','club999-shine-v186-target');
    btn.querySelectorAll(':scope > .club999-shine-v185-layer').forEach(el=>el.remove());
    btn.classList.add(TARGET);
    btn.style.setProperty('position','relative','important');
    btn.style.setProperty('overflow','hidden','important');
    btn.style.setProperty('isolation','isolate','important');
    btn.style.setProperty('display','flex','important');
    btn.style.setProperty('align-items','center','important');
    btn.style.setProperty('justify-content','center','important');
    btn.style.setProperty('text-align','center','important');
    btn.style.setProperty('text-indent','0','important');
  }

  function apply(){
    injectStyle();
    collect().forEach(cleanup);
  }

  let raf=0;
  const observer=new MutationObserver(()=>{
    cancelAnimationFrame(raf);
    raf=requestAnimationFrame(apply);
  });
  observer.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['class','style']});

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    apply();
    if(tries>=100) clearInterval(timer);
  },100);

  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [250,600,1200,2200,4000,6500,9000].forEach(ms=>setTimeout(apply,ms));
})();
