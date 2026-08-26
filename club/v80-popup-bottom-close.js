(function(){
  var STYLE_ID='club-popup-bottom-close-v80';
  var WRAP_CLASS='popup-bottom-close-wrap-v80';
  var BUTTON_CLASS='popup-bottom-close-v80';

  function addStyles(){
    if(document.getElementById(STYLE_ID)) return;
    var style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .${WRAP_CLASS}{
        width:100%;
        display:flex;
        justify-content:center;
        padding:18px 0 calc(4px + env(safe-area-inset-bottom,0px));
        box-sizing:border-box;
      }
      .${BUTTON_CLASS}{
        appearance:none;
        -webkit-appearance:none;
        min-width:104px;
        height:36px;
        padding:0 18px;
        border:1px solid rgba(235,198,100,.72);
        border-radius:999px;
        background:linear-gradient(180deg,rgba(244,213,128,.16),rgba(6,48,57,.92));
        color:#f5dda0;
        font:700 12px/1 Arial,sans-serif;
        letter-spacing:.01em;
        box-shadow:0 0 14px rgba(224,181,75,.13),inset 0 1px 0 rgba(255,255,255,.10);
        cursor:pointer;
        touch-action:manipulation;
      }
      .${BUTTON_CLASS}:active{transform:scale(.97);}
      @media(max-width:640px){
        .${WRAP_CLASS}{padding-top:16px;}
        .${BUTTON_CLASS}{min-width:98px;height:34px;padding:0 16px;font-size:12px;}
      }
    `;
    document.head.appendChild(style);
  }

  function addButton(layerId, bodyId, closeSelector){
    var layer=document.getElementById(layerId);
    var body=document.getElementById(bodyId);
    if(!layer || !body) return;

    var content=body.closest('.inside-popup-sheet__content') || body.parentElement;
    if(!content || content.querySelector('.'+WRAP_CLASS)) return;

    var wrap=document.createElement('div');
    wrap.className=WRAP_CLASS;

    var button=document.createElement('button');
    button.type='button';
    button.className=BUTTON_CLASS;
    button.textContent='Закрыть';
    button.setAttribute('aria-label','Закрыть всплывающее окно');
    button.addEventListener('click',function(event){
      event.preventDefault();
      event.stopPropagation();
      var close=layer.querySelector(closeSelector);
      if(close) close.click();
    });

    wrap.appendChild(button);
    content.appendChild(wrap);
  }

  function ensureButtons(){
    addStyles();
    addButton('insidePopupLayer','insidePopupBody','[data-popup-close]');
    addButton('topicPopupLayer','topicPopupBody','[data-topic-popup-close]');
  }

  function init(){
    ensureButtons();
    var observer=new MutationObserver(function(){
      requestAnimationFrame(ensureButtons);
    });
    observer.observe(document.body,{childList:true,subtree:true});

    document.addEventListener('click',function(event){
      if(event.target.closest('[data-inside-popup],[data-topic-popup]')){
        requestAnimationFrame(ensureButtons);
      }
    },true);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init,{once:true});
  }else{
    init();
  }
})();
