(()=>{
  const STYLE_ID='club999-directions-luxe-art-v98';
  ['club999-directions-luxe-svg-v97','club999-directions-polish-v95','club999-directions-polish-v96'].forEach(id=>document.getElementById(id)?.remove());

  const art={body:bodyArt,energy:energyArt,work:workArt,relations:relationsArt,community:communityArt,beauty:beautyArt};

  function defs(id,seed){return `<defs>
    <radialGradient id="${id}bg" cx="50%" cy="46%" r="72%"><stop offset="0" stop-color="#073b46"/><stop offset=".52" stop-color="#022a35"/><stop offset="1" stop-color="#00141c"/></radialGradient>
    <linearGradient id="${id}gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff5ca"/><stop offset=".25" stop-color="#ffdc79"/><stop offset=".58" stop-color="#eab040"/><stop offset=".82" stop-color="#ffcf61"/><stop offset="1" stop-color="#9b5910"/></linearGradient>
    <linearGradient id="${id}aqua" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c4ffff"/><stop offset=".42" stop-color="#65e3e8"/><stop offset="1" stop-color="#168c9b"/></linearGradient>
    <radialGradient id="${id}sun" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fffde9"/><stop offset=".2" stop-color="#ffe9a0"/><stop offset=".48" stop-color="#ffc64c"/><stop offset=".75" stop-color="#d98b17"/><stop offset="1" stop-color="#7d4309" stop-opacity="0"/></radialGradient>
    <radialGradient id="${id}mist" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#55e7ec" stop-opacity=".54"/><stop offset=".42" stop-color="#1ea2b1" stop-opacity=".20"/><stop offset="1" stop-color="#087181" stop-opacity="0"/></radialGradient>
    <filter id="${id}goldGlow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5" result="b"/><feColorMatrix in="b" type="matrix" values="1 0 0 0 .25  0 .72 0 0 .08  0 0 .18 0 0  0 0 0 .9 0" result="g"/><feMerge><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="${id}soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="12"/></filter>
    <filter id="${id}neb" x="-35%" y="-35%" width="170%" height="170%"><feTurbulence type="fractalNoise" baseFrequency=".004 .014" numOctaves="4" seed="${seed}" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 .02 0 0 0 0 .56 0 0 0 0 .62 0 0 0 .62 0"/><feGaussianBlur stdDeviation="7"/></filter>
    <filter id="${id}grain" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" seed="${seed+17}"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="table" tableValues="0 .08"/></feComponentTransfer></filter>
  </defs>`;}

  function base(id,seed,inner){return `<svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    ${defs(id,seed)}
    <rect width="600" height="600" rx="34" fill="url(#${id}bg)"/>
    <rect x="-70" y="-40" width="740" height="680" fill="#0d8f9c" opacity=".20" filter="url(#${id}neb)"/>
    <ellipse cx="160" cy="130" rx="190" ry="130" fill="url(#${id}mist)" opacity=".46" filter="url(#${id}soft)"/>
    <ellipse cx="470" cy="170" rx="160" ry="110" fill="url(#${id}mist)" opacity=".28" filter="url(#${id}soft)"/>
    <ellipse cx="330" cy="500" rx="230" ry="120" fill="url(#${id}mist)" opacity=".17" filter="url(#${id}soft)"/>
    <g opacity=".9">${stars()}</g>
    <g fill="none" stroke="#e7ba55" stroke-opacity=".34" stroke-width="1.2"><circle cx="300" cy="300" r="224"/><circle cx="300" cy="300" r="192"/><circle cx="300" cy="300" r="150"/></g>
    <g fill="#ffd970" opacity=".9"><circle cx="300" cy="76" r="4"/><circle cx="524" cy="300" r="4"/><circle cx="300" cy="524" r="4"/><circle cx="76" cy="300" r="4"/></g>
    ${inner}
    <rect width="600" height="600" rx="34" fill="#fff" opacity=".045" filter="url(#${id}grain)"/>
  </svg>`;}

  function stars(){
    return `<circle cx="86" cy="92" r="1.5" fill="#ffe397"/><circle cx="128" cy="55" r="1" fill="#b8fbff"/><circle cx="170" cy="108" r="1.2" fill="#ffe397"/><circle cx="226" cy="72" r="1" fill="#b8fbff"/><circle cx="368" cy="58" r="1.3" fill="#ffe397"/><circle cx="438" cy="94" r="1" fill="#b8fbff"/><circle cx="506" cy="78" r="1.5" fill="#ffe397"/><circle cx="548" cy="172" r="1.1" fill="#a8f4fa"/><circle cx="64" cy="202" r="1.2" fill="#a8f4fa"/><circle cx="102" cy="364" r="1.1" fill="#ffe397"/><circle cx="518" cy="388" r="1.3" fill="#ffe397"/><circle cx="470" cy="470" r="1.1" fill="#a8f4fa"/><circle cx="144" cy="490" r="1.2" fill="#ffe397"/><circle cx="248" cy="532" r="1" fill="#a8f4fa"/><circle cx="386" cy="510" r="1.2" fill="#ffe397"/>`;
  }

  function bodyArt(){const id='v98b';return base(id,13,`
    <g filter="url(#${id}goldGlow)" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="300" cy="128" r="34" fill="rgba(255,222,122,.08)" stroke="url(#${id}gold)" stroke-width="5"/>
      <path d="M265 158c-19 13-35 33-45 61-12 34-18 76-23 117-5 46-15 87-36 126" stroke="url(#${id}gold)" stroke-width="6"/>
      <path d="M335 158c19 13 35 33 45 61 12 34 18 76 23 117 5 46 15 87 36 126" stroke="url(#${id}gold)" stroke-width="6"/>
      <path d="M300 161c-20 12-31 28-35 50-5 30-3 63 4 99 6 31 2 64-12 98-8 20-20 43-37 68" stroke="url(#${id}gold)" stroke-width="5"/>
      <path d="M300 161c20 12 31 28 35 50 5 30 3 63-4 99-6 31-2 64 12 98 8 20 20 43 37 68" stroke="url(#${id}gold)" stroke-width="5"/>
      <path d="M221 220c-24 31-42 70-53 116M379 220c24 31 42 70 53 116" stroke="url(#${id}aqua)" stroke-width="3.4" opacity=".86"/>
      <path d="M257 214c13 18 27 27 43 27 16 0 30-9 43-27" stroke="url(#${id}gold)" stroke-width="3.2" opacity=".86"/>
      <path d="M236 486c17-27 38-42 64-46 26 4 47 19 64 46" stroke="url(#${id}gold)" stroke-width="4"/>
      <path d="M205 490c25-13 48-13 69 1M395 490c-25-13-48-13-69 1" stroke="url(#${id}aqua)" stroke-width="2.8" opacity=".72"/>
    </g>
    <g filter="url(#${id}goldGlow)"><circle cx="300" cy="198" r="16" fill="url(#${id}sun)"/><circle cx="300" cy="264" r="19" fill="url(#${id}sun)"/><circle cx="300" cy="332" r="22" fill="url(#${id}sun)"/><circle cx="300" cy="402" r="26" fill="url(#${id}sun)"/></g>
    <g fill="none" stroke="url(#${id}gold)" stroke-width="2" opacity=".76"><circle cx="300" cy="198" r="31"/><circle cx="300" cy="264" r="37"/><circle cx="300" cy="332" r="44"/><circle cx="300" cy="402" r="52"/></g>
    <path d="M206 492c36 36 67 51 94 51 27 0 58-15 94-51-24 8-48 10-72 6-8 22-15 34-22 34s-14-12-22-34c-24 4-48 2-72-6z" fill="rgba(255,202,76,.10)" stroke="url(#${id}gold)" stroke-width="3" filter="url(#${id}goldGlow)"/>
  `);}

  function energyArt(){const id='v98e';return base(id,29,`
    <g transform="translate(300 300)" filter="url(#${id}goldGlow)">
      <circle r="78" fill="rgba(255,204,76,.08)" stroke="url(#${id}gold)" stroke-width="5"/>
      <circle r="54" fill="rgba(255,220,112,.08)" stroke="url(#${id}gold)" stroke-width="3"/>
      <circle r="29" fill="url(#${id}sun)"/>
      <g stroke="url(#${id}gold)" stroke-width="3" fill="none" opacity=".95"><path d="M0-138V-79"/><path d="M0 79v59"/><path d="M-138 0h59"/><path d="M79 0h59"/><path d="M-98-98l42 42"/><path d="M56 56l42 42"/><path d="M98-98L56-56"/><path d="M-56 56l-42 42"/></g>
      <g fill="none" stroke="url(#${id}gold)" stroke-width="3" opacity=".8"><ellipse rx="182" ry="76" transform="rotate(18)"/><ellipse rx="182" ry="76" transform="rotate(-22)"/><ellipse rx="132" ry="212" transform="rotate(68)"/></g>
      <g fill="none" stroke="url(#${id}aqua)" stroke-width="2.5" opacity=".72"><ellipse rx="212" ry="112" transform="rotate(37)"/><ellipse rx="212" ry="112" transform="rotate(-39)"/></g>
      <g fill="#ffe391"><circle cx="0" cy="-182" r="6"/><circle cx="160" cy="-88" r="5"/><circle cx="184" cy="70" r="5"/><circle cx="0" cy="190" r="6"/><circle cx="-170" cy="90" r="5"/><circle cx="-184" cy="-68" r="5"/></g>
    </g>
    <path d="M165 426c37 20 76 30 117 31 51 1 101-12 151-39" fill="none" stroke="url(#${id}aqua)" stroke-width="4" stroke-linecap="round" opacity=".66"/>
  `);}

  function workArt(){const id='v98w';return base(id,43,`
    <g opacity=".96">
      <path d="M65 430l96-128 58 77 73-142 92 121 58-78 93 150z" fill="#031e27" stroke="url(#${id}aqua)" stroke-width="3" opacity=".86"/>
      <path d="M53 468c90-10 138-37 181-70 33-26 42-54 58-86 17-34 42-72 92-102" fill="none" stroke="rgba(255,186,49,.30)" stroke-width="32" stroke-linecap="round" filter="url(#${id}soft)"/>
      <path d="M53 468c90-10 138-37 181-70 33-26 42-54 58-86 17-34 42-72 92-102" fill="none" stroke="url(#${id}gold)" stroke-width="11" stroke-linecap="round" filter="url(#${id}goldGlow)"/>
      <path d="M55 468c79-8 125-30 170-63 40-30 51-58 67-94 17-38 41-73 91-103" fill="none" stroke="#fff1b2" stroke-width="2.2" stroke-linecap="round" opacity=".92"/>
      <path d="M384 207l11-27 11 27 29 3-22 19 7 28-25-15-25 15 7-28-22-19z" fill="url(#${id}sun)" stroke="url(#${id}gold)" stroke-width="2.4" filter="url(#${id}goldGlow)"/>
      <g fill="none" stroke="url(#${id}gold)" stroke-width="2" opacity=".56"><path d="M92 396l54-74 37 49"/><path d="M384 357l54-78 46 77"/></g>
    </g>
  `);}

  function relationsArt(){const id='v98r';return base(id,61,`
    <g filter="url(#${id}goldGlow)" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M160 365c17-72 28-139 82-173 16-10 37-15 58-14-16 21-24 44-24 69 0 42 18 81 50 117" stroke="url(#${id}gold)" stroke-width="6"/>
      <path d="M440 365c-17-72-28-139-82-173-16-10-37-15-58-14 16 21 24 44 24 69 0 42-18 81-50 117" stroke="url(#${id}gold)" stroke-width="6"/>
      <path d="M225 199c18-31 43-47 75-47M375 199c-18-31-43-47-75-47" stroke="url(#${id}aqua)" stroke-width="3" opacity=".84"/>
      <path d="M179 366c37 18 69 45 96 81 9 12 17 25 25 40 8-15 16-28 25-40 27-36 59-63 96-81" stroke="url(#${id}gold)" stroke-width="5"/>
      <path d="M220 330c26-35 53-53 80-53 27 0 54 18 80 53" stroke="url(#${id}aqua)" stroke-width="3.3" opacity=".72"/>
    </g>
    <g filter="url(#${id}goldGlow)"><circle cx="300" cy="356" r="44" fill="url(#${id}sun)" opacity=".92"/><path d="M300 399c-50-34-76-59-76-91 0-24 18-43 42-43 16 0 28 8 34 21 7-13 19-21 35-21 23 0 41 19 41 43 0 32-26 57-76 91z" fill="rgba(255,204,70,.13)" stroke="url(#${id}gold)" stroke-width="4"/></g>
  `);}

  function communityArt(){const id='v98c';return base(id,79,`
    <g filter="url(#${id}goldGlow)"><circle cx="300" cy="318" r="40" fill="url(#${id}sun)"/><circle cx="300" cy="318" r="88" fill="none" stroke="url(#${id}gold)" stroke-width="3" opacity=".65"/><circle cx="300" cy="318" r="151" fill="none" stroke="url(#${id}aqua)" stroke-width="2" opacity=".48"/></g>
    <g fill="none" stroke="url(#${id}gold)" stroke-linecap="round" stroke-linejoin="round" filter="url(#${id}goldGlow)">
      <g transform="translate(300 140)"><circle r="17" stroke-width="4"/><path d="M0 18c-24 16-28 40-24 73M0 18c24 16 28 40 24 73M-24 91c9 8 17 12 24 12s15-4 24-12" stroke-width="4"/></g>
      <g transform="translate(166 222) scale(.86)"><circle r="17" stroke-width="4"/><path d="M0 18c-24 16-28 40-24 73M0 18c24 16 28 40 24 73M-24 91c9 8 17 12 24 12s15-4 24-12" stroke-width="4"/></g>
      <g transform="translate(434 222) scale(.86)"><circle r="17" stroke-width="4"/><path d="M0 18c-24 16-28 40-24 73M0 18c24 16 28 40 24 73M-24 91c9 8 17 12 24 12s15-4 24-12" stroke-width="4"/></g>
      <g transform="translate(192 405) scale(.9)"><circle r="17" stroke-width="4"/><path d="M0 18c-24 16-28 40-24 73M0 18c24 16 28 40 24 73M-24 91c9 8 17 12 24 12s15-4 24-12" stroke-width="4"/></g>
      <g transform="translate(408 405) scale(.9)"><circle r="17" stroke-width="4"/><path d="M0 18c-24 16-28 40-24 73M0 18c24 16 28 40 24 73M-24 91c9 8 17 12 24 12s15-4 24-12" stroke-width="4"/></g>
      <g transform="translate(300 454) scale(.82)"><circle r="17" stroke-width="4"/><path d="M0 18c-24 16-28 40-24 73M0 18c24 16 28 40 24 73M-24 91c9 8 17 12 24 12s15-4 24-12" stroke-width="4"/></g>
    </g>
    <g stroke="url(#${id}aqua)" stroke-width="2" opacity=".55"><path d="M300 246L300 192M247 270L196 243M353 270L404 243M240 365L207 402M360 365L393 402M300 406v40"/></g>
  `);}

  function beautyArt(){const id='v98l';return base(id,97,`
    <g transform="translate(300 330)" filter="url(#${id}goldGlow)" stroke-linejoin="round">
      <g fill="rgba(255,205,74,.10)" stroke="url(#${id}gold)" stroke-width="4">
        <path d="M0 112C-40 62-42 4 0-83 42 4 40 62 0 112z"/>
        <path d="M-4 102C-80 78-111 28-94-65-28-31 0 18-4 102z"/>
        <path d="M4 102C80 78 111 28 94-65 28-31 0 18 4 102z"/>
        <path d="M-26 108C-112 113-159 76-160-10-87 6-41 45-26 108z"/>
        <path d="M26 108C112 113 159 76 160-10 87 6 41 45 26 108z"/>
        <path d="M-53 105C-134 139-189 120-214 51-137 45-82 66-53 105z"/>
        <path d="M53 105C134 139 189 120 214 51 137 45 82 66 53 105z"/>
      </g>
      <g fill="rgba(91,228,233,.06)" stroke="url(#${id}aqua)" stroke-width="2.4" opacity=".8"><path d="M0 88C-24 49-25 10 0-45 25 10 24 49 0 88z"/><path d="M-8 88C-61 71-84 39-74-16-27 3-7 34-8 88z"/><path d="M8 88C61 71 84 39 74-16 27 3 7 34 8 88z"/></g>
      <circle r="33" fill="url(#${id}sun)"/>
    </g>
    <g fill="none" stroke="url(#${id}gold)" stroke-width="2" opacity=".55"><circle cx="300" cy="330" r="188"/><circle cx="300" cy="330" r="125"/><path d="M300 142v376M112 330h376"/></g>
  `);}

  function addStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      #directions .direction-card.club999-direction-popup.v92-real-card{
        border:2px solid #efbd58!important;
        background:#001820!important;
        box-shadow:
          0 12px 28px rgba(0,7,12,.46),
          0 0 0 1px rgba(255,231,161,.16),
          0 0 13px rgba(238,182,65,.48),
          0 0 28px rgba(238,182,65,.19),
          inset 0 1px 0 rgba(255,247,218,.30)!important;
      }
      #directions .direction-card.club999-direction-popup.v92-real-card::before{
        inset:6px!important;
        border:1px solid rgba(255,224,132,.78)!important;
        box-shadow:0 0 8px rgba(255,197,72,.32),inset 0 0 8px rgba(255,202,83,.12)!important;
        z-index:4!important;
      }
      #directions .direction-card.club999-direction-popup.v92-real-card::after{
        z-index:2!important;
        background:linear-gradient(180deg,rgba(0,12,17,0) 58%,rgba(0,10,15,.18) 74%,rgba(0,8,13,.72) 100%)!important;
      }
      #directions .v92-card-picture{
        background:none!important;
        background-image:none!important;
        overflow:hidden!important;
      }
      #directions .v92-card-picture svg{display:block!important;width:100%!important;height:100%!important;transform:scale(1.01);transform-origin:center center}
      #directions .v92-card-title{
        color:#ffe6a4!important;
        text-shadow:0 2px 10px rgba(0,0,0,.98),0 0 7px rgba(255,205,82,.50),0 0 18px rgba(222,165,45,.26)!important;
      }
      #directions .club999-direction-popup__plus{
        border-color:#f3c65c!important;
        background:radial-gradient(circle at 34% 28%,rgba(255,239,177,.24),rgba(3,33,42,.84) 62%)!important;
        box-shadow:0 0 0 1px rgba(255,233,166,.12),0 0 11px rgba(242,190,67,.52),inset 0 1px 0 rgba(255,255,255,.18)!important;
      }
      #directions .direction-card.club999-direction-popup.v92-real-card:hover,
      #directions .direction-card.club999-direction-popup.v92-real-card:focus-visible{
        border-color:#ffd978!important;
        box-shadow:0 14px 30px rgba(0,7,12,.50),0 0 0 1px rgba(255,238,181,.22),0 0 16px rgba(248,194,69,.58),0 0 34px rgba(248,194,69,.22),inset 0 1px 0 rgba(255,250,229,.34)!important;
      }
    `;
    document.head.appendChild(style);
  }

  function paint(){
    addStyle();
    const cards=[...document.querySelectorAll('#directions .direction-card.v92-real-card')];
    if(cards.length!==6) return false;
    let done=0;
    cards.forEach(card=>{
      const theme=card.dataset.directionTheme;
      const fn=art[theme];
      const picture=card.querySelector('.v92-card-picture');
      if(!fn||!picture) return;
      picture.style.removeProperty('background-image');
      picture.style.setProperty('background-image','none','important');
      picture.innerHTML=fn();
      card.dataset.v98='1';
      done+=1;
    });
    return done===6;
  }

  let tries=0;
  if(!paint()){
    const timer=setInterval(()=>{tries+=1;if(paint()||tries>60) clearInterval(timer)},100);
  }
})();
