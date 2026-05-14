#!/bin/bash
# Download real product images from dealer sites for Bách Hoa Tửu landing page
# Images are from Blogger/Blogspot CDN - we request high resolution versions

mkdir -p images/products images/story images/process images/hero

echo "=== Downloading product images ==="

# 1. Hero banner - RƯỢU BÁCH HOA TỬU SÁU PHƯỚC (large banner from site 1)
curl -sL -o images/hero/banner-main.png \
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVKnxNVeddc67JpSQvoquDNk5nvXKuuSSadIBNeKHyDpNmjK3jEcRAooTnKRugTMkwfn-aQOmi1v62FiCZ2342oQ7jGWvDMFCFz6NAT7p6SRUJeViq49Vye1GvKQJvlqZH7M9t5_gAtx2GW7JmSDHzZg_oHf0T7_-GwG7qExd3D_q9xVKJWIsv-vwFhUgT/s1600/R%C6%AF%E1%BB%A2U%20B%C3%81CH%20HOA%20T%E1%BB%ACU%20S%C3%81U%20PH%C6%AF%E1%BB%9AC.png"
echo "✅ Hero banner"

# 2. Chai Tròn - product thumbnail (from site 1 homepage, upscaled)
curl -sL -o images/products/chai-tron-thumb.png \
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivZ3PXQwHuqFf-K01rW2swlPff98RmFfU73PO9jTs0Ug-c_Z8UoS_wKR4wydC8pSV52IuCBBnW6bqTbUi4eBcCtScMtLC8LgObL6nRc6c5na-2tiDkPh1B6V2IKJ57_wIUpnvrClriiUudWPvAJSb0BvSxK5sf1C8CKJjojPQsDVmUWz778XLZhjBCCzcx/s800/5-removebg-preview.png"
echo "✅ Chai tròn thumb"

# 3. Chai Vuông - product thumbnail (xóa phông - site 1) 
curl -sL -o images/products/chai-vuong-thumb.png \
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_M68Ev5tVhDS7GgH5hC6KJluZyiEwOKfyEhKGJ3XPQMUMpd1Uxfza3hgxCLBy0ho0LKdY94ILqi-vtjK0Qi45KtRDA8_Ig3dE1mJNkf0FL3QKj6LYVrBh4TsjKhAtQGTPVQJUsPQrzhRa_llGgIAMYBeD6V3q-e9OCgkS4YN9gfOARy5YZDGWCXsyeKr6/s800/%E1%BA%A2nh%20x%C3%B3a%20ph%C3%B4ng.png"
echo "✅ Chai vuông thumb"

# 4. Product listing image (site 1 - main product)
curl -sL -o images/products/product-main.png \
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLTx4MZ3IuvuTwZAA3lu4zurcyfJe8hB2K2B2X8XSOmfrzTix24vIy_OWbu1F2XMrJThp0O_twf8JWulfRaLalUdqufYvys8NnzTAaRfCHaoSjy_qs_J1GabfuiwVS_0NuUs1tyywNPUCr3wkAwCaeV5StEUrU2fxkGQxVkR0MTjNSS5JUpJAVAQVMqZFy/s800/1.png"
echo "✅ Product main"

# 5. Chai tròn logo/product (from site 2)
curl -sL -o images/products/chai-tron-logo.png \
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjORmO0pGkB3tfpuieLWryM85ACPNCK94l9H0-Q-lrF-Svt-aKSmVHPOszghhC6tLB9CibgscL7VygyiBXkkyZTiqeapsSTPmGZ-zXbcTjBKfJVPCrlVFLYhSK1HCuDhGAlbAScdnTVrrgF3Tqyi28K4ZlP9_zkwx9lA0vX9TyHsXSNOF7aFFuUkKRe5Q/s800/ruou-bach-hoa-tuu-chai-tron-logonho.png"
echo "✅ Chai tròn logo"

