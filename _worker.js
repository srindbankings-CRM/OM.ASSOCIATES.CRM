// ── Embedded Frontend SPA (index.html) ──────────────────────
const INDEX_HTML = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>OM Associates CRM</title>\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@600;700&display=swap\" rel=\"stylesheet\">\n<script src=\"https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js\"></script>\n<style>\n*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}\n:root{\n  --bg:#0d1117;--bg2:#161b26;--bg3:#1c2234;--bg4:#222c3e;\n  --card:#192132;--glass:rgba(255,255,255,0.026);--glass2:rgba(255,255,255,0.052);\n  --border:rgba(255,255,255,0.062);--border2:rgba(255,255,255,0.108);\n  --gold:#c9a84c;--gold2:#e5c46a;--gold3:rgba(201,168,76,0.11);--gold4:rgba(201,168,76,0.055);\n  --gold-gradient:linear-gradient(135deg,#c9a84c 0%,#e8c96a 50%,#9e7628 100%);\n  --blue:#5691f8;--blue2:rgba(86,145,248,0.1);--blue3:rgba(86,145,248,0.18);\n  --green:#3dcf8e;--green2:rgba(61,207,142,0.1);--green3:rgba(61,207,142,0.2);\n  --red:#f87171;--red2:rgba(248,113,113,0.1);--red3:rgba(248,113,113,0.2);\n  --orange:#fb923c;--orange2:rgba(251,146,60,0.1);\n  --purple:#a78bfa;--teal:#2dd4bf;\n  --text:#eceff4;--text2:#a0afc0;--text3:#526070;\n  --font:'DM Sans',system-ui,sans-serif;\n  --font-mono:'JetBrains Mono',monospace;\n  --font-serif:'Playfair Display',Georgia,serif;\n  --sidebar:252px;--r:10px;--r2:14px;\n  --shadow:0 4px 20px rgba(0,0,0,.35);--shadow2:0 14px 50px rgba(0,0,0,.5);\n}\n.light{\n  --bg:#f4f6fb;--bg2:#fff;--bg3:#eef1f8;--bg4:#e6eaf5;\n  --glass:rgba(255,255,255,0.8);--glass2:rgba(255,255,255,0.95);\n  --border:rgba(0,0,0,0.068);--border2:rgba(0,0,0,0.11);\n  --gold:#8b6914;--gold2:#a07820;--gold3:rgba(139,105,20,0.08);\n  --blue:#2563eb;--blue2:rgba(37,99,235,0.07);\n  --green:#059669;--green2:rgba(5,150,105,0.07);--green3:rgba(5,150,105,0.15);\n  --red:#dc2626;--red2:rgba(220,38,38,0.07);--red3:rgba(220,38,38,0.15);\n  --orange:#d97706;--orange2:rgba(217,119,6,0.07);\n  --text:#111827;--text2:#374151;--text3:#9ca3af;\n}\nhtml,body{height:100%;overflow:hidden;background:var(--bg);color:var(--text);font-family:var(--font);font-size:14px;line-height:1.6;-webkit-font-smoothing:antialiased}\n::-webkit-scrollbar{width:5px;height:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.07);border-radius:3px}\n@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}\n@keyframes spin{to{transform:rotate(360deg)}}\n@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}\n.anim-fade{animation:fadeIn .22s ease}\n.spin{animation:spin 1s linear infinite}\n.glass-card{background:var(--glass);backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:var(--r2)}\n/* Layout */\n#app{display:flex;height:100vh;overflow:hidden}\n#sidebar{width:var(--sidebar);background:var(--bg2);border-right:1px solid var(--border);display:flex;flex-direction:column;flex-shrink:0;height:100vh;overflow-y:auto;position:sticky;top:0;transition:transform .3s}\n#main{flex:1;display:flex;flex-direction:column;min-width:0;overflow:hidden}\n#topbar{height:56px;background:var(--bg2);border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;padding:0 20px;flex-shrink:0}\n#content{flex:1;overflow-y:auto;padding:22px 24px}\n/* Sidebar */\n.sb-logo{display:flex;align-items:center;gap:10px;padding:16px;border-bottom:1px solid var(--border)}\n.sb-icon{width:32px;height:32px;border-radius:9px;background:var(--gold-gradient);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}\n.sb-brand{font-size:13px;font-weight:800;color:var(--gold);line-height:1.1}\n.sb-sub{font-size:9.5px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--text3)}\nnav{flex:1;padding:8px;overflow-y:auto}\n.nav-item{display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:8px;font-size:12.5px;font-weight:500;color:var(--text3);cursor:pointer;transition:all .15s;width:100%;background:none;border:none;text-align:left;position:relative}\n.nav-item:hover{background:rgba(255,255,255,0.05);color:var(--text)}\n.nav-item.active{background:var(--gold3);color:var(--gold);font-weight:600}\n.nav-item.active::before{content:'';position:absolute;left:0;top:4px;bottom:4px;width:2px;background:var(--gold);border-radius:0 2px 2px 0}\n.nav-icon{font-size:15px;width:20px;text-align:center}\n.sb-footer{padding:12px;border-top:1px solid var(--border)}\n.online-badge{display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:7px;font-size:11px;font-weight:700;margin-bottom:8px}\n.online-badge.on{background:var(--green2);color:var(--green);border:1px solid var(--green3)}\n.online-badge.off{background:var(--red2);color:var(--red);border:1px solid var(--red3)}\n.dot{width:6px;height:6px;border-radius:50%}\n.dot-on{background:var(--green)}\n.dot-off{background:var(--red)}\n.user-row{display:flex;align-items:center;gap:8px;padding:4px}\n.avatar{width:28px;height:28px;border-radius:7px;background:var(--gold-gradient);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#000;flex-shrink:0}\n.user-name{font-size:12px;font-weight:600;color:var(--text)}\n.user-role{font-size:10px;color:var(--text3);text-transform:capitalize}\n.btn-logout{width:100%;padding:6px 12px;border-radius:7px;font-size:11.5px;font-weight:600;text-align:left;color:var(--text3);background:none;border:none;cursor:pointer;transition:all .15s;margin-top:4px}\n.btn-logout:hover{color:var(--red);background:var(--red2)}\n/* Topbar */\n.mob-btn{display:none;width:32px;height:32px;align-items:center;justify-content:center;border-radius:8px;border:1px solid var(--border);background:none;color:var(--text3);cursor:pointer;font-size:16px}\n/* Buttons */\n.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:7px 14px;border-radius:8px;font-size:12.5px;font-weight:600;cursor:pointer;border:none;transition:all .15s;white-space:nowrap}\n.btn-primary{background:var(--gold-gradient);color:#000}\n.btn-primary:hover{opacity:.88;transform:translateY(-1px)}\n.btn-blue{background:var(--blue3);color:var(--blue);border:1px solid rgba(86,145,248,.2)}\n.btn-green{background:var(--green2);color:var(--green);border:1px solid var(--green3)}\n.btn-red{background:var(--red2);color:var(--red);border:1px solid var(--red3)}\n.btn-ghost{background:rgba(255,255,255,.05);color:var(--text2);border:1px solid var(--border2)}\n.btn-ghost:hover{background:rgba(255,255,255,.09)}\n.btn-sm{padding:4px 10px;font-size:11.5px;border-radius:6px}\n.btn:disabled{opacity:.5;cursor:not-allowed}\n/* Inputs */\n.form-group{display:flex;flex-direction:column;gap:4px}\n.form-label{font-size:11.5px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:.04em}\n.form-input{background:rgba(255,255,255,.04);border:1px solid var(--border2);border-radius:8px;padding:8px 12px;font-size:13px;color:var(--text);font-family:var(--font);outline:none;transition:border .15s;width:100%}\n.form-input:focus{border-color:var(--gold);background:rgba(201,168,76,.04)}\n.form-input::placeholder{color:var(--text3)}\nselect.form-input option{background:var(--bg2);color:var(--text)}\ntextarea.form-input{resize:vertical;min-height:72px}\n/* Grid helpers */\n.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:12px}\n.grid-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px}\n.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}\n.grid-6{display:grid;grid-template-columns:repeat(6,1fr);gap:12px}\n@media(max-width:900px){.grid-6{grid-template-columns:repeat(3,1fr)}.grid-4{grid-template-columns:repeat(2,1fr)}.grid-3{grid-template-columns:1fr 1fr}}\n@media(max-width:600px){.grid-2,.grid-3,.grid-4,.grid-6{grid-template-columns:1fr}}\n/* Modal */\n.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(4px);z-index:500;display:flex;align-items:center;justify-content:center;padding:16px}\n.modal-box{background:var(--bg2);border:1px solid var(--border2);border-radius:var(--r2);width:100%;max-height:90vh;overflow-y:auto;box-shadow:var(--shadow2);animation:fadeIn .2s ease}\n.modal-sm{max-width:400px}.modal-md{max-width:540px}.modal-lg{max-width:720px}.modal-xl{max-width:900px}\n.modal-hdr{display:flex;align-items:center;justify-content:space-between;padding:18px 20px 14px;border-bottom:1px solid var(--border);position:sticky;top:0;background:var(--bg2);z-index:1}\n.modal-title{font-size:15px;font-weight:700;color:var(--text);font-family:var(--font-serif)}\n.modal-body{padding:20px}\n.btn-close{width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;border:none;background:rgba(255,255,255,.06);color:var(--text3);cursor:pointer;font-size:16px;line-height:1}\n.btn-close:hover{background:var(--red2);color:var(--red)}\n/* Table */\n.table-wrap{overflow-x:auto;border-radius:var(--r2);border:1px solid var(--border)}\ntable{width:100%;border-collapse:collapse}\nthead tr{background:rgba(255,255,255,.03)}\nth{padding:10px 14px;text-align:left;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text3);white-space:nowrap;border-bottom:1px solid var(--border)}\ntd{padding:9px 14px;font-size:12.5px;color:var(--text2);border-bottom:1px solid rgba(255,255,255,.025)}\ntr:last-child td{border-bottom:none}\ntr:hover td{background:rgba(255,255,255,.02);color:var(--text)}\n/* Badge */\n.badge{display:inline-flex;align-items:center;padding:2px 8px;border-radius:5px;font-size:10.5px;font-weight:700;text-transform:capitalize}\n/* KPI card */\n.kpi{background:var(--glass);border:1px solid var(--border);border-radius:var(--r2);padding:14px 16px}\n.kpi-val{font-size:22px;font-weight:800;font-family:var(--font-mono);line-height:1.1}\n.kpi-label{font-size:11px;color:var(--text3);font-weight:600;margin-top:2px}\n/* Page header */\n.page-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:10px}\n.page-title{font-size:20px;font-weight:700;color:var(--text);font-family:var(--font-serif)}\n.page-sub{font-size:12px;color:var(--text3);margin-top:1px}\n/* Filters row */\n.filters{display:flex;gap:10px;margin-bottom:14px;flex-wrap:wrap;align-items:center}\n.search-wrap{position:relative;flex:1;min-width:160px}\n.search-icon{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--text3);font-size:14px;pointer-events:none}\n.search-input{padding-left:30px!important}\n/* Progress */\n.progress-bar{height:4px;background:rgba(255,255,255,.06);border-radius:2px;margin-top:4px;overflow:hidden}\n.progress-fill{height:100%;border-radius:2px;transition:width .4s}\n/* Toast */\n#toast-container{position:fixed;top:18px;right:18px;z-index:9999;display:flex;flex-direction:column;gap:8px}\n.toast{padding:10px 16px;border-radius:9px;font-size:12.5px;font-weight:600;box-shadow:var(--shadow2);animation:fadeIn .25s ease;max-width:300px}\n.toast-success{background:#0d2a1a;color:var(--green);border:1px solid var(--green3)}\n.toast-error{background:#2a0d0d;color:var(--red);border:1px solid var(--red3)}\n.toast-info{background:var(--bg3);color:var(--text);border:1px solid var(--border2)}\n/* Login page */\n#login-page{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:16px;background:var(--bg);overflow:auto}\n.login-card{width:100%;max-width:380px;animation:fadeIn .3s ease}\n.mode-toggle{display:flex;border-radius:9px;padding:4px;margin-bottom:18px;background:var(--bg3)}\n.mode-btn{flex:1;padding:6px;border-radius:7px;border:none;font-size:12.5px;font-weight:600;cursor:pointer;transition:all .15s;color:var(--text3);background:none}\n.mode-btn.active{background:var(--gold3);color:var(--gold)}\n/* Tabs */\n.tabs{display:flex;gap:0;border-bottom:1px solid var(--border);margin-bottom:0}\n.tab-btn{padding:8px 14px;font-size:12.5px;font-weight:600;color:var(--text3);background:none;border:none;cursor:pointer;border-bottom:2px solid transparent;transition:all .15s;margin-bottom:-1px}\n.tab-btn.active{color:var(--gold);border-bottom-color:var(--gold)}\n/* Confirm dialog */\n.confirm-overlay{position:fixed;inset:0;background:rgba(0,0,0,.65);z-index:600;display:flex;align-items:center;justify-content:center}\n.confirm-box{background:var(--bg2);border:1px solid var(--border2);border-radius:var(--r2);padding:24px;max-width:380px;width:90%;box-shadow:var(--shadow2)}\n/* Responsive sidebar */\n@media(max-width:768px){\n  :root{--sidebar:0px}\n  #sidebar{position:fixed!important;left:0;top:0;z-index:300;width:260px!important;transform:translateX(-100%);transition:transform .3s}\n  #sidebar.open{transform:translateX(0)}\n  .mob-overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:299}\n  .mob-btn{display:flex}\n  #topbar{padding:0 14px}\n}\n/* Empty state */\n.empty{text-align:center;padding:40px 20px;color:var(--text3)}\n.empty-icon{font-size:36px;margin-bottom:8px}\n/* Messages */\n.msg-thread{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:8px;cursor:pointer;transition:background .15s}\n.msg-thread:hover{background:rgba(255,255,255,.04)}\n.msg-thread.active{background:var(--gold4)}\n.msg-bubble{max-width:75%;padding:8px 12px;border-radius:10px;font-size:13px;line-height:1.5}\n.msg-bubble.mine{background:var(--gold3);color:var(--text);border-bottom-right-radius:3px;margin-left:auto}\n.msg-bubble.theirs{background:rgba(255,255,255,.07);color:var(--text2);border-bottom-left-radius:3px}\n.msg-time{font-size:10px;color:var(--text3);margin-top:2px}\n</style>\n</head>\n<body>\n\n<div id=\"toast-container\"></div>\n<div id=\"mob-overlay\" class=\"mob-overlay\" style=\"display:none\" onclick=\"closeSidebar()\"></div>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<!-- LOGIN PAGE -->\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<div id=\"login-page\" style=\"display:none\">\n  <div class=\"login-card\">\n    <div style=\"text-align:center;margin-bottom:24px\">\n      <div style=\"margin:0 auto 12px;width:64px;height:64px;border-radius:16px;background:var(--gold-gradient);display:flex;align-items:center;justify-content:center;box-shadow:0 6px 24px rgba(201,168,76,0.35)\">\n        <svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M18 3L4 10v4c0 8.8 5.9 17 14 19.4C26.1 31 32 22.8 32 14v-4L18 3z\" fill=\"rgba(0,0,0,0.3)\" stroke=\"rgba(0,0,0,0.5)\" stroke-width=\"0.5\"/>\n          <path d=\"M18 4.5L5 11v3.5c0 8.2 5.5 15.8 13 18.1C25.5 30.3 31 22.7 31 14.5V11L18 4.5z\" fill=\"none\" stroke=\"#000\" stroke-width=\"0.3\"/>\n          <line x1=\"7\" y1=\"20\" x2=\"29\" y2=\"20\" stroke=\"#000\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n          <circle cx=\"18\" cy=\"20\" r=\"1.5\" fill=\"#000\"/>\n          <line x1=\"18\" y1=\"10\" x2=\"18\" y2=\"20\" stroke=\"#000\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n          <line x1=\"10\" y1=\"15\" x2=\"26\" y2=\"15\" stroke=\"#000\" stroke-width=\"1\" stroke-linecap=\"round\" opacity=\"0.6\"/>\n          <circle cx=\"10\" cy=\"15\" r=\"2.5\" fill=\"#000\" opacity=\"0.85\"/>\n          <circle cx=\"26\" cy=\"15\" r=\"2.5\" fill=\"#000\" opacity=\"0.85\"/>\n        </svg>\n      </div>\n      <h1 style=\"font-size:22px;font-weight:800;color:var(--gold);font-family:var(--font-serif);letter-spacing:-0.3px\">OM Associates</h1>\n      <p style=\"font-size:11.5px;color:var(--text3);margin-top:3px;letter-spacing:0.08em;text-transform:uppercase;font-weight:600\">Professional CRM Portal</p>\n    </div>\n    <div class=\"glass-card\" style=\"padding:28px\">\n      <div class=\"mode-toggle\">\n        <button class=\"mode-btn active\" id=\"mode-pwd\" onclick=\"setLoginMode('password')\">\ud83d\udd11 Password</button>\n        <button class=\"mode-btn\" id=\"mode-otp\" onclick=\"setLoginMode('otp')\">\ud83d\udcf1 OTP</button>\n        <button class=\"mode-btn\" id=\"mode-forgot\" onclick=\"setLoginMode('forgot')\" style=\"font-size:11px\">\ud83d\udd13 Reset</button>\n      </div>\n      <!-- Password form -->\n      <div id=\"pwd-form\">\n        <div class=\"form-group\" style=\"margin-bottom:14px\">\n          <label class=\"form-label\">Username / Mobile</label>\n          <input class=\"form-input\" id=\"login-user\" placeholder=\"admin\" onkeydown=\"if(event.key==='Enter')doLogin()\">\n        </div>\n        <div class=\"form-group\" style=\"margin-bottom:16px\">\n          <label class=\"form-label\">Password</label>\n          <input class=\"form-input\" id=\"login-pass\" type=\"password\" placeholder=\"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\" onkeydown=\"if(event.key==='Enter')doLogin()\">\n        </div>\n        <div id=\"login-err\" style=\"color:var(--red);font-size:12px;text-align:center;margin-bottom:10px;display:none\"></div>\n        <button class=\"btn btn-primary\" style=\"width:100%\" onclick=\"doLogin()\" id=\"login-btn\">Sign In \u2192</button>\n        <div style=\"text-align:center;margin-top:12px\">\n          <button onclick=\"setLoginMode('forgot')\" style=\"background:none;border:none;color:var(--gold);font-size:12px;cursor:pointer;text-decoration:underline\">Forgot Password?</button>\n        </div>\n      </div>\n      <!-- OTP form -->\n      <div id=\"otp-form\" style=\"display:none\">\n        <div id=\"otp-step1\">\n          <div class=\"form-group\" style=\"margin-bottom:14px\">\n            <label class=\"form-label\">Mobile Number</label>\n            <input class=\"form-input\" id=\"otp-mobile\" type=\"tel\" placeholder=\"9999999999\" onkeydown=\"if(event.key==='Enter')sendOtp()\">\n          </div>\n          <div id=\"otp-err\" style=\"color:var(--red);font-size:12px;text-align:center;margin-bottom:10px;display:none\"></div>\n          <button class=\"btn btn-primary\" style=\"width:100%\" onclick=\"sendOtp()\" id=\"send-otp-btn\">Send OTP</button>\n        </div>\n        <div id=\"otp-step2\" style=\"display:none\">\n          <p style=\"font-size:12.5px;color:var(--text3);text-align:center;margin-bottom:14px\">OTP sent to <span style=\"color:var(--gold)\" id=\"otp-mobile-display\"></span></p>\n          <div class=\"form-group\" style=\"margin-bottom:14px\">\n            <label class=\"form-label\">Enter 6-digit OTP</label>\n            <input class=\"form-input\" id=\"otp-code\" type=\"tel\" placeholder=\"000000\" maxlength=\"6\" onkeydown=\"if(event.key==='Enter')verifyOtp()\">\n          </div>\n          <div id=\"otp-err2\" style=\"color:var(--red);font-size:12px;text-align:center;margin-bottom:10px;display:none\"></div>\n          <button class=\"btn btn-primary\" style=\"width:100%;margin-bottom:10px\" onclick=\"verifyOtp()\" id=\"verify-otp-btn\">Verify & Login</button>\n          <div style=\"text-align:center;font-size:11.5px\">\n            <span id=\"otp-timer\" style=\"color:var(--text3)\"></span>\n            <button id=\"resend-btn\" onclick=\"sendOtp()\" style=\"display:none;background:none;border:none;color:var(--gold);font-weight:600;cursor:pointer;font-size:11.5px\">Resend OTP</button>\n            <span style=\"color:var(--text3);margin:0 8px\">\u00b7</span>\n            <button onclick=\"$('otp-step2').style.display='none';$('otp-step1').style.display=''\" style=\"background:none;border:none;color:var(--text3);font-size:11.5px;cursor:pointer\">Change Number</button>\n          </div>\n        </div>\n      </div>\n      <!-- Forgot Password form -->\n      <div id=\"forgot-form\" style=\"display:none\">\n        <div id=\"fp-step1\">\n          <p style=\"font-size:12.5px;color:var(--text3);text-align:center;margin-bottom:14px\">Enter your <strong style=\"color:var(--text)\">username</strong> or <strong style=\"color:var(--text)\">mobile number</strong> to receive OTP</p>\n          <div class=\"form-group\" style=\"margin-bottom:14px\">\n            <label class=\"form-label\">Username / Mobile</label>\n            <input class=\"form-input\" id=\"fp-identifier\" placeholder=\"admin  or  9999999999\" onkeydown=\"if(event.key==='Enter')sendForgotOtp()\">\n          </div>\n          <div id=\"fp-err1\" style=\"color:var(--red);font-size:12px;text-align:center;margin-bottom:10px;display:none\"></div>\n          <button class=\"btn btn-primary\" style=\"width:100%;margin-bottom:10px\" onclick=\"sendForgotOtp()\" id=\"fp-send-btn\">Send OTP \u2192</button>\n          <div style=\"text-align:center\"><button onclick=\"setLoginMode('password')\" style=\"background:none;border:none;color:var(--text3);font-size:12px;cursor:pointer\">\u2190 Back to Login</button></div>\n        </div>\n        <div id=\"fp-step2\" style=\"display:none\">\n          <p style=\"font-size:12.5px;color:var(--text3);text-align:center;margin-bottom:14px\">OTP sent to <span style=\"color:var(--gold)\" id=\"fp-mobile-display\"></span></p>\n          <div class=\"form-group\" style=\"margin-bottom:12px\">\n            <label class=\"form-label\">6-Digit OTP</label>\n            <input class=\"form-input\" id=\"fp-otp\" type=\"tel\" placeholder=\"000000\" maxlength=\"6\">\n          </div>\n          <div class=\"form-group\" style=\"margin-bottom:12px\">\n            <label class=\"form-label\">New Password</label>\n            <input class=\"form-input\" id=\"fp-newpass\" type=\"password\" placeholder=\"Min 6 characters\">\n          </div>\n          <div class=\"form-group\" style=\"margin-bottom:14px\">\n            <label class=\"form-label\">Confirm Password</label>\n            <input class=\"form-input\" id=\"fp-confirmpass\" type=\"password\" placeholder=\"Re-enter password\" onkeydown=\"if(event.key==='Enter')doResetPassword()\">\n          </div>\n          <div id=\"fp-err2\" style=\"color:var(--red);font-size:12px;text-align:center;margin-bottom:10px;display:none\"></div>\n          <button class=\"btn btn-primary\" style=\"width:100%;margin-bottom:10px\" onclick=\"doResetPassword()\" id=\"fp-reset-btn\">Reset Password \u2192</button>\n          <div style=\"text-align:center;font-size:11.5px;display:flex;align-items:center;justify-content:center;gap:12px\">\n            <span id=\"fp-timer\" style=\"color:var(--text3)\"></span>\n            <button id=\"fp-resend-btn\" onclick=\"sendForgotOtp()\" style=\"display:none;background:none;border:none;color:var(--gold);font-weight:600;cursor:pointer;font-size:11.5px\">Resend OTP</button>\n            <button onclick=\"$('fp-step2').style.display='none';$('fp-step1').style.display=''\" style=\"background:none;border:none;color:var(--text3);font-size:11.5px;cursor:pointer\">\u2190 Change</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <p style=\"text-align:center;font-size:11px;color:var(--text3);margin-top:14px\">Admin: admin / Admin@2024 \u00b7 OTP for clients</p>\n  </div>\n</div>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<!-- MAIN APP -->\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<div id=\"app\" style=\"display:none\">\n  <!-- Sidebar -->\n  <aside id=\"sidebar\">\n    <div class=\"sb-logo\">\n      <div class=\"sb-icon\">\u2696</div>\n      <div><div class=\"sb-brand\">OM Associates</div><div class=\"sb-sub\">CRM v2.0</div></div>\n    </div>\n    <nav id=\"nav-menu\"></nav>\n    <div class=\"sb-footer\">\n      <div class=\"online-badge on\" id=\"online-badge\"><div class=\"dot dot-on\" id=\"online-dot\"></div><span id=\"online-label\">Online</span></div>\n      <div class=\"user-row\">\n        <div class=\"avatar\" id=\"user-avatar\">A</div>\n        <div style=\"flex:1;min-width:0\"><div class=\"user-name\" id=\"user-name-label\">Admin</div><div class=\"user-role\" id=\"user-role-label\">admin</div></div>\n        <button onclick=\"toggleTheme()\" style=\"background:none;border:none;cursor:pointer;font-size:16px\" id=\"theme-btn\" title=\"Toggle theme\">\u2600\ufe0f</button>\n      </div>\n      <button class=\"btn-logout\" onclick=\"doLogout()\">\u238b Sign Out</button>\n    </div>\n  </aside>\n\n  <!-- Main -->\n  <div id=\"main\">\n    <header id=\"topbar\">\n      <button class=\"mob-btn\" onclick=\"openSidebar()\">\u2630</button>\n      <span style=\"color:var(--gold);font-weight:700;font-size:14px\" class=\"mob-btn\">OM Associates</span>\n      <span id=\"page-title-label\" style=\"font-size:12.5px;font-weight:600;color:var(--text3)\"></span>\n      <div style=\"display:flex;align-items:center;gap:12px\">\n        <span id=\"offline-badge\" style=\"display:none;font-size:11px;font-weight:700;padding:3px 8px;border-radius:6px;background:var(--orange2);color:var(--orange)\">\u26a0 Offline</span>\n        <span style=\"font-size:12px;color:var(--text3)\" id=\"topbar-user\"></span>\n      </div>\n    </header>\n    <main id=\"content\"></main>\n  </div>\n</div>\n\n<!-- Modal container -->\n<div id=\"modal-root\"></div>\n\n<script>\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n// GLOBALS & CONFIG\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nconst API_BASE = ''; // same-origin (worker serves API at root)\nlet currentUser = null;\nlet currentToken = null;\nlet darkMode = true;\nlet chartInst = null;\nlet otpTimer = null;\nlet otpTimerVal = 0;\n\nconst TOKEN_KEY = 'om_crm_token';\nconst USER_KEY  = 'om_crm_user';\n\nfunction $(id){ return document.getElementById(id); }\n\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n// API CLIENT\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nclass ApiError extends Error {\n  constructor(status, message){ super(message); this.status=status; }\n}\n\nasync function req(path, opts={}) {\n  const headers = { 'Content-Type':'application/json', ...(opts.headers||{}) };\n  if (currentToken) headers['Authorization'] = `Bearer ${currentToken}`;\n  let attempts = 0;\n  while (attempts <= 2) {\n    try {\n      const res = await fetch(API_BASE + path, { ...opts, headers });\n      if (res.status === 401) { if(path!=='/auth/login'){ doLogout(true); } throw new ApiError(401,'Session expired'); }\n      const data = await res.json().catch(()=>({}));\n      if (!res.ok) throw new ApiError(res.status, data?.error || `HTTP ${res.status}`);\n      return data;\n    } catch(e) {\n      if (e instanceof ApiError && e.status < 500) throw e;\n      if (attempts++ >= 2) throw e;\n      await new Promise(r=>setTimeout(r,300*attempts));\n    }\n  }\n}\n\nconst api = {\n  get: (p) => req(p),\n  post: (p,b) => req(p,{method:'POST',body:JSON.stringify(b)}),\n  put:  (p,b) => req(p,{method:'PUT',body:JSON.stringify(b)}),\n  del:  (p)   => req(p,{method:'DELETE'}),\n};\n\nconst qs = (p={}) => { const s=new URLSearchParams(); Object.entries(p).forEach(([k,v])=>v!==undefined&&v!==''&&s.set(k,v)); const t=s.toString(); return t?`?${t}`:''; };\n\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n// AUTH\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nfunction saveAuth(user, token) {\n  currentUser = user; currentToken = token;\n  localStorage.setItem(TOKEN_KEY, token);\n  localStorage.setItem(USER_KEY, JSON.stringify(user));\n}\n\nfunction loadAuth() {\n  const t = localStorage.getItem(TOKEN_KEY);\n  const u = localStorage.getItem(USER_KEY);\n  if (t && u) { try { currentToken=t; currentUser=JSON.parse(u); return true; } catch {} }\n  return false;\n}\n\nfunction doLogout(silent=false) {\n  if (!silent) api.post('/auth/logout',{}).catch(()=>{});\n  currentUser=null; currentToken=null;\n  localStorage.removeItem(TOKEN_KEY); localStorage.removeItem(USER_KEY);\n  showLogin();\n}\n\nasync function doLogin() {\n  const u = $('login-user').value.trim(), p = $('login-pass').value;\n  if (!u||!p) { showErr('login-err','Enter username and password'); return; }\n  setLoading('login-btn',true);\n  try {\n    const res = await api.post('/auth/login',{username:u,password:p});\n    saveAuth(res.data.user, res.data.token);\n    toast(`Welcome back, ${res.data.user.name}!`,'success');\n    showApp();\n  } catch(e){ showErr('login-err',e.message); }\n  setLoading('login-btn',false);\n}\n\nasync function sendOtp() {\n  const mobile = $('otp-mobile').value.trim();\n  if (!/^\\d{10}$/.test(mobile)) { showErr('otp-err','Enter valid 10-digit number'); return; }\n  setLoading('send-otp-btn',true);\n  try {\n    const res = await api.post('/auth/otp/send',{mobile});\n    toast('OTP sent!','success');\n    $('otp-mobile-display').textContent = `+91-${mobile}`;\n    $('otp-step1').style.display='none';\n    $('otp-step2').style.display='';\n    if (res.data?.otp) $('otp-code').value = res.data.otp;\n    startOtpTimer();\n  } catch(e){ showErr('otp-err',e.message); }\n  setLoading('send-otp-btn',false);\n}\n\nasync function verifyOtp() {\n  const mobile=$('otp-mobile').value.trim(), otp=$('otp-code').value.trim();\n  if (otp.length!==6) { showErr('otp-err2','Enter 6-digit OTP'); return; }\n  setLoading('verify-otp-btn',true);\n  try {\n    const res = await api.post('/auth/otp/verify',{mobile,otp});\n    saveAuth(res.data.user, res.data.token);\n    toast(`Welcome, ${res.data.user.name}!`,'success');\n    showApp();\n  } catch(e){ showErr('otp-err2',e.message); }\n  setLoading('verify-otp-btn',false);\n}\n\nfunction startOtpTimer() {\n  otpTimerVal=60; clearInterval(otpTimer);\n  const tick=()=>{\n    if(otpTimerVal<=0){ $('otp-timer').textContent=''; $('resend-btn').style.display=''; clearInterval(otpTimer); return; }\n    $('otp-timer').textContent=`Resend in ${otpTimerVal}s`;\n    $('resend-btn').style.display='none'; otpTimerVal--;\n  };\n  tick(); otpTimer=setInterval(tick,1000);\n}\n\nfunction setLoginMode(mode) {\n  $('pwd-form').style.display=mode==='password'?'':'none';\n  $('otp-form').style.display=mode==='otp'?'':'none';\n  $('forgot-form').style.display=mode==='forgot'?'':'none';\n  $('mode-pwd').classList.toggle('active',mode==='password');\n  $('mode-otp').classList.toggle('active',mode==='otp');\n  $('mode-forgot').classList.toggle('active',mode==='forgot');\n  if (mode==='forgot') {\n    $('fp-step1').style.display='';\n    $('fp-step2').style.display='none';\n    hideErr('fp-err1'); hideErr('fp-err2');\n  }\n}\n\nlet fpTimer=null, fpTimerVal=0, fpMobile='';\n\nasync function sendForgotOtp() {\n  const identifier=($('fp-identifier')||$('fp-mobile'))?.value.trim();\n  if (!identifier) { showErr('fp-err1','Enter username or mobile number'); return; }\n  setLoading('fp-send-btn',true); hideErr('fp-err1');\n  try {\n    const res = await api.post('/auth/forgot-password',{username:identifier, mobile:identifier});\n    fpMobile = res.data?.mobile || identifier; // server returns actual mobile\n    const masked = res.data?.masked_mobile || identifier;\n    toast('OTP sent!','success');\n    $('fp-mobile-display').textContent = masked;\n    $('fp-step1').style.display='none';\n    $('fp-step2').style.display='';\n    if (res.data?.otp) $('fp-otp').value=res.data.otp;\n    fpTimerVal=60; clearInterval(fpTimer);\n    const tick=()=>{\n      if(fpTimerVal<=0){ $('fp-timer').textContent=''; $('fp-resend-btn').style.display=''; clearInterval(fpTimer); return; }\n      $('fp-timer').textContent=`Resend in ${fpTimerVal}s`; $('fp-resend-btn').style.display='none'; fpTimerVal--;\n    };\n    tick(); fpTimer=setInterval(tick,1000);\n  } catch(e){ showErr('fp-err1',e.message||'User not found'); }\n  setLoading('fp-send-btn',false);\n}\n\nasync function doResetPassword() {\n  const otp=$('fp-otp').value.trim();\n  const np=$('fp-newpass').value;\n  const cp=$('fp-confirmpass').value;\n  if (otp.length!==6) { showErr('fp-err2','Enter 6-digit OTP'); return; }\n  if (np.length<6) { showErr('fp-err2','Password must be at least 6 characters'); return; }\n  if (np!==cp) { showErr('fp-err2','Passwords do not match'); return; }\n  setLoading('fp-reset-btn',true); hideErr('fp-err2');\n  try {\n    await api.post('/auth/reset-password',{mobile:fpMobile, otp, new_password:np});\n    toast('\u2705 Password reset! Please login with new password.','success');\n    clearInterval(fpTimer);\n    setLoginMode('password');\n  } catch(e){ showErr('fp-err2',e.message||'Reset failed. Try again.'); }\n  setLoading('fp-reset-btn',false);\n}\n\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n// NAV\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nconst NAV = [\n  {id:'dashboard', label:'Dashboard',   icon:'\u26a1', roles:['admin','staff','client']},\n  {id:'clients',   label:'Clients',     icon:'\ud83d\udc65', roles:['admin','staff']},\n  {id:'services',  label:'Services',    icon:'\u2699\ufe0f', roles:['admin','staff','client']},\n  {id:'tasks',     label:'Work Orders', icon:'\u2705', roles:['admin','staff','client']},\n  {id:'invoices',  label:'Invoices',    icon:'\ud83e\uddfe', roles:['admin','staff','client']},\n  {id:'payments',  label:'Payments',    icon:'\ud83d\udcb3', roles:['admin','staff','client']},\n  {id:'messages',  label:'Messages',    icon:'\ud83d\udcac', roles:['admin','staff','client']},\n  {id:'users',     label:'Team',        icon:'\ud83d\udc64', roles:['admin']},\n  {id:'settings',  label:'Settings',    icon:'\u2699',  roles:['admin']},\n];\n\nlet currentPage = 'dashboard';\n\nfunction navigate(page) {\n  currentPage = page;\n  // Update nav\n  document.querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.page===page));\n  const item = NAV.find(n=>n.id===page);\n  $('page-title-label').textContent = item?.label||page;\n  closeSidebar();\n  renderPage(page);\n}\n\nfunction buildNav() {\n  const role = currentUser?.role;\n  $('nav-menu').innerHTML = NAV.filter(n=>n.roles.includes(role)).map(n=>`\n    <button class=\"nav-item\" data-page=\"${n.id}\" onclick=\"navigate('${n.id}')\">\n      <span class=\"nav-icon\">${n.icon}</span>${n.label}\n    </button>`).join('');\n  $('user-avatar').textContent = (currentUser?.name||'?')[0].toUpperCase();\n  $('user-name-label').textContent = currentUser?.name||'';\n  $('user-role-label').textContent = currentUser?.role||'';\n  $('topbar-user').textContent = currentUser?.name||'';\n  updateThemeBtn();\n}\n\nfunction openSidebar(){ $('sidebar').classList.add('open'); $('mob-overlay').style.display=''; }\nfunction closeSidebar(){ $('sidebar').classList.remove('open'); $('mob-overlay').style.display='none'; }\n\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n// SHOW / HIDE\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nfunction showLogin() {\n  $('login-page').style.display='flex'; $('app').style.display='none';\n  $('login-user').value=''; $('login-pass').value=''; $('otp-mobile').value=''; $('otp-code').value='';\n  const fpi=$('fp-identifier'); if(fpi) fpi.value='';\n  const fpo=$('fp-otp'); if(fpo) fpo.value='';\n  fpMobile=''; clearInterval(fpTimer);\n  hideErr('login-err'); hideErr('fp-err1'); hideErr('fp-err2');\n  setLoginMode('password');\n}\n\nfunction showApp() {\n  $('login-page').style.display='none'; $('app').style.display='flex';\n  buildNav(); navigate('dashboard');\n}\n\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n// HELPERS\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nfunction toast(msg, type='info') {\n  const el=document.createElement('div');\n  el.className=`toast toast-${type}`; el.textContent=msg;\n  $('toast-container').appendChild(el);\n  setTimeout(()=>el.remove(),3500);\n}\nfunction showErr(id,msg){ const el=$(id); el.textContent=msg; el.style.display=''; }\nfunction hideErr(id){ const el=$(id); if(el){el.style.display='none';} }\nfunction setLoading(id,on){ const el=$(id); if(!el) return; el.disabled=on; el.style.opacity=on?.65:1; }\nfunction fmtMoney(n){ return '\u20b9'+(Number(n)||0).toLocaleString('en-IN',{maximumFractionDigits:0}); }\nfunction fmtDate(d){ if(!d) return '\u2014'; try{return new Date(d).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}catch{return d} }\nfunction fmtDateTime(d){ if(!d) return '\u2014'; try{return new Date(d).toLocaleString('en-IN',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})}catch{return d} }\n\nfunction badge(status) {\n  const s=(status||'').toLowerCase();\n  const map={paid:'green2/green',unpaid:'red2/red',partial:'orange2/orange',overdue:'red2/red',pending:'orange2/orange',\n    in_progress:'blue2/blue',review:'gold3/gold',completed:'green2/green',cancelled:'red2/red',\n    active:'green2/green',inactive:'bg3/text3',high:'red2/red',medium:'orange2/orange',low:'green2/green',success:'green2/green',failed:'red2/red'};\n  const [bg,fg]=(map[s]||'bg3/text3').split('/');\n  return `<span class=\"badge\" style=\"background:var(--${bg});color:var(--${fg})\">${status||'\u2014'}</span>`;\n}\n\nfunction modal(content, size='md') {\n  closeModal();\n  const div=document.createElement('div');\n  div.className='modal-overlay'; div.id='active-modal';\n  div.innerHTML=`<div class=\"modal-box modal-${size}\" onclick=\"event.stopPropagation()\">${content}</div>`;\n  div.onclick=(e)=>{ if(e.target===div) closeModal(); };\n  document.body.appendChild(div);\n}\nfunction closeModal(){ const m=$('active-modal'); if(m) m.remove(); }\n\nfunction confirm2(title, msg, onConfirm, danger=false) {\n  const div=document.createElement('div');\n  div.className='confirm-overlay'; div.id='confirm-modal';\n  div.innerHTML=`\n    <div class=\"confirm-box\">\n      <div style=\"font-size:16px;font-weight:700;color:var(--text);margin-bottom:8px\">${title}</div>\n      <p style=\"font-size:13px;color:var(--text2);margin-bottom:20px\">${msg}</p>\n      <div style=\"display:flex;gap:10px;justify-content:flex-end\">\n        <button class=\"btn btn-ghost\" onclick=\"$('confirm-modal').remove()\">Cancel</button>\n        <button class=\"btn ${danger?'btn-red':'btn-primary'}\" onclick=\"$('confirm-modal').remove();(${onConfirm.toString()})()\">Confirm</button>\n      </div>\n    </div>`;\n  document.body.appendChild(div);\n}\n\nfunction spinner(){ return `<div style=\"display:flex;align-items:center;justify-content:center;padding:48px\"><div class=\"spin\" style=\"width:32px;height:32px;border:3px solid var(--border2);border-top-color:var(--gold);border-radius:50%\"></div></div>`; }\nfunction empty(icon='\ud83d\udccb',text='No data found'){ return `<div class=\"empty\"><div class=\"empty-icon\">${icon}</div><p>${text}</p></div>`; }\n\nfunction progressBar(val){ return `<div class=\"progress-bar\"><div class=\"progress-fill\" style=\"width:${val||0}%;background:var(--gold)\"></div></div>`; }\n\nfunction toggleTheme(){\n  darkMode=!darkMode;\n  document.documentElement.className=darkMode?'':'light';\n  updateThemeBtn();\n  localStorage.setItem('om_crm_theme',darkMode?'dark':'light');\n}\nfunction updateThemeBtn(){ const b=$('theme-btn'); if(b) b.textContent=darkMode?'\u2600\ufe0f':'\ud83c\udf19'; }\n\n// Online detection\nfunction updateOnline(){\n  const on=navigator.onLine;\n  const badge=$('online-badge'), dot=$('online-dot'), label=$('online-label'), offBadge=$('offline-badge');\n  if(badge){ badge.className=`online-badge ${on?'on':'off'}`; dot.className=`dot ${on?'dot-on':'dot-off'}`; label.textContent=on?'Online':'Offline'; }\n  if(offBadge) offBadge.style.display=on?'none':'';\n}\nwindow.addEventListener('online',updateOnline);\nwindow.addEventListener('offline',updateOnline);\n\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n// PAGES\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nfunction renderPage(page) {\n  const el=$('content');\n  el.innerHTML=spinner();\n  switch(page){\n    case 'dashboard': renderDashboard(); break;\n    case 'clients':   renderClients();   break;\n    case 'services':  renderServices();  break;\n    case 'invoices':  renderInvoices();  break;\n    case 'tasks':     renderTasks();     break;\n    case 'payments':  renderPayments();  break;\n    case 'messages':  renderMessages();  break;\n    case 'users':     renderUsers();     break;\n    case 'settings':  renderSettings();  break;\n    default: el.innerHTML=`<p>Page not found</p>`;\n  }\n}\n\n// \u2500\u2500\u2500 DASHBOARD \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nasync function renderDashboard() {\n  try {\n    const [statsRes, ideasRes] = await Promise.all([api.get('/dashboard/stats'), api.get('/dashboard/ideas')]);\n    const s = statsRes.data||{};\n    const ideas = ideasRes.data||[];\n    const isAdmin = currentUser?.role==='admin';\n\n    $('content').innerHTML = `\n    <div class=\"anim-fade\">\n      <div class=\"page-hdr\">\n        <div><div class=\"page-title\">Dashboard</div><div class=\"page-sub\">Welcome, ${currentUser?.name} \u00b7 ${new Date().toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long'})}</div></div>\n        ${isAdmin?`<button class=\"btn btn-primary btn-sm\" onclick=\"openIdeaModal()\">\uff0b Post Idea</button>`:''}\n      </div>\n\n      <div class=\"grid-6\" style=\"margin-bottom:18px\">\n        <div class=\"kpi\"><div class=\"kpi-val\" style=\"color:var(--gold)\">${s.clients||0}</div><div class=\"kpi-label\">\ud83d\udc65 Total Clients</div></div>\n        <div class=\"kpi\"><div class=\"kpi-val\" style=\"color:var(--teal)\">${s.services||0}</div><div class=\"kpi-label\">\u2699\ufe0f Services</div></div>\n        <div class=\"kpi\"><div class=\"kpi-val\" style=\"color:var(--blue)\">${s.open_tasks||0}</div><div class=\"kpi-label\">\u2705 Open Tasks</div></div>\n        <div class=\"kpi\"><div class=\"kpi-val\" style=\"color:var(--purple)\">${fmtMoney(s.total_billed)}</div><div class=\"kpi-label\">\ud83d\udcb3 Total Billed</div></div>\n        <div class=\"kpi\"><div class=\"kpi-val\" style=\"color:var(--green)\">${fmtMoney(s.total_paid)}</div><div class=\"kpi-label\">\u2713 Collected</div></div>\n        <div class=\"kpi\"><div class=\"kpi-val\" style=\"color:var(--red)\">${fmtMoney(s.outstanding)}</div><div class=\"kpi-label\">\u26a0\ufe0f Outstanding</div></div>\n      </div>\n\n      <div style=\"display:grid;grid-template-columns:2fr 1fr;gap:16px;margin-bottom:18px\" id=\"chart-row\">\n        <div class=\"glass-card\" style=\"padding:16px\">\n          <div style=\"font-size:13px;font-weight:700;color:var(--text);font-family:var(--font-serif);margin-bottom:12px\">Monthly Revenue</div>\n          <div style=\"height:200px\"><canvas id=\"rev-chart\"></canvas></div>\n        </div>\n        <div class=\"glass-card\" style=\"padding:16px\">\n          <div style=\"font-size:13px;font-weight:700;color:var(--text);font-family:var(--font-serif);margin-bottom:16px\">Invoice Status</div>\n          ${[\n            {label:'Paid',val:s.paid_count||0,color:'var(--green)',total:s.total_invoices||1},\n            {label:'Partial',val:s.partial_count||0,color:'var(--orange)',total:s.total_invoices||1},\n            {label:'Unpaid',val:s.unpaid_count||0,color:'var(--red)',total:s.total_invoices||1},\n          ].map(r=>{const pct=r.total>0?Math.round(r.val/r.total*100):0;return`\n            <div style=\"margin-bottom:12px\">\n              <div style=\"display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px\">\n                <span style=\"color:var(--text2)\">${r.label}</span>\n                <span style=\"font-weight:700;color:${r.color}\">${r.val} (${pct}%)</span>\n              </div>\n              <div style=\"height:5px;background:rgba(255,255,255,.06);border-radius:3px;overflow:hidden\">\n                <div style=\"height:100%;width:${pct}%;background:${r.color};border-radius:3px;transition:width .6s\"></div>\n              </div>\n            </div>`}).join('')}\n        </div>\n      </div>\n\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:18px\">\n        <div class=\"glass-card\" style=\"padding:16px\">\n          <div style=\"display:flex;align-items:center;justify-content:space-between;margin-bottom:12px\">\n            <span style=\"font-size:13px;font-weight:700;color:var(--text);font-family:var(--font-serif)\">Recent Invoices</span>\n            <button onclick=\"navigate('invoices')\" style=\"background:none;border:none;color:var(--gold);font-size:11.5px;font-weight:600;cursor:pointer\">View all \u2192</button>\n          </div>\n          ${(s.recent_invoices||[]).length===0?empty('\ud83e\uddfe','No invoices yet'):(s.recent_invoices||[]).slice(0,5).map(inv=>`\n            <div style=\"display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--border)\">\n              <div>\n                <div style=\"font-size:12px;font-weight:600;font-family:var(--font-mono);color:var(--text)\">${inv.invoice_no}</div>\n                <div style=\"font-size:11px;color:var(--text3)\">${inv.client_name||'\u2014'}</div>\n              </div>\n              <div style=\"display:flex;align-items:center;gap:8px\">\n                <span style=\"font-size:13px;font-weight:700;font-family:var(--font-mono)\">${fmtMoney(inv.total)}</span>\n                ${badge(inv.status)}\n              </div>\n            </div>`).join('')}\n        </div>\n        <div class=\"glass-card\" style=\"padding:16px\">\n          <div style=\"display:flex;align-items:center;justify-content:space-between;margin-bottom:12px\">\n            <span style=\"font-size:13px;font-weight:700;color:var(--text);font-family:var(--font-serif)\">Pending Work</span>\n            <button onclick=\"navigate('tasks')\" style=\"background:none;border:none;color:var(--gold);font-size:11.5px;font-weight:600;cursor:pointer\">View all \u2192</button>\n          </div>\n          ${(s.pending_tasks||[]).length===0?`<div style=\"text-align:center;padding:20px;color:var(--green);font-size:13px\">All clear! \ud83c\udf89</div>`:(s.pending_tasks||[]).slice(0,5).map(t=>`\n            <div style=\"display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--border)\">\n              <div style=\"flex:1;min-width:0;margin-right:10px\">\n                <div style=\"font-size:12.5px;font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis\">${t.title}</div>\n                <div style=\"font-size:11px;color:var(--text3)\">${t.client_name||'\u2014'}</div>\n              </div>\n              ${badge(t.priority)}\n            </div>`).join('')}\n        </div>\n      </div>\n\n      ${ideas.length>0?`\n      <div>\n        <div style=\"font-size:13px;font-weight:700;color:var(--text);font-family:var(--font-serif);margin-bottom:12px\">\ud83d\udccc Announcements</div>\n        <div style=\"display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px\">\n          ${ideas.map(idea=>`\n          <div class=\"glass-card\" style=\"padding:16px;position:relative\">\n            ${isAdmin?`<button onclick=\"deleteIdea('${idea.id}')\" style=\"position:absolute;top:10px;right:10px;width:24px;height:24px;border-radius:50%;background:none;border:none;color:var(--text3);cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:all .15s\" onmouseover=\"this.style.background='var(--red2)';this.style.color='var(--red)'\" onmouseout=\"this.style.background='none';this.style.color='var(--text3)'\">\u00d7</button>`:''}\n            <div style=\"font-size:10.5px;font-weight:700;color:var(--gold);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px\">${idea.category}</div>\n            <div style=\"font-size:13.5px;font-weight:700;color:var(--text);margin-bottom:6px\">${idea.title}</div>\n            ${idea.content?`<p style=\"font-size:12.5px;color:var(--text2);margin-bottom:8px\">${idea.content}</p>`:''}\n            ${idea.youtube_url?`<div style=\"border-radius:8px;overflow:hidden;padding-bottom:56.25%;position:relative\">${(()=>{const id=idea.youtube_url.match(/(?:v=|youtu\\.be\\/)([^&?/]+)/)?.[1];return id?`<iframe src=\"https://www.youtube-nocookie.com/embed/${id}?rel=0\" style=\"position:absolute;inset:0;width:100%;height:100%\" frameborder=\"0\" allowfullscreen loading=\"lazy\"></iframe>`:''})()}</div>`:''}\n            <div style=\"font-size:10.5px;color:var(--text3);margin-top:8px\">${fmtDateTime(idea.created_at)}</div>\n          </div>`).join('')}\n        </div>\n      </div>`:''}\n    </div>`;\n\n    // Draw revenue chart\n    const canvas = document.getElementById('rev-chart');\n    if (canvas && (s.monthly_revenue||[]).length > 0) {\n      if (chartInst) { chartInst.destroy(); chartInst=null; }\n      chartInst = new Chart(canvas.getContext('2d'), {\n        type:'bar',\n        data:{\n          labels: s.monthly_revenue.map(m=>m.month),\n          datasets:[{label:'Revenue',data:s.monthly_revenue.map(m=>m.amount),backgroundColor:'rgba(201,168,76,0.4)',borderColor:'#c9a84c',borderWidth:1.5,borderRadius:5}]\n        },\n        options:{\n          responsive:true,maintainAspectRatio:false,\n          plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>`\u20b9${(ctx.raw||0).toLocaleString('en-IN')}`}}},\n          scales:{\n            x:{grid:{display:false},ticks:{color:'#526070',font:{size:11}}},\n            y:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#526070',font:{size:11},callback:v=>`\u20b9${Number(v)/1000}k`}},\n          }\n        }\n      });\n    }\n    // Responsive chart row\n    if (window.innerWidth < 700) { $('chart-row').style.gridTemplateColumns='1fr'; }\n  } catch(e){ $('content').innerHTML=`<p style=\"color:var(--red)\">Error loading dashboard: ${e.message}</p>`; }\n}\n\nasync function openIdeaModal() {\n  modal(`\n    <div class=\"modal-hdr\"><span class=\"modal-title\">\ud83d\udccc Post Announcement</span><button class=\"btn-close\" onclick=\"closeModal()\">\u00d7</button></div>\n    <div class=\"modal-body\">\n      <div class=\"form-group\" style=\"margin-bottom:12px\"><label class=\"form-label\">Title *</label><input class=\"form-input\" id=\"idea-title\" placeholder=\"Announcement title\"></div>\n      <div class=\"form-group\" style=\"margin-bottom:12px\"><label class=\"form-label\">Content</label><textarea class=\"form-input\" id=\"idea-content\" rows=\"3\" placeholder=\"Write details...\"></textarea></div>\n      <div class=\"form-group\" style=\"margin-bottom:16px\"><label class=\"form-label\">YouTube URL</label><input class=\"form-input\" id=\"idea-yt\" placeholder=\"https://youtube.com/watch?v=...\"></div>\n      <div style=\"display:flex;gap:10px;justify-content:flex-end\">\n        <button class=\"btn btn-ghost\" onclick=\"closeModal()\">Cancel</button>\n        <button class=\"btn btn-primary\" onclick=\"saveIdea()\">Post</button>\n      </div>\n    </div>`, 'md');\n}\n\nasync function saveIdea() {\n  const title=$('idea-title').value.trim();\n  if (!title) { toast('Title required','error'); return; }\n  try {\n    await api.post('/dashboard/ideas',{title,content:$('idea-content').value,youtube_url:$('idea-yt').value,category:'announcement'});\n    toast('Idea posted!','success'); closeModal(); renderDashboard();\n  } catch(e){ toast(e.message,'error'); }\n}\n\nasync function deleteIdea(id) {\n  confirm2('Delete Idea','Remove this announcement?',async function(){\n    await api.del(`/dashboard/ideas/${id}`).catch(()=>{});\n    toast('Removed','success'); renderDashboard();\n  },true);\n}\n\n// \u2500\u2500\u2500 CLIENTS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nlet clientsState = { q:'', status:'', page:1, data:[], total:0, users:[] };\n\nasync function renderClients(resetPage=false) {\n  if (resetPage) clientsState.page=1;\n  try {\n    const [res, uRes] = await Promise.all([\n      api.get(`/clients${qs({q:clientsState.q,status:clientsState.status,page:clientsState.page,limit:50})}`),\n      currentUser?.role==='admin' ? api.get('/users') : Promise.resolve({data:[]})\n    ]);\n    clientsState.data=res.data||[]; clientsState.total=res.meta?.total||0;\n    clientsState.users=uRes.data||[];\n    const role=currentUser?.role;\n    $('content').innerHTML=`\n    <div class=\"anim-fade\">\n      <div class=\"page-hdr\">\n        <div><div class=\"page-title\">Clients</div><div class=\"page-sub\">${clientsState.total} client${clientsState.total!==1?'s':''}</div></div>\n        <div style=\"display:flex;gap:8px\">\n          <button class=\"btn btn-ghost btn-sm\" onclick=\"exportCSV('clients')\">\u2b07 CSV</button>\n          ${['admin','staff'].includes(role)?`<button class=\"btn btn-primary btn-sm\" onclick=\"openClientModal()\">\uff0b Add Client</button>`:''}\n        </div>\n      </div>\n      <div class=\"filters\">\n        <div class=\"search-wrap\"><span class=\"search-icon\">\ud83d\udd0d</span><input class=\"form-input search-input\" placeholder=\"Search name, mobile, GST\u2026\" value=\"${clientsState.q}\" oninput=\"clientsState.q=this.value;renderClients(true)\"></div>\n        <select class=\"form-input\" style=\"max-width:150px\" onchange=\"clientsState.status=this.value;renderClients(true)\">\n          <option value=\"\">All Status</option>\n          <option value=\"active\" ${clientsState.status==='active'?'selected':''}>Active</option>\n          <option value=\"inactive\" ${clientsState.status==='inactive'?'selected':''}>Inactive</option>\n        </select>\n      </div>\n      <div class=\"table-wrap\">\n        <table>\n          <thead><tr><th>ID</th><th>Name</th><th>Mobile</th><th>GSTIN</th><th>Status</th><th>Assigned</th><th>Joined</th><th></th></tr></thead>\n          <tbody>\n            ${clientsState.data.length===0?`<tr><td colspan=\"8\">${empty('\ud83d\udc65','No clients found')}</td></tr>`:\n              clientsState.data.map(c=>`\n              <tr>\n                <td><span style=\"font-family:var(--font-mono);font-size:11px;background:var(--gold3);color:var(--gold);padding:2px 6px;border-radius:4px\">${c.client_no}</span></td>\n                <td><button onclick=\"open360('${c.id}')\" style=\"background:none;border:none;color:var(--blue);font-weight:600;cursor:pointer;font-size:12.5px\">${c.name}</button><div style=\"font-size:11px;color:var(--text3)\">${c.type}</div></td>\n                <td>${c.mobile||'\u2014'}</td>\n                <td style=\"font-size:11.5px\">${c.gstin||'\u2014'}</td>\n                <td>${badge(c.status)}</td>\n                <td>${c.assigned_name||'\u2014'}</td>\n                <td>${fmtDate(c.created_at)}</td>\n                <td style=\"white-space:nowrap\">\n                  ${['admin','staff'].includes(role)?`<button class=\"btn btn-blue btn-sm\" onclick=\"openClientModal('${c.id}')\">Edit</button> `:''}\n                  ${role==='admin'?`<button class=\"btn btn-red btn-sm\" onclick=\"deleteClient('${c.id}','${c.name.replace(/'/,\"\\\\'\")}')\">Del</button>`:''}\n                </td>\n              </tr>`).join('')}\n          </tbody>\n        </table>\n      </div>\n      ${clientsState.total>50?`<div style=\"display:flex;gap:8px;margin-top:14px;justify-content:center;align-items:center\">\n        <button class=\"btn btn-ghost btn-sm\" ${clientsState.page===1?'disabled':''} onclick=\"clientsState.page--;renderClients()\">\u2190 Prev</button>\n        <span style=\"font-size:12px;color:var(--text3)\">Page ${clientsState.page} of ${Math.ceil(clientsState.total/50)}</span>\n        <button class=\"btn btn-ghost btn-sm\" ${clientsState.page>=Math.ceil(clientsState.total/50)?'disabled':''} onclick=\"clientsState.page++;renderClients()\">Next \u2192</button>\n      </div>`:''}\n    </div>`;\n  } catch(e){ $('content').innerHTML=`<p style=\"color:var(--red)\">Error: ${e.message}</p>`; }\n}\n\nasync function openClientModal(id=null) {\n  let c = null;\n  if (id) { try { c=(await api.get(`/clients/${id}`)).data; } catch{} }\n  const users = clientsState.users;\n  modal(`\n    <div class=\"modal-hdr\"><span class=\"modal-title\">${c?`Edit: ${c.name}`:'Add New Client'}</span><button class=\"btn-close\" onclick=\"closeModal()\">\u00d7</button></div>\n    <div class=\"modal-body\">\n      <div class=\"grid-2\">\n        <div class=\"form-group\"><label class=\"form-label\">Full Name *</label><input class=\"form-input\" id=\"cf-name\" value=\"${c?.name||''}\"></div>\n        <div class=\"form-group\"><label class=\"form-label\">Type</label><select class=\"form-input\" id=\"cf-type\">${['Individual','Company','Partnership','LLP','Trust'].map(t=>`<option value=\"${t}\" ${(c?.type||'Individual')===t?'selected':''}>${t}</option>`).join('')}</select></div>\n        <div class=\"form-group\"><label class=\"form-label\">Mobile</label><input class=\"form-input\" id=\"cf-mobile\" type=\"tel\" value=\"${c?.mobile||''}\"></div>\n        <div class=\"form-group\"><label class=\"form-label\">Email</label><input class=\"form-input\" id=\"cf-email\" type=\"email\" value=\"${c?.email||''}\"></div>\n        <div class=\"form-group\"><label class=\"form-label\">GSTIN</label><input class=\"form-input\" id=\"cf-gstin\" value=\"${c?.gstin||''}\"></div>\n        <div class=\"form-group\"><label class=\"form-label\">PAN</label><input class=\"form-input\" id=\"cf-pan\" value=\"${c?.pan||''}\"></div>\n        <div class=\"form-group\"><label class=\"form-label\">City</label><input class=\"form-input\" id=\"cf-city\" value=\"${c?.city||''}\"></div>\n        <div class=\"form-group\"><label class=\"form-label\">State</label><input class=\"form-input\" id=\"cf-state\" value=\"${c?.state||'Telangana'}\"></div>\n        <div class=\"form-group\" style=\"grid-column:1/-1\"><label class=\"form-label\">Address</label><input class=\"form-input\" id=\"cf-address\" value=\"${c?.address||''}\"></div>\n        ${currentUser?.role==='admin'&&users.length>0?`<div class=\"form-group\"><label class=\"form-label\">Assign To</label><select class=\"form-input\" id=\"cf-assigned\"><option value=\"\">-- Select Staff --</option>${users.map(u=>`<option value=\"${u.id}\" ${c?.assigned_to===u.id?'selected':''}>${u.name}</option>`).join('')}</select></div>`:''}\n        <div class=\"form-group\"><label class=\"form-label\">Status</label><select class=\"form-input\" id=\"cf-status\"><option value=\"active\" ${(!c||c.status==='active')?'selected':''}>Active</option><option value=\"inactive\" ${c?.status==='inactive'?'selected':''}>Inactive</option></select></div>\n        <div class=\"form-group\" style=\"grid-column:1/-1\"><label class=\"form-label\">Notes</label><textarea class=\"form-input\" id=\"cf-notes\" rows=\"2\">${c?.notes||''}</textarea></div>\n      </div>\n      <div style=\"display:flex;gap:10px;justify-content:flex-end;margin-top:16px\">\n        <button class=\"btn btn-ghost\" onclick=\"closeModal()\">Cancel</button>\n        <button class=\"btn btn-primary\" id=\"save-client-btn\" onclick=\"saveClient('${id||''}')\">${c?'Update':'Create Client'}</button>\n      </div>\n    </div>`, 'xl');\n}\n\nasync function saveClient(id='') {\n  const name=$('cf-name').value.trim();\n  if (!name) { toast('Name required','error'); return; }\n  setLoading('save-client-btn',true);\n  try {\n    const body={name,type:$('cf-type').value,mobile:$('cf-mobile').value,email:$('cf-email').value,gstin:$('cf-gstin').value,pan:$('cf-pan').value,city:$('cf-city').value,state:$('cf-state').value,address:$('cf-address').value,assigned_to:$('cf-assigned')?.value||'',status:$('cf-status').value,notes:$('cf-notes').value};\n    if (id) await api.put(`/clients/${id}`,body); else await api.post('/clients',body);\n    toast(id?'Client updated!':'Client created!','success'); closeModal(); renderClients();\n  } catch(e){ toast(e.message,'error'); setLoading('save-client-btn',false); }\n}\n\nasync function deleteClient(id, name) {\n  confirm2('Delete Client',`Soft-delete \"${name}\"? Data is preserved.`,async function(){\n    try { await api.del(`/clients/${id}`); toast('Client deleted'); renderClients(); } catch(e){ toast(e.message,'error'); }\n  },true);\n}\n\nasync function open360(id) {\n  modal(spinner(),'xl');\n  try {\n    const [detRes,invRes,taskRes]=await Promise.all([api.get(`/clients/${id}`),api.get(`/clients/${id}/invoices`),api.get(`/clients/${id}/tasks`)]);\n    const c=detRes.data||{}, invs=invRes.data||[], tasks=taskRes.data||[];\n    let tab='overview';\n    const renderTab=()=>{\n      const content360 = $('tab-content-360');\n      if (!content360) return;\n      if (tab==='overview') content360.innerHTML=`\n        <div class=\"grid-4\" style=\"margin-bottom:14px\">\n          <div class=\"kpi\"><div class=\"kpi-val\" style=\"color:var(--gold);font-size:18px\">${fmtMoney(c.total_billed)}</div><div class=\"kpi-label\">Total Billed</div></div>\n          <div class=\"kpi\"><div class=\"kpi-val\" style=\"color:var(--green);font-size:18px\">${fmtMoney(c.total_paid)}</div><div class=\"kpi-label\">Collected</div></div>\n          <div class=\"kpi\"><div class=\"kpi-val\" style=\"color:var(--red);font-size:18px\">${fmtMoney((c.total_billed||0)-(c.total_paid||0))}</div><div class=\"kpi-label\">Outstanding</div></div>\n          <div class=\"kpi\"><div class=\"kpi-val\" style=\"color:var(--blue);font-size:18px\">${c.task_count||0}</div><div class=\"kpi-label\">Tasks</div></div>\n        </div>\n        <div class=\"grid-2 anim-fade\" style=\"font-size:13px\">\n          ${[['Client ID',c.client_no],['Type',c.type],['Mobile',c.mobile],['Email',c.email],['GSTIN',c.gstin],['PAN',c.pan],['City',c.city],['State',c.state],['Joined',fmtDate(c.created_at)],['Assigned To',c.assigned_name]].filter(([,v])=>v).map(([l,v])=>`<div style=\"display:flex;gap:8px\"><span style=\"color:var(--text3);min-width:90px\">${l}</span><span style=\"font-weight:500;color:var(--text)\">${v}</span></div>`).join('')}\n        </div>\n        ${c.notes?`<div class=\"glass-card\" style=\"padding:10px;margin-top:12px;font-size:12.5px;color:var(--text2)\">${c.notes}</div>`:''}`;\n      else if (tab==='invoices') content360.innerHTML=invs.length===0?empty('\ud83e\uddfe','No invoices yet'):invs.map(inv=>`\n        <div style=\"display:flex;align-items:center;justify-content:space-between;padding:10px;border-radius:8px;background:var(--glass);border:1px solid var(--border);margin-bottom:6px\">\n          <div><span style=\"font-family:var(--font-mono);font-size:11px;font-weight:600;color:var(--gold)\">${inv.invoice_no}</span><div style=\"font-size:11px;color:var(--text3);margin-top:2px\">${fmtDate(inv.created_at)}</div></div>\n          <div style=\"display:flex;align-items:center;gap:10px\"><span style=\"font-weight:700;font-family:var(--font-mono);color:var(--text)\">${fmtMoney(inv.total)}</span>${badge(inv.status)}</div>\n        </div>`).join('');\n      else if (tab==='tasks') content360.innerHTML=tasks.length===0?empty('\u2705','No tasks yet'):tasks.map(t=>`\n        <div style=\"padding:10px;border-radius:8px;background:var(--glass);border:1px solid var(--border);margin-bottom:6px\">\n          <div style=\"display:flex;align-items:center;justify-content:space-between\">\n            <span style=\"font-size:13px;font-weight:600;color:var(--text)\">${t.title}</span>\n            <div style=\"display:flex;gap:6px\">${badge(t.status)}${badge(t.priority)}</div>\n          </div>\n          <div style=\"font-size:11px;color:var(--text3);margin-top:3px\">${t.assigned_name||'\u2014'} \u00b7 ${fmtDate(t.due_date)}</div>\n          ${progressBar(t.progress)}\n        </div>`).join('');\n    };\n    modal(`\n      <div class=\"modal-hdr\"><span class=\"modal-title\">${c.name}</span><button class=\"btn-close\" onclick=\"closeModal()\">\u00d7</button></div>\n      <div class=\"modal-body\">\n        <div class=\"tabs\" style=\"margin-bottom:14px\">\n          <button class=\"tab-btn active\" id=\"tab360-overview\" onclick=\"switchTab360('overview')\">\ud83d\udccb Overview</button>\n          <button class=\"tab-btn\" id=\"tab360-invoices\" onclick=\"switchTab360('invoices')\">\ud83e\uddfe Invoices (${invs.length})</button>\n          <button class=\"tab-btn\" id=\"tab360-tasks\" onclick=\"switchTab360('tasks')\">\u2705 Tasks (${tasks.length})</button>\n        </div>\n        <div id=\"tab-content-360\"></div>\n      </div>`, 'xl');\n    window.switchTab360=function(t){ tab=t; ['overview','invoices','tasks'].forEach(x=>{$(`tab360-${x}`)?.classList.toggle('active',x===t)}); renderTab(); };\n    renderTab();\n  } catch(e){ closeModal(); toast('Failed to load: '+e.message,'error'); }\n}\n\n// \u2500\u2500\u2500 SERVICES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nasync function renderServices() {\n  try {\n    const res = await api.get('/services'+qs({limit:100}));\n    const svcs = res.data||[];\n    const isAdmin = currentUser?.role==='admin';\n    $('content').innerHTML=`\n    <div class=\"anim-fade\">\n      <div class=\"page-hdr\">\n        <div><div class=\"page-title\">Services</div><div class=\"page-sub\">${svcs.length} services</div></div>\n        ${isAdmin?`<button class=\"btn btn-primary btn-sm\" onclick=\"openServiceModal()\">\uff0b Add Service</button>`:''}\n      </div>\n      <div style=\"display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px\">\n        ${svcs.length===0?empty('\u2699\ufe0f','No services yet'):svcs.map(s=>`\n        <div class=\"glass-card\" style=\"padding:16px;display:flex;flex-direction:column;gap:6px\">\n          ${s.category?`<div style=\"font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--teal)\">${s.category}</div>`:''}\n          <div style=\"font-size:14px;font-weight:700;color:var(--text)\">${s.name}</div>\n          <div style=\"font-size:18px;font-weight:800;color:var(--gold);font-family:var(--font-mono)\">${fmtMoney(s.price)}</div>\n          ${s.description?`<div style=\"font-size:12px;color:var(--text2)\">${s.description}</div>`:''}\n          ${s.duration?`<div style=\"font-size:11px;color:var(--text3)\">\u23f1 ${s.duration}</div>`:''}\n          ${isAdmin?`<div style=\"display:flex;gap:6px;margin-top:6px\">\n            <button class=\"btn btn-blue btn-sm\" onclick=\"openServiceModal('${s.id}')\">Edit</button>\n            <button class=\"btn btn-red btn-sm\" onclick=\"deleteService('${s.id}','${s.name.replace(/'/,\"\\\\'\")}')\">Delete</button>\n          </div>`:''}\n        </div>`).join('')}\n      </div>\n    </div>`;\n  } catch(e){ $('content').innerHTML=`<p style=\"color:var(--red)\">Error: ${e.message}</p>`; }\n}\n\nasync function openServiceModal(id=null) {\n  let s=null;\n  if (id) { try { s=(await api.get(`/services/${id}`)).data; } catch{} }\n  modal(`\n    <div class=\"modal-hdr\"><span class=\"modal-title\">${s?'Edit Service':'New Service'}</span><button class=\"btn-close\" onclick=\"closeModal()\">\u00d7</button></div>\n    <div class=\"modal-body\">\n      <div class=\"grid-2\">\n        <div class=\"form-group\"><label class=\"form-label\">Name *</label><input class=\"form-input\" id=\"sf-name\" value=\"${s?.name||''}\"></div>\n        <div class=\"form-group\"><label class=\"form-label\">Category</label><input class=\"form-input\" id=\"sf-cat\" value=\"${s?.category||''}\"></div>\n        <div class=\"form-group\"><label class=\"form-label\">Price (\u20b9) *</label><input class=\"form-input\" id=\"sf-price\" type=\"number\" value=\"${s?.price||''}\"></div>\n        <div class=\"form-group\"><label class=\"form-label\">Duration</label><input class=\"form-input\" id=\"sf-dur\" value=\"${s?.duration||''}\" placeholder=\"e.g. 3-5 days\"></div>\n        <div class=\"form-group\" style=\"grid-column:1/-1\"><label class=\"form-label\">Description</label><textarea class=\"form-input\" id=\"sf-desc\" rows=\"2\">${s?.description||''}</textarea></div>\n      </div>\n      <div style=\"display:flex;gap:10px;justify-content:flex-end;margin-top:16px\">\n        <button class=\"btn btn-ghost\" onclick=\"closeModal()\">Cancel</button>\n        <button class=\"btn btn-primary\" id=\"save-svc-btn\" onclick=\"saveService('${id||''}')\">${s?'Update':'Create'}</button>\n      </div>\n    </div>`, 'md');\n}\n\nasync function saveService(id='') {\n  const name=$('sf-name').value.trim(), price=Number($('sf-price').value);\n  if (!name) { toast('Name required','error'); return; }\n  if (isNaN(price)) { toast('Valid price required','error'); return; }\n  setLoading('save-svc-btn',true);\n  try {\n    const body={name,category:$('sf-cat').value,price,description:$('sf-desc').value,duration:$('sf-dur').value};\n    if (id) await api.put(`/services/${id}`,body); else await api.post('/services',body);\n    toast(id?'Service updated!':'Service created!','success'); closeModal(); renderServices();\n  } catch(e){ toast(e.message,'error'); setLoading('save-svc-btn',false); }\n}\n\nasync function deleteService(id, name) {\n  confirm2('Delete Service',`Delete \"${name}\"?`,async function(){\n    try { await api.del(`/services/${id}`); toast('Deleted'); renderServices(); } catch(e){ toast(e.message,'error'); }\n  },true);\n}\n\n// \u2500\u2500\u2500 INVOICES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nlet invState = { q:'', status:'', clientId:'', page:1 };\n\nasync function renderInvoices(reset=false) {\n  if (reset) invState.page=1;\n  try {\n    const [res, cRes, sRes] = await Promise.all([\n      api.get(`/invoices${qs({q:invState.q,status:invState.status,client_id:invState.clientId,page:invState.page,limit:50})}`),\n      api.get('/clients'+qs({limit:500})),\n      api.get('/services'+qs({limit:500})),\n    ]);\n    const invoices=res.data||[], total=res.meta?.total||0;\n    const clients=cRes.data||[], services=sRes.data||[];\n    const role=currentUser?.role;\n    $('content').innerHTML=`\n    <div class=\"anim-fade\">\n      <div class=\"page-hdr\">\n        <div><div class=\"page-title\">Invoices</div><div class=\"page-sub\">${total} invoices</div></div>\n        <div style=\"display:flex;gap:8px\">\n          <button class=\"btn btn-ghost btn-sm\" onclick=\"exportCSV('invoices')\">\u2b07 CSV</button>\n          ${['admin','staff'].includes(role)?`<button class=\"btn btn-primary btn-sm\" onclick=\"openInvoiceModal()\">\uff0b New Invoice</button>`:''}\n        </div>\n      </div>\n      <div class=\"filters\">\n        <div class=\"search-wrap\"><span class=\"search-icon\">\ud83d\udd0d</span><input class=\"form-input search-input\" placeholder=\"Search invoice#, client\u2026\" value=\"${invState.q}\" oninput=\"invState.q=this.value;renderInvoices(true)\"></div>\n        <select class=\"form-input\" style=\"max-width:140px\" onchange=\"invState.status=this.value;renderInvoices(true)\">\n          <option value=\"\">All Status</option>\n          ${['Unpaid','Partial','Paid','Overdue','Cancelled'].map(s=>`<option value=\"${s}\" ${invState.status===s?'selected':''}>${s}</option>`).join('')}\n        </select>\n        <select class=\"form-input\" style=\"max-width:200px\" onchange=\"invState.clientId=this.value;renderInvoices(true)\">\n          <option value=\"\">All Clients</option>\n          ${clients.map(c=>`<option value=\"${c.id}\" ${invState.clientId===c.id?'selected':''}>${c.name}</option>`).join('')}\n        </select>\n      </div>\n      <div class=\"table-wrap\">\n        <table>\n          <thead><tr><th>Invoice #</th><th>Client</th><th>Total / Due</th><th>Status</th><th>Due Date</th><th>Date</th><th></th></tr></thead>\n          <tbody>\n          ${invoices.length===0?`<tr><td colspan=\"7\">${empty('\ud83e\uddfe','No invoices yet')}</td></tr>`:\n            invoices.map(inv=>`\n            <tr>\n              <td><span style=\"font-family:var(--font-mono);font-size:11px;background:var(--gold3);color:var(--gold);padding:2px 6px;border-radius:4px\">${inv.invoice_no}</span></td>\n              <td><div style=\"font-weight:600;color:var(--text)\">${inv.client_name||'\u2014'}</div><div style=\"font-size:11px;color:var(--text3)\">${inv.service_name||inv.description||'\u2014'}</div></td>\n              <td><div style=\"font-weight:700;font-family:var(--font-mono)\">${fmtMoney(inv.total)}</div>${(inv.balance||0)>0?`<div style=\"font-size:11px;color:var(--red)\">Due: ${fmtMoney(inv.balance)}</div>`:''}</td>\n              <td>${badge(inv.status)}</td>\n              <td>${fmtDate(inv.due_date)}</td>\n              <td>${fmtDate(inv.created_at)}</td>\n              <td style=\"white-space:nowrap\">\n                <button class=\"btn btn-ghost btn-sm\" onclick=\"printInvoice('${inv.id}')\">\ud83d\udda8</button>\n                ${inv.status!=='Paid'&&['admin','staff'].includes(role)?`\n                <button class=\"btn btn-green btn-sm\" onclick=\"openPaymentModal('${inv.id}','${inv.invoice_no}',${inv.total},${inv.paid||0},${inv.balance||0})\">+ Pay</button>`:''}\n                ${role==='admin'&&inv.status==='Unpaid'?`<button class=\"btn btn-red btn-sm\" onclick=\"deleteInvoice('${inv.id}','${inv.invoice_no}')\">Del</button>`:''}\n              </td>\n            </tr>`).join('')}\n          </tbody>\n        </table>\n      </div>\n      ${total>50?`<div style=\"display:flex;gap:8px;margin-top:14px;justify-content:center;align-items:center\">\n        <button class=\"btn btn-ghost btn-sm\" ${invState.page===1?'disabled':''} onclick=\"invState.page--;renderInvoices()\">\u2190 Prev</button>\n        <span style=\"font-size:12px;color:var(--text3)\">Page ${invState.page} of ${Math.ceil(total/50)}</span>\n        <button class=\"btn btn-ghost btn-sm\" ${invState.page>=Math.ceil(total/50)?'disabled':''} onclick=\"invState.page++;renderInvoices()\">Next \u2192</button>\n      </div>`:''}\n    </div>`;\n    window._invClients=clients; window._invServices=services;\n  } catch(e){ $('content').innerHTML=`<p style=\"color:var(--red)\">Error: ${e.message}</p>`; }\n}\n\nasync function openInvoiceModal() {\n  const clients=window._invClients||[];\n  const services=window._invServices||[];\n  modal(`\n    <div class=\"modal-hdr\"><span class=\"modal-title\">Create Invoice</span><button class=\"btn-close\" onclick=\"closeModal()\">\u00d7</button></div>\n    <div class=\"modal-body\">\n      <div style=\"display:flex;flex-direction:column;gap:12px\">\n        <div class=\"form-group\"><label class=\"form-label\">Client *</label><select class=\"form-input\" id=\"if-client\"><option value=\"\">-- Select Client --</option>${clients.map(c=>`<option value=\"${c.id}\">${c.name} (${c.client_no})</option>`).join('')}</select></div>\n        <div class=\"form-group\"><label class=\"form-label\">Service</label><select class=\"form-input\" id=\"if-service\" onchange=\"if(this.value){const s=window._invServices.find(x=>x.id===this.value);if(s)$('if-amount').value=s.price}\"><option value=\"\">-- Select Service --</option>${services.map(s=>`<option value=\"${s.id}\">${s.name} \u2014 \u20b9${s.price}</option>`).join('')}</select></div>\n        <div class=\"form-group\"><label class=\"form-label\">Description</label><input class=\"form-input\" id=\"if-desc\" placeholder=\"Optional\"></div>\n        <div class=\"grid-3\">\n          <div class=\"form-group\"><label class=\"form-label\">Base Amount *</label><input class=\"form-input\" id=\"if-amount\" type=\"number\" placeholder=\"5000\" oninput=\"calcInvoiceTotal()\"></div>\n          <div class=\"form-group\"><label class=\"form-label\">Discount %</label><input class=\"form-input\" id=\"if-disc\" type=\"number\" value=\"0\" placeholder=\"0\" oninput=\"calcInvoiceTotal()\"></div>\n          <div class=\"form-group\"><label class=\"form-label\">Tax % (GST)</label><input class=\"form-input\" id=\"if-tax\" type=\"number\" value=\"18\" placeholder=\"18\" oninput=\"calcInvoiceTotal()\"></div>\n        </div>\n        <div id=\"inv-calc\" style=\"display:none;background:var(--glass);border:1px solid var(--border);border-radius:8px;padding:12px;font-size:12.5px\"></div>\n        <div class=\"grid-2\">\n          <div class=\"form-group\"><label class=\"form-label\">Payment Method</label><select class=\"form-input\" id=\"if-method\">${['Cash','UPI','Card','Netbanking','Cheque'].map(m=>`<option>${m}</option>`).join('')}</select></div>\n          <div class=\"form-group\"><label class=\"form-label\">Due Date</label><input class=\"form-input\" id=\"if-due\" type=\"date\"></div>\n        </div>\n        <div class=\"form-group\"><label class=\"form-label\">Notes</label><textarea class=\"form-input\" id=\"if-notes\" rows=\"2\"></textarea></div>\n        <div style=\"display:flex;gap:10px;justify-content:flex-end\">\n          <button class=\"btn btn-ghost\" onclick=\"closeModal()\">Cancel</button>\n          <button class=\"btn btn-primary\" id=\"save-inv-btn\" onclick=\"saveInvoice()\">Create Invoice</button>\n        </div>\n      </div>\n    </div>`, 'lg');\n}\n\nfunction calcInvoiceTotal() {\n  const base=parseFloat($('if-amount')?.value)||0, disc=parseFloat($('if-disc')?.value)||0, tax=parseFloat($('if-tax')?.value)||0;\n  if (base<=0) { $('inv-calc').style.display='none'; return; }\n  const discAmt=base*disc/100, after=base-discAmt, taxAmt=after*tax/100, total=after+taxAmt;\n  $('inv-calc').style.display='';\n  $('inv-calc').innerHTML=`\n    ${discAmt>0?`<div style=\"display:flex;justify-content:space-between;margin-bottom:4px\"><span style=\"color:var(--text3)\">Discount (${disc}%)</span><span style=\"color:var(--red)\">-${fmtMoney(discAmt)}</span></div>`:''}\n    ${taxAmt>0?`<div style=\"display:flex;justify-content:space-between;margin-bottom:6px\"><span style=\"color:var(--text3)\">Tax/GST (${tax}%)</span><span>${fmtMoney(taxAmt)}</span></div>`:''}\n    <div style=\"display:flex;justify-content:space-between;font-size:16px;font-weight:800;color:var(--gold);border-top:1px solid var(--border);padding-top:6px\"><span>Total</span><span>${fmtMoney(total)}</span></div>`;\n}\n\nasync function saveInvoice() {\n  const clientId=$('if-client').value;\n  if (!clientId) { toast('Select a client','error'); return; }\n  const amount=Number($('if-amount').value);\n  if (!amount||isNaN(amount)) { toast('Enter valid amount','error'); return; }\n  setLoading('save-inv-btn',true);\n  try {\n    await api.post('/invoices',{client_id:clientId,service_id:$('if-service').value||undefined,description:$('if-desc').value,base_amount:amount,discount_pct:Number($('if-disc').value)||0,tax_pct:Number($('if-tax').value)||18,payment_method:$('if-method').value,due_date:$('if-due').value,notes:$('if-notes').value});\n    toast('Invoice created!','success'); closeModal(); renderInvoices();\n  } catch(e){ toast(e.message,'error'); setLoading('save-inv-btn',false); }\n}\n\nfunction openPaymentModal(invId, invNo, total, paid, balance) {\n  modal(`\n    <div class=\"modal-hdr\"><span class=\"modal-title\">Record Payment \u2014 ${invNo}</span><button class=\"btn-close\" onclick=\"closeModal()\">\u00d7</button></div>\n    <div class=\"modal-body\">\n      <div class=\"glass-card\" style=\"padding:12px;margin-bottom:14px;font-size:12.5px\">\n        <div style=\"display:flex;justify-content:space-between;margin-bottom:4px\"><span style=\"color:var(--text3)\">Invoice Total</span><span style=\"font-weight:700\">${fmtMoney(total)}</span></div>\n        <div style=\"display:flex;justify-content:space-between;margin-bottom:4px\"><span style=\"color:var(--text3)\">Already Paid</span><span style=\"font-weight:700\">${fmtMoney(paid)}</span></div>\n        <div style=\"display:flex;justify-content:space-between;font-weight:800;color:var(--red)\"><span>Balance Due</span><span>${fmtMoney(balance)}</span></div>\n      </div>\n      <div class=\"form-group\" style=\"margin-bottom:12px\"><label class=\"form-label\">Amount (\u20b9) *</label><input class=\"form-input\" id=\"pay-amount\" type=\"number\" value=\"${balance}\"></div>\n      <div class=\"form-group\" style=\"margin-bottom:12px\"><label class=\"form-label\">Method</label><select class=\"form-input\" id=\"pay-method\">${['Cash','UPI','Card','Netbanking','Cheque'].map(m=>`<option>${m}</option>`).join('')}</select></div>\n      <div class=\"form-group\" style=\"margin-bottom:12px\"><label class=\"form-label\">Transaction Ref</label><input class=\"form-input\" id=\"pay-ref\" placeholder=\"UPI ref / cheque no.\"></div>\n      <div class=\"form-group\" style=\"margin-bottom:16px\"><label class=\"form-label\">Notes</label><textarea class=\"form-input\" id=\"pay-notes\" rows=\"2\"></textarea></div>\n      <div style=\"display:flex;gap:10px;justify-content:flex-end\">\n        <button class=\"btn btn-ghost\" onclick=\"closeModal()\">Cancel</button>\n        <button class=\"btn btn-green\" id=\"save-pay-btn\" onclick=\"recordPayment('${invId}')\">Record Payment</button>\n      </div>\n    </div>`, 'sm');\n}\n\nasync function recordPayment(invId) {\n  const amount=Number($('pay-amount').value);\n  if (!amount||isNaN(amount)) { toast('Enter valid amount','error'); return; }\n  setLoading('save-pay-btn',true);\n  try {\n    await api.post(`/invoices/${invId}/payments`,{amount,method:$('pay-method').value,transaction_ref:$('pay-ref').value,notes:$('pay-notes').value});\n    toast('Payment recorded!','success'); closeModal(); renderInvoices();\n  } catch(e){ toast(e.message,'error'); setLoading('save-pay-btn',false); }\n}\n\nasync function deleteInvoice(id, no) {\n  confirm2('Delete Invoice',`Soft-delete ${no}?`,async function(){\n    try { await api.del(`/invoices/${id}`); toast('Deleted'); renderInvoices(); } catch(e){ toast(e.message,'error'); }\n  },true);\n}\n\nasync function printInvoice(id) {\n  try {\n    const res=await api.get(`/invoices/${id}`); const inv=res.data||{};\n    let settings={};\n    try { settings=(await api.get('/settings/firm')).data||{}; } catch{}\n    const w=window.open('','_blank');\n    w.document.write(`<!DOCTYPE html><html><head><meta charset=\"UTF-8\"><title>Invoice ${inv.invoice_no}</title>\n    <style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:Arial,sans-serif;font-size:12px;background:#fff;color:#1a1a1a;padding:32px}\n    .hdr{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:28px;padding-bottom:16px;border-bottom:2px solid #d4a843}\n    .firm-name{font-size:22px;font-weight:900;color:#0a1428}.firm-sub{font-size:11px;color:#888;margin-top:4px}\n    .inv-title{text-align:right}.inv-title h2{font-size:26px;font-weight:900;color:#d4a843}.inv-no{font-size:12px;color:#888;margin-top:4px}\n    .meta{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px}.meta-box{background:#f8faff;border:1px solid #e8ecf4;border-radius:8px;padding:14px}\n    .meta-label{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#888;margin-bottom:6px}\n    table{width:100%;border-collapse:collapse;margin-bottom:20px}th{background:#0a1428;color:#d4a843;padding:9px 12px;text-align:left;font-size:9.5px;text-transform:uppercase;letter-spacing:.06em}\n    td{padding:9px 12px;border-bottom:1px solid #f0f0f0;font-size:11px}tr:nth-child(even)td{background:#f8faff}\n    .totals{display:flex;justify-content:flex-end}.totals-inner{width:240px}.tot-row{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #f0f0f0;font-size:12px}\n    .tot-final{display:flex;justify-content:space-between;padding:10px 0;font-size:15px;font-weight:900;color:#0a1428}\n    .footer{margin-top:32px;text-align:center;color:#bbb;font-size:10px;border-top:1px solid #eee;padding-top:14px}\n    .badge{display:inline-block;padding:3px 10px;border-radius:4px;font-size:10px;font-weight:700}\n    .badge-paid{background:#d1fae5;color:#059669}.badge-unpaid{background:#fee2e2;color:#dc2626}.badge-partial{background:#fef3c7;color:#d97706}\n    @media print{button{display:none}}</style></head><body>\n    <div class=\"hdr\"><div><div class=\"firm-name\">${settings.firm_name||'OM Associates'}</div><div class=\"firm-sub\">${settings.firm_address||''} ${settings.firm_phone?'\u00b7 '+settings.firm_phone:''}</div>${settings.firm_gst?`<div class=\"firm-sub\">GST: ${settings.firm_gst}</div>`:''}</div>\n    <div class=\"inv-title\"><h2>INVOICE</h2><div class=\"inv-no\">${inv.invoice_no}</div><div class=\"inv-no\">${new Date(inv.created_at).toLocaleDateString('en-IN')}</div><span class=\"badge badge-${(inv.status||'').toLowerCase()}\">${inv.status}</span></div></div>\n    <div class=\"meta\"><div class=\"meta-box\"><div class=\"meta-label\">Bill To</div><strong>${inv.client_name||''}</strong><br>${inv.client_mobile||''} ${inv.client_email?'\u00b7 '+inv.client_email:''}<br>${inv.client_address||''} ${inv.client_gstin?'GST: '+inv.client_gstin:''}</div>\n    <div class=\"meta-box\"><div class=\"meta-label\">Payment</div>${inv.due_date?`<div>Due: <strong>${new Date(inv.due_date).toLocaleDateString('en-IN')}</strong></div>`:''}<div>Method: <strong>${inv.payment_method||'Cash'}</strong></div>${(inv.paid||0)>0?`<div>Paid: <strong>\u20b9${(inv.paid).toLocaleString('en-IN')}</strong></div>`:''}</div></div>\n    <table><thead><tr><th>#</th><th>Description</th><th>Amount</th></tr></thead><tbody><tr><td>1</td><td>${inv.service_name||inv.description||'Services'}</td><td>\u20b9${(inv.base_amount||0).toLocaleString('en-IN')}</td></tr></tbody></table>\n    <div class=\"totals\"><div class=\"totals-inner\">\n    ${(inv.discount_amt||0)>0?`<div class=\"tot-row\"><span>Discount (${inv.discount_pct}%)</span><span>-\u20b9${(inv.discount_amt).toLocaleString('en-IN')}</span></div>`:''}\n    ${(inv.tax_amt||0)>0?`<div class=\"tot-row\"><span>Tax/GST (${inv.tax_pct}%)</span><span>\u20b9${(inv.tax_amt).toLocaleString('en-IN')}</span></div>`:''}\n    <div class=\"tot-final\"><span>TOTAL</span><span>\u20b9${(inv.total||0).toLocaleString('en-IN')}</span></div></div></div>\n    ${inv.notes?`<div style=\"margin-top:16px;padding:10px;background:#f8faff;border-radius:6px;font-size:11px;color:#666\">Note: ${inv.notes}</div>`:''}\n    <div class=\"footer\">Thank you \u00b7 ${settings.firm_name||'OM Associates'} \u00b7 ${settings.firm_web||''}</div>\n    <div style=\"text-align:center;margin-top:16px\"><button onclick=\"window.print()\" style=\"padding:8px 20px;background:#d4a843;border:none;border-radius:6px;cursor:pointer;font-weight:700\">\ud83d\udda8 Print / Save PDF</button></div>\n    </body></html>`);\n    w.document.close();\n  } catch(e){ toast('Failed to load invoice: '+e.message,'error'); }\n}\n\n// \u2500\u2500\u2500 TASKS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nlet taskState = { q:'', status:'', priority:'', page:1 };\n\nasync function renderTasks(reset=false) {\n  if (reset) taskState.page=1;\n  try {\n    const [res,cRes,sRes,uRes] = await Promise.all([\n      api.get(`/tasks${qs({q:taskState.q,status:taskState.status,priority:taskState.priority,limit:100,page:taskState.page})}`),\n      api.get('/clients'+qs({limit:500})),\n      api.get('/services'+qs({limit:500})),\n      currentUser?.role==='admin' ? api.get('/users') : Promise.resolve({data:[]}),\n    ]);\n    const tasks=res.data||[], total=res.meta?.total||0;\n    window._taskClients=cRes.data||[]; window._taskServices=sRes.data||[]; window._taskUsers=uRes.data||[];\n    const role=currentUser?.role;\n    const prioColor={high:'var(--red)',medium:'var(--orange)',low:'var(--green)'};\n    $('content').innerHTML=`\n    <div class=\"anim-fade\">\n      <div class=\"page-hdr\">\n        <div><div class=\"page-title\">Work Orders</div><div class=\"page-sub\">${total} task${total!==1?'s':''}</div></div>\n        <div style=\"display:flex;gap:8px\">\n          <button class=\"btn btn-ghost btn-sm\" onclick=\"exportCSV('tasks')\">\u2b07 CSV</button>\n          ${['admin','staff'].includes(role)?`<button class=\"btn btn-primary btn-sm\" onclick=\"openTaskModal()\">\uff0b Add Task</button>`:''}\n        </div>\n      </div>\n      <div class=\"filters\">\n        <div class=\"search-wrap\"><span class=\"search-icon\">\ud83d\udd0d</span><input class=\"form-input search-input\" placeholder=\"Search tasks\u2026\" value=\"${taskState.q}\" oninput=\"taskState.q=this.value;renderTasks(true)\"></div>\n        <select class=\"form-input\" style=\"max-width:140px\" onchange=\"taskState.status=this.value;renderTasks(true)\">\n          <option value=\"\">All Status</option>\n          ${['pending','in_progress','review','completed','cancelled'].map(s=>`<option value=\"${s}\" ${taskState.status===s?'selected':''}>${s.replace('_',' ')}</option>`).join('')}\n        </select>\n        <select class=\"form-input\" style=\"max-width:130px\" onchange=\"taskState.priority=this.value;renderTasks(true)\">\n          <option value=\"\">All Priority</option>\n          ${['high','medium','low'].map(p=>`<option value=\"${p}\" ${taskState.priority===p?'selected':''}>${p}</option>`).join('')}\n        </select>\n      </div>\n      <div class=\"table-wrap\">\n        <table>\n          <thead><tr><th>Task</th><th>Priority</th><th>Status</th><th>Assigned</th><th>Due</th><th></th></tr></thead>\n          <tbody>\n          ${tasks.length===0?`<tr><td colspan=\"6\">${empty('\u2705','No tasks found')}</td></tr>`:\n            tasks.map(t=>`\n            <tr>\n              <td><div style=\"font-weight:600;color:var(--text)\">${t.title}</div><div style=\"font-size:11px;color:var(--text3)\">${t.client_name||'\u2014'}</div>${progressBar(t.progress)}</td>\n              <td><span style=\"font-weight:700;font-size:11px;color:${prioColor[t.priority]||'var(--text3)'}\">${(t.priority||'').toUpperCase()}</span></td>\n              <td>${badge(t.status,t.status.replace('_',' '))}</td>\n              <td>${t.assigned_name||'\u2014'}</td>\n              <td>${fmtDate(t.due_date)}</td>\n              <td style=\"white-space:nowrap\">\n                ${['admin','staff'].includes(role)?`<button class=\"btn btn-blue btn-sm\" onclick=\"openTaskModal('${t.id}')\">Edit</button> `:''}\n                ${role==='admin'?`<button class=\"btn btn-red btn-sm\" onclick=\"deleteTask('${t.id}','${t.title.replace(/'/,\"\\\\'\")}')\">Del</button>`:''}\n              </td>\n            </tr>`).join('')}\n          </tbody>\n        </table>\n      </div>\n    </div>`;\n  } catch(e){ $('content').innerHTML=`<p style=\"color:var(--red)\">Error: ${e.message}</p>`; }\n}\n\nasync function openTaskModal(id=null) {\n  let t=null;\n  if (id) { try { t=(await api.get(`/tasks/${id}`)).data; } catch{} }\n  const clients=window._taskClients||[], services=window._taskServices||[], users=window._taskUsers||[];\n  modal(`\n    <div class=\"modal-hdr\"><span class=\"modal-title\">${t?'Edit Task':'New Work Order'}</span><button class=\"btn-close\" onclick=\"closeModal()\">\u00d7</button></div>\n    <div class=\"modal-body\">\n      <div class=\"grid-2\">\n        <div class=\"form-group\" style=\"grid-column:1/-1\"><label class=\"form-label\">Title *</label><input class=\"form-input\" id=\"tf-title\" value=\"${t?.title||''}\"></div>\n        <div class=\"form-group\"><label class=\"form-label\">Client</label><select class=\"form-input\" id=\"tf-client\"><option value=\"\">-- Select Client --</option>${clients.map(c=>`<option value=\"${c.id}\" ${t?.client_id===c.id?'selected':''}>${c.name}</option>`).join('')}</select></div>\n        <div class=\"form-group\"><label class=\"form-label\">Service</label><select class=\"form-input\" id=\"tf-service\"><option value=\"\">-- Select Service --</option>${services.map(s=>`<option value=\"${s.id}\" ${t?.service_id===s.id?'selected':''}>${s.name}</option>`).join('')}</select></div>\n        ${users.length>0?`<div class=\"form-group\"><label class=\"form-label\">Assign To</label><select class=\"form-input\" id=\"tf-assigned\"><option value=\"\">-- Assign Staff --</option>${users.map(u=>`<option value=\"${u.id}\" ${t?.assigned_to===u.id?'selected':''}>${u.name}</option>`).join('')}</select></div>`:''}\n        <div class=\"form-group\"><label class=\"form-label\">Priority</label><select class=\"form-input\" id=\"tf-priority\">${['high','medium','low'].map(p=>`<option value=\"${p}\" ${(t?.priority||'medium')===p?'selected':''}>${p}</option>`).join('')}</select></div>\n        <div class=\"form-group\"><label class=\"form-label\">Status</label><select class=\"form-input\" id=\"tf-status\">${['pending','in_progress','review','completed','cancelled'].map(s=>`<option value=\"${s}\" ${(t?.status||'pending')===s?'selected':''}>${s.replace('_',' ')}</option>`).join('')}</select></div>\n        <div class=\"form-group\"><label class=\"form-label\">Progress %</label><input class=\"form-input\" id=\"tf-progress\" type=\"number\" min=\"0\" max=\"100\" value=\"${t?.progress||0}\"></div>\n        <div class=\"form-group\"><label class=\"form-label\">Due Date</label><input class=\"form-input\" id=\"tf-due\" type=\"date\" value=\"${(t?.due_date||'').split('T')[0]||''}\"></div>\n        <div class=\"form-group\" style=\"grid-column:1/-1\"><label class=\"form-label\">Description</label><textarea class=\"form-input\" id=\"tf-desc\" rows=\"2\">${t?.description||''}</textarea></div>\n      </div>\n      <div style=\"display:flex;gap:10px;justify-content:flex-end;margin-top:16px\">\n        <button class=\"btn btn-ghost\" onclick=\"closeModal()\">Cancel</button>\n        <button class=\"btn btn-primary\" id=\"save-task-btn\" onclick=\"saveTask('${id||''}')\">${t?'Update':'Create Task'}</button>\n      </div>\n    </div>`, 'lg');\n}\n\nasync function saveTask(id='') {\n  const title=$('tf-title').value.trim();\n  if (!title) { toast('Title required','error'); return; }\n  setLoading('save-task-btn',true);\n  try {\n    const body={title,description:$('tf-desc').value,client_id:$('tf-client').value||undefined,service_id:$('tf-service').value||undefined,assigned_to:$('tf-assigned')?.value||undefined,priority:$('tf-priority').value,status:$('tf-status').value,progress:Number($('tf-progress').value),due_date:$('tf-due').value||undefined};\n    if (id) await api.put(`/tasks/${id}`,body); else await api.post('/tasks',body);\n    toast(id?'Task updated!':'Task created!','success'); closeModal(); renderTasks();\n  } catch(e){ toast(e.message,'error'); setLoading('save-task-btn',false); }\n}\n\nasync function deleteTask(id, title) {\n  confirm2('Delete Task',`Soft-delete \"${title}\"?`,async function(){\n    try { await api.del(`/tasks/${id}`); toast('Deleted'); renderTasks(); } catch(e){ toast(e.message,'error'); }\n  },true);\n}\n\n// \u2500\u2500\u2500 PAYMENTS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nasync function renderPayments() {\n  try {\n    const res = await api.get('/payments'+qs({limit:100}));\n    const payments=res.data||[];\n    $('content').innerHTML=`\n    <div class=\"anim-fade\">\n      <div class=\"page-hdr\"><div class=\"page-title\">Payments</div></div>\n      <div class=\"table-wrap\">\n        <table>\n          <thead><tr><th>Date</th><th>Client</th><th>Invoice</th><th>Amount</th><th>Method</th><th>Status</th></tr></thead>\n          <tbody>\n          ${payments.length===0?`<tr><td colspan=\"6\">${empty('\ud83d\udcb3','No payments yet')}</td></tr>`:\n            payments.map(p=>`\n            <tr>\n              <td>${fmtDate(p.created_at)}</td>\n              <td>${p.client_name||'\u2014'}</td>\n              <td style=\"font-family:var(--font-mono);font-size:11.5px;color:var(--gold)\">${p.invoice_no||'\u2014'}</td>\n              <td style=\"font-weight:700;font-family:var(--font-mono)\">${fmtMoney(p.amount)}</td>\n              <td>${p.method}</td>\n              <td>${badge(p.status)}</td>\n            </tr>`).join('')}\n          </tbody>\n        </table>\n      </div>\n    </div>`;\n  } catch(e){ $('content').innerHTML=`<p style=\"color:var(--red)\">Error: ${e.message}</p>`; }\n}\n\n// \u2500\u2500\u2500 MESSAGES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nlet msgState = { threadId:null, threadName:'', messages:[], threads:[] };\n\nasync function renderMessages() {\n  try {\n    const res = await api.get('/messages/threads');\n    msgState.threads = res.data||[];\n    $('content').innerHTML=`\n    <div class=\"anim-fade\" style=\"display:flex;gap:0;height:calc(100vh - 56px - 44px);min-height:400px\">\n      <div style=\"width:280px;flex-shrink:0;border-right:1px solid var(--border);overflow-y:auto;background:var(--bg2);border-radius:var(--r2) 0 0 var(--r2)\">\n        <div style=\"padding:12px;font-size:12px;font-weight:700;color:var(--text3);border-bottom:1px solid var(--border)\">Conversations</div>\n        <div id=\"thread-list\">\n          ${msgState.threads.length===0?`<p style=\"padding:20px;color:var(--text3);font-size:12px;text-align:center\">No conversations yet</p>`:\n            msgState.threads.map(t=>`\n            <div class=\"msg-thread ${msgState.threadId===t.thread_id?'active':''}\" onclick=\"openThread('${t.thread_id}','${t.thread_name.replace(/'/,\"\\\\'\")}')\">\n              <div style=\"width:36px;height:36px;border-radius:50%;background:var(--gold-gradient);display:flex;align-items:center;justify-content:center;font-weight:700;color:#000;flex-shrink:0\">${(t.thread_name||'?')[0]}</div>\n              <div style=\"flex:1;min-width:0\">\n                <div style=\"display:flex;justify-content:space-between;align-items:center\">\n                  <span style=\"font-size:12.5px;font-weight:600;color:var(--text)\">${t.thread_name}</span>\n                  ${t.unread>0?`<span style=\"background:var(--gold);color:#000;border-radius:50%;width:18px;height:18px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700\">${t.unread}</span>`:''}\n                </div>\n                <div style=\"font-size:11px;color:var(--text3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap\">${t.last_message||'No messages'}</div>\n              </div>\n            </div>`).join('')}\n        </div>\n      </div>\n      <div id=\"msg-panel\" style=\"flex:1;display:flex;flex-direction:column;background:var(--bg2);border-radius:0 var(--r2) var(--r2) 0\">\n        ${msgState.threadId?'':`<div style=\"flex:1;display:flex;align-items:center;justify-content:center;color:var(--text3)\"><div style=\"text-align:center\"><div style=\"font-size:32px;margin-bottom:8px\">\ud83d\udcac</div><p>Select a conversation</p></div></div>`}\n      </div>\n    </div>`;\n    if (msgState.threadId) openThread(msgState.threadId, msgState.threadName);\n  } catch(e){ $('content').innerHTML=`<p style=\"color:var(--red)\">Error: ${e.message}</p>`; }\n}\n\nasync function openThread(threadId, threadName) {\n  msgState.threadId=threadId; msgState.threadName=threadName;\n  // Update thread list active\n  document.querySelectorAll('.msg-thread').forEach(el=>el.classList.remove('active'));\n  const panel=$('msg-panel');\n  if (!panel) return;\n  panel.innerHTML=`\n    <div style=\"padding:12px 16px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px\">\n      <div style=\"width:32px;height:32px;border-radius:50%;background:var(--gold-gradient);display:flex;align-items:center;justify-content:center;font-weight:700;color:#000\">${(threadName||'?')[0]}</div>\n      <span style=\"font-size:13px;font-weight:700;color:var(--text)\">${threadName}</span>\n    </div>\n    <div id=\"msg-body\" style=\"flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:8px\">${spinner()}</div>\n    <div style=\"padding:12px;border-top:1px solid var(--border);display:flex;gap:8px\">\n      <input class=\"form-input\" id=\"msg-input\" placeholder=\"Type a message\u2026\" style=\"flex:1\" onkeydown=\"if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendMsg('${threadId}');}\">\n      <button class=\"btn btn-primary\" onclick=\"sendMsg('${threadId}')\">Send</button>\n    </div>`;\n  try {\n    const res = await api.get(`/messages/${threadId}?limit=50`);\n    const msgs=res.data||[];\n    $('msg-body').innerHTML=msgs.length===0?`<p style=\"text-align:center;color:var(--text3);font-size:12px\">No messages yet. Say hello!</p>`:msgs.map(m=>{\n      const mine=m.from_id===currentUser?.id;\n      return `<div style=\"display:flex;flex-direction:column;align-items:${mine?'flex-end':'flex-start'}\">\n        <div class=\"msg-bubble ${mine?'mine':'theirs'}\">${m.content}</div>\n        <div class=\"msg-time\">${m.sender_name||''}  ${fmtDateTime(m.created_at)}</div>\n      </div>`;\n    }).join('');\n    const body=$('msg-body');\n    if(body) body.scrollTop=body.scrollHeight;\n  } catch(e){ $('msg-body').innerHTML=`<p style=\"color:var(--red)\">Error: ${e.message}</p>`; }\n}\n\nasync function sendMsg(threadId) {\n  const input=$('msg-input'), content=input?.value.trim();\n  if (!content) return;\n  input.value='';\n  try {\n    await api.post(`/messages/${threadId}`,{content});\n    await openThread(threadId, msgState.threadName);\n  } catch(e){ toast(e.message,'error'); }\n}\n\n// \u2500\u2500\u2500 USERS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nasync function renderUsers() {\n  try {\n    const res=await api.get('/users'); const users=res.data||[];\n    $('content').innerHTML=`\n    <div class=\"anim-fade\">\n      <div class=\"page-hdr\">\n        <div><div class=\"page-title\">Team</div><div class=\"page-sub\">${users.length} members</div></div>\n        <div style=\"display:flex;gap:8px\">\n          <button class=\"btn btn-ghost btn-sm\" onclick=\"exportCSV('users')\">\u2b07 CSV</button>\n          <button class=\"btn btn-primary btn-sm\" onclick=\"openUserModal()\">\uff0b Add Member</button>\n        </div>\n      </div>\n      <div class=\"table-wrap\">\n        <table>\n          <thead><tr><th>Name</th><th>Mobile</th><th>Role</th><th>Designation</th><th>Status</th><th>Last Login</th><th></th></tr></thead>\n          <tbody>\n          ${users.length===0?`<tr><td colspan=\"7\">${empty('\ud83d\udc64','No team members')}</td></tr>`:\n            users.map(u=>`\n            <tr>\n              <td><div style=\"font-weight:600;color:var(--text)\">${u.name}</div><div style=\"font-size:11px;color:var(--text3)\">${u.email||''}</div></td>\n              <td>${u.mobile}</td>\n              <td>${badge(u.role)}</td>\n              <td>${u.designation||'\u2014'}</td>\n              <td>${badge(u.status)}</td>\n              <td>${fmtDate(u.last_login)}</td>\n              <td>\n                <div style=\"display:flex;gap:4px\">\n                  <button class=\"btn btn-blue btn-sm\" onclick=\"openUserModal('${u.id}')\">Edit</button>\n                  <button class=\"btn btn-sm\" style=\"background:var(--orange2);color:var(--orange);font-size:10px\" onclick=\"openForceResetModal('${u.id}','${u.name.replace(/'/g,\"\\\\'\")}')\">\ud83d\udd11 Reset</button>\n                </div>\n              </td>\n            </tr>`).join('')}\n          </tbody>\n        </table>\n      </div>\n    </div>`;\n  } catch(e){ $('content').innerHTML=`<p style=\"color:var(--red)\">Error: ${e.message}</p>`; }\n}\n\nasync function openUserModal(id=null) {\n  let u=null;\n  if (id) { try { u=(await api.get(`/users/${id}`)).data; } catch{} }\n  modal(`\n    <div class=\"modal-hdr\"><span class=\"modal-title\">${u?`Edit: ${u.name}`:'Add Team Member'}</span><button class=\"btn-close\" onclick=\"closeModal()\">\u00d7</button></div>\n    <div class=\"modal-body\">\n      <div class=\"grid-2\">\n        <div class=\"form-group\"><label class=\"form-label\">Full Name *</label><input class=\"form-input\" id=\"uf-name\" value=\"${u?.name||''}\"></div>\n        <div class=\"form-group\"><label class=\"form-label\">Mobile *</label><input class=\"form-input\" id=\"uf-mobile\" type=\"tel\" value=\"${u?.mobile||''}\" ${u?'readonly':''}></div>\n        <div class=\"form-group\"><label class=\"form-label\">Email</label><input class=\"form-input\" id=\"uf-email\" type=\"email\" value=\"${u?.email||''}\"></div>\n        <div class=\"form-group\"><label class=\"form-label\">Role *</label><select class=\"form-input\" id=\"uf-role\">${['admin','staff','client'].map(r=>`<option value=\"${r}\" ${(u?.role||'staff')===r?'selected':''}>${r}</option>`).join('')}</select></div>\n        <div class=\"form-group\"><label class=\"form-label\">${u?'New Password':'Password *'}</label><input class=\"form-input\" id=\"uf-pass\" type=\"password\" placeholder=\"${u?'Leave blank to keep':'Min 6 chars'}\"></div>\n        <div class=\"form-group\"><label class=\"form-label\">Designation</label><input class=\"form-input\" id=\"uf-desig\" value=\"${u?.designation||''}\"></div>\n        <div class=\"form-group\"><label class=\"form-label\">Department</label><input class=\"form-input\" id=\"uf-dept\" value=\"${u?.department||''}\"></div>\n        ${u?`<div class=\"form-group\"><label class=\"form-label\">Status</label><select class=\"form-input\" id=\"uf-status\"><option value=\"active\" ${u.status==='active'?'selected':''}>Active</option><option value=\"inactive\" ${u.status==='inactive'?'selected':''}>Inactive</option></select></div>`:''}\n      </div>\n      <div style=\"display:flex;gap:10px;justify-content:flex-end;margin-top:16px\">\n        <button class=\"btn btn-ghost\" onclick=\"closeModal()\">Cancel</button>\n        <button class=\"btn btn-primary\" id=\"save-user-btn\" onclick=\"saveUser('${id||''}')\">${u?'Update':'Create'}</button>\n      </div>\n    </div>`, 'lg');\n}\n\nasync function saveUser(id='') {\n  const name=$('uf-name').value.trim(), mobile=$('uf-mobile').value.trim(), role=$('uf-role').value, pass=$('uf-pass').value;\n  if (!name||!mobile||!role) { toast('Name, mobile, role required','error'); return; }\n  if (!id&&!pass) { toast('Password required for new user','error'); return; }\n  setLoading('save-user-btn',true);\n  try {\n    const body={name,mobile,email:$('uf-email').value,role,designation:$('uf-desig').value,department:$('uf-dept').value};\n    if (pass) body.password=pass;\n    if (id) { if($('uf-status')) body.status=$('uf-status').value; await api.put(`/users/${id}`,body); }\n    else await api.post('/users',body);\n    toast(id?'Updated!':'User created!','success'); closeModal(); renderUsers();\n  } catch(e){ toast(e.message,'error'); setLoading('save-user-btn',false); }\n}\n\nfunction openForceResetModal(id, name) {\n  modal(`\n    <div class=\"modal-hdr\"><span class=\"modal-title\">\ud83d\udd11 Reset Password \u2014 ${name}</span><button class=\"btn-close\" onclick=\"closeModal()\">\u00d7</button></div>\n    <div class=\"modal-body\">\n      <p style=\"font-size:12.5px;color:var(--text3);margin-bottom:16px\">Set a new password for <strong style=\"color:var(--gold)\">${name}</strong>. Their current session will be invalidated.</p>\n      <div class=\"form-group\" style=\"margin-bottom:12px\">\n        <label class=\"form-label\">New Password *</label>\n        <input class=\"form-input\" id=\"fr-pass\" type=\"password\" placeholder=\"Min 6 characters\">\n      </div>\n      <div class=\"form-group\" style=\"margin-bottom:16px\">\n        <label class=\"form-label\">Confirm Password *</label>\n        <input class=\"form-input\" id=\"fr-confirm\" type=\"password\" placeholder=\"Re-enter password\" onkeydown=\"if(event.key==='Enter')doForceReset('${id}')\">\n      </div>\n      <div style=\"display:flex;gap:10px;justify-content:flex-end\">\n        <button class=\"btn btn-ghost\" onclick=\"closeModal()\">Cancel</button>\n        <button class=\"btn\" id=\"fr-btn\" style=\"background:var(--orange);color:#fff\" onclick=\"doForceReset('${id}')\">Reset Password</button>\n      </div>\n    </div>`);\n}\n\nasync function doForceReset(id) {\n  const np=$('fr-pass').value, cp=$('fr-confirm').value;\n  if(np.length<6){toast('Min 6 characters','error');return;}\n  if(np!==cp){toast('Passwords do not match','error');return;}\n  setLoading('fr-btn',true);\n  try {\n    await api.put(`/users/${id}/force-reset-password`,{new_password:np});\n    toast('Password reset successfully!','success'); closeModal();\n  } catch(e){ toast(e.message,'error'); setLoading('fr-btn',false); }\n}\n\n// \u2500\u2500\u2500 CSV EXPORT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nfunction exportCSV(type) {\n  const colMap = {\n    users:    ['id','name','username','mobile','email','role','designation','department','status','last_login','created_at'],\n    clients:  ['id','client_no','name','type','mobile','email','gstin','pan','city','state','status','assigned_name','created_at'],\n    invoices: ['id','invoice_no','client_name','description','total','paid','balance','status','payment_method','due_date','created_at'],\n    tasks:    ['id','title','client_name','assigned_name','priority','status','progress','due_date','created_at'],\n    payments: ['id','invoice_id','client_id','amount','method','status','transaction_ref','created_at'],\n  };\n  const cols = colMap[type];\n  if (!cols) { toast('Unknown export type','error'); return; }\n\n  const endpointMap = {\n    users:    '/users',\n    clients:  '/clients?limit=9999&page=1',\n    invoices: '/invoices?limit=9999&page=1',\n    tasks:    '/tasks?limit=9999&page=1',\n    payments: '/payments?limit=9999&page=1',\n  };\n\n  toast(`Preparing ${type} export\u2026`, 'info');\n  api.get(endpointMap[type]).then(res => {\n    const rows = Array.isArray(res.data) ? res.data : (res.data?.data || res.results || []);\n    if (!rows.length) { toast('No data to export','error'); return; }\n    const header = cols.join(',');\n    const body = rows.map(r => cols.map(c => {\n      const v = r[c] ?? '';\n      const sv = String(v).replace(/\"/g, '\"\"');\n      return (sv.includes(',') || sv.includes('\"') || sv.includes('\\n')) ? `\"${sv}\"` : sv;\n    }).join(',')).join('\\n');\n    const bom = '\\uFEFF'; // UTF-8 BOM for Excel\n    const blob = new Blob([bom + header + '\\n' + body], { type: 'text/csv;charset=utf-8;' });\n    const a = document.createElement('a');\n    a.href = URL.createObjectURL(blob);\n    a.download = `om-crm-${type}-${new Date().toISOString().split('T')[0]}.csv`;\n    document.body.appendChild(a); a.click(); document.body.removeChild(a);\n    URL.revokeObjectURL(a.href);\n    toast(`\u2705 ${rows.length} ${type} exported`, 'success');\n  }).catch(e => toast('Export failed: ' + e.message, 'error'));\n}\n\n// \u2500\u2500\u2500 FIREBASE MIGRATION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nfunction openMigrationModal() {\n  modal(`\n    <div class=\"modal-hdr\"><span class=\"modal-title\">\ud83d\udd25 Firebase \u2192 Cloudflare Migration</span><button class=\"btn-close\" onclick=\"closeModal()\">\u00d7</button></div>\n    <div class=\"modal-body\">\n      <p style=\"font-size:12.5px;color:var(--text3);margin-bottom:12px\">\n        Paste your Firebase exported JSON below. Supported collections: <strong>users, clients, services, invoices, tasks, payments, settings</strong><br>\n        <span style=\"color:var(--gold)\">\u2713 Existing data is NOT deleted</span> \u00b7 New records inserted \u00b7 Duplicates skipped\n      </p>\n      <p style=\"font-size:11.5px;color:var(--orange);margin-bottom:12px\">\u26a0 Migrated users without password_hash will receive their mobile number as temporary password. Ask them to use Forgot Password to set a new one.</p>\n      <div class=\"form-group\" style=\"margin-bottom:8px\">\n        <label class=\"form-label\">Firebase JSON Export</label>\n        <textarea class=\"form-input\" id=\"migrate-json\" rows=\"10\" style=\"font-family:monospace;font-size:11px\" placeholder='{\"users\":[{\"id\":\"u1\",\"name\":\"Ramu\",\"mobile\":\"9876543210\",\"role\":\"staff\"}],\"clients\":[...]}'></textarea>\n      </div>\n      <div id=\"migrate-result\" style=\"display:none;margin-bottom:10px;padding:10px;border-radius:8px;font-size:12px;font-family:monospace;background:var(--bg2);color:var(--green)\"></div>\n      <div style=\"display:flex;gap:10px;justify-content:flex-end\">\n        <button class=\"btn btn-ghost\" onclick=\"closeModal()\">Cancel</button>\n        <button class=\"btn btn-primary\" id=\"migrate-btn\" onclick=\"doMigrate()\">\ud83d\ude80 Import Data</button>\n      </div>\n    </div>`, 'lg');\n}\n\nasync function doMigrate() {\n  const raw=$('migrate-json').value.trim();\n  if(!raw){toast('Paste JSON data','error');return;}\n  let data;\n  try{data=JSON.parse(raw);}catch(e){toast('Invalid JSON: '+e.message,'error');return;}\n  setLoading('migrate-btn',true);\n  try {\n    const res=await api.post('/migrate/import',data);\n    const r=res.data?.results||{};\n    const lines=Object.entries(r).map(([k,v])=>`${k}: ${v.imported||0} imported, ${v.skipped||0} skipped`).join('\\n');\n    $('migrate-result').style.display='';\n    $('migrate-result').textContent='\u2705 Migration complete!\\n\\n'+lines;\n    toast('Migration complete!','success');\n  } catch(e){toast(e.message,'error');}\n  setLoading('migrate-btn',false);\n}\n\n// \u2500\u2500\u2500 SETTINGS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nasync function renderSettings() {\n  try {\n    const res=await api.get('/settings'); const s=res.data||{};\n    $('content').innerHTML=`\n    <div class=\"anim-fade\">\n      <div class=\"page-hdr\"><div class=\"page-title\">Settings</div></div>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:20px;max-width:900px\">\n        <div class=\"glass-card\" style=\"padding:20px\">\n          <div style=\"font-size:14px;font-weight:700;color:var(--text);font-family:var(--font-serif);margin-bottom:16px\">\ud83c\udfe2 Firm Details</div>\n          <div style=\"display:flex;flex-direction:column;gap:12px\">\n            <div class=\"form-group\"><label class=\"form-label\">Firm Name</label><input class=\"form-input\" id=\"s-fname\" value=\"${s.firm_name||''}\"></div>\n            <div class=\"form-group\"><label class=\"form-label\">Address</label><textarea class=\"form-input\" id=\"s-faddr\" rows=\"2\">${s.firm_address||''}</textarea></div>\n            <div class=\"form-group\"><label class=\"form-label\">Phone</label><input class=\"form-input\" id=\"s-fphone\" value=\"${s.firm_phone||''}\"></div>\n            <div class=\"form-group\"><label class=\"form-label\">Email</label><input class=\"form-input\" id=\"s-femail\" type=\"email\" value=\"${s.firm_email||''}\"></div>\n            <div class=\"form-group\"><label class=\"form-label\">Website</label><input class=\"form-input\" id=\"s-fweb\" value=\"${s.firm_web||''}\"></div>\n            <div class=\"form-group\"><label class=\"form-label\">GST Number</label><input class=\"form-input\" id=\"s-fgst\" value=\"${s.firm_gst||''}\"></div>\n            <div class=\"form-group\"><label class=\"form-label\">PAN</label><input class=\"form-input\" id=\"s-fpan\" value=\"${s.firm_pan||''}\"></div>\n          </div>\n        </div>\n        <div style=\"display:flex;flex-direction:column;gap:16px\">\n          <div class=\"glass-card\" style=\"padding:20px\">\n            <div style=\"font-size:14px;font-weight:700;color:var(--text);font-family:var(--font-serif);margin-bottom:16px\">\ud83d\udcb0 Billing</div>\n            <div style=\"display:flex;flex-direction:column;gap:12px\">\n              <div class=\"form-group\"><label class=\"form-label\">Default Tax %</label><input class=\"form-input\" id=\"s-tax\" type=\"number\" value=\"${s.tax_pct||18}\"></div>\n              <div class=\"form-group\"><label class=\"form-label\">Invoice Prefix</label><input class=\"form-input\" id=\"s-prefix\" value=\"${s.invoice_prefix||'OMA'}\"></div>\n              <div class=\"form-group\"><label class=\"form-label\">Currency</label><input class=\"form-input\" id=\"s-currency\" value=\"${s.currency||'INR'}\"></div>\n            </div>\n          </div>\n          <div class=\"glass-card\" style=\"padding:20px\">\n            <div style=\"font-size:14px;font-weight:700;color:var(--text);font-family:var(--font-serif);margin-bottom:16px\">\ud83d\udcb3 Razorpay</div>\n            <div style=\"display:flex;flex-direction:column;gap:12px\">\n              <div class=\"form-group\"><label class=\"form-label\">Key ID</label><input class=\"form-input\" id=\"s-rzpid\" value=\"${s.razorpay_key_id||''}\"></div>\n              <div class=\"form-group\"><label class=\"form-label\">Key Secret</label><input class=\"form-input\" type=\"password\" id=\"s-rzpsec\" value=\"${s.razorpay_key_secret||'\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022'}\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div style=\"margin-top:20px;display:flex;gap:10px;align-items:center\">\n        <button class=\"btn btn-primary\" id=\"save-settings-btn\" onclick=\"saveSettings()\">\ud83d\udcbe Save Settings</button>\n        <button class=\"btn\" style=\"background:var(--orange2);color:var(--orange);font-weight:600\" onclick=\"openMigrationModal()\">\ud83d\udd25 Firebase Migration</button>\n      </div>\n    </div>`;\n  } catch(e){ $('content').innerHTML=`<p style=\"color:var(--red)\">Error: ${e.message}</p>`; }\n}\n\nasync function saveSettings() {\n  setLoading('save-settings-btn',true);\n  try {\n    const body={\n      firm_name:$('s-fname').value, firm_address:$('s-faddr').value, firm_phone:$('s-fphone').value,\n      firm_email:$('s-femail').value, firm_web:$('s-fweb').value, firm_gst:$('s-fgst').value, firm_pan:$('s-fpan').value,\n      tax_pct:Number($('s-tax').value), invoice_prefix:$('s-prefix').value, currency:$('s-currency').value,\n      razorpay_key_id:$('s-rzpid').value, razorpay_key_secret:$('s-rzpsec').value,\n    };\n    await api.put('/settings',body);\n    toast('Settings saved!','success');\n  } catch(e){ toast(e.message,'error'); }\n  setLoading('save-settings-btn',false);\n}\n\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n// INIT\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nfunction init() {\n  // Load theme\n  const savedTheme = localStorage.getItem('om_crm_theme');\n  darkMode = savedTheme !== 'light';\n  document.documentElement.className = darkMode ? '' : 'light';\n  updateOnline();\n  if (loadAuth()) {\n    showApp();\n  } else {\n    showLogin();\n  }\n}\n\ninit();\n</script>\n</body>\n</html>\n";

