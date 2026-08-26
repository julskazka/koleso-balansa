(function(){
  var STYLE_ID='club-popup-bottom-close-v79';
  var BUTTON_CLASS='popup-bottom-close-v79';

  function addStyles(){
    if(document.getElementById(STYLE_ID)) return;
    var style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .popup-bottom-close-wrap-v79{
        width:100%;
        display:flex;
        justify-content:center;
        padding:18px 0 4px;
        box-sizing:border-box;
      }
      .${BUTTON_CLASS}{
        appearance:none;
        -webkit-appearance:none;
        min-width:108px;
        height:38px;
        padding:0 20px;
        border:1px solid rgba(235,198,100,.72);
        border-radius:999px;
        background:linear-gradient(180deg,rgba(244,213,128,.16),rgba(6,48,57,.88));
        color:#f5dda0;
        font:700 13px/1 Arial,sans-serif;
        letter-spacing:.01em;
        box-shadow:0 0 14px rgba(224,181,75,.13),inset 0 1px 0 rgba(255,255,255,.10);
        cursor:pointer;
        touch-action:manipulation;
      }
      .${BUTTON_CLASS}:active{
        transform:scale(.97);
      }
      @media(max-width:640px){
        .popup-bottom-close-wrap-v79{padding:16px 0 2px;}
        .${BUTTON_CLASS}{height:36px;min-width:102px;padding:0 18px;font-size:12px;}
      }
    `;
    document.head.appendChild(style);
  }

  function addButton(contentId,closeId){
    var content=document.getElementById(contentId);
    if(!content || content.querySelector('.'+BUTTON_CLASS)) return;

    var wrap=document.createElement('div');
    wrap.className='popup-bottom-close-wrap-v79';

    var button=document.createElement('button');
    button.type='button';
    button.className=BUTTON_CLASS;
    button.textContent='Закрыть';
    button.setAttribute('aria-label','Закрыть всплывающее окно');
    button.addEventListener('click',function(){
      var close=document.getElementById(closeId);
      if(close) close.click();
    });

    wrap.appendChild(button);
    content.appendChild(wrap);
  }

  function ensureButtons(){
    addStyles();
    addButton('insidePopupContent','insidePopupClose');
    addButton('topicPopupContent','topicPopupClose');
  }

  function init(){
    ensureButtons();
    var observer=new MutationObserver(function(){
      requestAnimationFrame(ensureButtons);
    });
    observer.observe(document.body,{childList:true,subtree:true});
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init,{once:true});
  }else{
    init();
  }
})();
