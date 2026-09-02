(()=>{
  const STYLE_ID='club999-inside-pay-v109';

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      #inside .section-action.section-action--pay-v109{
        display:flex!important;
        flex-direction:column!important;
        align-items:center!important;
        gap:9px!important;
        margin-top:20px!important;
      }
      #inside .button--pay-v109{
        position:relative!important;
        isolation:isolate!important;
        overflow:hidden!important;
        width:min(100%,420px)!important;
        min-height:54px!important;
        border-radius:999px!important;
        border:1px solid rgba(255,225,137,.92)!important;
        color:#fff2c9!important;
        background:
          linear-gradient(180deg,
            rgba(224,188,94,.98) 0%,
            rgba(186,142,55,.98) 34%,
            rgba(136,96,28,.99) 68%,
            rgba(91,65,24,.99) 100%)!important;
        box-shadow:
          0 7px 0 rgba(62,39,8,.66),
          0 13px 24px rgba(0,8,13,.32),
          0 0 18px rgba(247,205,91,.28),
          0 0 34px rgba(247,205,91,.14),
          inset 0 2px 0 rgba(255,247,211,.42),
          inset 0 -2px 0 rgba(72,43,6,.34)!important;
        text-shadow:0 1px 1px rgba(67,39,4,.40)!important;
        cursor:pointer!important;
      }
      #inside .button--pay-v109::before{
        content:"";
        position:absolute;
        z-index:0;
        inset:1px 1px 47% 1px;
        border-radius:999px 999px 70% 70%;
        background:linear-gradient(180deg,rgba(255,251,226,.28),rgba(255,244,194,.06));
        pointer-events:none;
      }
      #inside .button--pay-v109::after{
        content:"";
        position:absolute;
        z-index:1;
        top:-35%;
        left:-42%;
        width:34%;
        height:170%;
        transform:rotate(20deg);
        background:linear-gradient(90deg,transparent,rgba(255,255,255,.06),rgba(255,249,221,.58),rgba(255,255,255,.06),transparent);
        filter:blur(.35px);
        animation:club999Shine109 3.8s ease-in-out infinite;
        pointer-events:none;
      }
      #inside .button--pay-v109 span{
        position:relative;
        z-index:2;
      }
      #inside .button-note--pay-v109{
        margin:0!important;
        max-width:420px!important;
        color:rgba(238,242,239,.78)!important;
        font-size:12px!important;
        line-height:1.45!important;
        text-align:center!important;
      }
      #inside .button-note--pay-v109 strong{
        color:#f0d786!important;
        font-weight:700!important;
      }
      @keyframes club999Shine109{
        0%,62%{left:-42%;opacity:0}
        68%{opacity:1}
        82%{left:112%;opacity:1}
        88%,100%{left:112%;opacity:0}
      }
      @media(max-width:700px){
        #inside .section-action.section-action--pay-v109{margin-top:17px!important;gap:8px!important}
        #inside .button--pay-v109{
          width:100%!important;
          min-height:50px!important;
          box-shadow:
            0 6px 0 rgba(62,39,8,.66),
            0 11px 20px rgba(0,8,13,.30),
            0 0 16px rgba(247,205,91,.26),
            0 0 28px rgba(247,205,91,.12),
            inset 0 2px 0 rgba(255,247,211,.40),
            inset 0 -2px 0 rgba(72,43,6,.32)!important;
        }
        #inside .button-note--pay-v109{font-size:11px!important;line-height:1.4!important;padding:0 6px!important}
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
    action.classList.remove('section-action--pay-v108');
    action.classList.add('section-action--pay-v109');
    action.innerHTML='';

    const button=document.createElement('button');
    button.type='button';
    button.className='button button--primary button--pay-v109';
    button.setAttribute('data-purchase','');
    button.innerHTML='<span>Посмотреть, что есть внутри</span>';
    button.addEventListener('click',openPurchase);

    const note=document.createElement('p');
    note.className='button-note button-note--pay-v109';
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
