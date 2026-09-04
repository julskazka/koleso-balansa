(()=>{
  const STYLE_ID='club999-gold-checks-compact-v169-style';
  const SECTION_CLASS='club999-gold-checks-compact-v169';
  const KICKER='здесь можно не только слушать';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .${SECTION_CLASS} ul,
      .${SECTION_CLASS} ol{
        margin-top:8px!important;
        margin-bottom:8px!important;
        row-gap:6px!important;
        gap:6px!important;
      }
      .${SECTION_CLASS} li{
        margin-top:0!important;
        margin-bottom:0!important;
        padding-top:3px!important;
        padding-bottom:3px!important;
      }
      .${SECTION_CLASS} li::marker{
        color:#f0d282!important;
      }
      .${SECTION_CLASS} li::before,
      .${SECTION_CLASS} [class*="check"]::before,
      .${SECTION_CLASS} [class*="tick"]::before{
        color:#f0d282!important;
        border-color:rgba(240,210,130,.78)!important;
        text-shadow:0 0 8px rgba(240,210,130,.34)!important;
      }
      .${SECTION_CLASS} [class*="check"],
      .${SECTION_CLASS} [class*="tick"],
      .${SECTION_CLASS} .club999-gold-check-v169{
        color:#f0d282!important;
        -webkit-text-fill-color:#f0d282!important;
        border-color:rgba(240,210,130,.76)!important;
        text-shadow:0 0 7px rgba(240,210,130,.30)!important;
      }
      .${SECTION_CLASS} li svg,
      .${SECTION_CLASS} [class*="check"] svg,
      .${SECTION_CLASS} [class*="tick"] svg{
        color:#f0d282!important;
        stroke:#f0d282!important;
        filter:drop-shadow(0 0 3px rgba(240,210,130,.28))!important;
      }
      .${SECTION_CLASS} li svg path,
      .${SECTION_CLASS} li svg polyline,
      .${SECTION_CLASS} li svg line,
      .${SECTION_CLASS} [class*="check"] svg path,
      .${SECTION_CLASS} [class*="tick"] svg path{
        stroke:#f0d282!important;
      }
      .${SECTION_CLASS} li svg circle,
      .${SECTION_CLASS} [class*="check"] svg circle,
      .${SECTION_CLASS} [class*="tick"] svg circle{
        stroke:#f0d282!important;
      }
      @media(max-width:700px){
        .${SECTION_CLASS} ul,
        .${SECTION_CLASS} ol{margin-top:7px!important;margin-bottom:7px!important;row-gap:5px!important;gap:5px!important}
        .${SECTION_CLASS} li{padding-top:2px!important;padding-bottom:2px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function findSection(){
    const kicker=[...document.querySelectorAll('body *')]
      .filter(el=>norm(el.textContent)===KICKER)
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0];
    if(!kicker) return null;

    const semantic=kicker.closest('section,article');
    if(semantic) return semantic;

    let node=kicker.parentElement;
    for(let i=0;i<7&&node&&node!==document.body;i++,node=node.parentElement){
      const t=norm(node.textContent);
      if(t.includes(KICKER)&&t.includes('иногда нужен')&&t.length<1800) return node;
    }
    return kicker.parentElement;
  }

  function makeDenser(section){
    const cs=getComputedStyle(section);
    const pt=parseFloat(cs.paddingTop)||0;
    const pb=parseFloat(cs.paddingBottom)||0;
    if(pt>12) section.style.setProperty('padding-top',Math.max(12,pt-5)+'px','important');
    if(pb>12) section.style.setProperty('padding-bottom',Math.max(12,pb-5)+'px','important');

    [...section.children].forEach(child=>{
      if(child.matches('ul,ol')) return;
      const mt=parseFloat(getComputedStyle(child).marginTop)||0;
      const mb=parseFloat(getComputedStyle(child).marginBottom)||0;
      if(mt>10) child.style.setProperty('margin-top',Math.max(6,mt-4)+'px','important');
      if(mb>10) child.style.setProperty('margin-bottom',Math.max(6,mb-4)+'px','important');
    });

    const lists=[...section.querySelectorAll('ul,ol,[class*="list"],[class*="items"],[class*="checks"]')]
      .filter(el=>{
        const r=el.getBoundingClientRect();
        return r.height>0&&r.height<700;
      });
    lists.forEach(list=>{
      list.style.setProperty('row-gap','6px','important');
      list.style.setProperty('gap','6px','important');
    });
  }

  function goldChecks(section){
    const checkOnly=/^[✓✔☑✅︎\s]+$/u;
    [...section.querySelectorAll('*')].forEach(el=>{
      const text=(el.textContent||'').trim();
      if(text&&checkOnly.test(text)&&el.children.length===0){
        el.classList.add('club999-gold-check-v169');
        el.style.setProperty('color','#f0d282','important');
        el.style.setProperty('-webkit-text-fill-color','#f0d282','important');
      }
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
    [180,500,1000,1800].forEach(ms=>setTimeout(apply,ms));
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(apply()||tries>70) clearInterval(timer);
  },100);
  addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  burst();
})();
