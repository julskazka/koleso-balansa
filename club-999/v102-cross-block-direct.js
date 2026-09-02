(()=>{
  const STYLE_ID='club999-cross-block-direct-v102';

  function force(el,prop,value){
    if(el) el.style.setProperty(prop,value,'important');
  }

  function apply(){
    const connection=document.querySelector('.connection');
    if(!connection) return false;

    const section=connection.closest('.section') || connection.closest('section');
    const copy=connection.querySelector('.connection__copy');
    const directions=document.getElementById('directions');
    if(!section || !copy) return false;

    document.getElementById(STYLE_ID)?.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      @media(max-width:700px){
        .connection__copy h2{max-width:100%!important;margin-left:auto!important;margin-right:auto!important;text-wrap:balance!important;overflow-wrap:normal!important;word-break:normal!important;hyphens:none!important}
        .connection__copy>p:not(.section-kicker){max-width:33ch!important;margin-left:auto!important;margin-right:auto!important}
      }
    `;
    document.head.appendChild(style);

    const mobile=window.matchMedia('(max-width:700px)').matches;

    if(directions){
      force(directions,'padding-bottom',mobile?'0px':'18px');
      force(directions,'margin-bottom','0px');
    }

    force(section,'margin-top','0px');
    force(section,'box-sizing','border-box');
    force(section,'padding-top',mobile?'12px':'30px');

    if(mobile){
      force(section,'width','100%');
      force(section,'padding-left','max(22px, env(safe-area-inset-left))');
      force(section,'padding-right','max(22px, env(safe-area-inset-right))');
      force(connection,'width','100%');
      force(connection,'max-width','100%');
      force(connection,'gap','0px');
      force(copy,'width','100%');
      force(copy,'max-width','366px');
      force(copy,'margin-left','auto');
      force(copy,'margin-right','auto');
      force(copy,'padding-left','0px');
      force(copy,'padding-right','0px');
      force(copy,'box-sizing','border-box');
    } else {
      force(section,'padding-left','32px');
      force(section,'padding-right','32px');
    }

    return true;
  }

  let tries=0;
  const paint=()=>{
    tries+=1;
    const ok=apply();
    if(ok || tries>=30) clearInterval(timer);
  };
  const timer=setInterval(paint,120);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  apply();
  window.addEventListener('resize',()=>requestAnimationFrame(apply),{passive:true});
})();
