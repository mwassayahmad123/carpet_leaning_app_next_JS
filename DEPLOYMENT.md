# Quick Deployment Steps

## 🚀 Netlify Deployment (5 minutes)

### Option 1: Quick Deploy (No Git needed)
```bash
# 1. Build your app
npm run build

# 2. Go to netlify.com → Add new site → Deploy manually
# 3. Drag and drop the 'build' folder
# Done! Your site is live
```

### Option 2: Git Integration (Auto-deploy)
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Ready to deploy"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main

# 2. Go to netlify.com → Import from Git
# 3. Connect GitHub → Select repository
# 4. Build settings:
#    - Build command: npm run build
#    - Publish directory: build
# 5. Deploy!
```

---

## 🌐 GoDaddy Deployment

### Step-by-Step:

1. **Build your app:**
   ```bash
   npm run build
   ```

2. **Login to GoDaddy:**
   - Go to godaddy.com → My Products → Web Hosting → Manage

3. **Upload files:**
   - Open File Manager (cPanel)
   - Go to `public_html` folder
   - Delete old files (backup first!)
   - Upload ALL files from `build` folder
   - Make sure `index.html` is in root

4. **Done!** Visit your domain

**Note:** The `.htaccess` file is already created in `public` folder and will be included in your build.

---

## ✅ Pre-Deployment Checklist

- [ ] Test locally: `npm start`
- [ ] Build successfully: `npm run build`
- [ ] Check `build` folder has `index.html`
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

This creates an optimized `build` folder ready for deployment.

---

## 📦 What Gets Deployed

The `build` folder contains:
- `index.html` - Main HTML file
- `static/` - All CSS, JS, and assets
- All images and resources

**Important:** Only deploy the contents of the `build` folder, not the folder itself!

---

## 🆘 Common Issues

**Netlify:**
- If 404 errors occur, the `_redirects` file should fix it (already created)

**GoDaddy:**
- If pages don't load, ensure `.htaccess` is uploaded
- If images don't show, check file paths are correct

---

## 📞 Quick Reference

- **Netlify:** https://app.netlify.com
- **GoDaddy:** https://www.godaddy.com
- **Build folder:** Created after running `npm run build`

