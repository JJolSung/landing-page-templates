# SaaS Template - Asset & Manual Work Checklist

## Image Assets

All images should be placed in `public/images/saas/`.

### Testimonial Avatars
Currently uses fallback initials (gradient circle) when images are missing.
Add professional headshot-style photos (square, min 88x88px, WebP preferred).

- [ ] `public/images/saas/avatar-sarah.webp` — Sarah Chen (CTO, TechNova)
- [ ] `public/images/saas/avatar-marcus.webp` — Marcus Rivera (VP Engineering, ScaleUp)
- [ ] `public/images/saas/avatar-emily.webp` — Emily Watson (Product Lead, DataFlow)

> Tip: Use AI-generated faces (e.g. thispersondoesnotexist.com) or stock photos.
> Keep consistent style: neutral background, similar crop & lighting.

### Hero Section (Optional Enhancement)
The hero dashboard is a CSS mockup. For a higher-fidelity look:

- [ ] `public/images/saas/hero-dashboard.webp` — Full screenshot of a dashboard UI (1280x720+)
  - Replace the CSS mockup in `SaasHero.tsx` with a `next/image` component
  - Alternative: keep the CSS mockup as-is (already looks clean for a dark SaaS style)

### Product Screenshots (Optional Enhancement)
The Product tab content uses CSS mockups. For more realism:

- [ ] `public/images/saas/product-dashboard.webp` — Dashboard tab screenshot
- [ ] `public/images/saas/product-workflows.webp` — Workflows tab screenshot
- [ ] `public/images/saas/product-analytics.webp` — Analytics tab screenshot

> These are optional. The current CSS mockups are detailed enough for a portfolio demo.

### OG Image (Optional)
Current OG image is generated server-side via `next/og`. If a custom design is preferred:

- [ ] `public/images/saas/og-image.png` — 1200x630px social share image

---

## Content Review

### Copy & Branding
- [ ] Review and finalize the product name "FlowBoard" used throughout
- [ ] Verify all pricing amounts are realistic for the fictional product
- [ ] Confirm testimonial quotes feel natural and specific

### Links
- [ ] Footer navigation links all point to `#` — update if linking to other pages
- [ ] Social media links in footer point to `#` — update with real URLs if needed
- [ ] Hero CTA "Start Free Trial" links to `#pricing` — verify scroll target
- [ ] Hero "Watch Demo" links to `#product` — verify scroll target

---

## Optional Polish

- [ ] Add a favicon specific to the SaaS template (e.g. FlowBoard logo mark)
- [ ] Add structured data (JSON-LD) for SEO if deploying as a real page
- [ ] Test logo scroll animation speed on mobile (currently 20s loop)
- [ ] Review dark mode contrast ratios — ensure WCAG AA compliance for all text