// =============================================================
// OM Associates CRM — Cloudflare Worker v4.0
// Single file · Zero dependencies · Works on Workers + Pages
// =============================================================

// ── CRYPTO HELPERS ────────────────────────────────────────────
const ENC = new TextEncoder();

function b64u(buf) {
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_');
}
function fromb64u(s) {
  s = s.replace(/-/g,'+').replace(/_/g,'/');
  while (s.length % 4) s += '=';
  const b = atob(s), a = new Uint8Array(b.length);
  for (let i = 0; i < b.length; i++) a[i] = b.charCodeAt(i);
  return a;
}

async function signJWT(payload, secret) {
  const h = b64u(ENC.encode(JSON.stringify({ alg:'HS256', typ:'JWT' })));
  const p = b64u(ENC.encode(JSON.stringify({
    ...payload,
    iat: Math.floor(Date.now()/1000),
    exp: Math.floor(Date.now()/1000) + 604800   // 7 days
  })));
  const key = await crypto.subtle.importKey(
    'raw', ENC.encode(secret),
    { name:'HMAC', hash:'SHA-256' }, false, ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, ENC.encode(`${h}.${p}`));
  return `${h}.${p}.${b64u(sig)}`;
}

async function verifyJWT(token, secret) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const [h, p, s] = parts;
    const key = await crypto.subtle.importKey(
      'raw', ENC.encode(secret),
      { name:'HMAC', hash:'SHA-256' }, false, ['verify']
    );
    const ok = await crypto.subtle.verify('HMAC', key, fromb64u(s), ENC.encode(`${h}.${p}`));
    if (!ok) return null;
    const pl = JSON.parse(new TextDecoder().decode(fromb64u(p)));
    if (pl.exp && Date.now()/1000 > pl.exp) return null;
    return pl;
  } catch(e) {
    console.error('[JWT verify]', e.message);
    return null;
  }
}

