(() => {
  const bodyFiles = ['body-01.txt', 'body-02.txt', 'body-03.txt', 'body-04.txt'];
  const bridgeFiles = ['bridge-01.txt', 'bridge-02.txt', 'bridge-03.txt', 'bridge-04.txt'];
  const appFiles = ['app-01.txt', 'app-02.txt', 'app-03.txt', 'app-04.txt'];
  const asset1Files = ['cosmic-1-01.txt', 'cosmic-1-02.txt', 'cosmic-1-03.txt', 'cosmic-1-04.txt', 'cosmic-1-05.txt'];
  const asset2Files = ['cosmic-2-01.txt', 'cosmic-2-02.txt'];
  const readAll = async (base, files) => (await Promise.all(files.map(async name => {
    const response = await fetch(base + name, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Не удалось загрузить ${name}`);
    return response.text();
  }))).join('');
  const run = code => (0, eval)(code);
  (async () => {
    try {
      const [markup, bridgeCode, appCode, cosmic1, cosmic2] = await Promise.all([
        readAll('./parts/', bodyFiles),
        readAll('./parts/', bridgeFiles),
        readAll('./parts/', appFiles),
        readAll('./assets/', asset1Files),
        readAll('./assets/', asset2Files)
      ]);
      document.getElementById('app-root').innerHTML = markup;
      document.querySelectorAll('[data-cosmic-asset="1"]').forEach(el => el.src = 'data:image/webp;base64,' + cosmic1);
      document.querySelectorAll('[data-cosmic-asset="2"]').forEach(el => el.src = 'data:image/webp;base64,' + cosmic2);

      window.NOTIBOT_INTEGRATION_CONFIG = {
        autoAttachIdentityToForms: true,
        persistIdentity: 'session',
        heightOffsetPx: 16,
        requestTimeoutMs: 12000
      };

      window.WHEEL_NOTIBOT_CONFIG = Object.assign({
        reflectionFormId: '',
        sevenDaysUrl: ''
      }, window.WHEEL_NOTIBOT_CONFIG || {});

      run(bridgeCode);
      run(appCode);
    } catch (error) {
      console.error(error);
      document.getElementById('app-root').innerHTML = '<div class="boot-screen">Не удалось загрузить страницу. Обновите её ещё раз.</div>';
    }
  })();
})();
