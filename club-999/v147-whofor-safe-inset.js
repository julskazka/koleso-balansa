(()=>{
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const rowTexts=[
    'Вы находитесь в периоде изменений',
    'Ищете новые ориентиры',
    'Устали от противоречивых советов',
    'Не понимаете, с чего начать',
    'Хотите выбирать специалистов осознанно',
    'Не готовы менять всё сразу, но готовы сделать один конкретный шаг'
  ];

  function smallestMatch(test){
    const nodes=[...document.querySelectorAll('body *')].filter(el=>test(norm(el.textContent)));
    nodes.sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length);
    return nodes[0]||null;
  }

  function apply(){
    if(innerWidth>700) return true;

    const kicker=smallestMatch(t=>t==='кому подойдёт');
    if(!kicker) return false;
    const section=kicker.closest('section');
    if(!section) return false;

    /* Keep the page section itself on the native grid. */
    section.style.setProperty('padding-left','0','important');
    section.style.setProperty('padding-right','0','important');
    section.style.setProperty('overflow-x','hidden','important');

    const heading=smallestMatch(t=>t.includes('тем, кому нужен не идеальный план') && t.includes('следующая точка опоры'));
    if(heading && section.contains(heading)){
      heading.style.setProperty('width','calc(100% - 32px)','important');
      heading.style.setProperty('max-width','calc(100% - 32px)','important');
      heading.style.setProperty('box-sizing','border-box','important');
      heading.style.setProperty('margin-left','auto','important');
      heading.style.setProperty('margin-right','auto','important');
      heading.style.setProperty('padding-left','0','important');
      heading.style.setProperty('padding-right','0','important');
    }

    const rows=[...section.querySelectorAll('.club999-whofor-row-v136')];
    rows.forEach(row=>{
      row.style.setProperty('width','calc(100% - 24px)','important');
      row.style.setProperty('max-width','calc(100% - 24px)','important');
      row.style.setProperty('box-sizing','border-box','important');
      row.style.setProperty('margin-left','auto','important');
      row.style.setProperty('margin-right','auto','important');
      row.style.setProperty('padding-left','10px','important');
      row.style.setProperty('padding-right','14px','important');
    });

    /* If the shared list host exists, it must stay full width so the child rows
       can center themselves instead of inheriting an already reduced width. */
    const list=section.querySelector('.club999-whofor-list-v136');
    if(list){
      list.style.setProperty('width','100%','important');
      list.style.setProperty('max-width','100%','important');
      list.style.setProperty('margin-left','0','important');
      list.style.setProperty('margin-right','0','important');
      list.style.setProperty('padding-left','0','important');
      list.style.setProperty('padding-right','0','important');
      list.style.setProperty('box-sizing','border-box','important');
    }

    const footer=section.querySelector('.club999-whofor-footer-v136') || smallestMatch(t=>t==='достаточно одного вопроса, который сейчас не даёт покоя.');
    if(footer && section.contains(footer)){
      footer.style.setProperty('width','calc(100% - 24px)','important');
      footer.style.setProperty('max-width','calc(100% - 24px)','important');
      footer.style.setProperty('box-sizing','border-box','important');
      footer.style.setProperty('margin-left','auto','important');
      footer.style.setProperty('margin-right','auto','important');
      footer.style.setProperty('padding-left','18px','important');
      footer.style.setProperty('padding-right','18px','important');
    }

    return rows.length>0;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(apply()||tries>120) clearInterval(timer);
  },100);
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  setTimeout(apply,400);
  setTimeout(apply,900);
})();