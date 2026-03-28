# Real Estate Template — Asset & Manual Work Checklist

## Image Assets

All images should be placed in `public/images/realestate/`.
Recommended format: WebP. Keep a luxurious, bright, editorial tone across all photos.

### Property Listing Images (P0 — Required)
These replace the gradient-only fallback cards. Without images the listings section looks empty.

- [ ] `listing-manhattan.webp` — Luxury NYC apartment or penthouse interior (landscape, min 720x512)
- [ ] `listing-miami.webp` — Miami oceanfront penthouse or pool view (landscape, min 720x512)
- [ ] `listing-beverlyhills.webp` — Beverly Hills estate exterior or interior (landscape, min 720x512)
- [ ] `listing-chicago.webp` — Chicago high-rise condo or skyline view (landscape, min 720x512)

> Tip: Use Unsplash (free) — search "luxury apartment interior", "penthouse view", "luxury real estate".
> Keep similar warm, bright editorial styling across all photos.

### Agent Headshots (P0 — Required)
These replace the initials-only fallback circles.

- [ ] `agent-victoria.webp` — Professional female headshot (square, min 400x400)
- [ ] `agent-james.webp` — Professional male headshot (square, min 400x400)
- [ ] `agent-isabella.webp` — Professional female headshot (square, min 400x400)

> Tip: Search "professional headshot", "business portrait" on Unsplash.
> Use neutral backgrounds and similar lighting/crop style.

### Hero Background (Optional Enhancement)
Current hero is text-focused with decorative lines — clean and elegant.
A subtle background could add visual depth.

- [ ] `hero-bg.webp` — Aerial city view or luxury building exterior (min 1920x1080)
  - If added: update `RealEstateHero.tsx` to include a background layer with light overlay

---

## Content Review

### Copy & Branding
- [ ] Verify company name "Prestige Estates" is used consistently
- [ ] Check agent names, titles, and specialities for spelling
- [ ] Review listing prices for reasonable luxury market range ($2.1M–$12.5M)
- [ ] Verify listing addresses and cities are plausible

### Links & Interactions
- [ ] Footer nav links (About, Services) point to `#` — update with real URLs if needed
- [ ] "View All Properties" link points to `#` — link to listings page or remove
- [ ] Listing cards link to `#` — link to detail pages if available
- [ ] Agent "Contact" buttons use `mailto:` — verify email addresses if deploying
- [ ] Hero search button is non-functional — acceptable for demo portfolio

### Contact Information
- [ ] Phone number `+1 (212) 555-0184` — placeholder, update if deploying
- [ ] Email `inquiries@prestigeestates.com` — placeholder, update if deploying
- [ ] Address "742 Fifth Avenue, Suite 1200" — fictional, update if needed

---

## Optional Polish

- [ ] Add a hero background image with gradient overlay for more visual impact
- [ ] Consider adding a map embed or static map image to the Contact section
- [ ] Test search filter dropdowns on Safari / mobile (custom select styling)
- [ ] Review gold (#b8975a) contrast ratio on white backgrounds for WCAG AA
- [ ] Consider adding "Sold" or "Under Contract" status badges to some listings
