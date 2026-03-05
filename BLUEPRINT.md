# Mums in Geosciences — Project Blueprint

## What this site is
A community website for mothers working in geosciences.
Shares personal testimonies, advice, and community resources.

- **Live URL:** https://www.mumsingeosciences.com
- **GitHub repo:** https://github.com/Gobienvi/MIG
- **Vercel project:** gobienvi's projects → MIG
- **Domain registrar:** Porkbun
- **Email:** mumsingeosciences@gmail.com

---

## Tech Stack
- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (CSS-based config, no tailwind.config.ts)
- **shadcn/ui** (Button, Card, Badge, Avatar, Sheet, Separator)
- **Font:** Montserrat (Google Fonts via next/font)
- **Deployed on:** Vercel (auto-deploys on every git push)

---

## Project File Structure

```
MIG/
├── app/
│   ├── layout.tsx                  ← root layout (fonts, metadata, Header + Footer)
│   ├── page.tsx                    ← home page (all sections)
│   ├── globals.css                 ← Tailwind v4 + shadcn CSS vars + brand colors
│   └── testimonies/
│       └── [slug]/
│           └── page.tsx            ← individual testimony pages
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx              ← sticky nav + mobile hamburger menu
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx                ← top section with hands image
│   │   ├── About.tsx               ← "Who this is for" + "Why" + "Our Aims"
│   │   ├── YourStory.tsx           ← green section with Google Form link
│   │   ├── Testimonies.tsx         ← 2-column card grid
│   │   ├── Advice.tsx              ← blockquote-style advice cards
│   │   ├── GraphSection.tsx        ← survey graph image
│   │   └── Community.tsx           ← 3 community hub cards
│   └── testimony/
│       └── ProfileLayout.tsx       ← individual testimony page layout
│
├── lib/
│   ├── testimonies.ts              ← ALL testimony data lives here
│   └── utils.ts                    ← shadcn helper (do not edit)
│
├── public/
│   └── images/                     ← all images (logo, photos, graph)
│       ├── mumlogo.png
│       ├── hands.jpeg
│       ├── graph2.png
│       ├── Constanza-Jara.jpeg
│       ├── Sarah Gain.jpeg
│       └── Laura.jpeg
│
├── components/ui/                  ← shadcn components (do not edit)
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Brand Colors

Defined in `app/globals.css` under `@theme inline`:

| Name      | Hex       | Used for                        |
|-----------|-----------|---------------------------------|
| sage      | `#748c76` | accents, badges, hover states   |
| green     | `#546555` | nav links, subheadings          |
| burgundy  | `#4f3c40` | primary buttons, headings       |
| teal      | `#16beb3` | footer email link               |
| mint      | `#20c997` | accents                         |
| sand      | `#e7dfd6` | muted backgrounds, borders      |
| bg        | `#faf8f6` | page background                 |

---

## How to Add a New Testimony

Open `lib/testimonies.ts` and add a new object to the `testimonies` array:

```typescript
{
  slug: 'firstname-lastname',       // used in the URL: /testimonies/firstname-lastname
  name: 'Full Name',
  family: 'Mother of X',
  role: 'Job Title',
  image: '/images/Photo.jpeg',      // or undefined if no photo
  excerpt: 'Short preview text shown on the card...',
  paragraphs: [
    'First paragraph of their story.',
    'Second paragraph.',
  ],
  advice: 'Optional advice quote.',  // leave out if none
},
```

Then add their photo to `public/images/`.
That's it — the card and page are created automatically.

---

## How to Deploy Updates

```bash
# 1. Make your changes in the code
# 2. Run this in the terminal:
git add .
git commit -m "describe what you changed"
git push
```

Vercel will automatically deploy within ~1 minute. No manual steps needed.

---

## How to Preview Locally (Before Pushing)

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.
Press Ctrl+C to stop.

---

## DNS Setup (Porkbun → Vercel)

These records are set in Porkbun's DNS panel:

| Type  | Host | Value                  |
|-------|------|------------------------|
| A     | @    | `76.76.21.21`          |
| CNAME | www  | `cname.vercel-dns.com` |

---

## Testimony Pages (URLs)

| Person         | URL                                          |
|----------------|----------------------------------------------|
| Constanza Jara | /testimonies/constanza-jara                  |
| Emilie         | /testimonies/emilie                          |
| Sarah Gain     | /testimonies/sarah-gain                      |
| Laura          | /testimonies/laura                           |

---

## Share Your Story Form
Google Form link: https://forms.gle/HDeLcPXuku3UW5gz9
(used in the YourStory section and Community hub)

---

## Old Files (kept as reference, not used)
- `index.html`, `Sarah.html`, `Laura.html`, `Emilie.html`, `constanza-jara-testimony.html`
- `styles.css`, `script.js`

These can be deleted at any time — the Next.js site does not use them.
