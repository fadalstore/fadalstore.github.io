#!/usr/bin/env python3
"""Generate Etsy Digital Downloads eBook PDF with cover (reportlab)."""

import os
from PIL import Image, ImageDraw, ImageFont
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable, Image as RLImage
)
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY

# ── Colors ─────────────────────────────────────────────────────────────────────
ORANGE  = colors.HexColor("#f97316")
NAVY    = colors.HexColor("#0f172a")
SLATE   = colors.HexColor("#64748b")
WHITE   = colors.white
LIGHT   = colors.HexColor("#f8fafc")
GREEN_L = colors.HexColor("#f0fdf4")

W, H = A4  # 595.27 x 841.89 points

# ── Cover ──────────────────────────────────────────────────────────────────────

def make_cover(path="assets/images/etsy-digital-downloads-guide-cover.jpg"):
    if os.path.exists(path):
        print(f"Cover already exists -> {path}")
        return path
    IW, IH = 1200, 1600
    img = Image.new("RGB", (IW, IH), "#0f172a")
    draw = ImageDraw.Draw(img)
    for i in range(IH):
        r = int(15 + (i/IH)*20); g = int(23 + (i/IH)*60); b = int(42 + (i/IH)*80)
        draw.line([(0, i), (IW, i)], fill=(r, g, b))
    draw.rectangle([(0, 0), (IW, 8)], fill="#f97316")
    draw.rectangle([(0, IH-8), (IW, IH)], fill="#f97316")
    draw.polygon([(0,400),(IW,200),(IW,600),(0,750)], fill="#1e293b")
    draw.ellipse([(IW//2-120,140),(IW//2+120,380)], fill="#f97316")
    try:
        fb = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 90)
        fm = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 54)
        fs = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",       38)
        fk = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",  44)
        ft = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",  32)
    except Exception:
        fb=fm=fs=fk=ft=ImageFont.load_default()
    draw.text((IW//2,260), "2026",                             font=fk, fill="white",   anchor="mm")
    draw.text((IW//2,520), "ETSY DIGITAL",                    font=fb, fill="white",   anchor="mm")
    draw.text((IW//2,630), "DOWNLOADS",                       font=fb, fill="#f97316", anchor="mm")
    draw.text((IW//2,760), "Complete Money-Making Blueprint", font=fm, fill="#94a3b8", anchor="mm")
    draw.rectangle([(200,840),(1000,848)], fill="#f97316")
    for i, line in enumerate([
        "+ 15 Profitable Product Ideas",
        "+ Etsy SEO Secrets to Rank #1",
        "+ Scale from $0 to $2,000/Month",
        "+ Canva Creation Guide Included",
        "+ 30-Day Launch Action Plan",
    ]):
        draw.text((IW//2, 910+i*72), line, font=fs, fill="white", anchor="mm")
    draw.rectangle([(0,IH-180),(IW,IH-8)], fill="#0f172a")
    draw.text((IW//2,IH-110), "BY FADAL STORE",       font=ft, fill="#f97316", anchor="mm")
    draw.text((IW//2,IH-65),  "fadalstore.github.io", font=ft, fill="#64748b", anchor="mm")
    img.save(path, quality=92)
    print(f"Cover saved -> {path}")
    return path


# ── Styles ─────────────────────────────────────────────────────────────────────

def make_styles():
    base = getSampleStyleSheet()
    return {
        "h1": ParagraphStyle("H1", fontSize=20, textColor=ORANGE, fontName="Helvetica-Bold",
                             spaceAfter=6, spaceBefore=12),
        "h2": ParagraphStyle("H2", fontSize=14, textColor=WHITE,  fontName="Helvetica-Bold",
                             backColor=NAVY, spaceAfter=4, spaceBefore=14,
                             leftIndent=6, rightIndent=6, leading=20),
        "h3": ParagraphStyle("H3", fontSize=12, textColor=ORANGE, fontName="Helvetica-Bold",
                             spaceAfter=4, spaceBefore=10),
        "body": ParagraphStyle("Body", fontSize=11, leading=16, alignment=TA_JUSTIFY,
                               spaceAfter=6, fontName="Helvetica"),
        "bullet": ParagraphStyle("Bullet", fontSize=11, leading=15, leftIndent=14,
                                 spaceAfter=3, fontName="Helvetica",
                                 bulletText="\u2022"),
        "tip_head": ParagraphStyle("TipH", fontSize=10, textColor=ORANGE,
                                   fontName="Helvetica-Bold", backColor=colors.HexColor("#fff7ed"),
                                   leftIndent=6, spaceAfter=0),
        "tip_body": ParagraphStyle("TipB", fontSize=10, leading=14, fontName="Helvetica",
                                   backColor=colors.HexColor("#fff7ed"),
                                   leftIndent=6, rightIndent=6, spaceAfter=8),
        "check": ParagraphStyle("Check", fontSize=11, leading=16, leftIndent=8,
                                 fontName="Helvetica", spaceAfter=2),
        "toc_ch": ParagraphStyle("TocCh", fontSize=11, fontName="Helvetica-Bold",
                                  textColor=NAVY, spaceAfter=1),
        "toc_ti": ParagraphStyle("TocTi", fontSize=11, fontName="Helvetica",
                                  textColor=colors.HexColor("#334155"),
                                  leftIndent=12, spaceAfter=4),
        "footer": ParagraphStyle("Footer", fontSize=8, textColor=SLATE,
                                  fontName="Helvetica", alignment=TA_CENTER),
        "copy": ParagraphStyle("Copy", fontSize=9, textColor=SLATE,
                                fontName="Helvetica", spaceAfter=4),
        "prod_name": ParagraphStyle("ProdName", fontSize=11, fontName="Helvetica-Bold",
                                     textColor=NAVY, spaceAfter=2, spaceBefore=6),
        "prod_desc": ParagraphStyle("ProdDesc", fontSize=10, fontName="Helvetica",
                                     leading=14, spaceAfter=2),
    }

# ── Table helper ───────────────────────────────────────────────────────────────

def make_table(headers, rows, col_widths):
    data = [headers] + rows
    t = Table(data, colWidths=col_widths)
    style = TableStyle([
        ("BACKGROUND",   (0,0), (-1,0),  NAVY),
        ("TEXTCOLOR",    (0,0), (-1,0),  WHITE),
        ("FONTNAME",     (0,0), (-1,0),  "Helvetica-Bold"),
        ("FONTSIZE",     (0,0), (-1,0),  9),
        ("ALIGN",        (0,0), (-1,-1), "LEFT"),
        ("FONTNAME",     (0,1), (-1,-1), "Helvetica"),
        ("FONTSIZE",     (0,1), (-1,-1), 9),
        ("ROWBACKGROUNDS",(0,1),(-1,-1), [colors.white, colors.HexColor("#f1f5f9")]),
        ("GRID",         (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ("TOPPADDING",   (0,0), (-1,-1), 4),
        ("BOTTOMPADDING",(0,0), (-1,-1), 4),
        ("LEFTPADDING",  (0,0), (-1,-1), 6),
    ])
    t.setStyle(style)
    return t

# ── Checklist helper ───────────────────────────────────────────────────────────

def checklist(heading, items, S):
    elems = [Paragraph(heading, S["h3"])]
    for item in items:
        row = Table([[Paragraph("[ ]", S["body"]), Paragraph(item, S["body"])]],
                    colWidths=[20*mm, 145*mm])
        row.setStyle(TableStyle([
            ("BACKGROUND", (0,0),(-1,-1), GREEN_L),
            ("LINEBELOW",  (0,0),(-1,-1), 0.3, colors.HexColor("#d1fae5")),
            ("TOPPADDING", (0,0),(-1,-1), 3),
            ("BOTTOMPADDING",(0,0),(-1,-1),3),
            ("VALIGN",     (0,0),(-1,-1), "TOP"),
        ]))
        elems.append(row)
        elems.append(Spacer(1, 2))
    elems.append(Spacer(1, 8))
    return elems

# ── Tip helper ─────────────────────────────────────────────────────────────────

def tip(text, S):
    return [
        Paragraph(">> PRO TIP", S["tip_head"]),
        Paragraph(text, S["tip_body"]),
        Spacer(1, 6),
    ]

# ── Build PDF ──────────────────────────────────────────────────────────────────

def build_pdf(cover_path):
    out = "assets/pdfs/etsy-digital-downloads-blueprint-2026.pdf"
    os.makedirs("assets/pdfs", exist_ok=True)

    S = make_styles()
    story = []

    def hr(): return HRFlowable(width="100%", thickness=1, color=ORANGE, spaceAfter=6)
    def sp(h=8): return Spacer(1, h)
    def h1(t): return [Paragraph(t, S["h1"]), hr()]
    def h2(n, t): return [Paragraph(f"Chapter {n}: {t}", S["h2"]), sp(6)]
    def h3(t): return [Paragraph(t, S["h3"])]
    def body(t): return [Paragraph(t, S["body"])]
    def bullets(items): return [Paragraph(f"&bull; {i}", S["bullet"]) for i in items]

    def first_page(canvas, doc):
        canvas.saveState()
        canvas.drawImage(cover_path, 0, 0, width=W, height=H, preserveAspectRatio=False)
        canvas.restoreState()

    def later_pages(canvas, doc):
        canvas.saveState()
        canvas.setFont("Helvetica-Bold", 8)
        canvas.setFillColor(SLATE)
        canvas.drawCentredString(W/2, H - 12*mm,
            "Etsy Digital Downloads Blueprint 2026  |  fadalstore.github.io")
        canvas.setStrokeColor(ORANGE)
        canvas.setLineWidth(0.5)
        canvas.line(20*mm, H - 14*mm, W - 20*mm, H - 14*mm)
        canvas.setFont("Helvetica", 8)
        canvas.drawCentredString(W/2, 10*mm, f"Page {canvas.getPageNumber() - 1}")
        canvas.restoreState()

    doc = SimpleDocTemplate(
        out, pagesize=A4,
        leftMargin=20*mm, rightMargin=20*mm,
        topMargin=18*mm, bottomMargin=18*mm,
        title="Etsy Digital Downloads Blueprint 2026",
        author="Fadal Store",
    )

    # ── Cover page (full-page image drawn via callback) ───────────────────────
    story.append(PageBreak())

    # ── TOC ───────────────────────────────────────────────────────────────────
    story += h1("Table of Contents")
    toc = [
        ("Introduction",  "Why Etsy Digital Downloads Are the Best Side Hustle of 2026"),
        ("Chapter 1",     "What Are Digital Downloads & Why They Work"),
        ("Chapter 2",     "15 Profitable Digital Products to Sell on Etsy"),
        ("Chapter 3",     "How to Create Your Products (Tools & Tips)"),
        ("Chapter 4",     "Setting Up Your Etsy Shop for Success"),
        ("Chapter 5",     "Etsy SEO: How to Rank #1 and Get Free Traffic"),
        ("Chapter 6",     "Pricing, Marketing & Scaling to $2,000/Month"),
        ("Conclusion",    "Your 30-Day Launch Action Plan"),
    ]
    for ch, title in toc:
        story.append(Paragraph(ch, S["toc_ch"]))
        story.append(Paragraph(title, S["toc_ti"]))
        story.append(HRFlowable(width="100%", thickness=0.3, color=colors.HexColor("#e2e8f0"), spaceAfter=3))
    story.append(sp(12))
    story.append(Paragraph(
        "Copyright 2026 Fadal Store. All rights reserved. Personal use only. "
        "Do not resell or redistribute. Visit fadalstore.github.io",
        S["copy"]))
    story.append(PageBreak())

    # ── Introduction ─────────────────────────────────────────────────────────
    story += h1("Introduction")
    story += body(
        "Imagine waking up every morning to payment notifications &mdash; sales that happened "
        "while you slept. No shipping. No inventory. No customer calls. Just files you created "
        "once, selling on autopilot."
    )
    story += body(
        "That is the reality of selling digital downloads on Etsy. In 2026, Etsy has over "
        "90 million active buyers, and digital products now account for 31% of all transactions "
        "&mdash; up from 18% in 2023. The demand is real and growing."
    )
    story += body(
        "This blueprint gives you a step-by-step roadmap from your first product idea to your "
        "first $2,000 month. Whether you are a complete beginner or have tried Etsy before, "
        "follow this guide and you will have a working shop by the end of Week 1."
    )
    story += tip(
        "The best part about digital products: create once, sell unlimited times. A single "
        "well-made Canva template can generate passive income for years with zero extra effort.", S)

    # ── Chapter 1 ─────────────────────────────────────────────────────────────
    story.append(PageBreak())
    story += h2(1, "What Are Digital Downloads & Why They Work")
    story += body(
        "A digital download is any file a buyer purchases and receives instantly &mdash; no physical "
        "shipping involved. The buyer clicks 'Purchase', Etsy delivers the file automatically, "
        "and you earn money without lifting a finger."
    )
    story += h3("The Business Model in Numbers")
    story.append(make_table(
        ["Product Type", "Avg. Price", "Monthly Sales", "Monthly Income"],
        [["Wedding planner",  "$8.99",  "120 sales", "$1,078"],
         ["Resume template",  "$6.99",  "200 sales", "$1,398"],
         ["SVG bundle",       "$4.99",  "350 sales", "$1,746"],
         ["Budget tracker",   "$7.99",  "180 sales", "$1,438"],
         ["Notion template",  "$14.99", "100 sales", "$1,499"]],
        [50*mm, 35*mm, 40*mm, 40*mm]
    ))
    story.append(sp())
    story += h3("Why 2026 Is the Best Year to Start")
    story += bullets([
        "Etsy's buyer base grew 18% year-over-year &mdash; more customers than ever",
        "AI tools (Canva AI, ChatGPT) make product creation faster and cheaper",
        "Remote work drove massive demand for productivity templates and planners",
        "Digital products are 31% of all Etsy transactions and still growing",
        "Zero startup cost &mdash; begin with a free Canva account",
        "No inventory risk &mdash; if a product doesn't sell, you lose nothing",
    ])

    # ── Chapter 2 ─────────────────────────────────────────────────────────────
    story.append(PageBreak())
    story += h2(2, "15 Profitable Digital Products to Sell on Etsy")
    story += body("Here are 15 proven categories that generate consistent Etsy income in 2026:")
    products = [
        ("1. Printable Planners & Journals",
         "Daily, weekly, and monthly planners. Budget journals, fitness trackers, and goal-setting "
         "workbooks sell year-round. The #1 digital category on Etsy by volume."),
        ("2. Resume & Cover Letter Templates",
         "ATS-friendly templates in clean modern designs. Demand is year-round with peaks in "
         "January, May, and September when job seekers are most active."),
        ("3. Wedding Templates & Stationery",
         "Invitations, seating charts, place cards, thank-you notes. The wedding niche has high "
         "average order values &mdash; buyers spend freely for their big day."),
        ("4. SVG Cut Files for Cricut/Silhouette",
         "Crafters constantly buy SVG files for T-shirts, mugs, and home decor. Bundle 10-20 "
         "SVGs together for higher perceived value and better revenue per sale."),
        ("5. Social Media Templates",
         "Instagram posts, Pinterest pins, TikTok thumbnails. Businesses and content creators "
         "buy these in bulk, creating strong repeat customer potential."),
        ("6. Budget & Finance Spreadsheets",
         "Google Sheets and Excel templates for household budgets, business finances, and expense "
         "tracking. Appeals to both families and entrepreneurs."),
        ("7. Teacher & Classroom Resources",
         "Lesson plans, worksheets, and classroom decor. Teachers are Etsy's most loyal buyers "
         "&mdash; once they find a good seller, they return repeatedly."),
        ("8. Notion & Productivity Templates",
         "Project management and life planning templates. Tech-savvy buyers pay $10-$29 per "
         "template. The fastest-growing digital category in 2026."),
        ("9. Ebooks & How-To Guides",
         "Recipe books, travel itineraries, beginner guides. Low production cost with high "
         "perceived value &mdash; great for premium pricing strategies."),
        ("10. Lightroom Photo Presets",
         "Photo filters for Instagram aesthetics. One preset pack can sell thousands of copies "
         "to photographers and content creators seeking a consistent look."),
        ("11. Logo & Branding Kits",
         "Minimal logo templates, color palettes, and brand kits for small businesses. Strong "
         "demand from new entrepreneurs launching their first brand."),
        ("12. Kids Coloring & Activity Pages",
         "Coloring pages, activity sheets, and educational printables. Huge market of parents "
         "and teachers looking for affordable, printable entertainment."),
        ("13. Music & Sound Effects",
         "Royalty-free audio files for content creators, podcasters, and YouTubers. Niche but "
         "buyers are extremely loyal and purchase repeatedly."),
        ("14. Business Card Templates",
         "Editable Canva cards for freelancers and small business owners. Easy to create and "
         "high demand from entrepreneurs who need a professional look fast."),
        ("15. Motivational Wall Art Printables",
         "Quote prints, affirmation cards, and minimalist decor. Easy to make in Canva, "
         "strong sales year-round in the home decor and wellness niches."),
    ]
    for name, desc in products:
        story.append(Paragraph(name, S["prod_name"]))
        story.append(Paragraph(desc, S["prod_desc"]))

    # ── Chapter 3 ─────────────────────────────────────────────────────────────
    story.append(PageBreak())
    story += h2(3, "How to Create Your Products (Tools & Tips)")
    story += h3("Free Tools to Start With Today")
    story.append(make_table(
        ["Tool", "Best For", "Cost", "Skill Level"],
        [["Canva Free",    "Planners, templates, social media",  "Free",   "Beginner"],
         ["Canva Pro",     "Brand kits, premium assets",         "$13/mo", "Beginner"],
         ["Google Slides", "Presentation templates",             "Free",   "Beginner"],
         ["Inkscape",      "SVG files for Cricut",               "Free",   "Intermediate"],
         ["ChatGPT",       "Ebook content & copywriting",        "Free",   "Beginner"],
         ["Smartmockups",  "Product preview images",             "Free",   "Beginner"]],
        [38*mm, 60*mm, 28*mm, 39*mm]
    ))
    story.append(sp())
    story += h3("Create Your First Planner in Canva (Step by Step)")
    story += bullets([
        "Go to canva.com and create a free account",
        "Search 'A4 weekly planner' in the Canva template search bar",
        "Pick a template and customize: change colors, fonts, and layout sections",
        "Add your shop name as a small watermark in the corner",
        "Download as <b>PDF Print</b> (high quality) &mdash; this is your product file",
        "Create a second page: 'How to Use This Planner' instructions",
        "Go to Smartmockups.com and create a lifestyle preview image",
        "You now have a complete, ready-to-sell product",
    ])
    story += tip(
        "Always create a realistic mockup image for your listing. Products with mockups "
        "showing the item 'in use' get 3x more clicks than those with plain screenshots.", S)
    story += h3("AI-Powered Creation: Make Products in Under 2 Hours")
    story += body(
        "Use ChatGPT to generate ebook content instantly. Example prompt: "
        "<i>'Write a 30-day budget challenge guide with daily prompts, reflection questions, "
        "and weekly review sections &mdash; formatted for a printable workbook.'</i>"
    )
    story += body(
        "Paste the output into Canva, apply your brand colors, add a cover page, and export "
        "as PDF. A complete ebook in under 2 hours at zero cost."
    )

    # ── Chapter 4 ─────────────────────────────────────────────────────────────
    story.append(PageBreak())
    story += h2(4, "Setting Up Your Etsy Shop for Success")
    story += checklist("Complete Before Your First Listing", [
        "Choose a memorable shop name with niche keywords (e.g., 'PlannerHive', 'TemplateBloom')",
        "Write a keyword-rich shop bio including your niche and what you sell",
        "Create a professional shop banner in Canva (2000 x 500px recommended)",
        "Set up your payment method to receive earnings",
        "Write shop policies with 'instant digital download' disclaimer",
        "Upload 3-5 products before announcing your shop publicly",
        "Connect Google Analytics to your Etsy dashboard",
        "Enable Etsy Ads at $1/day minimum for initial visibility boost",
    ], S)
    story += h3("Writing Listings That Convert")
    story += body("Your title, tags, and first two lines of description are your SEO. Use this formula:")
    story += bullets([
        "<b>TITLE:</b> Main keyword first, then secondary, then descriptor",
        "Example: 'Weekly Planner Printable 2026 | A4 Letter | Canva | Instant Download'",
        "<b>DESCRIPTION:</b> First sentence must naturally include your main keyword",
        "<b>TAGS:</b> Use all 13 available tags &mdash; mix broad and specific terms",
        "<b>PHOTOS:</b> Upload all 10 photo slots with mockups and detail shots",
        "<b>PRICE:</b> Research 10 competitors and price in the middle range to start",
    ])
    story += tip(
        "Get your first 5 reviews fast by pricing your first products at $1.99-$2.99. "
        "Once you have reviews and social proof, raise prices to full rate.", S)

    # ── Chapter 5 ─────────────────────────────────────────────────────────────
    story.append(PageBreak())
    story += h2(5, "Etsy SEO: How to Rank #1 and Get Free Traffic")
    story += body(
        "Etsy's search algorithm ranks listings based on three main factors. Understanding "
        "them is the difference between zero sales and 100+ sales per month."
    )
    story += h3("The 3 Etsy Ranking Factors")
    story.append(make_table(
        ["Factor", "What It Means", "How to Optimize"],
        [["Relevancy",       "Title/tags match buyer's search",    "Use exact phrases buyers type"],
         ["Recency",         "New/renewed listings rank higher",   "Renew top listings every 7 days"],
         ["Conversion Rate", "Click + purchase rate of listing",   "Strong photos + competitive price"]],
        [38*mm, 72*mm, 55*mm]
    ))
    story.append(sp())
    story += h3("Free Keyword Research Method")
    story += bullets([
        "Type your product idea into Etsy's search bar &mdash; note every autocomplete suggestion",
        "These suggestions = real searches by real buyers happening right now",
        "Use <b>eRank.com</b> (free tier) to see monthly search volume for each phrase",
        "Use <b>Alura.io</b> (free trial) to see which tags competitors rank for",
        "Target keywords with 1,000-10,000 monthly searches (high demand, lower competition)",
        "Build multiple listings around different long-tail variations of your product",
    ])
    story += h3("Long-Tail Keyword Example")
    story += body(
        "Instead of 'planner' (millions of results, impossible to rank), target: "
        "<b>'undated weekly planner printable minimalist A5'</b> &mdash; "
        "~3,200 monthly searches, low competition, and buyers who know exactly what they want."
    )
    story += tip(
        "Renewing your best listing every 7 days costs $0.20 and gives a fresh visibility boost. "
        "This is the cheapest form of Etsy advertising available &mdash; and it works.", S)

    # ── Chapter 6 ─────────────────────────────────────────────────────────────
    story.append(PageBreak())
    story += h2(6, "Pricing, Marketing & Scaling to $2,000/Month")
    story += h3("Pricing Strategy by Stage")
    story.append(make_table(
        ["Stage", "Price Range", "Goal", "Timeline"],
        [["Launch",  "$1.99-$3.99",   "Get first reviews",   "Week 1-4"],
         ["Growth",  "$4.99-$7.99",   "Build momentum",      "Month 2-3"],
         ["Scaling", "$7.99-$14.99",  "Maximize profit",     "Month 4+"],
         ["Bundles", "$19.99-$29.99", "Increase avg. order", "Ongoing"]],
        [35*mm, 40*mm, 55*mm, 35*mm]
    ))
    story.append(sp())
    story += h3("The 3 Marketing Channels That Drive 80% of Sales")
    story += bullets([
        "<b>PINTEREST:</b> Create 5 vertical pins (1000x1500px) per product. Pinterest traffic "
        "is free, evergreen, and converts extremely well for Etsy products. Use Tailwind (free "
        "trial) to schedule and repeat pins automatically.",
        "<b>ETSY ADS:</b> Start at $1-3/day on your best listing. Etsy uses ad data to improve "
        "your organic ranking too. Track ROAS weekly and pause underperforming listings.",
        "<b>EMAIL LIST:</b> Offer one free printable as a lead magnet. Use Mailchimp (free up to "
        "500 subscribers) to send weekly promotions and new product announcements.",
    ])
    story += h3("The Bundle Strategy: Fastest Path to $2,000/Month")
    story += body(
        "Single product at $5.99 selling 100 times = $599/month.<br/><br/>"
        "The same 5 products bundled as 'The Complete Home Organization Collection' at $22.99, "
        "selling 90 times = <b>$2,069/month</b>.<br/><br/>"
        "Once you have 5+ related products, create a bundle and price it at 3-4x a single product. "
        "Add a bundle-only bonus (checklist, quick-start guide) to justify the premium value."
    )
    story += tip(
        "Add a 'You might also like...' section at the bottom of your product descriptions, "
        "linking to your other listings. Etsy has no native upsell feature &mdash; your "
        "description is your only cross-promotion tool.", S)

    # ── Conclusion: 30-Day Plan ───────────────────────────────────────────────
    story.append(PageBreak())
    story += h1("Your 30-Day Launch Action Plan")
    story += checklist("Week 1 &mdash; Research & Create", [
        "Choose your niche and product type (planner, template, SVG, ebook...)",
        "Research 20 keyword phrases using Etsy autocomplete + eRank",
        "Create your first 3 products in Canva and export as PDF Print",
        "Make mockup preview images for each product on Smartmockups.com",
        "Open your Etsy seller account and complete all profile sections",
    ], S)
    story += checklist("Week 2 &mdash; Launch & Optimize", [
        "Write optimized titles, descriptions, and tags for all 3 listings",
        "Upload 10 listing photos for each product (use all available slots)",
        "Set up shop policies, about section, and banner image",
        "Enable Etsy Ads at $1/day on your highest-quality listing",
        "Create a Pinterest Business account and pin all 3 products",
    ], S)
    story += checklist("Week 3 &mdash; Grow & Expand", [
        "Create 5 more products focused on your best-performing category",
        "Respond to any customer messages within 24 hours",
        "Review Etsy Stats: which listings get the most views and clicks?",
        "Create your first bundle combining your 3 best-selling products",
        "Set up a free Mailchimp account and add an email signup freebie",
    ], S)
    story += checklist("Week 4 &mdash; Scale & Automate", [
        "Review ad spend: pause any listing with negative ROAS",
        "Create a seasonal collection (Back to School, Holiday, New Year)",
        "Schedule Pinterest pins 2 weeks ahead using Tailwind scheduler",
        "Message buyers from Week 1 and politely request a review",
        "Plan next month: 10 new products + 2 new bundles",
    ], S)
    story += h3("Final Words")
    story += body(
        "Building a $2,000/month Etsy shop takes consistency, not perfection. Your first products "
        "will not be your best &mdash; and that is fine. Every successful seller started with "
        "imperfect listings and improved over time."
    )
    story += body(
        "The sellers who reach $2,000/month are not more talented than you. They simply published "
        "more products, studied their analytics, and kept going when early results were slow."
    )
    story += body(
        "Start today. Create your first product this week. Every day you wait is a day of "
        "potential passive income left on the table. Good luck!"
    )
    story += [sp(8), Paragraph("&mdash; Fadal Store Team | fadalstore.github.io", S["footer"])]

    doc.build(story, onFirstPage=first_page, onLaterPages=later_pages)
    print(f"PDF saved -> {out}")
    return out


if __name__ == "__main__":
    cover = make_cover()
    pdf   = build_pdf(cover)
    print(f"\nDone!\n  Cover: {cover}\n  PDF:   {pdf}")
