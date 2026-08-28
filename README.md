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
├── room-test/index.html         # Funnel 1 — opt-in
├── room-test-quiz/index.html    # Funnel 2 — quiz + result
├── right-room-session/index.html # Funnel 3 — sales
├── book-your-session/index.html # Funnel 4 — booking
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

## Sales funnel pages

Four standalone pages, each in its own folder so Render serves a clean URL. **No main nav on any of them** — each has one job. All four are `noindex, follow` so they don't compete with the main site in search, and all four carry Google Analytics with the same GDPR cookie banner as the main site.

| Page | URL | File |
|------|-----|------|
| Opt-in | `/room-test` | `room-test/index.html` |
| Quiz + result | `/room-test-quiz` | `room-test-quiz/index.html` |
| Sales | `/right-room-session` | `right-room-session/index.html` |
| Booking | `/book-your-session` | `book-your-session/index.html` |

### The flow

1. **Opt-in** (`/room-test`) — Sequenzy form captures first name and email. On submit, Sequenzy shows its own on-page thank-you directing them to their inbox. No redirect from this page.
2. **Email** — they confirm their email, and the confirmation takes them to the quiz.
3. **Quiz** (`/room-test-quiz`) — five questions, result reveals on the same page, soft CTA to the sales page.
4. **Sales** (`/right-room-session`) — four Wise payment links, one per currency.
5. **Booking** (`/book-your-session`) — sent manually by Shannon once the Wise payment notification arrives. Not part of the automated Sequenzy sequence.

### ⚠️ Sequenzy form styling

The style block inside `room-test/index.html` is **hand-written, not Sequenzy's**. Sequenzy's own block came through trimmed, so the form is styled here in DM Sans against the brand palette.

If you edit the form in the Sequenzy dashboard, **re-paste only the `<form>` markup** and leave the `<style>` block alone. Pasting a fresh full embed will overwrite the styling and the form will look wrong.

Form ID: `q45pyszqnkbv3lctnp8jr031`

### Quiz logic

Five multiple-choice questions, three options each, every option mapped to a room (consumer / subscriber / enterprise). Most-picked room wins; a tie falls back to Q1, since Q1 names the payer outright.

The result has three moving parts:

- **The room** — one of three diagnoses.
- **The mismatch line** — shown only when Q1 disagrees with the majority. Labelled "First, the mismatch." Means they know who pays but are writing to someone else.
- **The echo** — their Q5 answer quoted back under "The last thing you heard from a buyer."

Fires a GA event `room_test_result` with `room`, `payer`, and `mismatch`.

To change the result copy, edit the `.res-body` blocks in the markup. To change the mismatch copy, edit the `SPLIT` object in the page script.

### Payment links (Wise)

Same amount in every currency. Buttons are grouped as a currency picker, not four separate offers.

| Currency | Amount | Link |
|----------|--------|------|
| USD | $1,350 | https://wise.com/pay/r/kjqlUl4YOIIRYZA |
| GBP | £1,350 | https://wise.com/pay/r/cFyK7Nj1AgmUqjg |
| CAD | CA$1,350 | https://wise.com/pay/r/sKnWpxcKE9_YtZk |
| EUR | €1,350 | https://wise.com/pay/r/7QXwqZVoTi-i7tU |

### Booking calendar

`/book-your-session` points at Proton Calendar, which blocks iframe embedding. Same pattern as `/discovery`: a 3-second countdown auto-opens the booking link in a new tab, with a manual button and a WhatsApp fallback if the popup is blocked.

Booking link: `https://calendar.proton.me/bookings#-LtGG4a3vqST_u12XY1J0MQrHwCACzod8bbzpqfq4CQ=`

Note this is a **different** calendar from `/discovery`, which uses its own Proton booking link.

---

## Main site pages

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

`/discovery` is a separate file, not a hash route. The four funnel pages above are also separate, in their own folders.

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

Every call-to-action on the **main site** points to **https://inthefeed.com/discovery** — a 30-minute discovery call. There is no payment button anywhere on the main site.

The **funnel pages are different**: `/right-room-session` sells directly via four Wise payment links and has no discovery call CTA at all. Keep these two paths separate — the main site warms people up to a conversation, the funnel sells the session outright.

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
