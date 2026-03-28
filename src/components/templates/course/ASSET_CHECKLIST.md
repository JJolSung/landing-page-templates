# Course Template — Asset & Manual Work Checklist

## Image Assets

All images should be placed in `public/images/course/`.
Recommended format: WebP. Keep a professional, approachable tone.

### Instructor Photo (P0 — Required)
Replaces the initials-only fallback. An instructor photo is critical for course credibility.

- [ ] `instructor-alex.webp` — Professional male headshot, casual-professional style (square, min 500x500)

> Tip: Use Unsplash (free) — search "developer portrait", "tech professional headshot".
> A friendly, approachable look works best for an educator persona.

### Student Avatars (Optional Enhancement)
Testimonial section currently uses initials. Real photos add social proof.

- [ ] `student-sarah.webp` — Female avatar (square, min 100x100)
- [ ] `student-marcus.webp` — Male avatar (square, min 100x100)
- [ ] `student-priya.webp` — Female avatar (square, min 100x100)
  - If added: update `CourseTestimonials.tsx` to include `<img>` with initials fallback

### Hero Background / Illustration (Optional Enhancement)
Current hero is text-focused with gradient background — clean and effective.

- [ ] `hero-illustration.webp` — Code editor screenshot or developer workspace (min 800x600)
  - If added: update `CourseHero.tsx` to include a side illustration

---

## Content Review

### Copy & Branding
- [ ] Verify course name "FullStack Mastery" is used consistently
- [ ] Verify instructor name "Alex Morgan" throughout
- [ ] Review curriculum module titles and lesson counts for accuracy
- [ ] Check pricing ($79/month vs $499 one-time) for consistency
- [ ] "Next cohort starts Jan 15" in Hero — update to relevant date
- [ ] "12 spots left" in Enroll section — placeholder count

### Links & Interactions
- [ ] Footer Course links: "Instructor" and "FAQ" point to `#` — link to sections or remove
- [ ] Footer Resources links all point to `#` — update with real URLs if needed
- [ ] Footer Legal links all point to `#` — create pages or remove
- [ ] Instructor social links (Twitter, GitHub, LinkedIn) point to `#` — update with real URLs
- [ ] Hero CTA "Get Started" links to `#pricing` — verify scroll target
- [ ] Hero CTA "View Curriculum" links to `#curriculum` — verify scroll target
- [ ] Pricing CTAs link to `#enroll` — verify scroll target

### Contact Information
- [ ] No phone/email displayed — acceptable for an online course landing page

---

## Optional Polish

- [ ] Add instructor photo for immediate credibility boost
- [ ] Consider adding a "Preview Lesson" video embed or modal
- [ ] Test enrollment form on Safari / mobile
- [ ] Review course-indigo (#4338ca) contrast ratio on white backgrounds for WCAG AA
- [ ] Consider adding a "Money-back Guarantee" badge near the enrollment form
