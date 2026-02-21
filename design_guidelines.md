# Design Guidelines for "In the Feed" Landing Page

## Design Approach

**Selected Approach:** Hybrid - Drawing from Stripe's minimalist clarity + Linear's sophisticated typography + modern SaaS patterns

**Design Principles:**
1. **Generous White Space**: Use breathing room as a design element - sections should feel open and uncluttered
2. **Conversion-First Hierarchy**: Guide eyes naturally from headline → value prop → CTA with progressive disclosure
3. **Mobile-First Foundation**: Design for 320px first, scale up gracefully to desktop (1440px+)
4. **Corporate Sophistication**: Professional polish without sterile coldness

---

## Typography System

**Font Stack:**
- **Primary (Headlines/Display):** Inter or DM Sans (600-700 weight) - clean, modern, geometric
- **Secondary (Body/UI):** Inter or System UI (400-500 weight) - optimal readability
- **Accent (Stats/Numbers):** Inter (700-800 weight) - bold emphasis

**Type Scale:**
- **Hero Headline:** 2.5rem mobile / 4rem tablet / 5rem desktop (60-72px line height)
- **Section Headlines:** 1.75rem mobile / 2.5rem desktop (tight leading 1.2)
- **Subheadlines:** 1.25rem mobile / 1.5rem desktop (relaxed leading 1.6)
- **Body Text:** 1rem mobile / 1.125rem desktop (leading 1.7 for readability)
- **Small/Supporting:** 0.875rem (leading 1.5)
- **CTA Buttons:** 1rem - 1.125rem (medium weight, uppercase or sentence case)

---

## Layout & Spacing System

**Tailwind Spacing Primitives:** Use 4, 8, 12, 16, 20, 24, 32 units consistently
- **Section Padding:** py-16 mobile / py-24 tablet / py-32 desktop
- **Container Max-Width:** max-w-7xl with px-6 mobile / px-12 desktop
- **Component Spacing:** gap-8 for grids, space-y-6 for stacked content
- **Element Margins:** mb-4 (small), mb-8 (medium), mb-12 (large)

**Grid Strategy:**
- **Mobile:** Single column (grid-cols-1)
- **Tablet:** 2 columns for features/benefits (md:grid-cols-2)
- **Desktop:** 3-4 columns for cards/features (lg:grid-cols-3)

---

## Component Library by Section

### 1. **Headline Section (Above Fold)**
**Layout:** Centered, single-column, max-w-4xl
- Hero headline with tight line-height (1.1-1.2)
- Subtitle below with relaxed spacing (mt-6)
- Dual CTA buttons in row (flex gap-4) below (mt-8)
- Touch targets: 44px minimum height, px-8 py-3 padding

### 2. **Expanded Promise Section**
**Layout:** max-w-3xl centered, prose format
- 3-4 bullet points or short paragraph
- Icon checkmarks (20px) aligned left with text
- Generous line spacing (space-y-4)

### 3. **VSL (Video Sales Letter)**
**Layout:** 16:9 aspect ratio container, max-w-4xl
- Rounded corners (rounded-xl)
- Drop shadow for depth
- Play button overlay (centered, large touch target)
- Optional transcript toggle below

### 4. **Primary CTA**
**Layout:** Full-width centered section, py-12
- Large prominent button (px-12 py-4)
- Supporting microcopy below button (text-sm)
- Optional trust badge row (flex gap-4)

### 5. **Social Proof**
**Layout:** Grid of logos/testimonials
- Logo cloud: grid-cols-3 mobile / grid-cols-5 desktop, grayscale with opacity
- Testimonial cards: 2-column desktop, single mobile
- Star ratings prominent (24px stars)
- Avatar + name + company format

### 6. **Problem Statement**
**Layout:** Split layout - text left, visual right (desktop)
- Empathetic headline (text-2xl)
- Pain point list with subtle icons (space-y-6)
- Image/illustration placeholder right side (hidden mobile, visible lg:)

### 7. **Benefits Section**
**Layout:** 3-column grid desktop, 1-column mobile
- Icon above text (48px size, mb-4)
- Benefit headline (text-xl, mb-3)
- Supporting description (text-base)
- Cards with subtle padding (p-8) and rounded corners

### 8. **Introduce Solution**
**Layout:** Centered content block, max-w-3xl
- Bold statement headline (text-3xl)
- Supporting paragraph (text-lg, mt-4)
- Visual divider or accent line

