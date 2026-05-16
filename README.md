# ENTLecture — Next.js Sample

A modern redesign of [entlecture.com](https://www.entlecture.com/) built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech stack

- Next.js 14 (App Router) + React 18
- TypeScript
- Tailwind CSS 3 with custom brand palette
- `lucide-react` icons
- Google Fonts: Inter (body) + Playfair Display (headings)

## Structure

```
app/
  layout.tsx          # Root layout, fonts, metadata
  page.tsx            # Single-page composition
  globals.css         # Tailwind + custom utilities

components/
  Header.tsx          # Sticky nav with mega-dropdown
  Hero.tsx            # Headline + interactive lesson card
  Stats.tsx           # 160+ / 850+ / 300+ / 90+ counters
  Categories.tsx      # 8 topic tiles (Ear, Nose, Larynx, …)
  Features.tsx        # Why-choose-us grid
  Author.tsx          # Dr. Rahul Bagla bio block
  Testimonials.tsx    # Student reviews
  CTA.tsx             # Final conversion section
  Footer.tsx          # Links, social, contact
```

## Customizing

- **Brand colors** → `tailwind.config.ts` (`brand` + `accent` palettes)
- **Copy** → each component holds its own data arrays at the top of the file
- **Author photo** → replace the "RB" placeholder in `components/Author.tsx`
- **Logo** → swap the `Stethoscope` icon in `Header.tsx` / `Footer.tsx`

## Next steps

- Add real images via `next/image`
- Wire up a CMS (Sanity, Contentful) for chapters
- Add dynamic chapter pages: `app/chapters/[slug]/page.tsx`
- Auth + paid content via NextAuth + Stripe
