# Fadal Store

A static HTML website — Fadal Store — a financial freedom and online business hub. All content in English, designed to rank on Google with 5,000+ word articles.

## Design System (WordPress/Blogger Template)

**Color palette:**
- Primary: `#5b21b6` (deep purple)
- Accent: `#a855f7` (light purple)
- Green CTA: `#84cc16` (lime green for buttons)
- Dark footer: `#0f0528`
- Hero gradient: `#3b0764 → #5b21b6 → #7c3aed → #a855f7`

**Components:**
- Sticky white header with "FS" logo icon, desktop dropdown nav, "Subscribe Free →" CTA, hamburger mobile menu with slide-out drawer
- Purple gradient hero with newsletter form and subscriber stats
- Topic badges bar below hero
- Two-column layout: article grid + sidebar (popular posts, categories, newsletter)
- Stats bar in purple gradient
- Multi-column dark footer with social links, link columns, newsletter widget

## Structure

- `index.html` — Homepage (WordPress-style, full redesign)
- `about.html` — About page with mission, values, team info
- `contact.html` — Contact page with form, WhatsApp/email info
- `privacy-policy.html` — Full English privacy policy
- `terms-of-service.html` — Full English terms of service
- `article1.html` through `article30.html` — 30 English articles (5,000+ words each)
- `admin.html` — Private admin panel (password: fadal2024)
- `generate_english.js` — Article generator script (articles 1-29 use template, article30 is custom)
- `sitemap.xml` — SEO sitemap
- `robots.txt` — Crawling rules

## Articles (All English, 2026)

1. Freelancing for Beginners: $5,000/Month
2. Start a Profitable Blog: Zero to $10,000/Month
3. YouTube Channel Monetization: $8,000+/Month
4. Affiliate Marketing Mastery: $15,000/Month
5. Dropshipping in 2026: $50,000/Month Online Store
6. Amazon FBA: Six-Figure Business Guide
7. Social Media Marketing Career: $5,000–$15,000/Month
8. Online Tutoring & Coaching: $10,000/Month
9. Selling Digital Products: 90%+ Profit Margins
10. Print on Demand: $5,000/Month, No Inventory
11. Online Investing for Beginners 2026
12. Email Marketing Mastery: $8,000+/Month
13. SEO 2026: Ranking on Google Page One
14. Fiverr Success Blueprint: $10,000/Month
15. Upwork Mastery: $12,000+/Month
16. Copywriting Career: $100–$200/Hour
17. Graphic Design Business: $8,000/Month
18. Virtual Assistant Business: $5,000+/Month
19. Passive Income Blueprint: 15 Proven Streams
20. E-Commerce Success: Store Launch to Seven Figures
21. TikTok Monetization: $10,000+/Month
22. Instagram Income: Zero to $15,000/Month
23. Podcast Monetization: Six-Figure Business
24. Remote Work Jobs 2026
25. Making Money with AI Tools: 20 Strategies
26. Stock Photography & Video: $3,000+/Month
27. Web Development Freelancing: $10,000+/Month
28. Financial Freedom Blueprint 2026
29. Side Hustle to Full-Time Income
30. How to Make Money Online: 30 Proven Methods

## Admin Panel

Access at `/admin.html` — password: `fadal2024`

## Running

Workflow: `Start application` runs `npx serve . -l 5000`
(`serve` is installed globally via `npm install -g serve`)

## SEO

- Canonical URL base: `https://fadalstore.github.io/`
- All articles: JSON-LD Article + FAQPage schema
- Sitemap: `https://fadalstore.github.io/sitemap.xml`
- Meta tags: OG, Twitter Card, robots, canonical on all pages
- index.html & partnerstack.html: Local SEO keywords added (Somalia, Somaliland, Hargeisa)
- partnerstack.html: keyword "partnerstack affiliate network saas" added to meta

## E-Learning Platform (Koorsooyinka)

Full e-learning hub targeting Somali-speaking audience. All courses in Af-Soomaali.

### Structure
- `courses/index.html` — E-learning catalog hub (links to both courses)
- `courses/programming/index.html` — Programming course overview (7 lesson cards + stats)
- `courses/security/index.html` — Cybersecurity course overview (6 lesson cards + ethical disclaimer)

### Course 1: Python & Bash Programming (courses/programming/)
- `lesson1.html` — Hordhaca Programming (Intro to Programming & Python)
- `lesson2.html` — Setup Python (Install, IDE, Hello World)
- `lesson3.html` — Variables & Data Types (strings, int, list, dict, tuple)
- `lesson4.html` — Control Flow (if/else, while, for loops)
- `lesson5.html` — Bash Scripting (automation, shell scripts)
- `lesson6.html` — Functions & Modules (def, return, math, os, datetime)
- `lesson7.html` — Project Final (Calculator + File Organizer)

### Course 2: Cybersecurity & Ethical Hacking (courses/security/)
- `lesson1.html` — Hordhaca Ethical Hacking (CIA Triad, white/black/grey hat)
- `lesson2.html` — Networking Basics (IP, ports, TCP/UDP, DNS)
- `lesson3.html` — Linux for Hackers (Kali, permissions, grep, /etc files)
- `lesson4.html` — Information Gathering (WHOIS, DNS recon, theHarvester, Shodan, Google Dorking)
- `lesson5.html` — Nmap Scanning (port scan types, NSE scripts, output formats)
- `lesson6.html` — Web Security (OWASP Top 10, XSS, SQL Injection, Gobuster)

### Design Tokens (Courses)
- Programming: `--prog: #2563eb` (blue) — lesson hero `linear-gradient(135deg,#1e3a5f,#1d4ed8)`
- Security: `--sec: #059669`, `--sec-dark: #065f46` — lesson hero `linear-gradient(135deg,#064e3b,#059669)`
- Security course index hero: `linear-gradient(135deg,#064e3b 0%,#059669 60%,#34d399 100%)`

### AdSense
Publisher ID `ca-pub-9732596199385216` on all course pages.

### Navigation
- Main `index.html` navbar includes `🎓 Koorsooyinka` link to `courses/index.html`
- All course lesson pages have sticky navbar, breadcrumb, sidebar with all lesson links, prev/next buttons

## Af-Soomaali Content

- `partnerstack-somali.html` — Full Somali-language article: "Sidee Looga Shaqeeyaa PartnerStack Adoo Jooga Hargeysa?" (targets 93% Somali audience, local SEO)
- partnerstack.html — Somali summary section added at bottom (Af-Soomaali kooban)
- index.html topbar updated to highlight the new Somali article

## Deployment

Static deployment — `publicDir = "."`
Submit to Google Search Console: `https://fadalstore.github.io/sitemap.xml`
