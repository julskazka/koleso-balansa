(() => {
  const payloadFiles = [
    ['./payload/', 'payload-01.txt'],
    ['./payload-v10/', 'rest-01.txt'],
    ['./payload-v10/', 'rest-02.txt'],
    ['./payload-v10/', 'rest-03.txt'],
    ['./payload-v10/', 'rest-04a.txt'],
    ['./payload-v10/', 'rest-04b.txt'],
    ['./payload-v10/', 'rest-04c.txt'],
    ['./payload-v10/', 'rest-04d.txt'],
    ['./payload-v10/', 'rest-05.txt'],
    ['./payload-v10/', 'rest-06.txt'],
    ['./payload-v10/', 'rest-07a.txt'],
    ['./payload-v10/', 'rest-07b.txt'],
    ['./payload-v10/', 'rest-07c.txt'],
    ['./payload-v10/', 'rest-07d.txt'],
    ['./payload-v10/', 'rest-08.txt']
  ];

  const readAll = async (files) => (await Promise.all(files.map(async ([base, name]) => {
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
      const packed = await readAll(payloadFiles);
      const payload = JSON.parse(await decodeGzipBase64(packed));

      const style = document.createElement('style');
      style.textContent = payload.css;
      document.head.appendChild(style);

      /*
        На широком экране растягиваем только общий контейнер.
        Космический слой, его исходная маска и смешивание не меняются:
        они полностью совпадают с автономной версией до переноса на GitHub.
      */
      const desktopLayoutStyle = document.createElement('style');
      desktopLayoutStyle.textContent = `
        html,
        body {
          width: 100% !important;
          min-width: 100% !important;
          min-height: 100% !important;
        }

        body {
          display: block !important;
        }

        .app {
          width: 100% !important;
          max-width: none !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }

        .intro,
        .wheel-zone {
          width: min(100%, 560px) !important;
          max-width: 560px !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }
      `;
      document.head.appendChild(desktopLayoutStyle);

      document.getElementById('app-root').innerHTML = payload.body;
      document.querySelectorAll('[data-cosmic-asset="1"]').forEach(el => {
        el.src = 'data:image/webp;base64,' + payload.cosmic1;
      });
      document.querySelectorAll('[data-cosmic-asset="2"]').forEach(el => {
        el.src = 'data:image/webp;base64,' + payload.cosmic2;
      });

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