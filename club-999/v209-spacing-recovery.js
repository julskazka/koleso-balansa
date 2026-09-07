(()=>{
  const STYLE_ID='club999-v209-spacing-recovery-style';
  const set=(el,p,v)=>{
    if(!el) return false;
    const current=el.style.getPropertyValue(p);
    const priority=el.style.getPropertyPriority(p);
    if(current===v && priority==='important') return false;
    el.style.setProperty(p,v,'important');
    return true;
  };

  function injectStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      html,body{overflow-x:hidden!important}
      @media(max-width:700px){
        html body .section:not(.hero):not(.final){
          margin-top:0!important;
          margin-bottom:0!important;
          padding-top:24px!important;
          padding-bottom:24px!important;
        }
        html body .clarity.section{padding-top:18px!important;padding-bottom:24px!important}
        html body #directions.section{padding-top:26px!important;padding-bottom:24px!important}
        html body .club999-cross-section-v103{padding-top:28px!important;padding-bottom:24px!important}
        html body .section:has(.audience__intro){padding-top:26px!important;padding-bottom:24px!important}

        html body .section:not(.hero) .section-kicker{margin-top:0!important;margin-bottom:8px!important}
        html body .section:not(.hero) .section-heading,
        html body .section:not(.hero) .section-heading--split,
        html body .section:not(.hero) .directions__heading,
        html body .section:not(.hero) .audience__intro{
          margin-top:0!important;
          margin-bottom:18px!important;
        }
        html body .section:not(.hero) .section-heading>p:last-child,
        html body .section:not(.hero) .section-heading--split>p,
        html body .section:not(.hero) .directions__heading>p:last-child{
          margin-top:10px!important;
          margin-bottom:0!important;
        }
        html body .section.final{
          margin-top:24px!important;
          margin-bottom:max(16px,env(safe-area-inset-bottom))!important;
          overflow:hidden!important;
          overflow-x:hidden!important;
        }
      }
      @media(max-width:380px){
        html body .section:not(.hero):not(.final){padding-top:22px!important;padding-bottom:22px!important}
        html body .clarity.section{padding-top:16px!important;padding-bottom:22px!important}
        html body #directions.section{padding-top:24px!important;padding-bottom:22px!important}
        html body .club999-cross-section-v103{padding-top:26px!important;padding-bottom:22px!important}
        html body .section:has(.audience__intro){padding-top:24px!important;padding-bottom:22px!important}
        html body .section.final{margin-top:22px!important}
      }
      @media(min-width:701px){
        html body .section:not(.hero):not(.final){
          margin-top:0!important;
          margin-bottom:0!important;
          padding-top:46px!important;
          padding-bottom:46px!important;
        }
        html body .clarity.section{padding-top:38px!important;padding-bottom:42px!important}
        html body #directions.section{padding-top:44px!important;padding-bottom:42px!important}
        html body .club999-cross-section-v103{padding-top:48px!important;padding-bottom:42px!important}
        html body .section:has(.audience__intro){padding-top:44px!important;padding-bottom:42px!important}
        html body .section.final{margin-top:34px!important;margin-bottom:28px!important;overflow:hidden!important}
      }
    `;
    document.head.appendChild(s);
  }

  function desired(section,w){
    const tiny=w<=380, mobile=w<=700;
    if(!mobile) {
      if(section.classList.contains('clarity')) return [38,42];
      if(section.id==='directions') return [44,42];
      if(section.classList.contains('club999-cross-section-v103')) return [48,42];
      if(section.querySelector('.audience__intro')) return [44,42];
      return [46,46];
    }
    if(section.classList.contains('clarity')) return tiny?[16,22]:[18,24];
    if(section.id==='directions') return tiny?[24,22]:[26,24];
    if(section.classList.contains('club999-cross-section-v103')) return tiny?[26,22]:[28,24];
    if(section.querySelector('.audience__intro')) return tiny?[24,22]:[26,24];
    return tiny?[22,22]:[24,24];
  }

  function enforceSections(){
    const w=Math.round(window.visualViewport?.width||document.documentElement.clientWidth||innerWidth||390);
    document.querySelectorAll('.section:not(.hero):not(.final)').forEach(section=>{
      if(section.closest('.modal,[role="dialog"]')) return;
      const [pt,pb]=desired(section,w);
      set(section,'margin-top','0px');
      set(section,'margin-bottom','0px');
      set(section,'padding-top',pt+'px');
      set(section,'padding-bottom',pb+'px');
    });
    document.querySelectorAll('.section.final').forEach(final=>{
      set(final,'margin-top',w<=380?'22px':(w<=700?'24px':'34px'));
      set(final,'margin-bottom',w<=700?'max(16px, env(safe-area-inset-bottom))':'28px');
      set(final,'overflow','hidden');
      set(final,'overflow-x','hidden');
    });
  }

  function collapseSubscriptionTail(){
    const rows=[...document.querySelectorAll('.club999-subscription-card-v183')];
    if(!rows.length) return false;
    const last=rows[rows.length-1];
    const section=last.closest('.section,section');
    if(!section) return false;

    let branch=last;
    while(branch.parentElement && branch.parentElement!==section){
      const parent=branch.parentElement;
      let node=branch.nextElementSibling;
      while(node){
        const text=(node.textContent||'').replace(/\s+/g,' ').trim();
        const hasContent=!!node.querySelector?.('img,video,canvas,svg,button,a,input,textarea,select');
        const rect=node.getBoundingClientRect();
        if(!text && !hasContent && rect.height>72){
          set(node,'display','none');
          set(node,'height','0px');
          set(node,'min-height','0px');
          set(node,'margin','0px');
          set(node,'padding','0px');
        }
        node=node.nextElementSibling;
      }
      branch=parent;
    }
    return true;
  }

  let raf=0;
  function apply(){
    if(raf) cancelAnimationFrame(raf);
    raf=requestAnimationFrame(()=>{
      raf=0;
      enforceSections();
      collapseSubscriptionTail();
    });
  }

  injectStyle();
  apply();
  requestAnimationFrame(apply);

  const observer=new MutationObserver(mutations=>{
    const relevant=mutations.some(m=>{
      const target=m.target?.nodeType===1?m.target:m.target?.parentElement;
      if(m.type==='childList') return true;
      return !!target?.closest?.('.section');
    });
    if(relevant) apply();
  });
  observer.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['style','class']});

  addEventListener('resize',apply,{passive:true});
  if(window.visualViewport) visualViewport.addEventListener('resize',apply,{passive:true});
})();
