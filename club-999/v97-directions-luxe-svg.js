(()=>{
  const STYLE_ID='club999-directions-luxe-svg-v97';
  const map={
    'Тело':'body','Энергия':'energy','Дело':'work','Отношения':'relations','Окружение':'community','Красота':'beauty'
  };

  const stars=(p)=>`
    <g opacity=".9">
      <circle cx="64" cy="84" r="1.3" fill="#ffe7a1"/><circle cx="110" cy="58" r="1" fill="#aef5f6"/>
      <circle cx="150" cy="102" r="1.2" fill="#ffe7a1"/><circle cx="222" cy="54" r="1.1" fill="#b8f9fa"/>
      <circle cx="278" cy="90" r="1.3" fill="#ffe7a1"/><circle cx="336" cy="52" r="1.2" fill="#9fecee"/>
      <circle cx="408" cy="74" r="1.1" fill="#ffe7a1"/><circle cx="476" cy="52" r="1.3" fill="#b8f9fa"/>
      <circle cx="532" cy="108" r="1" fill="#ffe7a1"/><circle cx="82" cy="188" r="1" fill="#b8f9fa"/>
      <circle cx="526" cy="206" r="1.4" fill="#ffe7a1"/><circle cx="96" cy="312" r="1.2" fill="#ffe7a1"/>
      <circle cx="500" cy="334" r="1.1" fill="#aef5f6"/><circle cx="144" cy="410" r="1.1" fill="#aef5f6"/>
      <circle cx="438" cy="430" r="1.4" fill="#ffe7a1"/><circle cx="354" cy="398" r="1" fill="#b8f9fa"/>
    </g>`;

  function defs(p,seed){return `
    <defs>
      <radialGradient id="${p}bg" cx="50%" cy="48%" r="72%">
        <stop offset="0" stop-color="#073c48"/><stop offset=".48" stop-color="#022b36"/><stop offset="1" stop-color="#00141c"/>
      </radialGradient>
      <radialGradient id="${p}aqua" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#89f4f5" stop-opacity=".48"/><stop offset=".42" stop-color="#27aeb9" stop-opacity=".19"/><stop offset="1" stop-color="#0b5d68" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="${p}sun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff9d6"/><stop offset=".18" stop-color="#ffe9a1"/><stop offset=".48" stop-color="#ffc84f"/><stop offset=".78" stop-color="#d68b17"/><stop offset="1" stop-color="#8b4c09" stop-opacity=".15"/>
      </radialGradient>
      <linearGradient id="${p}gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#fff4c9"/><stop offset=".28" stop-color="#ffd977"/><stop offset=".62" stop-color="#e8aa38"/><stop offset="1" stop-color="#9d5b10"/>
      </linearGradient>
      <linearGradient id="${p}aqualine" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#c6ffff"/><stop offset=".45" stop-color="#6be0e4"/><stop offset="1" stop-color="#218b99"/>
      </linearGradient>
      <filter id="${p}neb" x="-30%" y="-30%" width="160%" height="160%">
        <feTurbulence type="fractalNoise" baseFrequency=".006 .018" numOctaves="4" seed="${seed}" result="noise"/>
        <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0.02  0 0 0 0 0.50  0 0 0 0 0.58  0 0 0 .75 0" result="teal"/>
        <feGaussianBlur in="teal" stdDeviation="5"/>
      </filter>
      <filter id="${p}glow" x="-70%" y="-70%" width="240%" height="240%">
        <feGaussianBlur stdDeviation="5.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="${p}soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="13"/></filter>
    </defs>`}

  function base(p,seed,content){return `<svg class="v97-luxe-art" viewBox="0 0 600 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    ${defs(p,seed)}
    <rect width="600" height="500" fill="url(#${p}bg)"/>
    <rect x="-40" y="-30" width="680" height="560" filter="url(#${p}neb)" opacity=".78"/>
    <ellipse cx="165" cy="170" rx="170" ry="120" fill="url(#${p}aqua)" opacity=".28" filter="url(#${p}soft)"/>
    <ellipse cx="455" cy="300" rx="150" ry="120" fill="url(#${p}aqua)" opacity=".20" filter="url(#${p}soft)"/>
    ${stars(p)}
    <g opacity=".45" fill="none" stroke="url(#${p}gold)" stroke-width="1">
      <ellipse cx="300" cy="250" rx="232" ry="188"/><ellipse cx="300" cy="250" rx="198" ry="158"/>
      <circle cx="300" cy="250" r="126"/>
    </g>
    ${content}
  </svg>`}

  function body(){const p='b97';return base(p,3,`
    <g filter="url(#${p}glow)">
      <path d="M300 82c23 0 40 18 40 41 0 19-10 34-26 41 12 13 22 27 27 45 7 25 13 47 28 75 10 18 20 40 20 65 0 35-22 66-54 75-9 3-19 5-35 5s-26-2-35-5c-32-9-54-40-54-75 0-25 10-47 20-65 15-28 21-50 28-75 5-18 15-32 27-45-16-7-26-22-26-41 0-23 17-41 40-41z" fill="rgba(255,220,115,.035)" stroke="url(#${p}gold)" stroke-width="4.2"/>
      <path d="M246 217c18 12 36 18 54 18s36-6 54-18M254 284c15 12 30 18 46 18s31-6 46-18M269 350c10 8 20 12 31 12s21-4 31-12" fill="none" stroke="url(#${p}aqualine)" stroke-width="2.2" opacity=".8"/>
      <path d="M226 191c-31 27-53 63-62 103M374 191c31 27 53 63 62 103" fill="none" stroke="url(#${p}gold)" stroke-width="2.7" stroke-linecap="round"/>
      <path d="M160 294c-12 45-3 84 27 117M440 294c12 45 3 84-27 117" fill="none" stroke="url(#${p}aqualine)" stroke-width="2" opacity=".7"/>
      <circle cx="300" cy="112" r="6" fill="url(#${p}sun)"/><circle cx="300" cy="180" r="8" fill="url(#${p}sun)"/><circle cx="300" cy="235" r="10" fill="url(#${p}sun)"/><circle cx="300" cy="298" r="12" fill="url(#${p}sun)"/><circle cx="300" cy="365" r="16" fill="url(#${p}sun)"/>
      <g stroke="url(#${p}gold)" stroke-width="1.2" opacity=".65"><circle cx="300" cy="365" r="30"/><circle cx="300" cy="298" r="25"/><circle cx="300" cy="235" r="21"/></g>
      <path d="M300 90v306" stroke="url(#${p}gold)" stroke-width="1.2" opacity=".5"/>
    </g>`)}

  function energy(){const p='e97';return base(p,7,`
    <g filter="url(#${p}glow)">
      <circle cx="300" cy="250" r="54" fill="url(#${p}sun)" opacity=".96"/>
      <g fill="none" stroke="url(#${p}gold)" stroke-linecap="round">
        <circle cx="300" cy="250" r="80" stroke-width="2.4"/><circle cx="300" cy="250" r="116" stroke-width="1.8" opacity=".8"/>
        <ellipse cx="300" cy="250" rx="202" ry="78" stroke-width="2.2" transform="rotate(-18 300 250)"/>
        <ellipse cx="300" cy="250" rx="190" ry="92" stroke-width="1.8" transform="rotate(34 300 250)" opacity=".8"/>
        <path d="M300 66C355 116 392 154 425 224s48 124 101 173M300 434C245 384 208 346 175 276S127 152 74 103" stroke-width="2" opacity=".85"/>
      </g>
      <g stroke="url(#${p}gold)" stroke-width="2" opacity=".8"><path d="M300 141v-54M300 413v-54M191 250h-54M463 250h-54"/><path d="M223 173l-39-39M416 366l-39-39M377 173l39-39M184 366l39-39"/></g>
      <g fill="#ffe9a2"><circle cx="300" cy="87" r="5"/><circle cx="300" cy="413" r="5"/><circle cx="137" cy="250" r="5"/><circle cx="463" cy="250" r="5"/><circle cx="184" cy="134" r="4"/><circle cx="416" cy="366" r="4"/></g>
      <path d="M169 315c56 28 86 68 131 68 46 0 75-39 131-68" fill="none" stroke="url(#${p}aqualine)" stroke-width="3" opacity=".65"/>
    </g>`)}

  function work(){const p='w97';return base(p,11,`
    <g>
      <path d="M70 390L165 300l62 34 73-96 67 48 85-102 78 206z" fill="#001a22" opacity=".76"/>
      <path d="M70 390L165 300l62 34 73-96 67 48 85-102" fill="none" stroke="url(#${p}aqualine)" stroke-width="2" opacity=".65"/>
      <path d="M304 430c-10-60 12-92 31-123 22-36 29-61 13-91-11-21-36-32-28-65 5-20 22-41 47-66" fill="none" stroke="url(#${p}gold)" stroke-width="14" stroke-linecap="round" opacity=".18" filter="url(#${p}glow)"/>
      <path d="M304 430c-10-60 12-92 31-123 22-36 29-61 13-91-11-21-36-32-28-65 5-20 22-41 47-66" fill="none" stroke="url(#${p}gold)" stroke-width="4.2" stroke-linecap="round" filter="url(#${p}glow)"/>
      <circle cx="367" cy="85" r="15" fill="url(#${p}sun)" filter="url(#${p}glow)"/>
      <g stroke="url(#${p}gold)" fill="none" opacity=".45"><path d="M367 48v-18M367 140v-18M330 85h-18M422 85h-18"/><circle cx="367" cy="85" r="48"/></g>
      <path d="M122 407c65-30 116-38 178-37 55 0 96-13 162-48" fill="none" stroke="url(#${p}aqualine)" stroke-width="2" opacity=".5"/>
    </g>`)}

  function relations(){const p='r97';return base(p,17,`
    <g filter="url(#${p}glow)">
      <path d="M214 151c-29 15-50 45-50 81 0 57 55 91 136 158 81-67 136-101 136-158 0-36-21-66-50-81-42-22-70 3-86 31-16-28-44-53-86-31z" fill="rgba(255,218,110,.035)" stroke="url(#${p}gold)" stroke-width="3.3"/>
      <path d="M230 135c28 4 50 21 63 47-9 30-30 54-58 67-24 11-43 32-55 59M370 135c-28 4-50 21-63 47 9 30 30 54 58 67 24 11 43 32 55 59" fill="none" stroke="url(#${p}gold)" stroke-width="2.4"/>
      <path d="M244 183c20 8 39 24 56 47 17-23 36-39 56-47" fill="none" stroke="url(#${p}aqualine)" stroke-width="2.2" opacity=".8"/>
      <circle cx="300" cy="274" r="23" fill="url(#${p}sun)"/>
      <circle cx="300" cy="274" r="44" fill="none" stroke="url(#${p}gold)" stroke-width="1.5" opacity=".6"/>
      <path d="M193 346c40-20 72-31 107-31s67 11 107 31" fill="none" stroke="url(#${p}aqualine)" stroke-width="2.2" opacity=".6"/>
    </g>`)}

  function community(){const p='c97';const people=[[300,112],[190,164],[410,164],[150,278],[450,278],[214,374],[386,374]];return base(p,23,`
    <g filter="url(#${p}glow)">
      <circle cx="300" cy="260" r="45" fill="url(#${p}sun)" opacity=".95"/>
      <circle cx="300" cy="260" r="120" fill="none" stroke="url(#${p}gold)" stroke-width="1.5" opacity=".55"/>
      <circle cx="300" cy="260" r="178" fill="none" stroke="url(#${p}aqualine)" stroke-width="1.4" opacity=".45"/>
      ${people.map(([x,y])=>`<g transform="translate(${x} ${y})"><circle cy="-12" r="9" fill="rgba(255,225,140,.08)" stroke="url(#${p}gold)" stroke-width="2"/><path d="M-15 33c1-27 6-38 15-38s14 11 15 38" fill="rgba(255,225,140,.025)" stroke="url(#${p}gold)" stroke-width="2.2" stroke-linecap="round"/></g>`).join('')}
      <g stroke="url(#${p}gold)" stroke-width="1.3" opacity=".5"><path d="M300 145v70M213 193l55 41M387 193l-55 41M177 278l76-12M423 278l-76-12M235 350l40-54M365 350l-40-54"/></g>
      <g fill="#ffe9a2"><circle cx="300" cy="145" r="3"/><circle cx="213" cy="193" r="3"/><circle cx="387" cy="193" r="3"/><circle cx="177" cy="278" r="3"/><circle cx="423" cy="278" r="3"/></g>
    </g>`)}

  function beauty(){const p='l97';return base(p,29,`
    <g filter="url(#${p}glow)" transform="translate(0 8)">
      <path d="M300 397c-16-71-12-130 0-205 12 75 16 134 0 205z" fill="rgba(255,220,117,.08)" stroke="url(#${p}gold)" stroke-width="2.5"/>
      <path d="M300 381c-57-34-91-81-102-145 47 21 83 50 102 97 19-47 55-76 102-97-11 64-45 111-102 145z" fill="rgba(255,220,117,.055)" stroke="url(#${p}gold)" stroke-width="3"/>
      <path d="M300 352c-83-13-131-48-156-105 60 0 113 13 156 58 43-45 96-58 156-58-25 57-73 92-156 105z" fill="rgba(255,220,117,.045)" stroke="url(#${p}gold)" stroke-width="2.7"/>
      <path d="M300 326c-69-44-93-95-82-153 43 22 69 52 82 100 13-48 39-78 82-100 11 58-13 109-82 153z" fill="rgba(255,220,117,.05)" stroke="url(#${p}gold)" stroke-width="2.8"/>
      <path d="M300 290c-33-52-34-99 0-141 34 42 33 89 0 141z" fill="rgba(255,220,117,.08)" stroke="url(#${p}gold)" stroke-width="3.2"/>
      <circle cx="300" cy="310" r="24" fill="url(#${p}sun)"/>
      <circle cx="300" cy="310" r="63" fill="none" stroke="url(#${p}aqualine)" stroke-width="1.5" opacity=".5"/>
      <circle cx="300" cy="310" r="150" fill="none" stroke="url(#${p}gold)" stroke-width="1.2" opacity=".45"/>
    </g>`)}

  const art={body,energy,work,relations,community,beauty};

  function addStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const style=document.createElement('style'); style.id=STYLE_ID;
    style.textContent=`
      #directions .direction-card.club999-direction-popup.v92-real-card{
        border:2px solid rgba(255,199,72,.98)!important;
        background:#001c25!important;
        box-shadow:
          0 0 0 1px rgba(255,238,177,.22),
          0 0 10px rgba(255,188,48,.42),
          0 0 28px rgba(211,139,20,.20),
          0 16px 34px rgba(0,8,15,.34),
          inset 0 0 0 1px rgba(255,237,175,.16)!important;
      }
      #directions .direction-card.club999-direction-popup.v92-real-card::before{
        inset:7px!important;
        border:1px solid rgba(255,226,132,.72)!important;
        box-shadow:0 0 8px rgba(255,191,48,.25), inset 0 0 10px rgba(255,216,103,.06)!important;
        border-radius:14px!important;
      }
      #directions .direction-card.club999-direction-popup.v92-real-card::after{
        background:linear-gradient(180deg,rgba(0,0,0,0) 55%,rgba(0,12,18,.08) 70%,rgba(0,9,14,.80) 100%)!important;
      }
      #directions .v92-card-picture{
        background:none!important;
        filter:none!important;
        transform:none!important;
        overflow:hidden!important;
      }
      #directions .v92-card-picture .v97-luxe-art{display:block;width:100%;height:100%;overflow:hidden}
      #directions .v92-card-title{
        color:#ffe4a0!important;
        text-shadow:0 2px 10px rgba(0,0,0,.95),0 0 11px rgba(255,192,58,.42)!important;
      }
      #directions .club999-direction-popup__plus{
        border-color:rgba(255,221,125,.98)!important;
        background:radial-gradient(circle at 35% 25%,rgba(255,239,184,.22),rgba(3,35,44,.82) 66%)!important;
        box-shadow:0 0 0 2px rgba(255,215,111,.10),0 0 14px rgba(255,190,48,.52),inset 0 1px 0 rgba(255,255,255,.20)!important;
      }
      #directions .direction-card.club999-direction-popup.v92-real-card:hover,
      #directions .direction-card.club999-direction-popup.v92-real-card:focus-visible{
        border-color:#ffd66f!important;
        box-shadow:0 0 0 1px rgba(255,244,202,.30),0 0 14px rgba(255,195,58,.55),0 0 34px rgba(213,142,24,.26),0 20px 38px rgba(0,8,15,.38)!important;
      }
      @media(max-width:700px){
        #directions .direction-card.club999-direction-popup.v92-real-card{border-width:1.5px!important}
        #directions .direction-card.club999-direction-popup.v92-real-card::before{inset:6px!important;border-radius:12px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function apply(){
    addStyle();
    const cards=[...document.querySelectorAll('#directions .direction-card.club999-direction-popup')];
    if(cards.length!==6) return false;
    let done=0;
    cards.forEach(card=>{
      const title=(card.querySelector('.v92-card-title')||card.querySelector('.club999-direction-popup__name')||card.querySelector('h3'))?.textContent?.trim();
      const theme=map[title]; if(!theme) return;
      card.classList.add('v92-real-card','v97-luxe-card');
      card.dataset.directionTheme=theme;
      let picture=card.querySelector('.v92-card-picture');
      if(!picture){picture=document.createElement('span');picture.className='v92-card-picture';card.prepend(picture);}
      picture.style.removeProperty('background-image');
      picture.style.removeProperty('background-position');
      picture.style.removeProperty('background-size');
      picture.innerHTML=art[theme]();
      done++;
    });
    return done===6;
  }

  let tries=0;
  const run=()=>{if(apply())return; if(++tries<60)setTimeout(run,100)};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();