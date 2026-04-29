# Deploying to Hostinger

This is a Vite + React static site. It builds to `dist/`, which is a folder of
plain HTML / JS / CSS / images that Hostinger's shared hosting (Apache) serves
directly. No Node runtime needed on the server.

## TL;DR

```bash
npm install        # once
npm run build      # generates dist/
```

Then upload **the contents of `dist/`** (not the `dist` folder itself) into
your Hostinger `public_html/` directory. That's it.

The `.htaccess`, `robots.txt`, and `_redirects` are auto-copied from `public/`
into `dist/` during the build — they ship with your upload.

---

## Step-by-step (first deployment)

### 1. Build locally

```bash
cd ~/Desktop/Mershile/Merh
npm install
npm run build
```

You should see `✓ built in ~1s` and a populated `dist/` folder.

### 2. Verify the build works locally

```bash
npm run preview
```

Open the printed URL (default `http://localhost:4173`). Click around — every
route should load. Refresh `/portfolio/fabpay` directly — it should NOT 404.
If it does, the `.htaccess` rewrite is missing.

### 3. Open Hostinger File Manager

1. Log in to **hPanel** → pick your domain → **Files** → **File Manager**.
2. Navigate into **`public_html/`**.
3. If there's an old `default.php` or `index.html` from a previous template,
   move it into a `_old/` subfolder (don't just delete — keeps a rollback).

### 4. Upload `dist/` contents

**Option A — File Manager (easier, ~10MB so fast):**
1. Select all files inside your local `dist/` folder (⌘A on macOS).
2. Drag-and-drop them into the File Manager window.
3. Make sure `.htaccess` actually transferred — toggle **Show hidden files**
   in File Manager (gear icon → Show dotfiles) and confirm it's there.

**Option B — FTP (faster for repeat deploys):**
1. In hPanel: **Files** → **FTP Accounts** → copy host / username, set a password.
2. Use FileZilla / Cyberduck:
   - Host: `ftp.yourdomain.com`
   - User / Pass: from above
3. Navigate to `/public_html/` on the remote.
4. Upload **everything inside** `dist/`. Tell your FTP client to overwrite.
5. Confirm `.htaccess` made it across (some FTP clients hide dotfiles by default).

### 5. Turn on free SSL

1. hPanel → **Security** → **SSL** → enable for the domain. Wait ~5 minutes.
2. Once active, edit `public_html/.htaccess` and **uncomment the 3 HTTPS-redirect
   lines** at the top (currently commented):

   ```apache
   RewriteCond %{HTTPS} !=on
   RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

   That forces every visitor to HTTPS.

### 6. Test the live site

Open in an incognito window:
- `https://yourdomain.com/` — homepage
- `https://yourdomain.com/portfolio/fabpay` — refresh-test (must NOT 404)
- `https://yourdomain.com/blog/vidhyasetu-school-erp` — refresh-test
- View source → confirm `<link rel="stylesheet" href="/assets/index-XXXX.css">` resolves

---

## Re-deploys (after the first one)

Run `npm run build` and re-upload `dist/` contents, overwriting. Browsers will
pick up new files immediately because Vite hashes filenames; `index.html` has
a 5-minute cache so the rollover is fast.

For zero-downtime: upload to `public_html/_new/`, then rename folders.

---

## Files explained

| File | Purpose |
|---|---|
| `dist/index.html` | App entry — must be at `public_html/index.html` |
| `dist/assets/*` | Hashed JS/CSS/images — long-cached |
| `dist/.htaccess` | SPA rewrites, gzip, cache headers, security headers |
| `dist/robots.txt` | Tells crawlers everything is indexable |
| `dist/_redirects` | Netlify fallback — harmless on Apache |
| `dist/favicon.svg` | Tab icon |
| `dist/icons.svg` | Sprite-sheet of icons used by the app |

---

## Common Hostinger gotchas

**`.htaccess` not uploaded.** macOS Finder hides dotfiles by default. In Finder
press `⌘ + Shift + .` to toggle dotfile visibility before drag-and-drop, or
use FTP with "show hidden files" on. **The site works without it but every
non-root URL will 404 on refresh.**

**Old PHP file at `public_html/index.php`.** Apache prefers `.php` over `.html`
unless you tell it otherwise. The `.htaccess` already sets
`DirectoryIndex index.html`, but if a stray `index.php` is still there, delete
or rename it.

**Sub-domain instead of root domain.** No code change needed; just upload to
the sub-domain's `public_html/` (Hostinger creates a separate folder per
sub-domain). Make sure your `vite.config.js` `base` is left at default `/`.

**Hostinger Cloudflare.** If you've enabled the Hostinger CDN/Cloudflare,
purge the cache after each deploy: hPanel → **Speed Up** → **Purge Cache**.
Otherwise visitors may see the old `index.html` for up to 24h.

**404 on `/blog`.** Double-check the file `dist/.htaccess` actually arrived.
SSH or File Manager: `ls -la public_html/` and confirm `.htaccess` is there.
If it isn't, re-upload it explicitly.

---

## Troubleshooting cheat sheet

| Symptom | Fix |
|---|---|
| Homepage works, but `/portfolio/fabpay` 404s on refresh | `.htaccess` missing — upload it |
| Mixed-content warnings in console | Force-HTTPS lines still commented; uncomment them |
| Stale CSS/JS after redeploy | Purge Hostinger CDN cache; index.html cache is 5min |
| White screen, console says `Failed to load module` | Wrong MIME type — check the `<IfModule mod_mime.c>` block landed in `.htaccess` |
| Site loads but fonts look wrong | Google Fonts blocked — confirm `https://fonts.googleapis.com` isn't filtered by your Cloudflare WAF |

---

## Build details (for reference)

- **Framework:** Vite 8 + React 19 + React Router 7
- **Output dir:** `dist/`
- **Bundle size (current):** ~180 KB main + 230 KB react-vendor + 134 KB motion-vendor (gzipped totals ~50% less). Plus per-route lazy chunks (5–20 KB each) and image assets.
- **Browser target:** `es2020` — works on all browsers from 2021 onward.
- **No backend, no env vars, no API keys.** This is a 100% static deployment.
