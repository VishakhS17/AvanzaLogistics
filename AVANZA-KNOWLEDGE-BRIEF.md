# Avanza Logistics — Website Knowledge Brief

Source of truth: the single-page site in this repository (`index.html` plus `assets/scss` and `assets/css/style.css`).
Live domain referenced by the site: `https://www.avanzalogistics.in`.
GitHub: `https://github.com/VishakhS17/AvanzaLogistics`.
This brief records what the website actually says and how it is built. It does not invent company facts that are not on the page.

---

## 1. What the website is

Avanza Logistics is a one-page marketing site for a South India logistics company. There is no app, no blog, no second HTML page, and no build step. `index.html` is the entire public site. Navigation jumps to sections on that same page.

The company presents itself as a 360-degree logistics provider: third-party logistics (3PL), transportation, reverse logistics, supply-chain consultancy, manpower, driver services, and a delivery platform called TRAEZ.

**Positioning in one line.** A Kochi-headquartered logistics company, powered by ABS Group, serving Kerala, Tamil Nadu, and Karnataka, built on Reliability, Trust, and Adaptability.

**Audience.** Large and mid-size companies that need warehousing, distribution, fleet, drivers, or on-site manpower in South India. The hero copy talks to “some of the largest companies all over the world” and “leading companies nationwide.” The operating geography stated in the About copy is South India, specifically Kerala, Tamil Nadu, and Karnataka.

**What a visitor can do.** Read the company story, open one service at a time, switch between four office maps, and call or email. There is no quote form, no login, and no checkout on this page.

---

## 2. Company facts stated on the site

| Fact | Exact claim on the site |
| --- | --- |
| Name | Avanza. Footer copyright says “Avanza.” LinkedIn company name is “avanza-logistics-p-ltd”. |
| What it does | 360 degree service provider in logistics: 3PL, Transportation Services, and Manpower Management Services. |
| Headquarters | Kochi. |
| Network | Across South India. Capable of serving Kerala, Tamil Nadu, and Karnataka. Manpower can be sourced “anywhere in south India.” |
| Origin | “Birthchild of a very ambitious group of professionals” who want to contribute to logistics growth in India. |
| Parent / backer | ABS Group, described as pioneers in manpower services for the last few decades, and an ISO 9001:2015 company, “proudly powering this venture.” |
| Principles | Reliability, Trust, and Adaptability. |
| Management experience | Cumulative experience of over 100 years. |
| Workforce | More than 2,000 people already working under group companies. |
| Industries handled | Food products, construction, automotive, electronics, and sensitive goods. |
| Capabilities claimed | Talent management, skill development, IR/HR management, operational-efficiency improvement, custom solutions matched to business model and budget. |
| Delivered-goods counter | The About image badge reads **6,1541** and the label is “Delivered Goods.” That figure is printed exactly that way (it is not formatted as 61,541). |
| Copyright | Copyright © 2024 Avanza. All rights reserved. |

### Values, vision, mission (verbatim)

**Values.** Our organization believes in ensuring best of business ethics and conduct by bringing in transparency to clients & stakeholders, exhibiting corporate social responsibility and developing best work practices that will promote business growth as well as employee welfare.

**Vision.** To become a renowned player in logistics field with network all across India and to be a future proof company with best of resources, Values and technology as its strength.

**Mission.** To provide tailor made solutions to our clients, build relationships all stake holders that defies time, develop a quality workforce that is future ready and create innovative systems leveraging new age technology.

### Strengths and approach (verbatim)

With more than 2000 workforce already working under our group companies we are well experienced in Talent management, Skill Development and IR/HR Management. Our management team has experience in handling various industries from food products, construction, automotive, electronics and sensitive goods We have the industry knowledge and have the capacity to work with our clients in improving the operational efficiency and adapting to challenging situations.

We approach each industry/client according to their business model and we provide custom made solutions that can suit their expectation and budget. We work with our clients continuously to provide solutions to their market demands and our approach is to contribute effectively for achieving our clients business goals.

---

## 3. Voice and content rules

Anyone writing or editing this site should match the voice already on the page.

- Corporate, confident, and service-led. Sentences are long and explanatory, not punchy startup copy.
- Headlines are short and often in Title Case or ALL CAPS. Body copy is sentence case.
- Recurring words: tailor made, custom made, statutory compliant, documentation, POD, reliability, South India, transparency, efficiency.
- The company talks about clients, stakeholders, and workforce. It rarely uses “we’re” contractions. “We” is used constantly.
- British-leaning spelling appears in places (`favour` is not used; “organisation” vs “organization” is mixed — both appear).
- Known grammar the site currently ships with, kept here so editors know what is live: “360 degree” (no hyphen), “relationships all stake holders”, “defies time”, “With decades of experienced and logistics experts”, “more than 2000 workforce”, “6,1541”.
- Product name spelling is inconsistent on purpose in the current HTML: **TRAEZ**, **T.R.A.E.Z**, and the hero line **TRAEZ DMS App**.
- Do not invent nationwide offices. The page only publishes four locations: Kochi, Calicut, Trivandrum, Coimbatore.

