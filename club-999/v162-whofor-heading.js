(()=>{
  const TEXT='Тем, кому нужен не идеальный план, а следующая точка опоры';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const vw=()=>Math.round(window.visualViewport?.width||document.documentElement.clientWidth||innerWidth);

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
    const heading=[...section.querySelectorAll('h2')].find(h=>{
      const t=norm(h.dataset.v75Title||h.textContent);
      return t.includes('тем, кому нужен не идеальный план');
    });
    if(!heading) return false;

    heading.dataset.v75Title=TEXT;
    heading.innerHTML='<span class="club999-whofor-title-line-v163">Тем, кому нужен</span><br><span class="club999-whofor-title-line-v163">не идеальный план, а</span><br><span class="club999-whofor-title-line-v163">следующая точка опоры</span>';
    heading.style.setProperty('width','calc(100% - 32px)','important');
    heading.style.setProperty('max-width','100%','important');
    heading.style.setProperty('margin-left','auto','important');
    heading.style.setProperty('margin-right','auto','important');
    heading.style.setProperty('padding','0','important');
    heading.style.setProperty('left','auto','important');
    heading.style.setProperty('right','auto','important');
    heading.style.setProperty('transform','none','important');
    heading.style.setProperty('text-align','center','important');
    heading.style.setProperty('overflow','visible','important');

    const lines=[...heading.querySelectorAll('.club999-whofor-title-line-v163')];
    lines.forEach(line=>{
      line.style.setProperty('display','inline-block','important');
      line.style.setProperty('white-space','nowrap','important');
      line.style.setProperty('max-width','100%','important');
    });

    heading.style.removeProperty('font-size');
    let size=parseFloat(getComputedStyle(heading).fontSize)||30;
    const min=24;
    const available=Math.max(240,heading.clientWidth-6);
    const over=()=>lines.some(line=>line.scrollWidth>available+.5);
    while(size>min&&over()){
      size-=.5;
      heading.style.setProperty('font-size',size+'px','important');
    }
    return true;
  }

  function burst(){
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [120,320,700,1200,2200].forEach(ms=>setTimeout(apply,ms));
  }
  let n=0;
  const timer=setInterval(()=>{n++;apply();if(n>=35)clearInterval(timer)},100);
  addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  if(window.visualViewport)visualViewport.addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  burst();
})();
