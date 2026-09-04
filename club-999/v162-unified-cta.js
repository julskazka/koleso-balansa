(()=>{
  const STYLE_ID='club999-unified-cta-v162-style';
  const CLASS='club999-unified-cta-v162';
  const SHINE='club999-unified-cta-v162-shine';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const vw=()=>Math.round(window.visualViewport?.width||document.documentElement.clientWidth||innerWidth);
  const cssName=name=>name.replace(/[A-Z]/g,m=>'-'+m.toLowerCase());
  const COPY=[
    'background','backgroundColor','backgroundImage','backgroundPosition','backgroundSize',
    'borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth',
    'borderTopStyle','borderRightStyle','borderBottomStyle','borderLeftStyle',
    'borderTopColor','borderRightColor','borderBottomColor','borderLeftColor',
    'borderRadius','boxShadow','color','fontFamily','fontWeight','lineHeight',
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
      .${SHINE}{position:absolute!important;z-index:4!important;pointer-events:none!important;display:block!important;top:-52%!important;left:-42%!important;width:30%!important;height:205%!important;margin:0!important;padding:0!important;border:0!important;border-radius:0!important;background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.08) 14%,rgba(255,255,245,.68) 38%,rgba(255,255,255,1) 50%,rgba(255,255,245,.68) 62%,rgba(255,255,255,.08) 86%,transparent 100%)!important;box-shadow:0 0 14px rgba(255,255,240,.9)!important;filter:blur(.2px)!important;mix-blend-mode:screen!important;opacity:0!important;transform:rotate(18deg)!important;animation:club999Shine162 2.4s ease-in-out infinite!important}
      @keyframes club999Shine162{0%,28%{left:-42%;opacity:0}34%{opacity:1}67%{left:118%;opacity:1}74%,100%{left:118%;opacity:0}}
    `;
    document.head.appendChild(s);
  }

  function buttons(first){
    const selectors=['[data-purchase]','.button--primary','.section-action .button','.club999-question-button-v152'];
    const bySelector=selectors.flatMap(sel=>[...document.querySelectorAll(sel)]);
    const byText=[...document.querySelectorAll('button,a,[role="button"]')].filter(el=>{
      const t=norm(el.textContent);
      return t.includes('посмотреть, что есть внутри')||t.includes('вступить в клуб за 999')||t.includes('найти свою точку опоры')||t.includes('вступить в клуб и задать вопрос')||t.includes('вступить в «центр ресурса»')||t.includes('вступить в "центр ресурса"');
    });
    return [...new Set([first,...bySelector,...byText])].filter(Boolean);
  }

  function cleanArrow(button){
    [...button.querySelectorAll('b,i,span,strong')].forEach(el=>{
      if(el.classList.contains(SHINE)) return;
      const t=(el.textContent||'').replace(/\s+/g,' ').trim();
      if(/^(→|➜|➝|➤|›|»|⟶|➡)$/.test(t))el.style.setProperty('display','none','important');
    });
  }

  function shine(button){
    [...button.querySelectorAll(':scope > [class*="club999-unified-shine-"]')].forEach(el=>el.remove());
    let el=button.querySelector(':scope > .'+SHINE);
    if(!el){el=document.createElement('span');el.className=SHINE;el.setAttribute('aria-hidden','true');button.insertBefore(el,button.firstChild)}
  }

  function copyLook(source,target,fontSize){
    const cs=getComputedStyle(source);
    COPY.forEach(prop=>{const value=cs[prop];if(value)target.style.setProperty(cssName(prop),value,'important')});
    target.style.setProperty('font-size',fontSize+'px','important');
  }

  function placeMobile(button){
    const width=Math.min(390,Math.max(280,vw()-32));
    const targetLeft=(vw()-width)/2;
    button.style.setProperty('width',width+'px','important');
    button.style.setProperty('max-width',width+'px','important');
    button.style.setProperty('margin-left','0','important');
    button.style.setProperty('margin-right','0','important');
    button.style.setProperty('left','0','important');
    button.style.setProperty('right','auto','important');
    button.style.setProperty('transform','none','important');
    button.style.setProperty('box-sizing','border-box','important');
    if(button.parentElement)button.parentElement.style.setProperty('overflow','visible','important');
    const r=button.getBoundingClientRect();
    button.style.setProperty('transform',`translateX(${targetLeft-r.left}px)`,'important');
  }

  function placeDesktop(button){
    button.style.setProperty('width','min(100%,420px)','important');
    button.style.setProperty('max-width','420px','important');
    button.style.setProperty('margin-left','auto','important');
    button.style.setProperty('margin-right','auto','important');
    button.style.setProperty('left','auto','important');
    button.style.setProperty('right','auto','important');
    button.style.setProperty('transform','none','important');
  }

  function apply(){
    const first=document.querySelector('.hero41__button');
    if(!first)return false;
    inject();
    const base=parseFloat(getComputedStyle(first).fontSize)||15;
    const fontSize=Math.min(Math.max(base+1.4,16),19);
    const all=buttons(first);
    all.forEach(button=>{
      button.classList.add(CLASS);
      if(button!==first)copyLook(first,button,fontSize);
      else button.style.setProperty('font-size',fontSize+'px','important');
      cleanArrow(button);
      shine(button);
      if(vw()<=700)placeMobile(button);else placeDesktop(button);
    });
    return all.length>0;
  }

  function burst(){
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [120,300,600,1000,1600,2400,3600,5200].forEach(ms=>setTimeout(apply,ms));
  }
  let n=0;
  const timer=setInterval(()=>{n++;apply();if(n>=70)clearInterval(timer)},100);
  addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  if(window.visualViewport)visualViewport.addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  burst();
})();
