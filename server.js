const http = require('http');
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const IMG_SRC = '/home/node/.gemini/antigravity/brain/b36c01ca-51a8-4873-aa71-5f835301863c';
const IMG_MAP = {
  'hero_product.png': 'hero_product_1778680913215.png',
  'ingredients_display.png': 'ingredients_display_1778680929879.png',
  'pouring_scene.png': 'pouring_scene_1778680947097.png',
  'brewing_process.png': 'brewing_process_1778680982231.png',
};

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
};

const server = http.createServer((req, res) => {
  let url = req.url.split('?')[0];
  if (url === '/') url = '/index.html';

  // Check if it's an image request that maps to generated images
  const imgName = url.replace('/images/', '');
  if (url.startsWith('/images/') && IMG_MAP[imgName]) {
    const imgPath = path.join(IMG_SRC, IMG_MAP[imgName]);
    if (fs.existsSync(imgPath)) {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      fs.createReadStream(imgPath).pipe(res);
      return;
    }
  }

  const filePath = path.join(DIR, url);
  const ext = path.extname(filePath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(8080, () => console.log('Server running at http://localhost:8080'));
