(()=>{
  const STYLE_ID='club-mobile-scroll-cue-v90';
  const CUE_CLASS='club-mobile-scroll-cue-v90';

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      @keyframes clubScrollCueV90{
        0%,100%{transform:translateY(0)}
        50%{transform:translateY(4px)}
      }

      .${CUE_CLASS}{display:none}

      @media(max-width:700px){
        .hero.hero-premium{
          padding-bottom:2px!important;
        }

        .hero-premium-shell{
          padding:11px 10px 10px!important;
          border-radius:24px!important;
        }

        .hero-premium-shell::before{
          inset:7px!important;
          border-radius:18px!important;
        }

        .hero-premium-top{
          gap:5px!important;
          flex-wrap:nowrap!important;
          margin-bottom:8px!important;
        }

        .hero-premium-chip{
          min-height:26px!important;
          padding:5px 7px!important;
          font-size:9px!important;
          letter-spacing:.035em!important;
        }

        .hero-premium-copy h1{
          font-size:clamp(35px,9.2vw,44px)!important;
          line-height:.94!important;
        }

        .hero-premium-copy .hero-sub{
          margin-top:10px!important;
          font-size:16px!important;
          line-height:1.22!important;
        }

        .hero-premium-copy .hero-copy{
          margin-top:8px!important;
          font-size:14px!important;
          line-height:1.40!important;
        }

        .hero-premium-features{
          gap:6px!important;
          margin-top:10px!important;
        }

        .hero-premium-feature{
          grid-template-columns:35px 1fr!important;
          gap:8px!important;
          padding:7px 9px!important;
          border-radius:15px!important;
        }

        .hero-premium-icon{
          width:33px!important;
          height:33px!important;
        }

        .hero-premium-icon svg{
          width:19px!important;
          height:19px!important;
        }

        .hero-premium-feature b{
          font-size:12.5px!important;
          line-height:1.25!important;
        }

        .hero-premium-price{
          margin-top:8px!important;
          padding:7px!important;
          border-radius:17px!important;
        }

        .hero-premium-cta{
          min-height:50px!important;
          border-radius:15px!important;
          font-size:14px!important;
        }

        .hero-premium-price .micro{
          margin-top:6px!important;
          font-size:9.5px!important;
          line-height:1.28!important;
        }

        .${CUE_CLASS}{
          position:relative;
          z-index:6;
          display:flex;
          width:max-content;
          max-width:calc(100% - 20px);
          min-height:29px;
          margin:7px auto 0;
          padding:4px 11px 4px 13px;
          align-items:center;
          justify-content:center;
          gap:7px;
          border:0;
          border-radius:999px;
          color:#f3d98f;
          background:transparent;
          font:750 11px/1.2 Arial,sans-serif;
          letter-spacing:.02em;
          text-align:center;
          cursor:pointer;
          -webkit-tap-highlight-color:transparent;
        }

        .${CUE_CLASS}::after{
          content:'↓';
          display:inline-grid;
          width:20px;
          height:20px;
          place-items:center;
          border:1px solid rgba(243,217,143,.44);
          border-radius:50%;
          background:rgba(243,217,143,.07);
          box-shadow:0 0 15px rgba(97,205,223,.10);
          font-size:13px;
          line-height:1;
          animation:clubScrollCueV90 1.5s ease-in-out infinite;
        }

        .hero.hero-premium + .section{
          padding-top:20px!important;
        }
      }

      @media(max-width:390px){
        .hero-premium-copy h1{
          font-size:31px!important;
        }

        .hero-premium-copy .hero-sub{
          font-size:15px!important;
        }

        .hero-premium-copy .hero-copy{
          font-size:13.5px!important;
        }

        .hero-premium-feature b{
          font-size:11.7px!important;
        }

        .hero-premium-cta{
          font-size:13.5px!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function install(){
    const hero=document.querySelector('.hero.hero-premium');
    const shell=hero?.querySelector('.hero-premium-shell');
    const price=shell?.querySelector('.hero-premium-price');
    const nextSection=hero?.nextElementSibling;
    if(!hero || !shell || !price || !nextSection) return false;

    addStyle();

    let cue=shell.querySelector(`.${CUE_CLASS}`);
    if(!cue){
      cue=document.createElement('button');
      cue.type='button';
      cue.className=CUE_CLASS;
      cue.textContent='Листайте дальше — внутри ещё много';
      cue.setAttribute('aria-label','Перейти к следующему блоку страницы');
      price.insertAdjacentElement('afterend',cue);
    }

    cue.onclick=()=>{
      nextSection.scrollIntoView({behavior:'smooth',block:'start'});
    };

    return true;
  }

  if(!install()){
    let attempts=0;
    const timer=setInterval(()=>{
      attempts+=1;
      if(install() || attempts>=40) clearInterval(timer);
    },150);
  }
})();
