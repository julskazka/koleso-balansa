(()=>{
  const STYLE_ID='club999-v212-final-cta-containment';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const set=(el,p,v)=>{
    if(!el) return false;
    if(el.style.getPropertyValue(p)===v && el.style.getPropertyPriority(p)==='important') return false;
    el.style.setProperty(p,v,'important');
    return true;
  };

  function injectStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      html body .section.final{
        overflow:hidden!important;
        overflow-x:hidden!important;
      }
      html body .section.final .club999-v168-cta,
      html body .section.final [data-purchase],
      html body .section.final button{
        width:100%!important;
        max-width:100%!important;
        min-width:0!important;
        margin-left:0!important;
        margin-right:0!important;
        left:auto!important;
        right:auto!important;
        transform:none!important;
        translate:none!important;
        box-sizing:border-box!important;
      }
    `;
    document.head.appendChild(style);
  }

  function finalSection(){
    return document.querySelector('.section.final') || [...document.querySelectorAll('section,.section')]
      .find(el=>norm(el.textContent).includes('ваша точка опоры') && norm(el.textContent).includes('найти свою точку опоры')) || null;
  }

  function fix(final){
    if(!final) return false;
    set(final,'overflow','hidden');
    set(final,'overflow-x','hidden');
    set(final,'max-width','calc(100% - 24px)');
    set(final,'box-sizing','border-box');

    const buttons=[...final.querySelectorAll('button,a,[data-purchase],[role="button"]')]
      .filter(el=>norm(el.textContent).includes('найти свою точку опоры'));

    buttons.forEach(button=>{
      set(button,'width','100%');
      set(button,'max-width','100%');
      set(button,'min-width','0px');
      set(button,'margin-left','0px');
      set(button,'margin-right','0px');
      set(button,'left','auto');
      set(button,'right','auto');
      set(button,'transform','none');
      set(button,'translate','none');
      set(button,'box-sizing','border-box');

      let node=button.parentElement;
      while(node && node!==final){
        set(node,'max-width','100%');
        set(node,'min-width','0px');
        set(node,'box-sizing','border-box');
        set(node,'overflow-x','hidden');
        node=node.parentElement;
      }
    });
    return true;
  }

  injectStyle();

  let observer=null;
  let applying=false;
  function attach(){
    const final=finalSection();
    if(!final) return false;
    fix(final);
    if(observer) return true;
    observer=new MutationObserver(()=>{
      if(applying) return;
      applying=true;
      requestAnimationFrame(()=>{
        fix(finalSection()||final);
        applying=false;
      });
    });
    observer.observe(final,{subtree:true,childList:true,attributes:true,attributeFilter:['style','class']});
    return true;
  }

  if(!attach()){
    let tries=0;
    const timer=setInterval(()=>{
      tries++;
      if(attach() || tries>=50) clearInterval(timer);
    },100);
  }
})();
