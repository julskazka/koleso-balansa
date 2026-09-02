(()=>{
  const STYLE_ID='club999-cross-block-safe-width-v103';

  function apply(){
    const connection=document.querySelector('.connection');
    if(!connection) return false;

    const section=connection.closest('.section') || connection.closest('section');
    const copy=connection.querySelector('.connection__copy');
    const heading=copy?.querySelector('h2');
    const directions=document.getElementById('directions');
    if(!section || !copy || !heading) return false;

    section.classList.add('club999-cross-section-v103');
    connection.classList.add('club999-cross-connection-v103');
    copy.classList.add('club999-cross-copy-v103');
    heading.classList.add('club999-cross-title-v103');

    if(window.matchMedia('(max-width:700px)').matches){
      heading.innerHTML='<span>Темы пересекаются</span><span>и дополняют</span><span>друг друга</span>';
    }

    document.getElementById(STYLE_ID)?.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      @media(max-width:700px){
        #directions.directions.section,
        .directions.section#directions{
          padding-bottom:0!important;
          margin-bottom:0!important;
        }
        .club999-cross-section-v103{
          width:100%!important;
          max-width:100vw!important;
          margin:0 auto!important;
          padding-top:12px!important;
          padding-left:max(22px,env(safe-area-inset-left))!important;
          padding-right:max(22px,env(safe-area-inset-right))!important;
          box-sizing:border-box!important;
          overflow:visible!important;
        }
        .club999-cross-connection-v103{
          width:100%!important;
          max-width:100%!important;
          min-width:0!important;
          margin:0 auto!important;
          grid-template-columns:minmax(0,1fr)!important;
          gap:0!important;
          box-sizing:border-box!important;
        }
        .club999-cross-copy-v103{
          width:100%!important;
          max-width:360px!important;
          min-width:0!important;
          margin-left:auto!important;
          margin-right:auto!important;
          padding-left:0!important;
          padding-right:0!important;
          box-sizing:border-box!important;
          transform:none!important;
          overflow:visible!important;
        }
        .club999-cross-title-v103{
          display:block!important;
          width:100%!important;
          max-width:350px!important;
          min-width:0!important;
          margin-left:auto!important;
          margin-right:auto!important;
          padding-left:0!important;
          padding-right:0!important;
          box-sizing:border-box!important;
          font-size:clamp(28px,7.6vw,34px)!important;
          line-height:1.08!important;
          overflow:visible!important;
          word-break:normal!important;
          overflow-wrap:normal!important;
          hyphens:none!important;
          text-align:center!important;
        }
        .club999-cross-title-v103>span,
        .club999-cross-title-v103 .content-title-line-v73{
          display:block!important;
          width:100%!important;
          max-width:100%!important;
          margin:0 auto!important;
          white-space:nowrap!important;
          overflow:visible!important;
          text-overflow:clip!important;
          text-align:center!important;
        }
        .club999-cross-copy-v103>p:not(.section-kicker){
          width:100%!important;
          max-width:340px!important;
          min-width:0!important;
          margin-left:auto!important;
          margin-right:auto!important;
          padding-left:0!important;
          padding-right:0!important;
          box-sizing:border-box!important;
          overflow:visible!important;
          word-break:normal!important;
          overflow-wrap:normal!important;
          hyphens:none!important;
          text-align:center!important;
        }
      }

      @media(min-width:701px){
        .club999-cross-section-v103{
          padding-top:30px!important;
          padding-left:32px!important;
          padding-right:32px!important;
          box-sizing:border-box!important;
        }
      }
    `;
    document.head.appendChild(style);
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries+=1;
    if(apply() || tries>=30) clearInterval(timer);
  },120);

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();

  let resizeTimer;
  window.addEventListener('resize',()=>{
    clearTimeout(resizeTimer);
    resizeTimer=setTimeout(apply,80);
  },{passive:true});
})();
