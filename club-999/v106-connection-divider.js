(()=>{
  const STYLE_ID='club999-connection-divider-v106';
  const DIVIDER_CLASS='club999-nebula-divider-v106';

  function force(el,prop,value){
    if(el) el.style.setProperty(prop,value,'important');
  }

  function addStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .${DIVIDER_CLASS}{
        position:relative;
        width:min(190px,48vw);
        height:12px;
        margin:14px auto 0;
        border-radius:999px;
        pointer-events:none;
        opacity:.9;
        background:
          radial-gradient(ellipse at 50% 50%,rgba(240,211,124,.16) 0%,rgba(240,211,124,.07) 20%,transparent 55%),
          radial-gradient(ellipse at 28% 50%,rgba(86,202,204,.16) 0%,rgba(86,202,204,.07) 24%,transparent 58%),
          radial-gradient(ellipse at 72% 50%,rgba(86,202,204,.14) 0%,rgba(86,202,204,.06) 24%,transparent 58%);
        box-shadow:0 0 20px rgba(73,196,200,.10),0 0 14px rgba(237,207,117,.08);
        filter:blur(.25px);
      }
      .${DIVIDER_CLASS}::after{
        content:"";
        position:absolute;
        left:18%;right:18%;top:50%;
        height:1px;
        transform:translateY(-50%);
        background:linear-gradient(90deg,transparent,rgba(234,205,119,.22),rgba(111,218,215,.18),rgba(234,205,119,.22),transparent);
      }
      @media(min-width:701px){
        .${DIVIDER_CLASS}{width:min(230px,22vw);height:14px;margin-top:18px}
      }
    `;
    document.head.appendChild(style);
  }

  function apply(){
    const connection=document.querySelector('.connection');
    if(!connection) return false;
    const section=connection.closest('.section') || connection.closest('section');
    if(!section) return false;
    const next=section.nextElementSibling && section.nextElementSibling.matches('.section,section')
      ? section.nextElementSibling
      : null;
    const mobile=window.matchMedia('(max-width:700px)').matches;

    addStyle();

    force(section,'padding-bottom',mobile?'8px':'16px');
    force(section,'margin-bottom','0px');
    if(next){
      force(next,'padding-top',mobile?'20px':'34px');
      force(next,'margin-top','0px');
    }

    let divider=section.querySelector(':scope > .'+DIVIDER_CLASS);
    if(!divider){
      divider=document.createElement('div');
      divider.className=DIVIDER_CLASS;
      divider.setAttribute('aria-hidden','true');
      section.appendChild(divider);
    }
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries+=1;
    if(apply() || tries>=40) clearInterval(timer);
  },100);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
  window.addEventListener('resize',()=>requestAnimationFrame(apply),{passive:true});
})();
