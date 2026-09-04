(()=>{
  const STYLE_ID='club999-unified-cta-style-v155';
  const CLASS='club999-unified-cta-v155';

  const COPY_PROPS=[
    'background','backgroundColor','backgroundImage','backgroundPosition','backgroundSize',
    'borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth',
    'borderTopStyle','borderRightStyle','borderBottomStyle','borderLeftStyle',
    'borderTopColor','borderRightColor','borderBottomColor','borderLeftColor',
    'borderRadius','boxShadow','color','fontFamily','fontSize','fontWeight','lineHeight',
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
      .${CLASS}>span,
      .${CLASS}>strong{position:relative!important;z-index:3!important;color:inherit!important;-webkit-text-fill-color:currentColor!important}
      .${CLASS}::after{
        content:""!important;
        position:absolute!important;
        z-index:2!important;
        pointer-events:none!important;
        top:-45%!important;
        left:-48%!important;
        width:34%!important;
        height:190%!important;
        transform:rotate(20deg)!important;
        background:linear-gradient(90deg,transparent,rgba(255,255,255,.10),rgba(255,255,248,.82),rgba(255,255,255,.10),transparent)!important;
        filter:blur(.2px)!important;
        opacity:0!important;
        animation:club999UnifiedShine155 3.3s ease-in-out infinite!important;
      }
      @keyframes club999UnifiedShine155{
        0%,55%{left:-48%;opacity:0}
        60%{opacity:1}
        78%{left:116%;opacity:1}
        84%,100%{left:116%;opacity:0}
      }
      @media(max-width:700px){
        .${CLASS}{min-height:48px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function copyFirstButtonStyle(source,target){
    const cs=getComputedStyle(source);
    COPY_PROPS.forEach(prop=>{
      const value=cs[prop];
      if(value) target.style.setProperty(cssName(prop),value,'important');
    });
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

  function apply(){
    const first=document.querySelector('.hero41__button');
    if(!first) return false;
    injectStyle();

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
      copyFirstButtonStyle(first,button);
      cleanArrow(button);
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
