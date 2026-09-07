(()=>{
  const STYLE_ID='club999-v202-final-card-polish';
  const set=(el,p,v)=>el&&el.style.setProperty(p,v,'important');

  function inject(){
    document.getElementById(STYLE_ID)?.remove();
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      .section.final{
        position:relative!important;
        isolation:isolate!important;
        overflow:hidden!important;
        border:1px solid rgba(239,204,104,.42)!important;
        border-radius:24px!important;
        background:
          radial-gradient(95% 70% at 8% 6%,rgba(36,167,173,.13) 0%,rgba(36,167,173,.04) 38%,transparent 62%),
          radial-gradient(70% 60% at 94% 100%,rgba(230,191,79,.085) 0%,transparent 58%),
          linear-gradient(155deg,rgba(7,70,80,.96),rgba(3,39,51,.985))!important;
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,.05),
          inset 0 0 28px rgba(48,176,177,.035),
          0 0 0 1px rgba(255,255,255,.018),
          0 10px 32px rgba(0,14,24,.22),
          0 0 18px rgba(224,183,63,.075)!important;
      }
      .section.final::before{
        content:""!important;
        display:block!important;
        position:absolute!important;
        z-index:0!important;
        pointer-events:none!important;
        width:190px!important;
        height:86px!important;
        left:-58px!important;
        top:-32px!important;
        border-radius:50%!important;
        background:radial-gradient(ellipse,rgba(76,211,211,.13) 0%,rgba(31,142,151,.06) 42%,transparent 72%)!important;
        filter:blur(14px)!important;
        opacity:.82!important;
      }
      .section.final::after{
        content:""!important;
        display:block!important;
        position:absolute!important;
        z-index:0!important;
        pointer-events:none!important;
        width:180px!important;
        height:72px!important;
        right:-54px!important;
        bottom:-28px!important;
        border-radius:50%!important;
        background:radial-gradient(ellipse,rgba(232,194,83,.105) 0%,rgba(232,194,83,.035) 45%,transparent 72%)!important;
        filter:blur(15px)!important;
        opacity:.72!important;
      }
      .section.final > *{
        position:relative!important;
        z-index:2!important;
      }
      @media(max-width:700px){
        .section.final{
          width:calc(100% - 28px)!important;
          max-width:calc(100% - 28px)!important;
          margin-left:14px!important;
          margin-right:14px!important;
          padding-left:12px!important;
          padding-right:12px!important;
          padding-top:34px!important;
          padding-bottom:32px!important;
          border-radius:22px!important;
        }
      }
      @media(max-width:380px){
        .section.final{
          width:calc(100% - 24px)!important;
          max-width:calc(100% - 24px)!important;
          margin-left:12px!important;
          margin-right:12px!important;
          padding-left:11px!important;
          padding-right:11px!important;
        }
      }
      @media(min-width:701px){
        .section.final{
          width:calc(100% - 48px)!important;
          max-width:1120px!important;
          margin-left:auto!important;
          margin-right:auto!important;
          padding-left:32px!important;
          padding-right:32px!important;
          padding-top:48px!important;
          padding-bottom:46px!important;
          border-radius:28px!important;
        }
      }
    `;
    document.head.appendChild(s);
  }

  function apply(){
    inject();
    document.querySelectorAll('.section.final').forEach(final=>{
      set(final,'position','relative');
      set(final,'overflow','hidden');
      set(final,'box-sizing','border-box');
      const w=Math.round(window.visualViewport?.width||document.documentElement.clientWidth||innerWidth||390);
      if(w<=380){
        set(final,'width','calc(100% - 24px)');
        set(final,'max-width','calc(100% - 24px)');
        set(final,'margin-left','12px');
        set(final,'margin-right','12px');
        set(final,'padding-left','11px');
        set(final,'padding-right','11px');
      }else if(w<=700){
        set(final,'width','calc(100% - 28px)');
        set(final,'max-width','calc(100% - 28px)');
        set(final,'margin-left','14px');
        set(final,'margin-right','14px');
        set(final,'padding-left','12px');
        set(final,'padding-right','12px');
      }else{
        set(final,'width','calc(100% - 48px)');
        set(final,'max-width','1120px');
        set(final,'margin-left','auto');
        set(final,'margin-right','auto');
        set(final,'padding-left','32px');
        set(final,'padding-right','32px');
      }
    });
  }

  let queued=false;
  const obs=new MutationObserver(()=>{
    if(queued)return;
    queued=true;
    requestAnimationFrame(()=>{queued=false;apply()});
  });
  obs.observe(document.documentElement,{subtree:true,childList:true});
  apply();
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [180,500,1100,2200,4200].forEach(ms=>setTimeout(apply,ms));
})();
