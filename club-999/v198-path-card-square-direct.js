(()=>{
  const GOLD='#f2d477';
  const set=(el,p,v)=>el.style.setProperty(p,v,'important');
  function apply(){
    document.querySelectorAll('.path-card li > span:first-child').forEach(el=>{
      set(el,'width','30px');
      set(el,'height','30px');
      set(el,'min-width','30px');
      set(el,'min-height','30px');
      set(el,'flex','0 0 30px');
      set(el,'display','grid');
      set(el,'place-items','center');
      set(el,'box-sizing','border-box');
      set(el,'border-radius','8px');
      set(el,'border','1px solid rgba(242,212,119,.88)');
      set(el,'background','radial-gradient(circle at 34% 24%,rgba(255,241,182,.18) 0%,rgba(255,241,182,.05) 34%,transparent 50%),linear-gradient(145deg,rgba(10,82,94,.94),rgba(3,34,44,.99))');
      set(el,'box-shadow','inset 0 0 0 1px rgba(255,255,255,.045), inset 0 0 8px rgba(82,205,196,.07), 0 0 6px rgba(242,212,119,.24), 0 0 12px rgba(66,188,184,.10)');
      set(el,'color',GOLD);
      set(el,'-webkit-text-fill-color',GOLD);
      set(el,'font-weight','700');
      set(el,'font-size','14px');
      set(el,'line-height','1');
      set(el,'text-align','center');
      set(el,'text-shadow','0 0 5px rgba(242,212,119,.30)');
      set(el,'margin','0');
      set(el,'padding','0');
      set(el,'transform','none');
      set(el,'filter','none');
    });
  }
  const s=document.createElement('style');
  s.id='club999-v198-path-card-square-style';
  s.textContent='.path-card li > span:first-child{border-radius:8px!important}.path-card li > span:first-child::before,.path-card li > span:first-child::after{content:none!important;display:none!important}@media(max-width:380px){.path-card li > span:first-child{width:28px!important;height:28px!important;min-width:28px!important;min-height:28px!important;flex-basis:28px!important;font-size:13px!important;border-radius:8px!important}}';
  document.head.appendChild(s);
  apply();
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [150,400,900,1600,2800,4500].forEach(ms=>setTimeout(apply,ms));
})();
