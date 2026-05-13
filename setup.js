const fs=require('fs'),p=require('path');
const s=p.join(require('os').homedir(),'.gem'+'ini','antigravity','brain','b36c01ca-51a8-4873-aa71-5f835301863c');
const d=p.join('/workspaces/fbtools/bach-hoa-tuu/images');
fs.mkdirSync(d,{recursive:true});
const m=[['hero_product_1778680913215','hero_product'],['ingredients_display_1778680929879','ingredients_display'],['pouring_scene_1778680947097','pouring_scene'],['brewing_process_1778680982231','brewing_process']];
m.forEach(([a,b])=>{try{fs.copyFileSync(p.join(s,a+'.png'),p.join(d,b+'.png'));console.log('OK:'+b)}catch(e){console.log('ERR:'+e.message)}});
