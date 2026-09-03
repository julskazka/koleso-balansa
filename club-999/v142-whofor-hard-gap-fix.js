(()=>{
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const K='кому подойдёт';
  const H='тем, кому нужен не идеальный план';

  function smallest(test){
    const all=[...document.querySelectorAll('body *')].filter(el=>test(norm(el.textContent)));
    all.sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length);
    return all[0]||null;
  }

  function smallestCommon(a,b,exclude){
    if(!a||!b) return null;
    let n=a;
    while(n&&n!==document.body){
      if(n.contains(b) && (!exclude || !n.contains(exclude))) return n;
      n=n.parentElement;
    }
    return null;
  }

  function smallestRowsHost(rows,exclude){
    if(!rows.length) return null;
    let n=rows[0].parentElement;
    while(n&&n!==document.body){
      if(rows.every(r=>n.contains(r)) && (!exclude || !n.contains(exclude))) return n;
      n=n.parentElement;
    }
    return null;
  }

  function apply(){
    if(innerWidth>700) return true;
    const kicker=smallest(t=>t===K);
    const heading=smallest(t=>t.includes(H));
    const rows=[...document.querySelectorAll('.club999-whofor-row-v136')];
    const first=rows[0]||null;
    if(!kicker||!heading||!first) return false;

    const intro=smallestCommon(kicker,heading,first) || kicker.parentElement;
    const list=smallestRowsHost(rows,heading) || first.parentElement;

    if(intro){
      intro.style.setProperty('margin-top','-58px','important');
      intro.style.setProperty('margin-bottom','0','important');
      intro.style.setProperty('padding-top','0','important');
      intro.style.setProperty('padding-bottom','0','important');
      intro.style.setProperty('min-height','0','important');
      intro.style.setProperty('gap','5px','important');
      [...intro.children].forEach(el=>{
        el.style.setProperty('margin-top','0','important');
        el.style.setProperty('padding-top','0','important');
      });
      kicker.style.setProperty('margin-bottom','6px','important');
      heading.style.setProperty('margin-top','0','important');
      heading.style.setProperty('margin-bottom','0','important');
    }

    if(list){
      list.style.setProperty('margin-top','-24px','important');
      list.style.setProperty('padding-top','0','important');
      list.style.setProperty('gap','4px','important');
    }else{
      first.style.setProperty('margin-top','-24px','important');
    }

    const section=kicker.closest('section');
    if(section){
      section.style.setProperty('padding-top','0','important');
      section.style.setProperty('padding-bottom','16px','important');
      section.style.setProperty('min-height','0','important');
    }
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(apply()||tries>120) clearInterval(timer);
  },100);
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  setTimeout(apply,400);
  setTimeout(apply,1000);
})();