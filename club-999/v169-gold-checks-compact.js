(()=>{
  const STYLE_ID='club999-gold-checks-compact-v170-style';
  const SECTION_CLASS='club999-gold-checks-compact-v170';
  const KICKER_COMPACT='здесьможнонетолькослушать';
  const compact=s=>(s||'').toLowerCase().replace(/\s+/g,'').replace(/[«»"'.,:;!?—–-]/g,'');

  function injectStyle(){
    let old=document.getElementById(STYLE_ID);
    if(old) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .${SECTION_CLASS}{
        --v170-gold:#f0d282;
      }
      .${SECTION_CLASS} ul,
      .${SECTION_CLASS} ol,
      .${SECTION_CLASS} [class*="list"],
      .${SECTION_CLASS} [class*="items"],
      .${SECTION_CLASS} [class*="points"],
      .${SECTION_CLASS} [class*="benefit"]{
        row-gap:6px!important;
        gap:6px!important;
      }
      .${SECTION_CLASS} li{
        margin-top:0!important;
        margin-bottom:0!important;
        padding-top:2px!important;
        padding-bottom:2px!important;
      }
      .${SECTION_CLASS} li::marker,
      .${SECTION_CLASS} li::before,
      .${SECTION_CLASS} [class*="check"]::before,
      .${SECTION_CLASS} [class*="tick"]::before,
      .${SECTION_CLASS} [class*="bullet"]::before{
        color:var(--v170-gold)!important;
        border-color:rgba(240,210,130,.86)!important;
        text-shadow:0 0 8px rgba(240,210,130,.38)!important;
      }
      .${SECTION_CLASS} [class*="check"],
      .${SECTION_CLASS} [class*="tick"],
      .${SECTION_CLASS} [class*="bullet"],
      .${SECTION_CLASS} .club999-gold-check-v170{
        color:var(--v170-gold)!important;
        -webkit-text-fill-color:var(--v170-gold)!important;
        border-color:rgba(240,210,130,.82)!important;
        text-shadow:0 0 7px rgba(240,210,130,.34)!important;
      }
      .${SECTION_CLASS} svg.club999-gold-check-svg-v170,
      .${SECTION_CLASS} .club999-gold-check-svg-v170{
        color:var(--v170-gold)!important;
        stroke:var(--v170-gold)!important;
        filter:drop-shadow(0 0 3px rgba(240,210,130,.32))!important;
      }
      .${SECTION_CLASS} svg.club999-gold-check-svg-v170 path,
      .${SECTION_CLASS} svg.club999-gold-check-svg-v170 polyline,
      .${SECTION_CLASS} svg.club999-gold-check-svg-v170 line,
      .${SECTION_CLASS} svg.club999-gold-check-svg-v170 circle,
      .${SECTION_CLASS} svg.club999-gold-check-svg-v170 rect{
        stroke:var(--v170-gold)!important;
      }
      @media(max-width:700px){
        .${SECTION_CLASS} ul,
        .${SECTION_CLASS} ol,
        .${SECTION_CLASS} [class*="list"],
        .${SECTION_CLASS} [class*="items"],
        .${SECTION_CLASS} [class*="points"],
        .${SECTION_CLASS} [class*="benefit"]{row-gap:5px!important;gap:5px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function findSection(){
    const candidates=[...document.querySelectorAll('body *')]
      .filter(el=>compact(el.textContent).includes(KICKER_COMPACT))
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length);
    const kicker=candidates[0];
    if(!kicker) return null;

    let node=kicker;
    for(let i=0;i<10&&node&&node!==document.body;i++,node=node.parentElement){
      const text=compact(node.textContent);
      if(text.includes(KICKER_COMPACT) && text.includes('иногданужен') && text.length<2200){
        return node;
      }
    }
    return kicker.closest('section,article')||kicker.parentElement;
  }

  function makeDenser(section){
    const cs=getComputedStyle(section);
    const pt=parseFloat(cs.paddingTop)||0;
    const pb=parseFloat(cs.paddingBottom)||0;
    if(pt>14) section.style.setProperty('padding-top',Math.max(12,pt-4)+'px','important');
    if(pb>14) section.style.setProperty('padding-bottom',Math.max(12,pb-4)+'px','important');

    [...section.querySelectorAll('ul,ol,[class*="list"],[class*="items"],[class*="points"],[class*="benefit"]')].forEach(list=>{
      const r=list.getBoundingClientRect();
      if(!r.height || r.height>800) return;
      list.style.setProperty('row-gap','6px','important');
      list.style.setProperty('gap','6px','important');
      const mt=parseFloat(getComputedStyle(list).marginTop)||0;
      const mb=parseFloat(getComputedStyle(list).marginBottom)||0;
      if(mt>8) list.style.setProperty('margin-top',Math.max(5,mt-3)+'px','important');
      if(mb>8) list.style.setProperty('margin-bottom',Math.max(5,mb-3)+'px','important');
    });

    [...section.querySelectorAll('li,[class*="item"],[class*="row"],[class*="point"],[class*="benefit"]')].forEach(row=>{
      const r=row.getBoundingClientRect();
      const text=(row.textContent||'').trim();
      if(!text || r.height<22 || r.height>130 || r.width<120) return;
      const cs=getComputedStyle(row);
      const pt=parseFloat(cs.paddingTop)||0;
      const pb=parseFloat(cs.paddingBottom)||0;
      const mt=parseFloat(cs.marginTop)||0;
      const mb=parseFloat(cs.marginBottom)||0;
      if(pt>5) row.style.setProperty('padding-top',Math.max(3,pt-2)+'px','important');
      if(pb>5) row.style.setProperty('padding-bottom',Math.max(3,pb-2)+'px','important');
      if(mt>5) row.style.setProperty('margin-top',Math.max(2,mt-2)+'px','important');
      if(mb>5) row.style.setProperty('margin-bottom',Math.max(2,mb-2)+'px','important');
    });
  }

  function goldChecks(section){
    const checkOnly=/^[✓✔☑✅︎\s]+$/u;
    [...section.querySelectorAll('*')].forEach(el=>{
      const text=(el.textContent||'').trim();
      if(text && checkOnly.test(text) && el.children.length===0){
        el.classList.add('club999-gold-check-v170');
      }
    });

    [...section.querySelectorAll('svg')].forEach(svg=>{
      const r=svg.getBoundingClientRect();
      if(!r.width || !r.height || r.width>48 || r.height>48) return;
      svg.classList.add('club999-gold-check-svg-v170');
      [...svg.querySelectorAll('path,polyline,line,circle,rect')].forEach(shape=>{
        shape.style.setProperty('stroke','#f0d282','important');
        const fill=getComputedStyle(shape).fill;
        if(fill && fill!=='none' && fill!=='rgba(0, 0, 0, 0)'){
          shape.style.setProperty('fill','#f0d282','important');
        }
      });
    });

    [...section.querySelectorAll('[class*="check"],[class*="tick"],[class*="bullet"]')].forEach(el=>{
      const r=el.getBoundingClientRect();
      if(r.width>60 || r.height>60) return;
      el.classList.add('club999-gold-check-v170');
    });
  }

  function apply(){
    injectStyle();
    const section=findSection();
    if(!section) return false;
    section.classList.add(SECTION_CLASS);
    makeDenser(section);
    goldChecks(section);
    return true;
  }

  function burst(){
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [150,350,700,1200,2200,3800].forEach(ms=>setTimeout(apply,ms));
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(apply()||tries>100) clearInterval(timer);
  },100);
  addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  if(window.visualViewport) visualViewport.addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  burst();
})();
