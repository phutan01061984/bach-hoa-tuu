const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const DIR = __dirname;
const GEMINI_DIR = path.join(os.homedir(), '.gemini', 'antigravity', 'brain', 'b36c01ca-51a8-4873-aa71-5f835301863c');

const IMG_MAP = {
  '/images/hero_product.png': 'hero_product_1778680913215.png',
  '/images/ingredients_display.png': 'ingredients_display_1778680929879.png',
  '/images/pouring_scene.png': 'pouring_scene_1778680947097.png',
  '/images/brewing_process.png': 'brewing_process_1778680982231.png',
};

const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.png': 'image/png', '.jpg': 'image/jpeg' };

http.createServer((req, res) => {
  let url = req.url.split('?')[0];
  if (url === '/') url = '/index.html';

  if (IMG_MAP[url]) {
    const imgPath = path.join(GEMINI_DIR, IMG_MAP[url]);
    if (fs.existsSync(imgPath)) {
      res.writeHead(200, { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=86400' });
      fs.createReadStream(imgPath).pipe(res);
      return;
    }
  }

  const filePath = path.join(DIR, url);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
}).listen(8080, () => console.log('http://localhost:8080'));
