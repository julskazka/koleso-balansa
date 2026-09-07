(()=>{
  const PARTS=Array.from({length:10},(_,i)=>`./assets/v100/p${String(i+1).padStart(2,'0')}.txt`);
  const STYLE_ID='club999-v213-direction-art-style';
  let objectUrl=null;

  function addStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      #directions .v92-card-picture{
        display:block!important;
        visibility:visible!important;
        opacity:1!important;
        background-repeat:no-repeat!important;
        background-size:200% 300%!important;
        background-color:#011922!important;
        filter:none!important;
      }
      #directions .v92-real-card[data-direction-theme="body"] .v92-card-picture{background-position:0 0!important}
      #directions .v92-real-card[data-direction-theme="energy"] .v92-card-picture{background-position:100% 0!important}
      #directions .v92-real-card[data-direction-theme="work"] .v92-card-picture{background-position:0 50%!important}
      #directions .v92-real-card[data-direction-theme="relations"] .v92-card-picture{background-position:100% 50%!important}
      #directions .v92-real-card[data-direction-theme="community"] .v92-card-picture{background-position:0 100%!important}
      #directions .v92-real-card[data-direction-theme="beauty"] .v92-card-picture{background-position:100% 100%!important}
    `;
    document.head.appendChild(s);
  }

  async function text(path){
    let lastError=null;
    for(let attempt=0;attempt<3;attempt++){
      try{
        const r=await fetch(`${path}?v=213-${attempt}`,{cache:'no-store'});
        if(!r.ok) throw new Error(`${r.status} ${path}`);
        const value=(await r.text()).replace(/\s+/g,'');
        if(!value) throw new Error(`empty ${path}`);
        return value;
      }catch(e){
        lastError=e;
        await new Promise(resolve=>setTimeout(resolve,180*(attempt+1)));
      }
    }
    throw lastError||new Error(`failed ${path}`);
  }

  async function buildBlobUrl(){
    const chunks=await Promise.all(PARTS.map(text));
    const base64=chunks.join('');
    const raw=atob(base64);
    const bytes=new Uint8Array(raw.length);
    for(let i=0;i<raw.length;i++) bytes[i]=raw.charCodeAt(i);
    const blob=new Blob([bytes],{type:'image/webp'});
    const url=URL.createObjectURL(blob);

    await new Promise((resolve,reject)=>{
      const img=new Image();
      img.onload=()=>resolve();
      img.onerror=()=>reject(new Error('direction sprite decode failed'));
      img.src=url;
    });
    return url;
  }

  function paint(){
    if(!objectUrl) return false;
    addStyle();
    const pictures=[...document.querySelectorAll('#directions .v92-real-card .v92-card-picture')];
    if(pictures.length!==6) return false;
    pictures.forEach(pic=>{
      pic.style.setProperty('background-image',`url("${objectUrl}")`,'important');
      pic.style.setProperty('display','block','important');
      pic.style.setProperty('visibility','visible','important');
      pic.style.setProperty('opacity','1','important');
      pic.dataset.v213Art='blob';
    });
    return true;
  }

  async function init(){
    try{
      objectUrl=await buildBlobUrl();
      window.__club999DirectionSpriteV213=objectUrl;
      let tries=0;
      const run=()=>{
        tries++;
        const ok=paint();
        if(ok&&tries>=6) clearInterval(timer);
        if(tries>=40) clearInterval(timer);
      };
      const timer=setInterval(run,150);
      run();
      [500,1000,1800,3000,5000].forEach(ms=>setTimeout(paint,ms));
    }catch(error){
      console.error('Direction artwork v213 failed',error);
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
