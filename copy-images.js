// Copies images from .gemini to project images folder
const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.env.HOME, '.gemini/antigravity/brain/b36c01ca-51a8-4873-aa71-5f835301863c');
const dstDir = path.join(__dirname, 'images');

const mapping = {
  'hero_product_1778680913215.png': 'hero_product.png',
  'ingredients_display_1778680929879.png': 'ingredients_display.png',
  'pouring_scene_1778680947097.png': 'pouring_scene.png',
  'brewing_process_1778680982231.png': 'brewing_process.png',
};

fs.mkdirSync(dstDir, { recursive: true });

for (const [src, dst] of Object.entries(mapping)) {
  const srcPath = path.join(srcDir, src);
  const dstPath = path.join(dstDir, dst);
  try {
    fs.copyFileSync(srcPath, dstPath);
    console.log(`OK: ${dst}`);
  } catch (e) {
    console.error(`FAIL: ${dst} - ${e.message}`);
  }
}
