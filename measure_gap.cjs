const http = require('http');

async function main() {
  const version = await new Promise((res) => {
    http.get('http://127.0.0.1:9222/json/version', (r) => {
      let data = '';
      r.on('data', c => data += c);
      r.on('end', () => res(JSON.parse(data)));
    });
  });
  
  const WebSocket = (await import('ws')).default || globalThis.WebSocket;
  const ws = new WebSocket(version.webSocketDebuggerUrl);
  
  let id = 1;
  const send = (method, params = {}) => new Promise((res) => {
    const msgId = id++;
    const handler = (evt) => {
      const msg = JSON.parse(evt.data || evt);
      if (msg.id === msgId) {
        ws.removeEventListener('message', handler);
        res(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  await new Promise(r => ws.addEventListener('open', r));

  const { targetId } = await send('Target.createTarget', { url: 'http://localhost:5173/startups' });
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
  
  const sendSession = (method, params = {}) => new Promise((res) => {
    const msgId = id++;
    const handler = (evt) => {
      const msg = JSON.parse(evt.data || evt);
      if (msg.id === msgId) {
        ws.removeEventListener('message', handler);
        res(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: msgId, sessionId, method, params }));
  });

  await sendSession('Page.enable');
  await sendSession('Runtime.enable');
  await new Promise(r => setTimeout(r, 2000));

  const result = await sendSession('Runtime.evaluate', {
    expression: `(() => {
      const blueSection = document.querySelector('section.bg-\\\\[\\\\#4A7DFF\\\\]') || Array.from(document.querySelectorAll('section')).find(s => s.className.includes('4A7DFF'));
      const benefitsSection = document.querySelector('section:has(h3)') || Array.from(document.querySelectorAll('section')).find(s => s.innerText.includes('What You Can Do with Coirei'));
      const h3 = Array.from(document.querySelectorAll('h3')).find(h => h.innerText.includes('What You Can Do with Coirei'));
      
      const blueRect = blueSection ? blueSection.getBoundingClientRect() : null;
      const benefitsRect = benefitsSection ? benefitsSection.getBoundingClientRect() : null;
      const h3Rect = h3 ? h3.getBoundingClientRect() : null;
      
      return {
        blueRect,
        benefitsRect,
        h3Rect,
        benefitsPaddingTop: benefitsSection ? window.getComputedStyle(benefitsSection).paddingTop : null,
        benefitsPaddingBottom: benefitsSection ? window.getComputedStyle(benefitsSection).paddingBottom : null,
        gapBetweenBlueAndH3: (blueRect && h3Rect) ? (h3Rect.top - blueRect.bottom) : null,
        gapBetweenBlueAndSection: (blueRect && benefitsRect) ? (benefitsRect.top - blueRect.bottom) : null
      };
    })()`,
    returnByValue: true
  });

  console.log(JSON.stringify(result.result.value, null, 2));

  // Take screenshot of that area
  await sendSession('Page.setViewport', { width: 1440, height: 900, deviceScaleFactor: 1 });
  const { data: base64Screenshot } = await sendSession('Page.captureScreenshot', { format: 'png' });
  require('fs').writeFileSync('C:/Users/siva/Downloads/GTMweb/coireiAI/coireiGtm/coireiAI/measured_screenshot.png', Buffer.from(base64Screenshot, 'base64'));

  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
