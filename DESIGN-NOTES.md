# Avanza Logistics — design notes

The live page is `index.html`, `assets/css/style.css`, and `assets/js/main.js`. It is a static site. Open `index.html` or deploy the folder with the Vercel preset **Other**. jQuery, Bootstrap, Font Awesome, and `assets/css/libraries.css` are not loaded. The old SCSS template is still on disk and is unused.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `--bg-0` | `#050a1f` | Page, footer, sticky header |
| `--bg-1` | `#080f2b` | Alternating sections |
| `--bg-2` | `#0b1435` | Glass cards |
| `--bg-3` | `#121c45` | Brand navy, active service row |
| `--bg-4` | `#1b2a63` | Service-row hover |
| `--accent` | `#ff5e14` | Brand orange: CTAs, indices, checks, the delivered-goods figure |
| `--accent-hover` | `#c93200` | Darkened orange, available for hover states |
| `--text-1` | `#f4f6ff` | Headings |
| `--text-2` | `#9b9b9b` | Body copy. Passes AA on the navy surfaces |
| `--text-3` | `#6b7394` | Defined, kept off small text. It is about 4.2:1 on `--bg-0`, short of AA for 12px labels, so labels use orange or `--text-2` |
| `--on-accent` | `#050a1f` | Ink on orange buttons |

White `#ffffff` on `#ff5e14` is about 3.1:1, which fails AA for a 13px label. Primary buttons use near-black navy ink on the brand orange (about 6.4:1) and keep the orange glow on hover.

## Type

- Headings: Sora 500
- Body: Inter 400/500, 16.5px, line-height 1.65
- Labels: JetBrains Mono, 12px, uppercase, wide tracking

## Components

Header, hero crossfade, status panel, principle ticker, glass cards, numbered solution tiles, service tab console, location switcher, certificate badges, client marquee, footer, back-to-top.

Corner brackets appear in three places only: the hero status panel, the about photograph, and the map frame.

## Placeholders

| Item | What you see | What to drop in |
| --- | --- | --- |
| Hero slides 3–5 | Navy/orange gradient. The line “Banner image to be added” shows on those slides. HTML comments mark each one. | `assets/images/banner-3.jpg`, `banner-4.jpeg`, `banner-5.jpeg`, then point the slide at an optimized copy |
| Certificates | Shield plus the institution name. The `<img>` is in the card and stays hidden until the file loads. | `assets/images/certificates/KSM Certificate.png`, `Startup-India Certification.png`, `msme certification.png` |
| Client logos that are not in the repo | Wordmarks: JSW Paints, Murugappa Group, Asian Paints, Bisleri, Popular Vehicles, TVS Mobility, DP World, Microtrol Sterilization, True Value, iTruck | Matching files under `assets/images/clients/` |

Logos that do load: Apollo Healthco (`appolo.jpeg`), Popular Motors Hyundai, MRF, HDFC, LIC, AGP, News18, KVR. Visible text says **Apollo**. The filename still says Appolo.

## Confirm with the client

- Delivered-goods figure. The old page printed `6,1541`. This page shows **61,541** and counts it up. The HTML has `<!-- TODO: confirm figure; source shows "6,1541" -->`.
- Certificate artwork and the three missing hero photographs.
- Copyright year is set in the browser to the current year. The old site said 2024.

## Display images

`assets/images/opt/` holds smaller copies used on the page. Originals are untouched. `banner-1.jpeg` was about 1.1MB and `banner-2.jpeg` about 2.5MB; the copies used in the hero are about 184KB and 113KB.

## Logo

`assets/images/logo.png` is an opaque red square with a white mark and the word AVANZA. It reads on the dark bar without a filter or a light chip. The red field is part of the file, not a new interface color.

## Fixes versus the old site

- Dark theme. The Bootstrap template, white hero cards, and full-bleed orange blocks are gone.
- Hero autoplay is 7 seconds, pauses on hover and focus, and stops when the user prefers reduced motion. The old 100ms autoplay is gone.
- Phone and email stay available in the mobile menu. The old header hid them below 992px.
- One `id` per section. Strengths are `#strengths`. Client logos are `#clients`.
- All seven services, including TRAEZ and Driver Services, are in the footer. Each link opens that panel. Hash format is `#service=traez`. Tabs use the tab pattern and arrow keys.
- On-site logistics has no panel of its own. That tile opens 3PL.
- Four offices only, with the addresses and phones from the brief. Kochi is the default and includes both `+91 484 2384369` and `+91 93884 83952`.
- Title, meta description (150 characters), canonical `https://www.avanzalogistics.in/`, Open Graph, Twitter card, and JSON-LD for the organization and the four offices.
- `theme-color` and the web manifest use `#050a1f`. Manifest icon paths are relative to the favicon folder.
- Google Tag Manager `GTM-N88Z5GB7` is unchanged.
- `robots.txt` no longer mentions WordPress. `sitemap.xml` lists the canonical URL with lastmod `2026-10-02` and drops the duplicate `index.html` entry. `.htaccess` sends every request to `https://www.avanzalogistics.in` in one redirect. The old rule redirected www to itself and did not force HTTPS.
- Product name is TRAEZ everywhere. “T.R.A.E.Z” and “TRAEZ DMS App” are gone. The hero line is “TRAEZ Delivery Management System”.
- Grammar tightened where it did not change the offer: 360-degree, stakeholders, “more than 2,000 people”, and the supply-chain sentence that began “With decades of experienced…”. Checklist items are unchanged.

## Not measured here

A Lighthouse run was not executed in this environment. The page was checked in a browser at desktop and at a 390px-wide layout: no horizontal scroll, the TRAEZ footer link opens the TRAEZ panel, and Calicut swaps to the Harminas Building address and `+91 495 2963080`.
