(()=>{
  const KEEP_CLASS='club-mobile-scroll-cue-v90';
  const TARGETS=new Set([
    'смотреть, что внутри',
    'смотреть что внутри'
  ]);

  const normalize=value=>(value||'')
    .replace(/\s+/g,' ')
    .trim()
    .toLowerCase();

  function removeWatchInside(root=document){
    const elements=root.querySelectorAll
      ? root.querySelectorAll('button,a,[role="button"],span,div,p')
      : [];

    for(const element of elements){
      if(element.classList?.contains(KEEP_CLASS) || element.closest?.(`.${KEEP_CLASS}`)) continue;

      const text=normalize(element.textContent);
      if(!TARGETS.has(text)) continue;

      const removable=element.closest?.('button,a,[role="button"]') || element;
      if(removable.classList?.contains(KEEP_CLASS) || removable.closest?.(`.${KEEP_CLASS}`)) continue;
      removable.remove();
    }
  }

  removeWatchInside();

  const observer=new MutationObserver(mutations=>{
    for(const mutation of mutations){
      for(const node of mutation.addedNodes){
        if(node.nodeType===Node.ELEMENT_NODE) removeWatchInside(node);
      }
    }
  });

  observer.observe(document.documentElement,{childList:true,subtree:true});
})();
