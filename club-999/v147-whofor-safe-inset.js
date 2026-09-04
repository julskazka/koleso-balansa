(()=>{
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const TITLE='тем, кому нужен не идеальный план, а следующая точка опоры';
  const TITLE_LINES=['Тем, кому нужен','не идеальный план, а','следующая точка','опоры'];

  function viewportWidth(){
    return document.documentElement.clientWidth || innerWidth;
  }

  function centerInViewport(el,widthPx){
    if(!el) return;
    const vw=viewportWidth();
    const safeWidth=Math.min(widthPx,Math.max(260,vw-40));
    el.style.setProperty('width',`${safeWidth}px`,'important');
    el.style.setProperty('max-width',`${safeWidth}px`,'important');
    el.style.setProperty('box-sizing','border-box','important');
    el.style.setProperty('margin-left','0','important');
    el.style.setProperty('margin-right','0','important');
    el.style.setProperty('left','0','important');
    el.style.setProperty('right','auto','important');
    el.style.setProperty('transform','none','important');
    const r=el.getBoundingClientRect();
    const targetLeft=Math.max(20,(vw-safeWidth)/2);
    const dx=targetLeft-r.left;
    el.style.setProperty('transform',`translateX(${dx}px)`,'important');
  }

  function apply(){
    if(innerWidth>700) return true;

    const kicker=[...document.querySelectorAll('body *')]
      .filter(el=>norm(el.textContent)==='кому подойдёт')
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0];
    if(!kicker) return false;

    const section=kicker.closest('section');
    if(!section) return false;
    section.style.setProperty('padding-left','0','important');
    section.style.setProperty('padding-right','0','important');
    section.style.setProperty('overflow-x','visible','important');

    const heading=[...section.querySelectorAll('h2')].find(h=>{
      const original=norm(h.dataset.v75Title||h.textContent);
      return original===TITLE || original.includes('тем, кому нужен не идеальный план');
    });

    const vw=viewportWidth();
    const contentWidth=Math.max(260,vw-40);

    if(heading){
      heading.dataset.v75Title='Тем, кому нужен не идеальный план, а следующая точка опоры';
      heading.innerHTML=TITLE_LINES.map(line=>`<span class="content-title-line-v73">${line}</span>`).join('');
      heading.querySelectorAll('.content-title-line-v73').forEach(line=>{
        line.style.setProperty('display','block','important');
        line.style.setProperty('width','auto','important');
        line.style.setProperty('max-width','100%','important');
        line.style.setProperty('margin-left','auto','important');
        line.style.setProperty('margin-right','auto','important');
        line.style.setProperty('white-space','nowrap','important');
      });
      heading.style.setProperty('padding-left','0','important');
      heading.style.setProperty('padding-right','0','important');
      heading.style.setProperty('overflow','visible','important');
      centerInViewport(heading,contentWidth);
    }

    const rows=[...section.querySelectorAll('.club999-whofor-row-v136')];
    rows.forEach(row=>{
      row.style.setProperty('padding-left','10px','important');
      row.style.setProperty('padding-right','14px','important');
      centerInViewport(row,contentWidth);
    });

    const footer=section.querySelector('.club999-whofor-footer-v136');
    if(footer){
      footer.style.setProperty('padding-left','18px','important');
      footer.style.setProperty('padding-right','18px','important');
      centerInViewport(footer,contentWidth);
    }

    return rows.length>0;
  }

  function run(){
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    setTimeout(apply,180);
    setTimeout(apply,500);
    setTimeout(apply,1000);
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(apply()||tries>120) clearInterval(timer);
  },100);
  addEventListener('resize',()=>setTimeout(run,80),{passive:true});
  run();
})();