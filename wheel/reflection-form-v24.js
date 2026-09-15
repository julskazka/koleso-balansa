(() => {
  'use strict';
  const FORM_ID = '6OilaTGVmsR7PrL9f6h2ni';
  window.WHEEL_NOTIBOT_CONFIG = Object.assign({}, window.WHEEL_NOTIBOT_CONFIG || {}, { reflectionFormId: FORM_ID });
  if (document.querySelector('script[data-reflection-v25]')) return;
  const script = document.createElement('script');
  script.src = './reflection-form-v25.js?v=31';
  script.dataset.reflectionV25 = 'true';
  script.async = false;
  document.head.appendChild(script);
})();
