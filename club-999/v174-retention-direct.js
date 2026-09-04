(()=>{
  const TARGETS=[
    'следить за новыми эфирами и встречами',
    'знакомиться с новыми экспертами',
    'получать новые материалы',
    'возвращаться к сохранённым записям',
    'задавать вопросы и участвовать в клубных форматах',
    'находить поддержку для новых жизненных задач'
  ];
  const KICKER='здесьможнонетолькослушать';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const compact=s=>norm(s).replace(/\s+/g,'').replace(/[«»"'.,:;!?—–-]/g,'');

  function findSection(){
    const kicker=[...document.querySelectorAll('body *')]
      .filter(el=>compact(el.textContent).includes(KICKER))
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0];
    if(!kicker) return null;
    let node=kicker;
    for(let i=0;i<10&&node&&node!==document.body;i++,node=node.parentElement){
      const t=compact(node.textContent);
      if(t.includes(KICKER)&&TARGETS.filter(x=>t.includes(compact(x))).length>=4) return node;
    }
    return kicker.closest('section,article')||kicker.parentElement;
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
      if(r.width>260&&r.width<370&&r.height>36&&r.height<130&&radius>=14&&border>0) return node;
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

  function apply(){
    const section=findSection();
    if(!section) return false;
    const cards=TARGETS.map(t=>cardFor(textNode(section,t),section)).filter(Boolean);
    if(cards.length<4) return false;

    const vw=Math.min(window.visualViewport?.width||innerWidth,document.documentElement.clientWidth||innerWidth);
    const targetWidth=Math.min(344,Math.max(300,vw-32));

    cards.forEach(card=>{
      card.style.setProperty('width',targetWidth+'px','important');
      card.style.setProperty('max-width',targetWidth+'px','important');
      card.style.setProperty('min-height','44px','important');
      card.style.setProperty('height','auto','important');
      card.style.setProperty('box-sizing','border-box','important');
      card.style.setProperty('padding-top','6px','important');
      card.style.setProperty('padding-bottom','6px','important');
      card.style.setProperty('margin-top','0','important');
      card.style.setProperty('margin-bottom','0','important');
      card.style.setProperty('margin-left','auto','important');
      card.style.setProperty('margin-right','auto','important');
      card.style.setProperty('left','auto','important');
      card.style.setProperty('right','auto','important');
      card.style.setProperty('transform','none','important');
    });

    const parent=commonParent(cards,section);
    if(parent){
      parent.style.setProperty('gap','5px','important');
      parent.style.setProperty('row-gap','5px','important');
      parent.style.setProperty('margin-top','10px','important');
      parent.style.setProperty('margin-bottom','0','important');
    }
    return true;
  }

  function run(){
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [150,350,700,1200,2200,3800].forEach(ms=>setTimeout(apply,ms));
  }
  let tries=0;
  const timer=setInterval(()=>{tries++;if(apply()||tries>100)clearInterval(timer)},100);
  addEventListener('resize',()=>setTimeout(run,80),{passive:true});
  if(window.visualViewport) visualViewport.addEventListener('resize',()=>setTimeout(run,80),{passive:true});
  run();
})();
