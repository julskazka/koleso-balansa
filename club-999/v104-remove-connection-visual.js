(()=>{
  function apply(){
    const connection=document.querySelector('.connection');
    if(!connection) return false;

    const visual=connection.querySelector('.connection__visual');
    if(visual) visual.remove();

    connection.style.setProperty('display','block','important');
    connection.style.setProperty('grid-template-columns','none','important');
    connection.style.setProperty('gap','0','important');

    const copy=connection.querySelector('.connection__copy');
    if(copy){
      copy.style.setProperty('margin-left','auto','important');
      copy.style.setProperty('margin-right','auto','important');
    }
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries+=1;
    if(apply()||tries>=30) clearInterval(timer);
  },120);

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();