---

## 4. Page map (top to bottom)

The page is one scroll. Anchor IDs are what the menu actually links to.

| Order | Section | Anchor | Role |
| --- | --- | --- | --- |
| 1 | Header | `#header` | Logo, phone, email, social, nav |
| 2 | Hero slider | `#slider3` | Five full-bleed slides |
| 3 | About | `#about2` | Company story, counter, contact button |
| 4 | Values / Vision / Mission | `#testimonial2` | Three-card carousel on an orange field |
| 5 | Strengths and approach | `#clients` (first of two elements with this id) | Two paragraphs, centered |
| 6 | Our Solutions | `#Banner2` | Orange list of eight offerings plus photo |
| 7 | Service detail | `#textContentSection` | Left menu, right panel. Default panel is 3PL |
| 8 | Locations | `#contact2` | Four city buttons and a Google Map |
| 9 | Certifications title | none | “Accredited & Trusted” |
| 10 | Certification logos | `#certifications` | Three certificate images on orange |
| 11 | Client logos | `#clients` (duplicate id) | Auto-scrolling logo strip |
| 12 | Footer | `#footer` | Blurb, phones, service links, quick links, copyright |
| 13 | Back to top | `#scrollTopBtn` | Arrow button |

**Main navigation**

- Home → `index.html`
- About Us → `#about2`
- Services → `#Banner2`
- Contact → `#contact2`

**Header contact (desktop only, hidden below the large breakpoint)**

- Call Us: **+91 93884 83952** → `tel:919388483952`
- Email Us: **info@avanzalogistics.in**
- Facebook: `https://www.facebook.com/profile.php?id=61559986353555`
- Instagram: `https://www.instagram.com/avanza_log`
- LinkedIn: `https://www.linkedin.com/company/avanza-logistics-p-ltd/`

---

## 5. Full content, section by section

### 5.1 Hero slider

Five slides. Autoplay is on, fade transition, arrows on, dots off. Each slide is a photo with a dark overlay and a white content card on the left (about half the width on large screens).

**Slide 1** — image `assets/images/banner-1.jpeg`
- Title: The Best Global Logistics Solutions.
- Body: Competitive advantages to some of the largest companies all over the world.
- Button: Our Services → `#Banner2`

**Slide 2** — image `assets/images/banner-2.jpeg`
- Title: Innovative Transportation!
- Body: Empowering leading companies nationwide with superior logistics strategies.
- Button: More About Us → `#about2`

**Slide 3** — image `assets/images/banner-3.jpg`
- Title: TRAEZ DMS App
- Body: TRAEZ is our Delivery Management System that delivers end-to-end trip and delivery management with real-time tracking, automation, and transparency—cutting costs and idle time while maximizing driver efficiency.
- Button: Our Services → `#Banner2`

**Slide 4** — image `assets/images/banner-4.jpeg`
- Title: Manpower Services
- Body: We offer end-to-end manpower solutions across South India, with tailored team selection and ongoing monitoring to ensure reliability across industries.
- Button: Our Services → `#Banner2`

**Slide 5** — image `assets/images/banner-5.jpeg`
- Title: Driver Services
- Body: We offer local and outstation services for both goods and passenger segments on a trip, hourly, daily, or monthly basis—backed by 24/7 support, vehicle stock movement tracking, and reliable service assistance.
- Button: Our Services → `#Banner2`

Carousel settings in the markup: 1 slide at every breakpoint, autoplay timeout `100`, speed `100`, loop on, transition fade. Those timeout and speed values are extremely short (Owl Carousel treats them as milliseconds), so the hero advances very quickly.

### 5.2 About

Eyebrow: **Who we are**
Title: **ABOUT US**

Paragraph 1. Avanza is a 360 degree service provider in logistics domain having expertise in 3PL services, Transportation Services & Manpower Management Services. We are headquartered in Kochi and having network across South India.

Paragraph 2. Avanza is the birthchild of a very ambitious group of professionals who believes in contributing to logistics growth in India and to create a position in this industry that will be guided by the principles of Reliability, Trust and Adaptability.

Paragraph 3. ABS Group, who are the pioneers in manpower services for last few decades and an ISO 9001:2015 company is proudly powering this venture.

Paragraph 4. Our management team has a cumulative experience of over 100 years of experience which benefits all our customers using our service. We are determined to consolidate our expertise in the logistics field and make our clients proud of our services for a very long period of time. Based out of Kochi, we are capable to provide services in Kerala/Tamil Nadu & Karnataka.

Button: **Contact Us for more** → `#contact2`

Image: `assets/images/service-1.jpeg`
Badge on the image: icon `icon-box`, number **6,1541**, label **Delivered Goods**. The badge is orange (`#ff5e14`) with white type, sitting on the lower right of the photo.

### 5.3 Values, vision, mission