// PASSWORD HASH: SHA-256(plain + '_OMA_SALT_2024') → base64
// Pre-computed hashes:
//   admin / Admin@2024  → ue9RPmqeR8hcLLQ8OdJnk7/r2Zu+BbQRGTvdCEncWko=
//   srinu / Srinu@2024  → vFa7CtLT2qotKeGZykMlUjYr3VXbvF/wzJp3XEL0j6U=
//   vinay / Vinay@123   → 7B5TSZDEcEHcKvwDdX4R/LcA2IsdPNR6sSi6LDWYYZg=
async function hashPwd(plain) {
  const d = await crypto.subtle.digest('SHA-256', ENC.encode(plain + '_OMA_SALT_2024'));
  return btoa(String.fromCharCode(...new Uint8Array(d)));
}

async function hashOTP(otp) {
  const d = await crypto.subtle.digest('SHA-256', ENC.encode(String(otp) + '_OTP_SALT'));
  return btoa(String.fromCharCode(...new Uint8Array(d)));
}

// ── RESPONSE HELPERS ──────────────────────────────────────────
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization,X-Requested-With',
  'Access-Control-Max-Age': '86400',
};

const JSON_HEADERS = { ...CORS_HEADERS, 'Content-Type': 'application/json; charset=utf-8' };

