(()=>{
  const id='club999-directions-polish-v95';
  if(document.getElementById(id)) return;
  const style=document.createElement('style');
  style.id=id;
  style.textContent=`
    #directions .v92-card-picture{
      filter:brightness(1.06) contrast(1.14) saturate(1.10)!important;
      image-rendering:auto!important;
      transform:translateZ(0)!important;
      backface-visibility:hidden!important;
    }
    #directions .direction-card.club999-direction-popup.v92-real-card{
      border-color:rgba(246,211,119,.76)!important;
      box-shadow:
        0 16px 34px rgba(0,9,17,.28),
        0 0 0 1px rgba(246,211,119,.11),
        0 0 18px rgba(225,177,65,.16),
        inset 0 1px 0 rgba(255,244,205,.16)!important;
    }
    #directions .direction-card.club999-direction-popup.v92-real-card::before{
      border-color:rgba(255,224,137,.40)!important;
      box-shadow:
        0 0 10px rgba(228,181,69,.10),
        inset 0 0 8px rgba(244,206,105,.04)!important;
    }
    #directions .direction-card.club999-direction-popup.v92-real-card:hover,
    #directions .direction-card.club999-direction-popup.v92-real-card:focus-visible{
      border-color:rgba(255,226,139,.92)!important;
      box-shadow:
        0 18px 38px rgba(0,9,17,.30),
        0 0 0 1px rgba(255,226,139,.16),
        0 0 24px rgba(230,183,69,.22),
        inset 0 1px 0 rgba(255,248,219,.20)!important;
    }
  `;
  document.head.appendChild(style);
})();