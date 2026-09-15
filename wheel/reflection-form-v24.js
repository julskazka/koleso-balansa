(() => {
  'use strict';
  const FORM_ID = '69cGsZT0FiHaSjDptu1xFo';
  window.WHEEL_NOTIBOT_CONFIG = Object.assign({}, window.WHEEL_NOTIBOT_CONFIG || {}, { reflectionFormId: FORM_ID });
  if (document.querySelector('script[data-reflection-v27]')) return;
  const script = document.createElement('script');
  script.src = './reflection-form-v27.js?v=1';
  script.dataset.reflectionV27 = 'true';
  script.async = false;
  document.head.appendChild(script);
})();
