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

  function exactElement(text){
    const target=norm(text);
    const matches=[...document.querySelectorAll('body *')].filter(el=>norm(el.textContent)===target);
    matches.sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length);
    return matches[0]||null;
  }

  function rowHost(text){
    const target=norm(text);
    let el=exactElement(text);
    if(!el) return null;
    let host=el;
    let node=el.parentElement;
    for(let i=0;i<7&&node&&node!==document.body;i++,node=node.parentElement){
      if(norm(node.textContent)!==target) break;
      host=node;
    }
    return host;
  }

  function addStyle(){
    if(document.getElementById('club999-whofor-v136-style')) return;
    const s=document.createElement('style');
    s.id='club999-whofor-v136-style';
    s.textContent=`
      .club999-whofor-section-v136{padding-top:12px!important;margin-top:0!important;min-height:0!important}
      .club999-whofor-row-v136{position:relative!important;display:grid!important;grid-template-columns:28px minmax(0,1fr)!important;align-items:center!important;gap:9px!important;width:100%!important;min-height:0!important;margin:0 0 7px!important;padding:8px 11px!important;box-sizing:border-box!important;border:1px solid rgba(234,199,101,.34)!important;border-radius:15px!important;background:linear-gradient(135deg,rgba(15,86,96,.43),rgba(4,35,47,.52))!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.075),0 7px 20px rgba(0,10,18,.10)!important;backdrop-filter:blur(14px) saturate(118%)!important;-webkit-backdrop-filter:blur(14px) saturate(118%)!important;overflow:hidden!important;list-style:none!important}
      .club999-whofor-row-v136::before{content:""!important;position:absolute!important;inset:0!important;pointer-events:none!important;background:linear-gradient(115deg,rgba(255,255,255,.055),transparent 38%,rgba(71,190,186,.04))!important}
      .club999-whofor-row-v136::after,.club999-whofor-row-v136::marker{content:none!important;display:none!important}
      .club999-whofor-icon-v136{position:relative!important;z-index:1!important;width:27px!important;height:27px!important;display:grid!important;place-items:center!important;border-radius:9px!important;border:1px solid rgba(239,204,104,.64)!important;background:radial-gradient(circle at 35% 28%,rgba(248,221,141,.18),transparent 38%),linear-gradient(145deg,rgba(11,82,94,.88),rgba(3,31,40,.96))!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.04),0 0 10px rgba(223,183,62,.16)!important}
      .club999-whofor-icon-v136 svg{width:18px!important;height:18px!important;fill:none!important;stroke:#f2d47d!important;stroke-width:1.55!important;stroke-linecap:round!important;stroke-linejoin:round!important;filter:drop-shadow(0 0 2px rgba(242,212,125,.3))!important}
      .club999-whofor-icon-v136 .dot{fill:#f2d47d!important;stroke:#f2d47d!important}
      .club999-whofor-copy-v136{position:relative!important;z-index:1!important;min-width:0!important;margin:0!important;padding:0!important;color:#f8f3e8!important;font-size:14px!important;line-height:1.2!important;font-weight:650!important;text-align:left!important;overflow-wrap:normal!important;word-break:normal!important}
      .club999-whofor-footer-v136{background:linear-gradient(135deg,rgba(15,86,96,.34),rgba(4,35,47,.46))!important;border:1px solid rgba(234,199,101,.30)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.07)!important;backdrop-filter:blur(14px) saturate(115%)!important;-webkit-backdrop-filter:blur(14px) saturate(115%)!important;border-radius:17px!important}
      @media(max-width:700px){.club999-whofor-section-v136{padding-top:8px!important}.club999-whofor-row-v136{grid-template-columns:26px minmax(0,1fr)!important;gap:8px!important;padding:7px 9px!important;border-radius:14px!important}.club999-whofor-icon-v136{width:25px!important;height:25px!important;border-radius:8px!important}.club999-whofor-icon-v136 svg{width:17px!important;height:17px!important}.club999-whofor-copy-v136{font-size:14px!important}}
    `;
    document.head.appendChild(s);
  }

  function applyRows(){
    const hosts=ITEMS.map(([text])=>rowHost(text));
    if(hosts.some(x=>!x) || new Set(hosts).size!==ITEMS.length) return false;
    addStyle();
    hosts.forEach((host,i)=>{
      const [text,icon]=ITEMS[i];
      host.className='club999-whofor-row-v136';
      host.innerHTML=`<span class="club999-whofor-icon-v136" aria-hidden="true">${icon}</span><span class="club999-whofor-copy-v136">${text}</span>`;
    });
    return true;
  }

  function applySpacing(){
    const kicker=exactElement('Кому подойдёт');
    if(!kicker) return;
    const section=kicker.closest('section');
    if(section) section.classList.add('club999-whofor-section-v136');
    kicker.style.setProperty('margin-top','0','important');
    kicker.style.setProperty('padding-top','0','important');
  }

  function applyFooter(){
    const el=exactElement('Достаточно одного вопроса, который сейчас не даёт покоя.');
    if(!el) return;
    let host=el;
    let node=el.parentElement;
    const target=norm(el.textContent);
    for(let i=0;i<4&&node&&node!==document.body;i++,node=node.parentElement){if(norm(node.textContent)!==target) break;host=node;}
    host.classList.add('club999-whofor-footer-v136');
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    const ok=applyRows();
    applySpacing();
    applyFooter();
    if(ok||tries>120) clearInterval(timer);
  },100);
  applyRows(); applySpacing(); applyFooter();
})();
