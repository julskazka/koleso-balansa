(()=>{
  const STYLE_ID='club999-unified-cta-style-v156';
  const CLASS='club999-unified-cta-v155';
  const SHINE_CLASS='club999-unified-shine-v156';

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

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
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
        width:100%!important;
        max-width:100%!important;
        box-sizing:border-box!important;
        gap:0!important;
        appearance:none!important;
        -webkit-appearance:none!important;
        text-decoration:none!important;
        text-align:center!important;
        cursor:pointer!important;
      }
      .${CLASS}>b,
      .${CLASS}>i,
      .${CLASS} .button-arrow,
      .${CLASS} [class*="arrow"],
      .${CLASS} svg[data-arrow]{display:none!important}
      .${CLASS}::after{display:none!important}
      .${CLASS}>span:not(.${SHINE_CLASS}),
      .${CLASS}>strong{position:relative!important;z-index:3!important;color:inherit!important;-webkit-text-fill-color:currentColor!important}
      .${SHINE_CLASS}{
        position:absolute!important;
        z-index:2!important;
        pointer-events:none!important;
        top:-55%!important;
        left:-36%!important;
        width:24%!important;
        height:210%!important;
        display:block!important;
        border:0!important;
        border-radius:0!important;
        padding:0!important;
        margin:0!important;
        transform:rotate(18deg)!important;
        background:linear-gradient(90deg,
          transparent 0%,
          rgba(255,255,255,.08) 18%,
          rgba(255,255,246,.62) 40%,
          rgba(255,255,255,.98) 50%,
          rgba(255,255,246,.62) 60%,
          rgba(255,255,255,.08) 82%,
          transparent 100%)!important;
        box-shadow:0 0 12px rgba(255,255,238,.72)!important;
        filter:blur(.25px)!important;
        opacity:0!important;
        will-change:left,opacity!important;
        animation:club999UnifiedShine156 2.7s ease-in-out infinite!important;
      }
      @keyframes club999UnifiedShine156{
        0%,38%{left:-36%;opacity:0}
        43%{opacity:.98}
        68%{left:116%;opacity:.98}
        74%,100%{left:116%;opacity:0}
      }
      @media(max-width:700px){
        .${CLASS}{min-height:48px!important}
        .${SHINE_CLASS}{width:27%!important}
      }
    `;
    document.head.appendChild(style);
  }

  function copyFirstButtonStyle(source,target,fontSize){
    const cs=getComputedStyle(source);
    COPY_PROPS.forEach(prop=>{
      const value=cs[prop];
      if(value) target.style.setProperty(cssName(prop),value,'important');
    });
    target.style.setProperty('font-size',fontSize+'px','important');
    target.style.setProperty('width','100%','important');
    target.style.setProperty('max-width','100%','important');
    target.style.setProperty('box-sizing','border-box','important');
    target.style.setProperty('transform','none','important');
  }

  function cleanArrow(button){
    [...button.querySelectorAll('b,i,span,strong')].forEach(el=>{
      const t=(el.textContent||'').replace(/\s+/g,' ').trim();
      if(/^(→|➜|➝|➤|›|»|⟶|➡)$/.test(t)) el.style.setProperty('display','none','important');
    });
  }

  function ensureShine(button){
    let shine=button.querySelector(':scope > .'+SHINE_CLASS);
    if(!shine){
      shine=document.createElement('span');
      shine.className=SHINE_CLASS;
      shine.setAttribute('aria-hidden','true');
      button.insertBefore(shine,button.firstChild);
    }
  }

  function apply(){
    const first=document.querySelector('.hero41__button');
    if(!first) return false;
    injectStyle();

    if(!first.dataset.club999UnifiedBaseFontSize){
      const base=parseFloat(getComputedStyle(first).fontSize)||15;
      first.dataset.club999UnifiedBaseFontSize=String(base);
    }
    const baseFont=parseFloat(first.dataset.club999UnifiedBaseFontSize)||15;
    const unifiedFont=Math.min(baseFont+1.4,19);

    const nodes=[
      first,
      ...document.querySelectorAll('[data-purchase]'),
      ...document.querySelectorAll('.button--primary'),
      ...document.querySelectorAll('.section-action .button'),
      ...document.querySelectorAll('.club999-question-button-v152')
    ];
    const buttons=[...new Set(nodes)].filter(el=>el && (el.matches('button,a') || el.getAttribute('role')==='button'));

    buttons.forEach(button=>{
      button.classList.add(CLASS);
      copyFirstButtonStyle(first,button,unifiedFont);
      cleanArrow(button);
      ensureShine(button);
    });

    const heroArrow=first.querySelector('b');
    if(heroArrow) heroArrow.style.setProperty('display','none','important');
    return buttons.length>0;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(apply()||tries>100) clearInterval(timer);
  },100);
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  setTimeout(apply,400);
  setTimeout(apply,900);
})();
