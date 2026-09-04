(()=>{
  const STYLE_ID='club999-v168-style';
  const CTA_CLASS='club999-v168-cta';
  const COPY_CLASS='club999-v168-copy';
  const SHINE_CLASS='club999-v168-shine';
  const LINES=['Тем, кому нужен','не идеальный план, а','следующая точка опоры'];
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      @media(max-width:700px){
        .club999-v166-title{
          display:flex!important;
          flex-direction:column!important;
          align-items:center!important;
          justify-content:center!important;
          gap:0!important;
          width:calc(100% - 32px)!important;
          max-width:calc(100% - 32px)!important;
          margin-left:auto!important;
          margin-right:auto!important;
          padding:0!important;
          left:auto!important;
          right:auto!important;
          transform:none!important;
          text-align:center!important;
          overflow:visible!important;
        }
        .club999-v166-title>.club999-v166-title-line{
          display:block!important;
          width:auto!important;
          max-width:100%!important;
          margin:0!important;
          padding:0!important;
          position:static!important;
          transform:none!important;
          white-space:nowrap!important;
          text-align:center!important;
        }
      }
      .${CTA_CLASS}{
        position:relative!important;
        isolation:isolate!important;
        overflow:hidden!important;
        box-sizing:border-box!important;
        text-align:center!important;
        text-decoration:none!important;
        appearance:none!important;
        -webkit-appearance:none!important;
      }
      .${CTA_CLASS}::after{display:none!important}
      .${CTA_CLASS}>.${COPY_CLASS}{
        position:absolute!important;
        z-index:30!important;
        inset:0!important;
        display:grid!important;
        place-items:center!important;
        width:100%!important;
        height:100%!important;
        min-width:0!important;
        max-width:none!important;
        box-sizing:border-box!important;
        margin:0!important;
        padding:0 14px!important;
        transform:none!important;
        translate:none!important;
        text-align:center!important;
        text-indent:0!important;
        white-space:normal!important;
        line-height:inherit!important;
        color:inherit!important;
        -webkit-text-fill-color:currentColor!important;
        pointer-events:none!important;
      }
      .${SHINE_CLASS}{
        position:absolute!important;
        z-index:20!important;
        pointer-events:none!important;
        top:-55%!important;
        left:-34%!important;
        width:26%!important;
        height:210%!important;
        margin:0!important;
        padding:0!important;
        border:0!important;
        border-radius:0!important;
        background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.10) 16%,rgba(255,255,246,.70) 39%,rgba(255,255,255,1) 50%,rgba(255,255,246,.70) 61%,rgba(255,255,255,.10) 84%,transparent 100%)!important;
        box-shadow:0 0 13px rgba(255,255,238,.82)!important;
        filter:blur(.15px)!important;
        transform:rotate(18deg)!important;
        opacity:0!important;
        animation:club999V168Shine 2.6s ease-in-out infinite!important;
      }
      @keyframes club999V168Shine{
        0%,32%{left:-34%;opacity:0}
        39%{opacity:1}
        68%{left:116%;opacity:1}
        76%,100%{left:116%;opacity:0}
      }
    `;
    document.head.appendChild(style);
  }

  function findWhoForSection(){
    const kicker=[...document.querySelectorAll('body *')]
      .filter(el=>norm(el.textContent)==='кому подойдёт')
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0];
    if(!kicker) return null;
    return kicker.closest('section,.section') || kicker.parentElement?.closest('section,.section') || null;
  }

  function fixHeading(){
    const section=findWhoForSection();
    if(!section) return false;
    const heading=section.querySelector('h2');
    if(!heading) return false;
    heading.classList.add('club999-v166-title');
    heading.dataset.v75Title='Тем, кому нужен не идеальный план, а следующая точка опоры';
    const current=[...heading.querySelectorAll(':scope > .club999-v166-title-line')].map(el=>el.textContent);
    if(current.length!==3 || current.some((text,i)=>text!==LINES[i])){
      heading.replaceChildren(...LINES.map(text=>{
        const span=document.createElement('span');
        span.className='club999-v166-title-line';
        span.textContent=text;
        return span;
      }));
    }
    return true;
  }

  function firstButton(){
    return document.querySelector('.hero41__button');
  }

  function collectButtons(){
    const first=firstButton();
    const selectors=['[data-purchase]','.button--primary','.section-action .button','.club999-question-button-v152'];
    const found=selectors.flatMap(sel=>[...document.querySelectorAll(sel)]);
    const byText=[...document.querySelectorAll('button,a,[role="button"]')].filter(el=>{
      const t=norm(el.textContent);
      return t.includes('посмотреть, что есть внутри')||
        t.includes('вступить в клуб за 999')||
        t.includes('найти свою точку опоры')||
        t.includes('вступить в клуб и задать вопрос')||
        t.includes('вступить в «центр ресурса»')||
        t.includes('вступить в "центр ресурса"');
    });
    return {first,buttons:[...new Set([first,...found,...byText])].filter(el=>el && (el.matches('button,a')||el.getAttribute('role')==='button'))};
  }

  const props=[
    'background','backgroundColor','backgroundImage','backgroundPosition','backgroundSize',
    'borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth',
    'borderTopStyle','borderRightStyle','borderBottomStyle','borderLeftStyle',
    'borderTopColor','borderRightColor','borderBottomColor','borderLeftColor',
    'borderRadius','boxShadow','color','fontFamily','fontWeight','fontSize','lineHeight',
    'letterSpacing','textShadow','textTransform','minHeight',
    'paddingTop','paddingRight','paddingBottom','paddingLeft'
  ];
  const cssName=name=>name.replace(/[A-Z]/g,m=>'-'+m.toLowerCase());

  function copyLook(source,target){
    const cs=getComputedStyle(source);
    props.forEach(prop=>{
      const value=cs[prop];
      if(value) target.style.setProperty(cssName(prop),value,'important');
    });
  }

  function labelOf(button){
    if(button.dataset.club999V168Label) return button.dataset.club999V168Label;
    if(button.dataset.club999V167Label){
      button.dataset.club999V168Label=button.dataset.club999V167Label;
      return button.dataset.club999V168Label;
    }
    const clone=button.cloneNode(true);
    [...clone.querySelectorAll('[class*="shine"],[class*="arrow"],b,i,svg')].forEach(el=>el.remove());
    const label=(clone.textContent||'').replace(/[→➜➝➤›»⟶➡]+/g,' ').replace(/\s+/g,' ').trim();
    if(label) button.dataset.club999V168Label=label;
    return label;
  }

  function rebuild(button,label){
    const shine=document.createElement('span');
    shine.className=SHINE_CLASS;
    shine.setAttribute('aria-hidden','true');
    const copy=document.createElement('span');
    copy.className=COPY_CLASS;
    copy.textContent=label;
    button.replaceChildren(shine,copy);
  }

  function parentContentLeft(parent){
    const r=parent.getBoundingClientRect();
    const cs=getComputedStyle(parent);
    const border=parseFloat(cs.borderLeftWidth)||0;
    const padding=parseFloat(cs.paddingLeft)||0;
    return r.left+border+padding;
  }

  function placeLikeFirst(button,refWidth){
    const vw=Math.round(window.visualViewport?.width||document.documentElement.clientWidth||innerWidth);
    const width=Math.min(refWidth,Math.max(260,vw-32));
    const targetLeft=(vw-width)/2;

    button.style.setProperty('width',width+'px','important');
    button.style.setProperty('max-width',width+'px','important');
    button.style.setProperty('box-sizing','border-box','important');
    button.style.setProperty('left','auto','important');
    button.style.setProperty('right','auto','important');
    button.style.setProperty('transform','none','important');
    button.style.setProperty('translate','none','important');
    button.style.setProperty('margin-right','0','important');

    const parent=button.parentElement;
    if(parent){
      parent.style.setProperty('overflow-x','visible','important');
      const ml=targetLeft-parentContentLeft(parent);
      button.style.setProperty('margin-left',ml+'px','important');
    }else{
      button.style.setProperty('margin-left','auto','important');
      button.style.setProperty('margin-right','auto','important');
    }
  }

  function fixButtons(){
    const {first,buttons}=collectButtons();
    if(!first) return false;
    const refWidth=first.getBoundingClientRect().width;
    if(refWidth<=0) return false;

    buttons.forEach(button=>{
      const label=labelOf(button);
      if(!label) return;

      button.classList.remove('club999-v167-cta','club999-v166-cta','club999-unified-cta-v163','club999-unified-cta-v162');
      button.classList.add(CTA_CLASS);

      if(button!==first){
        copyLook(first,button);
        placeLikeFirst(button,refWidth);
      }

      const copy=button.querySelector(':scope > .'+COPY_CLASS);
      if(!copy || copy.textContent!==label || button.children.length!==2) rebuild(button,label);
    });

    const action=document.getElementById('club999-audience-question-action-v152');
    if(action){
      action.style.setProperty('width','100%','important');
      action.style.setProperty('max-width','none','important');
      action.style.setProperty('margin-left','0','important');
      action.style.setProperty('margin-right','0','important');
      action.style.setProperty('left','auto','important');
      action.style.setProperty('right','auto','important');
      action.style.setProperty('transform','none','important');
      action.style.setProperty('translate','none','important');
      action.style.setProperty('overflow-x','visible','important');
    }
    return buttons.length>0;
  }

  function apply(){
    injectStyle();
    fixHeading();
    fixButtons();
  }

  function burst(){
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [120,300,700,1200,2200,3600].forEach(ms=>setTimeout(apply,ms));
  }

  let n=0;
  const timer=setInterval(()=>{n++;apply();if(n>=45)clearInterval(timer)},100);
  addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  if(window.visualViewport) visualViewport.addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  burst();
})();
