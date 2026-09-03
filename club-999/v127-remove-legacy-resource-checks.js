(()=>{
  const ROW='.club999-resource-row-v124';
  const clean=()=>{
    const rows=[...document.querySelectorAll(ROW)];
    if(!rows.length) return false;
    rows.forEach(row=>{
      let branch=row;
      let host=row.parentElement;
      for(let depth=0;depth<3&&host;depth++){
        const hostText=(host.textContent||'').replace(/\s+/g,' ').trim();
        const rowText=(row.textContent||'').replace(/\s+/g,' ').trim();
        if(!hostText.includes(rowText)||hostText.length>rowText.length+8) break;
        [...host.children].forEach(child=>{
          if(child===branch||child.contains(row)) return;
          const txt=(child.textContent||'').replace(/\s+/g,' ').trim();
          const aria=(child.getAttribute?.('aria-label')||'').toLowerCase();
          const cls=(child.className||'').toString().toLowerCase();
          const hasNew=child.querySelector?.('.club999-resource-icon-v124,.club999-resource-copy-v124');
          if(hasNew) return;
          if(!txt||/^[✓✔☑]$/.test(txt)||aria.includes('check')||cls.includes('check')) child.remove();
        });
        branch=host;
        host=host.parentElement;
      }
    });
    return true;
  };
  if(!clean()){
    let n=0;
    const timer=setInterval(()=>{n++;if(clean()||n>80)clearInterval(timer)},100);
  }
  const observer=new MutationObserver(()=>clean());
  observer.observe(document.documentElement,{childList:true,subtree:true});
  setTimeout(()=>observer.disconnect(),6000);
})();