function ok(data, status = 200, extra = {}) {
  return new Response(
    JSON.stringify({ success: true, data, ...extra }),
    { status, headers: JSON_HEADERS }
  );
}

function okList(data, meta) {
  return new Response(
    JSON.stringify({ success: true, data, meta }),
    { status: 200, headers: JSON_HEADERS }
  );
}

function err(msg, status = 400) {
  console.error(`[ERR ${status}]`, msg);
  return new Response(
    JSON.stringify({ success: false, error: String(msg) }),
    { status, headers: JSON_HEADERS }
  );
}

// ── UTILITIES ─────────────────────────────────────────────────
function uid(prefix = 'ID') {
  return prefix + Date.now().toString(36).toUpperCase() +
    Math.random().toString(36).slice(2, 6).toUpperCase();
}

async function parseBody(req) {
  try {
    const ct = req.headers.get('content-type') || '';
    if (ct.includes('application/json')) return await req.json();
    const text = await req.text();
    if (!text) return {};
    return JSON.parse(text);
  } catch(e) {
    console.error('[parseBody]', e.message);
    return {};
  }
}

function pageArgs(url) {
  const page  = Math.max(1, Number(url.searchParams.get('page')) || 1);
  const limit = Math.min(500, Math.max(1, Number(url.searchParams.get('limit')) || 50));
  return { page, limit, offset: (page - 1) * limit };
}