This block reuses the testimonial carousel component. It is not customer quotes. Three cards, three-up on desktop, two-up on medium, one-up on small. White dots. Orange gradient overlay. Copy is in section 2 above. Extra `<br>` tags are in the Vision and Mission cards so the cards roughly match height.

### 5.4 Our Solutions

Title: **OUR SOLUTIONS**

Intro: With our expertise in logistics field and with a strong qualified team for execution we are more than equipped to provide the following service suites to our valuable customers.

Checklist (white checkmarks on orange):

1. 3PL Services
2. ON-SITE LOGISTICS
3. REVERSE LOGISTICS
4. SUPPLY CHAIN CONSULTANCY
5. TRANSPORTATION & DELIVERY SERVICES
6. SKILLED AND UNSKILLED MANPOWER
7. DRIVER SERVICES
8. T.R.A.E.Z

Right half: photo `assets/images/service-2.jpeg` with a dark overlay and parallax class.

“On-site logistics” appears in this list and is not a separate panel in the service menu below.

### 5.5 Service menu and panels

Left sidebar title: **Our Services**

Menu labels, in order. The first item is selected on load.

1. 3PL & CFA SERVICES
2. TRANSPORTATION & DELIVERY
3. REVERSE LOGISTICS
4. MANPOWER SERVICES
5. SUPPLY CHAIN CONSULTANCY
6. TRAEZ
7. DRIVER SERVICES

Clicking a label hides every panel and shows one. The active row turns orange with white text. Only one panel is visible at a time. There is no deep link that opens a specific service from the URL, except the footer link to `#3pl`, and that id is on a hidden panel until 3PL is the active one (it is the default).

#### 3PL & CFA Services — id `3pl`

Title: **FLEXIBLE, INDUSTRY READY SOLUTIONS**

We provide fully integrated services related to Warehousing, Distribution and Order Fulfillment. We provide services based on customer preference and client can choose from single PL to 3PL services.

We provide VAS ( Value Added Services ) that includes Billing, Documentation, Collection Accounting, Customer Service and Break bulking/Packing services. We are fully statutory compliant and are committed to make sure that all statutory requirements are complied without fail.

We have the option to choose from a basket of various services and our solutions can be custom made to suit your organization's requirement.

Left checklist:

- Order Management
- Order Kitting
- Customer Complaint Management
- Covered Warehouse and Storage
- Pick-Pack
- Promotional Packing & Supply
- Open Yard Storage

Right checklist:

- Cross Docking
- Housekeeping Management
- WMS and Inventory Management
- Reverse Logistics
- Documentation & MIS Management
- Proof of Delivery

#### Transportation & Delivery — id `transportation`

Title: **FAST AND RELIABLE TRANSPORTATION SERVICES**

Our Transportation services can provide you tailor made services for delivery of your materials to destination points safely within a specified Turn Around Time.

Our team will make sure the deliveries as per agreed service standards and also ensure proper documentation/PODs in time. We also are experienced in handling dispute resolutions and can provide support to ensure smooth delivery experience for customers.

Left checklist:

- Single source of various types of fleets
- Open Body Trucks - 1 tonner to 25 tonner
- Close Body Trucks - 7ft to 32ft
- Ambient Temperature Vehicles
- Documentation & POD Guarantee
- On call & Dedicated Model

Right checklist:

- Multi Point Delivery Services
- GPS Tracking & Safety Measures
- Sensitive & Liquid Material handling
- Backend Support and Escalation Systems
- Custom Solutions for special products

#### Reverse Logistics — id `reverse-logistics`

Title: **SAFE AND DEPENDABLE RETURN LOGISTICS**

Fetching the return material is always a challenge for many prestigious companies. We provide industry specific reverse logistics services for all our clients.

Left checklist:

- Reverse pickup from customers & Sites
- Packing Services
- Documentation Support
- Consolidation Services
- Open Body Trucks

Right checklist:

- Closed Body Trucks
- Sensitive & Liquid Material handling
- Backend Support and Escalation Systems
- Custom Solutions for special products

#### Manpower Services — id `manpower`

Title: **BEST IN INDUSTRY SERVICES FOR MAN POWER MANAGEMENT**

We have a full fledged wing to provide any kind of manpower services to our clients. We have a hands on approach in picking the right team for our customers and we have regular monitoring systems to ensure their availability.

We provide manpower services to various industries and have the capacity to source manpower anywhere in south India that suits our customers.

Left checklist:

- Unskilled Manpower - Helpers/Pickers/Assistants
- Skilled manpower - Technical & Non Technical
- IR & HR Management
- Payroll Services

Right checklist:

- Training & Development
- Recognition & Rewards
- 100% Statutory Compliances
- Temporary manpower

#### Supply Chain Consultancy — id `supply-chain`

Title: **KNOWLEDGE. ALIGNMENT. DRIVING PERFORMANCE**

With decades of experienced and logistics experts equipped with multi industry knowledge have helped many organizations in updating their distribution process.

