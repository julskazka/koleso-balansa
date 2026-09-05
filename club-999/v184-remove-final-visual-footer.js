(()=>{
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const compact=s=>norm(s).replace(/\s+/g,'').replace(/[«»"'.,:;!?—–·-]/g,'');

  function hide(el){
    if(!el) return;
    el.style.setProperty('display','none','important');
    el.style.setProperty('margin','0','important');
    el.style.setProperty('padding','0','important');
    el.style.setProperty('min-height','0','important');
    el.style.setProperty('height','0','important');
    el.style.setProperty('border','0','important');
  }

  function outerSameText(el){
    if(!el) return null;
    const target=norm(el.textContent);
    let host=el;
    let node=el.parentElement;
    for(let i=0;i<4&&node&&node!==document.body;i++,node=node.parentElement){
      if(norm(node.textContent)!==target) break;
      host=node;
    }
    return host;
  }

  function finalSection(){
    return [...document.querySelectorAll('section,article,div')]
      .filter(el=>{
        const t=compact(el.textContent);
        return t.includes('вашаточкаопоры') &&
               t.includes('неищитеидеальныймомент') &&
               t.includes('найтисвоюточкуопоры');
      })
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null;
  }

  function removeLargeVisual(section){
    if(!section) return false;
    const kicker=[...section.querySelectorAll('*')]
      .filter(el=>compact(el.textContent)==='вашаточкаопоры')
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0];
    if(!kicker) return false;

    const kr=kicker.getBoundingClientRect();
    const sr=section.getBoundingClientRect();

    const direct=[...section.children]
      .filter(el=>{
        const r=el.getBoundingClientRect();
        const t=norm(el.textContent);
        return !t && r.height>120 && r.width>sr.width*.55 && r.bottom<=kr.top+24;
      })
      .sort((a,b)=>b.getBoundingClientRect().height-a.getBoundingClientRect().height);

    if(direct[0]){
      hide(direct[0]);
      return true;
    }

    const candidates=[...section.querySelectorAll('div,figure,picture,svg,canvas,img')]
      .filter(el=>{
        if(el===section || el.contains(kicker) || kicker.contains(el)) return false;
        const r=el.getBoundingClientRect();
        const t=norm(el.textContent);
        return !t && r.height>150 && r.width>sr.width*.45 && r.bottom<=kr.top+28;
      })
      .sort((a,b)=>{
        const ar=a.getBoundingClientRect(), br=b.getBoundingClientRect();
        return (br.width*br.height)-(ar.width*ar.height);
      });

    if(candidates[0]){
      hide(candidates[0]);
      return true;
    }
    return false;
  }

  function removeFooterLabels(){
    const targets=[
      el=>compact(el.textContent)==='центрресурсаколесобаланса',
      el=>norm(el.textContent)==='2026'
    ];
    let changed=false;
    targets.forEach(match=>{
      [...document.querySelectorAll('body *')]
        .filter(match)
        .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)
        .slice(0,3)
        .forEach(el=>{hide(outerSameText(el));changed=true});
    });
    return changed;
  }

  function tightenAfterVisual(section){
    if(!section) return;
    const kicker=[...section.querySelectorAll('*')]
      .filter(el=>compact(el.textContent)==='вашаточкаопоры')
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0];
    if(!kicker) return;
    kicker.style.setProperty('margin-top','0','important');
    let node=kicker.parentElement;
    for(let i=0;i<3&&node&&node!==section;i++,node=node.parentElement){
      const cs=getComputedStyle(node);
      if(cs.display==='flex' || cs.display==='grid'){
        node.style.setProperty('row-gap','10px','important');
      }
    }
  }

  function apply(){
    const section=finalSection();
    const a=removeLargeVisual(section);
    removeFooterLabels();
    tightenAfterVisual(section);
    return !!section || a;
  }

  let tries=0;
  const timer=setInterval(()=>{tries++;apply();if(tries>100)clearInterval(timer)},100);
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [180,450,900,1600,2800,4600,7000].forEach(ms=>setTimeout(apply,ms));
})();
