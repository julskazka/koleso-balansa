(()=>{
  const STYLE_ID='club999-v197-process-square-style';
  const DIRECT='club999-process-square-v197';
  const BEFORE='club999-process-square-before-v197';
  const AFTER='club999-process-square-after-v197';
  const GOLD='#f2d477';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const compact=s=>norm(s).replace(/[«»"'.,:;!?—–-]/g,'').replace(/\s+/g,'');
  const setImp=(el,p,v)=>el&&el.style.setProperty(p,v,'important');

  const STEPS=[
    'Вы выбираете сферу, которая сейчас требует внимания.',
    'Находите материалы и экспертов по своей задаче.',
    'Знакомитесь с разными подходами.',
    'Выбираете то, что можно применить в своей жизни.'
  ];

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      .${DIRECT}{
        width:30px!important;height:30px!important;min-width:30px!important;min-height:30px!important;
        flex:0 0 30px!important;display:grid!important;place-items:center!important;box-sizing:border-box!important;
        border-radius:8px!important;border:1px solid rgba(242,212,119,.88)!important;
        background:radial-gradient(circle at 34% 24%,rgba(255,241,182,.18) 0%,rgba(255,241,182,.05) 34%,transparent 50%),linear-gradient(145deg,rgba(10,82,94,.94),rgba(3,34,44,.99))!important;
        box-shadow:inset 0 0 0 1px rgba(255,255,255,.045),inset 0 0 8px rgba(82,205,196,.07),0 0 6px rgba(242,212,119,.24),0 0 12px rgba(66,188,184,.10)!important;
        color:${GOLD}!important;-webkit-text-fill-color:${GOLD}!important;font-weight:700!important;font-size:14px!important;line-height:1!important;text-align:center!important;
        text-shadow:0 0 5px rgba(242,212,119,.30)!important;opacity:1!important;transform:none!important;filter:none!important;margin:0!important;padding:0!important;
      }
      .${BEFORE}::before,
      .${AFTER}::after{
        width:30px!important;height:30px!important;min-width:30px!important;min-height:30px!important;
        display:grid!important;place-items:center!important;box-sizing:border-box!important;
        border-radius:8px!important;border:1px solid rgba(242,212,119,.88)!important;
        background:radial-gradient(circle at 34% 24%,rgba(255,241,182,.18) 0%,rgba(255,241,182,.05) 34%,transparent 50%),linear-gradient(145deg,rgba(10,82,94,.94),rgba(3,34,44,.99))!important;
        box-shadow:inset 0 0 0 1px rgba(255,255,255,.045),inset 0 0 8px rgba(82,205,196,.07),0 0 6px rgba(242,212,119,.24),0 0 12px rgba(66,188,184,.10)!important;
        color:${GOLD}!important;-webkit-text-fill-color:${GOLD}!important;font-weight:700!important;font-size:14px!important;line-height:30px!important;text-align:center!important;
        text-shadow:0 0 5px rgba(242,212,119,.30)!important;opacity:1!important;transform:none!important;filter:none!important;
      }
      @media(max-width:380px){
        .${DIRECT}{width:28px!important;height:28px!important;min-width:28px!important;min-height:28px!important;flex-basis:28px!important;font-size:13px!important}
        .${BEFORE}::before,.${AFTER}::after{width:28px!important;height:28px!important;min-width:28px!important;min-height:28px!important;font-size:13px!important;line-height:28px!important}
      }
    `;
    document.head.appendChild(s);
  }

  function findSection(){
    const needles=STEPS.map(compact);
    const candidates=[...document.querySelectorAll('section,article,div')].filter(el=>{
      const t=compact(el.textContent);
      return needles.filter(n=>t.includes(n)).length===4;
    });
    return candidates.sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null;
  }

  function rowFor(section,step){
    const wanted=compact(step);
    const all=[...section.querySelectorAll('li,div,p')].filter(el=>compact(el.textContent).includes(wanted));
    const valid=all.filter(el=>{
      const t=compact(el.textContent);
      return STEPS.filter(s=>t.includes(compact(s))).length===1;
    });
    return (valid.length?valid:all).sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null;
  }

  function roundish(cs,w,h){
    const br=parseFloat(cs.borderRadius)||0;
    return br>=Math.min(w,h)*.38 || cs.borderRadius==='50%' || cs.borderRadius.includes('999');
  }

  function tuneDirect(el){
    if(!el) return;
    el.classList.add(DIRECT);
    setImp(el,'width','30px');setImp(el,'height','30px');setImp(el,'min-width','30px');setImp(el,'min-height','30px');setImp(el,'flex','0 0 30px');
    setImp(el,'display','grid');setImp(el,'place-items','center');setImp(el,'box-sizing','border-box');setImp(el,'border-radius','8px');
    setImp(el,'border','1px solid rgba(242,212,119,.88)');
    setImp(el,'background','radial-gradient(circle at 34% 24%,rgba(255,241,182,.18) 0%,rgba(255,241,182,.05) 34%,transparent 50%),linear-gradient(145deg,rgba(10,82,94,.94),rgba(3,34,44,.99))');
    setImp(el,'box-shadow','inset 0 0 0 1px rgba(255,255,255,.045), inset 0 0 8px rgba(82,205,196,.07), 0 0 6px rgba(242,212,119,.24), 0 0 12px rgba(66,188,184,.10)');
    setImp(el,'color',GOLD);setImp(el,'-webkit-text-fill-color',GOLD);setImp(el,'font-weight','700');setImp(el,'font-size','14px');setImp(el,'line-height','1');setImp(el,'text-align','center');setImp(el,'text-shadow','0 0 5px rgba(242,212,119,.30)');
    setImp(el,'opacity','1');setImp(el,'transform','none');setImp(el,'filter','none');setImp(el,'margin','0');setImp(el,'padding','0');
  }

  function pseudoContent(el,pseudo){
    const v=getComputedStyle(el,pseudo).content||'';
    return v.replace(/^['"]|['"]$/g,'').trim();
  }

  function tuneRow(row,digit){
    if(!row) return false;
    const nodes=[row,...row.querySelectorAll('*')];

    for(const el of nodes){
      const text=norm(el.textContent);
      const r=el.getBoundingClientRect();
      if(text===digit && r.width>0&&r.height>0&&r.width<=70&&r.height<=70){
        tuneDirect(el);
        let p=el.parentElement;
        for(let i=0;i<3&&p&&row.contains(p);i++,p=p.parentElement){
          const pr=p.getBoundingClientRect();
          const pt=norm(p.textContent);
          if(pt===digit&&pr.width<=70&&pr.height<=70) tuneDirect(p); else break;
        }
        return true;
      }
    }

    for(const el of nodes){
      for(const pseudo of ['::before','::after']){
        const ps=getComputedStyle(el,pseudo);
        if(ps.display==='none'||ps.visibility==='hidden'||ps.content==='none'||ps.content==='normal') continue;
        const c=pseudoContent(el,pseudo);
        const w=parseFloat(ps.width)||0, h=parseFloat(ps.height)||0;
        const likelyDigit=c===digit || c===`counter(item)` || c===`counter(step)` || c===`counter(list-item)`;
        const likelyBadge=w>=20&&w<=52&&h>=20&&h<=52&&roundish(ps,w,h);
        if(likelyDigit || likelyBadge){
          el.classList.add(pseudo==='::before'?BEFORE:AFTER);
          return true;
        }
      }
    }

    const first=[...row.children].find(el=>{
      const r=el.getBoundingClientRect();
      if(!r.width||!r.height||r.width>60||r.height>60) return false;
      return roundish(getComputedStyle(el),r.width,r.height);
    });
    if(first){tuneDirect(first);return true;}
    return false;
  }

  function apply(){
    addStyle();
    const section=findSection();
    if(!section) return false;
    let fixed=0;
    STEPS.forEach((step,i)=>{if(tuneRow(rowFor(section,step),String(i+1))) fixed++;});
    return fixed===4;
  }

  let ticks=0;
  const fast=setInterval(()=>{ticks++;apply();if(ticks>=80)clearInterval(fast)},150);
  [0,80,250,600,1200,2500,5000,9000,14000,22000].forEach(ms=>setTimeout(apply,ms));
  addEventListener('resize',()=>setTimeout(apply,60),{passive:true});
})();
