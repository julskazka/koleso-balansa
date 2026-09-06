(()=>{
  const STYLE_ID='club999-v194-final-style';
  const ICON_CLASS='club999-icon-v194-fixed';
  const SHINE_CLASS='club999-shine-v194-live';
  const GOLD='#f2cf69';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function setImp(el,prop,value){
    if(el) el.style.setProperty(prop,value,'important');
  }

  function injectStyle(){
    [
      'club999-icons-shine-v193-style',
      'club999-button-shine-v192-style',
      'club999-button-shine-v189-style',
      'club999-button-shine-v188-style',
      'club999-button-shine-v187-style',
      'club999-global-button-shine-v182-style'
    ].forEach(id=>document.getElementById(id)?.remove());

    if(document.getElementById(STYLE_ID)) return;
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      .${ICON_CLASS}{
        border-radius:8px!important;
        border:1px solid rgba(242,207,105,.82)!important;
        background:radial-gradient(circle at 34% 24%,rgba(255,238,164,.24) 0%,rgba(255,238,164,.07) 31%,transparent 49%),linear-gradient(145deg,rgba(9,87,99,.95),rgba(3,34,44,.99))!important;
        box-shadow:inset 0 0 0 1px rgba(255,255,255,.055),inset 0 0 9px rgba(80,205,196,.08),0 0 7px rgba(242,207,105,.28),0 0 13px rgba(65,188,184,.11)!important;
      }
      .${ICON_CLASS} svg{fill:none!important;stroke:${GOLD}!important;filter:drop-shadow(0 0 2.5px rgba(242,207,105,.40))!important}
      .${ICON_CLASS} svg .dot{fill:${GOLD}!important;stroke:${GOLD}!important}
      .${SHINE_CLASS}::before,.${SHINE_CLASS}::after{content:none!important;display:none!important}
    `;
    document.head.appendChild(s);
  }

  function tuneIcon(icon){
    if(!icon) return;
    icon.classList.add(ICON_CLASS);
    setImp(icon,'width','28px');
    setImp(icon,'height','28px');
    setImp(icon,'min-width','28px');
    setImp(icon,'min-height','28px');
    setImp(icon,'display','grid');
    setImp(icon,'place-items','center');
    setImp(icon,'box-sizing','border-box');
    setImp(icon,'border-radius','8px');
    setImp(icon,'border','1px solid rgba(242,207,105,.82)');
    setImp(icon,'background','radial-gradient(circle at 34% 24%,rgba(255,238,164,.24) 0%,rgba(255,238,164,.07) 31%,transparent 49%),linear-gradient(145deg,rgba(9,87,99,.95),rgba(3,34,44,.99))');
    setImp(icon,'box-shadow','inset 0 0 0 1px rgba(255,255,255,.055), inset 0 0 9px rgba(80,205,196,.08), 0 0 7px rgba(242,207,105,.28), 0 0 13px rgba(65,188,184,.11)');
    setImp(icon,'color',GOLD);
    setImp(icon,'-webkit-text-fill-color',GOLD);

    const svg=icon.querySelector('svg');
    if(svg){
      setImp(svg,'width','18px');
      setImp(svg,'height','18px');
      setImp(svg,'display','block');
      setImp(svg,'fill','none');
      setImp(svg,'stroke',GOLD);
      setImp(svg,'stroke-width','1.6');
      setImp(svg,'stroke-linecap','round');
      setImp(svg,'stroke-linejoin','round');
      setImp(svg,'filter','drop-shadow(0 0 2.5px rgba(242,207,105,.40))');
      svg.querySelectorAll('path,rect,circle,ellipse,line,polyline,polygon').forEach(shape=>{
        setImp(shape,'stroke',GOLD);
        if(shape.classList.contains('dot')) setImp(shape,'fill',GOLD);
      });
    }
  }

  function collectIcons(){
    const selectors=[
      '.club999-subscription-icon-v183',
      '.club999-unified-icon-v190',
      '.club999-whofor-icon-v136',
      '.club999-resource-icon-v124'
    ];
    const direct=selectors.flatMap(sel=>[...document.querySelectorAll(sel)]);

    const rows=[...document.querySelectorAll('.club999-subscription-card-v183,.club999-unified-row-v190,.club999-whofor-row-v136,.club999-resource-row-v124')];
    rows.forEach(row=>{
      [...row.children].forEach(child=>{
        if(!child.querySelector?.('svg')) return;
        const r=child.getBoundingClientRect();
        if(r.width>0&&r.width<=46&&r.height>0&&r.height<=46) direct.push(child);
      });
    });
    return [...new Set(direct)];
  }

  function visibleButton(el){
    if(!el) return false;
    const r=el.getBoundingClientRect();
    const cs=getComputedStyle(el);
    if(r.width<120||r.height<30||cs.display==='none'||cs.visibility==='hidden'||Number(cs.opacity)===0) return false;
    const t=norm(el.textContent);
    return !!t && t!=='×' && t!=='✕' && t!=='закрыть' && t!=='close';
  }

  function collectButtons(){
    const selectors=[
      '.hero41__button',
      '.club999-v168-cta',
      '[data-purchase]',
      '.button--primary',
      '.section-action .button',
      '.club999-question-button-v152',
      '.button--pay-v109',
      '.club999-access-polish-v178',
      '.club999-access-final-v181'
    ];
    const direct=selectors.flatMap(sel=>[...document.querySelectorAll(sel)]);
    const byText=[...document.querySelectorAll('button,a,[role="button"]')].filter(el=>{
      const t=norm(el.textContent);
      return t.includes('вступить')||t.includes('найти свою точку опоры')||t.includes('посмотреть, что есть внутри')||t.includes('задать вопрос');
    });
    return [...new Set([...direct,...byText])].filter(visibleButton);
  }

  const shineNodes=new Set();
  let phaseCounter=0;

  function tuneShine(shine){
    shine.classList.add(SHINE_CLASS);
    setImp(shine,'display','block');
    setImp(shine,'position','absolute');
    setImp(shine,'z-index','24');
    setImp(shine,'top','-92%');
    setImp(shine,'left','-52%');
    setImp(shine,'right','auto');
    setImp(shine,'bottom','auto');
    setImp(shine,'width','30%');
    setImp(shine,'height','286%');
    setImp(shine,'min-width','0');
    setImp(shine,'min-height','0');
    setImp(shine,'max-width','none');
    setImp(shine,'max-height','none');
    setImp(shine,'margin','0');
    setImp(shine,'padding','0');
    setImp(shine,'border','0');
    setImp(shine,'border-radius','46%');
    setImp(shine,'background','linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.10) 13%,rgba(255,244,188,.66) 30%,rgba(255,255,255,1) 45%,rgba(255,255,255,1) 50%,rgba(255,255,255,1) 55%,rgba(255,244,188,.68) 70%,rgba(255,255,255,.10) 87%,rgba(255,255,255,0) 100%)');
    setImp(shine,'box-shadow','0 0 18px rgba(255,255,250,.98), 0 0 32px rgba(245,208,105,.58)');
    setImp(shine,'filter','blur(.16px)');
    setImp(shine,'opacity','1');
    setImp(shine,'transform','rotate(18deg)');
    setImp(shine,'translate','none');
    setImp(shine,'animation','none');
    setImp(shine,'overflow','visible');
    setImp(shine,'pointer-events','none');
    setImp(shine,'will-change','left,opacity');
    if(!shine.dataset.club999V194Phase){
      shine.dataset.club999V194Phase=String((phaseCounter++%7)*310);
    }
    shineNodes.add(shine);
  }

  function ensureButton(btn){
    setImp(btn,'position','relative');
    setImp(btn,'overflow','hidden');
    setImp(btn,'isolation','isolate');
    const copy=btn.querySelector(':scope > .club999-v168-copy');
    if(copy) setImp(copy,'z-index','30');

    let shine=btn.querySelector(':scope > .club999-v168-shine');
    if(!shine){
      shine=document.createElement('span');
      shine.className='club999-v168-shine';
      shine.setAttribute('aria-hidden','true');
      btn.prepend(shine);
    }
    tuneShine(shine);
  }

  function apply(){
    injectStyle();
    collectIcons().forEach(tuneIcon);
    collectButtons().forEach(ensureButton);
  }

  function animate(now){
    const duration=2400;
    for(const shine of [...shineNodes]){
      if(!shine.isConnected){shineNodes.delete(shine);continue;}
      const phase=Number(shine.dataset.club999V194Phase||0);
      const p=((now+phase)%duration)/duration;
      const left=-52 + p*184;
      const edge=Math.min(1,p/.07,(1-p)/.07);
      const opacity=.72 + Math.max(0,edge)*.28;
      setImp(shine,'left',left.toFixed(2)+'%');
      setImp(shine,'opacity',opacity.toFixed(3));
    }
    requestAnimationFrame(animate);
  }

  let queued=false;
  const observer=new MutationObserver(()=>{
    if(queued) return;
    queued=true;
    requestAnimationFrame(()=>{queued=false;apply()});
  });
  observer.observe(document.documentElement,{subtree:true,childList:true});

  apply();
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [250,650,1200,2200,3800,6000,9000].forEach(ms=>setTimeout(apply,ms));
  requestAnimationFrame(animate);
})();
