# Fadal Store — Jekyll Blog

Jekyll blog site built on the [Mediumish theme](https://github.com/wowthemesnet/mediumish-theme-jekyll). Content focused on online business, AI tools, freelancing, and remote work — primarily in Somali.

## Stack

- **Jekyll 4.4** (static site generator)
- **Ruby 3.2** (runtime)
- **Plugins:** jekyll-paginate, jekyll-feed, jekyll-seo-tag, jekyll-archives
- **Hosting target:** GitHub Pages (`https://fadalstore.github.io`)

## How to run

```bash
bundle exec jekyll serve --host 0.0.0.0 --port 5000
```

The "Start application" workflow runs this automatically.

## Key files

| File/Folder | Purpose |
|---|---|
| `_config.yml` | Site settings, author profile, plugins |
| `_posts/` | Blog posts (Markdown) |
| `_pages/` | Static pages (about, ebooks, categories…) |
| `_layouts/` | Page templates |
| `_includes/` | Reusable HTML partials |
| `sitemap.xml` | Custom sitemap (replaces jekyll-sitemap plugin) |
| `assets/` | Images, CSS, JS |

## Sitemap

A custom `sitemap.xml` in the root generates the sitemap at build time. The `jekyll-sitemap` plugin is intentionally **not** used (custom file takes priority and has per-category priority/changefreq logic). Submit `https://fadalstore.github.io/sitemap.xml` to Google Search Console.

## User preferences

- Content language: Somali (with some English posts)
- Monetization: Gumroad ebooks + Amazon affiliate links
- CTA banners on Theo of Golden posts link to `/ebooks/` page
