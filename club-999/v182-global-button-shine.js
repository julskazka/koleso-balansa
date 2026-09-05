(()=>{
  const STYLE_ID='club999-global-button-shine-v182-style';
  const CTA='.club999-v168-cta';

  function injectStyle(){
    const old=document.getElementById(STYLE_ID);
    if(old) old.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      ${CTA}{
        position:relative!important;
        isolation:isolate!important;
        overflow:hidden!important;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.34),0 8px 22px rgba(221,181,72,.20)!important;
      }
      ${CTA}>.club999-v168-shine{
        display:block!important;
        position:absolute!important;
        z-index:22!important;
        pointer-events:none!important;
        top:-68%!important;
        left:-52%!important;
        width:40%!important;
        height:238%!important;
        margin:0!important;
        padding:0!important;
        border:0!important;
        border-radius:0!important;
        background:linear-gradient(90deg,
          transparent 0%,
          rgba(255,255,255,.08) 12%,
          rgba(255,250,226,.74) 31%,
          rgba(255,255,255,.98) 47%,
          rgba(255,255,255,1) 50%,
          rgba(255,250,226,.86) 56%,
          rgba(255,255,255,.12) 82%,
          transparent 100%)!important;
        box-shadow:0 0 18px rgba(255,255,245,.92),0 0 30px rgba(245,211,123,.46)!important;
        filter:blur(.15px)!important;
        transform:rotate(18deg)!important;
        opacity:.78!important;
        animation:club999GlobalButtonShineV182 2.05s linear infinite!important;
        will-change:left,opacity!important;
      }
      ${CTA}>.club999-v168-copy{
        position:absolute!important;
        z-index:30!important;
      }
      @keyframes club999GlobalButtonShineV182{
        0%{left:-52%;opacity:.38}
        10%{opacity:.94}
        82%{opacity:.94}
        100%{left:126%;opacity:.38}
      }
      @media(max-width:700px){
        ${CTA}>.club999-v168-shine{
          width:44%!important;
          animation-duration:2.2s!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function apply(){
    injectStyle();
    document.querySelectorAll(CTA).forEach(btn=>{
      btn.style.setProperty('position','relative','important');
      btn.style.setProperty('overflow','hidden','important');
      const shine=btn.querySelector(':scope > .club999-v168-shine');
      if(shine){
        shine.style.setProperty('display','block','important');
        shine.style.setProperty('animation','club999GlobalButtonShineV182 2.05s linear infinite','important');
      }
    });
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    apply();
    if(tries>90) clearInterval(timer);
  },100);
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [250,700,1400,2400,4200,6500].forEach(ms=>setTimeout(apply,ms));
})();
