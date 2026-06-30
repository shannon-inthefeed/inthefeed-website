# In the Feed — Website

**Live URL:** https://inthefeed.com  
**Built:** June 2026  
**Stack:** Static HTML (self-contained bundle) + Render hosting + GitHub

---

## File Structure

```
/
├── index.html              # Full site — self-contained bundle (deploy this)
├── robots.txt              # Search engine crawl rules
├── sitemap.xml             # Site map for SEO
├── README.md               # This file
├── uploads/                # All images and assets
│   ├── favicon.png
│   ├── og-image.png
│   ├── ITF_logo_green-c7426375.png
│   ├── ITF_logo_White-280278a7.png
│   ├── InBug-White.png
│   ├── Tattoo.png
│   ├── shannon-working.png
│   ├── shannon_current.png
│   ├── blog-wrong-room.svg
│   ├── blog-sanity-debt.svg
│   ├── blog-beige-noise.svg
│   ├── blog-revenue-architecture.svg
│   ├── blog-pilot-to-pipeline.svg
│   ├── blog-linkedin-profile.svg
│   ├── BT-social-icon.jpg
│   ├── AG Logo (AG).png
│   ├── GratisIQlogomark.png
│   ├── Group 17@2x.png         # Danoosh Kapadia case study logo
│   ├── mg_logo_top.png          # Miss Galit case study logo
│   ├── netranks-logo.png        # NetRanks case study logo
│   └── Snip - LinkedIn - Google Chrome (*.png)  # Metricool dashboard screenshots
└── In the Feed Website.dc.html  # Source file — edit this, then re-bundle
```

---

## Pages

| Page | Hash Route |
|------|-----------|
| Home | `#home` |
| About | `#about` |
| Pricing | `#pricing` |
| Blog | `#blog` |
| Blog Post | `#blog/[slug]` |
| Contact | `#contact` |
| Privacy Policy | `#privacy` |
| Terms of Service | `#terms` |
| GDPR Compliance | `#gdpr` |

---

## Key Integrations

| Service | Detail |
|---------|--------|
| Google Analytics | G-ZXVF1LTN5X |
| Metricool | Hash: da226905df7cf5700307c70c827b4842 |
| Formspree (contact form) | https://formspree.io/f/xdarlzrb |
| Cal.com (booking) | https://cal.com/inthefeed/discovery |
| WhatsApp | +1 (805) 203-0564 |
| LinkedIn | https://www.linkedin.com/in/stkuykendall/ |

---

## Cookie Consent

The site uses a GDPR-compliant cookie consent banner. Google Analytics defaults to denied until the user accepts. Consent is stored in `localStorage` under the key `itf_cookie_consent` (values: `accepted` or `declined`).

---

## Deployment (GitHub + Render)

### First deploy
1. Push all files to your GitHub repo
2. In Render: connect repo, set publish directory to `/`, no build command
3. Add custom domain `inthefeed.com` in Render settings
4. Update DNS records as directed by Render

### Updating the site
1. Edit `In the Feed Website.dc.html` in the design tool
2. Re-bundle to `index.html`
3. Push to GitHub — Render auto-deploys

### Render settings
- **Build command:** (none)
- **Publish directory:** `/`
- **Root directory:** (leave blank)

---

## Adding Blog Posts

Blog post content lives in the `posts` array inside the logic class of `In the Feed Website.dc.html`. Each post has:

```js
{
  slug: 'post-url-slug',
  image: 'uploads/blog-image.svg',
  title: 'Post Title',
  category: 'Category Name',
  date: 'Month DD, YYYY',
  readTime: 'X min read',
  excerpt: 'Short description...',
  content: [
    { type: 'p', text: 'Paragraph text.' },
    { type: 'h3', text: 'Subheading' },
    { type: 'quote', text: 'Pull quote text.' },
  ]
}
```

---

## Pricing

All prices are the same in EUR, GBP, and CAD.

| Plan | Launch Block | Monthly |
|------|-------------|---------|
| Starter (1 channel) | 4,500 | 1,500 |
| Growth (4 channels) | 5,250 | 1,750 |
| Scale (full output) | 7,500 | 2,500 |
| LinkedIn Engagement Add-On | 4,500 | 1,500 |

---

## Brand Colours

| Name | Hex |
|------|-----|
| Navy Blue | #232b53 |
| Dark Green | #13544e |
| Purple | #542c73 |
| Grey Blue | #81a0d0 |
| Teal | #5e9993 |
| Grey Purple | #a991bb |

---

## Contact

**Shannon Kuykendall**  
Founder, In the Feed  
WhatsApp: +1 (805) 203-0564  
LinkedIn: https://www.linkedin.com/in/stkuykendall/
