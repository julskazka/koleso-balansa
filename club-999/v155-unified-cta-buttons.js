(()=>{
  const STYLE_ID='club999-unified-cta-style-v161';
  const CLASS='club999-unified-cta-v161';
  const SHINE_CLASS='club999-unified-shine-v161';

  const COPY_PROPS=[
    'background','backgroundColor','backgroundImage','backgroundPosition','backgroundSize',
    'borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth',
    'borderTopStyle','borderRightStyle','borderBottomStyle','borderLeftStyle',
    'borderTopColor','borderRightColor','borderBottomColor','borderLeftColor',
    'borderRadius','boxShadow','color','fontFamily','fontWeight','lineHeight',
    'letterSpacing','textShadow','textTransform','minHeight',
    'paddingTop','paddingRight','paddingBottom','paddingLeft'
  ];

  const cssName=name=>name.replace(/[A-Z]/g,m=>'-'+m.toLowerCase());
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function injectStyle(){
    let old=document.getElementById(STYLE_ID);
    if(old) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .${CLASS}{
        position:relative!important;
        isolation:isolate!important;
        overflow:hidden!important;
        display:flex!important;
        align-items:center!important;
        justify-content:center!important;
        box-sizing:border-box!important;
        appearance:none!important;
        -webkit-appearance:none!important;
        text-decoration:none!important;
        text-align:center!important;
        cursor:pointer!important;
        gap:0!important;
      }
      .${CLASS}>b,
      .${CLASS}>i,
      .${CLASS} .button-arrow,
      .${CLASS} [class*="arrow"],
      .${CLASS} svg[data-arrow]{display:none!important}
      .${CLASS}::after{display:none!important}
      .${CLASS}>span:not(.${SHINE_CLASS}),
      .${CLASS}>strong{
        position:relative!important;
        z-index:21!important;
        color:inherit!important;
        -webkit-text-fill-color:currentColor!important;
      }
      .${SHINE_CLASS}{
        position:absolute!important;
        z-index:20!important;
        pointer-events:none!important;
        top:-48%!important;
        left:-38%!important;
        width:29%!important;
        height:200%!important;
        display:block!important;
        border:0!important;
        border-radius:0!important;
        padding:0!important;
        margin:0!important;
        transform:rotate(18deg)!important;
        background:linear-gradient(90deg,
          transparent 0%,
          rgba(255,255,255,.10) 16%,
          rgba(255,255,246,.66) 38%,
          rgba(255,255,255,1) 50%,
          rgba(255,255,246,.66) 62%,
          rgba(255,255,255,.10) 84%,
          transparent 100%)!important;
        box-shadow:0 0 14px rgba(255,255,240,.88)!important;
        filter:blur(.15px)!important;
        mix-blend-mode:screen!important;
        opacity:0!important;
        will-change:left,opacity!important;
        animation:club999UnifiedShine161 2.45s ease-in-out infinite!important;
      }
      @keyframes club999UnifiedShine161{
        0%,30%{left:-38%;opacity:0}
        35%{opacity:1}
        66%{left:118%;opacity:1}
        72%,100%{left:118%;opacity:0}
      }
      @media(max-width:700px){
        .${CLASS}{min-height:48px!important}
        .${SHINE_CLASS}{width:31%!important}
      }
    `;
    document.head.appendChild(style);
  }

  function cleanArrow(button){
    [...button.querySelectorAll('b,i,span,strong')].forEach(el=>{
      if(el.classList.contains(SHINE_CLASS)) return;
      const t=(el.textContent||'').replace(/\s+/g,' ').trim();
      if(/^(→|➜|➝|➤|›|»|⟶|➡)$/.test(t)) el.style.setProperty('display','none','important');
    });
  }

  function ensureShine(button){
    let shine=button.querySelector(':scope > .'+SHINE_CLASS);
    if(!shine){
      [...button.querySelectorAll(':scope > [class*="club999-unified-shine-"]')].forEach(el=>el.remove());
      shine=document.createElement('span');
      shine.className=SHINE_CLASS;
      shine.setAttribute('aria-hidden','true');
      button.insertBefore(shine,button.firstChild);
    }
  }

  function copyLook(source,target,fontSize){
    const cs=getComputedStyle(source);
    COPY_PROPS.forEach(prop=>{
      const value=cs[prop];
      if(value) target.style.setProperty(cssName(prop),value,'important');
    });
    target.style.setProperty('font-size',fontSize+'px','important');
    target.style.setProperty('box-sizing','border-box','important');
    target.style.setProperty('transform','none','important');
    target.style.setProperty('right','auto','important');
  }

  function collectButtons(first){
    const selectors=[
      '[data-purchase]',
      '.button--primary',
      '.section-action .button',
      '.club999-question-button-v152'
    ];
    const nodes=[first,...selectors.flatMap(sel=>[...document.querySelectorAll(sel)])];

    const textButtons=[...document.querySelectorAll('button,a,[role="button"]')].filter(el=>{
      const t=norm(el.textContent);
      return t.includes('посмотреть, что есть внутри') ||
        t.includes('вступить в клуб за 999') ||
        t.includes('найти свою точку опоры') ||
        t.includes('вступить в клуб и задать вопрос') ||
        t.includes('вступить в «центр ресурса»') ||
        t.includes('вступить в "центр ресурса"');
    });
    return [...new Set([...nodes,...textButtons])].filter(el=>el && (el.matches('button,a') || el.getAttribute('role')==='button'));
  }

  function alignMobile(button,refLeft,refWidth){
    button.style.setProperty('width',refWidth+'px','important');
    button.style.setProperty('max-width',refWidth+'px','important');
    button.style.setProperty('margin-left','0px','important');
    button.style.setProperty('margin-right','0px','important');
    button.style.setProperty('left','auto','important');
    button.style.setProperty('right','auto','important');
    button.style.setProperty('transform','none','important');

    const correct=()=>{
      const r=button.getBoundingClientRect();
      const current=parseFloat(getComputedStyle(button).marginLeft)||0;
      const delta=refLeft-r.left;
      if(Math.abs(delta)>.25){
        button.style.setProperty('margin-left',(current+delta)+'px','important');
      }
    };
    correct();
    requestAnimationFrame(correct);
    setTimeout(correct,60);
  }

  function alignDesktop(button,refWidth){
    button.style.setProperty('width','100%','important');
    button.style.setProperty('max-width',refWidth+'px','important');
    button.style.setProperty('margin-left','auto','important');
    button.style.setProperty('margin-right','auto','important');
    button.style.setProperty('left','auto','important');
    button.style.setProperty('right','auto','important');
    button.style.setProperty('transform','none','important');
  }

  function apply(){
    const first=document.querySelector('.hero41__button');
    if(!first) return false;
    injectStyle();

    if(!first.dataset.club999UnifiedBaseFontSize){
      first.dataset.club999UnifiedBaseFontSize=String(parseFloat(getComputedStyle(first).fontSize)||15);
    }
    const baseFont=parseFloat(first.dataset.club999UnifiedBaseFontSize)||15;
    const unifiedFont=Math.min(baseFont+1.4,19);

    first.style.setProperty('font-size',unifiedFont+'px','important');
    cleanArrow(first);
    const heroArrow=first.querySelector('b');
    if(heroArrow) heroArrow.style.setProperty('display','none','important');

    const ref=first.getBoundingClientRect();
    const refLeft=ref.left;
    const refWidth=ref.width;
    const buttons=collectButtons(first);

    buttons.forEach(button=>{
      if(button===first) return;
      button.classList.add(CLASS);
      copyLook(first,button,unifiedFont);
      cleanArrow(button);
      ensureShine(button);
      if(innerWidth<=700) alignMobile(button,refLeft,refWidth);
      else alignDesktop(button,refWidth);
    });

    return buttons.length>0;
  }

  function burst(){
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [180,450,900,1300,1800,2400,3200].forEach(ms=>setTimeout(apply,ms));
    if(document.fonts&&document.fonts.ready) document.fonts.ready.then(()=>{apply();setTimeout(apply,120);});
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    apply();
    if(tries>=35) clearInterval(timer);
  },100);

  addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  if(window.visualViewport) visualViewport.addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  burst();
})();