Our approach is simple and flexible, we offer a dedicated project team approach in which we assign a Project Manager to do a complete review and study of your current systems/practices and come up with solutions for efficiency enhancement.

During the project period, your Team will gain unlimited access to our diverse team that have decades of experience in design and implementation of supply chain solutions.

Left checklist:

- Supply Chain Optimization
- Warehouse Operations Work Flow Simulations
- Warehousing & Distribution Systems
- Storage & Handling Systems

Right checklist:

- Define Policies & its Implementation
- Establish SOP - System & Work-Instruction
- Assist in adopting various technological systems to modernize your business

#### TRAEZ — id `traez`

Title: **INTELLIGENT TRIP TRACKING & DELIVERY MANAGEMENT**

TRAEZ is our cloud-based logistics platform that offers real-time tracking, automated driver dispatch, trip booking, and delivery monitoring. Designed for transparency, efficiency, and speed — it’s a one-stop solution for managing all legs of your delivery operations.

Features include document upload, delivery confirmation, driver ratings, and fully customizable reporting. With a modern interface and powerful backend, TRAEZ simplifies logistics management.

Left checklist:

- Trip Booking & Assignment
- Live Trip Tracking
- Photo/Document Uploads

Right checklist:

- Client & Customer Visibility
- Trip Reports & Driver Logs
- Delivery Time Stamping

The hero slide adds claims that this panel does not repeat in the checklist: end-to-end trip and delivery management, automation, cutting costs and idle time, maximizing driver efficiency. The hero calls it a “Delivery Management System” and “TRAEZ DMS App.”

#### Driver Services — id `driver`

Title: **RELIABLE, TRAINED, AND MONITORED DRIVER SOLUTIONS**

Our driver services include onboarding, training, attendance management, and performance monitoring to ensure every trip is smooth and secure.

We offer flexible driver assignments — from on-call to dedicated drivers — supported by safety protocols and regular feedback systems.

Left checklist:

- Driver Onboarding & KYC
- Attendance & Performance Tracking
- Dedicated & On-Call Assignments

Right checklist:

- Safety & Support Systems
- Driver Ratings & Feedback
- Escalation Handling

The hero slide adds claims this panel does not: local and outstation, goods and passenger segments, trip / hourly / daily / monthly, 24/7 support, and vehicle stock movement tracking.

### 5.6 Locations

Title: **Our Locations**

Four buttons: Kochi, Calicut, Trivandrum, Coimbatore. Kochi is the map shown on first load. Switching a button replaces the Google Maps iframe and the address block. There is no contact form.

**Kochi Office** (default)
54/4036, 2nd Floor, Emmy Square, SA Road, Elamkulam, Ernakulam, Kerala 682020
Phone: +91 484 2384369, +91 93884 83952
Email: info@avanzalogistics.in
Map place name embedded in the iframe: Emmy Square

**Calicut Office**
Flat No: 63/1212, Harminas Building UKS ROAD, Calicut Pin: 673003
Phone: +91 495 2963080
Email: info@avanzalogistics.in
Map place name: Harminas Building

**Trivandrum Office**
Opp. Old deshabhimani building, Manjalikulam Road Thambanoor Trivandrum Pin: 695001
Phone: +91 471 2321070
Email: info@avanzalogistics.in
Map place name: Deshabhimani Manjalikulam Office

**Coimbatore Office**
Kangayampalayam, Sulur Airforce station, Coimbatore, Tamilnadu. Pin: 641401
Phone: +91 93884 83952
Email: info@avanzalogistics.in
Map place name: Sulur Air Force Station

### 5.7 Certifications and affiliations

Eyebrow: **Accredited & Trusted**
Title: **Certifications & Affiliations**
Intro: Recognized by government-backed institutions for our credibility and impact.

Three logos on white cards over the orange gradient:

| Alt text | File |
| --- | --- |
| Kerala Startup Mission | `assets/images/certificates/KSM Certificate.png` |
| Startup India | `assets/images/certificates/Startup-India Certification.png` |
| MSME Registered | `assets/images/certificates/msme certification.png` |

These three files are referenced in HTML. They are not present in the current project folder (see section 11).

### 5.8 Client logo strip

No heading. An Owl carousel, 6 logos visible on desktop, 4 on medium, 2 on small, autoplay, no arrows, no dots, 20px gap.

Priority order, as commented in the HTML:

1. JSW paints — `assets/images/clients/jswpaints.png`
2. Murugappa Group — `murugappa.png`
3. Appolo Healthco — `appolo.jpeg` (spelled Appolo in the alt text)
4. Asian Paints — `asianpaints.png`
5. Bisleri — `bisleri.png`
6. Popular Vehicles — `popularvehicles.jpg`
7. TVS mobility — `tvsmob.jpg`
8. DP World — `dpworld.png`
9. Microtrol sterilization — `microtrol.jpg`
10. Popular Motors Hyundai — `popular.jpeg`
11. MRF — `mrf.jpeg`

