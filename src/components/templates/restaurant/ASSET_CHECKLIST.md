# Restaurant Template — Asset & Manual Work Checklist

## Image Assets

All images should be placed in `public/images/restaurant/`.
Recommended format: WebP. Keep a warm, moody tone consistent across all photos.

### Gallery Images (P0 — Required)
These replace the gradient-only fallback cards. Without images the gallery section looks empty.

- [ ] `gallery-plating.webp` — Hero-size dish plating close-up (landscape, min 800x800)
- [ ] `gallery-celebrations.webp` — Table set for celebration / candlelight (min 400x360)
- [ ] `gallery-garden.webp` — Fresh herbs or garden produce close-up (min 400x360)
- [ ] `gallery-wine.webp` — Wine cellar or wine glass detail (portrait, min 400x720)
- [ ] `gallery-kitchen.webp` — Live kitchen / flames / chef in action (min 400x360)
- [ ] `gallery-patisserie.webp` — Dessert / pastry close-up (min 400x360)
- [ ] `gallery-mediterranean.webp` — Mediterranean spread or ingredient shot (landscape, min 800x360)
- [ ] `gallery-dining.webp` — Dining room interior or table setting (min 400x360)

> Tip: Use Unsplash (free) — search "fine dining", "restaurant plating", "wine cellar".
> Keep similar warm-toned color grading across all photos for visual consistency.

### Story Section Image (P0 — Required)
Replaces the CSS plate illustration fallback.

- [ ] `story-chef.webp` — Chef in kitchen or restaurant interior (portrait, min 640x800)
  - The CSS fallback (plate + stars) will show if this image is missing

### Hero Background (Optional Enhancement)
Current hero is text-focused with decorative borders — valid for fine dining.
A subtle background image could enhance impact.

- [ ] `hero-bg.webp` — Blurred/dark restaurant ambiance or table setting (min 1920x1080)
  - If added: update `RestaurantHero.tsx` to include a background image layer with overlay

### Map / Location (Optional Enhancement)
The Info section has a MapPin placeholder for the map area.

- [ ] `map-tribeca.webp` — Static map screenshot of TriBeCa, NYC area (min 600x300)
  - Or embed a Google Maps static image URL

---

## Content Review

### Copy & Branding
- [ ] Verify restaurant name "Maison Laurent" is used consistently
- [ ] Verify chef name "Laurent Dubois" in Story section
- [ ] Check all menu item names and descriptions for spelling (French terms)
- [ ] Review menu prices for internal consistency (appetizers < mains < desserts)

### Links & Interactions
- [ ] Footer social links (Instagram, Facebook, Twitter) point to `#` — update with real URLs if needed
- [ ] Experience cards "Learn more →" links point to `#` — link to detail pages or remove
- [ ] Hero CTA "Reserve a Table" links to `#reservation` — verify scroll target
- [ ] Hero CTA "View Menu" links to `#menu` — verify scroll target

### Contact Information
- [ ] Phone number `+1 (212) 555-0187` — placeholder, update if deploying
- [ ] Email addresses `reservations@` / `events@` — placeholder, update if deploying
- [ ] Address "127 Rue de la Gastronomie" — fictional, update if needed

---

## Optional Polish

- [ ] Add subtle parallax or background image to Experiences section (dark green bg)
- [ ] Test reservation form date picker styling on Safari / mobile
- [ ] Review gold (#c8a55a) contrast ratio on cream (#fef7ed) background for WCAG AA
- [ ] Consider adding a "Wine List" category to the Menu section
