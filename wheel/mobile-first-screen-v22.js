(()=>{
  const STYLE_ID='wheel-mobile-first-screen-v22';
  const root=document.documentElement;

  function updateViewportHeight(){
    const height=Math.round(
      window.visualViewport?.height ||
      window.innerHeight ||
      document.documentElement.clientHeight ||
      720
    );
    root.style.setProperty('--wheel-mobile-vh',`${height}px`);
  }

  function injectStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      @media (max-width:560px){
        html.wheel-mobile-fit,
        html.wheel-mobile-fit body{
          min-height:100%!important;
          -webkit-text-size-adjust:100%!important;
          text-size-adjust:100%!important;
        }

        html.wheel-mobile-fit .app{
          width:100%!important;
          min-height:var(--wheel-mobile-vh,100dvh)!important;
          padding:
            max(8px,env(safe-area-inset-top))
            10px
            max(10px,env(safe-area-inset-bottom))!important;
          justify-content:flex-start!important;
        }

        html.wheel-mobile-fit .intro{
          width:100%!important;
          padding:0 2px!important;
        }

        html.wheel-mobile-fit .brand-row{
          min-height:22px!important;
          gap:7px!important;
          font-size:10.5px!important;
          line-height:1.1!important;
        }

        html.wheel-mobile-fit .brand-icon{
          width:22px!important;
          height:22px!important;
          flex-basis:22px!important;
          font-size:10px!important;
        }

        html.wheel-mobile-fit .hero-copy{
          margin-top:7px!important;
          padding:0!important;
        }

        html.wheel-mobile-fit .eyebrow{
          font-size:10.5px!important;
          line-height:1.15!important;
          letter-spacing:.065em!important;
        }

        html.wheel-mobile-fit h1{
          max-width:370px!important;
          margin-top:6px!important;
          font-size:clamp(27px,7.7vw,34px)!important;
          line-height:1.01!important;
          letter-spacing:-.025em!important;
        }

        html.wheel-mobile-fit .lead{
          max-width:370px!important;
          margin-top:8px!important;
          font-size:clamp(13.5px,3.75vw,15.5px)!important;
          line-height:1.36!important;
        }

        html.wheel-mobile-fit .wheel-zone{
          width:100%!important;
          margin-top:0!important;
        }

        html.wheel-mobile-fit .wheel-stage{
          width:min(
            calc(100vw - 20px),
            clamp(210px,calc(var(--wheel-mobile-vh,100dvh) - 310px),360px)
          )!important;
          max-width:none!important;
        }

        html.wheel-mobile-fit .interactive-wheel{
          width:89%!important;
          height:89%!important;
        }

        html.wheel-mobile-fit .cosmic-background{
          width:146%!important;
          height:146%!important;
          top:50.5%!important;
        }

        html.wheel-mobile-fit .result{
          min-height:19px!important;
          margin-top:-2px!important;
          font-size:12px!important;
          line-height:1.2!important;
        }

        html.wheel-mobile-fit .spin-button{
          width:min(100%,360px)!important;
          min-height:50px!important;
          margin-top:2px!important;
          padding:12px 18px!important;
          border-radius:16px!important;
          font-size:17px!important;
          line-height:1.1!important;
        }

        html.wheel-mobile-fit .caption{
          margin-top:6px!important;
          font-size:10.5px!important;
          line-height:1.25!important;
        }
      }

      @media (max-width:560px) and (max-height:620px){
        html.wheel-mobile-fit .app{
          padding-top:max(5px,env(safe-area-inset-top))!important;
        }

        html.wheel-mobile-fit .brand-row{
          min-height:19px!important;
          font-size:9.5px!important;
        }

        html.wheel-mobile-fit .brand-icon{
          width:19px!important;
          height:19px!important;
          flex-basis:19px!important;
        }

        html.wheel-mobile-fit .hero-copy{
          margin-top:4px!important;
        }

        html.wheel-mobile-fit .eyebrow{
          font-size:9.5px!important;
        }

        html.wheel-mobile-fit h1{
          margin-top:4px!important;
          font-size:clamp(25px,7.3vw,30px)!important;
        }

        html.wheel-mobile-fit .lead{
          margin-top:5px!important;
          font-size:13px!important;
          line-height:1.29!important;
        }

        html.wheel-mobile-fit .wheel-stage{
          width:min(
            calc(100vw - 18px),
            clamp(196px,calc(var(--wheel-mobile-vh,100dvh) - 286px),320px)
          )!important;
        }

        html.wheel-mobile-fit .result{
          min-height:16px!important;
        }

        html.wheel-mobile-fit .spin-button{
          min-height:47px!important;
          padding:10px 16px!important;
          font-size:16px!important;
        }

        html.wheel-mobile-fit .caption{
          display:none!important;
        }
      }
    `;
    document.head.appendChild(style);
    root.classList.add('wheel-mobile-fit');
  }

  function activate(){
    updateViewportHeight();
    if(!document.querySelector('.wheel-stage') || !document.querySelector('.spin-button')) return false;
    injectStyle();
    return true;
  }

  updateViewportHeight();
  window.addEventListener('resize',updateViewportHeight,{passive:true});
  window.visualViewport?.addEventListener('resize',updateViewportHeight,{passive:true});

  if(!activate()){
    const observer=new MutationObserver(()=>{
      if(activate()) observer.disconnect();
    });
    observer.observe(document.documentElement,{childList:true,subtree:true});
    setTimeout(()=>observer.disconnect(),15000);
  }
})();