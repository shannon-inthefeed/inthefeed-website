# In the Feed — Website

**Live URL:** https://inthefeed.com  
**Last updated:** August 2026  
**Stack:** Static HTML + Render hosting + GitHub

---

## Deployment: two files

`index.html` and `support.js` are both required. `index.html` is generated from the source file; `support.js` is the runtime it loads. Push both.

```
/
├── index.html                   # Deploy this — generated from the source file
├── support.js                   # Runtime — required alongside index.html
├── discovery.html               # /discovery — opens the booking link in a new tab
├── robots.txt
├── sitemap.xml
├── README.md
├── In the Feed Website.dc.html  # SOURCE — edit this, then copy to index.html
└── uploads/                     # Images, blog graphics, OG image, LinkedIn graphics
```

### Updating the site
1. Edit `In the Feed Website.dc.html`
2. Copy it over `index.html`
3. Push to GitHub — Render auto-deploys

### Render settings
- **Service type:** Static Site
- **Build command:** (none)
- **Publish directory:** `/`
- **Root directory:** (blank)

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

`/discovery` is a separate file, not a hash route.

---

## Positioning

The site leads with **The Right Room Session** as the main offer. The Content Engine is the secondary, optional next step. Every page frames the problem as *wrong-room content*: content aimed at whoever is easiest to write to rather than whoever is actually paying, whether that is a consumer, a subscriber, or an enterprise buyer.

Markets served: UK, EU, Canada, and the US.

---

## Offers and pricing

Prices display without currency symbols. Invoicing is in EUR unless otherwise agreed (see Terms).

### The Right Room Session — 1,350
- One 90-minute session, recorded
- Deliverables within 48 hours: positioning statement, content pillars, CTA framework, inbound conversion path
- Fully standalone. No requirement to buy the Content Engine before or after
- Bookings confirmed manually. Payment via Wise

### The Content Engine
- **Month 1:** 3,000 setup fee, invoiced separately (extraction session, strategy build, dashboard and workspace setup, voice calibration)
- **Month 2 onward:** 1,750/month, invoiced monthly, three-month minimum at this rate
- LinkedIn is the primary channel. The engagement service is bundled by default, not gated
- **Three-month checkpoint:** performance data reviewed with the client, who then decides whether to continue. Not an automatic rollover, not a hard cancellation

### Add-on Channels — from 650/month
Priced per channel, scoped to format complexity, cadence, and content origin (repurposed from LinkedIn vs. built natively). The 650 anchor is a draft figure — confirm against real delivery costs.

---

## Buttons and links

Every call-to-action on the site points to **https://inthefeed.com/discovery** — a 30-minute discovery call. There is no separate booking or payment button anywhere on the site.

---

## Key integrations

| Service | Detail |
|---------|--------|
| Google Analytics | G-ZXVF1LTN5X |
| Metricool | Hash: da226905df7cf5700307c70c827b4842 (fires on inthefeed.com only) |
| Formspree (contact form) | https://formspree.io/f/xdarlzrb |
| Discovery booking | https://inthefeed.com/discovery |
| WhatsApp | +1 (805) 203-0564 |
| LinkedIn | https://www.linkedin.com/in/stkuykendall/ |

WhatsApp is the only direct contact method. No email address appears on the site.

---

## Cookie consent

GDPR-compliant banner. Google Analytics defaults to denied until the user accepts. Consent stored in `localStorage` under `itf_cookie_consent` (`accepted` or `declined`).

---

## Adding blog posts

Blog content lives in the `posts` array in the logic class of `In the Feed Website.dc.html`:

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

The first post in the array renders as the featured post on the blog index. Add the matching header graphic to `uploads/`.

---

## Testimonials

Session testimonials (Carmen Monsart, Bernice Noriah Kamit) sit on the Pricing page directly beneath the Right Room Session card. Case studies and retainer testimonials sit in the Results section on Home.

---

## Brand colours

| Name | Hex |
|------|-----|
| Navy Blue | #232b53 |
| Dark Green | #13544e |
| Purple | #542c73 |
| Grey Blue | #81a0d0 |
| Teal | #5e9993 |
| Grey Purple | #a991bb |

Type: DM Sans throughout.

---

## Contact

**Shannon Kuykendall**  
Founder, In the Feed  
WhatsApp: +1 (805) 203-0564  
LinkedIn: https://www.linkedin.com/in/stkuykendall/
