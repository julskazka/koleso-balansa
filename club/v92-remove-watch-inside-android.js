(()=>{
  const KEEP_CLASS='club-mobile-scroll-cue-v90';
  const TARGET_WORDS=['смотреть','внутри'];
  const SCAN_SELECTOR='button,a,[role="button"],span,div,p';

  const normalize=value=>(value||'')
    .replace(/[«»"'`]/g,'')
    .replace(/\s+/g,' ')
    .trim()
    .toLowerCase();

  const isKept=element=>{
    if(!element || element.nodeType!==1) return false;
    return element.classList.contains(KEEP_CLASS) || Boolean(element.closest(`.${KEEP_CLASS}`));
  };

  const isTargetText=value=>{
    const text=normalize(value);
    return !text.includes('листайте дальше') && TARGET_WORDS.every(word=>text.includes(word));
  };

  function chooseRemovable(element){
    const interactive=element.closest('button,a,[role="button"]');
    if(interactive && !isKept(interactive)) return interactive;

    let current=element;
    for(let depth=0;current && current!==document.body && depth<5;depth+=1){
      const className=typeof current.className==='string' ? current.className.toLowerCase() : '';
      const position=getComputedStyle(current).position;
      if(
        position==='fixed' || position==='sticky' ||
        /(watch|inside|prompt|hint|floating|scroll|popup|badge|cue)/.test(className)
      ) return current;

      const parent=current.parentElement;
      if(!parent || !isTargetText(parent.textContent)) break;
      current=parent;
    }
    return element;
  }

  function hideTarget(element){
    if(!element || isKept(element) || !isTargetText(element.textContent)) return false;
    const removable=chooseRemovable(element);
    if(!removable || isKept(removable)) return false;
    removable.setAttribute('data-watch-inside-removed','true');
    removable.style.setProperty('display','none','important');
    removable.setAttribute('aria-hidden','true');
    removable.remove();
    return true;
  }

  function scanRoot(root){
    if(!root) return;

    if(root.nodeType===1){
      hideTarget(root);
      if(root.shadowRoot) scanRoot(root.shadowRoot);
    }

    if(root.querySelectorAll){
      root.querySelectorAll(SCAN_SELECTOR).forEach(element=>{
        hideTarget(element);
        if(element.shadowRoot) scanRoot(element.shadowRoot);
      });

      root.querySelectorAll('*').forEach(element=>{
        if(isKept(element)) return;
        const before=normalize(getComputedStyle(element,'::before').content);
        const after=normalize(getComputedStyle(element,'::after').content);
        if(isTargetText(before) || isTargetText(after)){
          const removable=chooseRemovable(element);
          if(removable && !isKept(removable)) removable.remove();
        }
      });
    }
  }

  function installObserver(root){
    if(!root || root.__watchInsideObserverInstalled) return;
    root.__watchInsideObserverInstalled=true;
    const observer=new MutationObserver(mutations=>{
      for(const mutation of mutations){
        if(mutation.type==='characterData'){
          hideTarget(mutation.target.parentElement);
          continue;
        }
        mutation.addedNodes.forEach(node=>scanRoot(node));
      }
      scanRoot(root);
    });
    observer.observe(root,{childList:true,subtree:true,characterData:true});
  }

  function apply(){
    scanRoot(document);
    installObserver(document.documentElement);
    document.querySelectorAll('*').forEach(element=>{
      if(element.shadowRoot) installObserver(element.shadowRoot);
    });
  }

  apply();
  let attempts=0;
  const timer=setInterval(()=>{
    attempts+=1;
    apply();
    if(attempts>=60) clearInterval(timer);
  },250);
})();
