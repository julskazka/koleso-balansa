(()=>{
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function findAudienceSection(){
    const intro=document.querySelector('.audience__intro');
    if(intro) return intro.closest('.section,section');
    const kicker=[...document.querySelectorAll('body *')].find(el=>norm(el.textContent)==='кому подойдёт');
    return kicker ? kicker.closest('.section,section') : null;
  }

  function siblingSection(section,dir){
    let node=dir<0?section.previousElementSibling:section.nextElementSibling;
    while(node){
      if(node.matches?.('.section,section')) return node;
      node=dir<0?node.previousElementSibling:node.nextElementSibling;
    }
    return null;
  }

  function apply(){
    if(innerWidth>700) return true;
    const section=findAudienceSection();
    if(!section) return false;

    const prev=siblingSection(section,-1);
    const next=siblingSection(section,1);

    // Убираем именно межсекционные пустоты, не двигая содержимое audience.
    if(prev){
      prev.style.setProperty('padding-bottom','8px','important');
      prev.style.setProperty('margin-bottom','0','important');
    }

    section.style.setProperty('padding-top','8px','important');
    section.style.setProperty('padding-bottom','8px','important');
    section.style.setProperty('margin-top','0','important');
    section.style.setProperty('margin-bottom','0','important');

    if(next){
      next.style.setProperty('padding-top','8px','important');
      next.style.setProperty('margin-top','0','important');
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
  setTimeout(apply,1200);
})();
