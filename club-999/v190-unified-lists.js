(()=>{
  const STYLE_ID='club999-unified-lists-v190-style';
  const LIST='club999-unified-list-v190';
  const ROW='club999-unified-row-v190';
  const ICON='club999-unified-icon-v190';
  const COPY='club999-unified-copy-v190';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const compact=s=>norm(s).replace(/\s+/g,'').replace(/[«»"'.,:;!?—–-]/g,'');

  const RETENTION=[
    ['Следить за новыми эфирами и встречами','<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5.5" width="16" height="14" rx="2.2"/><path d="M8 3.8v3.4M16 3.8v3.4M4 9.3h16"/><path d="m12 12.1.8 1.7 1.9.2-1.4 1.3.4 1.9-1.7-.9-1.7.9.4-1.9-1.4-1.3 1.9-.2z"/></svg>'],
    ['Знакомиться с новыми экспертами','<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8.2" cy="9" r="3"/><circle cx="16.3" cy="8.2" r="2.2"/><path d="M3.8 18.5c.7-3.4 2.4-5 4.9-5s4.2 1.6 4.9 5M14.2 13.6c2.8.1 4.5 1.6 5 4.7"/><path d="M18.8 3.6v2.8M17.4 5h2.8"/></svg>'],
    ['Получать новые материалы','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 4.8h9.5l4.1 4.1v10.3H5.2z"/><path d="M14.7 4.8v4.4h4.1M8.2 12h7.6M8.2 15.2h6M8.2 8.8h3.6"/></svg>'],
    ['Возвращаться к сохранённым записям','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5h10v15l-5-3.1L7 19.5z"/><path d="M9.5 8.2h5M9.5 11h5"/></svg>'],
    ['Задавать вопросы и участвовать в клубных форматах','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.2 5.6h10.3v7H8.7l-3.2 2.6v-2.6H4.2z"/><path d="M11 11.4h8.8v6.2h-1.5v2l-2.6-2H11z"/><path d="M8 8.8h2.8M14.4 14.4h2.5"/></svg>'],
    ['Находить поддержку для новых жизненных задач','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.8 18.6h5v-4h5v-4h6.2"/><path d="m17.2 6.8 3 3.8-3 3.8"/><circle class="dot" cx="5" cy="18.6" r="1.1"/></svg>']
  ];

  function injectStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      .${LIST}{
        display:grid!important;
        grid-template-columns:minmax(0,1fr)!important;
        gap:6px!important;
        row-gap:6px!important;
        width:100%!important;
        max-width:100%!important;
        min-width:0!important;
        margin:10px 0 0!important;
        padding:0!important;
        box-sizing:border-box!important;
        list-style:none!important;
      }
      .${ROW}{
        position:relative!important;
        display:grid!important;
        grid-template-columns:29px minmax(0,1fr)!important;
        align-items:center!important;
        gap:9px!important;
        width:100%!important;
        max-width:100%!important;
        min-width:0!important;
        min-height:44px!important;
        height:auto!important;
        margin:0!important;
        padding:7px 10px!important;
        box-sizing:border-box!important;
        border:1px solid rgba(234,199,101,.34)!important;
        border-radius:13px!important;
        background:linear-gradient(135deg,rgba(15,86,96,.43),rgba(4,35,47,.52))!important;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.075),0 4px 12px rgba(0,10,18,.07)!important;
        backdrop-filter:blur(14px) saturate(118%)!important;
        -webkit-backdrop-filter:blur(14px) saturate(118%)!important;
        overflow:hidden!important;
        list-style:none!important;
      }
      .${ROW}::before{
        content:""!important;
        position:absolute!important;
        inset:0!important;
        pointer-events:none!important;
        background:linear-gradient(115deg,rgba(255,255,255,.04),transparent 38%,rgba(71,190,186,.03))!important;
      }
      .${ROW}::after,.${ROW}::marker{content:none!important;display:none!important}
      .${ICON}{
        position:relative!important;
        z-index:2!important;
        width:28px!important;
        height:28px!important;
        min-width:28px!important;
        min-height:28px!important;
        display:grid!important;
        place-items:center!important;
        box-sizing:border-box!important;
        border-radius:8px!important;
        border:1px solid rgba(239,204,104,.64)!important;
        background:radial-gradient(circle at 35% 28%,rgba(248,221,141,.18),transparent 38%),linear-gradient(145deg,rgba(11,82,94,.88),rgba(3,31,40,.96))!important;
        box-shadow:inset 0 0 0 1px rgba(255,255,255,.04),0 0 7px rgba(223,183,62,.13)!important;
        color:#f2d47d!important;
        flex:none!important;
      }
      .${ICON} svg{
        width:19px!important;
        height:19px!important;
        display:block!important;
        fill:none!important;
        stroke:#f2d47d!important;
        stroke-width:1.55!important;
        stroke-linecap:round!important;
        stroke-linejoin:round!important;
        filter:drop-shadow(0 0 2px rgba(242,212,125,.28))!important;
      }
      .${ICON} .dot{fill:#f2d47d!important;stroke:#f2d47d!important}
      .${COPY}{
        position:relative!important;
        z-index:2!important;
        display:block!important;
        min-width:0!important;
        max-width:100%!important;
        margin:0!important;
        padding:0!important;
        color:#f8f3e8!important;
        -webkit-text-fill-color:#f8f3e8!important;
        font-size:15.5px!important;
        line-height:1.2!important;
        font-weight:650!important;
        text-align:left!important;
        overflow-wrap:break-word!important;
        word-break:normal!important;
        white-space:normal!important;
      }
      @media(max-width:700px){
        .${LIST}{gap:6px!important;row-gap:6px!important;margin-top:9px!important}
        .${ROW}{grid-template-columns:28px minmax(0,1fr)!important;gap:9px!important;min-height:43px!important;padding:7px 9px!important;border-radius:13px!important}
        .${ICON}{width:28px!important;height:28px!important;min-width:28px!important;min-height:28px!important}
        .${ICON} svg{width:18px!important;height:18px!important}
        .${COPY}{font-size:15px!important;line-height:1.18!important}
      }
      @media(max-width:380px){
        .${ROW}{grid-template-columns:27px minmax(0,1fr)!important;gap:8px!important;padding:7px 8px!important}
        .${ICON}{width:27px!important;height:27px!important;min-width:27px!important;min-height:27px!important}
        .${ICON} svg{width:17px!important;height:17px!important}
        .${COPY}{font-size:14.5px!important;line-height:1.18!important}
      }
    `;
    document.head.appendChild(s);
  }

  function exact(text,root=document){
    const target=norm(text);
    return [...root.querySelectorAll('div,p,span,li,strong,b')]
      .filter(el=>norm(el.textContent)===target)
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null;
  }

  function retentionHost(text){
    const target=norm(text);
    const all=RETENTION.map(([t])=>norm(t));
    let el=exact(text);
    if(!el) return null;
    let best=el;
    let node=el.parentElement;
    for(let i=0;i<9&&node&&node!==document.body;i++,node=node.parentElement){
      const t=norm(node.textContent);
      if(!t.includes(target)) break;
      if(all.some(x=>x!==target&&t.includes(x))) break;
      const r=node.getBoundingClientRect();
      if(r.width>180&&r.height<150) best=node;
    }
    return best;
  }

  function makeRetentionRow(text,svg){
    const row=document.createElement('div');
    row.className=`${ROW} club999-retention-row-v190`;
    row.innerHTML=`<span class="${ICON}" aria-hidden="true">${svg}</span><span class="${COPY}">${text}</span>`;
    return row;
  }

  function commonParent(nodes){
    if(nodes.length<2) return null;
    let p=nodes[0].parentElement;
    while(p&&p!==document.body){
      if(nodes.every(n=>p.contains(n))) return p;
      p=p.parentElement;
    }
    return null;
  }

  function unifyRetention(){
    const hosts=RETENTION.map(([t])=>retentionHost(t));
    if(hosts.some(x=>!x)||new Set(hosts).size!==RETENTION.length) return false;
    const parents=hosts.map(h=>h.parentElement);
    const sameParent=parents.every(p=>p===parents[0])?parents[0]:commonParent(hosts);
    hosts.forEach((host,i)=>{
      if(host.classList.contains('club999-retention-row-v190')) return;
      host.replaceWith(makeRetentionRow(...RETENTION[i]));
    });
    const newRows=RETENTION.map(([t])=>exact(t)).map(el=>el?.closest('.club999-retention-row-v190')).filter(Boolean);
    const list=sameParent&&newRows.every(r=>sameParent.contains(r))?sameParent:commonParent(newRows);
    if(list){
      list.classList.add(LIST);
      list.style.setProperty('width','100%','important');
      list.style.setProperty('max-width','100%','important');
      list.style.setProperty('min-width','0','important');
      list.style.setProperty('box-sizing','border-box','important');
      list.style.setProperty('margin-left','0','important');
      list.style.setProperty('margin-right','0','important');
      list.style.setProperty('padding-left','0','important');
      list.style.setProperty('padding-right','0','important');
    }
    return newRows.length===RETENTION.length;
  }

  function unifyWhoFor(){
    const rows=[...document.querySelectorAll('.club999-whofor-row-v136')];
    if(!rows.length) return false;
    rows.forEach(row=>{
      row.classList.add(ROW);
      row.style.setProperty('width','100%','important');
      row.style.setProperty('max-width','100%','important');
      row.style.setProperty('min-width','0','important');
      row.style.setProperty('box-sizing','border-box','important');
      row.querySelector('.club999-whofor-icon-v136')?.classList.add(ICON);
      row.querySelector('.club999-whofor-copy-v136')?.classList.add(COPY);
    });
    const list=rows[0].parentElement;
    if(list&&rows.every(r=>r.parentElement===list)){
      list.classList.add(LIST);
      list.style.setProperty('width','100%','important');
      list.style.setProperty('max-width','100%','important');
      list.style.setProperty('min-width','0','important');
      list.style.setProperty('box-sizing','border-box','important');
    }
    return true;
  }

  function unifySubscription(){
    const rows=[...document.querySelectorAll('.club999-subscription-card-v183')];
    if(!rows.length) return false;
    rows.forEach(row=>{
      row.classList.add(ROW);
      row.style.setProperty('width','100%','important');
      row.style.setProperty('max-width','100%','important');
      row.style.setProperty('min-width','0','important');
      row.style.setProperty('box-sizing','border-box','important');
      row.querySelector('.club999-subscription-icon-v183')?.classList.add(ICON);
      row.querySelector('.club999-subscription-text-v183')?.classList.add(COPY);
    });
    const list=rows[0].parentElement;
    if(list&&rows.every(r=>r.parentElement===list)){
      list.classList.add(LIST);
      list.style.setProperty('width','100%','important');
      list.style.setProperty('max-width','100%','important');
      list.style.setProperty('min-width','0','important');
      list.style.setProperty('box-sizing','border-box','important');
      list.style.setProperty('margin-left','0','important');
      list.style.setProperty('margin-right','0','important');
    }
    return true;
  }

  function preventOverflow(){
    document.querySelectorAll('.'+LIST+',.'+ROW).forEach(el=>{
      el.style.setProperty('max-width','100%','important');
      el.style.setProperty('min-width','0','important');
      el.style.setProperty('box-sizing','border-box','important');
      el.style.setProperty('left','auto','important');
      el.style.setProperty('right','auto','important');
      el.style.setProperty('transform','none','important');
      el.style.setProperty('translate','none','important');
    });
  }

  function apply(){
    injectStyle();
    unifyRetention();
    unifyWhoFor();
    unifySubscription();
    preventOverflow();
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    apply();
    if(tries>=70) clearInterval(timer);
  },120);
  const burst=()=>{
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [200,500,1000,1800,3200].forEach(ms=>setTimeout(apply,ms));
  };
  addEventListener('resize',()=>setTimeout(burst,90),{passive:true});
  if(window.visualViewport) visualViewport.addEventListener('resize',()=>setTimeout(burst,90),{passive:true});
  burst();
})();
