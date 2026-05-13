# Bách Hoa Tửu — Landing Page

Premium landing page cho Rượu Bách Hoa Tửu, tối ưu chuyển đổi.

## Deploy lên Vercel

```bash
# 1. Copy images (chạy 1 lần)
node copy-images.js

# 2. Push lên GitHub
git add .
git commit -m "Bách Hoa Tửu landing page"
git push

# 3. Import repo trên vercel.com → chọn thư mục bach-hoa-tuu làm root
```

## Cấu trúc

```
bach-hoa-tuu/
├── index.html       # Landing page chính
├── style.css        # Styles (dark theme, gold accents)
├── script.js        # Animations, age gate, counters
├── vercel.json      # Vercel config
├── images/          # Product images
└── README.md
```

## Tính năng
- 🎨 Dark premium theme với gold/amber palette
- 🔞 Age gate (xác nhận 18+)
- ✨ Animations: fade-in, counter, floating particles
- 📱 Fully responsive
- 📞 Multiple CTAs: phone, Zalo, Messenger
- ⚡ Zero dependencies, pure HTML/CSS/JS
