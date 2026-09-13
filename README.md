# Gbedeka Farms — Complete Next.js Website

A complete, responsive multi-page website based on the approved Gbedeka Farms visual direction: clean editorial typography, Gbedeka green, real farm photography, generous whitespace and restrained Motion animations.

## Pages

- `/` — Home
- `/about` — About / story / mission / vision / people
- `/farms` — Maize / poultry / pigs / growth capacity
- `/products` — Maize / eggs & poultry / pork
- `/sustainability` — integrated farming / circular agriculture / future value streams
- `/impact` — people / workforce / communities / long-term ambition
- `/contact` — enquiry page and form

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Motion for React (`motion` package; the current package for Framer Motion-style animations)
- Lucide React icons
- `next/image` for optimized local images

## 1. Create the project from zero

```bash
cd ~/Desktop
npx create-next-app@latest gbedeka-farms --typescript --tailwind --eslint --app --src-dir=false --import-alias "@/*" --use-npm
cd gbedeka-farms
npm install motion lucide-react
```

Then copy the files from this package into the project root, replacing the generated files where names match.

## 2. Images

The supplied real assets have already been placed in `public/images` in this package:

| File | Use |
|---|---|
| `logo.jpg` | Gbedeka Farms logo |
| `hero-farm.jpg` | Wide maize field / homepage hero |
| `founder-portrait.jpg` | Founder portrait |
| `founder-field.jpg` | Founder in maize field |
| `founder-poultry.jpg` | Founder in poultry operation |
| `maize-field.jpg` | Maize crop |
| `maize-husks.jpg` | Maize husk / future processing story |
| `poultry.jpg` | Poultry flock |
| `poultry-house.jpg` | Poultry production |
| `poultry-detail.jpg` | Poultry detail |
| `pigs.jpg` | Pig production |
| `harvest.jpg` | Harvest/community activity |
| `contact-field.jpg` | Contact-page farm image |

If the farm supplies higher-resolution originals later, replace these files while keeping the same filenames.

## 3. Run

```bash
npm run dev
```

Open `http://localhost:3000`.

## 4. Production check

```bash
npm run lint
npm run build
npm run start
```

## 5. Contact form

The contact form is deliberately not wired to a made-up company email address. It opens the visitor's email client with the enquiry prepared. Once Gbedeka's official email is confirmed, set the destination in `components/ContactForm.tsx` (or replace the mailto flow with your preferred email provider).

## 6. Before launch

Replace/confirm:

- official domain in `lib/site.ts`
- official email and phone number
- social media links, if any
- final legal/privacy/cookie text if required
- final image originals and alt text
- production email delivery provider if you want form submissions handled without the visitor's email client

No fabricated phone number, email address, street address, certification or social account has been added.