# 6. Chai vuông logo/product (from site 2)
curl -sL -o images/products/chai-vuong-logo.png \
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVUQdaMLRCWP2TwJ89nBT9oVtH8VPEsH7QV35fxwFON97B38v76Ad39Tk_I-9pCB4CVS1PKF2RIFgce51uJCUrK38rN8ED8utVC9qASjUDNa_RR1uX16OroEL7rIJnD8wwIipVLmpNc6iHgOEbYXWL_QTYEZNfeoRf3sNj2QH7p2IQ9K-DJHFJzerjoA/s800/ruou-bach-hoa-tuu-chai-vuong-logonho.png"
echo "✅ Chai vuông logo"

# 7. Chai nhựa logo/product (from site 2)
curl -sL -o images/products/chai-nhua-logo.png \
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixlF3cESLQ5WYn5OAKlFzs3eP2NhTmpcqkKL8laaFMRQA2Tb7pKbPmDMWMciM69VRjClc4H5z_I5IPEz6BfPGGLit8YBgzENjNehVM5-GEFFuhqxiKVqDlxDk9HDYviCArJUkDbjrJcgyAXC6ZO3wNAxExKXrfiga8nnIJndg2iw_3XgtT9N4ega9Jrg/s800/logonho-ruou-bach-hoa-tuu-chai-nhua.png"
echo "✅ Chai nhựa logo"

# 8. Remove-bg product (site 3)
curl -sL -o images/products/product-removebg.png \
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUCbs1RWyNQnVvU_pIgHw__mzGDpjVyn14zmGRV682G2xVlK0i8VVCinCJQZG7NSi8hL26Rl9gRqyULICLSXekqpfNJc3It1z6NdZGZGgoFaqF9acIZEYhXZSslyuRUneqPPmidWC8ze8gOMCiS7WsypLoiI1hPppzXiohCyjGnSb1oLBuNTDS-WYckRf2/s800/Remove-bg.ai_1712564804456.png"
echo "✅ Product remove-bg"

# === From gioi-thieu page (real photos!) ===

# 9. Real product photo 1 (from intro page - Zalo photo)
curl -sL -o images/story/real-product-1.jpg \
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbbah2QqDA7cq0SVvOaIHZPaNRwJrfMM-BAkcp5a_HspMlRRKRUE7d6PNJm7eqXVWjml6zrOchlyF1K2r-qtKTgGBLeL_evXXarfNohAa2a4s55g_M_1hgRL32LjIh2G5sUf0X-Nb85_r86ViSz6tIuddOOnchvLuge2gNUGTCVNjt7uVOHusczdPGpr2t/s1600/z6760309581488_d72b626d74b249fd77ada3d4849985dd.jpg"
echo "✅ Real product photo 1"

# 10. Lifestyle/display photo (from intro page)
curl -sL -o images/story/real-product-2.jpg \
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizuOcZNfbHiSsyC1GYKU-pD9rsGvZeEbX4pU98bulykrDswRFec5plSaIcdQKWi9OJcHMnoqAqSDHc8pjViHiD33guadq3o_W71RIgKT-n44-p4e89UCvIWG8WI7zWW1tbZ_SRF7TZoNnEnwkqk0kMnLPT9yuI-gqitvovh9-Hq9V4lI2jiVczWwGJ8_El/s1600/z6716823706055_a7fdb333c4dd23774aa23bba2198945e.jpg"
echo "✅ Real product photo 2"

# 11. Giao hàng toàn quốc banner
curl -sL -o images/story/giao-hang-toan-quoc.png \
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6UcBY9GxuTMH7QPW9aRFRubdDK1GVCnE9G8QaEwdrHPO2fj4IJSsrWpiI0sQjy7x9z0qf5X2NX2gCSqYH3KDWrhpYCJdTZ_w66kOdQRP9j4CRccKWRfLBGMcY-yMc1AIXR5CN4R2LfUpy4wnop8sVe20ddOxiekJtkfteGMdnqy6N_4YHi7ALUi06MzZB/s1600/Giao%20h%C3%A0ng%20to%C3%A0n%20qu%E1%BB%91c.png"
echo "✅ Giao hàng toàn quốc"

