(()=>{
  const POPUP_ID='club999DirectionsPopup';
  const MEDIA_CLASS='club999-v205-popup-picture';

  function popup(){ return document.getElementById(POPUP_ID); }

  function sourceFromCard(card){
    const picture=card?.querySelector('.v92-card-picture');
    if(!picture) return null;
    const cs=getComputedStyle(picture);
    const image=cs.backgroundImage;
    if(!image || image==='none') return null;
    return {
      image,
      position:cs.backgroundPosition||'50% 50%',
      size:cs.backgroundSize||'cover',
      repeat:cs.backgroundRepeat||'no-repeat'
    };
  }

  function prepare(card){
    const layer=popup();
    if(!layer) return;
    const content=layer.querySelector('.club999-direction-popup-sheet__content');
    const body=layer.querySelector('.club999-direction-popup-sheet__body');
    if(!content||!body) return;

    layer.querySelectorAll('#club999DirectionsPopupArt,.club999-v203-popup-art,.club999-v204-popup-picture').forEach(el=>el.remove());

    let media=layer.querySelector('.'+MEDIA_CLASS);
    if(!media){
      media=document.createElement('div');
      media.className=MEDIA_CLASS;
      content.insertBefore(media,body);
    }

    const src=sourceFromCard(card);
    if(src){
      media.style.setProperty('background-image',src.image,'important');
      media.style.setProperty('background-position',src.position,'important');
      media.style.setProperty('background-size',src.size,'important');
      media.style.setProperty('background-repeat',src.repeat,'important');
      media.style.setProperty('display','block','important');
      media.style.setProperty('visibility','visible','important');
      media.style.setProperty('opacity','1','important');
      return;
    }

    /* If the raster is not ready yet, use the card itself as a stable visual source. */
    const cardStyle=getComputedStyle(card);
    media.style.setProperty('background-image',cardStyle.backgroundImage||'none','important');
    media.style.setProperty('background-position','50% 50%','important');
    media.style.setProperty('background-size','cover','important');
    media.style.setProperty('display','block','important');
  }

  document.addEventListener('click',event=>{
    const card=event.target.closest?.('#directions .direction-card.club999-direction-popup');
    if(card) prepare(card);
  },true);

  document.addEventListener('keydown',event=>{
    if(event.key!=='Enter'&&event.key!==' ') return;
    const card=event.target.closest?.('#directions .direction-card.club999-direction-popup');
    if(card) prepare(card);
  },true);
})();
