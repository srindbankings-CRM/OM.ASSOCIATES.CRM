# OM Associates CRM v4.0

**Professional CRM** built on Cloudflare Workers + D1 Database  
Login: `vinay` / `Vinay@123` · `admin` / `Admin@2024`

---

## 🚀 Deploy Options

### Option A — Cloudflare Workers (Recommended — Backend + Frontend together)

**Step 1: Cloudflare Dashboard lo directly upload**
1. Dashboard → Workers → `om-associates1` → Edit Code
2. `_worker.js` contents paste/upload చేయండి
3. Save & Deploy

**Step 2: D1 Database Binding confirm చేయండి**
- Settings → Bindings → D1 Database → Name: `DB`

**Done!** Worker first request lo automatically tables create చేస్తుంది.

---

### Option B — GitHub + Cloudflare Auto-Deploy

**Step 1: GitHub repo create**
```bash
git init
git add .
git commit -m "OM Associates CRM v4.0"
git remote add origin https://github.com/YOUR_USERNAME/om-crm.git
git push -u origin main
```

**Step 2: GitHub Secrets add (Settings → Secrets → Actions)**
```
CLOUDFLARE_API_TOKEN   → Cloudflare API Token (Workers edit permission)
CLOUDFLARE_ACCOUNT_ID  → Cloudflare Account ID
```

**Step 3: wrangler.toml లో IDs update చేయండి**
```
database_id = "YOUR_D1_DATABASE_ID"    ← Cloudflare D1 lo చూడండి
id = "YOUR_KV_NAMESPACE_ID"            ← KV Namespaces lo చూడండి
```

**Auto-deploy:** main branch కి push చేసిన ప్రతిసారి automatically deploy అవుతుంది.

---

### Option C — Vercel (Frontend only) + Cloudflare Workers (Backend)

**Vercel Frontend:**
1. GitHub repo → Vercel connect చేయండి
2. `vercel.json` లో Workers URL confirm చేయండి:
   ```json
   "dest": "https://om-associates1.srindbankings.workers.dev/$1$2"
   ```
3. Deploy → Vercel automatically routes API calls to Cloudflare

**Note:** Backend (D1 database) is always on Cloudflare Workers.

---

## 📁 Project Structure

```
om-associates-crm/
├── _worker.js          ← Complete backend + embedded frontend (188 KB)
├── public/
│   └── index.html      ← Frontend SPA (Vercel/Pages direct serve కోసం)
├── wrangler.toml       ← Cloudflare deploy config
├── vercel.json         ← Vercel deploy config
├── package.json        ← npm scripts
├── .gitignore
└── .github/
    └── workflows/
        └── deploy.yml  ← Auto-deploy on git push
```

---

## 🔐 Default Login Credentials

| Username | Password  | Role  |
|----------|-----------|-------|
| `vinay`  | `Vinay@123` | Admin |
| `admin`  | `Admin@2024` | Admin |
| `srinu`  | `Srinu@2024` | Admin |

Password algorithm: `SHA-256(password + '_OMA_SALT_2024')` → base64

---

## 🩺 Debug / Diagnose

Visit (no login needed):
- `/health` → DB connection check
- `/debug` → Full system status, user count, binding status

---

## 📱 Features

- ✅ Login (Password + OTP + Forgot Password)
- ✅ Clients — 360° view (Invoices + Tasks)
- ✅ Services catalog
- ✅ Invoices — Auto calculation (discount + GST + total)
- ✅ Payments — Record + status auto-update
- ✅ Tasks / Work Orders
- ✅ Team management + Force password reset
- ✅ Messages — WhatsApp style
- ✅ Dashboard — Revenue charts, KPIs, Announcements
- ✅ Settings — Firm details + Razorpay
- ✅ CSV export (Clients, Invoices, Tasks, Users)
- ✅ Firebase → D1 migration tool
- ✅ Daily automated backup to R2
- ✅ Dark / Light theme
- ✅ Soft delete (data never permanently lost)

---

## 🔧 Cloudflare Resources Setup (First Time)

```bash
npm install
npm run db:create      # D1 database create
npm run kv:create      # KV namespace create  
npm run r2:create      # R2 bucket create
# → Copy the IDs shown → paste in wrangler.toml
npm run deploy         # Deploy!
```
