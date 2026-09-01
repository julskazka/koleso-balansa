(()=>{
  const id='club999-resource-steps-v80';
  if(document.getElementById(id)) return;

  const style=document.createElement('style');
  style.id=id;
  style.textContent=`
    [data-resource-step-upgraded] [data-resource-step-badge]{
      position:relative!important;
      display:grid!important;
      place-items:center!important;
      box-sizing:border-box!important;
      width:34px!important;
      height:34px!important;
      min-width:34px!important;
      border-radius:50%!important;
      border:1px solid rgba(244,215,128,.78)!important;
      background:
        radial-gradient(circle at 31% 24%,rgba(255,247,220,.38),rgba(255,247,220,0) 35%),
        radial-gradient(circle at 50% 55%,rgba(212,175,55,.16),rgba(212,175,55,0) 66%),
        linear-gradient(145deg,rgba(19,86,96,.94),rgba(5,42,52,.99))!important;
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,.18),
        inset 0 0 9px rgba(212,175,55,.16),
        0 0 0 1px rgba(212,175,55,.11),
        0 0 10px rgba(212,175,55,.13)!important;
      color:#f6d978!important;
      font-family:Arial,sans-serif!important;
      font-size:13px!important;
      font-weight:800!important;
      line-height:1!important;
      letter-spacing:0!important;
      text-indent:0!important;
      text-shadow:
        0 1px 0 rgba(255,250,228,.25),
        0 0 7px rgba(240,210,130,.24)!important;
      overflow:hidden!important;
    }

    [data-resource-step-upgraded] [data-resource-step-badge]::before{
      content:'';
      position:absolute;
      inset:3px;
      border-radius:50%;
      border:1px solid rgba(240,210,130,.25);
      pointer-events:none;
    }

    [data-resource-step-upgraded] [data-resource-step-badge]::after{
      content:'';
      position:absolute;
      top:4px;
      left:7px;
      right:7px;
      height:7px;
      border-radius:999px;
      background:linear-gradient(180deg,rgba(255,255,255,.24),rgba(255,255,255,0));
      pointer-events:none;
    }

    @media(max-width:700px){
      [data-resource-step-upgraded] [data-resource-step-badge]{
        width:33px!important;
        height:33px!important;
        min-width:33px!important;
        font-size:13px!important;
      }
    }

    @media(max-width:360px){
      [data-resource-step-upgraded] [data-resource-step-badge]{
        width:31px!important;
        height:31px!important;
        min-width:31px!important;
        font-size:12px!important;
      }
    }
  `;
  document.head.appendChild(style);

  function apply(){
    const headings=[...document.querySelectorAll('h1,h2,h3,h4,p,strong')].filter(el=>{
      const text=(el.textContent||'').replace(/\s+/g,' ').trim().toLowerCase();
      return text.includes('центре ресурса')&&text.includes('устроено проще');
    });

    headings.forEach(heading=>{
      let root=heading.closest('section,article,div');
      while(root&&root!==document.body){
        const candidates=[...root.querySelectorAll('span,div,strong,b,p')].filter(el=>{
          const t=(el.textContent||'').trim();
          return /^[1-4]$/.test(t)||el.hasAttribute('data-resource-step-badge')||el.querySelector('svg');
        });

        if(candidates.length>=4){
          root.setAttribute('data-resource-step-upgraded','');
          candidates.slice(0,4).forEach((el,index)=>{
            el.setAttribute('data-resource-step-badge','');
            el.removeAttribute('aria-hidden');
            el.textContent=String(index+1);
          });
          break;
        }
        root=root.parentElement;
      }
    });
  }

  apply();
  window.addEventListener('load',apply,{once:true});
  const observer=new MutationObserver(apply);
  observer.observe(document.documentElement,{childList:true,subtree:true});
  setTimeout(()=>observer.disconnect(),6000);
})();