Then, comment in HTML: “Other clients (order doesn’t matter)”:

12. HDFC — `hdfc.jpeg`
13. LIC — `lic.jpeg`
14. AGP — `agp.png`
15. News18 — `news18.png`
16. KVR — `kvr.jpeg`
17. True Value — `truevalue.png`
18. iTruck — `itruck.jpg`

Files actually in `assets/images/clients/` today: `agp.png`, `appolo.jpeg`, `hdfc.jpeg`, `kvr.jpeg`, `lic.jpeg`, `mrf.jpeg`, `mrf.png` (unused by the page), `news18.png`, `popular.jpeg`. The other client logos are referenced and missing. There is also a `.DS_Store` in that folder.

### 5.9 Footer

Logo: `assets/images/logo.png`

Blurb: Avanza is a 360 degree service provider in logistics domain having expertise in 3PL services, Transportation Services & Manpower Management Services.

- Email: info@avanzalogistics.in
- Phone: +91 484 2384369 → `tel:914842384369`
- Phone: +91 93884 83952 → `tel:919388483952`

**What We Do**

- 3PL & CFA SERVICES → `#3pl`
- TRANSPORTATION → `#textContentSection` (does not open the transportation panel)
- REVERSE LOGISTICS → `#textContentSection`
- MANPOWER SERVICES → `#textContentSection`
- SUPPLY CHAIN → `#textContentSection`

TRAEZ and Driver Services are not in the footer list.

**Quick Links**

- HOME → `#slider3`
- ABOUT US → `#about2`
- SERVICE → `#Banner2`
- CONTACT → `#contact2`

Two footer nav columns between the about block and “What We Do” are empty.

Copyright: **Copyright © 2024 Avanza. All rights reserved**

---

## 6. Design language

The visual system is a logistics template: white page, navy structure, orange action color, photography with dark scrims, and a white “card” sitting on hero photos.

**Personality.** Industrial and corporate, not playful. Orange is the only loud color. Navy is used as a bar and as heading color, not as large page backgrounds except the sticky nav. Most of the page is white.

**Layout.** Bootstrap-style 12-column grid inside a centered container. Sections stack full width. The solutions block is a 50/50 split: orange copy on the left, photo on the right, edge to edge (`container-fluid`, no column padding). Service content is a 4/8 split: menu left, copy right. About is 6/6.

**Shape.** Small radii only. Buttons are almost square (`2px` radius, with a `3px` radius set and then overridden). Hero card, sidebar widget, and counter badge use `5px`. Client and certificate cards use Bootstrap `rounded`. Nothing is pill-shaped on the live page except unused `.btn__rounded` in the stylesheet.

**Imagery.** Full-bleed photography. Hero and banner photos get a dark overlay so white or orange type can sit on them. The hero copy does not sit on the photo directly. It sits in a white panel with generous padding (76px top, 50px right, 80px bottom, 80px left) and a giant, almost invisible navy icon watermark (`opacity: 0.05`) in the corner of that panel.

**Lists.** Feature lists are not bullets. They are Poppins 14px semibold lines with a Font Awesome check (`\f00c`) to the left. On orange backgrounds the checks and the words are white.

**Motion.** Hero fades between slides. Values carousel and client logos auto-scroll. Service panels swap instantly (jQuery show/hide). Sticky nav animates in. Hover on primary buttons in the hero fills navy (`#121c45`). Hover on text links darkens the orange by 20%. Selection highlight is orange with white text.

**Spacing rhythm.** Section headings use about 50px under the title block (`mb-50`). Footer top padding is 100px. Body line length is kept narrow: About and Strengths headings are centered in a 6- or 8-column measure.

---

## 7. Color codes

These are the design tokens in `assets/scss/global/_vars.scss`. They are the colors to use. Everything else is a supporting neutral from the template.

### Brand tokens

| Token | Hex | Role on this site |
| --- | --- | --- |
| `$color-theme` | `#ff5e14` | Primary orange. Buttons, eyebrows, icons, service-menu active state, solution panel, checklists, counter badge, link color, text selection, values/certification overlay. |
| `$color-heading` | `#121c45` | Navy. Headings, nav bar background, hero button hover, strong phone/email in the header, footer phone numbers. |
| `$color-body` | `#9b9b9b` | Body text. Paragraphs, hero descriptions, footer links. |
| `$color-white` | `#ffffff` | Page background, hero card, text on orange, theme-color meta. |
| `$color-black` | `#000000` | Defined, rarely the main text color. |
| `$color-dark` | `#282828` | Utility class `.color-dark` / `.bg-dark`. |
| `$color-gray` | `#f9f9f9` | Light gray utility. Subtitle color when a heading is forced white. |

Link hover is `darken(#ff5e14, 20%)`, which computes to about `#c93200`.

### Neutrals used in components

