(()=>{
  const STYLE_ID='club999-button-shine-v192-style';
  const TARGET='club999-shine-v192-target';
  const HOST='club999-shine-v192-host';
  const GLOSS='club999-shine-v192-gloss';
  const SWEEP='club999-shine-v192-sweep';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function injectStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .${TARGET}{
        position:relative!important;
        isolation:isolate!important;
        overflow:hidden!important;
      }
      .${TARGET}>.club999-v168-copy{
        position:absolute!important;
        z-index:30!important;
        inset:0!important;
        display:grid!important;
        place-items:center!important;
        width:100%!important;
        height:100%!important;
        min-width:0!important;
        max-width:none!important;
        margin:0!important;
        padding:0 14px!important;
        box-sizing:border-box!important;
        transform:none!important;
        translate:none!important;
        text-align:center!important;
        text-indent:0!important;
        white-space:normal!important;
        pointer-events:none!important;
      }
      .${TARGET}>.${HOST}{
        display:block!important;
        position:absolute!important;
        z-index:22!important;
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
      .${TARGET}>.${HOST}>.${GLOSS}{
        display:block!important;
        position:absolute!important;
        z-index:1!important;
        top:1px!important;
        left:8%!important;
        width:84%!important;
        height:11px!important;
        border-radius:999px!important;
        background:radial-gradient(ellipse at 50% 0%,rgba(255,255,255,.98) 0%,rgba(255,255,255,.72) 22%,rgba(255,249,220,.32) 48%,rgba(255,255,255,0) 80%)!important;
        opacity:.92!important;
        filter:blur(.15px)!important;
        pointer-events:none!important;
      }
      .${TARGET}>.${HOST}>.${SWEEP}{
        display:block!important;
        position:absolute!important;
        z-index:2!important;
        top:-92%!important;
        left:-62%!important;
        width:34%!important;
        height:290%!important;
        border-radius:44%!important;
        background:linear-gradient(90deg,
          rgba(255,255,255,0) 0%,
          rgba(255,255,255,.08) 11%,
          rgba(255,244,190,.58) 28%,
          rgba(255,255,255,.98) 43%,
          rgba(255,255,255,1) 50%,
          rgba(255,255,255,.98) 57%,
          rgba(255,244,190,.62) 72%,
          rgba(255,255,255,.08) 89%,
          rgba(255,255,255,0) 100%)!important;
        box-shadow:0 0 18px rgba(255,255,248,.98),0 0 34px rgba(244,207,104,.64)!important;
        filter:blur(.25px)!important;
        opacity:1!important;
        transform:rotate(18deg)!important;
        animation:club999SweepV192 2.15s linear infinite!important;
        animation-play-state:running!important;
        pointer-events:none!important;
        will-change:left!important;
      }
      @keyframes club999SweepV192{
        0%{left:-62%;opacity:.72}
        8%{opacity:1}
        88%{opacity:1}
        100%{left:128%;opacity:.72}
      }
      .${TARGET}[data-club999-v192-anchor="point"]{margin-top:14px!important}
      @media(max-width:700px){
        .${TARGET}>.club999-v168-copy{padding:0 13px!important}
        .${TARGET}>.${HOST}>.${GLOSS}{left:7%!important;width:86%!important;height:10px!important}
        .${TARGET}>.${HOST}>.${SWEEP}{width:38%!important;animation-duration:2.25s!important}
        .${TARGET}[data-club999-v192-anchor="point"]{margin-top:14px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function visible(el){
    if(!el) return false;
    const r=el.getBoundingClientRect();
    const cs=getComputedStyle(el);
    if(r.width<120||r.height<30||cs.display==='none'||cs.visibility==='hidden'||Number(cs.opacity)===0) return false;
    const t=norm(el.textContent);
    if(!t||t==='×'||t==='✕'||t==='закрыть'||t==='close') return false;
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
      const t=norm(el.textContent);
      const cls=(el.className||'').toString().toLowerCase();
      return cls.includes('button')||cls.includes('cta')||el.hasAttribute('data-purchase')||
        t.includes('вступить')||t.includes('найти свою точку опоры')||
        t.includes('посмотреть, что есть внутри')||t.includes('задать вопрос');
    });
    return [...new Set([...direct,...links])].filter(visible);
  }

  function prepare(btn){
    btn.classList.remove('club999-shine-v188-target','club999-shine-v189-target');
    btn.classList.add(TARGET);
    btn.style.setProperty('position','relative','important');
    btn.style.setProperty('overflow','hidden','important');
    btn.style.setProperty('isolation','isolate','important');

    const t=norm(btn.textContent);
    if(t.includes('найти свою точку опоры')) btn.dataset.club999V192Anchor='point';

    let host=btn.querySelector(':scope > .club999-v168-shine');
    if(!host){
      host=document.createElement('span');
      host.className='club999-v168-shine';
      host.setAttribute('aria-hidden','true');
      btn.prepend(host);
    }
    host.classList.remove('club999-shine-v188-layer','club999-shine-v189-host');
    host.classList.add(HOST);
    host.replaceChildren();

    const gloss=document.createElement('span');
    gloss.className=GLOSS;
    gloss.setAttribute('aria-hidden','true');
    const sweep=document.createElement('span');
    sweep.className=SWEEP;
    sweep.setAttribute('aria-hidden','true');
    host.append(gloss,sweep);
  }

  function apply(){
    injectStyle();
    collect().forEach(prepare);
  }

  let queued=false;
  const observer=new MutationObserver(()=>{
    if(queued) return;
    queued=true;
    requestAnimationFrame(()=>{queued=false;apply()});
  });
  observer.observe(document.documentElement,{subtree:true,childList:true});

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    apply();
    if(tries>=65) clearInterval(timer);
  },140);

  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [250,600,1200,2200,4200,7000,10000].forEach(ms=>setTimeout(apply,ms));
})();
