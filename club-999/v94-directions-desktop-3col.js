(()=>{
  const id='club999-directions-desktop-3col-v94';
  if(document.getElementById(id)) return;
  const style=document.createElement('style');
  style.id=id;
  style.textContent=`
    @media (min-width: 901px){
      #directions .direction-grid{
        grid-template-columns:repeat(3,minmax(0,1fr))!important;
        width:min(100%, 960px)!important;
        max-width:960px!important;
        margin-left:auto!important;
        margin-right:auto!important;
        gap:14px!important;
      }
      #directions .direction-card.club999-direction-popup.v92-real-card{
        aspect-ratio:16 / 9!important;
        min-height:0!important;
        border-radius:20px!important;
      }
      #directions .direction-card.club999-direction-popup.v92-real-card::before{
        inset:6px!important;
        border-radius:14px!important;
      }
      #directions .v92-card-picture{
        background-size:200% 300%!important;
      }
      #directions .v92-real-card[data-direction-theme="body"] .v92-card-picture{background-position:0 0!important}
      #directions .v92-real-card[data-direction-theme="energy"] .v92-card-picture{background-position:100% 0!important}
      #directions .v92-real-card[data-direction-theme="work"] .v92-card-picture{background-position:0 50%!important}
      #directions .v92-real-card[data-direction-theme="relations"] .v92-card-picture{background-position:100% 50%!important}
      #directions .v92-real-card[data-direction-theme="community"] .v92-card-picture{background-position:0 100%!important}
      #directions .v92-real-card[data-direction-theme="beauty"] .v92-card-picture{background-position:100% 100%!important}
      #directions .v92-card-copy{
        padding:13px 13px 11px!important;
      }
      #directions .v92-card-title{
        font-size:21px!important;
      }
      #directions .club999-direction-popup__plus{
        top:10px!important;
        right:10px!important;
        width:29px!important;
        height:29px!important;
      }
    }
  `;
  document.head.appendChild(style);
})();