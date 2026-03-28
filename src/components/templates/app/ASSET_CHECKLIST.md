# App (Mobile App) Template — Asset & Manual Work Checklist

## Image Assets

All images should be placed in `public/images/app/`.
Recommended format: WebP. Keep a dark, modern tech aesthetic.

### App Screenshots (P0 — Required for polish)
The hero and showcase sections use CSS phone mockups with hard-coded UI.
Real app screenshots would elevate the portfolio demo significantly.

- [ ] `screenshot-dashboard.webp` — App dashboard / home screen (portrait, min 375x812)
- [ ] `screenshot-analytics.webp` — Spending analytics or chart view (portrait, min 375x812)
- [ ] `screenshot-budgets.webp` — Budget management screen (portrait, min 375x812)
  - If added: update `AppHero.tsx` and `AppShowcase.tsx` to include `<img>` with CSS mockup as fallback

### App Store Badges (Optional)
Current badges are CSS-only recreations. Official badge images could be used.

- [ ] `badge-appstore.svg` — Official Apple App Store badge
- [ ] `badge-googleplay.svg` — Official Google Play badge
  - If added: update `AppHero.tsx` and `AppFooter.tsx` store links

### Testimonial Avatars (Optional Enhancement)
Testimonials section currently has no avatars at all.

- [ ] `user-avatar-1.webp` — User avatar (square, min 80x80)
- [ ] `user-avatar-2.webp` — User avatar (square, min 80x80)
- [ ] `user-avatar-3.webp` — User avatar (square, min 80x80)
  - If added: update `AppTestimonials.tsx` to include avatar next to reviewer name

---

## Content Review

### Copy & Branding
- [ ] Verify app name "Finflow" is used consistently across all sections
- [ ] Review pricing ($0 Free / $9.99 Premium) for consistency
- [ ] Check feature lists for accuracy between Features section and Pricing cards
- [ ] "500K+ users" claim appears in Waitlist section — verify consistency

### Links & Interactions
- [ ] Hero App Store / Google Play buttons point to `#` — update with real store URLs if deploying
- [ ] Footer App Store / Google Play badges point to `#` — same as above
- [ ] Footer nav links (Product, Company, Resources, Legal) all point to `#` — update if needed
- [ ] Footer social links (Twitter, GitHub, LinkedIn, Instagram) point to `#` — update with real URLs
- [ ] Pricing CTA buttons point to `#` — link to waitlist section or store

### Contact Information
- [ ] No phone/email displayed — acceptable for an app landing page

---

## Optional Polish

- [ ] Replace CSS phone mockups with real app screenshot images
- [ ] Add official App Store / Google Play badge SVGs
- [ ] Add user avatars to testimonials for social proof
- [ ] Test waitlist form on Safari / mobile
- [ ] Review indigo (#6366f1) / purple (#a855f7) gradient contrast on dark backgrounds for WCAG AA
- [ ] Consider adding an "App Preview" video section
