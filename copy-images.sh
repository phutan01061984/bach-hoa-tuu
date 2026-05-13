#!/bin/bash
# Copy generated images to project
SRC="/home/node/.gemini/antigravity/brain/b36c01ca-51a8-4873-aa71-5f835301863c"
DST="/workspaces/fbtools/bach-hoa-tuu/images"
mkdir -p "$DST"
cp "$SRC"/hero_product_*.png "$DST/hero_product.png" 2>/dev/null
cp "$SRC"/ingredients_display_*.png "$DST/ingredients_display.png" 2>/dev/null
cp "$SRC"/pouring_scene_*.png "$DST/pouring_scene.png" 2>/dev/null
cp "$SRC"/brewing_process_*.png "$DST/brewing_process.png" 2>/dev/null
echo "Images copied:"
ls -lh "$DST"/*.png 2>/dev/null || echo "No images found"
