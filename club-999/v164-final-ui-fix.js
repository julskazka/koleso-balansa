(()=>{
  const STYLE_ID='club999-final-ui-v164-style';
  const TITLE='Тем, кому нужен не идеальный план, а следующая точка опоры';
  const LINES=['Тем, кому нужен','не идеальный план, а','следующая точка опоры'];
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const viewport=()=>Math.round(window.visualViewport?.width||document.documentElement.clientWidth||innerWidth);

  function injectStyle(){
    let style=document.getElementById(STYLE_ID);
    if(style) style.remove();
    style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      @media(max-width:700px){
        h2.club999-whofor-title-v164{
          display:flex!important;
          flex-direction:column!important;
          align-items:center!important;
          justify-content:center!important;
          gap:0!important;
          width:calc(100% - 32px)!important;
          max-width:none!important;
          box-sizing:border-box!important;
          margin-left:auto!important;
          margin-right:auto!important;
          padding:0!important;
          left:auto!important;
          right:auto!important;
          transform:none!important;
          text-align:center!important;
          overflow:visible!important;
        }
        h2.club999-whofor-title-v164>.club999-whofor-title-line-v164{
          display:block!important;
          flex:none!important;
          width:auto!important;
          max-width:100%!important;
          margin:0!important;
          padding:0!important;
          position:static!important;
          left:auto!important;
          right:auto!important;
          transform:none!important;
          white-space:nowrap!important;
          text-align:center!important;
        }
      }
      .club999-cta-text-centered-v164{
        display:flex!important;
        align-items:center!important;
        justify-content:center!important;
        text-align:center!important;
      }
      .club999-cta-text-centered-v164>.club999-cta-copy-v164{
        position:relative!important;
        z-index:30!important;
        display:block!important;
        flex:1 1 auto!important;
        width:100%!important;
        max-width:100%!important;
        box-sizing:border-box!important;
        margin:0!important;
        padding:0!important;
        left:auto!important;
        right:auto!important;
        inset:auto!important;
        transform:none!important;
        translate:none!important;
        text-align:center!important;
        color:inherit!important;
        -webkit-text-fill-color:currentColor!important;
      }
    `;
    document.head.appendChild(style);
  }

  function findWhoForSection(){
    const kicker=[...document.querySelectorAll('body *')]
      .filter(el=>norm(el.textContent)==='кому подойдёт')
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0];
    return kicker?.closest('section')||null;
  }

  function fixHeading(){
    if(viewport()>700) return true;
    const section=findWhoForSection();
    if(!section) return false;
    const heading=[...section.querySelectorAll('h2')].find(h=>{
      const text=norm(h.dataset.v75Title||h.textContent);
      return text.includes('тем, кому нужен не идеальный план');
    });
    if(!heading) return false;

    heading.classList.add('club999-whofor-title-v164');
    heading.dataset.v75Title=TITLE;

    const current=[...heading.querySelectorAll(':scope > .club999-whofor-title-line-v164')].map(el=>el.textContent);
    if(current.length!==3 || current.some((text,i)=>text!==LINES[i])){
      heading.replaceChildren(...LINES.map(line=>{
        const span=document.createElement('span');
        span.className='club999-whofor-title-line-v164';
        span.textContent=line;
        return span;
      }));
    }

    const lines=[...heading.querySelectorAll(':scope > .club999-whofor-title-line-v164')];
    heading.style.removeProperty('font-size');
    let size=parseFloat(getComputedStyle(heading).fontSize)||30;
    const min=24;
    const available=Math.max(240,heading.clientWidth-4);
    const overflow=()=>lines.some(line=>line.scrollWidth>available+.5);
    while(size>min&&overflow()){
      size-=.5;
      heading.style.setProperty('font-size',size+'px','important');
    }
    return true;
  }

  function collectButtons(){
    const first=document.querySelector('.hero41__button');
    const selectors=['[data-purchase]','.button--primary','.section-action .button','.club999-question-button-v152'];
    const nodes=[first,...selectors.flatMap(sel=>[...document.querySelectorAll(sel)])];
    const byText=[...document.querySelectorAll('button,a,[role="button"]')].filter(el=>{
      const t=norm(el.textContent);
      return t.includes('посмотреть, что есть внутри')||
        t.includes('вступить в клуб за 999')||
        t.includes('найти свою точку опоры')||
        t.includes('вступить в клуб и задать вопрос')||
        t.includes('вступить в «центр ресурса»')||
        t.includes('вступить в "центр ресурса"');
    });
    return {first,buttons:[...new Set([...nodes,...byText])].filter(el=>el && (el.matches('button,a')||el.getAttribute('role')==='button'))};
  }

  function visibleLabel(button){
    const clone=button.cloneNode(true);
    [...clone.querySelectorAll('[class*="shine"],[class*="arrow"],b,i,svg')].forEach(el=>el.remove());
    return (clone.textContent||'')
      .replace(/[→➜➝➤›»⟶➡]+/g,' ')
      .replace(/\s+/g,' ')
      .trim();
  }

  function rebuildButtonCopy(button){
    const label=visibleLabel(button);
    if(!label) return;
    const shine=[...button.children].find(el=>String(el.className||'').toLowerCase().includes('shine'))||null;
    const copy=document.createElement('span');
    copy.className='club999-cta-copy-v164';
    copy.textContent=label;
    if(shine) button.replaceChildren(shine,copy);
    else button.replaceChildren(copy);
  }

  function fixButtonText(){
    const {first,buttons}=collectButtons();
    buttons.forEach(button=>{
      button.classList.add('club999-cta-text-centered-v164');
      button.style.setProperty('text-align','center','important');
      button.style.setProperty('justify-content','center','important');
      button.style.setProperty('align-items','center','important');
      if(button!==first){
        const label=visibleLabel(button);
        const copy=button.querySelector(':scope > .club999-cta-copy-v164');
        const current=(copy?.textContent||'').replace(/\s+/g,' ').trim();
        if(!copy || current!==label) rebuildButtonCopy(button);
      }
    });
    return buttons.length>0;
  }

  function apply(){
    injectStyle();
    const a=fixHeading();
    const b=fixButtonText();
    return a||b;
  }

  function burst(){
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [120,300,650,1100,1800,2800,4200].forEach(ms=>setTimeout(apply,ms));
  }

  let n=0;
  const timer=setInterval(()=>{n++;apply();if(n>=50)clearInterval(timer)},100);
  addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  if(window.visualViewport) visualViewport.addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  burst();
})();
