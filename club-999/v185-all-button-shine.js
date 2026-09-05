(()=>{
  const STYLE_ID='club999-all-button-shine-v185-style';
  const TARGET_CLASS='club999-shine-v185-target';
  const LAYER_CLASS='club999-shine-v185-layer';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  const KNOWN_TEXT=[
    'посмотреть, что есть внутри',
    'вступить в клуб за 999',
    'найти свою точку опоры',
    'вступить в клуб и задать вопрос',
    'вступить в «центр ресурса»',
    'вступить в "центр ресурса"'
  ];

  function injectStyle(){
    const old=document.getElementById(STYLE_ID);
    if(old) old.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .${TARGET_CLASS}{
        position:relative!important;
        isolation:isolate!important;
        overflow:hidden!important;
      }
      .${TARGET_CLASS}>.${LAYER_CLASS}{
        position:absolute!important;
        z-index:26!important;
        inset:0!important;
        display:block!important;
        overflow:hidden!important;
        border-radius:inherit!important;
        pointer-events:none!important;
        opacity:1!important;
      }
      .${TARGET_CLASS}>.${LAYER_CLASS}::before{
        content:""!important;
        position:absolute!important;
        z-index:1!important;
        top:3px!important;
        left:8%!important;
        width:84%!important;
        height:11px!important;
        border-radius:999px!important;
        background:radial-gradient(ellipse at 50% 0%,rgba(255,255,255,.88) 0%,rgba(255,255,255,.52) 26%,rgba(255,248,214,.20) 58%,rgba(255,255,255,0) 78%)!important;
        filter:blur(.2px)!important;
        opacity:.92!important;
        pointer-events:none!important;
      }
      .${TARGET_CLASS}>.${LAYER_CLASS}::after{
        content:""!important;
        position:absolute!important;
        z-index:2!important;
        top:-78%!important;
        left:-52%!important;
        width:28%!important;
        height:260%!important;
        border-radius:40%!important;
        transform:rotate(18deg)!important;
        background:linear-gradient(90deg,
          rgba(255,255,255,0) 0%,
          rgba(255,255,255,.10) 16%,
          rgba(255,250,228,.74) 35%,
          rgba(255,255,255,1) 50%,
          rgba(255,250,228,.78) 64%,
          rgba(255,255,255,.10) 84%,
          rgba(255,255,255,0) 100%)!important;
        box-shadow:0 0 14px rgba(255,255,245,.92),0 0 28px rgba(246,216,135,.52)!important;
        filter:blur(.35px)!important;
        opacity:.96!important;
        animation:club999AllButtonSweepV185 2.35s cubic-bezier(.36,.02,.3,1) infinite!important;
        will-change:transform,left,opacity!important;
        pointer-events:none!important;
      }
      .${TARGET_CLASS}>.club999-v168-copy,
      .${TARGET_CLASS}>span:not(.${LAYER_CLASS}){
        position:relative!important;
        z-index:30!important;
      }
      @keyframes club999AllButtonSweepV185{
        0%{left:-52%;opacity:0}
        8%{opacity:.98}
        72%{opacity:.98}
        88%,100%{left:124%;opacity:0}
      }
      @media(max-width:700px){
        .${TARGET_CLASS}>.${LAYER_CLASS}::before{top:3px!important;height:10px!important;left:7%!important;width:86%!important}
        .${TARGET_CLASS}>.${LAYER_CLASS}::after{width:32%!important;animation-duration:2.5s!important}
      }
    `;
    document.head.appendChild(style);
  }

  function candidates(){
    const selectors=[
      '.hero41__button',
      '.club999-v168-cta',
      '[data-purchase]',
      '.button--primary',
      '.section-action .button',
      '.club999-question-button-v152',
      '.button--pay-v109',
      '.club999-access-button-v178',
      '.club999-v179-access-btn'
    ];
    const direct=selectors.flatMap(sel=>[...document.querySelectorAll(sel)]);
    const byText=[...document.querySelectorAll('button,a,[role="button"]')].filter(el=>{
      const t=norm(el.textContent);
      return KNOWN_TEXT.some(text=>t.includes(text));
    });
    return [...new Set([...direct,...byText])].filter(el=>{
      if(!el || !(el.matches('button,a') || el.getAttribute('role')==='button')) return false;
      const r=el.getBoundingClientRect();
      const cs=getComputedStyle(el);
      return r.width>120 && r.height>30 && cs.display!=='none' && cs.visibility!=='hidden';
    });
  }

  function addShine(button){
    button.classList.add(TARGET_CLASS);
    button.style.setProperty('position','relative','important');
    button.style.setProperty('overflow','hidden','important');
    button.style.setProperty('isolation','isolate','important');

    [...button.querySelectorAll(':scope > .'+LAYER_CLASS)].slice(1).forEach(el=>el.remove());
    let layer=button.querySelector(':scope > .'+LAYER_CLASS);
    if(!layer){
      layer=document.createElement('span');
      layer.className=LAYER_CLASS;
      layer.setAttribute('aria-hidden','true');
      button.appendChild(layer);
    }
  }

  function apply(){
    injectStyle();
    candidates().forEach(addShine);
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