### 9. **Single Benefit Highlight**
**Layout:** Asymmetric 40/60 split (text/visual)
- Large headline with number callout
- Bullet list of sub-benefits
- Screenshot/mockup with device frame

### 10. **Mid-Page CTA**
**Layout:** Full-width band with contrast treatment
- Centered content (max-w-2xl)
- Urgency text above button (text-sm uppercase)
- Large CTA button with arrow icon
- Supporting text below

### 11. **Timeline ("What Happens After")**
**Layout:** Vertical timeline mobile, horizontal desktop
- 3-4 phases with connecting line
- Circle node (40px) with number/icon
- Phase title + timeframe + description
- Subtle card treatment per phase

### 12. **What's Included**
**Layout:** Checklist with visual hierarchy
- Section headline (text-3xl, mb-12)
- 2-column grid of included items (md:grid-cols-2)
- Checkmark icon + bold item name + description
- "And more..." footer element

### 13. **Post-Inclusion Breakdown**
**Layout:** Before/After comparison
- 2-column split (stacked mobile)
- "Without" side with X icons and problems
- "With" side with check icons and benefits
- Visual separator between columns

### 14. **Post-Inclusion CTA**
**Layout:** Centered urgency section
- Countdown timer or scarcity indicator
- Large button with outcome copy
- Money-back guarantee badge below

### 15. **Visuals + Proof**
**Layout:** Gallery grid
- 2x2 grid desktop (grid-cols-2 gap-8)
- Mockups with device frames
- Caption overlay on hover (desktop only)
- Lightbox capability for expansion

### 16. **Pricing Plans**
**Layout:** 3-tier pricing cards
- Cards elevated on hover (subtle transform)
- "Most Popular" badge on middle tier
- Feature comparison checklist per tier
- CTA button at bottom of each card
- Annual/monthly toggle switch

### 17. **FAQ Section**
**Layout:** Accordion format, max-w-3xl
- Question as button trigger (text-left, w-full)
- Chevron icon indicator (rotates on open)
- Answer with generous padding (p-6)
- Divider lines between items

### 18. **Final CTA (Footer)**
**Layout:** Sticky bottom bar mobile, full section desktop
- Large prominent CTA button
- Last-chance urgency copy
- Social proof elements (trust badges, review stars)
- Secondary footer links below (company, legal, social)

---

## Images Strategy

**Hero Section:** 
- Large background image (abstract tech/collaboration theme) with gradient overlay for text readability
- Use blur treatment behind CTA buttons (backdrop-blur-sm with semi-transparent background)
- Image should be subtle, not competing with headline

**Problem Section:**
- Frustrated professional at desk illustration or photo (right side, desktop only)

**Solution/Benefit Highlight:**
- Dashboard/interface mockups in modern device frames
- Screenshots showing platform in action

**Social Proof:**
- Customer headshots (circular avatars, 48px)
- Company logos (grayscale, max 120px wide)

**Timeline Section:**
- Icons for each phase (not photos)

**Visuals + Proof:**
- 4-6 mockup images showing platform features
- Before/after content examples
- Team collaboration screenshots

**General Image Treatment:**
- Rounded corners (rounded-lg to rounded-xl)
- Subtle shadows for depth
- Optimized for mobile (lazy loading, responsive sizing)
- Use srcset for different screen densities

---

## Interaction Patterns

**Buttons:**
- Hover: Slight scale (scale-105) and shadow increase
- Active: Scale down (scale-95)
- Blur background when over images (backdrop-blur-md)

**Cards:**
- Subtle hover elevation (shadow transition)
- No color changes, maintain simplicity

**Forms:**
- Clear focus states (ring offset)
- Inline validation feedback
- Large touch targets (py-3)

**Navigation (if included):**
- Sticky header on scroll (mobile)
- Hamburger menu mobile → horizontal desktop
- Smooth scroll to anchors

---

## Conversion Optimization Elements

- **Progressive Trust Building:** Social proof increases in density as user scrolls
- **CTA Evolution:** Copy becomes more urgent through page journey
- **Visual Momentum:** Use directional cues (arrows, chevrons) to guide scrolling
- **Scarcity Indicators:** Countdown timers, "X spots left" messaging
- **Exit Intent:** Consider modal with special offer (desktop only)

This design creates a sophisticated, conversion-focused experience that balances corporate professionalism with modern SaaS aesthetics while maintaining exceptional mobile usability.