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

  const cleanCosmicBackground = async (img) => {
    if (!img || img.dataset.cosmicCleaned === 'true') return;
    img.dataset.cosmicCleaned = 'processing';

    try {
      if (!img.complete) {
        await new Promise((resolve, reject) => {
          img.addEventListener('load', resolve, { once: true });
          img.addEventListener('error', reject, { once: true });
        });
      }

      if (img.decode) {
        try { await img.decode(); } catch (_) {}
      }

      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const context = canvas.getContext('2d', { willReadFrequently: true });
      context.drawImage(img, 0, 0);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      for (let i = 0; i < pixels.length; i += 4) {
        const red = pixels[i];
        const green = pixels[i + 1];
        const blue = pixels[i + 2];
        const alpha = pixels[i + 3];
        const brightest = Math.max(red, green, blue);

        if (brightest <= 48) {
          pixels[i + 3] = 0;
        } else if (brightest < 78) {
          pixels[i + 3] = Math.round(alpha * ((brightest - 48) / 30));
        }
      }

      context.putImageData(imageData, 0, 0);
      const cleanedSource = canvas.toDataURL('image/webp', 0.86);

      await new Promise((resolve) => {
        img.addEventListener('load', resolve, { once: true });
        img.src = cleanedSource;
        if (img.complete) resolve();
      });

      img.dataset.cosmicCleaned = 'true';
      img.classList.add('is-cleaned');
    } catch (error) {
      console.error('Не удалось очистить космический фон', error);
      img.dataset.cosmicCleaned = 'failed';
      img.classList.add('is-cleaned');
    }
  };

  (async () => {
    try {
      const packed = await readAll(payloadFiles);
      const payload = JSON.parse(await decodeGzipBase64(packed));

      const style = document.createElement('style');
      style.textContent = payload.css;
      document.head.appendChild(style);

      const githubFixStyle = document.createElement('style');
      githubFixStyle.textContent = `
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

        .cosmic-background {
          mix-blend-mode: normal !important;
          opacity: 0 !important;
        }

        .cosmic-background.is-cleaned {
          opacity: 0.90 !important;
        }

        @media (max-width: 520px) {
          .lead {
            font-size: 17px !important;
            line-height: 1.50 !important;
          }

          .cosmic-background.is-cleaned {
            opacity: 0.86 !important;
          }
        }
      `;
      document.head.appendChild(githubFixStyle);

      document.getElementById('app-root').innerHTML = payload.body;
      document.querySelectorAll('.test-note').forEach((element) => element.remove());

      const cosmicImages = Array.from(document.querySelectorAll('[data-cosmic-asset="1"]'));
      cosmicImages.forEach(el => {
        el.src = 'data:image/webp;base64,' + payload.cosmic1;
      });

      document.querySelectorAll('[data-cosmic-asset="2"]').forEach(el => {
        el.src = 'data:image/webp;base64,' + payload.cosmic2;
      });

      await Promise.all(cosmicImages.map(cleanCosmicBackground));

      window.NOTIBOT_INTEGRATION_CONFIG = {
        autoAttachIdentityToForms: true,
        persistIdentity: 'session',
        heightOffsetPx: 16,
        requestTimeoutMs: 12000
      };
      const sevenDaysPageId = '1HyKwZ5uhzwdI74llc7iTV';
      window.WHEEL_NOTIBOT_CONFIG = Object.assign({
        reflectionFormId: '0cyqNg1gNHXd9vy5zBLn6p',
        sevenDaysUrl: `/page/${sevenDaysPageId}`
      }, window.WHEEL_NOTIBOT_CONFIG || {});

      run(payload.bridge, 'notibot-bridge.js');

      const notibot = window.NotibotIntegration;
      if (notibot && typeof notibot.openLink === 'function') {
        const originalOpenLink = notibot.openLink.bind(notibot);
        const originalOpenArticle = typeof notibot.openArticle === 'function'
          ? notibot.openArticle.bind(notibot)
          : null;
        const internalPagePath = `/page/${sevenDaysPageId}`;
        const externalSevenDaysUrl = 'https://t.me/anna_kolieso_bot/aboutme?startapp=a_1HyKwZ5uhzwdI74llc7iTV_lp';

        notibot.openLink = (url) => {
          try {
            const parsed = new URL(url, window.location.href);
            const isSevenDaysPage = parsed.pathname === internalPagePath;

            if (isSevenDaysPage) {
              const connected = Boolean(notibot.getState?.().connected);

              if (connected && originalOpenArticle) {
                return originalOpenArticle(sevenDaysPageId);
              }

              if (connected) {
                return originalOpenLink(internalPagePath);
              }

              window.location.assign(externalSevenDaysUrl);
              return true;
            }
          } catch (error) {
            console.warn('Не удалось открыть внутреннюю страницу Notibot', error);
          }

          return originalOpenLink(url);
        };
      }

      run(payload.app, 'wheel-app.js');
    } catch (error) {
      console.error(error);
      document.getElementById('app-root').innerHTML = '<div class="boot-screen">Не удалось загрузить страницу. Обновите её ещё раз.</div>';
    }
  })();
})();
