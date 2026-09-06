(()=>{
  const STYLE_ID='club999-v201-unified-page-spacing';
  const set=(el,p,v)=>el&&el.style.setProperty(p,v,'important');

  function metrics(){
    const w=Math.round(window.visualViewport?.width||document.documentElement.clientWidth||innerWidth||390);
    if(w<=380) return {gutter:14, section:30, heading:20, inner:12, max:'none'};
    if(w<=700) return {gutter:16, section:32, heading:22, inner:12, max:'none'};
    if(w<=1180) return {gutter:24, section:48, heading:28, inner:16, max:'1120px'};
    return {gutter:32, section:52, heading:30, inner:18, max:'1120px'};
  }

  function injectStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      .section:not(.hero){box-sizing:border-box!important;margin-top:0!important;margin-bottom:0!important}
      .section:not(.hero).final{min-height:0!important;height:auto!important}
      .section:not(.hero) .club999-unified-list-v190,
      .section:not(.hero) .club999-whofor-list-v136,
      .section:not(.hero) .club999-subscription-list-v183,
      .section:not(.hero) .club999-retention-list-v174,
      .section:not(.hero) .club999-resource-list-v124{
        width:100%!important;max-width:100%!important;min-width:0!important;
        margin-left:0!important;margin-right:0!important;
        box-sizing:border-box!important;
      }
      .section:not(.hero) .club999-unified-row-v190,
      .section:not(.hero) .club999-whofor-row-v136,
      .section:not(.hero) .club999-subscription-card-v183,
      .section:not(.hero) .club999-retention-card-v179,
      .section:not(.hero) .club999-resource-row-v124{
        width:100%!important;max-width:100%!important;min-width:0!important;box-sizing:border-box!important;
      }
      @media(max-width:700px){
        .section:not(.hero) .section-action{margin-top:22px!important}
      }
    `;
    document.head.appendChild(s);
  }

  const shellSelectors=[
    ':scope > .section-heading',
    ':scope > .section-heading--split',
    ':scope > .directions__heading',
    ':scope > .audience__intro',
    ':scope > .clarity__grid',
    ':scope > .direction-grid',
    ':scope > .inside-grid',
    ':scope > .difference__grid',
    ':scope > .connection',
    ':scope > .questions__panel',
    ':scope > .audience',
    ':scope > .return__card',
    ':scope > .access__card'
  ];

  const headingSelectors=[
    ':scope > .section-heading',
    ':scope > .section-heading--split',
    ':scope > .directions__heading',
    ':scope > .audience__intro'
  ];

  function applySection(section,m){
    if(section.closest('.modal,.modal__dialog,[role="dialog"]')) return;
    set(section,'box-sizing','border-box');
    set(section,'width','100%');
    set(section,'max-width','none');
    set(section,'margin-top','0');
    set(section,'margin-bottom','0');
    set(section,'padding-top',m.section+'px');
    set(section,'padding-bottom',m.section+'px');
    set(section,'padding-left',`max(${m.gutter}px, env(safe-area-inset-left))`);
    set(section,'padding-right',`max(${m.gutter}px, env(safe-area-inset-right))`);

    if(section.classList.contains('final')){
      set(section,'min-height','0');
      set(section,'height','auto');
    }

    shellSelectors.forEach(sel=>{
      section.querySelectorAll(sel).forEach(el=>{
        set(el,'width','100%');
        set(el,'max-width',m.max);
        set(el,'min-width','0');
        set(el,'box-sizing','border-box');
        set(el,'margin-left','auto');
        set(el,'margin-right','auto');
      });
    });

    headingSelectors.forEach(sel=>{
      section.querySelectorAll(sel).forEach(el=>{
        set(el,'margin-top','0');
        set(el,'margin-bottom',m.heading+'px');
      });
    });

    section.querySelectorAll('.clarity__grid,.direction-grid,.inside-grid,.difference__grid,.club999-unified-list-v190').forEach(el=>{
      set(el,'width','100%');
      set(el,'max-width','100%');
      set(el,'min-width','0');
      set(el,'box-sizing','border-box');
      set(el,'margin-left','0');
      set(el,'margin-right','0');
    });
  }

  function apply(){
    injectStyle();
    const m=metrics();
    const sections=[...new Set([...document.querySelectorAll('section.section:not(.hero),.section:not(.hero)')])];
    sections.forEach(section=>applySection(section,m));
  }

  let timer=0;
  const burst=()=>{
    clearTimeout(timer);
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [140,420,900,1700,3000,5200].forEach(ms=>setTimeout(apply,ms));
  };

  addEventListener('resize',()=>{timer=setTimeout(burst,80)},{passive:true});
  if(window.visualViewport) visualViewport.addEventListener('resize',()=>{timer=setTimeout(burst,80)},{passive:true});
  burst();
})();