// Match URL patterns like /clients/:id or /invoices/:id/payments
function routeMatch(pattern, path) {
  const pp = pattern.split('/').filter(Boolean);
  const sp = path.split('/').filter(Boolean);
  if (pp.length !== sp.length) return null;
  const params = {};
  for (let i = 0; i < pp.length; i++) {
    if (pp[i].startsWith(':')) params[pp[i].slice(1)] = sp[i];
    else if (pp[i] !== sp[i]) return null;
  }
  return params;
}

async function getSetting(db, key) {
  try {
    const r = await db.prepare('SELECT value FROM settings WHERE key=?').bind(key).first();
    if (!r) return null;
    try { return JSON.parse(r.value); } catch { return r.value; }
  } catch { return null; }
}

async function logAct(db, userId, userName, action, entityType, entityId, detail) {
  try {
    await db.prepare(
      `INSERT INTO activity_log(id,user_id,user_name,action,entity_type,entity_id,detail,created_at)
       VALUES(?,?,?,?,?,?,?,datetime('now'))`
    ).bind(uid('ACT'), userId||null, userName||null, action,
           entityType||null, entityId||null, detail||null).run();
  } catch(e) { console.warn('[logAct]', e.message); }
}

// ── AUTH MIDDLEWARE ───────────────────────────────────────────
async function authenticate(req, secret) {
  const ah = req.headers.get('Authorization') || req.headers.get('authorization') || '';
  if (!ah.startsWith('Bearer ')) {
    return { user: null, authErr: err('Missing or invalid Authorization header. Please login.', 401) };
  }
  const token = ah.slice(7).trim();
  const payload = await verifyJWT(token, secret);
  if (!payload) {
    return { user: null, authErr: err('Session expired or invalid token. Please login again.', 401) };
  }
  return { user: payload, authErr: null };
}

