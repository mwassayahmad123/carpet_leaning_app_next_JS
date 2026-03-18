# Deployment Guide: Netlify & GoDaddy

## 🚀 Deploying on Netlify

### Method: Git Integration (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to Netlify → "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your repository
   - Configure build settings (Next.js):
     - **Build command:** `npm run build`
     - **Publish directory:** `.next`
     - Enable the **Next.js Netlify plugin** (`@netlify/plugin-nextjs`)
   - Click "Deploy site"

3. **Auto-deploy:**
   - Every time you push to GitHub, Netlify will automatically rebuild and deploy

### Netlify CLI (optional)

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   npm run build
   # For Next.js, prefer Git integration + plugin.
   # If you still use CLI, Netlify will deploy with the plugin config in netlify.toml.
   netlify deploy --prod
   ```

---

## 🌐 Deploying on GoDaddy

### Important note

GoDaddy shared hosting is for **static** sites. A typical Next.js app (SSR/ISR) should be deployed on **Netlify** or **Vercel**.

If you only need a static site on GoDaddy, you must convert this project to a static export first (requires project changes).

---

## 🔧 Important Configuration Files

### `netlify.toml` (recommended)

This repo includes a `netlify.toml` to ensure Netlify builds as Next.js and uses the official plugin.

---

## 📝 Quick Checklist

### Before Deploying:
- [ ] Test your app locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] Check build finishes without errors
- [ ] Verify all images/assets are included
- [ ] Test all functionality

### Netlify:
- [ ] Build command: `npm run build`
- [ ] Next.js plugin enabled (`@netlify/plugin-nextjs`)
- [ ] Environment variables (if any) configured
- [ ] Custom domain connected (optional)

---

## 🆘 Troubleshooting

### Netlify Issues:
- **Build fails:** Check build logs, ensure all dependencies are in `package.json`
- **Blank page / scripts blocked:** Remove any strict **Content-Security-Policy** header set in Netlify, or configure CSP properly for Next.js (nonces/hashes)
- **Images not loading:** Check image paths are correct and assets exist under `public/`

### GoDaddy Issues:
- **404 errors:** Ensure `.htaccess` file is uploaded
- **Blank page:** Check browser console for errors, verify `index.html` exists
- **Slow loading:** Optimize images, enable caching in cPanel

---

## 🔄 Updating Your Site

### Netlify (Git Integration):
```bash
git add .
git commit -m "Update site"
git push
# Netlify auto-deploys
```

### GoDaddy:
1. Build: `npm run build`
2. Upload new files from `build` folder
3. Replace old files in `public_html`

---

## 💡 Pro Tips

1. **Use Netlify for staging:** Deploy to Netlify first to test, then deploy to GoDaddy
2. **Environment variables:** Store sensitive data in Netlify environment variables
3. **Custom 404 page:** Create `public/404.html` for better error handling
4. **Performance:** Enable compression and caching in both platforms
5. **Backup:** Always backup before deploying to production

---

## 📞 Need Help?

- Netlify Docs: https://docs.netlify.com
- GoDaddy Help: https://www.godaddy.com/help
- Next.js Deployment: https://nextjs.org/docs/app/building-your-application/deploying

