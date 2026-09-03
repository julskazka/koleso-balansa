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

    /* Never add horizontal padding to the full section: it caused 100%-wide
       children to overflow to the right. Keep the section on its native grid. */
    section.style.setProperty('padding-left','0','important');
    section.style.setProperty('padding-right','0','important');
    section.style.setProperty('box-sizing','border-box','important');

    const safeWidth='calc(100% - 24px)';

    const heading=[...section.querySelectorAll('h1,h2,h3,.content-title-v73,.section-title')]
      .find(el=>norm(el.textContent).includes('тем, кому нужен не идеальный план'));
    if(heading){
      heading.style.setProperty('width',safeWidth,'important');
      heading.style.setProperty('max-width',safeWidth,'important');
      heading.style.setProperty('box-sizing','border-box','important');
      heading.style.setProperty('padding-left','0','important');
      heading.style.setProperty('padding-right','0','important');
      heading.style.setProperty('margin-left','auto','important');
      heading.style.setProperty('margin-right','auto','important');
    }

    const list=section.querySelector('.club999-whofor-list-v136');
    if(list){
      list.style.setProperty('width',safeWidth,'important');
      list.style.setProperty('max-width',safeWidth,'important');
      list.style.setProperty('box-sizing','border-box','important');
      list.style.setProperty('margin-left','auto','important');
      list.style.setProperty('margin-right','auto','important');
      list.style.setProperty('padding-left','0','important');
      list.style.setProperty('padding-right','0','important');
    }

    section.querySelectorAll('.club999-whofor-row-v136').forEach(row=>{
      row.style.setProperty('width','100%','important');
      row.style.setProperty('max-width','100%','important');
      row.style.setProperty('box-sizing','border-box','important');
      row.style.setProperty('margin-left','0','important');
      row.style.setProperty('margin-right','0','important');
      row.style.setProperty('padding-left','10px','important');
      row.style.setProperty('padding-right','12px','important');
    });

    const footer=section.querySelector('.club999-whofor-footer-v136');
    if(footer){
      footer.style.setProperty('width',safeWidth,'important');
      footer.style.setProperty('max-width',safeWidth,'important');
      footer.style.setProperty('box-sizing','border-box','important');
      footer.style.setProperty('margin-left','auto','important');
      footer.style.setProperty('margin-right','auto','important');
      footer.style.setProperty('padding-left','18px','important');
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