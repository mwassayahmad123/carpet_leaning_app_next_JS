# Deployment Guide: Netlify & GoDaddy

## 🚀 Deploying on Netlify

### Method 1: Drag & Drop (Easiest)

1. **Build your React app:**
   ```bash
   npm run build
   ```
   This creates a `build` folder with optimized production files.

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://www.netlify.com) and sign up/login
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the entire `build` folder onto the deployment area
   - Wait for deployment to complete (usually 1-2 minutes)
   - Your site will be live at a URL like: `https://random-name-123.netlify.app`

3. **Custom Domain (Optional):**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain name
   - Follow DNS configuration instructions

### Method 2: Git Integration (Recommended for Updates)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/laundary_service.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to Netlify → "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `build`
   - Click "Deploy site"

3. **Auto-deploy:**
   - Every time you push to GitHub, Netlify will automatically rebuild and deploy

### Method 3: Netlify CLI

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
   netlify deploy --prod --dir=build
   ```

---

## 🌐 Deploying on GoDaddy

### Prerequisites:
- GoDaddy hosting account (cPanel or File Manager access)
- Your domain name

### Step 1: Build Your React App

```bash
npm run build
```

This creates a `build` folder with all production files.

### Step 2: Upload Files to GoDaddy

#### Option A: Using cPanel File Manager

1. **Login to GoDaddy:**
   - Go to your GoDaddy account
   - Navigate to "My Products" → "Web Hosting" → "Manage"

2. **Access File Manager:**
   - Click "cPanel" or "File Manager"
   - Navigate to `public_html` folder (or your domain's root folder)

3. **Upload Files:**
   - Delete any existing files in `public_html` (backup first!)
   - Upload ALL contents from your `build` folder to `public_html`
   - Make sure `index.html` is in the root of `public_html`

#### Option B: Using FTP

1. **Get FTP Credentials:**
   - In cPanel, go to "FTP Accounts"
   - Note your FTP host, username, and password

2. **Connect via FTP Client:**
   - Use FileZilla, WinSCP, or any FTP client
   - Connect to your GoDaddy server
   - Navigate to `public_html`
   - Upload all files from `build` folder

### Step 3: Configure .htaccess (Important for React Router)

Create a `.htaccess` file in `public_html` with:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures React Router works correctly on GoDaddy.

### Step 4: Verify Deployment

1. Visit your domain: `https://yourdomain.com`
2. Check that all pages load correctly
3. Test navigation and functionality

---

## 🔧 Important Configuration Files

### Create `_redirects` file (for Netlify)

Create `public/_redirects` file:
```
/*    /index.html   200
```

### Update `package.json` (if needed)

Ensure build script exists:
```json
"scripts": {
  "build": "react-scripts build"
}
```

---

## 📝 Quick Checklist

### Before Deploying:
- [ ] Test your app locally: `npm start`
- [ ] Build successfully: `npm run build`
- [ ] Check `build` folder exists with `index.html`
- [ ] Verify all images/assets are included
- [ ] Test all functionality

### Netlify:
- [ ] Build command: `npm run build`
- [ ] Publish directory: `build`
- [ ] Environment variables (if any) configured
- [ ] Custom domain connected (optional)

### GoDaddy:
- [ ] All files uploaded to `public_html`
- [ ] `.htaccess` file created
- [ ] `index.html` in root directory
- [ ] DNS settings correct
- [ ] SSL certificate enabled (HTTPS)

---

## 🆘 Troubleshooting

### Netlify Issues:
- **Build fails:** Check build logs, ensure all dependencies are in `package.json`
- **404 errors:** Add `_redirects` file in `public` folder
- **Images not loading:** Check image paths are relative, not absolute

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
- React Deployment: https://create-react-app.dev/docs/deployment/

