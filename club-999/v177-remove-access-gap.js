(()=>{
  const compact=s=>(s||'').toLowerCase().replace(/\s+/g,'').replace(/[«»"'.,:;!?—–-]/g,'');

  function findAccessSection(){
    return [...document.querySelectorAll('section,article,div')]
      .filter(el=>{
        const t=compact(el.textContent);
        return t.includes('условиядоступа') &&
               t.includes('полныйдоступкцентруресурса') &&
               t.includes('вступитьвклубза999');
      })
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null;
  }

  function outerSection(inner){
    let node=inner;
    while(node?.parentElement && node.parentElement!==document.body){
      const parent=node.parentElement;
      const t=compact(parent.textContent);
      if(!t.includes('условиядоступа') || !t.includes('полныйдоступкцентруресурса')) break;
      node=parent;
      if(node.matches?.('section,.section')) break;
    }
    return node;
  }

  function apply(){
    const inner=findAccessSection();
    if(!inner) return false;

    const shell=outerSection(inner)||inner;
    inner.style.setProperty('margin-top','0','important');
    shell.style.setProperty('margin-top','0','important');
    shell.style.setProperty('padding-top','0','important');
    shell.style.setProperty('min-height','0','important');

    let prev=shell.previousElementSibling;
    while(prev && !(prev.matches?.('section,.section')) && !(prev.textContent||'').trim()){
      prev=prev.previousElementSibling;
    }
    if(prev){
      prev.style.setProperty('margin-bottom','0','important');
      prev.style.setProperty('padding-bottom','0','important');
      prev.style.setProperty('min-height','0','important');
    }

    const parent=shell.parentElement;
    if(parent){
      const display=getComputedStyle(parent).display;
      if(display.includes('grid') || display.includes('flex')){
        parent.style.setProperty('row-gap','0','important');
        parent.style.setProperty('gap','0','important');
      }
    }
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(apply() || tries>80) clearInterval(timer);
  },100);
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [200,500,1000,1800].forEach(ms=>setTimeout(apply,ms));
})();
