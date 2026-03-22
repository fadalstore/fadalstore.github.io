(function () {
  'use strict';

  var ARTICLES = [
    { url: 'article1.html',  title: 'Freelancing for Beginners: $5,000/Month Guide',            img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=220&fit=crop' },
    { url: 'article2.html',  title: 'How to Start a Profitable Blog: Zero to $10,000/Month',    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=220&fit=crop' },
    { url: 'article3.html',  title: 'YouTube Monetization: $8,000+/Month Complete Guide',       img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=220&fit=crop' },
    { url: 'article4.html',  title: 'Affiliate Marketing Mastery: $15,000/Month',               img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=220&fit=crop' },
    { url: 'article5.html',  title: 'Dropshipping 2026: $50,000/Month Store from Scratch',      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=220&fit=crop' },
    { url: 'article6.html',  title: 'Amazon FBA Mastery: $100,000/Month Business',              img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=220&fit=crop' },
    { url: 'article7.html',  title: 'Social Media Manager: $8,000/Month From Home',             img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=220&fit=crop' },
    { url: 'article8.html',  title: 'TikTok Monetization: $10,000/Month from Videos',          img: 'https://images.unsplash.com/photo-1611605698335-8441f37a3b97?w=400&h=220&fit=crop' },
    { url: 'article9.html',  title: 'Digital Products: $20,000/Month Passive Income',          img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=220&fit=crop' },
    { url: 'article10.html', title: 'Print on Demand: $5,000/Month Without Inventory',         img: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=400&h=220&fit=crop' },
    { url: 'article11.html', title: 'Stock Trading for Beginners: $2,000/Month',               img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=220&fit=crop' },
    { url: 'article12.html', title: 'Real Estate Investing: Build Wealth Without Millions',     img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=220&fit=crop' },
    { url: 'article13.html', title: 'SEO Mastery 2026: Rank #1 and Get Free Traffic',          img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=220&fit=crop' },
    { url: 'article14.html', title: 'Fiverr Success: $10,000/Month Top Rated Seller',          img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=220&fit=crop' },
    { url: 'article15.html', title: 'Upwork Mastery: $12,000+/Month Contracts',                img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=220&fit=crop' },
    { url: 'article16.html', title: 'Copywriting Career: $100–$200/Hour Writer',               img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=220&fit=crop' },
    { url: 'article17.html', title: 'Email Marketing: $8,000/Month With a Small List',         img: 'https://images.unsplash.com/photo-1596526131083-e8c633064c89?w=400&h=220&fit=crop' },
    { url: 'article18.html', title: 'Virtual Assistant Business: $5,000+/Month',               img: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=220&fit=crop' },
    { url: 'article19.html', title: 'Passive Income Blueprint: 15 Streams of Income',          img: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=400&h=220&fit=crop' },
    { url: 'article20.html', title: 'E-Commerce Mastery: $200,000/Year Online Store',          img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=220&fit=crop' },
    { url: 'article21.html', title: 'Cryptocurrency Guide: Safe Investing & Trading',          img: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=220&fit=crop' },
    { url: 'article22.html', title: 'Online Tutoring: $6,000+/Month Teaching Online',          img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=220&fit=crop' },
    { url: 'article23.html', title: 'Podcast Monetization: $10,000/Month From Audio',          img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=220&fit=crop' },
    { url: 'article24.html', title: 'Instagram Monetization: $7,000+/Month',                  img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=220&fit=crop' },
    { url: 'article25.html', title: 'Making Money with AI Tools in 2026: 20 Strategies',       img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=220&fit=crop' },
    { url: 'article26.html', title: 'Stock Photography & Video: $3,000+/Month',                img: 'https://images.unsplash.com/photo-1554941426-7b7a72e60c3f?w=400&h=220&fit=crop' },
    { url: 'article27.html', title: 'Web Development Freelancing: $10,000+/Month',             img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=220&fit=crop' },
    { url: 'article28.html', title: 'Financial Freedom Blueprint 2026',                        img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=220&fit=crop' },
    { url: 'article29.html', title: 'Side Hustle to Full-Time Income: Replace 9-to-5',         img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=220&fit=crop' },
    { url: 'article30.html', title: 'How to Make Money Online in 2026: 30 Proven Methods',     img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=220&fit=crop' },
    { url: 'article31.html', title: 'How to Start a Website with Hostinger in 2026',           img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=220&fit=crop' },
    { url: 'article32.html', title: 'Advanced Amino Formula Review 2026',                      img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=220&fit=crop' },
    { url: 'article33.html', title: '50 Best Online Courses in 2026: Most In-Demand Skills',   img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=220&fit=crop' },
    { url: 'article34.html', title: 'Free Digital Marketing Course 2026: Complete A–Z Guide',  img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=220&fit=crop' },
    { url: 'article35.html', title: 'How to Make $500/Day Online in 2026 – Proven System',     img: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=400&h=220&fit=crop' },
    { url: 'article36.html', title: 'The Independent Backyard Book – Save $1,000+/Month',      img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=220&fit=crop' }
  ];

  function currentArticle() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    return path;
  }

  function isArticlePage() {
    return /^article\d+\.html$/.test(currentArticle());
  }

  function isHomePage() {
    var p = currentArticle();
    return p === 'index.html' || p === '' || p === '/';
  }

  /* ============================================================
     1. READING PROGRESS BAR
  ============================================================ */
  function initProgressBar() {
    if (!isArticlePage()) return;
    var bar = document.createElement('div');
    bar.id = 'fs-progress';
    bar.style.cssText = [
      'position:fixed;top:0;left:0;height:4px;width:0%',
      'background:linear-gradient(90deg,#5b21b6,#a855f7,#84cc16)',
      'z-index:99999;transition:width .1s linear',
      'border-radius:0 3px 3px 0;pointer-events:none'
    ].join(';');
    document.body.appendChild(bar);

    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY;
      var total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (total > 0 ? Math.min((scrolled / total) * 100, 100) : 0) + '%';
    }, { passive: true });
  }

  /* ============================================================
     2. BACK-TO-TOP BUTTON
  ============================================================ */
  function initBackToTop() {
    var btn = document.createElement('button');
    btn.id = 'fs-top-btn';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '&#8679;';
    btn.style.cssText = [
      'position:fixed;bottom:80px;right:20px',
      'width:48px;height:48px;border-radius:50%',
      'background:linear-gradient(135deg,#5b21b6,#a855f7)',
      'color:#fff;border:none;font-size:1.5rem;line-height:1',
      'cursor:pointer;box-shadow:0 4px 18px rgba(91,33,182,.45)',
      'z-index:9997;opacity:0;transform:translateY(10px)',
      'transition:opacity .3s,transform .3s;display:flex',
      'align-items:center;justify-content:center'
    ].join(';');
    document.body.appendChild(btn);

    window.addEventListener('scroll', function () {
      var show = window.scrollY > 400;
      btn.style.opacity = show ? '1' : '0';
      btn.style.transform = show ? 'translateY(0)' : 'translateY(10px)';
      btn.style.pointerEvents = show ? 'auto' : 'none';
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ============================================================
     3. SHARE BUTTONS  (article pages only)
  ============================================================ */
  function makeShareBlock(idSuffix) {
    var url = encodeURIComponent(window.location.href);
    var title = encodeURIComponent(document.title.replace(' | Fadal Store', ''));

    var wrap = document.createElement('div');
    wrap.id = 'fs-share-' + idSuffix;
    wrap.style.cssText = [
      'background:linear-gradient(135deg,#f3f0ff,#fdf4ff)',
      'border:2px solid #e9d5ff;border-radius:14px',
      'padding:20px 24px;margin:28px 0;text-align:center'
    ].join(';');

    var btnBase = [
      'display:inline-flex;align-items:center;gap:8px',
      'padding:10px 20px;border-radius:25px',
      'text-decoration:none;font-weight:700;font-size:.88rem',
      'margin:4px;cursor:pointer;border:none;transition:opacity .2s'
    ].join(';');

    wrap.innerHTML =
      '<p style="margin:0 0 14px;font-weight:700;color:#5b21b6;font-size:1rem;">' +
        '&#128226; La wadaag — Gacan u geyso qof baahan waxbarashada!' +
      '</p>' +
      '<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;">' +

        '<a href="https://wa.me/?text=' + title + '%20' + url + '" ' +
           'target="_blank" rel="noopener" ' +
           'style="' + btnBase + 'background:#25D366;color:#fff;box-shadow:0 3px 10px rgba(37,211,102,.3);">' +
          '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.112.553 4.094 1.522 5.812L0 24l6.322-1.506A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.034-1.384l-.361-.214-3.741.891.926-3.632-.235-.374A9.786 9.786 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>' +
          'WhatsApp' +
        '</a>' +

        '<a href="https://www.facebook.com/sharer/sharer.php?u=' + url + '" ' +
           'target="_blank" rel="noopener" ' +
           'style="' + btnBase + 'background:#1877F2;color:#fff;box-shadow:0 3px 10px rgba(24,119,242,.3);">' +
          '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>' +
          'Facebook' +
        '</a>' +

        '<a href="https://twitter.com/intent/tweet?text=' + title + '&url=' + url + '" ' +
           'target="_blank" rel="noopener" ' +
           'style="' + btnBase + 'background:#000;color:#fff;box-shadow:0 3px 10px rgba(0,0,0,.2);">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>' +
          'X / Twitter' +
        '</a>' +

        '<a href="https://t.me/share/url?url=' + url + '&text=' + title + '" ' +
           'target="_blank" rel="noopener" ' +
           'style="' + btnBase + 'background:#229ED9;color:#fff;box-shadow:0 3px 10px rgba(34,158,217,.3);">' +
          '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>' +
          'Telegram' +
        '</a>' +

        '<button ' +
           'onclick="navigator.clipboard.writeText(window.location.href).then(function(){var b=this;b.textContent=\'✅ Copied!\';setTimeout(function(){b.textContent=\'🔗 Copy Link\';},2000)}.bind(this))" ' +
           'style="' + btnBase + 'background:#6b7280;color:#fff;box-shadow:0 3px 10px rgba(107,114,128,.25);">' +
          '&#128279; Copy Link' +
        '</button>' +

      '</div>';

    return wrap;
  }

  function initShareButtons() {
    if (!isArticlePage()) return;

    var container = document.querySelector('.container');
    if (!container) return;

    var meta = container.querySelector('.article-meta');
    if (meta) {
      meta.parentNode.insertBefore(makeShareBlock('top'), meta.nextSibling);
    } else {
      container.insertBefore(makeShareBlock('top'), container.firstChild);
    }

    var cta = container.querySelector('.cta-box');
    if (cta) {
      cta.parentNode.insertBefore(makeShareBlock('bottom'), cta);
    }
  }

  /* ============================================================
     4. WORKING SEARCH BAR  (home page)
  ============================================================ */
  function initSearch() {
    if (!isHomePage()) return;

    var sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    var widget = document.createElement('div');
    widget.className = 'sidebar-widget';
    widget.style.cssText = 'order:-1;';
    widget.innerHTML =
      '<h3>&#128269; Raadi Maqaal</h3>' +
      '<div style="position:relative;margin-top:10px;">' +
        '<input id="fs-search" type="search" placeholder="Raadi... (e.g. freelancing)" ' +
               'autocomplete="off" ' +
               'style="width:100%;padding:11px 40px 11px 14px;border:2px solid #e9d5ff;' +
                      'border-radius:10px;font-size:.9rem;outline:none;' +
                      'font-family:inherit;transition:border-color .2s;" ' +
               'onfocus="this.style.borderColor=\'#7c3aed\'" ' +
               'onblur="this.style.borderColor=\'#e9d5ff\'">' +
        '<span style="position:absolute;right:12px;top:50%;transform:translateY(-50%);' +
                     'font-size:1.1rem;pointer-events:none;">&#128269;</span>' +
      '</div>' +
      '<div id="fs-search-results" style="margin-top:8px;"></div>';

    sidebar.insertBefore(widget, sidebar.firstChild);

    var input = document.getElementById('fs-search');
    var resultsBox = document.getElementById('fs-search-results');
    var grid = document.querySelector('.article-grid');
    var cards = grid ? Array.from(grid.querySelectorAll('.article-card')) : [];
    var noResult = null;

    if (!noResult) {
      noResult = document.createElement('div');
      noResult.style.cssText = 'display:none;text-align:center;padding:20px;color:#6b7280;font-size:.9rem;';
      noResult.textContent = 'Maqaal lama helin. Isku day magac kale.';
      if (grid) grid.parentNode.insertBefore(noResult, grid.nextSibling);
    }

    input.addEventListener('input', function () {
      var q = this.value.trim().toLowerCase();
      var shown = 0;

      cards.forEach(function (card) {
        var match = !q || card.textContent.toLowerCase().includes(q);
        card.style.display = match ? '' : 'none';
        if (match) shown++;
      });

      noResult.style.display = (q && shown === 0) ? 'block' : 'none';

      if (q && shown > 0) {
        var heading = document.querySelector('.section-heading h2');
        if (heading) heading.textContent = 'Natiijada raadinta: ' + shown + ' maqaal';
      } else if (!q) {
        var heading2 = document.querySelector('.section-heading h2');
        if (heading2) heading2.textContent = 'All Guides';
      }
    });
  }

  /* ============================================================
     5. INIT
  ============================================================ */
  function init() {
    initProgressBar();
    initBackToTop();
    initShareButtons();
    initSearch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
