(()=>{
  const STYLE_ID='club999-v199-icon-glow-match-numbers';
  const GOLD='#f2d477';
  const BORDER='1px solid rgba(242,212,119,.88)';
  const BG='radial-gradient(circle at 34% 24%,rgba(255,241,182,.18) 0%,rgba(255,241,182,.05) 34%,transparent 50%),linear-gradient(145deg,rgba(10,82,94,.94),rgba(3,34,44,.99))';
  const SHADOW='inset 0 0 0 1px rgba(255,255,255,.045), inset 0 0 8px rgba(82,205,196,.07), 0 0 6px rgba(242,212,119,.24), 0 0 12px rgba(66,188,184,.10)';
  const TEXT_GLOW='0 0 5px rgba(242,212,119,.30)';
  const SVG_GLOW='drop-shadow(0 0 5px rgba(242,212,119,.30))';
  const set=(el,p,v)=>el&&el.style.setProperty(p,v,'important');

  const selectors=[
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
    '.question-card > span.question-card__icon',
    '.path-card li > span:first-child'
  ];

  function inject(){
    if(document.getElementById(STYLE_ID)) return;
    const s=document.createElement('style');
    s.id=STYLE_ID;
    const q=selectors.join(',');
    s.textContent=`
      ${q}{
        border-color:rgba(242,212,119,.88)!important;
        background:${BG}!important;
        box-shadow:${SHADOW}!important;
        color:${GOLD}!important;
        -webkit-text-fill-color:${GOLD}!important;
        text-shadow:${TEXT_GLOW}!important;
        opacity:1!important;
      }
      ${q} svg{
        color:${GOLD}!important;
        stroke:${GOLD}!important;
        filter:${SVG_GLOW}!important;
        opacity:1!important;
      }
      ${q} svg *{
        stroke:${GOLD}!important;
        opacity:1!important;
      }
      ${q} svg .dot{
        fill:${GOLD}!important;
        stroke:${GOLD}!important;
      }
    `;
    document.head.appendChild(s);
  }

  function tune(el){
    if(!el) return;
    set(el,'border-color','rgba(242,212,119,.88)');
    set(el,'background',BG);
    set(el,'box-shadow',SHADOW);
    set(el,'color',GOLD);
    set(el,'-webkit-text-fill-color',GOLD);
    set(el,'text-shadow',TEXT_GLOW);
    set(el,'opacity','1');
    el.querySelectorAll('svg').forEach(svg=>{
      set(svg,'color',GOLD);
      set(svg,'stroke',GOLD);
      set(svg,'filter',SVG_GLOW);
      set(svg,'opacity','1');
      svg.querySelectorAll('*').forEach(shape=>{
        set(shape,'stroke',GOLD);
        set(shape,'opacity','1');
        if(shape.classList.contains('dot')) set(shape,'fill',GOLD);
      });
    });
  }

  function apply(){
    inject();
    const icons=new Set();
    selectors.forEach(sel=>document.querySelectorAll(sel).forEach(el=>icons.add(el)));
    icons.forEach(tune);
  }

  let queued=false;
  const obs=new MutationObserver(()=>{
    if(queued) return;
    queued=true;
    requestAnimationFrame(()=>{queued=false;apply()});
  });
  obs.observe(document.documentElement,{subtree:true,childList:true});

  apply();
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [180,450,900,1600,2800,4500,7000,10000].forEach(ms=>setTimeout(apply,ms));
})();
