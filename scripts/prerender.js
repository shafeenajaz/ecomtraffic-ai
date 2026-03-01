import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

(async () => {
  console.log('🤖 Starting pre-rendering for AI crawlers...');

  try {
    // Create a simple HTTP server to serve the dist folder
    const server = http.createServer((req, res) => {
      let filePath = path.join(distDir, req.url === '/' ? 'index.html' : req.url);
      const extname = path.extname(filePath);

      // Set proper content type
      const contentTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.svg': 'image/svg+xml',
        '.json': 'application/json',
      };

      fs.readFile(filePath, (err, content) => {
        if (err) {
          if (err.code === 'ENOENT') {
            res.writeHead(404);
            res.end('Not found');
          } else {
            res.writeHead(500);
            res.end('Server error');
          }
        } else {
          res.writeHead(200, { 'Content-Type': contentTypes[extname] || 'text/plain' });
          res.end(content, 'utf-8');
        }
      });
    });

    server.listen(3001, async () => {
      console.log('📡 Local server running on http://localhost:3001');

      const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });

      try {
        const page = await browser.newPage();

        // Set viewport and wait for content to load
        await page.setViewport({ width: 1200, height: 800 });
        console.log('⏳ Loading page and rendering content...');

        await page.goto('http://localhost:3001', {
          waitUntil: 'networkidle0',
          timeout: 30000,
        });

        // Wait a bit for React to fully render
        await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 1000)));

        // Get the fully rendered HTML
        const renderedHtml = await page.content();

        // Save the pre-rendered HTML
        fs.writeFileSync(indexPath, renderedHtml, 'utf-8');
        console.log('✅ Pre-rendering complete! HTML is now AI-crawler friendly.');
        console.log('📊 Page size:', (renderedHtml.length / 1024).toFixed(2), 'KB');

        // Verify content was rendered
        if (renderedHtml.includes('EcomTraffic.ai') && renderedHtml.includes('Generating Revenue')) {
          console.log('✨ Full page content successfully pre-rendered');
        }

      } catch (error) {
        console.error('❌ Page rendering failed:', error.message);
      } finally {
        await browser.close();
        server.close();
        process.exit(0);
      }
    });
  } catch (error) {
    console.error('❌ Pre-rendering setup failed:', error.message);
    console.log('⚠️  Skipping pre-rendering - site will still work but AI crawlers may see partial content');
    process.exit(0); // Don't fail the build
  }
})();
