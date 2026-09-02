(()=>{
  const id='club999-directions-polish-v96';
  if(document.getElementById(id)) return;
  const style=document.createElement('style');
  style.id=id;
  style.textContent=`
    #directions .v92-card-picture{
      filter:brightness(1.16) contrast(1.24) saturate(1.18)!important;
      image-rendering:auto!important;
      transform:translateZ(0)!important;
      backface-visibility:hidden!important;
    }

    #directions .direction-card.club999-direction-popup.v92-real-card{
      border:1.6px solid rgba(255,220,112,.98)!important;
      box-shadow:
        0 14px 30px rgba(0,9,17,.24),
        0 0 0 1px rgba(255,237,176,.24),
        0 0 7px rgba(255,210,92,.48),
        0 0 19px rgba(228,171,42,.34),
        inset 0 0 10px rgba(255,219,113,.10),
        inset 0 1px 0 rgba(255,250,226,.32)!important;
    }

    #directions .direction-card.club999-direction-popup.v92-real-card::before{
      border:1px solid rgba(255,229,143,.82)!important;
      box-shadow:
        0 0 8px rgba(246,195,74,.30),
        inset 0 0 8px rgba(255,220,113,.11)!important;
    }

    #directions .direction-card.club999-direction-popup.v92-real-card:hover,
    #directions .direction-card.club999-direction-popup.v92-real-card:focus-visible{
      border-color:rgba(255,232,153,1)!important;
      box-shadow:
        0 16px 34px rgba(0,9,17,.27),
        0 0 0 1px rgba(255,243,199,.30),
        0 0 9px rgba(255,217,113,.58),
        0 0 24px rgba(234,180,54,.42),
        inset 0 0 12px rgba(255,225,131,.12),
        inset 0 1px 0 rgba(255,252,234,.38)!important;
    }

    #directions .v92-card-title{
      text-shadow:
        0 2px 12px rgba(0,0,0,.94),
        0 0 7px rgba(255,221,128,.28)!important;
    }
  `;
  document.head.appendChild(style);
})();
