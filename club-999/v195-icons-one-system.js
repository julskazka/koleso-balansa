(()=>{
  const STYLE_ID='club999-v195-icon-system-style';
  const ICON_CLASS='club999-icon-v195';
  const GOLD='#f2d477';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const setImp=(el,p,v)=>el&&el.style.setProperty(p,v,'important');

  const SVG={
    calendar:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5.5" width="16" height="14" rx="2.2"/><path d="M8 3.8v3.4M16 3.8v3.4M4 9.3h16"/><path d="m12 12.2.8 1.6 1.8.3-1.3 1.2.3 1.8-1.6-.8-1.6.8.3-1.8-1.3-1.2 1.8-.3z"/></svg>',
    people:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8.3" cy="9" r="3"/><circle cx="16.4" cy="8.3" r="2.2"/><path d="M3.8 18.5c.7-3.4 2.4-5 4.9-5s4.2 1.6 4.9 5M14.2 13.7c2.8.1 4.5 1.6 5 4.6"/><path d="M18.7 3.8v2.7M17.35 5.15h2.7"/></svg>',
    file:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 4.8h9.5l4.1 4.1v10.3H5.2z"/><path d="M14.7 4.8v4.4h4.1M8.2 12h7.6M8.2 15.2h6M8.2 8.8h3.6"/></svg>',
    bookmark:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5h10v15l-5-3.1L7 19.5z"/><path d="M9.5 8.2h5M9.5 11h5"/></svg>',
    chat:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.2 5.6h10.3v7H8.7l-3.2 2.6v-2.6H4.2z"/><path d="M11 11.4h8.8v6.2h-1.5v2l-2.6-2H11z"/><path d="M8 8.8h2.8M14.4 14.4h2.5"/></svg>',
    route:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.8 18.6h5v-4h5v-4h6.2"/><path d="m17.2 6.8 3 3.8-3 3.8"/><circle class="dot" cx="5" cy="18.6" r="1.1"/></svg>',
    compass:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7.7"/><path d="m15.4 8.5-2 5-4.8 2 2-5z"/><circle class="dot" cx="12" cy="12" r=".9"/></svg>',
    home:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.8 11.2 12 5l7.2 6.2v7.2H4.8z"/><path d="M9.5 18.4v-5h5v5M8 9.3h8"/></svg>',
    spark:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.7 4.4L18 9l-4.3 1.6L12 15l-1.7-4.4L6 9l4.3-1.6z"/><path d="m18.1 14.4.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9z"/></svg>',
    trend:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.2 17.8c2.2-3.3 4.7-5.4 7.6-6.4 2.7-.9 5-2.6 6.5-5"/><path d="m14.4 6.8 4.4-.8-.6 4.4"/><circle class="dot" cx="5" cy="18" r="1.1"/></svg>',
    book:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5.5c2.6-.9 4.8-.5 7 1.2v12c-2.2-1.7-4.4-2.1-7-1.2zM19 5.5c-2.6-.9-4.8-.5-7 1.2v12c2.2-1.7 4.4-2.1 7-1.2z"/><path d="M17.8 3.7v3M16.3 5.2h3"/></svg>'
  };

  function iconFor(text,index){
    const t=norm(text);
    if(/эфир|встреч/.test(t)) return SVG.calendar;
    if(/эксперт|специалист|знаком/.test(t)) return SVG.people;
    if(/материал|публикац/.test(t)) return SVG.file;
    if(/сохран|запис/.test(t)) return SVG.bookmark;
    if(/вопрос|ответ|совет|общен/.test(t)) return SVG.chat;
    if(/поддерж|задач|шаг|начать/.test(t)) return SVG.route;
    if(/ориентир|направлен|сфер/.test(t)) return SVG.compass;
    if(/клуб|пространств/.test(t)) return SVG.home;
    if(/измен/.test(t)) return SVG.trend;
    if(/знан|практик/.test(t)) return SVG.book;
    return [SVG.spark,SVG.compass,SVG.file,SVG.bookmark,SVG.chat,SVG.route][index%6];
  }

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      .${ICON_CLASS}{
        width:28px!important;height:28px!important;min-width:28px!important;min-height:28px!important;
        flex:0 0 28px!important;display:grid!important;place-items:center!important;box-sizing:border-box!important;
        border-radius:8px!important;border:1px solid rgba(242,212,119,.88)!important;
        background:radial-gradient(circle at 34% 24%,rgba(255,241,182,.18) 0%,rgba(255,241,182,.05) 34%,transparent 50%),linear-gradient(145deg,rgba(10,82,94,.94),rgba(3,34,44,.99))!important;
        box-shadow:inset 0 0 0 1px rgba(255,255,255,.045),inset 0 0 8px rgba(82,205,196,.07),0 0 6px rgba(242,212,119,.24),0 0 12px rgba(66,188,184,.10)!important;
        color:${GOLD}!important;-webkit-text-fill-color:${GOLD}!important;opacity:1!important;
        transform:none!important;filter:none!important;
      }
      .${ICON_CLASS}::before,.${ICON_CLASS}::after{content:none!important;display:none!important}
      .${ICON_CLASS} svg{width:18px!important;height:18px!important;display:block!important;fill:none!important;stroke:${GOLD}!important;stroke-width:1.55!important;stroke-linecap:round!important;stroke-linejoin:round!important;filter:drop-shadow(0 0 2px rgba(242,212,119,.32))!important;opacity:1!important}
      .${ICON_CLASS} svg *{stroke:${GOLD}!important;stroke-width:1.55!important;stroke-linecap:round!important;stroke-linejoin:round!important;fill:none!important;opacity:1!important}
      .${ICON_CLASS} svg .dot{fill:${GOLD}!important;stroke:${GOLD}!important}
      @media(max-width:380px){.${ICON_CLASS}{width:27px!important;height:27px!important;min-width:27px!important;min-height:27px!important;flex-basis:27px!important}.${ICON_CLASS} svg{width:17px!important;height:17px!important}}
    `;
    document.head.appendChild(s);
  }

  const knownIconSelectors=[
    '.club999-subscription-icon-v183','.club999-unified-icon-v190','.club999-whofor-icon-v136',
    '.club999-resource-icon-v124','.club999-retention-icon-v179','.club999-gold-check-v170',
    '[class*="retention-icon"]','[class*="subscription-icon"]','[class*="whofor-icon"]','[class*="resource-icon"]'
  ];

  const knownRows=[
    '.club999-subscription-card-v183','.club999-unified-row-v190','.club999-whofor-row-v136',
    '.club999-resource-row-v124','.club999-retention-card-v179'
  ];

  function smallIconCandidate(el){
    if(!el||el.nodeType!==1) return false;
    const r=el.getBoundingClientRect();
    if(!r.width||!r.height||r.width>48||r.height>48||r.width<16||r.height<16) return false;
    const cls=(el.className||'').toString().toLowerCase();
    const txt=norm(el.textContent);
    return !!el.querySelector('svg') || /icon|check|tick|bullet/.test(cls) || /^[✓✔☑✅︎]+$/u.test(txt);
  }

  function genericRows(){
    return [...document.querySelectorAll('li,div')].filter(row=>{
      const r=row.getBoundingClientRect();
      if(r.width<210||r.width>430||r.height<30||r.height>125) return false;
      const cs=getComputedStyle(row);
      if((parseFloat(cs.borderRadius)||0)<8) return false;
      const text=norm(row.textContent);
      if(!text||text.length>170) return false;
      return [...row.children].some(smallIconCandidate) || [...row.querySelectorAll(':scope > span,:scope > div')].some(smallIconCandidate);
    });
  }

  function tune(icon,row,index){
    if(!icon) return;
    icon.classList.add(ICON_CLASS);
    setImp(icon,'width','28px'); setImp(icon,'height','28px'); setImp(icon,'min-width','28px'); setImp(icon,'min-height','28px');
    setImp(icon,'flex','0 0 28px'); setImp(icon,'display','grid'); setImp(icon,'place-items','center'); setImp(icon,'box-sizing','border-box');
    setImp(icon,'border-radius','8px'); setImp(icon,'border','1px solid rgba(242,212,119,.88)');
    setImp(icon,'background','radial-gradient(circle at 34% 24%,rgba(255,241,182,.18) 0%,rgba(255,241,182,.05) 34%,transparent 50%),linear-gradient(145deg,rgba(10,82,94,.94),rgba(3,34,44,.99))');
    setImp(icon,'box-shadow','inset 0 0 0 1px rgba(255,255,255,.045), inset 0 0 8px rgba(82,205,196,.07), 0 0 6px rgba(242,212,119,.24), 0 0 12px rgba(66,188,184,.10)');
    setImp(icon,'color',GOLD); setImp(icon,'-webkit-text-fill-color',GOLD); setImp(icon,'opacity','1'); setImp(icon,'transform','none'); setImp(icon,'filter','none');

    const svgMarkup=iconFor(row?.textContent||icon.parentElement?.textContent||'',index);
    if(icon.dataset.club999V195Svg!==svgMarkup){
      icon.innerHTML=svgMarkup;
      icon.dataset.club999V195Svg=svgMarkup;
    }
    const svg=icon.querySelector('svg');
    if(svg){
      setImp(svg,'width','18px');setImp(svg,'height','18px');setImp(svg,'display','block');setImp(svg,'fill','none');setImp(svg,'stroke',GOLD);setImp(svg,'stroke-width','1.55');setImp(svg,'stroke-linecap','round');setImp(svg,'stroke-linejoin','round');setImp(svg,'filter','drop-shadow(0 0 2px rgba(242,212,119,.32))');setImp(svg,'opacity','1');
      svg.querySelectorAll('*').forEach(shape=>{setImp(shape,'stroke',GOLD);setImp(shape,'stroke-width','1.55');setImp(shape,'stroke-linecap','round');setImp(shape,'stroke-linejoin','round');setImp(shape,'fill',shape.classList.contains('dot')?GOLD:'none');setImp(shape,'opacity','1')});
    }
  }

  function apply(){
    injectStyle();
    const rows=[...new Set([...knownRows.flatMap(s=>[...document.querySelectorAll(s)]),...genericRows()])];
    rows.forEach((row,index)=>{
      let icon=knownIconSelectors.flatMap(s=>[...row.querySelectorAll(s)]).find(smallIconCandidate);
      if(!icon) icon=[...row.children].find(smallIconCandidate)||[...row.querySelectorAll(':scope > span,:scope > div')].find(smallIconCandidate);
      if(icon) tune(icon,row,index);
    });

    const loose=[...new Set(knownIconSelectors.flatMap(s=>[...document.querySelectorAll(s)]))];
    loose.forEach((icon,index)=>tune(icon,icon.closest('li,.club999-unified-row-v190,.club999-whofor-row-v136,.club999-resource-row-v124,.club999-subscription-card-v183,.club999-retention-card-v179')||icon.parentElement,index));
  }

  let queued=false;
  const obs=new MutationObserver(()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;apply()})});
  obs.observe(document.documentElement,{subtree:true,childList:true});
  apply();
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [180,420,800,1400,2400,4000,6500,9500,12500].forEach(ms=>setTimeout(apply,ms));
})();
