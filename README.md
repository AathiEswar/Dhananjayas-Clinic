# Solace Health — Multi-Specialty Clinic Website

A modern, high-converting clinic landing page. React + Vite, GSAP (ScrollTrigger)
and Locomotive Scroll, tuned for performance and accessibility.

## Run it locally

```bash
npm install
npm run dev        # → http://localhost:5173
```

Production build:

```bash
npm run build      # outputs ./dist (static — deploy anywhere)
npm run preview    # test the production build locally
```

## Make it yours (5 minutes)

1. **`src/config.js`** — clinic name, phone, WhatsApp number, address, Google Maps
   link, email, hours, rating. Every CTA on the site reads from this file.
2. **`src/data.js`** — services, doctors, testimonials, FAQs, stats, nav links.
3. **`index.html`** — `<title>`, meta description, JSON-LD schema.
4. **Booking API** — the form currently simulates a request. Wire the real call in
   `src/components/BookingForm.jsx` → `submit()` (marked with a 🔌 comment).
5. Photos — the design uses abstract art placeholders (arches/portraits). Swap in
   real photography by replacing `.hero__arch`, `.about__arch`, and
   `.doc-card__portrait` backgrounds when ready.

## What's inside

- **Sections**: hero (with live "next slot" card), stats counters, services bento,
  why-us, doctors rail (drag/scroll), 3-step process, testimonials, insurance
  marquee, FAQ accordion, CTA banner, contact + booking form, footer.
- **Interactive CTAs everywhere**: booking modal (slide-in sheet), floating mobile
  dock (Call / WhatsApp / Book), desktop floating pill, WhatsApp deep links with
  prefilled text, tel: links, get-directions.
- **Animations**: Locomotive smooth scroll + parallax, GSAP masked-text reveals,
  batched scroll reveals, magnetic buttons, custom cursor, preloader.

## Performance notes

- Smooth scroll is **native on touch devices** (no scroll-jacking jank on mobile).
- All animations are transform/opacity only; marquees are pure CSS.
- `prefers-reduced-motion` disables smooth scroll & reveals entirely.
- Vendor code is split (`react`, `gsap+locomotive`) for better caching.
