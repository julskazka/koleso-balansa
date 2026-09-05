(()=>{
  const STYLE_ID='club999-access-clean-v175-style';
  const NOTE_CLASS='club999-access-note-v175';
  const compact=s=>(s||'').toLowerCase().replace(/\s+/g,'').replace(/[«»"'.,:;!?—–-]/g,'');
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .${NOTE_CLASS}{
        margin:8px auto 0!important;
        padding:0!important;
        width:calc(100% - 28px)!important;
        max-width:330px!important;
        color:rgba(255,255,255,.82)!important;
        font-size:12.5px!important;
        line-height:1.32!important;
        font-weight:500!important;
        text-align:center!important;
      }
      .${NOTE_CLASS} span{display:block!important}
      @media(min-width:700px){
        .${NOTE_CLASS}{max-width:420px!important;font-size:13px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function findSection(){
    const candidates=[...document.querySelectorAll('section,article,div')]
      .filter(el=>{
        const t=compact(el.textContent);
        return t.includes('условиядоступа') &&
               t.includes('полныйдоступкцентруресурса') &&
               t.includes('вступитьвклубза999');
      })
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length);
    return candidates[0]||null;
  }

  function findButton(section){
    return [...section.querySelectorAll('button,a,[data-purchase],div,span')]
      .filter(el=>norm(el.textContent)==='вступить в клуб за 999 ₽')
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null;
  }

  function clickableFor(el,section){
    if(!el) return null;
    return el.closest('button,a,[data-purchase]') || el;
  }

  function decoratedWrap(el,section,maxHeight=170){
    if(!el) return null;
    let node=el;
    while(node && node!==section && node!==document.body){
      const r=node.getBoundingClientRect();
      const cs=getComputedStyle(node);
      const radius=parseFloat(cs.borderRadius)||0;
      const border=(parseFloat(cs.borderTopWidth)||0)+(parseFloat(cs.borderRightWidth)||0);
      if(r.width>150 && r.height>20 && r.height<=maxHeight && (radius>=10 || border>0)) return node;
      node=node.parentElement;
    }
    return el;
  }

  function hidePrice(section,button){
    const price=[...section.querySelectorAll('div,p,span,strong,b')]
      .filter(el=>norm(el.textContent)==='999 ₽' && !button?.contains(el) && !el.closest('button,a,[data-purchase]'))
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0];
    if(!price) return;
    let node=price;
    while(node && node!==section){
      const t=norm(node.textContent);
      const r=node.getBoundingClientRect();
      if(t.includes('999 ₽') && t.includes('в месяц') && r.height<150 && !node.contains(button)){
        node.style.setProperty('display','none','important');
        return;
      }
      node=node.parentElement;
    }
    decoratedWrap(price,section,120)?.style.setProperty('display','none','important');
  }

  function hideRenewalCopies(section,button){
    [...section.querySelectorAll('div,p,span,strong,b')].forEach(el=>{
      if(button?.contains(el)) return;
      const t=norm(el.textContent);
      const isOld=t.includes('подписка продлевается ежемесячно') && t.includes('отменить её можно в любой момент');
      const isBottom=t.includes('999 ₽ в месяц') && t.includes('автоматическое продление') && t.includes('отмена в любой момент');
      if(!isOld && !isBottom) return;
      const wrap=decoratedWrap(el,section,isBottom?130:110);
      if(wrap && !wrap.contains(button)) wrap.style.setProperty('display','none','important');
    });
  }

  function outerSection(inner){
    if(!inner) return null;
    let node=inner;
    while(node.parentElement && node.parentElement!==document.body){
      const parent=node.parentElement;
      const t=compact(parent.textContent);
      if(!t.includes('условиядоступа') || !t.includes('полныйдоступкцентруресурса')) break;
      node=parent;
      if(node.matches?.('section,.section')) break;
    }
    return node;
  }

  function previousSection(shell){
    if(!shell) return null;
    let prev=shell.previousElementSibling;
    while(prev){
      if(prev.matches?.('section,.section')) return prev;
      if((prev.textContent||'').trim()) return prev;
      prev=prev.previousElementSibling;
    }
    return null;
  }

  function tightenGap(section){
    section.style.setProperty('margin-top','0','important');

    const shell=outerSection(section)||section;
    shell.style.setProperty('margin-top','0','important');
    shell.style.setProperty('min-height','0','important');
    if(shell!==section){
      shell.style.setProperty('padding-top','4px','important');
    }

    const prev=previousSection(shell);
    if(prev){
      prev.style.setProperty('margin-bottom','0','important');
      prev.style.setProperty('padding-bottom','4px','important');
      prev.style.setProperty('min-height','0','important');
    }

    const parent=shell.parentElement;
    if(parent){
      const display=getComputedStyle(parent).display;
      if(display.includes('grid') || display.includes('flex')){
        parent.style.setProperty('row-gap','6px','important');
        parent.style.setProperty('gap','6px','important');
      }
    }
  }

  function addNote(section,button){
    if(!button) return;
    section.querySelectorAll('.'+NOTE_CLASS).forEach((el,i)=>{if(i>0)el.remove()});
    let note=section.querySelector('.'+NOTE_CLASS);
    if(!note){
      note=document.createElement('div');
      note.className=NOTE_CLASS;
      note.innerHTML='<span>Подписка продлевается ежемесячно.</span><span>Отменить её можно в любой момент.</span>';
    }
    const anchor=clickableFor(button,section);
    if(anchor.nextElementSibling!==note) anchor.insertAdjacentElement('afterend',note);
  }

  function apply(){
    injectStyle();
    const section=findSection();
    if(!section) return false;
    const buttonText=findButton(section);
    const button=clickableFor(buttonText,section);
    tightenGap(section);
    hidePrice(section,button);
    hideRenewalCopies(section,button);
    addNote(section,buttonText||button);
    return true;
  }

  function burst(){
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [180,450,900,1600,2800].forEach(ms=>setTimeout(apply,ms));
  }

  let tries=0;
  const timer=setInterval(()=>{tries++;if(apply()||tries>90)clearInterval(timer)},120);
  addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  if(window.visualViewport) visualViewport.addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  burst();
})();
