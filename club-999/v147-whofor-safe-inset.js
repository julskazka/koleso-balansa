(()=>{
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  function exact(text){
    const target=norm(text);
    const nodes=[...document.querySelectorAll('body *')].filter(el=>norm(el.textContent)===target);
    nodes.sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length);
    return nodes[0]||null;
  }
  function apply(){
    if(innerWidth>700) return true;
    const kicker=exact('Кому подойдёт');
    if(!kicker) return false;
    const section=kicker.closest('section');
    if(!section) return false;

    section.style.setProperty('padding-left','10px','important');
    section.style.setProperty('padding-right','10px','important');
    section.style.setProperty('box-sizing','border-box','important');

    const heading=[...section.querySelectorAll('h1,h2,h3,.content-title-v73,.section-title')]
      .find(el=>norm(el.textContent).includes('тем, кому нужен не идеальный план'));
    if(heading){
      heading.style.setProperty('width','100%','important');
      heading.style.setProperty('max-width','100%','important');
      heading.style.setProperty('box-sizing','border-box','important');
      heading.style.setProperty('padding-left','3px','important');
      heading.style.setProperty('padding-right','3px','important');
      heading.style.setProperty('margin-left','auto','important');
      heading.style.setProperty('margin-right','auto','important');
    }

    section.querySelectorAll('.club999-whofor-row-v136').forEach(row=>{
      row.style.setProperty('width','100%','important');
      row.style.setProperty('max-width','100%','important');
      row.style.setProperty('box-sizing','border-box','important');
      row.style.setProperty('padding-right','13px','important');
    });

    const footer=section.querySelector('.club999-whofor-footer-v136');
    if(footer){
      footer.style.setProperty('width','100%','important');
      footer.style.setProperty('max-width','100%','important');
      footer.style.setProperty('box-sizing','border-box','important');
      footer.style.setProperty('padding-right','18px','important');
    }
    return true;
  }
  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(apply()||tries>100) clearInterval(timer);
  },100);
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  setTimeout(apply,500);
})();