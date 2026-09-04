(()=>{
  const STYLE_ID='club999-heading-fit-readability-v75';
  const TITLE_LINES={
    'А ясности всё равно нет':['А ясности всё','равно нет'],
    'Точки входа в ваш актуальный запрос':['Точки входа','в ваш актуальный запрос'],
    'Темы пересекаются и дополняют друг друга':['Темы пересекаются','и дополняют','друг друга'],
    'Материалы и люди, к которым можно возвращаться':['Материалы и люди,','к которым можно','возвращаться'],
    'Иногда нужен не ещё один эфир, а ответ на свой вопрос':['Иногда нужен','не ещё один эфир,','а ответ на свой вопрос'],
    'Нужное не теряется в ленте':['Нужное не теряется','в ленте'],
    'Тем, кому нужен не идеальный план, а следующая точка опоры':['Тем, кому нужен','не идеальный план, а','следующая точка','опоры'],
    'Жизненные задачи меняются':['Жизненные задачи','меняются'],
    'Полный доступ к «Центру Ресурса»':['Полный доступ к','«Центру Ресурса»'],
    'Не ищите идеальный момент, чтобы заняться собой':['Не ищите','идеальный момент,','чтобы заняться собой']
  };

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .heading-readable-v75{
        position:relative!important;
        isolation:isolate!important;
        overflow:visible!important;
      }
      .heading-readable-v75::before{
        content:"";
        position:absolute;
        z-index:-1;
        pointer-events:none;
        left:-20px;
        right:-20px;
        top:-20px;
        bottom:-22px;
        border-radius:50%;
        background:radial-gradient(ellipse at center,
          rgba(2,20,29,.78) 0%,
          rgba(2,24,33,.62) 38%,
          rgba(2,26,35,.34) 62%,
          rgba(2,26,35,0) 84%);
        filter:blur(10px);
      }
      .heading-readable-v75>*{
        position:relative;
        z-index:1;
      }
      .heading-readable-v75 .section-kicker{
        text-shadow:0 2px 8px rgba(0,12,18,.74)!important;
      }
      .heading-readable-v75 h2{
        overflow:visible!important;
        filter:drop-shadow(0 2px 7px rgba(0,11,17,.58));
      }
      .heading-readable-v75>p:not(.section-kicker),
      .heading-readable-v75 .heading-support-v75{
        text-shadow:0 1px 7px rgba(0,10,16,.76)!important;
      }

      @media(max-width:700px){
        .section:not(.hero){overflow:visible!important}
        .section:not(.hero) h2.content-title-v73,
        .clarity h2.clarity-title-v71{
          display:block!important;
          width:100%!important;
          max-width:100%!important;
          box-sizing:border-box!important;
          padding-left:4px!important;
          padding-right:4px!important;
          overflow:visible!important;
        }
        .section:not(.hero) h2.content-title-v73 .content-title-line-v73,
        .clarity h2.clarity-title-v71 .clarity-title-line-v71{
          display:block!important;
          width:auto!important;
          max-width:100%!important;
          margin-left:auto!important;
          margin-right:auto!important;
          white-space:nowrap!important;
          overflow:visible!important;
          text-overflow:clip!important;
        }
        .heading-readable-v75{
          width:100%!important;
          max-width:100%!important;
          box-sizing:border-box!important;
          padding-left:0!important;
          padding-right:0!important;
        }
        .heading-readable-v75::before{
          left:-10px;
          right:-10px;
          top:-15px;
          bottom:-17px;
          filter:blur(8px);
        }
      }
    `;
    document.head.appendChild(style);
  }

  function titleText(h){
    return (h.dataset.v75Title || h.textContent || '').replace(/\s+/g,' ').trim();
  }

  function setLines(h,lines){
    h.dataset.v75Title=titleText(h);
    const spanClass=h.classList.contains('clarity-title-v71')?'clarity-title-line-v71':'content-title-line-v73';
    h.innerHTML=lines.map(line=>`<span class="${spanClass}">${line}</span>`).join('');
  }

  function headingBox(h){
    return h.closest('.section-heading,.directions__heading,.connection__copy,.questions__copy,.audience__intro,.return__card>div,.access__copy,.final') || h.parentElement;
  }

  function markReadability(h){
    const box=headingBox(h);
    if(!box) return;
    box.classList.add('heading-readable-v75');
    const support=[...box.children].find(el=>el.tagName==='P'&&!el.classList.contains('section-kicker'));
    if(support) support.classList.add('heading-support-v75');
  }

  function fitOne(h){
    if(innerWidth>700) return;
    const lines=[...h.querySelectorAll(':scope > span')];
    if(!lines.length) return;
    h.style.removeProperty('font-size');
    const base=parseFloat(getComputedStyle(h).fontSize)||32;
    const min=24;
    const available=Math.max(240,h.clientWidth-8);
    let size=base;
    const overflow=()=>lines.some(line=>line.scrollWidth>available+0.5);
    while(size>min && overflow()){
      size-=0.5;
      h.style.setProperty('font-size',`${size}px`,'important');
    }
    if(overflow()){
      lines.forEach(line=>{
        line.style.setProperty('white-space','normal','important');
        line.style.setProperty('text-wrap','balance','important');
      });
    }
  }

  function apply(){
    injectStyle();
    const headings=[...document.querySelectorAll('section.section:not(.hero) h2')];
    if(!headings.length) return false;
    headings.forEach(h=>{
      const text=titleText(h);
      const lines=TITLE_LINES[text];
      if(lines) setLines(h,lines);
      markReadability(h);
    });
    requestAnimationFrame(()=>{
      headings.forEach(fitOne);
      setTimeout(()=>headings.forEach(fitOne),120);
      if(document.fonts&&document.fonts.ready){document.fonts.ready.then(()=>headings.forEach(fitOne));}
    });
    return true;
  }

  let resizeTimer;
  addEventListener('resize',()=>{
    clearTimeout(resizeTimer);
    resizeTimer=setTimeout(()=>document.querySelectorAll('section.section:not(.hero) h2').forEach(fitOne),120);
  },{passive:true});

  if(!apply()){
    let attempts=0;
    const timer=setInterval(()=>{
      attempts+=1;
      if(apply()||attempts>=60) clearInterval(timer);
    },100);
  }
})();