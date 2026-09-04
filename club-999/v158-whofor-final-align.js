(()=>{
  const TITLE='тем, кому нужен не идеальный план, а следующая точка опоры';
  const LINES=['Тем, кому нужен','не идеальный план, а','следующая точка','опоры'];
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function vw(){
    const visual=Math.round(window.visualViewport?.width||0);
    const client=document.documentElement.clientWidth||0;
    return visual>0?Math.min(visual,client||visual):(client||innerWidth);
  }

  function place(el,side=20,maxWidth=Infinity){
    if(!el) return;
    const width=Math.min(Math.max(260,vw()-side*2),maxWidth);
    el.style.setProperty('width',width+'px','important');
    el.style.setProperty('max-width',width+'px','important');
    el.style.setProperty('box-sizing','border-box','important');
    el.style.setProperty('margin-left','0','important');
    el.style.setProperty('margin-right','0','important');
    el.style.setProperty('left','0','important');
    el.style.setProperty('right','auto','important');
    el.style.setProperty('transform','none','important');
    requestAnimationFrame(()=>{
      el.style.setProperty('transform','none','important');
      const r=el.getBoundingClientRect();
      const target=(vw()-width)/2;
      el.style.setProperty('transform',`translateX(${target-r.left}px)`,'important');
    });
  }

  function findSection(){
    const kicker=[...document.querySelectorAll('body *')]
      .filter(el=>norm(el.textContent)==='кому подойдёт')
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0];
    return kicker?.closest('section')||null;
  }

  function apply(){
    if(vw()>700) return true;
    const section=findSection();
    if(!section) return false;

    section.style.setProperty('padding-left','0','important');
    section.style.setProperty('padding-right','0','important');
    section.style.setProperty('overflow-x','visible','important');

    const heading=[...section.querySelectorAll('h2')].find(h=>{
      const t=norm(h.dataset.v75Title||h.textContent);
      return t===TITLE||t.includes('тем, кому нужен не идеальный план');
    });
    if(heading){
      heading.dataset.v75Title='Тем, кому нужен не идеальный план, а следующая точка опоры';
      heading.innerHTML=LINES.map(line=>`<span class="content-title-line-v73">${line}</span>`).join('');
      heading.querySelectorAll(':scope > .content-title-line-v73').forEach(line=>{
        line.style.setProperty('display','block','important');
        line.style.setProperty('width','max-content','important');
        line.style.setProperty('max-width','100%','important');
        line.style.setProperty('margin-left','auto','important');
        line.style.setProperty('margin-right','auto','important');
        line.style.setProperty('white-space','nowrap','important');
        line.style.setProperty('word-break','keep-all','important');
        line.style.setProperty('overflow-wrap','normal','important');
      });
      heading.style.setProperty('padding-left','0','important');
      heading.style.setProperty('padding-right','0','important');
      heading.style.setProperty('overflow','visible','important');
      place(heading,20);
    }

    const rows=[...section.querySelectorAll('.club999-whofor-row-v136')];
    rows.forEach(row=>{
      row.style.setProperty('padding-left','10px','important');
      row.style.setProperty('padding-right','14px','important');
      place(row,20);
    });

    const footer=section.querySelector('.club999-whofor-footer-v136');
    if(footer) place(footer,20);

    const action=document.getElementById('club999-audience-question-action-v152');
    if(action){
      action.style.setProperty('margin-top','9px','important');
      action.style.setProperty('margin-bottom','10px','important');
      place(action,20,420);
      const button=action.querySelector('button,a,[role="button"]');
      if(button){
        button.style.setProperty('width','100%','important');
        button.style.setProperty('max-width','100%','important');
        button.style.setProperty('margin-left','0','important');
        button.style.setProperty('margin-right','0','important');
        button.style.setProperty('left','auto','important');
        button.style.setProperty('right','auto','important');
        button.style.setProperty('transform','none','important');
      }
    }
    return rows.length>0;
  }

  function burst(){
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [120,300,600,1000,1600,2400].forEach(ms=>setTimeout(apply,ms));
  }

  let n=0;
  const timer=setInterval(()=>{
    n++;
    apply();
    if(n>=30) clearInterval(timer);
  },100);
  addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  if(window.visualViewport) visualViewport.addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  burst();
})();
