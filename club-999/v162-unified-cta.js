(()=>{
  const STYLE_ID='club999-unified-cta-v163-style';
  const CLASS='club999-unified-cta-v163';
  const SHINE='club999-unified-cta-v163-shine';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const cssName=name=>name.replace(/[A-Z]/g,m=>'-'+m.toLowerCase());
  const COPY=[
    'background','backgroundColor','backgroundImage','backgroundPosition','backgroundSize',
    'borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth',
    'borderTopStyle','borderRightStyle','borderBottomStyle','borderLeftStyle',
    'borderTopColor','borderRightColor','borderBottomColor','borderLeftColor',
    'borderRadius','boxShadow','color','fontFamily','fontWeight','fontSize','lineHeight',
    'letterSpacing','textShadow','textTransform','minHeight',
    'paddingTop','paddingRight','paddingBottom','paddingLeft'
  ];

  function inject(){
    if(document.getElementById(STYLE_ID)) return;
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      .${CLASS}{position:relative!important;isolation:isolate!important;overflow:hidden!important;display:flex!important;align-items:center!important;justify-content:center!important;box-sizing:border-box!important;text-align:center!important;text-decoration:none!important;appearance:none!important;-webkit-appearance:none!important;gap:0!important}
      .${CLASS}::after{display:none!important}
      .${CLASS}>b,.${CLASS}>i,.${CLASS} .button-arrow,.${CLASS} [class*="arrow"],.${CLASS} svg[data-arrow]{display:none!important}
      .${CLASS}>span:not(.${SHINE}),.${CLASS}>strong{position:relative!important;z-index:5!important;color:inherit!important;-webkit-text-fill-color:currentColor!important}
      .${SHINE}{position:absolute!important;z-index:4!important;pointer-events:none!important;display:block!important;top:-48%!important;left:-36%!important;width:24%!important;height:196%!important;margin:0!important;padding:0!important;border:0!important;border-radius:0!important;background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.08) 16%,rgba(255,255,246,.66) 39%,rgba(255,255,255,.98) 50%,rgba(255,255,246,.66) 61%,rgba(255,255,255,.08) 84%,transparent 100%)!important;box-shadow:0 0 12px rgba(255,255,240,.76)!important;filter:blur(.2px)!important;mix-blend-mode:screen!important;opacity:0!important;transform:rotate(18deg)!important;animation:club999Shine163 2.8s ease-in-out infinite!important}
      @keyframes club999Shine163{0%,36%{left:-36%;opacity:0}42%{opacity:.95}67%{left:114%;opacity:.95}74%,100%{left:114%;opacity:0}}
    `;
    document.head.appendChild(s);
  }

  function collect(first){
    const selectors=['[data-purchase]','.button--primary','.section-action .button','.club999-question-button-v152'];
    const bySelector=selectors.flatMap(sel=>[...document.querySelectorAll(sel)]);
    const byText=[...document.querySelectorAll('button,a,[role="button"]')].filter(el=>{
      const t=norm(el.textContent);
      return t.includes('посмотреть, что есть внутри')||t.includes('вступить в клуб за 999')||t.includes('найти свою точку опоры')||t.includes('вступить в клуб и задать вопрос')||t.includes('вступить в «центр ресурса»')||t.includes('вступить в "центр ресурса"');
    });
    return [...new Set([first,...bySelector,...byText])].filter(el=>el && (el.matches('button,a')||el.getAttribute('role')==='button'));
  }

  function cleanArrow(button){
    [...button.querySelectorAll('b,i,span,strong')].forEach(el=>{
      if(el.classList.contains(SHINE)) return;
      const t=(el.textContent||'').replace(/\s+/g,' ').trim();
      if(/^(→|➜|➝|➤|›|»|⟶|➡)$/.test(t))el.style.setProperty('display','none','important');
    });
  }

  function ensureShine(button){
    [...button.querySelectorAll(':scope > [class*="club999-unified-cta-v162-shine"],:scope > [class*="club999-unified-shine-"]')].forEach(el=>el.remove());
    let shine=button.querySelector(':scope > .'+SHINE);
    if(!shine){
      shine=document.createElement('span');
      shine.className=SHINE;
      shine.setAttribute('aria-hidden','true');
      button.insertBefore(shine,button.firstChild);
    }
  }

  function copyLook(source,target){
    const cs=getComputedStyle(source);
    COPY.forEach(prop=>{
      const value=cs[prop];
      if(value)target.style.setProperty(cssName(prop),value,'important');
    });
    target.style.setProperty('box-sizing','border-box','important');
    target.style.setProperty('left','auto','important');
    target.style.setProperty('right','auto','important');
    target.style.setProperty('transform','none','important');
  }

  function restoreNativeGeometry(button){
    button.style.removeProperty('width');
    button.style.removeProperty('max-width');
    button.style.removeProperty('margin-left');
    button.style.removeProperty('margin-right');
    button.style.setProperty('left','auto','important');
    button.style.setProperty('right','auto','important');
    button.style.setProperty('transform','none','important');
  }

  function fixQuestionAction(){
    const action=document.getElementById('club999-audience-question-action-v152');
    if(!action) return;
    action.style.setProperty('width','100%','important');
    action.style.setProperty('max-width','420px','important');
    action.style.setProperty('margin-left','auto','important');
    action.style.setProperty('margin-right','auto','important');
    action.style.setProperty('left','auto','important');
    action.style.setProperty('right','auto','important');
    action.style.setProperty('transform','none','important');
  }

  function apply(){
    const first=document.querySelector('.hero41__button');
    if(!first) return false;
    inject();

    cleanArrow(first);
    const buttons=collect(first);
    buttons.forEach(button=>{
      if(button===first) return;
      button.classList.remove('club999-unified-cta-v162');
      button.classList.add(CLASS);
      restoreNativeGeometry(button);
      copyLook(first,button);
      cleanArrow(button);
      ensureShine(button);
    });
    fixQuestionAction();
    return buttons.length>0;
  }

  function burst(){
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [160,420,900,1600,2600].forEach(ms=>setTimeout(apply,ms));
  }
  let n=0;
  const timer=setInterval(()=>{n++;apply();if(n>=35)clearInterval(timer)},100);
  addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  burst();
})();
