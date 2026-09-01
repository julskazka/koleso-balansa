(()=>{
  const id='club999-resource-steps-v79';
  if(document.getElementById(id)) return;

  const style=document.createElement('style');
  style.id=id;
  style.textContent=`
    [data-resource-step-upgraded] [data-resource-step-badge]{
      position:relative!important;
      display:grid!important;
      place-items:center!important;
      width:35px!important;
      height:35px!important;
      min-width:35px!important;
      border-radius:50%!important;
      border:1px solid rgba(240,210,130,.78)!important;
      background:
        radial-gradient(circle at 31% 24%,rgba(255,247,220,.34),rgba(255,247,220,0) 36%),
        linear-gradient(145deg,rgba(23,93,101,.92),rgba(5,43,53,.98))!important;
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,.17),
        inset 0 0 10px rgba(212,175,55,.12),
        0 0 0 1px rgba(212,175,55,.10),
        0 0 12px rgba(212,175,55,.14)!important;
      color:#f3d57c!important;
      font-size:14px!important;
      font-weight:800!important;
      line-height:1!important;
      letter-spacing:0!important;
      text-indent:0!important;
      text-shadow:
        0 1px 0 rgba(255,250,228,.28),
        0 0 8px rgba(240,210,130,.26)!important;
      overflow:hidden!important;
    }

    [data-resource-step-upgraded] [data-resource-step-badge]::before{
      content:'';
      position:absolute;
      inset:3px;
      border-radius:50%;
      border:1px solid rgba(240,210,130,.28);
      pointer-events:none;
    }

    [data-resource-step-upgraded] [data-resource-step-badge]::after{
      content:'';
      position:absolute;
      top:4px;
      left:7px;
      right:7px;
      height:8px;
      border-radius:999px;
      background:linear-gradient(180deg,rgba(255,255,255,.25),rgba(255,255,255,0));
      pointer-events:none;
    }

    @media(max-width:700px){
      [data-resource-step-upgraded] [data-resource-step-badge]{
        width:34px!important;
        height:34px!important;
        min-width:34px!important;
        font-size:13px!important;
      }
    }

    @media(max-width:360px){
      [data-resource-step-upgraded] [data-resource-step-badge]{
        width:32px!important;
        height:32px!important;
        min-width:32px!important;
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
        const badges=[...root.querySelectorAll('span,div,strong,b,p')].filter(el=>/^[1-4]$/.test((el.textContent||'').trim()));
        if(badges.length>=4){
          root.setAttribute('data-resource-step-upgraded','');
          badges.forEach(el=>el.setAttribute('data-resource-step-badge',''));
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