| Hex | Where |
| --- | --- |
| `#333333` | Default nav link color, some menu chrome. |
| `#777777` | Secondary header text in parts of the template. |
| `#616161` | Muted text in unused testimonial/pricing/blog styles. |
| `#5d5d5d` | Blog meta in the unused template. |
| `#a5a5a5` | Footer contact labels (“Email:”, “Phone:”). Carousel arrow border. |
| `#999999` | Carousel control color. |
| `#cccccc` | Progress-bar percentage in unused template styles. |
| `#eaeaea` | Hairline borders: footer, forms, dropdowns. |
| `#ededed` | Header border, accordion, tag borders. |
| `#f2f2f2` | Mega-menu divider. |
| `#f4f4f4` | Sidebar widget background. Also a page-title muted color. |
| `#ebebeb` | Progress track. |
| `#eeeeee` | Carousel dot base. |
| `#1b1a1a` | Photo overlay scrim. |

### Overlays and gradients (as written in SCSS)

| Class | Treatment |
| --- | --- |
| `.bg-overlay` | `rgba(#1b1a1a, 15%)` over the photo. Used on hero slides. |
| `.bg-overlay-2` | 25% of `#1b1a1a`. |
| `.bg-overlay-3` | 75% of `#1b1a1a`. |
| `.bg-overlay-secondary` | 90% of navy `#121c45`. |
| `.bg-overlay-theme` | 90% of orange `#ff5e14`. |
| `.bg-overlay-grdient-theme` | 90% orange, plus a 90deg gradient that becomes solid `rgb(255, 94, 20)` at 65%. Used behind Values and Certifications. The class name is misspelled “grdient” in the CSS and the HTML. |
| `.bg-overlay-grdient-secondary` | Navy gradient toward `rgb(5, 16, 59)`. |
| `.bg-overlay-gradient-secondary-2` | 95% navy, same `#05103b` gradient stop. |

`#05103b` is a deeper navy used only inside those unused-on-this-page secondary gradients. It is not a separate Sass token.

### Colors that are not the brand

These ship with the favicon pack and should not be treated as Avanza colors:

| Hex | Where |
| --- | --- |
| `#5bbad5` | Safari pinned-tab `mask-icon` color. A RealFaviconGenerator default. |
| `#da532c` | `msapplication-TileColor` in the HTML and `browserconfig.xml`. Another favicon-generator default, close to but not the brand orange. |
| `#ffffff` | `<meta name="theme-color">` and the web manifest theme and background. |

---

## 8. Typography

Loaded from Google Fonts:

`Roboto:400,500,700` and `Poppins:400,600,700`

| Role | Family | Weight | Size | Line height | Case | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Body | Roboto | 400 | 15px | inherited, paragraphs 25px | sentence | `#9b9b9b` |
| Paragraphs | Roboto | 400 | 15px | 25px | sentence | `#9b9b9b` |
| All h1–h6 | Poppins | 600 | see scale | 1.1 | capitalize | `#121c45` |
| h1 | Poppins | 600 | 52px | 1.1 | capitalize | navy |
| h2 | Poppins | 600 | 42px | 1.1 | capitalize | navy |
| h3 | Poppins | 600 | 38px | 1.1 | capitalize | navy |
| h4 | Poppins | 600 | 32px | 1.1 | capitalize | navy |
| h5 | Poppins | 600 | 24px | 1.1 | capitalize | navy |
| h6 | Poppins | 600 | 18px | 1.1 | capitalize | navy |
| Section title `.heading__title` | Poppins | 600 | 33px | — | capitalize | navy |
| Heading variant 3 title | Poppins | 700 | 37px | 52px | capitalize | navy |
| Eyebrow `.heading__subtitle` | Poppins | 700 | 14px | 1 | — | `#ff5e14` |
| Section description `.heading__desc` | Roboto | 400 | 16px | 25px | sentence | body gray |
| Service body `.text__block-desc` | Roboto | 400 | 16px | 26px | sentence | body gray |
| Hero title `.slider-3 .slide__title` | Poppins | 600 | 40px | — | capitalize | navy |
| Hero body | Roboto | — | body size | — | sentence | `#9b9b9b` |
| Nav link | — | 700 | 15px | 60px in this header | capitalize | white on the navy bar |
| Button | — | 700 | 14px | 48px inside a 50px height | capitalize | white on orange |
| Checklist item | Poppins | 600 | 14px | — | as written | white on orange panels |
| Footer widget title | Poppins | 600 | 14px | 1 | capitalize | navy |
| Footer link | — | — | 14px | 33px | as written | `#9b9b9b`, orange on hover |
| Footer about paragraph | Roboto | — | 14px | 24px | sentence | body gray |
| Copyright | — | — | 13px | — | — | — |

`text-transform: capitalize` is on all headings. That forces the first letter of each word up, which is why titles written in ALL CAPS in the HTML still display as capitalized words if the CSS wins, and why a title like “TRAEZ DMS App” can be affected. Buttons are also `capitalize`.

