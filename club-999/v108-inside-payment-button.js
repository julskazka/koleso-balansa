(()=>{
  const STYLE_ID='club999-inside-pay-v108';

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      #inside .section-action.section-action--pay-v108{
        display:flex!important;
        flex-direction:column!important;
        align-items:center!important;
        gap:9px!important;
        margin-top:20px!important;
      }
      #inside .button--pay-v108{
        position:relative!important;
        isolation:isolate!important;
        overflow:hidden!important;
        width:min(100%,420px)!important;
        min-height:54px!important;
        border-radius:999px!important;
        border:1px solid rgba(244,211,111,.55)!important;
        color:#f8e8b5!important;
        background:linear-gradient(180deg,rgba(13,82,91,.92),rgba(5,48,60,.96))!important;
        box-shadow:0 10px 26px rgba(0,10,16,.20),0 0 22px rgba(241,205,104,.13),inset 0 1px 0 rgba(255,255,255,.10)!important;
        cursor:pointer!important;
      }
      #inside .button--pay-v108::before{
        content:"";
        position:absolute;
        z-index:-1;
        inset:1px;
        border-radius:inherit;
        background:radial-gradient(circle at 50% -35%,rgba(109,231,235,.18),transparent 52%);
        pointer-events:none;
      }
      #inside .button--pay-v108::after{
        content:"";
        position:absolute;
        top:-35%;
        left:-42%;
        width:34%;
        height:170%;
        transform:rotate(20deg);
        background:linear-gradient(90deg,transparent,rgba(255,255,255,.08),rgba(255,244,205,.48),rgba(255,255,255,.08),transparent);
        filter:blur(.4px);
        animation:club999Shine108 3.8s ease-in-out infinite;
        pointer-events:none;
      }
      #inside .button--pay-v108 span{position:relative;z-index:2}
      #inside .button-note--pay-v108{
        margin:0!important;
        max-width:420px!important;
        color:rgba(238,242,239,.78)!important;
        font-size:12px!important;
        line-height:1.45!important;
        text-align:center!important;
      }
      #inside .button-note--pay-v108 strong{
        color:#f0d786!important;
        font-weight:700!important;
      }
      @keyframes club999Shine108{
        0%,62%{left:-42%;opacity:0}
        68%{opacity:1}
        82%{left:112%;opacity:1}
        88%,100%{left:112%;opacity:0}
      }
      @media(max-width:700px){
        #inside .section-action.section-action--pay-v108{margin-top:17px!important;gap:8px!important}
        #inside .button--pay-v108{width:100%!important;min-height:50px!important}
        #inside .button-note--pay-v108{font-size:11px!important;line-height:1.4!important;padding:0 6px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function openPurchase(){
    if(window.Club999Landing && typeof window.Club999Landing.openPurchase==='function'){
      window.Club999Landing.openPurchase();
      return;
    }
    const fallback=document.querySelector('#access [data-purchase],#final [data-purchase],[data-purchase]');
    if(fallback) fallback.click();
  }

  function apply(){
    const action=document.querySelector('#inside .section-action');
    if(!action) return false;
    injectStyle();
    if(action.classList.contains('section-action--pay-v108')) return true;
    action.classList.add('section-action--pay-v108');
    action.innerHTML='';

    const button=document.createElement('button');
    button.type='button';
    button.className='button button--primary button--pay-v108';
    button.setAttribute('data-purchase','');
    button.innerHTML='<span>Посмотреть, что есть внутри</span>';
    button.addEventListener('click',openPurchase);

    const note=document.createElement('p');
    note.className='button-note button-note--pay-v108';
    note.innerHTML='<strong>Полный доступ к клубу — 999 ₽ в месяц</strong><br>Новые эфиры и материалы — отмена в любой момент';

    action.append(button,note);
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries+=1;
    if(apply()||tries>=40) clearInterval(timer);
  },120);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();
