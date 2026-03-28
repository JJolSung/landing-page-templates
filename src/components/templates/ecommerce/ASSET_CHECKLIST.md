# E-commerce Template — Asset & Manual Work Checklist

## Image Assets

All images should be placed in `public/images/ecommerce/`.
Recommended format: WebP. Keep a clean, product-photography style.

### Product Hero Image (P0 — Required)
The CSS headphone illustration is creative but a real product photo would be more convincing for a portfolio demo.

- [ ] `product-hero.webp` — Premium headphones product shot on dark background (square, min 640x800)
  - If added: update `EcommerceHero.tsx` to include `<img>` with CSS illustration as fallback

### Reviewer Avatars (Optional Enhancement)
Reviews currently show no avatars. Adding photos improves credibility.

- [ ] `reviewer-sarah.webp` — Female avatar (square, min 80x80)
- [ ] `reviewer-james.webp` — Male avatar (square, min 80x80)
- [ ] `reviewer-emily.webp` — Female avatar (square, min 80x80)
  - If added: update `EcommerceReviews.tsx` to include avatar next to reviewer name

### Lifestyle / Feature Images (Optional Enhancement)
Feature section uses CSS gradient illustrations — effective but real images could enhance appeal.

- [ ] `feature-anc.webp` — Person wearing headphones in noisy environment (square, min 400x400)
- [ ] `feature-battery.webp` — Headphones on desk / charging (square, min 400x400)
- [ ] `feature-spatial.webp` — Person enjoying music immersively (square, min 400x400)
  - If added: update `EcommerceFeatures.tsx` to replace or overlay CSS illustrations

---

## Content Review

### Copy & Branding
- [ ] Verify product name "AuraSound Pro" is used consistently
- [ ] Verify brand name "AuraSound" in footer matches throughout
- [ ] Check pricing consistency ($299 current, $399 original) across hero and comparison
- [ ] Review competitor comparison data for reasonable values
- [ ] Verify FAQ answers are consistent with feature claims (40hr battery, 6 mics, BT 5.3)

### Links & Interactions
- [ ] Footer nav links (Shop, Support, Company) point to `#` — update if needed
- [ ] Footer social links (Instagram, Twitter, YouTube, Facebook) point to `#` — update with real URLs
- [ ] Hero "Add to Cart" links to `#cta` — verify scroll target
- [ ] Hero "Learn More" links to `#features` — verify scroll target

### Contact Information
- [ ] No phone/email/address displayed — acceptable for product landing page
- [ ] Support links in footer are placeholder — update if deploying

---

## Optional Polish

- [ ] Replace CSS headphone illustration with real product photo for more professional look
- [ ] Add product color variant selector in hero section
- [ ] Test CTA email form on Safari / mobile
- [ ] Review ecommerce-coral (#FF6B6B) contrast on white backgrounds for WCAG AA
- [ ] Consider adding a "Gallery" section with multiple product angles
