(()=>{
  const STYLE_ID='club999-whofor-v134-style';
  const ITEMS=[
    ['Вы находитесь в периоде изменений','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17.5c3.5-5.2 6.8-7.9 10-8.2"/><path d="M11.1 5.1 15 9.2l-4.5 3.3"/><circle cx="5" cy="18" r="1.4" class="dot"/><circle cx="18.4" cy="6" r="1.1" class="dot"/></svg>'],
    ['Ищете новые ориентиры','<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7.5"/><path d="m14.9 8.5-1.8 4.6-4.5 2 1.8-4.7 4.5-1.9Z"/><circle cx="12" cy="12" r="1" class="dot"/></svg>'],
    ['Устали от противоречивых советов','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.2h8.8v5.9H8.4L5.8 14v-1.9H4V6.2Z"/><path d="M11.2 10.4H20v5.9h-1.8v1.9l-2.6-1.9h-4.4v-5.9Z"/><path d="m8 8.7 1.1 1.1 1.8-2"/><path d="m14.5 12.9 2.3 2.3M16.8 12.9l-2.3 2.3"/></svg>'],
    ['Не понимаете, с чего начать','<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5.2" cy="18.4" r="1.5" class="dot"/><circle cx="18.7" cy="5.5" r="1.5" class="dot"/><path d="M6.7 17.2c1.2-3.7 3.1-5.8 6-6.4 2.7-.6 4.6-2.1 5.1-4.2"/><path d="m13.8 7.3 4.2-.8-.7 4.2"/></svg>'],
    ['Хотите выбирать специалистов осознанно','<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M4.2 18.5c.8-3.6 2.6-5.3 4.8-5.3 1.6 0 3 .8 3.9 2.2"/><circle cx="16.5" cy="15.5" r="3.2"/><path d="m18.9 17.9 2.2 2.2"/><path d="m15.1 15.5 1 1 1.8-2.1"/></svg>'],
    ['Не готовы менять всё сразу, но готовы сделать один конкретный шаг','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18h5v-4h5v-4h6"/><path d="m17 6 3 4-3 4"/><circle cx="5" cy="18" r="1.2" class="dot"/><circle cx="20" cy="10" r="1.1" class="dot"/></svg>']
  ];
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      .club999-whofor-section-v134{
        padding-top:20px!important;
        margin-top:0!important;
      }
      .club999-whofor-box-v134{
        width:100%!important;
        max-width:none!important;
        margin:0!important;
        padding:0 14px 14px!important;
        box-sizing:border-box!important;
      }
      .club999-whofor-kicker-v134{
        margin:0 0 9px!important;
        color:#f0d282!important;
        font-size:12px!important;
        line-height:1.1!important;
        font-weight:820!important;
        letter-spacing:.17em!important;
        text-transform:uppercase!important;
        text-align:center!important;
      }
      .club999-whofor-title-v134{
        margin:0 auto 18px!important;
        max-width:760px!important;
        color:#f3d58a!important;
        font-size:clamp(30px,4.5vw,48px)!important;
        line-height:1.07!important;
        font-weight:760!important;
        letter-spacing:-.025em!important;
        text-align:center!important;
      }
      .club999-whofor-list-v134{
        display:grid!important;
        grid-template-columns:1fr!important;
        gap:8px!important;
        margin:0!important;
        padding:0!important;
      }
      .club999-whofor-row-v134{
        position:relative!important;
        display:grid!important;
        grid-template-columns:30px minmax(0,1fr)!important;
        align-items:center!important;
        gap:10px!important;
        width:100%!important;
        min-height:0!important;
        margin:0!important;
        padding:9px 12px!important;
        box-sizing:border-box!important;
        overflow:hidden!important;
        border:1px solid rgba(232,196,92,.34)!important;
        border-radius:15px!important;
        background:
          linear-gradient(135deg,rgba(15,86,96,.42),rgba(4,36,47,.50))!important;
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,.08),
          inset 0 -1px 0 rgba(0,0,0,.16),
          0 8px 22px rgba(0,10,18,.10)!important;
        backdrop-filter:blur(13px) saturate(118%)!important;
        -webkit-backdrop-filter:blur(13px) saturate(118%)!important;
      }
      .club999-whofor-row-v134::before{
        content:""!important;
        position:absolute!important;
        inset:0!important;
        pointer-events:none!important;
        background:linear-gradient(115deg,rgba(255,255,255,.045),transparent 36%,rgba(68,183,184,.035))!important;
      }
      .club999-whofor-icon-v134{
        position:relative!important;
        z-index:1!important;
        width:28px!important;
        height:28px!important;
        display:grid!important;
        place-items:center!important;
        border-radius:9px!important;
        border:1px solid rgba(238,203,103,.62)!important;
        background:
          radial-gradient(circle at 35% 28%,rgba(247,220,140,.18),transparent 36%),
          linear-gradient(145deg,rgba(12,83,94,.86),rgba(3,31,40,.96))!important;
        box-shadow:
          inset 0 0 0 1px rgba(255,255,255,.045),
          0 0 11px rgba(223,183,62,.16)!important;
      }
      .club999-whofor-icon-v134 svg{
        width:19px!important;
        height:19px!important;
        fill:none!important;
        stroke:#f2d47d!important;
        stroke-width:1.55!important;
        stroke-linecap:round!important;
        stroke-linejoin:round!important;
        filter:drop-shadow(0 0 2px rgba(242,212,125,.28))!important;
      }
      .club999-whofor-icon-v134 .dot{
        fill:#f2d47d!important;
        stroke:#f2d47d!important;
      }
      .club999-whofor-copy-v134{
        position:relative!important;
        z-index:1!important;
        min-width:0!important;
        margin:0!important;
        padding:0!important;
        color:#f7f2e6!important;
        font-size:15px!important;
        line-height:1.22!important;
        font-weight:650!important;
        text-align:left!important;
        overflow-wrap:normal!important;
        word-break:normal!important;
      }
      .club999-whofor-footer-v134{
        margin:13px 0 0!important;
        padding:16px 18px!important;
        border:1px solid rgba(232,196,92,.30)!important;
        border-radius:17px!important;
        background:linear-gradient(135deg,rgba(13,77,88,.36),rgba(4,35,47,.46))!important;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.065)!important;
        backdrop-filter:blur(13px) saturate(115%)!important;
        -webkit-backdrop-filter:blur(13px) saturate(115%)!important;
        color:#fff0ba!important;
        font-family:Georgia,'Times New Roman',serif!important;
        font-size:18px!important;
        line-height:1.28!important;
        font-weight:700!important;
        text-align:left!important;
      }
      @media(max-width:700px){
        .club999-whofor-section-v134{padding-top:12px!important}
        .club999-whofor-box-v134{padding:0 14px 12px!important}
        .club999-whofor-kicker-v134{margin-bottom:8px!important}
        .club999-whofor-title-v134{font-size:29px!important;line-height:1.08!important;margin-bottom:16px!important}
        .club999-whofor-list-v134{gap:7px!important}
        .club999-whofor-row-v134{grid-template-columns:27px minmax(0,1fr)!important;gap:9px!important;padding:8px 10px!important;border-radius:14px!important}
        .club999-whofor-icon-v134{width:26px!important;height:26px!important;border-radius:8px!important}
        .club999-whofor-icon-v134 svg{width:18px!important;height:18px!important}
        .club999-whofor-copy-v134{font-size:14px!important;line-height:1.2!important}
        .club999-whofor-footer-v134{margin-top:12px!important;padding:14px 15px!important;font-size:17px!important}
      }
    `;
    document.head.appendChild(s);
  }

  function findTarget(){
    const kicker=[...document.querySelectorAll('*')].find(el=>norm(el.textContent)==='кому подойдёт');
    if(!kicker) return null;
    let node=kicker;
    for(let i=0;i<11&&node;i++,node=node.parentElement){
      const t=norm(node.textContent);
      if(
        ITEMS.every(([text])=>t.includes(norm(text))) &&
        t.includes('тем, кому нужен не идеальный план') &&
        t.includes('достаточно одного вопроса') &&
        t.length<1800
      ) return {box:node,kicker};
    }
    return null;
  }

  function apply(){
    const target=findTarget();
    if(!target) return false;
    addStyle();
    const {box}=target;
    const section=box.closest('section') || (()=>{
      let n=box.parentElement;
      for(let i=0;i<5&&n;i++,n=n.parentElement){
        if(norm(n.textContent).includes('кому подойдёт') && norm(n.textContent).includes('достаточно одного вопроса')) return n;
      }
      return null;
    })();
    if(section) section.classList.add('club999-whofor-section-v134');
    box.classList.add('club999-whofor-box-v134');
    const rows=ITEMS.map(([text,icon])=>`<div class="club999-whofor-row-v134"><span class="club999-whofor-icon-v134" aria-hidden="true">${icon}</span><span class="club999-whofor-copy-v134">${text}</span></div>`).join('');
    box.innerHTML=`
      <div class="club999-whofor-kicker-v134">КОМУ ПОДОЙДЁТ</div>
      <div class="club999-whofor-title-v134">Тем, кому нужен<br>не идеальный план,<br>а следующая точка опоры</div>
      <div class="club999-whofor-list-v134">${rows}</div>
      <div class="club999-whofor-footer-v134">Достаточно одного вопроса,<br>который сейчас не даёт покоя.</div>`;
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(apply() || tries>80) clearInterval(timer);
  },100);
  apply();
})();