# 12. Another real product photo (from intro page)
curl -sL -o images/story/real-product-3.jpg \
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7bZFHnH046e9GhxLLOmAi6bSM91dgmAwW5LsL8FpqFsuXeMcDuc6_HKJWClnX3VIz12QDQ40l9EDWa1Oih6EZX4AzZovdLfdKbofm1Pku8LMXeCE5vyRNQGzCHPaeRwKWXjbSCkMuiB7IOVY9EIFz3Srn6QLTi-I3WqwTZMZzYTFJP87eJHOLKSH-ZAvr/s1600/z6760309535104_04ed62b502ed4b8a85ae7a9cbeb39288.jpg"
echo "✅ Real product photo 3"

# 13. Bảng giá BHT
curl -sL -o images/story/bang-gia.png \
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjumG4rjDM8smEt0RVp9_iy_g72hxScBeGiAUnOYcrz0COvs_UaVmLTjfUZaQ6oBQIaW-fklZTUDfoAoWJE5GbwHauewTFyRsJZqwF06j2fIq_K51sNiG1J4e3fyT-IjriG1H90HXxz-VH8RgKl5zx7QLUVKQS1HSa0dQcZNVVJEpf3hqD4dNFOh4bDXCyJ/s1600/B%E1%BA%A3ng%20gi%C3%A1%20BHT%20ver4.png"
echo "✅ Bảng giá"

# 14. Fanpage screenshot
curl -sL -o images/story/fanpage.png \
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihvfnkPCYjFM5VG_EI4HgeHt8Ln6VjajPH1izpqDvF5rn69lUXHbLVt3XTUJs3oLA6XDPxZtnRd7tooARzYyOjk7ia2u_bSf92ux_jwuBMJu7YG4MTh-IOYOwIzmpsNvGXfR1Jk_8aY0MglBJOmv-FZGeCGHLAmrHGIJjN0mtNtn73R7W9JjsvHTgkle9D/s1600/Fanpage-Ruoubachhoatuusauphuoc.png"
echo "✅ Fanpage"

# 15. Blog header image
curl -sL -o images/hero/blog-header.png \
  "https://2.bp.blogspot.com/-ahPlS2XcmRw/WVnjlKZkVjI/AAAAAAAABEQ/dSHI38vf9zcTJJvMrBzgzRCoeiuQqmgJQCLcBGAs/s1600/s1.png"
echo "✅ Blog header"

# Also try getting product detail pages for more images
echo ""
echo "=== Checking for more product images from detail pages ==="

# Get all product post URLs from the site
POSTS=$(curl -sL 'https://www.ruoubachhoatuu.com/search/label/san-pham' 2>/dev/null | grep -oP 'href="(https://www\.ruoubachhoatuu\.com/\d{4}/\d{2}/[^"]+)"' | sed 's/href="//;s/"$//' | sort -u | head -5)

echo "Found product posts:"
echo "$POSTS"

i=1
for url in $POSTS; do
  echo "  Fetching: $url"
  IMGS=$(curl -sL "$url" 2>/dev/null | grep -oP 'src="(https://blogger[^"]*\.(jpg|jpeg|png|webp)[^"]*)"' | sed 's/src="//;s/"$//' | grep -v 's150\|w20\|w150\|eye_w\|cart_w\|chatface\|zalo-\|hotline-\|qr.code\|fanpage' | head -5)
  for img_url in $IMGS; do
    # Get max resolution by changing size parameter
    hi_res=$(echo "$img_url" | sed 's|/s[0-9]\+/|/s1600/|g; s|/w[0-9]\+-h[0-9]\+/|/s1600/|g; s|/w[0-9]\+/|/s1600/|g')
    ext="${hi_res##*.}"
    curl -sL -o "images/products/detail-${i}.${ext}" "$hi_res"
    echo "    ✅ detail-${i}.${ext}"
    i=$((i+1))
  done
done

echo ""
echo "=== Download complete! ==="
echo ""
ls -lhR images/
