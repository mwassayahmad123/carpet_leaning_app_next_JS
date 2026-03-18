# Quick Deployment Steps

## 🚀 Netlify Deployment (5 minutes)

### Recommended: Git Integration (Auto-deploy)
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Ready to deploy"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main

# 2. Go to netlify.com → Import from Git
# 3. Connect GitHub → Select repository
# 4. Deploy (Netlify will detect Next.js)
#    - Build command: npm run build
#    - Add plugin: @netlify/plugin-nextjs (Site configuration → Plugins)
# 5. Deploy
```

---

## 🌐 GoDaddy Deployment

### Important note

GoDaddy shared hosting is for **static** sites. A typical Next.js app (with SSR/ISR) should be deployed on **Netlify** (recommended here) or **Vercel**.

If you only need a static site on GoDaddy, you must convert this project to a static export first (requires project changes).

---

## ✅ Pre-Deployment Checklist

- [ ] Test locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] Check build finishes without errors
- [ ] All images load correctly
- [ ] All links work
- [ ] Contact form works
- [ ] WhatsApp buttons work

---

## 🔧 Build Command

Always use this to build:
```bash
npm run build
```

This creates an optimized Next.js build (output in `.next/`) for Netlify.

---

## 🆘 Common Issues

**Netlify:**
- Make sure the **Next.js Netlify plugin** is enabled
- If you added a strict **Content-Security-Policy** header in Netlify, it can block Next.js scripts (remove it or configure it with nonces/hashes)

---

## 📞 Quick Reference

- **Netlify:** https://app.netlify.com
- **Build output:** created after running `npm run build`

