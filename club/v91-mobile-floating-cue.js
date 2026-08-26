(()=>{
  const STYLE_ID='club-mobile-floating-cue-v91';
  const BUTTON_ID='clubMobileFloatingCueV91';

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      @keyframes clubCueArrowV91{
        0%,100%{transform:translateY(0)}
        50%{transform:translateY(4px)}
      }

      #${BUTTON_ID}{display:none}

      @media(max-width:700px){
        #${BUTTON_ID}{
          position:fixed;
          left:50%;
          bottom:max(14px,calc(env(safe-area-inset-bottom) + 10px));
          z-index:75;
          display:flex;
          width:max-content;
          max-width:calc(100vw - 28px);
          min-height:44px;
          padding:8px 12px 8px 15px;
          align-items:center;
          justify-content:center;
          gap:10px;
          border:1px solid rgba(243,217,143,.48);
          border-radius:999px;
          color:#f7e4a8;
          background:linear-gradient(180deg,rgba(5,49,58,.96),rgba(2,30,38,.98));
          box-shadow:0 12px 30px rgba(0,0,0,.36),0 0 22px rgba(63,188,208,.16),inset 0 1px 0 rgba(255,255,255,.06);
          backdrop-filter:blur(12px);
          -webkit-backdrop-filter:blur(12px);
          font:800 12px/1.15 Arial,sans-serif;
          letter-spacing:.015em;
          text-align:center;
          cursor:pointer;
          opacity:1;
          transform:translateX(-50%);
          transition:opacity .22s ease,transform .22s ease,visibility .22s ease;
          -webkit-tap-highlight-color:transparent;
        }

        #${BUTTON_ID}::after{
          content:'↓';
          display:grid;
          width:25px;
          height:25px;
          flex:0 0 25px;
          place-items:center;
          border:1px solid rgba(243,217,143,.52);
          border-radius:50%;
          color:#fff0b9;
          background:rgba(243,217,143,.08);
          font-size:15px;
          line-height:1;
          animation:clubCueArrowV91 1.45s ease-in-out infinite;
        }

        #${BUTTON_ID}.is-hidden{
          visibility:hidden;
          opacity:0;
          transform:translate(-50%,12px);
          pointer-events:none;
        }

        body:has(.inside-popup-layer.is-open) #${BUTTON_ID},
        body:has(.topic-popup-layer.is-open) #${BUTTON_ID}{
          display:none!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function findTarget(){
    return document.querySelector('#insideCenterSection') ||
      Array.from(document.querySelectorAll('section')).find(section=>
        /Что внутри Центра Ресурса/i.test(section.textContent||'')
      ) ||
      document.querySelector('.hero.hero-premium')?.nextElementSibling;
  }

  function install(){
    if(window.innerWidth>700) return true;
    const target=findTarget();
    if(!target) return false;

    addStyle();

    let button=document.getElementById(BUTTON_ID);
    if(!button){
      button=document.createElement('button');
      button.id=BUTTON_ID;
      button.type='button';
      button.textContent='Смотреть, что внутри';
      button.setAttribute('aria-label','Прокрутить к следующему блоку');
      document.body.appendChild(button);
    }

    button.onclick=()=>{
      target.scrollIntoView({behavior:'smooth',block:'start'});
    };

    const update=()=>{
      const rect=target.getBoundingClientRect();
      const shouldHide=window.scrollY>120 || rect.top<window.innerHeight*.72;
      button.classList.toggle('is-hidden',shouldHide);
    };

    update();
    window.addEventListener('scroll',update,{passive:true});
    window.addEventListener('resize',update,{passive:true});
    return true;
  }

  if(!install()){
    let attempts=0;
    const timer=setInterval(()=>{
      attempts+=1;
      if(install() || attempts>=100) clearInterval(timer);
    },150);
  }
})();
