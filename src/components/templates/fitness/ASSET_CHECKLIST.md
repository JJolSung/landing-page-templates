# Fitness Template — Asset & Manual Work Checklist

## Image Assets

All images should be placed in `public/images/fitness/`.
Recommended format: WebP. Keep a bold, high-contrast style consistent across all photos.

### Trainer Photos (P0 — Required)
These replace the initials-only fallback circles. Without photos the trainer section lacks credibility.

- [ ] `trainer-marcus.webp` — Male trainer, strength/conditioning focus (square, min 400x400)
- [ ] `trainer-sarah.webp` — Female trainer, athletic/HIIT focus (square, min 400x400)
- [ ] `trainer-jake.webp` — Male trainer, boxing/combat focus (square, min 400x400)

> Tip: Use Unsplash (free) — search "personal trainer portrait", "fitness coach".
> Crop to square and use consistent lighting/background tone (dark preferred).

### Hero Background (Optional Enhancement)
Current hero is text-focused with neon grid lines — valid for fitness branding.
A background image could add intensity.

- [ ] `hero-bg.webp` — Dark gym interior, weights, or athlete silhouette (min 1920x1080)
  - If added: update `FitnessHero.tsx` to include a background image layer with dark overlay

### Transformation Before/After (Optional Enhancement)
The Transformations section currently shows text testimonials only.
Before/after photos would significantly boost credibility.

- [ ] `transform-david-before.webp` — Before photo (square, min 300x400)
- [ ] `transform-david-after.webp` — After photo (square, min 300x400)
- [ ] `transform-mia-before.webp` — Before photo (square, min 300x400)
- [ ] `transform-mia-after.webp` — After photo (square, min 300x400)
- [ ] `transform-james-before.webp` — Before photo (square, min 300x400)
- [ ] `transform-james-after.webp` — After photo (square, min 300x400)
  - If added: update `FitnessTransformations.tsx` to include image layout

---

## Content Review

### Copy & Branding
- [ ] Verify gym name "IronForge" is used consistently across all sections
- [ ] Check trainer names and bios for consistency
- [ ] Review pricing tiers for reasonable progression ($29 → $59 → $99)
- [ ] Verify class schedule names match the Programs section offerings

### Links & Interactions
- [ ] Footer nav links (Programs, Company, Support) point to `#` — update with real URLs if needed
- [ ] Footer social links (Instagram, Twitter, YouTube, Facebook) point to `#` — update with real URLs
- [ ] Programs cards "Learn More →" links point to `#` — link to detail pages or remove
- [ ] Pricing CTA buttons link to `#cta` — verify scroll target exists
- [ ] Hero CTA "Join Now" links to `#cta` — verify scroll target
- [ ] Hero CTA "View Programs" links to `#programs` — verify scroll target

### Contact Information
- [ ] No phone/email/address displayed — consider adding to footer or CTA section if deploying

---

## Optional Polish

- [ ] Add subtle parallax or background image to Hero section
- [ ] Test form input styling on Safari / mobile (neon border focus state)
- [ ] Review neon green (#39ff14) contrast ratio on dark backgrounds for WCAG AA
- [ ] Consider adding a "Location" or "Facilities" section with gym interior photos
- [ ] Consider adding class duration info to the Schedule table