// ── DB SETUP (runs on EVERY request — idempotent, fast after first run) ──
async function ensureDB(db) {
  const tables = [
    `CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      username TEXT,
      mobile TEXT NOT NULL,
      email TEXT,
      role TEXT NOT NULL DEFAULT 'staff',
      password_hash TEXT,
      designation TEXT,
      department TEXT,
      status TEXT NOT NULL DEFAULT 'active',
      last_login TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      deleted_at TEXT,
      deleted_by TEXT,
      UNIQUE(username),
      UNIQUE(mobile)
    )`,
    `CREATE TABLE IF NOT EXISTS otps (
      id TEXT PRIMARY KEY, mobile TEXT NOT NULL, otp_hash TEXT NOT NULL,
      expires_at TEXT NOT NULL, used INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS clients (
      id TEXT PRIMARY KEY, client_no TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL, type TEXT NOT NULL DEFAULT 'Individual',
      mobile TEXT, email TEXT, gstin TEXT, pan TEXT, aadhaar TEXT,
      address TEXT, city TEXT, state TEXT, pincode TEXT,
      assigned_to TEXT, status TEXT NOT NULL DEFAULT 'active',
      notes TEXT, created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      deleted_at TEXT, deleted_by TEXT
    )`,
    `CREATE TABLE IF NOT EXISTS services (
      id TEXT PRIMARY KEY, name TEXT NOT NULL, category TEXT,
      price REAL NOT NULL DEFAULT 0, description TEXT, duration TEXT,
      is_active INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      deleted_at TEXT, deleted_by TEXT
    )`,
    `CREATE TABLE IF NOT EXISTS tasks (
      id TEXT PRIMARY KEY, title TEXT NOT NULL, description TEXT,
      client_id TEXT, service_id TEXT, assigned_to TEXT,
      priority TEXT NOT NULL DEFAULT 'medium',
      status TEXT NOT NULL DEFAULT 'pending',
      progress INTEGER NOT NULL DEFAULT 0, due_date TEXT,
      completed_at TEXT, notes TEXT, created_by TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      deleted_at TEXT, deleted_by TEXT
    )`,
    `CREATE TABLE IF NOT EXISTS invoices (
      id TEXT PRIMARY KEY, invoice_no TEXT NOT NULL UNIQUE,
      client_id TEXT NOT NULL, service_id TEXT, description TEXT,
      base_amount REAL NOT NULL DEFAULT 0,
      discount_pct REAL NOT NULL DEFAULT 0, discount_amt REAL NOT NULL DEFAULT 0,
      tax_pct REAL NOT NULL DEFAULT 0, tax_amt REAL NOT NULL DEFAULT 0,
      total REAL NOT NULL DEFAULT 0, paid REAL NOT NULL DEFAULT 0,
      status TEXT NOT NULL DEFAULT 'Unpaid', payment_method TEXT DEFAULT 'Cash',
      due_date TEXT, paid_at TEXT, notes TEXT, razorpay_order_id TEXT,
      created_by TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      deleted_at TEXT, deleted_by TEXT
    )`,
    `CREATE TABLE IF NOT EXISTS payments (
      id TEXT PRIMARY KEY, invoice_id TEXT NOT NULL, client_id TEXT,
      amount REAL NOT NULL, method TEXT NOT NULL DEFAULT 'Cash',
      status TEXT NOT NULL DEFAULT 'success',
      razorpay_payment_id TEXT, transaction_ref TEXT, notes TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      deleted_at TEXT
    )`,
    `CREATE TABLE IF NOT EXISTS messages (
      id TEXT PRIMARY KEY, thread_id TEXT NOT NULL,
      from_id TEXT NOT NULL, to_id TEXT, content TEXT NOT NULL,
      is_read INTEGER NOT NULL DEFAULT 0, read_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      deleted_at TEXT
    )`,
    `CREATE TABLE IF NOT EXISTS admin_ideas (
      id TEXT PRIMARY KEY, title TEXT NOT NULL, content TEXT,
      youtube_url TEXT, category TEXT DEFAULT 'announcement',
      is_pinned INTEGER NOT NULL DEFAULT 0,
      created_by TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      deleted_at TEXT
    )`,
    `CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY, value TEXT NOT NULL,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS activity_log (
      id TEXT PRIMARY KEY, user_id TEXT, user_name TEXT,
      action TEXT NOT NULL, entity_type TEXT, entity_id TEXT,
      detail TEXT, created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS backup_log (
      id TEXT PRIMARY KEY, r2_key TEXT NOT NULL, size_bytes INTEGER,
      status TEXT DEFAULT 'success',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,
  ];

  // Run all CREATE TABLE statements
  for (const sql of tables) {
    await db.prepare(sql).run();
  }

  // Seed default users — INSERT OR IGNORE never overwrites existing data
  await db.prepare(
    `INSERT OR IGNORE INTO users
     (id,name,username,mobile,email,role,password_hash,designation,status,created_at,updated_at)
     VALUES(?,?,?,?,?,?,?,?,'active',datetime('now'),datetime('now'))`
  ).bind('USR001','Admin','admin','9581880088','admin@omassociates.in','admin',
         'ue9RPmqeR8hcLLQ8OdJnk7/r2Zu+BbQRGTvdCEncWko=','Super Admin').run();

  await db.prepare(
    `INSERT OR IGNORE INTO users
     (id,name,username,mobile,email,role,password_hash,designation,status,created_at,updated_at)
     VALUES(?,?,?,?,?,?,?,?,'active',datetime('now'),datetime('now'))`
  ).bind('USR002','Srikanth','srinu','9581880089','srinu@omassociates.in','admin',
         'vFa7CtLT2qotKeGZykMlUjYr3VXbvF/wzJp3XEL0j6U=','Admin').run();

  await db.prepare(
    `INSERT OR IGNORE INTO users
     (id,name,username,mobile,email,role,password_hash,designation,status,created_at,updated_at)
     VALUES(?,?,?,?,?,?,?,?,'active',datetime('now'),datetime('now'))`
  ).bind('USR003','Vinay','vinay','9581880090','vinay@omassociates.in','admin',
         '7B5TSZDEcEHcKvwDdX4R/LcA2IsdPNR6sSi6LDWYYZg=','Admin').run();

  // Default settings
  const defaults = [
    ['firm_name',     '"OM Associates"'],
    ['firm_address',  '"JAGTIAL, Telangana 505327"'],
    ['firm_phone',    '"9581880088"'],
    ['firm_email',    '"srindbankings@gmail.com"'],
    ['firm_web',      '"https://om-associates.pages.dev/"'],
    ['firm_gst',      '""'], ['firm_pan', '""'],
    ['razorpay_key_id', '""'], ['razorpay_key_secret', '""'],
    ['otp_provider',  '"console"'],
    ['invoice_prefix','"OMA"'],
    ['tax_pct',       '18'],
    ['currency',      '"INR"'],
  ];
  for (const [k, v] of defaults) {
    await db.prepare(
      `INSERT OR IGNORE INTO settings(key,value,updated_at) VALUES(?,?,datetime('now'))`
    ).bind(k, v).run();
  }
}

// ── AUTH ROUTES ───────────────────────────────────────────────
async function authRoutes(method, subpath, req, env) {
  const JWT_SECRET = env.JWT_SECRET || 'om_crm_jwt_secret_2024_fallback';

  // ── POST /auth/login ──────────────────────────────────────
  if (method === 'POST' && subpath === '/login') {
    const body = await parseBody(req);
    console.log('[login] attempt → identifier:', body.username || body.mobile || '(empty)');

    const identifier = String(body.username || body.mobile || '').trim();
    const password   = String(body.password || '').trim();

    if (!identifier) return err('Username or mobile is required');
    if (!password)   return err('Password is required');

    // Find user by username OR mobile
    let user;
    try {
      user = await env.DB.prepare(
        `SELECT * FROM users
         WHERE (username = ? OR mobile = ?)
           AND deleted_at IS NULL
         LIMIT 1`
      ).bind(identifier, identifier).first();
    } catch(e) {
      console.error('[login] DB query failed:', e.message);
      return err('Database error during login: ' + e.message, 500);
    }

    if (!user) {
      console.log('[login] user not found for:', identifier);
      return err('User not found. Check username or mobile number.', 401);
    }
    if (user.status !== 'active') {
      return err('Account is inactive. Contact admin.', 403);
    }
    if (!user.password_hash) {
      return err('No password set. Use Forgot Password to set one.', 401);
    }

    const hash = await hashPwd(password);
    console.log('[login] hash check → stored:', user.password_hash?.slice(0,8), 'computed:', hash.slice(0,8));

    if (hash !== user.password_hash) {
      return err('Incorrect password.', 401);
    }

    // Success — sign token
    const token = await signJWT(
      { sub: user.id, name: user.name, mobile: user.mobile, role: user.role },
      JWT_SECRET
    );

    // Update last_login (non-blocking)
    env.DB.prepare(`UPDATE users SET last_login = datetime('now') WHERE id = ?`)
      .bind(user.id).run().catch(e => console.warn('[login] last_login update:', e.message));

    // Store session in KV if available
    if (env.KV) {
      env.KV.put(`session:${user.id}`, token, { expirationTtl: 604800 })
        .catch(e => console.warn('[login] KV session:', e.message));
    }

    logAct(env.DB, user.id, user.name, 'Login', 'user', user.id, 'Password login');

    return ok({
      token,
      user: {
        id: user.id, name: user.name, mobile: user.mobile,
        role: user.role, email: user.email, designation: user.designation
      }
    });
  }

  // ── POST /auth/otp/send ───────────────────────────────────
  if (method === 'POST' && subpath === '/otp/send') {
    const body = await parseBody(req);
    const mobile = String(body.mobile || '').trim();
    if (!mobile || mobile.length < 10) return err('Valid 10-digit mobile required');

    const user = await env.DB.prepare(
      `SELECT id,name,role FROM users WHERE mobile=? AND status='active' AND deleted_at IS NULL LIMIT 1`
    ).bind(mobile).first().catch(() => null);
    if (!user) return err('Mobile not registered', 404);

    const otp = String(Math.floor(100000 + Math.random() * 900000));
    const otpHash = await hashOTP(otp);
    await env.DB.prepare(`UPDATE otps SET used=1 WHERE mobile=? AND used=0`).bind(mobile).run().catch(() => {});
    await env.DB.prepare(
      `INSERT INTO otps(id,mobile,otp_hash,expires_at,used,created_at)
       VALUES(?,?,?,datetime('now','+10 minutes'),0,datetime('now'))`
    ).bind(uid('OTP'), mobile, otpHash).run();

    console.log(`[OTP] ${mobile} → ${otp}`);
    const devData = (env.ENVIRONMENT !== 'production') ? { otp } : {};
    return ok({ message: 'OTP sent', expires_in: 600, ...devData });
  }

  // ── POST /auth/otp/verify ─────────────────────────────────
  if (method === 'POST' && subpath === '/otp/verify') {
    const body = await parseBody(req);
    const mobile = String(body.mobile || '').trim();
    const otp    = String(body.otp || '').trim();
    if (!mobile || otp.length !== 6) return err('mobile and 6-digit OTP required');

    const otpHash = await hashOTP(otp);
    const rec = await env.DB.prepare(
      `SELECT * FROM otps WHERE mobile=? AND otp_hash=? AND used=0 AND expires_at > datetime('now')
       ORDER BY created_at DESC LIMIT 1`
    ).bind(mobile, otpHash).first().catch(() => null);
    if (!rec) return err('Invalid or expired OTP', 401);

    await env.DB.prepare(`UPDATE otps SET used=1 WHERE id=?`).bind(rec.id).run();

    const user = await env.DB.prepare(
      `SELECT * FROM users WHERE mobile=? AND deleted_at IS NULL AND status='active' LIMIT 1`
    ).bind(mobile).first();
    if (!user) return err('User not found', 404);

    const token = await signJWT(
      { sub: user.id, name: user.name, mobile: user.mobile, role: user.role }, JWT_SECRET
    );
    env.DB.prepare(`UPDATE users SET last_login=datetime('now') WHERE id=?`).bind(user.id).run().catch(() => {});
    if (env.KV) env.KV.put(`session:${user.id}`, token, { expirationTtl: 604800 }).catch(() => {});

    return ok({
      token,
      user: { id: user.id, name: user.name, mobile: user.mobile, role: user.role, email: user.email }
    });
  }

  // ── POST /auth/forgot-password ────────────────────────────
  if (method === 'POST' && subpath === '/forgot-password') {
    const body = await parseBody(req);
    const identifier = String(body.username || body.mobile || body.identifier || '').trim();
    if (!identifier) return err('Enter username or mobile number');

    const user = await env.DB.prepare(
      `SELECT id,name,mobile FROM users
       WHERE (username=? OR mobile=?) AND deleted_at IS NULL AND status='active' LIMIT 1`
    ).bind(identifier, identifier).first().catch(() => null);

    if (!user) return err('User not found. Check username or mobile.', 404);
    if (!user.mobile) return err('No mobile registered for this user. Contact admin.');

    const otp = String(Math.floor(100000 + Math.random() * 900000));
    const otpHash = await hashOTP(otp);
    await env.DB.prepare(`UPDATE otps SET used=1 WHERE mobile=? AND used=0`).bind(user.mobile).run().catch(() => {});
    await env.DB.prepare(
      `INSERT INTO otps(id,mobile,otp_hash,expires_at,used,created_at)
       VALUES(?,?,?,datetime('now','+10 minutes'),0,datetime('now'))`
    ).bind(uid('OTP'), user.mobile, otpHash).run();

    console.log(`[FP-OTP] ${user.mobile} → ${otp}`);
    const masked = user.mobile.replace(/(\d{2})\d{4,6}(\d{2})/, '$1****$2');
    const devData = (env.ENVIRONMENT !== 'production') ? { otp, mobile: user.mobile } : {};
    return ok({ message: `OTP sent to ${masked}`, masked_mobile: masked, mobile: user.mobile, ...devData });
  }

  // ── POST /auth/reset-password ─────────────────────────────
  if (method === 'POST' && subpath === '/reset-password') {
    const body = await parseBody(req);
    const mobile = String(body.mobile || '').trim();
    const otp    = String(body.otp || '').trim();
    const np     = String(body.new_password || '');
    if (!mobile || otp.length !== 6 || np.length < 6)
      return err('mobile, 6-digit OTP and new_password (min 6 chars) required');

    const otpHash = await hashOTP(otp);
    const rec = await env.DB.prepare(
      `SELECT * FROM otps WHERE mobile=? AND otp_hash=? AND used=0 AND expires_at>datetime('now')
       ORDER BY created_at DESC LIMIT 1`
    ).bind(mobile, otpHash).first().catch(() => null);
    if (!rec) return err('Invalid or expired OTP', 401);

    await env.DB.prepare(`UPDATE otps SET used=1 WHERE id=?`).bind(rec.id).run();
    const hash = await hashPwd(np);
    await env.DB.prepare(
      `UPDATE users SET password_hash=?, updated_at=datetime('now') WHERE mobile=? AND deleted_at IS NULL`
    ).bind(hash, mobile).run();
    if (env.KV) {
      const u = await env.DB.prepare(`SELECT id FROM users WHERE mobile=?`).bind(mobile).first().catch(() => null);
      if (u) env.KV.delete(`session:${u.id}`).catch(() => {});
    }
    return ok({ message: 'Password reset! Please login with your new password.' });
  }

  // ── GET /auth/me ──────────────────────────────────────────
  if (method === 'GET' && subpath === '/me') {
    const { user, authErr } = await authenticate(req, JWT_SECRET);
    if (authErr) return authErr;
    const row = await env.DB.prepare(
      `SELECT id,name,username,mobile,email,role,designation,department,status,last_login,created_at
       FROM users WHERE id=? AND deleted_at IS NULL`
    ).bind(user.sub).first();
    if (!row) return err('User not found', 404);
    return ok(row);
  }

  // ── POST /auth/logout ─────────────────────────────────────
  if (method === 'POST' && subpath === '/logout') {
    const { user } = await authenticate(req, JWT_SECRET);
    if (user && env.KV) env.KV.delete(`session:${user.sub}`).catch(() => {});
    return ok({ message: 'Logged out' });
  }

  // ── POST /auth/change-password ────────────────────────────
  if (method === 'POST' && subpath === '/change-password') {
    const { user, authErr } = await authenticate(req, JWT_SECRET);
    if (authErr) return authErr;
    const body = await parseBody(req);
    if (!body.current_password || !body.new_password || body.new_password.length < 6)
      return err('current_password and new_password (min 6) required');
    const row = await env.DB.prepare(`SELECT password_hash FROM users WHERE id=?`).bind(user.sub).first();
    if (!row) return err('User not found', 404);
    if (await hashPwd(body.current_password) !== row.password_hash)
      return err('Current password is incorrect', 401);
    await env.DB.prepare(
      `UPDATE users SET password_hash=?, updated_at=datetime('now') WHERE id=?`
    ).bind(await hashPwd(body.new_password), user.sub).run();
    if (env.KV) env.KV.delete(`session:${user.sub}`).catch(() => {});
    return ok({ message: 'Password changed. Please login again.' });
  }

  return err(`Auth route not found: ${method} /auth${subpath}`, 404);
}

// ── CLIENTS ───────────────────────────────────────────────────
async function clientsRoutes(method, path, params, req, env) {
  const JWT_SECRET = env.JWT_SECRET || 'om_crm_jwt_secret_2024_fallback';
  const { user, authErr } = await authenticate(req, JWT_SECRET);
  if (authErr) return authErr;
  const url = new URL(req.url);

  // GET /clients/:id/invoices
  if (method === 'GET' && params.id && path.endsWith('/invoices')) {
    const rows = await env.DB.prepare(
      `SELECT i.*, s.name as service_name
       FROM invoices i LEFT JOIN services s ON s.id=i.service_id
       WHERE i.client_id=? AND i.deleted_at IS NULL ORDER BY i.created_at DESC`
    ).bind(params.id).all();
    return ok(rows.results || []);
  }

  // GET /clients/:id/tasks
  if (method === 'GET' && params.id && path.endsWith('/tasks')) {
    const rows = await env.DB.prepare(
      `SELECT t.*, u.name as assigned_name, s.name as service_name
       FROM tasks t
       LEFT JOIN users u ON u.id=t.assigned_to
       LEFT JOIN services s ON s.id=t.service_id
       WHERE t.client_id=? AND t.deleted_at IS NULL ORDER BY t.created_at DESC`
    ).bind(params.id).all();
    return ok(rows.results || []);
  }

  // GET /clients/:id
  if (method === 'GET' && params.id) {
    const row = await env.DB.prepare(
      `SELECT c.*, u.name as assigned_name,
       (SELECT COUNT(*) FROM tasks WHERE client_id=c.id AND deleted_at IS NULL) as task_count,
       (SELECT COALESCE(SUM(total),0) FROM invoices WHERE client_id=c.id AND deleted_at IS NULL) as total_billed,
       (SELECT COALESCE(SUM(paid),0) FROM invoices WHERE client_id=c.id AND deleted_at IS NULL) as total_paid
       FROM clients c LEFT JOIN users u ON u.id=c.assigned_to
       WHERE c.id=? AND c.deleted_at IS NULL`
    ).bind(params.id).first();
    if (!row) return err('Client not found', 404);
    return ok(row);
  }

  // GET /clients
  if (method === 'GET') {
    const q = url.searchParams.get('q') || '';
    const status = url.searchParams.get('status') || '';
    const { page, limit, offset } = pageArgs(url);
    let where = 'c.deleted_at IS NULL';
    const binds = [];
    if (q) { where += ` AND (c.name LIKE ? OR c.mobile LIKE ? OR c.gstin LIKE ? OR c.pan LIKE ?)`; const qp = `%${q}%`; binds.push(qp,qp,qp,qp); }
    if (status) { where += ` AND c.status=?`; binds.push(status); }
    const total = ((await env.DB.prepare(`SELECT COUNT(*) as n FROM clients c WHERE ${where}`).bind(...binds).first()) || {n:0}).n;
    const rows = await env.DB.prepare(
      `SELECT c.*, u.name as assigned_name FROM clients c
       LEFT JOIN users u ON u.id=c.assigned_to
       WHERE ${where} ORDER BY c.created_at DESC LIMIT ? OFFSET ?`
    ).bind(...binds, limit, offset).all();
    return okList(rows.results || [], { total, page, limit });
  }

  // POST /clients
  if (method === 'POST') {
    const b = await parseBody(req);
    if (!b.name) return err('name is required');
    const id = uid('CLT');
    const clientNo = 'CLI' + Date.now().toString(36).toUpperCase();
    await env.DB.prepare(
      `INSERT INTO clients(id,client_no,name,type,mobile,email,gstin,pan,aadhaar,address,city,state,pincode,assigned_to,status,notes,created_at,updated_at)
       VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,'','active',?,datetime('now'),datetime('now'))`
    ).bind(id,clientNo,b.name,b.type||'Individual',b.mobile||null,b.email||null,b.gstin||null,b.pan||null,
           b.aadhaar||null,b.address||null,b.city||null,b.state||null,b.pincode||null,b.notes||null).run();
    logAct(env.DB, user.sub, user.name, 'Client Created', 'client', id, b.name);
    return ok(await env.DB.prepare(`SELECT * FROM clients WHERE id=?`).bind(id).first(), 201);
  }

  // PUT /clients/:id
  if (method === 'PUT' && params.id) {
    const b = await parseBody(req);
    const allowed = ['name','type','mobile','email','gstin','pan','aadhaar','address','city','state','pincode','assigned_to','status','notes'];
    const fields = allowed.filter(k => b[k] !== undefined);
    if (!fields.length) return err('No valid fields to update');
    await env.DB.prepare(
      `UPDATE clients SET ${fields.map(k=>`${k}=?`).join(',')},updated_at=datetime('now') WHERE id=? AND deleted_at IS NULL`
    ).bind(...fields.map(k=>b[k]), params.id).run();
    return ok({ message: 'Client updated' });
  }

  // DELETE /clients/:id
  if (method === 'DELETE' && params.id) {
    if (user.role !== 'admin') return err('Admin access required', 403);
    await env.DB.prepare(
      `UPDATE clients SET deleted_at=datetime('now'), deleted_by=? WHERE id=? AND deleted_at IS NULL`
    ).bind(user.sub, params.id).run();
    return ok({ message: 'Client deleted' });
  }

  return err(`Unknown client route: ${method} ${path}`, 404);
}

// ── SERVICES ──────────────────────────────────────────────────
async function servicesRoutes(method, path, params, req, env) {
  const JWT_SECRET = env.JWT_SECRET || 'om_crm_jwt_secret_2024_fallback';
  const { user, authErr } = await authenticate(req, JWT_SECRET);
  if (authErr) return authErr;
  const url = new URL(req.url);

  if (method === 'GET' && params.id) {
    const row = await env.DB.prepare(`SELECT * FROM services WHERE id=? AND deleted_at IS NULL`).bind(params.id).first();
    if (!row) return err('Service not found', 404);
    return ok(row);
  }
  if (method === 'GET') {
    const { limit, offset } = pageArgs(url);
    const rows = await env.DB.prepare(
      `SELECT * FROM services WHERE deleted_at IS NULL AND is_active=1 ORDER BY name ASC LIMIT ? OFFSET ?`
    ).bind(limit, offset).all();
    return ok(rows.results || []);
  }
  if (method === 'POST') {
    if (user.role !== 'admin') return err('Admin access required', 403);
    const b = await parseBody(req);
    if (!b.name) return err('name is required');
    const id = uid('SVC');
    await env.DB.prepare(
      `INSERT INTO services(id,name,category,price,description,duration,is_active,created_at,updated_at)
       VALUES(?,?,?,?,?,?,1,datetime('now'),datetime('now'))`
    ).bind(id,b.name,b.category||null,Number(b.price)||0,b.description||null,b.duration||null).run();
    return ok(await env.DB.prepare(`SELECT * FROM services WHERE id=?`).bind(id).first(), 201);
  }
  if (method === 'PUT' && params.id) {
    if (user.role !== 'admin') return err('Admin access required', 403);
    const b = await parseBody(req);
    const allowed = ['name','category','price','description','duration','is_active'];
    const fields = allowed.filter(k => b[k] !== undefined);
    if (!fields.length) return err('No fields to update');
    await env.DB.prepare(
      `UPDATE services SET ${fields.map(k=>`${k}=?`).join(',')},updated_at=datetime('now') WHERE id=?`
    ).bind(...fields.map(k=>b[k]), params.id).run();
    return ok({ message: 'Service updated' });
  }
  if (method === 'DELETE' && params.id) {
    if (user.role !== 'admin') return err('Admin access required', 403);
    await env.DB.prepare(
      `UPDATE services SET deleted_at=datetime('now'), deleted_by=? WHERE id=?`
    ).bind(user.sub, params.id).run();
    return ok({ message: 'Service deleted' });
  }
  return err(`Unknown service route: ${method} ${path}`, 404);
}

// ── INVOICES ──────────────────────────────────────────────────
async function invoicesRoutes(method, path, params, req, env) {
  const JWT_SECRET = env.JWT_SECRET || 'om_crm_jwt_secret_2024_fallback';
  const { user, authErr } = await authenticate(req, JWT_SECRET);
  if (authErr) return authErr;
  const url = new URL(req.url);

  // POST /invoices/:id/payments
  if (method === 'POST' && params.id && path.endsWith('/payments')) {
    const b = await parseBody(req);
    const amount = Number(b.amount);
    if (!amount || isNaN(amount) || amount <= 0) return err('Valid positive amount required');
    const inv = await env.DB.prepare(`SELECT * FROM invoices WHERE id=? AND deleted_at IS NULL`).bind(params.id).first();
    if (!inv) return err('Invoice not found', 404);
    const payId = uid('PAY');
    await env.DB.prepare(
      `INSERT INTO payments(id,invoice_id,client_id,amount,method,status,transaction_ref,notes,created_at,updated_at)
       VALUES(?,?,?,?,?,?,?,?,datetime('now'),datetime('now'))`
    ).bind(payId,params.id,inv.client_id,amount,b.method||'Cash','success',b.transaction_ref||null,b.notes||null).run();
    const newPaid = (inv.paid||0) + amount;
    const newStatus = newPaid >= inv.total ? 'Paid' : newPaid > 0 ? 'Partial' : 'Unpaid';
    await env.DB.prepare(
      `UPDATE invoices SET paid=?, status=?, ${newStatus==='Paid'?"paid_at=datetime('now'),":""}updated_at=datetime('now') WHERE id=?`
    ).bind(newPaid, newStatus, params.id).run();
    logAct(env.DB, user.sub, user.name, 'Payment', 'invoice', params.id, `₹${amount}`);
    return ok({ payment_id: payId, new_status: newStatus, total_paid: newPaid });
  }

  // GET /invoices/:id
  if (method === 'GET' && params.id) {
    const row = await env.DB.prepare(
      `SELECT i.*, c.name as client_name, c.mobile as client_mobile,
       c.email as client_email, c.address as client_address, c.gstin as client_gstin,
       s.name as service_name
       FROM invoices i
       LEFT JOIN clients c ON c.id=i.client_id
       LEFT JOIN services s ON s.id=i.service_id
       WHERE i.id=? AND i.deleted_at IS NULL`
    ).bind(params.id).first();
    if (!row) return err('Invoice not found', 404);
    return ok(row);
  }

  // GET /invoices
  if (method === 'GET') {
    const q = url.searchParams.get('q') || '';
    const status = url.searchParams.get('status') || '';
    const clientId = url.searchParams.get('client_id') || '';
    const { page, limit, offset } = pageArgs(url);
    let where = 'i.deleted_at IS NULL';
    const binds = [];
    if (q) { where += ` AND (i.invoice_no LIKE ? OR c.name LIKE ?)`; binds.push(`%${q}%`, `%${q}%`); }
    if (status) { where += ` AND i.status=?`; binds.push(status); }
    if (clientId) { where += ` AND i.client_id=?`; binds.push(clientId); }
    const total = ((await env.DB.prepare(
      `SELECT COUNT(*) as n FROM invoices i LEFT JOIN clients c ON c.id=i.client_id WHERE ${where}`
    ).bind(...binds).first()) || {n:0}).n;
    const rows = await env.DB.prepare(
      `SELECT i.*, c.name as client_name, s.name as service_name,
       (i.total - i.paid) as balance
       FROM invoices i
       LEFT JOIN clients c ON c.id=i.client_id
       LEFT JOIN services s ON s.id=i.service_id
       WHERE ${where} ORDER BY i.created_at DESC LIMIT ? OFFSET ?`
    ).bind(...binds, limit, offset).all();
    return okList(rows.results || [], { total, page, limit });
  }

  // POST /invoices
  if (method === 'POST') {
    const b = await parseBody(req);
    if (!b.client_id) return err('client_id is required');
    const base = Number(b.base_amount) || 0;
    const discPct = Number(b.discount_pct) || 0;
    const taxPct  = Number(b.tax_pct) || 0;
    const discAmt = base * discPct / 100;
    const after   = base - discAmt;
    const taxAmt  = after * taxPct / 100;
    const total   = after + taxAmt;
    const id = uid('INV');
    const prefix = (await getSetting(env.DB, 'invoice_prefix')) || 'OMA';
    const count = ((await env.DB.prepare(`SELECT COUNT(*) as n FROM invoices`).first()) || {n:0}).n;
    const invoiceNo = `${prefix}-${String(count+1).padStart(4,'0')}`;
    await env.DB.prepare(
      `INSERT INTO invoices(id,invoice_no,client_id,service_id,description,base_amount,discount_pct,discount_amt,tax_pct,tax_amt,total,paid,status,payment_method,due_date,notes,created_by,created_at,updated_at)
       VALUES(?,?,?,?,?,?,?,?,?,?,?,0,'Unpaid',?,?,?,?,datetime('now'),datetime('now'))`
    ).bind(id,invoiceNo,b.client_id,b.service_id||null,b.description||null,base,discPct,discAmt,taxPct,taxAmt,total,
           b.payment_method||'Cash',b.due_date||null,b.notes||null,user.sub).run();
    logAct(env.DB, user.sub, user.name, 'Invoice Created', 'invoice', id, invoiceNo);
    return ok(await env.DB.prepare(`SELECT * FROM invoices WHERE id=?`).bind(id).first(), 201);
  }

  // PUT /invoices/:id
  if (method === 'PUT' && params.id) {
    const b = await parseBody(req);
    const allowed = ['description','status','payment_method','due_date','notes'];
    const fields = allowed.filter(k => b[k] !== undefined);
    if (!fields.length) return err('No valid fields to update');
    await env.DB.prepare(
      `UPDATE invoices SET ${fields.map(k=>`${k}=?`).join(',')},updated_at=datetime('now') WHERE id=? AND deleted_at IS NULL`
    ).bind(...fields.map(k=>b[k]), params.id).run();
    return ok({ message: 'Invoice updated' });
  }

  // DELETE /invoices/:id
  if (method === 'DELETE' && params.id) {
    if (user.role !== 'admin') return err('Admin access required', 403);
    await env.DB.prepare(
      `UPDATE invoices SET deleted_at=datetime('now'), deleted_by=? WHERE id=?`
    ).bind(user.sub, params.id).run();
    return ok({ message: 'Invoice deleted' });
  }

  return err(`Unknown invoice route: ${method} ${path}`, 404);
}

// ── TASKS ─────────────────────────────────────────────────────
async function tasksRoutes(method, path, params, req, env) {
  const JWT_SECRET = env.JWT_SECRET || 'om_crm_jwt_secret_2024_fallback';
  const { user, authErr } = await authenticate(req, JWT_SECRET);
  if (authErr) return authErr;
  const url = new URL(req.url);

  if (method === 'GET' && params.id) {
    const row = await env.DB.prepare(
      `SELECT t.*, c.name as client_name, u.name as assigned_name, s.name as service_name
       FROM tasks t
       LEFT JOIN clients c ON c.id=t.client_id
       LEFT JOIN users u ON u.id=t.assigned_to
       LEFT JOIN services s ON s.id=t.service_id
       WHERE t.id=? AND t.deleted_at IS NULL`
    ).bind(params.id).first();
    if (!row) return err('Task not found', 404);
    return ok(row);
  }

  if (method === 'GET') {
    const q = url.searchParams.get('q') || '';
    const status = url.searchParams.get('status') || '';
    const priority = url.searchParams.get('priority') || '';
    const { page, limit, offset } = pageArgs(url);
    let where = 't.deleted_at IS NULL';
    const binds = [];
    if (q) { where += ` AND (t.title LIKE ? OR c.name LIKE ?)`; binds.push(`%${q}%`, `%${q}%`); }
    if (status) { where += ` AND t.status=?`; binds.push(status); }
    if (priority) { where += ` AND t.priority=?`; binds.push(priority); }
    const total = ((await env.DB.prepare(
      `SELECT COUNT(*) as n FROM tasks t LEFT JOIN clients c ON c.id=t.client_id WHERE ${where}`
    ).bind(...binds).first()) || {n:0}).n;
    const rows = await env.DB.prepare(
      `SELECT t.*, c.name as client_name, u.name as assigned_name
       FROM tasks t
       LEFT JOIN clients c ON c.id=t.client_id
       LEFT JOIN users u ON u.id=t.assigned_to
       WHERE ${where}
       ORDER BY CASE t.priority WHEN 'high' THEN 1 WHEN 'medium' THEN 2 ELSE 3 END, t.created_at DESC
       LIMIT ? OFFSET ?`
    ).bind(...binds, limit, offset).all();
    return okList(rows.results || [], { total, page, limit });
  }

  if (method === 'POST') {
    const b = await parseBody(req);
    if (!b.title) return err('title is required');
    const id = uid('TSK');
    await env.DB.prepare(
      `INSERT INTO tasks(id,title,description,client_id,service_id,assigned_to,priority,status,progress,due_date,notes,created_by,created_at,updated_at)
       VALUES(?,?,?,?,?,?,?,?,?,?,?,?,datetime('now'),datetime('now'))`
    ).bind(id,b.title,b.description||null,b.client_id||null,b.service_id||null,b.assigned_to||null,
           b.priority||'medium',b.status||'pending',Number(b.progress)||0,b.due_date||null,b.notes||null,user.sub).run();
    logAct(env.DB, user.sub, user.name, 'Task Created', 'task', id, b.title);
    return ok(await env.DB.prepare(`SELECT * FROM tasks WHERE id=?`).bind(id).first(), 201);
  }

  if (method === 'PUT' && params.id) {
    const b = await parseBody(req);
    const allowed = ['title','description','client_id','service_id','assigned_to','priority','status','progress','due_date','notes'];
    const fields = allowed.filter(k => b[k] !== undefined);
    if (!fields.length) return err('No valid fields to update');
    await env.DB.prepare(
      `UPDATE tasks SET ${fields.map(k=>`${k}=?`).join(',')},updated_at=datetime('now') WHERE id=?`
    ).bind(...fields.map(k=>b[k]), params.id).run();
    return ok({ message: 'Task updated' });
  }

  if (method === 'DELETE' && params.id) {
    if (user.role !== 'admin') return err('Admin access required', 403);
    await env.DB.prepare(
      `UPDATE tasks SET deleted_at=datetime('now'), deleted_by=? WHERE id=?`
    ).bind(user.sub, params.id).run();
    return ok({ message: 'Task deleted' });
  }

  return err(`Unknown task route: ${method} ${path}`, 404);
}

// ── PAYMENTS ──────────────────────────────────────────────────
async function paymentsRoutes(method, req, env) {
  const JWT_SECRET = env.JWT_SECRET || 'om_crm_jwt_secret_2024_fallback';
  const { user, authErr } = await authenticate(req, JWT_SECRET);
  if (authErr) return authErr;
  const url = new URL(req.url);
  const { limit, offset } = pageArgs(url);
  const rows = await env.DB.prepare(
    `SELECT p.*, c.name as client_name, i.invoice_no
     FROM payments p
     LEFT JOIN clients c ON c.id=p.client_id
     LEFT JOIN invoices i ON i.id=p.invoice_id
     WHERE p.deleted_at IS NULL ORDER BY p.created_at DESC LIMIT ? OFFSET ?`
  ).bind(limit, offset).all();
  return ok(rows.results || []);
}

// ── USERS ─────────────────────────────────────────────────────
async function usersRoutes(method, path, params, req, env) {
  const JWT_SECRET = env.JWT_SECRET || 'om_crm_jwt_secret_2024_fallback';
  const { user, authErr } = await authenticate(req, JWT_SECRET);
  if (authErr) return authErr;

  // PUT /users/:id/force-reset-password
  if (method === 'PUT' && params.id && path.endsWith('/force-reset-password')) {
    if (user.role !== 'admin') return err('Admin access required', 403);
    const b = await parseBody(req);
    if (!b.new_password || b.new_password.length < 6) return err('new_password (min 6 chars) required');
    const target = await env.DB.prepare(
      `SELECT id, name FROM users WHERE id=? AND deleted_at IS NULL`
    ).bind(params.id).first();
    if (!target) return err('User not found', 404);
    await env.DB.prepare(
      `UPDATE users SET password_hash=?, updated_at=datetime('now') WHERE id=?`
    ).bind(await hashPwd(b.new_password), params.id).run();
    if (env.KV) env.KV.delete(`session:${params.id}`).catch(() => {});
    logAct(env.DB, user.sub, user.name, 'Force Reset Password', 'user', params.id, `Reset for ${target.name}`);
    return ok({ message: `Password reset for ${target.name}` });
  }

  // GET /users/:id
  if (method === 'GET' && params.id) {
    const row = await env.DB.prepare(
      `SELECT id,name,username,mobile,email,role,designation,department,status,last_login,created_at
       FROM users WHERE id=? AND deleted_at IS NULL`
    ).bind(params.id).first();
    if (!row) return err('User not found', 404);
    return ok(row);
  }

  // GET /users
  if (method === 'GET') {
    if (user.role !== 'admin') return err('Admin access required', 403);
    const rows = await env.DB.prepare(
      `SELECT id,name,username,mobile,email,role,designation,department,status,last_login,created_at
       FROM users WHERE deleted_at IS NULL ORDER BY name ASC`
    ).all();
    return ok(rows.results || []);
  }

  // POST /users
  if (method === 'POST') {
    if (user.role !== 'admin') return err('Admin access required', 403);
    const b = await parseBody(req);
    if (!b.name || !b.mobile || !b.role || !b.password)
      return err('name, mobile, role, password are required');
    const exists = await env.DB.prepare(
      `SELECT id FROM users WHERE mobile=? AND deleted_at IS NULL`
    ).bind(b.mobile).first().catch(() => null);
    if (exists) return err('Mobile number already registered');
    const id = uid('USR');
    await env.DB.prepare(
      `INSERT INTO users(id,name,username,mobile,email,role,password_hash,designation,department,status,created_at,updated_at)
       VALUES(?,?,?,?,?,?,?,?,?,'active',datetime('now'),datetime('now'))`
    ).bind(id,b.name,b.username||null,b.mobile,b.email||null,b.role,await hashPwd(b.password),b.designation||null,b.department||null).run();
    logAct(env.DB, user.sub, user.name, 'User Created', 'user', id, `${b.name} (${b.role})`);
    const row = await env.DB.prepare(
      `SELECT id,name,username,mobile,email,role,designation,department,status FROM users WHERE id=?`
    ).bind(id).first();
    return ok(row, 201);
  }

  // PUT /users/:id
  if (method === 'PUT' && params.id) {
    if (user.role !== 'admin') return err('Admin access required', 403);
    const b = await parseBody(req);
    const allowed = ['name','designation','department','email','role','status'];
    const fields = allowed.filter(k => b[k] !== undefined);
    if (b.password && b.password.length >= 6) {
      fields.push('password_hash');
      b.password_hash = await hashPwd(b.password);
    }
    if (!fields.length) return err('No valid fields to update');
    await env.DB.prepare(
      `UPDATE users SET ${fields.map(k=>`${k}=?`).join(',')},updated_at=datetime('now') WHERE id=?`
    ).bind(...fields.map(k=>b[k]), params.id).run();
    return ok({ message: 'User updated' });
  }

  // DELETE /users/:id
  if (method === 'DELETE' && params.id) {
    if (user.role !== 'admin') return err('Admin access required', 403);
    if (params.id === user.sub) return err('Cannot delete your own account');
    await env.DB.prepare(
      `UPDATE users SET deleted_at=datetime('now'), deleted_by=? WHERE id=?`
    ).bind(user.sub, params.id).run();
    return ok({ message: 'User deleted' });
  }

  return err(`Unknown user route: ${method} ${path}`, 404);
}

// ── SETTINGS ──────────────────────────────────────────────────
async function settingsRoutes(method, path, req, env) {
  const JWT_SECRET = env.JWT_SECRET || 'om_crm_jwt_secret_2024_fallback';
  const { user, authErr } = await authenticate(req, JWT_SECRET);
  if (authErr) return authErr;

  if (method === 'GET' && path === '/settings/firm') {
    const keys = ['firm_name','firm_address','firm_phone','firm_email','firm_web','firm_gst','firm_pan','invoice_prefix','tax_pct','currency'];
    const out = {};
    for (const k of keys) out[k] = await getSetting(env.DB, k);
    return ok(out);
  }

  if (method === 'GET') {
    if (user.role !== 'admin') return err('Admin access required', 403);
    const rows = await env.DB.prepare(`SELECT key, value FROM settings ORDER BY key`).all();
    const out = {};
    for (const r of (rows.results || [])) {
      if (r.key.includes('secret')) { out[r.key] = '••••••••'; continue; }
      try { out[r.key] = JSON.parse(r.value); } catch { out[r.key] = r.value; }
    }
    return ok(out);
  }

  if (method === 'PUT') {
    if (user.role !== 'admin') return err('Admin access required', 403);
    const b = await parseBody(req);
    const ALLOWED = ['firm_name','firm_address','firm_phone','firm_email','firm_web','firm_gst','firm_pan',
                     'razorpay_key_id','razorpay_key_secret','otp_provider','sms_api_key',
                     'invoice_prefix','tax_pct','currency'];
    let count = 0;
    for (const [k, v] of Object.entries(b)) {
      if (!ALLOWED.includes(k)) continue;
      if (k.includes('secret') && v === '••••••••') continue;
      await env.DB.prepare(
        `INSERT INTO settings(key,value,updated_at) VALUES(?,?,datetime('now'))
         ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at`
      ).bind(k, JSON.stringify(v)).run();
      count++;
    }
    return ok({ message: `${count} setting(s) saved` });
  }

  return err(`Unknown settings route: ${method} ${path}`, 404);
}

// ── DASHBOARD ─────────────────────────────────────────────────
async function dashboardRoutes(method, path, params, req, env) {
  const JWT_SECRET = env.JWT_SECRET || 'om_crm_jwt_secret_2024_fallback';
  const { user, authErr } = await authenticate(req, JWT_SECRET);
  if (authErr) return authErr;

  if (method === 'GET' && path === '/dashboard/stats') {
    const [clients, services, openTasks, invStats, recentInv, pendingTasks, monthlyRev] = await Promise.all([
      env.DB.prepare(`SELECT COUNT(*) as n FROM clients WHERE deleted_at IS NULL`).first(),
      env.DB.prepare(`SELECT COUNT(*) as n FROM services WHERE deleted_at IS NULL AND is_active=1`).first(),
      env.DB.prepare(`SELECT COUNT(*) as n FROM tasks WHERE deleted_at IS NULL AND status NOT IN ('completed','cancelled')`).first(),
      env.DB.prepare(`SELECT
        COUNT(*) as total_invoices,
        COALESCE(SUM(total),0) as total_billed,
        COALESCE(SUM(paid),0) as total_paid,
        COALESCE(SUM(total-paid),0) as outstanding,
        COUNT(CASE WHEN status='Unpaid' THEN 1 END) as unpaid_count,
        COUNT(CASE WHEN status='Paid' THEN 1 END) as paid_count,
        COUNT(CASE WHEN status='Partial' THEN 1 END) as partial_count
        FROM invoices WHERE deleted_at IS NULL`).first(),
      env.DB.prepare(`SELECT i.*, c.name as client_name FROM invoices i LEFT JOIN clients c ON c.id=i.client_id WHERE i.deleted_at IS NULL ORDER BY i.created_at DESC LIMIT 5`).all(),
      env.DB.prepare(`SELECT t.*, c.name as client_name FROM tasks t LEFT JOIN clients c ON c.id=t.client_id WHERE t.deleted_at IS NULL AND t.status NOT IN ('completed','cancelled') ORDER BY CASE t.priority WHEN 'high' THEN 1 WHEN 'medium' THEN 2 ELSE 3 END LIMIT 5`).all(),
      env.DB.prepare(`SELECT strftime('%b %Y',created_at) as month, strftime('%Y-%m',created_at) as sort_key, COALESCE(SUM(total),0) as amount, COALESCE(SUM(paid),0) as collected FROM invoices WHERE deleted_at IS NULL AND created_at>=date('now','-6 months') GROUP BY sort_key ORDER BY sort_key`).all(),
    ]);
    return ok({
      clients: clients?.n || 0,
      services: services?.n || 0,
      open_tasks: openTasks?.n || 0,
      ...invStats,
      recent_invoices: recentInv.results || [],
      pending_tasks: pendingTasks.results || [],
      monthly_revenue: monthlyRev.results || [],
    });
  }

  if (method === 'GET' && path === '/dashboard/ideas') {
    const rows = await env.DB.prepare(
      `SELECT * FROM admin_ideas WHERE deleted_at IS NULL ORDER BY is_pinned DESC, created_at DESC LIMIT 20`
    ).all();
    return ok(rows.results || []);
  }

  if (method === 'POST' && path === '/dashboard/ideas') {
    if (user.role !== 'admin') return err('Admin access required', 403);
    const b = await parseBody(req);
    if (!b.title) return err('title is required');
    const id = uid('IDR');
    await env.DB.prepare(
      `INSERT INTO admin_ideas(id,title,content,youtube_url,category,is_pinned,created_by,created_at,updated_at)
       VALUES(?,?,?,?,?,?,?,datetime('now'),datetime('now'))`
    ).bind(id,b.title,b.content||null,b.youtube_url||null,b.category||'announcement',b.is_pinned?1:0,user.sub).run();
    return ok({ id }, 201);
  }

  if (method === 'DELETE' && params.ideaId) {
    if (user.role !== 'admin') return err('Admin access required', 403);
    await env.DB.prepare(
      `UPDATE admin_ideas SET deleted_at=datetime('now') WHERE id=?`
    ).bind(params.ideaId).run();
    return ok({ message: 'Deleted' });
  }

  return err(`Unknown dashboard route: ${method} ${path}`, 404);
}

// ── MESSAGES ──────────────────────────────────────────────────
async function messagesRoutes(method, path, params, req, env) {
  const JWT_SECRET = env.JWT_SECRET || 'om_crm_jwt_secret_2024_fallback';
  const { user, authErr } = await authenticate(req, JWT_SECRET);
  if (authErr) return authErr;
  const url = new URL(req.url);

  if (method === 'GET' && path === '/messages/threads') {
    const rows = await env.DB.prepare(
      `SELECT m.thread_id,
       MAX(m.created_at) as last_at,
       COUNT(CASE WHEN m.is_read=0 AND m.from_id!=? THEN 1 END) as unread,
       (SELECT content FROM messages WHERE thread_id=m.thread_id AND deleted_at IS NULL ORDER BY created_at DESC LIMIT 1) as last_message,
       (SELECT name FROM clients WHERE id=m.thread_id LIMIT 1) as thread_name
       FROM messages m
       WHERE m.deleted_at IS NULL
       GROUP BY m.thread_id ORDER BY last_at DESC LIMIT 50`
    ).bind(user.sub).all();
    return ok(rows.results || []);
  }

  if (method === 'GET' && params.threadId) {
    const limit = Number(url.searchParams.get('limit')) || 50;
    const rows = await env.DB.prepare(
      `SELECT m.*, u.name as sender_name FROM messages m
       LEFT JOIN users u ON u.id=m.from_id
       WHERE m.thread_id=? AND m.deleted_at IS NULL ORDER BY m.created_at DESC LIMIT ?`
    ).bind(params.threadId, limit).all();
    env.DB.prepare(
      `UPDATE messages SET is_read=1, read_at=datetime('now') WHERE thread_id=? AND from_id!=? AND is_read=0`
    ).bind(params.threadId, user.sub).run().catch(() => {});
    return ok((rows.results || []).reverse());
  }

  if (method === 'POST' && params.threadId) {
    const b = await parseBody(req);
    const content = String(b.content || '').trim();
    if (!content) return err('content is required');
    const id = uid('MSG');
    await env.DB.prepare(
      `INSERT INTO messages(id,thread_id,from_id,to_id,content,is_read,created_at)
       VALUES(?,?,?,?,?,0,datetime('now'))`
    ).bind(id, params.threadId, user.sub, params.threadId, content).run();
    return ok({ id, content, created_at: new Date().toISOString() }, 201);
  }

  return err(`Unknown messages route: ${method} ${path}`, 404);
}

// ── MIGRATE ───────────────────────────────────────────────────
async function migrateRoutes(method, req, env) {
  const JWT_SECRET = env.JWT_SECRET || 'om_crm_jwt_secret_2024_fallback';
  const { user, authErr } = await authenticate(req, JWT_SECRET);
  if (authErr) return authErr;
  if (user.role !== 'admin') return err('Admin access required', 403);
  if (method !== 'POST') return err('POST /migrate/import only');

  const data = await parseBody(req);
  const results = {};
  const n = v => v == null ? null : Number(v) || 0;
  const s = v => v == null ? null : String(v).slice(0, 2000);
  const ts = v => {
    if (!v) return new Date().toISOString();
    if (typeof v === 'string') return v;
    if (v._seconds) return new Date(v._seconds * 1000).toISOString();
    return new Date(v).toISOString();
  };

  if (Array.isArray(data.users)) {
    let imported = 0, skipped = 0;
    for (const u of data.users) {
      const mobile = s(u.mobile || u.phone);
      if (!mobile) { skipped++; continue; }
      const exists = await env.DB.prepare(`SELECT id FROM users WHERE mobile=?`).bind(mobile).first().catch(() => null);
      if (exists) { skipped++; continue; }
      const tmpHash = await hashPwd(mobile);
      await env.DB.prepare(
        `INSERT OR IGNORE INTO users(id,name,username,mobile,email,role,password_hash,designation,status,created_at,updated_at)
         VALUES(?,?,?,?,?,?,?,?,'active',?,datetime('now'))`
      ).bind(s(u.id)||uid('USR'),s(u.name)||'User',s(u.username)||null,mobile,s(u.email)||null,
             s(u.role)||'staff',s(u.password_hash)||tmpHash,s(u.designation)||null,ts(u.created_at)).run();
      imported++;
    }
    results.users = { imported, skipped };
  }

  if (Array.isArray(data.clients)) {
    let imported = 0, skipped = 0;
    for (const c of data.clients) {
      if (!c.name) { skipped++; continue; }
      const clientNo = s(c.client_no || c.clientNo) || 'CLI' + Date.now().toString(36).toUpperCase();
      await env.DB.prepare(
        `INSERT OR IGNORE INTO clients(id,client_no,name,type,mobile,email,gstin,pan,address,city,state,status,notes,created_at,updated_at)
         VALUES(?,?,?,?,?,?,?,?,?,?,?,'active',?,?,datetime('now'))`
      ).bind(s(c.id)||uid('CLT'),clientNo,s(c.name),s(c.type)||'Individual',s(c.mobile||c.phone),
             s(c.email),s(c.gstin),s(c.pan),s(c.address),s(c.city),s(c.state),s(c.notes),ts(c.created_at)).run();
      imported++;
    }
    results.clients = { imported, skipped };
  }

  logAct(env.DB, user.sub, user.name, 'Migration', 'system', null, JSON.stringify(results));
  return ok({ results, message: 'Migration complete!' });
}

// ── MAIN HANDLER ──────────────────────────────────────────────
export default {
  async fetch(request, env, ctx) {
    const url    = new URL(request.url);
    const method = request.method.toUpperCase();
    const path   = url.pathname;

    // ── 1. CORS PREFLIGHT — always respond immediately ──────
    if (method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // ── 2. Health check — no DB needed ──────────────────────
    if (path === '/health' || path === '/ping') {
      let dbOk = false, dbMsg = 'not tested';
      if (env.DB) {
        try { await env.DB.prepare('SELECT 1').first(); dbOk = true; dbMsg = 'ok'; }
        catch(e) { dbMsg = e.message; }
      }
      return new Response(JSON.stringify({
        ok: true, version: '4.0', timestamp: new Date().toISOString(),
        db: { ok: dbOk, msg: dbMsg },
        kv: !!env.KV, r2: !!env.R2,
      }), { headers: JSON_HEADERS });
    }

    // ── 3. Debug endpoint — diagnose without auth ───────────
    if (path === '/debug') {
      const info = {
        version: '4.0',
        method, path,
        db_bound: !!env.DB,
        kv_bound: !!env.KV,
        r2_bound: !!env.R2,
        jwt_secret_set: !!(env.JWT_SECRET),
        timestamp: new Date().toISOString(),
      };
      if (env.DB) {
        try {
          await ensureDB(env.DB);
          const u = await env.DB.prepare('SELECT COUNT(*) as n FROM users').first();
          info.users_count = u?.n || 0;
          info.db_status = 'ok — tables ready';
        } catch(e) {
          info.db_status = 'ERROR: ' + e.message;
        }
      }
      return new Response(JSON.stringify(info, null, 2), { headers: JSON_HEADERS });
    }

    // ── 4. Non-API paths → serve embedded SPA ───────────────
    const API_PREFIXES = [
      '/auth', '/clients', '/services', '/invoices', '/tasks',
      '/payments', '/users', '/settings', '/dashboard', '/messages',
      '/migrate', '/health', '/ping', '/debug', '/activity',
    ];
    const isApi = API_PREFIXES.some(p => path === p || path.startsWith(p + '/'));

    if (!isApi) {
      return new Response(INDEX_HTML, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'X-Content-Type-Options': 'nosniff',
          ...CORS_HEADERS,
        }
      });
    }

    // ── 5. Require D1 for all API routes ────────────────────
    if (!env.DB) {
      return err(
        'D1 database binding "DB" not found. ' +
        'In Cloudflare → Workers → Settings → Bindings, add a D1 binding named exactly "DB".',
        503
      );
    }

    // ── 6. Bootstrap DB synchronously ───────────────────────
    //    CREATE TABLE IF NOT EXISTS is idempotent — safe every request
    try {
      await ensureDB(env.DB);
    } catch(e) {
      console.error('[FATAL] ensureDB failed:', e.message);
      return err('Database setup failed: ' + e.message + '. Check D1 binding and permissions.', 500);
    }

    // ── 7. Route dispatch ────────────────────────────────────
    try {
      // AUTH
      if (path.startsWith('/auth')) {
        const subpath = path.slice(5) || '/'; // strip /auth
        return await authRoutes(method, subpath, request, env);
      }

      // CLIENTS
      if (path.startsWith('/clients')) {
        const params =
          routeMatch('/clients/:id/invoices', path) ||
          routeMatch('/clients/:id/tasks', path) ||
          routeMatch('/clients/:id', path) || {};
        return await clientsRoutes(method, path, params, request, env);
      }

      // SERVICES
      if (path.startsWith('/services')) {
        const params = routeMatch('/services/:id', path) || {};
        return await servicesRoutes(method, path, params, request, env);
      }

      // INVOICES
      if (path.startsWith('/invoices')) {
        const params =
          routeMatch('/invoices/:id/payments', path) ||
          routeMatch('/invoices/:id', path) || {};
        return await invoicesRoutes(method, path, params, request, env);
      }

      // TASKS
      if (path.startsWith('/tasks')) {
        const params = routeMatch('/tasks/:id', path) || {};
        return await tasksRoutes(method, path, params, request, env);
      }

      // PAYMENTS
      if (path === '/payments' || path.startsWith('/payments/')) {
        return await paymentsRoutes(method, request, env);
      }

      // USERS
      if (path.startsWith('/users')) {
        const params =
          routeMatch('/users/:id/force-reset-password', path) ||
          routeMatch('/users/:id', path) || {};
        return await usersRoutes(method, path, params, request, env);
      }

      // SETTINGS
      if (path.startsWith('/settings')) {
        return await settingsRoutes(method, path, request, env);
      }

      // DASHBOARD
      if (path.startsWith('/dashboard')) {
        const params = routeMatch('/dashboard/ideas/:ideaId', path) || {};
        return await dashboardRoutes(method, path, params, request, env);
      }

      // MESSAGES
      if (path.startsWith('/messages')) {
        const params =
          routeMatch('/messages/:threadId/:msgId', path) ||
          routeMatch('/messages/:threadId', path) || {};
        return await messagesRoutes(method, path, params, request, env);
      }

      // MIGRATE
      if (path === '/migrate/import') {
        return await migrateRoutes(method, request, env);
      }

      // ACTIVITY LOG
      if (path === '/activity') {
        const { user, authErr } = await authenticate(request, env.JWT_SECRET || 'om_crm_jwt_secret_2024_fallback');
        if (authErr) return authErr;
        if (user.role !== 'admin') return err('Admin access required', 403);
        const { limit, offset } = pageArgs(url);
        const rows = await env.DB.prepare(
          `SELECT * FROM activity_log ORDER BY created_at DESC LIMIT ? OFFSET ?`
        ).bind(limit, offset).all();
        return ok(rows.results || []);
      }

      // Not found
      return err(`Route not found: ${method} ${path}`, 404);

    } catch(e) {
      console.error('[Worker Error]', method, path, e.message);
      return err(`Server error: ${e.message}`, 500);
    }
  },

  // ── Scheduled backup ───────────────────────────────────────
  async scheduled(event, env, ctx) {
    ctx.waitUntil((async () => {
      if (!env.DB) return;
      try {
        const tables = ['users','clients','services','tasks','invoices','payments','settings','activity_log'];
        const backup = { date: new Date().toISOString(), tables: {} };
        for (const t of tables) {
          try {
            const r = await env.DB.prepare(`SELECT * FROM ${t}`).all();
            backup.tables[t] = r.results || [];
          } catch(e) { backup.tables[t] = { error: e.message }; }
        }
        const json  = JSON.stringify(backup);
        const bytes = new TextEncoder().encode(json);
        const key   = `backups/${new Date().toISOString().split('T')[0]}/backup-${Date.now()}.json`;
        if (env.R2) await env.R2.put(key, bytes, { httpMetadata: { contentType: 'application/json' } });
        await env.DB.prepare(
          `INSERT INTO backup_log(id,r2_key,size_bytes,status,created_at) VALUES(?,?,?,'success',datetime('now'))`
        ).bind(uid('BCK'), key, bytes.byteLength).run().catch(() => {});
        console.log('[BACKUP] done →', key);
      } catch(e) { console.error('[BACKUP]', e.message); }
    })());
  }
};
