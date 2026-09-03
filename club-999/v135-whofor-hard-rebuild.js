(()=>{
  const ITEMS=[
    ['Вы находитесь в периоде изменений','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18c2.6-4.4 5.8-7 9.7-7.8"/><path d="m11 6 3 4-4.4 2.2"/><circle class="dot" cx="5" cy="18" r="1.35"/><circle class="dot" cx="18" cy="6" r="1.05"/></svg>'],
    ['Ищете новые ориентиры','<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7.6"/><path d="m15.1 8.7-1.8 4.6-4.5 2 1.8-4.6 4.5-2Z"/><circle class="dot" cx="12" cy="12" r="1"/></svg>'],
    ['Устали от противоречивых советов','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 5.8h8.5v5.7H7.8l-2.5 2v-2H3.5V5.8Z"/><path d="M12 10.2h8.5v5.7h-1.8v2l-2.5-2H12v-5.7Z"/><path d="m6.7 8.4 1.2 1.2 1.8-2"/><path d="m15 12.8 2.4 2.4M17.4 12.8 15 15.2"/></svg>'],
    ['Не понимаете, с чего начать','<svg viewBox="0 0 24 24" aria-hidden="true"><circle class="dot" cx="5" cy="18.5" r="1.4"/><path d="M6.5 17.4c1.4-3.8 3.4-5.8 6.2-6.4 2.6-.6 4.4-2 5-4"/><path d="m13.8 7.5 4-.8-.6 4"/></svg>'],
    ['Хотите выбирать специалистов осознанно','<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8.5" cy="8" r="3"/><path d="M3.8 18.6c.8-3.5 2.6-5.2 4.7-5.2 1.5 0 2.8.7 3.8 2"/><circle cx="16.4" cy="15.4" r="3.2"/><path d="m18.8 17.8 2.1 2.1"/><path d="m15 15.4 1 1 1.8-2"/></svg>'],
    ['Не готовы менять всё сразу, но готовы сделать один конкретный шаг','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.7 18.3h5.1v-4.1h5.1v-4.1h6.2"/><path d="m17.2 6.3 3 3.8-3 3.8"/><circle class="dot" cx="4.8" cy="18.3" r="1.1"/></svg>']
  ];
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const NITEMS=ITEMS.map(([t])=>norm(t));

  function addStyle(){
    if(document.getElementById('club999-whofor-v135-style')) return;
    const s=document.createElement('style');
    s.id='club999-whofor-v135-style';
    s.textContent=`
      .club999-whofor-section-v135{padding-top:0!important;margin-top:0!important;min-height:0!important}
      .club999-whofor-heading-wrap-v135{padding-top:0!important;margin-top:0!important}
      .club999-whofor-list-v135{display:grid!important;grid-template-columns:1fr!important;gap:7px!important;width:100%!important;margin:0!important;padding:0!important;list-style:none!important}
      .club999-whofor-row-v135{position:relative!important;display:grid!important;grid-template-columns:28px minmax(0,1fr)!important;align-items:center!important;gap:9px!important;width:100%!important;min-height:0!important;margin:0!important;padding:8px 11px!important;box-sizing:border-box!important;border:1px solid rgba(234,199,101,.34)!important;border-radius:15px!important;background:linear-gradient(135deg,rgba(15,86,96,.43),rgba(4,35,47,.52))!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.075),0 7px 20px rgba(0,10,18,.10)!important;backdrop-filter:blur(14px) saturate(118%)!important;-webkit-backdrop-filter:blur(14px) saturate(118%)!important;overflow:hidden!important;list-style:none!important}
      .club999-whofor-row-v135::before{content:""!important;position:absolute!important;inset:0!important;pointer-events:none!important;background:linear-gradient(115deg,rgba(255,255,255,.055),transparent 38%,rgba(71,190,186,.04))!important}
      .club999-whofor-row-v135::after,.club999-whofor-row-v135::marker{content:none!important;display:none!important}
      .club999-whofor-icon-v135{position:relative!important;z-index:1!important;width:27px!important;height:27px!important;display:grid!important;place-items:center!important;border-radius:9px!important;border:1px solid rgba(239,204,104,.64)!important;background:radial-gradient(circle at 35% 28%,rgba(248,221,141,.18),transparent 38%),linear-gradient(145deg,rgba(11,82,94,.88),rgba(3,31,40,.96))!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.04),0 0 10px rgba(223,183,62,.16)!important}
      .club999-whofor-icon-v135 svg{width:18px!important;height:18px!important;fill:none!important;stroke:#f2d47d!important;stroke-width:1.55!important;stroke-linecap:round!important;stroke-linejoin:round!important;filter:drop-shadow(0 0 2px rgba(242,212,125,.3))!important}
      .club999-whofor-icon-v135 .dot{fill:#f2d47d!important;stroke:#f2d47d!important}
      .club999-whofor-copy-v135{position:relative!important;z-index:1!important;min-width:0!important;margin:0!important;padding:0!important;color:#f8f3e8!important;font-size:14px!important;line-height:1.2!important;font-weight:650!important;text-align:left!important;overflow-wrap:normal!important;word-break:normal!important}
      @media(max-width:700px){.club999-whofor-row-v135{grid-template-columns:26px minmax(0,1fr)!important;gap:8px!important;padding:7px 9px!important;border-radius:14px!important}.club999-whofor-icon-v135{width:25px!important;height:25px!important;border-radius:8px!important}.club999-whofor-icon-v135 svg{width:17px!important;height:17px!important}.club999-whofor-copy-v135{font-size:14px!important}}
    `;
    document.head.appendChild(s);
  }

  function exactElement(text){
    const target=norm(text);
    const matches=[...document.querySelectorAll('body *')].filter(el=>norm(el.textContent)===target);
    matches.sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length);
    return matches[0]||null;
  }

  function findListHost(){
    const first=exactElement(ITEMS[0][0]);
    if(!first) return null;
    let node=first;
    for(let i=0;i<12&&node;i++,node=node.parentElement){
      const t=norm(node.textContent);
      if(NITEMS.every(x=>t.includes(x))) return node;
    }
    return null;
  }

  function collapseTop(){
    const kicker=exactElement('Кому подойдёт');
    if(!kicker) return;
    let node=kicker;
    for(let i=0;i<7&&node&&node!==document.body;i++){
      node.style.setProperty('margin-top','0','important');
      node.style.setProperty('padding-top','0','important');
      const parent=node.parentElement;
      if(!parent) break;
      parent.style.setProperty('margin-top','0','important');
      parent.style.setProperty('padding-top','0','important');
      parent.classList.add('club999-whofor-heading-wrap-v135');
      let prev=node.previousElementSibling;
      while(prev && norm(prev.textContent)===''){
        const h=prev.getBoundingClientRect().height;
        if(h>8) prev.style.setProperty('display','none','important');
        prev=prev.previousElementSibling;
      }
      if(parent.tagName==='SECTION' || (norm(parent.textContent).includes('тем, кому нужен') && NITEMS.every(x=>norm(parent.textContent).includes(x)))){
        parent.classList.add('club999-whofor-section-v135');
      }
      node=parent;
    }
  }

  function rebuild(){
    const host=findListHost();
    if(!host) return false;
    addStyle();
    const html=ITEMS.map(([text,icon])=>`<div class="club999-whofor-row-v135"><span class="club999-whofor-icon-v135" aria-hidden="true">${icon}</span><span class="club999-whofor-copy-v135">${text}</span></div>`).join('');
    host.className='club999-whofor-list-v135';
    host.innerHTML=html;
    collapseTop();
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(rebuild() || tries>120) clearInterval(timer);
  },100);
  rebuild();
})();