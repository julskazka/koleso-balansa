(()=>{
  const STYLE_ID='club999-v166-style';
  const CTA_CLASS='club999-v166-cta';
  const COPY_CLASS='club999-v166-copy';
  const SHINE_CLASS='club999-v166-shine';
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
        display:flex!important;
        align-items:center!important;
        justify-content:center!important;
        text-align:center!important;
        box-sizing:border-box!important;
      }
      .${CTA_CLASS}>.${COPY_CLASS}{
        position:relative!important;
        z-index:20!important;
        display:block!important;
        flex:1 1 auto!important;
        width:100%!important;
        max-width:100%!important;
        margin:0!important;
        padding:0!important;
        left:auto!important;
        right:auto!important;
        transform:none!important;
        translate:none!important;
        text-align:center!important;
        color:inherit!important;
        -webkit-text-fill-color:currentColor!important;
      }
      .${SHINE_CLASS}{
        position:absolute!important;
        z-index:10!important;
        pointer-events:none!important;
        top:-55%!important;
        left:-34%!important;
        width:24%!important;
        height:210%!important;
        margin:0!important;
        padding:0!important;
        border:0!important;
        background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.08) 18%,rgba(255,255,246,.62) 40%,rgba(255,255,255,.98) 50%,rgba(255,255,246,.62) 60%,rgba(255,255,255,.08) 82%,transparent 100%)!important;
        box-shadow:0 0 12px rgba(255,255,238,.72)!important;
        filter:blur(.2px)!important;
        transform:rotate(18deg)!important;
        opacity:0!important;
        animation:club999V166Shine 2.7s ease-in-out infinite!important;
      }
      @keyframes club999V166Shine{
        0%,34%{left:-34%;opacity:0}
        40%{opacity:.98}
        68%{left:116%;opacity:.98}
        75%,100%{left:116%;opacity:0}
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
    heading.replaceChildren(...LINES.map(text=>{
      const span=document.createElement('span');
      span.className='club999-v166-title-line';
      span.textContent=text;
      return span;
    }));

    if((window.visualViewport?.width||document.documentElement.clientWidth||innerWidth)<=700){
      heading.style.removeProperty('font-size');
      const lines=[...heading.querySelectorAll(':scope > .club999-v166-title-line')];
      let size=parseFloat(getComputedStyle(heading).fontSize)||30;
      const min=24;
      const available=Math.max(240,heading.clientWidth-4);
      const overflow=()=>lines.some(line=>line.scrollWidth>available+.5);
      while(size>min&&overflow()){
        size-=.5;
        heading.style.setProperty('font-size',size+'px','important');
      }
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
    return {first,buttons:[...new Set(found)].filter(el=>el && el!==first && (el.matches('button,a')||el.getAttribute('role')==='button'))};
  }

  const props=['background','backgroundColor','backgroundImage','backgroundPosition','backgroundSize','borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth','borderTopStyle','borderRightStyle','borderBottomStyle','borderLeftStyle','borderTopColor','borderRightColor','borderBottomColor','borderLeftColor','borderRadius','boxShadow','color','fontFamily','fontWeight','fontSize','lineHeight','letterSpacing','textShadow','textTransform','minHeight','paddingTop','paddingRight','paddingBottom','paddingLeft'];
  const cssName=name=>name.replace(/[A-Z]/g,m=>'-'+m.toLowerCase());

  function copyLook(source,target){
    const cs=getComputedStyle(source);
    props.forEach(prop=>{
      const value=cs[prop];
      if(value) target.style.setProperty(cssName(prop),value,'important');
    });
  }

  function labelOf(button){
    const clone=button.cloneNode(true);
    [...clone.querySelectorAll('[class*="shine"],[class*="arrow"],b,i,svg')].forEach(el=>el.remove());
    return (clone.textContent||'').replace(/[→➜➝➤›»⟶➡]+/g,' ').replace(/\s+/g,' ').trim();
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

  function fixButtons(){
    const {first,buttons}=collectButtons();
    if(!first) return false;
    const refWidth=first.getBoundingClientRect().width;

    buttons.forEach(button=>{
      const label=labelOf(button);
      if(!label) return;
      button.classList.add(CTA_CLASS);
      copyLook(first,button);
      button.style.setProperty('left','auto','important');
      button.style.setProperty('right','auto','important');
      button.style.setProperty('transform','none','important');
      button.style.setProperty('margin-left','auto','important');
      button.style.setProperty('margin-right','auto','important');
      if(refWidth>0){
        const parentWidth=button.parentElement?.getBoundingClientRect().width||refWidth;
        const width=Math.min(refWidth,parentWidth);
        button.style.setProperty('width',width+'px','important');
        button.style.setProperty('max-width','100%','important');
      }
      rebuild(button,label);
    });

    const action=document.getElementById('club999-audience-question-action-v152');
    if(action){
      action.style.setProperty('margin-left','auto','important');
      action.style.setProperty('margin-right','auto','important');
      action.style.setProperty('left','auto','important');
      action.style.setProperty('right','auto','important');
      action.style.setProperty('transform','none','important');
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
