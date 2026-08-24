(() => {
  const payloadFiles = ["payload-01.txt", "payload-02.txt", "payload-03.txt"];
  const asset1Files = ["cosmic-1-01.txt", "cosmic-1-02.txt"];
  const asset2Files = ["cosmic-2-01.txt"];

  const readAll = async (base, files) => (await Promise.all(files.map(async (name) => {
    const response = await fetch(base + name, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Не удалось загрузить ${name}`);
    return response.text();
  }))).join('');

  const decodeGzipBase64 = async (value) => {
    const binary = atob(value);
    const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    return new Response(stream).text();
  };

  const run = (code, sourceName) => (0, eval)(`${code}\n//# sourceURL=${sourceName}`);

  (async () => {
    try {
      const [packed, cosmic1, cosmic2] = await Promise.all([
        readAll('./payload/', payloadFiles),
        readAll('./assets/', asset1Files),
        readAll('./assets/', asset2Files)
      ]);
      const payload = JSON.parse(await decodeGzipBase64(packed));
      const style = document.createElement('style');
      style.textContent = payload.css;
      document.head.appendChild(style);
      document.getElementById('app-root').innerHTML = payload.body;
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

      run(payload.bridge, 'notibot-bridge.js');
      run(payload.app, 'wheel-app.js');
    } catch (error) {
      console.error(error);
      document.getElementById('app-root').innerHTML = '<div class="boot-screen">Не удалось загрузить страницу. Обновите её ещё раз.</div>';
    }
  })();
})();
