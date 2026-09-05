(()=>{
  const TARGETS=[
    'следить за новыми эфирами и встречами',
    'знакомиться с новыми экспертами',
    'получать новые материалы',
    'возвращаться к сохранённым записям',
    'задавать вопросы и участвовать в клубных форматах',
    'находить поддержку для новых жизненных задач'
  ];
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const compact=s=>norm(s).replace(/\s+/g,'').replace(/[«»"'.,:;!?—–-]/g,'');

  function injectStyle(){
    if(document.getElementById('club999-v179-style')) return;
    const style=document.createElement('style');
    style.id='club999-v179-style';
    style.textContent=`
      .club999-access-v179{position:relative!important;overflow:hidden!important;margin-top:12px!important}
      .club999-access-v179>.club999-v168-shine{display:block!important;z-index:20!important;top:-58%!important;left:-36%!important;width:25%!important;height:216%!important;opacity:0!important;background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.08) 12%,rgba(255,255,244,.82) 38%,rgba(255,255,255,1) 50%,rgba(255,255,244,.82) 62%,rgba(255,255,255,.08) 88%,transparent 100%)!important;box-shadow:0 0 16px rgba(255,255,235,.9)!important;filter:blur(.1px)!important;animation:club999AccessShineV179 2.8s ease-in-out infinite!important}
      @keyframes club999AccessShineV179{0%,32%{left:-36%;opacity:0}39%{opacity:1}67%{left:116%;opacity:1}75%,100%{left:116%;opacity:0}}
      .club999-retention-card-v179{min-height:38px!important;height:auto!important;padding-top:3px!important;padding-bottom:3px!important;padding-left:10px!important;padding-right:10px!important;margin-top:0!important;margin-bottom:0!important;box-sizing:border-box!important}
      .club999-retention-text-v179{font-size:14.5px!important;line-height:1.16!important}
      .club999-retention-parent-v179{gap:4px!important;row-gap:4px!important;margin-top:7px!important;margin-bottom:0!important}
      .club999-retention-icon-v179{width:30px!important;min-width:30px!important;height:30px!important;min-height:30px!important;flex:0 0 30px!important}
      @media(max-width:700px){
        .club999-retention-card-v179{padding-top:2px!important;padding-bottom:2px!important}
        .club999-retention-text-v179{font-size:14px!important;line-height:1.14!important}
        .club999-retention-parent-v179{gap:3px!important;row-gap:3px!important;margin-top:6px!important}
        .club999-retention-icon-v179{width:28px!important;min-width:28px!important;height:28px!important;min-height:28px!important;flex-basis:28px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function findAccessSection(){
    return [...document.querySelectorAll('section,article,div')]
      .filter(el=>{
        const t=compact(el.textContent);
        return t.includes('полныйдоступкцентруресурса')&&t.includes('вступитьвклубза999');
      })
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null;
  }

  function polishAccess(){
    const section=findAccessSection();
    if(!section) return false;
    [...section.querySelectorAll('*')]
      .filter(el=>norm(el.textContent)==='условия доступа')
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)
      .slice(0,2)
      .forEach(el=>{
        el.style.setProperty('display','none','important');
        el.style.setProperty('margin','0','important');
        el.style.setProperty('padding','0','important');
        el.style.setProperty('min-height','0','important');
      });
    const btn=[...section.querySelectorAll('button,a,[data-purchase]')]
      .filter(el=>norm(el.textContent).includes('вступить в клуб за 999'))
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0];
    if(btn){
      btn.classList.add('club999-access-v179');
      btn.style.setProperty('margin-top','12px','important');
    }
    return true;
  }

  function findRetentionSection(){
    return [...document.querySelectorAll('section,article,div')]
      .filter(el=>{
        const t=compact(el.textContent);
        return TARGETS.filter(x=>t.includes(compact(x))).length>=5;
      })
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null;
  }

  function textNode(section,text){
    const wanted=norm(text);
    return [...section.querySelectorAll('div,p,span,li,strong,b')]
      .filter(el=>norm(el.textContent)===wanted)
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null;
  }

  function cardFor(el,section){
    let node=el;
    for(let i=0;i<8&&node&&node!==section;i++,node=node.parentElement){
      const r=node.getBoundingClientRect();
      const cs=getComputedStyle(node);
      const radius=parseFloat(cs.borderRadius)||0;
      const border=Math.max(parseFloat(cs.borderTopWidth)||0,parseFloat(cs.borderLeftWidth)||0);
      if(r.width>260&&r.width<390&&r.height>34&&r.height<140&&radius>=12&&border>0) return node;
    }
    return null;
  }

  function commonParent(cards,section){
    if(cards.length<2) return null;
    let node=cards[0].parentElement;
    while(node&&node!==section.parentElement){
      if(cards.every(card=>node.contains(card))) return node;
      node=node.parentElement;
    }
    return null;
  }

  function compactRetention(){
    const section=findRetentionSection();
    if(!section) return false;
    const pairs=TARGETS.map(t=>{
      const text=textNode(section,t);
      return {text,card:cardFor(text,section)};
    }).filter(x=>x.text&&x.card);
    if(pairs.length<4) return false;

    const vw=Math.min(window.visualViewport?.width||innerWidth,document.documentElement.clientWidth||innerWidth);
    const targetWidth=Math.min(356,Math.max(300,vw-24));

    pairs.forEach(({text,card})=>{
      card.classList.add('club999-retention-card-v179');
      card.style.setProperty('width',targetWidth+'px','important');
      card.style.setProperty('max-width',targetWidth+'px','important');
      card.style.setProperty('min-height','38px','important');
      card.style.setProperty('padding-top','3px','important');
      card.style.setProperty('padding-bottom','3px','important');
      card.style.setProperty('margin-left','auto','important');
      card.style.setProperty('margin-right','auto','important');
      text.classList.add('club999-retention-text-v179');

      [...card.querySelectorAll('div,span')].forEach(el=>{
        if(el===text||el.contains(text)||text.contains(el)) return;
        const r=el.getBoundingClientRect();
        const cs=getComputedStyle(el);
        const radius=parseFloat(cs.borderRadius)||0;
        if(r.width>=24&&r.width<=42&&r.height>=24&&r.height<=42&&radius>=10){
          el.classList.add('club999-retention-icon-v179');
        }
      });
    });

    const parent=commonParent(pairs.map(x=>x.card),section);
    if(parent) parent.classList.add('club999-retention-parent-v179');
    return true;
  }

  function apply(){
    injectStyle();
    const a=polishAccess();
    const b=compactRetention();
    return a||b;
  }

  function burst(){
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [180,450,900,1600,2800,4600].forEach(ms=>setTimeout(apply,ms));
  }
  let tries=0;
  const timer=setInterval(()=>{tries++;if(apply()||tries>100)clearInterval(timer)},100);
  addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  if(window.visualViewport) visualViewport.addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  burst();
})();