On medium screens (768–991px) `.heading__title` is reduced. The typography partial continues the scale downward for small screens.

---

## 9. UI components that the page actually uses

**Primary button** `.btn.btn__primary`
- 170 × 50px, 14px, weight 700, letter-spacing 0.4px, radius 2px.
- Fill `#ff5e14`, 2px solid same orange, white label.
- Default hover: transparent fill, orange text and border.
- Hero buttons add `.btn__hover3`. Hover becomes navy fill `#121c45`, white text, navy border.

**Outline location buttons** use Bootstrap `btn btn-outline-primary`, so they follow Bootstrap’s primary blue unless libraries.css remaps it. They are not the custom orange `.btn__primary`.

**Header** `.header.header-white.header-full.header-full-layout2`
- Top row: logo left, call / email / social right. Top bar background is transparent. Icon color is orange. Phone and email values are navy, 14px, weight 700.
- Bottom row `.navbar__bottom`: full-width navy `#121c45`. Links are white, 15px, weight 700, 60px line-height. Hover draws a white 2px underline.
- When the bottom bar sticks (`.fixed-navbar`), it stays navy, 60px tall, with a light shadow `0 3px 4px rgba(0, 0, 0, 0.07)`.
- Logo image is `assets/images/logo.png` for both “light” and “dark” slots. Height of the top navbar in this layout is 90px.
- Mobile: a hamburger (`.navbar-toggler` / `.menu-lines`). The top contact row is `d-none d-lg-block`, so phone, email, and social disappear under 992px.

**Service sidebar**
- Widget background `#f4f4f4`, padding 40px, radius 5px, title 20px weight 700.
- Items sit on white. Each row is 16px, weight 700, navy, 48px line, 2px `#f4f4f4` divider.
- `.active` and hover: background `#ff5e14`, white text.

**Orange feature panel** `.bg-theme`
- Background `#ff5e14`.
- White Poppins checklist.

**Counter badge**
- 190px wide, padding 40px 20px 40px 40px, radius 5px, orange fill, white 20px border, number at 38px.

**Footer**
- White, 1px `#eaeaea` top border. Top padding 100px, bottom of that block 67px. Bottom bar padding 28px, another `#eaeaea` rule.
- Footer links turn orange on hover.

**Back to top.** `#scrollTopBtn` with a Font Awesome long arrow up. Shown after scroll (logic in `main.js`).

---

## 10. Breakpoints

From `assets/scss/global/_mixins.scss`:

| Name | Range |
| --- | --- |
| Extra small | 320–575px |
| Small | 576–767px |
| Medium | 768–991px |
| Large | 992–1200px |
| Extra small + small combined | 320–767px |

Bootstrap’s own `lg` breakpoint (992px) is what shows or hides the header contact row. The navbar collapses below `lg`.

---

## 11. Assets

### Present and used

| File | Use |
| --- | --- |
| `assets/images/logo.png` | Header and footer |
| `assets/images/banner-1.jpeg` | Hero slide 1 |
| `assets/images/banner-2.jpeg` | Hero slide 2 |
| `assets/images/service-1.jpeg` | About photo |
| `assets/images/service-2.jpeg` | Solutions photo |
| `assets/images/favicon/favicon.ico` | Favicon |
| `assets/images/favicon/favicon-16x16.png` | Favicon |
| `assets/images/favicon/favicon-32x32.png` | Favicon |
| `assets/images/favicon/apple-touch-icon.png` | 180×180 apple touch |
| `assets/images/favicon/android-chrome-192x192.png` | Manifest icon (path in manifest is root-relative `/android-chrome-192x192.png`, which will 404 unless copied to the site root) |
| `assets/images/favicon/android-chrome-512x512.png` | Same manifest issue |
| `assets/images/favicon/mstile-150x150.png` | Windows tile. browserconfig points at `/mstile-150x150.png` at the site root. |
| `assets/images/favicon/safari-pinned-tab.svg` | Mask icon |
| Client logos that exist: agp, appolo, hdfc, kvr, lic, mrf.jpeg, news18, popular.jpeg | Logo carousel |

### Referenced in HTML and missing from this folder

Hero: `banner-3.jpg`, `banner-4.jpeg`, `banner-5.jpeg`.

Certificates folder entirely: `KSM Certificate.png`, `Startup-India Certification.png`, `msme certification.png`.

Clients: `jswpaints.png`, `murugappa.png`, `asianpaints.png`, `bisleri.png`, `popularvehicles.jpg`, `tvsmob.jpg`, `dpworld.png`, `microtrol.jpg`, `truevalue.png`, `itruck.jpg`.

### Present and not used by index.html

`assets/images/backgrounds/1.jpg` through `7.jpg` and `2.png`.
`assets/images/clients/mrf.png` (the page uses `mrf.jpeg`).
`assets/images/lightbox/close.png`, `loading.gif`, `next.png`, `prev.png`.
`assets/images/testimonials/quote-icon.png`, `quote-icon2.png`, `quote-icon3.png`.
`assets/js/google-map.js` (the contact section uses Maps embed iframes, not this script).

