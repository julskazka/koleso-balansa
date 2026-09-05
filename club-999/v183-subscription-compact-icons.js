(()=>{
  const STYLE_ID='club999-subscription-v183-style';
  const SECTION_CLASS='club999-subscription-v183';
  const CARD_CLASS='club999-subscription-card-v183';
  const LIST_CLASS='club999-subscription-list-v183';
  const TEXT_CLASS='club999-subscription-text-v183';
  const ICON_CLASS='club999-subscription-icon-v183';

  const TARGETS=[
    'Все шесть направлений клуба',
    'Записи конференций и эфиров',
    'Экспертные и практические материалы',
    'Новые встречи и публикации',
    'Форматы вопросов и ответов',
    'Дни эксперта',
    'Знакомство с новыми специалистами',
    'Доступ к клубному пространству'
  ];

  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const compact=s=>norm(s).replace(/\s+/g,'').replace(/[«»"'.,:;!?—–-]/g,'');

  const ICONS=[
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.4"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.2"/><path d="M10 8.6l5.4 3.4-5.4 3.4z"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5.5c2.6-.9 4.8-.5 7 1.2v12c-2.2-1.7-4.4-2.1-7-1.2zM19 5.5c-2.6-.9-4.8-.5-7 1.2v12c2.2-1.7 4.4-2.1 7-1.2z"/><path d="M18.3 3.5v3.4M16.6 5.2H20"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="6.5" width="14" height="12" rx="2.2"/><path d="M8 4v4M16 4v4M5 10h14M12 13l.7 1.5 1.7.2-1.2 1.1.3 1.7-1.5-.8-1.5.8.3-1.7-1.2-1.1 1.7-.2z"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6.5h14v9.2H10l-4.2 3v-3H5z"/><path d="M10.2 10a2 2 0 1 1 3.3 1.5c-.9.7-1.5 1.1-1.5 2M12 15.2h.01"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l1.5 3.3L17 8.8l-2.6 2.5.6 3.6-3-1.6-3 1.6.6-3.6L7 8.8l3.5-1.5z"/><path d="M7 18.3h10M9 21h6"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="10" r="3"/><circle cx="16.2" cy="9" r="2.2"/><path d="M4.5 18c.6-3.1 2.2-4.6 4.8-4.6s4.2 1.5 4.8 4.6M14.4 14c2.6.1 4.1 1.4 4.7 4"/><path d="M18.2 4.2v2.6M16.9 5.5h2.6"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.8 11.2L12 5l7.2 6.2v7.2H4.8z"/><path d="M9.5 18.4v-5h5v5M8 9.3h8"/></svg>'
  ];

  function injectStyle(){
    const old=document.getElementById(STYLE_ID);
    if(old) old.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .${SECTION_CLASS} .${LIST_CLASS}{
        display:flex!important;
        flex-direction:column!important;
        gap:7px!important;
        row-gap:7px!important;
        margin-top:10px!important;
        margin-bottom:0!important;
      }
      .${SECTION_CLASS} .${CARD_CLASS}{
        display:grid!important;
        grid-template-columns:32px minmax(0,1fr)!important;
        align-items:center!important;
        column-gap:10px!important;
        min-height:44px!important;
        height:auto!important;
        box-sizing:border-box!important;
        padding:7px 12px!important;
        margin:0!important;
        border-radius:16px!important;
        list-style:none!important;
      }
      .${SECTION_CLASS} .${TEXT_CLASS}{
        display:block!important;
        min-width:0!important;
        margin:0!important;
        padding:0!important;
        font-size:14.5px!important;
        line-height:1.18!important;
        font-weight:650!important;
        text-align:left!important;
      }
      .${SECTION_CLASS} .${ICON_CLASS}{
        width:30px!important;
        height:30px!important;
        min-width:30px!important;
        min-height:30px!important;
        display:grid!important;
        place-items:center!important;
        border-radius:50%!important;
        box-sizing:border-box!important;
        border:1px solid rgba(240,210,130,.72)!important;
        background:radial-gradient(circle at 34% 28%,rgba(255,244,190,.22) 0%,rgba(23,83,86,.30) 38%,rgba(5,40,49,.94) 72%,rgba(3,31,40,.98) 100%)!important;
        box-shadow:inset 0 0 10px rgba(111,218,210,.13),0 0 9px rgba(240,210,130,.13)!important;
        color:#f4dc98!important;
      }
      .${SECTION_CLASS} .${ICON_CLASS} svg{
        width:18px!important;
        height:18px!important;
        display:block!important;
        fill:none!important;
        stroke:#f4dc98!important;
        stroke-width:1.65!important;
        stroke-linecap:round!important;
        stroke-linejoin:round!important;
        filter:drop-shadow(0 0 3px rgba(240,210,130,.30))!important;
      }
      .${SECTION_CLASS} .${ICON_CLASS} svg path[fill],
      .${SECTION_CLASS} .${ICON_CLASS} svg polygon[fill]{fill:none!important}
      @media(max-width:700px){
        .${SECTION_CLASS} .${LIST_CLASS}{gap:6px!important;row-gap:6px!important;margin-top:9px!important}
        .${SECTION_CLASS} .${CARD_CLASS}{
          grid-template-columns:30px minmax(0,1fr)!important;
          column-gap:9px!important;
          min-height:42px!important;
          padding:6px 10px!important;
          border-radius:15px!important;
        }
        .${SECTION_CLASS} .${TEXT_CLASS}{font-size:14px!important;line-height:1.16!important}
        .${SECTION_CLASS} .${ICON_CLASS}{width:28px!important;height:28px!important;min-width:28px!important;min-height:28px!important}
        .${SECTION_CLASS} .${ICON_CLASS} svg{width:17px!important;height:17px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function findSection(){
    return [...document.querySelectorAll('section,article,div')]
      .filter(el=>{
        const t=compact(el.textContent);
        return t.includes('вподпискувходят') && TARGETS.filter(x=>t.includes(compact(x))).length>=6;
      })
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null;
  }

  function exactTextNode(section,label){
    const wanted=norm(label);
    return [...section.querySelectorAll('div,p,span,li,strong,b')]
      .filter(el=>norm(el.textContent)===wanted)
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null;
  }

  function cardFor(textEl,section,label){
    let node=textEl;
    for(let i=0;i<8&&node&&node!==section;i++,node=node.parentElement){
      const r=node.getBoundingClientRect();
      const cs=getComputedStyle(node);
      const radius=parseFloat(cs.borderRadius)||0;
      const border=Math.max(parseFloat(cs.borderTopWidth)||0,parseFloat(cs.borderLeftWidth)||0);
      if(norm(node.textContent)===norm(label) && r.width>230 && r.height>=32 && r.height<140 && (radius>=10||border>0)) return node;
    }
    node=textEl.parentElement;
    for(let i=0;i<6&&node&&node!==section;i++,node=node.parentElement){
      const r=node.getBoundingClientRect();
      if(compact(node.textContent)===compact(label) && r.width>230 && r.height<150) return node;
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

  function tuneSection(section){
    section.classList.add(SECTION_CLASS);
    const cs=getComputedStyle(section);
    const pt=parseFloat(cs.paddingTop)||0;
    const pb=parseFloat(cs.paddingBottom)||0;
    if(pt>20) section.style.setProperty('padding-top','18px','important');
    if(pb>20) section.style.setProperty('padding-bottom','18px','important');
    const title=[...section.querySelectorAll('h2,h3,p,div')]
      .filter(el=>compact(el.textContent)==='вподпискувходят')
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0];
    if(title){
      title.style.setProperty('margin-bottom','10px','important');
      title.style.setProperty('padding-bottom','0','important');
    }
  }

  function rebuildCard(card,label,index){
    card.classList.add(CARD_CLASS);
    card.replaceChildren();
    const icon=document.createElement('span');
    icon.className=ICON_CLASS;
    icon.setAttribute('aria-hidden','true');
    icon.innerHTML=ICONS[index]||ICONS[0];
    const text=document.createElement('span');
    text.className=TEXT_CLASS;
    text.textContent=label;
    card.append(icon,text);
  }

  function apply(){
    injectStyle();
    const section=findSection();
    if(!section) return false;
    tuneSection(section);

    const found=[];
    TARGETS.forEach((label,index)=>{
      const text=exactTextNode(section,label);
      if(!text) return;
      const card=cardFor(text,section,label);
      if(!card) return;
      found.push({card,label,index});
    });
    if(found.length<6) return false;

    const cards=[...new Set(found.map(x=>x.card))];
    const parent=commonParent(cards,section);
    if(parent) parent.classList.add(LIST_CLASS);

    found.forEach(({card,label,index})=>{
      if(card.dataset.club999SubV183===label) return;
      rebuildCard(card,label,index);
      card.dataset.club999SubV183=label;
    });
    return true;
  }

  function burst(){
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [150,350,700,1200,2200,3800,5600,7600].forEach(ms=>setTimeout(apply,ms));
  }

  let tries=0;
  const timer=setInterval(()=>{tries++;apply();if(tries>90)clearInterval(timer)},100);
  addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  if(window.visualViewport) visualViewport.addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  burst();
})();
