(()=>{
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const kickerText='кому подойдёт';
  const headingNeedle='тем, кому нужен не идеальный план';
  const firstText='вы находитесь в периоде изменений';

  function smallestByText(test){
    const els=[...document.querySelectorAll('body *')].filter(el=>{
      const t=norm(el.textContent);
      return t && test(t);
    });
    els.sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length);
    return els[0]||null;
  }

  function visibleRect(el){
    if(!el) return null;
    const cs=getComputedStyle(el);
    if(cs.display==='none'||cs.visibility==='hidden'||Number(cs.opacity)===0) return null;
    const r=el.getBoundingClientRect();
    if(r.width<2||r.height<2) return null;
    return r;
  }

  function previousContentBottom(kicker){
    const kr=kicker.getBoundingClientRect();
    let best=-Infinity;
    const ancestors=new Set();
    let a=kicker;
    while(a){ancestors.add(a);a=a.parentElement;}
    for(const el of document.querySelectorAll('body *')){
      if(ancestors.has(el)||el.contains(kicker)||kicker.contains(el)) continue;
      const txt=norm(el.textContent);
      if(!txt) continue;
      const r=visibleRect(el);
      if(!r) continue;
      if(r.bottom<=kr.top+1 && r.bottom>best && r.width>80 && r.height<220){best=r.bottom;}
    }
    return Number.isFinite(best)?best:null;
  }

  function listHost(firstRow,heading){
    let best=firstRow.parentElement;
    let node=best;
    for(let i=0;i<6&&node&&node!==document.body;i++,node=node.parentElement){
      if(node.contains(heading)) break;
      best=node;
    }
    return best;
  }

  function apply(){
    const kicker=smallestByText(t=>t===kickerText);
    const heading=smallestByText(t=>t.includes(headingNeedle));
    const firstRow=document.querySelector('.club999-whofor-row-v136')||smallestByText(t=>t===firstText);
    if(!kicker||!heading||!firstRow) return false;

    const section=kicker.closest('section')||kicker.parentElement;
    const prevBottom=previousContentBottom(kicker);
    if(section&&prevBottom!==null&&!section.dataset.v140TopDone){
      const gap=kicker.getBoundingClientRect().top-prevBottom;
      const desired=12;
      if(gap>desired+2){
        const delta=Math.min(120,gap-desired);
        section.style.setProperty('margin-top',`-${delta}px`,'important');
      }
      section.style.setProperty('padding-top','0','important');
      section.dataset.v140TopDone='1';
    }

    const host=listHost(firstRow,heading);
    if(host&&!host.dataset.v140ListDone){
      const gap=firstRow.getBoundingClientRect().top-heading.getBoundingClientRect().bottom;
      const desired=11;
      if(gap>desired+2){
        const delta=Math.min(90,gap-desired);
        host.style.setProperty('margin-top',`-${delta}px`,'important');
      }
      host.dataset.v140ListDone='1';
    }
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(apply()||tries>80) clearInterval(timer);
  },100);
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  setTimeout(apply,500);
})();