### Fonts on disk

- Font Awesome: eot, svg, ttf, woff, woff2, otf in `assets/fonts/`
- Icomoon: eot, svg, ttf, woff (custom icon font; header uses `icon-call`, `icon-envelope`; about uses `icon-box`)

---

## 12. How the page behaves

1. On load, every `.serviceDiv` is hidden, then `#3pl` is shown and the “3PL & CFA SERVICES” row gets `.active`.
2. Each menu label is an `<a>` with no `href`. jQuery class handlers (`.3pl`, `.transportation`, `.reverse`, `.manpower`, `.supply`, `.traez`, `.driver`) swap the visible panel. The class `3pl` starts with a digit, which is valid in the HTML class attribute and in jQuery, and invalid as a CSS identifier.
3. `showMap(city)` swaps the iframe `src` and the address HTML for Kochi, Calicut, Trivandrum, or Coimbatore.
4. `main.js` also runs template behavior the page still depends on: mobile nav toggle, sticky header on scroll, scroll-to-top, background-image helper for `.bg-img`, and Owl Carousel init for every `.carousel`.
5. Carousels read `data-slide`, `data-slide-md`, `data-slide-sm`, `data-autoplay`, `data-dots`, `data-nav`, `data-loop`, `data-speed`, `data-space`.
6. There is a contact-form AJAX handler in `main.js` (`contactForm`) aimed at `php/contact.php`. This page has no such form and no `php/` folder.

Libraries, from the script tags: jQuery 3.3.1, `plugins.js` (Owl Carousel and the rest of the template bundle), `main.js`. CSS: `assets/css/libraries.css` (Bootstrap and plugin CSS) then `assets/css/style.css`.

The SCSS in `assets/scss/` is the source of `style.css`. It is a full multi-page logistics template (blog, pricing, team, careers, projects, accordion). This site only mounts header, slider, about, testimonial carousel, banner, sidebar, contact, clients, and footer.

---

## 13. Information architecture gaps (useful if the site is rewritten)

- One page only. Sitemap lists `https://www.avanzalogistics.in/` and `/index.html`, both last modified 2024-12-03, priorities 1.0 and 0.8.
- `<title>` is `Avanza`. Meta description is `Avanza`. Canonical is `https://www.avanzalogistics.in` (no trailing slash, no `www` consistency check against the sitemap, which uses `www`).
- `robots.txt` still has WordPress rules (`Disallow: /wp-admin/`) and points at `https://www.avanzalogistics.in/sitemap.xml`. The site is not WordPress.
- `.htaccess` turns the rewrite engine on and redirects `www.avanzalogistics.in` to `www.avanzalogistics.in`. It does not force HTTPS and it does not change the host.
- Two elements share `id="clients"` (the strengths section and the logo strip). Duplicate IDs make in-page links and scripts ambiguous.
- Footer service links other than 3PL do not open the matching panel.
- Header phone is only the mobile number. Footer and Kochi address also list the landline `+91 484 2384369`.
- Google Tag Manager container **GTM-N88Z5GB7** is in `<head>` and as a noscript iframe at the start of `<body>`.
- Language is `en`. No Hindi or Malayalam copy.

---

## 14. Technical stack and deployment

| Item | Detail |
| --- | --- |
| Type | Static HTML, CSS, JS. No `package.json`, no framework, no bundler. |
| CSS source | SCSS partials imported by `assets/scss/style.scss`. Compiled file is `assets/css/style.css`. |
| CSS on the page | `libraries.css` then `style.css`. The working copy of `index.html` points at `style.css`. |
| JS | jQuery 3.3.1, template plugins, custom `main.js`, inline location script. |
| Hosting intent | Any static host. Vercel framework preset should be **Other**, no build command, output at the project root, because `index.html` is the site. |
| Domain | avanzalogistics.in |
| Analytics | Google Tag Manager `GTM-N88Z5GB7` only. No separate gtag snippet in the HTML. |
| Maps | Google Maps embeds, one per office. They need network access to render. |

---

## 15. Quick reference card

**Say the company is:** a Kochi-based, South-India logistics provider for 3PL and CFA, transportation and delivery, reverse logistics, supply-chain consultancy, skilled and unskilled manpower, driver services, and TRAEZ.

**Say it is backed by:** ABS Group, ISO 9001:2015.

**Say the principles are:** Reliability, Trust, Adaptability.

**Orange:** `#ff5e14`
**Navy:** `#121c45`
**Body gray:** `#9b9b9b`
**Page:** `#ffffff`
**Headings:** Poppins 600, navy, capitalized
**Body:** Roboto 400, 15px / 25px, `#9b9b9b`
**Email:** info@avanzalogistics.in
**Phones:** +91 93884 83952 and +91 484 2384369
**Offices:** Kochi 682020, Calicut 673003, Trivandrum 695001, Coimbatore 641401
