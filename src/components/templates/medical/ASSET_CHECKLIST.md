# Medical Template — Asset & Manual Work Checklist

## Image Assets

All images should be placed in `public/images/medical/`.
Recommended format: WebP. Keep a clean, professional, trustworthy tone.

### Doctor Headshots (P0 — Required)
These replace the initials-only fallback circles. Professional photos greatly increase trust for a medical site.

- [ ] `doctor-sarah.webp` — Female doctor, professional headshot with white coat (square, min 300x300)
- [ ] `doctor-michael.webp` — Male doctor, professional headshot with white coat (square, min 300x300)
- [ ] `doctor-elena.webp` — Female doctor, professional headshot with white coat (square, min 300x300)

> Tip: Use Unsplash (free) — search "doctor portrait", "medical professional headshot".
> Use consistent backgrounds (white/light gray) and similar crop/lighting.

### Hero Background (Optional Enhancement)
Current hero is text-focused with subtle teal gradient blobs — clean and appropriate for medical.

- [ ] `hero-bg.webp` — Bright modern clinic interior or medical team (min 1920x1080)
  - If added: update `MedicalHero.tsx` to include a background image layer with light overlay

### Clinic / Facility Photos (Optional Enhancement)
Would add credibility to the Location & Hours section.

- [ ] `clinic-exterior.webp` — Clinic building exterior (landscape, min 800x450)
- [ ] `clinic-interior.webp` — Reception or waiting area (landscape, min 800x450)
  - If added: replace gradient map placeholder in `MedicalInfo.tsx`

---

## Content Review

### Copy & Branding
- [ ] Verify clinic name "Wellness Clinic" is used consistently
- [ ] Check doctor names, specialties, and bios for consistency
- [ ] Verify department options in appointment form match Services section list
- [ ] Verify insurance partner names for accuracy

### Links & Interactions
- [ ] Footer nav links (Services, About) point to `#` — update with real URLs if needed
- [ ] Footer social links (Facebook, Instagram, Twitter, LinkedIn) point to `#` — update with real URLs
- [ ] Footer "Patient Portal" link points to `#` — update with real URL if deploying
- [ ] Footer policy links (Privacy Policy, Terms of Service, HIPAA Notice) point to `#` — create pages or remove
- [ ] Hero CTA "Book Appointment" links to `#appointment` — verify scroll target
- [ ] Hero CTA "Our Services" links to `#services` — verify scroll target

### Contact Information
- [ ] Phone number `+1 (555) 234-5678` — placeholder, update if deploying
- [ ] Emergency phone `+1 (555) 911-0000` — placeholder, update if deploying
- [ ] Email `info@wellnessclinic.com` — placeholder, update if deploying
- [ ] Address "450 Wellness Boulevard, Suite 200" — fictional, update if needed

---

## Optional Polish

- [ ] Add clinic facility photo to replace gradient map placeholder in Info section
- [ ] Consider embedding a static map image or Google Maps iframe
- [ ] Test appointment form date picker styling on Safari / mobile
- [ ] Review medical-teal (#14b8a6) contrast ratio on white backgrounds for WCAG AA
- [ ] Consider adding an "Insurance Verification" link or form
