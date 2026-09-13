# ClassIQ — Edtech website

Static website built in plain **HTML, CSS and JavaScript** from the Figma file
*ClassIQ - Edtech web design* (Community file by Raunak Mishra, duplicated to
`g5afjjWq5uROMng4RoHeKo`). No build step, no framework, no dependencies.


## Structure

```
ClassIQ/
├── index.html          landing page
├── dashboard.html      course dashboard
├── signin.html         login
├── signup.html         registration
├── css/style.css       single shared stylesheet
├── js/main.js          nav toggle, subscribe + auth validation
└── assets/
    ├── icons/          13 SVGs exported from Figma
    └── images/         3 PNGs (@2x) exported from Figma
```

## Design tokens

Pulled from the Figma document, defined as CSS custom properties in `css/style.css`:

| Token | Value | Used for |
|-------|-------|----------|
| `--green` | `#C2F578` | buttons, accents, social chips |
| `--black` | `#000000` | hero heading, brand, auth text, dark buttons |
| `--page-bg` | `#F5F5F5` | page background, inset panel |
| `--card-bg` | `#ECEDEF` | cards, auth panel, banner, solution panel |
| `--heading` | `#373636` | card titles, All-In-One Solution, View Courses |
| `--heading-alt` | `#3E3E3E` | nav links, All Courses, Join Now |
| `--body` | `#545454` | feature list |
| `--text-strong` | `#282828` | "Professionals" |
| `--text-mid` | `#565656` | Trusted by…, Certified Cources for |
| `--text-soft` | `#595959` | Congratulations |
| `--text-slate` | `#545567` | Your are enrolled! |
| `--text-faint` | `#96989A` | hero paragraph |
| `--muted` | `#ACAAB4` | secondary text |

Every text colour is the exact per-node fill from the Figma document, not an
approximation — the green buttons alone use three different label colours.

**Radii and shadows** are likewise read from the file: course cards 31px, auth
card 22px, enrolled card 32px, dashboard cards 23px, solution panel 9px, buttons
8px. The repeated card/icon shadow is `0 1px 4px #0C0C0D` at 5% plus the same at
10%; the enrolled card uses a blue-tinted `#21C8F6` at 20% with a 20px backdrop blur.

**Fonts** (all Google Fonts, loaded from the CDN): Poppins, Inter, Nunito Sans.
The hero headline is Poppins **Light 300** at 68px with `-2.04px` tracking;
only "ClassIQ" is Poppins Bold 700. "Professionals" is Poppins ExtraBold 800.

## Running it

Any static server works:

```bash
python3 -m http.server 4173 -d /Users/shubhamekkaldevi/Practise/ClassIQ
```

Then open <http://localhost:4173>.

## Deliberate departures from the Figma file

- **The footer was a flattened image** in Figma (`footer 1`, a 1432×360 raster).
  It is rebuilt here as real markup so the links, the subscribe field and the
  social icons actually work and are readable by screen readers.
- **The login button** is labelled "Login". In the Figma frame the Login page's
  submit button reads "SignUp", which is a slip in the source design.
- **Dashboard course cards** are empty grey placeholders — that is exactly how
  they appear in the Figma file (`Component 1` / `Component 2` have no content).
- `Frame 2`, `user-check`, `share` and `laptop-code` are empty leftover frames in
  the Figma file and are not used.
- The layout is **responsive** (breakpoints at 1080px and 760px); the Figma file
  only specifies the 1440px desktop view.
- **Hover and focus states are my own.** The Figma file contains no prototype or
  interaction data at all (`prototypeStartNodeID: null`, zero `reactions`), so
  these states were undefined. I added conventional ones — a 2px lift on buttons
  and cards, and visible focus rings — because a static page reads as broken
  without them. Every colour used stays within the Figma palette; the single
  green is `#C2F578`.

## Performance

No framework, no build step, no runtime dependencies. Bootstrap alone would have
added ~28 KB gzipped — over three times the size of this entire codebase — to use
a fraction of it, on a design that matches none of its components.

**Full landing page, modern browser: 116 KB (76 KB over gzip).**

| | Before | After |
|---|---|---|
| Images | 490 KB (3 PNG) | **66 KB** (WebP, PNG fallback) |
| Icons | 42 KB | **36 KB** |
| HTML + CSS + JS | 30 KB raw / 8.3 KB gzip | unchanged |
| **Total** | **549 KB** | **116 KB** |

What was done, and why:

- **WebP with `<picture>` + PNG fallback** — 86% smaller, visually lossless
  (RMSE 0.42 against the PNG render). The PNG stays as a `<source>` fallback
  rather than being deleted, so older browsers still get an image.
- **`loading="lazy"` + `decoding="async"`** on everything below the fold; the
  hero image gets `fetchpriority="high"` instead, since it is the LCP element.
- **Explicit `width`/`height` on every image** so the browser reserves space and
  nothing shifts during load (no CLS).
- **Font weights trimmed 12 → 9.** Inter 400/500 and Nunito Sans 700 were
  requested but never referenced. One shared font URL across all four pages so it
  is fetched once and cached for the rest of the site.
- **`preconnect` to fonts.gstatic.com** so the second hop starts early, and
  `display=swap` so text paints immediately in a fallback face.
- **Dead SVG filter definitions stripped** — the Figma export wrapped each icon in
  drop-shadow filters that fell outside the cropped viewBox. Removing them cut
  those four files by 56%.
- **`prefers-reduced-motion`** disables all transitions for users who ask for it.

### A note on repeated markup

The header and footer are duplicated across the four HTML files. This is
deliberate: the brief specifies plain HTML/CSS/JS with no build step, and the
alternative — injecting shared chrome with JavaScript — would delay first paint
and hide the navigation from crawlers, working against the performance
requirement. Static duplication is the faster and more robust trade here.

## Accessibility

Skip link, visible focus rings, labelled form fields, `aria-live` validation
messages, `aria-expanded` on the mobile menu, and `prefers-reduced-motion` support.
