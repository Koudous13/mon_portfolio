import assert from 'node:assert';
import { spawn } from 'node:child_process';

async function runTest() {
  console.log('Starting next dev server...');
  const server = spawn('npm', ['run', 'dev'], { stdio: 'pipe', shell: true });

  let serverStarted = false;
  server.stdout.on('data', (data) => {
    console.log('SERVER OUT:', data.toString().trim());
    if (data.toString().includes('Ready in') || data.toString().includes('started server on')) {
      serverStarted = true;
    }
  });

  // Wait for server to start
  for (let i = 0; i < 30; i++) {
    if (serverStarted) break;
    await new Promise(r => setTimeout(r, 1000));
  }

  if (!serverStarted) {
    console.error('Server failed to start');
    server.kill();
    process.exit(1);
  }

  console.log('Server started. Waiting for endpoint...');
  let retries = 5;
  let html = '';
  while (retries > 0) {
    try {
      const res = await fetch('http://localhost:3001', { headers: { 'x-vercel-ip-city': 'Paris' } });
      html = await res.text();
      break;
    } catch (e) {
      console.log('Fetch error:', e.message);
      retries--;
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  if (!html) throw new Error('Could not fetch localhost');

  try {
    // The placeholder should be replaced by the middleware
    assert.ok(html.includes('Disponible à Paris'), 'HTML should contain "Disponible à Paris"');
    assert.ok(!html.includes('<!-- GEO_PLACEHOLDER -->'), 'Placeholder should be replaced');

    // Test 2: Fallback when no header
    const res2 = await fetch('http://localhost:3001');
    const html2 = await res2.text();
    assert.ok(html2.includes('Disponible en full-remote') || html2.match(/Disponible à .+/), 'Should have a fallback text');

    console.log('✅ All tests passed!');
    server.kill();
    process.exit(0);
  } catch (err) {
    console.error('❌ Test failed:', err.message);
    server.kill();
    process.exit(1);
  }
}

runTest();
