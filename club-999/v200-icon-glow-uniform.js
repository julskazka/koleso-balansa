(()=>{
  const GOLD='#f2d477';
  const BORDER='1px solid rgba(242,212,119,.88)';
  const BG='radial-gradient(circle at 34% 24%,rgba(255,241,182,.18) 0%,rgba(255,241,182,.05) 34%,transparent 50%),linear-gradient(145deg,rgba(10,82,94,.94),rgba(3,34,44,.99))';
  const SHADOW='inset 0 0 0 1px rgba(255,255,255,.045), inset 0 0 8px rgba(82,205,196,.07), 0 0 6px rgba(242,212,119,.24), 0 0 12px rgba(66,188,184,.10)';
  const set=(el,p,v)=>el&&el.style.setProperty(p,v,'important');

  const directSelectors=[
    '.club999-icon-v195',
    '.club999-subscription-icon-v183',
    '.club999-unified-icon-v190',
    '.club999-whofor-icon-v136',
    '.club999-resource-icon-v124',
    '.club999-retention-icon-v179',
    '.club999-gold-check-v170',
    '[class*="retention-icon"]',
    '[class*="subscription-icon"]',
    '[class*="whofor-icon"]',
    '[class*="resource-icon"]',
    '.question-card__icon',
    '.path-card li > span:first-child'
  ];

  const rowSelectors=[
    '.club999-subscription-card-v183',
    '.club999-unified-row-v190',
    '.club999-whofor-row-v136',
    '.club999-resource-row-v124',
    '.club999-retention-card-v179'
  ];

  function isSmallVisual(el){
    if(!el||el.nodeType!==1) return false;
    const r=el.getBoundingClientRect();
    return r.width>=18&&r.width<=44&&r.height>=18&&r.height<=44;
  }

  function collect(){
    const icons=new Set();
    directSelectors.forEach(sel=>document.querySelectorAll(sel).forEach(el=>icons.add(el)));
    rowSelectors.forEach(sel=>document.querySelectorAll(sel).forEach(row=>{
      const children=[...row.children];
      const first=children.find(isSmallVisual);
      if(first) icons.add(first);
      row.querySelectorAll(':scope > span,:scope > div').forEach(el=>{if(isSmallVisual(el)) icons.add(el)});
    }));
    return icons;
  }

  function normalize(icon){
    set(icon,'border',BORDER);
    set(icon,'border-color','rgba(242,212,119,.88)');
    set(icon,'background',BG);
    set(icon,'box-shadow',SHADOW);
    set(icon,'color',GOLD);
    set(icon,'-webkit-text-fill-color',GOLD);
    set(icon,'opacity','1');
    set(icon,'filter','none');
    set(icon,'text-shadow','0 0 5px rgba(242,212,119,.30)');

    icon.querySelectorAll('*').forEach(node=>{
      set(node,'filter','none');
      set(node,'text-shadow','none');
      set(node,'box-shadow','none');
      set(node,'opacity','1');
    });

    icon.querySelectorAll('svg').forEach(svg=>{
      set(svg,'color',GOLD);
      set(svg,'stroke',GOLD);
      set(svg,'fill','none');
      set(svg,'filter','drop-shadow(0 0 1.5px rgba(242,212,119,.28))');
      set(svg,'opacity','1');
      svg.querySelectorAll('*').forEach(shape=>{
        set(shape,'stroke',GOLD);
        set(shape,'stroke-width','1.55');
        set(shape,'stroke-linecap','round');
        set(shape,'stroke-linejoin','round');
        set(shape,'filter','none');
        set(shape,'opacity','1');
        if(shape.classList.contains('dot')) set(shape,'fill',GOLD);
        else if(shape.tagName.toLowerCase()!=='text') set(shape,'fill','none');
      });
    });
  }

  function apply(){ collect().forEach(normalize); }

  const style=document.createElement('style');
  style.id='club999-v200-uniform-icon-glow';
  style.textContent=`
    .club999-icon-v195,.club999-subscription-icon-v183,.club999-unified-icon-v190,
    .club999-whofor-icon-v136,.club999-resource-icon-v124,.club999-retention-icon-v179,
    .club999-gold-check-v170,[class*="retention-icon"],[class*="subscription-icon"],
    [class*="whofor-icon"],[class*="resource-icon"],.question-card__icon,
    .path-card li > span:first-child{
      border:1px solid rgba(242,212,119,.88)!important;
      background:${BG}!important;
      box-shadow:${SHADOW}!important;
      color:${GOLD}!important;
      -webkit-text-fill-color:${GOLD}!important;
      opacity:1!important;
    }
  `;
  document.head.appendChild(style);

  let queued=false;
  new MutationObserver(()=>{
    if(queued) return;
    queued=true;
    requestAnimationFrame(()=>{queued=false;apply()});
  }).observe(document.documentElement,{subtree:true,childList:true});

  apply();
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [180,450,900,1600,2800,4500,7000,10000,13000,16000].forEach(ms=>setTimeout(apply,ms));
})();
