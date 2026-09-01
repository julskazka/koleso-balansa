(()=>{
  const id='club999-clarity-cards-v77';
  if(document.getElementById(id)) return;

  const style=document.createElement('style');
  style.id=id;
  style.textContent=`
    .question-stack{
      gap:clamp(10px,1.3vw,14px)!important;
    }

    .question-card{
      position:relative!important;
      isolation:isolate!important;
      overflow:hidden!important;
      box-sizing:border-box!important;
      min-height:0!important;
      padding:clamp(14px,1.7vw,18px) clamp(16px,2vw,21px)!important;
      grid-template-columns:50px minmax(0,1fr)!important;
      gap:clamp(12px,1.4vw,16px)!important;
      align-items:center!important;
      border:1px solid rgba(240,210,130,.24)!important;
      border-radius:20px!important;
      background:
        linear-gradient(135deg,rgba(16,88,99,.34),rgba(2,27,38,.68) 54%,rgba(2,20,31,.78)),
        rgba(3,35,45,.66)!important;
      -webkit-backdrop-filter:blur(18px) saturate(130%)!important;
      backdrop-filter:blur(18px) saturate(130%)!important;
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,.11),
        inset 0 -1px 0 rgba(4,18,27,.35),
        0 10px 28px rgba(0,12,20,.18)!important;
    }

    .question-card::after{
      content:''!important;
      position:absolute!important;
      z-index:-1!important;
      inset:0!important;
      pointer-events:none!important;
      background:
        radial-gradient(circle at 18% 0%,rgba(119,229,220,.13),transparent 38%),
        linear-gradient(110deg,rgba(255,255,255,.055),transparent 34%)!important;
    }

    .question-card > span.question-card__icon{
      display:grid!important;
      place-items:center!important;
      align-self:center!important;
      width:48px!important;
      height:48px!important;
      min-width:48px!important;
      margin:0!important;
      padding:0!important;
      border:1px solid rgba(240,210,130,.34)!important;
      border-radius:16px!important;
      background:
        radial-gradient(circle at 32% 24%,rgba(255,255,255,.16),transparent 33%),
        linear-gradient(145deg,rgba(16,91,103,.76),rgba(3,38,49,.9))!important;
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,.13),
        0 0 0 1px rgba(89,205,201,.06),
        0 7px 18px rgba(0,17,25,.24)!important;
      font-size:0!important;
      line-height:0!important;
      letter-spacing:0!important;
    }

    .question-card__icon svg{
      display:block!important;
      width:30px!important;
      height:30px!important;
      overflow:visible!important;
      filter:drop-shadow(0 2px 5px rgba(0,0,0,.28));
    }

    .question-card p{
      position:relative!important;
      z-index:1!important;
      margin:0!important;
      color:rgba(255,255,255,.96)!important;
      font-size:clamp(15px,1.35vw,18px)!important;
      font-weight:540!important;
      line-height:1.38!important;
      letter-spacing:-.012em!important;
      text-shadow:0 1px 3px rgba(0,12,18,.72)!important;
      text-wrap:pretty!important;
    }

    @media(max-width:700px){
      .clarity__grid{gap:17px!important}
      .question-stack{
        display:grid!important;
        gap:9px!important;
      }
      .question-card{
        width:calc(100% - 14px)!important;
        margin-inline:auto!important;
        padding:11px 13px!important;
        grid-template-columns:43px minmax(0,1fr)!important;
        gap:11px!important;
        border-radius:17px!important;
        background:
          linear-gradient(135deg,rgba(15,84,96,.38),rgba(2,26,37,.78) 56%,rgba(2,18,28,.84)),
          rgba(3,31,41,.76)!important;
        -webkit-backdrop-filter:blur(20px) saturate(135%)!important;
        backdrop-filter:blur(20px) saturate(135%)!important;
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,.10),
          0 7px 20px rgba(0,10,18,.18)!important;
      }
      .question-card > span.question-card__icon{
        width:42px!important;
        height:42px!important;
        min-width:42px!important;
        border-radius:14px!important;
      }
      .question-card__icon svg{
        width:27px!important;
        height:27px!important;
      }
      .question-card p{
        font-size:14.5px!important;
        font-weight:520!important;
        line-height:1.34!important;
      }
    }

    @media(max-width:360px){
      .question-stack{gap:8px!important}
      .question-card{
        width:calc(100% - 8px)!important;
        padding:10px 11px!important;
        grid-template-columns:40px minmax(0,1fr)!important;
        gap:9px!important;
        border-radius:16px!important;
      }
      .question-card > span.question-card__icon{
        width:39px!important;
        height:39px!important;
        min-width:39px!important;
        border-radius:13px!important;
      }
      .question-card__icon svg{
        width:25px!important;
        height:25px!important;
      }
      .question-card p{
        font-size:13.8px!important;
        line-height:1.32!important;
      }
    }
  `;
  document.head.appendChild(style);

  const icons=[
    `<svg viewBox="0 0 32 32" aria-hidden="true"><defs><linearGradient id="q1g" x1="5" y1="4" x2="27" y2="28" gradientUnits="userSpaceOnUse"><stop stop-color="#8BE7DF"/><stop offset=".55" stop-color="#F7DA83"/><stop offset="1" stop-color="#C49A32"/></linearGradient></defs><circle cx="16" cy="16" r="10.5" fill="none" stroke="url(#q1g)" stroke-width="1.6"/><path d="M18.8 12.9l-1.7 4.2-4.3 1.8 1.8-4.3 4.2-1.7z" fill="none" stroke="url(#q1g)" stroke-width="1.7" stroke-linejoin="round"/><path d="M16 3.8v2.5M16 25.7v2.5M3.8 16h2.5M25.7 16h2.5" stroke="#F4D47D" stroke-width="1.4" stroke-linecap="round"/><circle cx="16" cy="16" r="1.25" fill="#F8E8B6"/></svg>`,
    `<svg viewBox="0 0 32 32" aria-hidden="true"><defs><linearGradient id="q2g" x1="6" y1="5" x2="27" y2="27" gradientUnits="userSpaceOnUse"><stop stop-color="#8BE7DF"/><stop offset=".52" stop-color="#F4D47D"/><stop offset="1" stop-color="#BE8F27"/></linearGradient></defs><circle cx="13" cy="11" r="4" fill="none" stroke="url(#q2g)" stroke-width="1.7"/><path d="M6.5 23.5c.6-4 3-6.2 6.5-6.2 2.5 0 4.4 1.1 5.5 3" fill="none" stroke="url(#q2g)" stroke-width="1.7" stroke-linecap="round"/><path d="M22.5 12.2l1.4 2.1 2.5.6-1.7 1.9.2 2.6-2.4-1.1-2.3 1.1.2-2.6-1.8-1.9 2.6-.6 1.3-2.1z" fill="rgba(240,210,130,.12)" stroke="url(#q2g)" stroke-width="1.35" stroke-linejoin="round"/><path d="M21.3 15.9l.9.9 1.8-2" fill="none" stroke="#F8E8B6" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    `<svg viewBox="0 0 32 32" aria-hidden="true"><defs><linearGradient id="q3g" x1="5" y1="6" x2="27" y2="26" gradientUnits="userSpaceOnUse"><stop stop-color="#8BE7DF"/><stop offset=".5" stop-color="#F4D47D"/><stop offset="1" stop-color="#BE8F27"/></linearGradient></defs><circle cx="14.5" cy="16" r="9" fill="none" stroke="url(#q3g)" stroke-width="1.6"/><circle cx="14.5" cy="16" r="5.2" fill="none" stroke="url(#q3g)" stroke-width="1.5"/><circle cx="14.5" cy="16" r="1.7" fill="#F7DA83"/><path d="M18.5 12l7-5M21 7h4.5v4.5" fill="none" stroke="#8BE7DF" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.2 11.5l-4.7 4.5" stroke="#F8E8B6" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    `<svg viewBox="0 0 32 32" aria-hidden="true"><defs><linearGradient id="q4g" x1="5" y1="4" x2="27" y2="28" gradientUnits="userSpaceOnUse"><stop stop-color="#8BE7DF"/><stop offset=".5" stop-color="#F4D47D"/><stop offset="1" stop-color="#BE8F27"/></linearGradient></defs><path d="M7 24.5h5v-5h5v-5h5v-5h4" fill="none" stroke="url(#q4g)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.7 6.8L26 9.5l-3.3 2.7" fill="none" stroke="#F8E8B6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.3 7.8l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8.8-1.9z" fill="#F4D47D"/><circle cx="7" cy="24.5" r="1.5" fill="#8BE7DF"/></svg>`
  ];

  document.querySelectorAll('.question-card').forEach((card,index)=>{
    const marker=card.querySelector(':scope > span:first-child');
    if(!marker||!icons[index]) return;
    marker.classList.add('question-card__icon');
    marker.setAttribute('aria-hidden','true');
    marker.innerHTML=icons[index];
  });
})();
