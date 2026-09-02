(()=>{
  const id='club999-directions-desktop-compact-v93';
  if(document.getElementById(id)) return;
  const style=document.createElement('style');
  style.id=id;
  style.textContent=`
    @media (min-width: 901px){
      #directions .direction-grid{
        width:min(100%, 900px)!important;
        max-width:900px!important;
        margin-left:auto!important;
        margin-right:auto!important;
        gap:16px!important;
      }
      #directions .direction-card.club999-direction-popup.v92-real-card{
        aspect-ratio:16 / 9!important;
        min-height:0!important;
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
        padding:15px 15px 13px!important;
      }
      #directions .v92-card-title{
        font-size:24px!important;
      }
    }
  `;
  document.head.appendChild(style);
})();