# CLAUDE.md — SoloBond Landing Page

## Projekt

Landingpage für **SoloBond** (solobond.app) — eine iOS-App für Menschen die allein leben oder solo reisen. Ein täglicher Check-in per One-Tap, damit eine Vertrauensperson weiß: "Alles okay." Kein Chat, kein Anruf, kein GPS. Nur ein stilles Signal.

- **Tech:** Astro 5.x (Static Site Generator)
- **Styling:** Vanilla CSS mit Custom Properties (KEIN Tailwind)
- **Animationen:** CSS @keyframes + Intersection Observer, optional GSAP für Scroll-Parallax
- **3D Mockups:** CSS 3D Transforms (`perspective`, `rotateY`, `rotateX`) — KEIN Three.js
- **i18n:** Englisch (Default, `/`) + Deutsch (`/de/`), via JSON Content Files
- **Deployment:** Static Build → GitHub → Netlify Auto-Deploy
- **Domain:** solobond.app (IONOS DNS → Netlify)

---

## Agenten-Autonomie

Du hast **volle kreative Freiheit** bei Design-Details wie: Abstände, Schatten, Radien, Hover-Effekte, Micro-Interactions, Layout-Varianten innerhalb der Sections, dekorative Elemente, Section-Übergänge, Icon-Stil, und Animation-Timing. Nutze diese Freiheit, um eine Seite zu bauen die sich anfühlt wie von einem der besten und elegantesten Top-Designer gestaltet — nicht wie ein AI-Template.

**Was FEST vorgegeben ist** (nicht ändern):
- Farbpalette (siehe unten)
- Schriftarten (Plus Jakarta Sans + DM Sans)
- Hero ist immer oben, CTA + Footer immer unten
- Welche Sections existieren (7 Stück, siehe Seitenstruktur)
- Alle Texte kommen aus den JSON Content-Dateien
- Stop-Regeln (siehe unten)

**Was DEINE Entscheidung ist:**
- **Reihenfolge der 5 Mittelteil-Sections** (optimiere für Storytelling & Conversion)
- Konkretes Layout jeder Section (Flexbox vs Grid, Ausrichtung, Bildplatzierung)
- Spacing, Padding, Margins
- Schatten-Intensität, Border-Radien
- Hintergrundfarben-Abfolge (Hell/Dunkel-Wechsel soll visuell stimmig sein)
- Dekorative Details (subtile Formen, Linien, Trennelemente)
- Animation-Easing und -Timing
- Wie Section-Übergänge gestaltet werden (Gradient, Wave, Clean Cut)
- Wie das Pricing/Free-Segment visuell hervorgehoben wird
- Mobile vs Desktop Layout-Unterschiede
- Hover- und Focus-Effekte

---

## Mehrsprachigkeit (i18n)

### Routing
- `solobond.app/` → Englisch (Default)
- `solobond.app/de/` → Deutsch

### Content-Dateien (bereits erstellt)
- `src/content/en.json` — Alle englischen Texte
- `src/content/de.json` — Alle deutschen Texte

### Implementierung
```
src/pages/
├── index.astro          ← Lädt en.json
└── de/
    └── index.astro      ← Lädt de.json
```

Beide Pages nutzen die gleichen Komponenten, nur mit anderem Content-Objekt.

### Sprachumschalter
- Im Header: Dezenter Textlink, zeigt Name der ANDEREN Sprache
- Auf EN-Seite: "Deutsch" → verlinkt zu `/de/`
- Auf DE-Seite: "English" → verlinkt zu `/`
- Kein Dropdown, kein Flaggen-Icon

### SEO
```html
<html lang="{content.lang}">
<link rel="alternate" hreflang="en" href="https://solobond.app/" />
<link rel="alternate" hreflang="de" href="https://solobond.app/de/" />
```

---

## Designprinzipien

### Ästhetik: "Golden Hour Editorial"
Warm, ruhig, selbstbewusst. Lifestyle-Magazin, NICHT SaaS-Template.

### Farbpalette (VERBINDLICH)

| Token | Hex | Verwendung |
|-------|-----|------------|
| `--color-primary` | `#F0E6D8` | Haupthintergrund, Warm Beige |
| `--color-accent` | `#E8785C` | CTAs, Highlights, Korall-Rot |
| `--color-accent-hover` | `#D4654A` | Hover-State für Accent |
| `--color-text-dark` | `#2A2A2A` | Haupttext |
| `--color-text-muted` | `#6B6B6B` | Sekundärtext, Captions |
| `--color-bg-white` | `#FEFCF9` | Warmes Weiß für helle Sections |
| `--color-bg-dark` | `#1E1E1E` | Dunkle Section (Trusted Contact) |
| `--color-success` | `#7CB97A` | Check-in-Grün (aus App) |
| `--color-sage` | `#9BAF8E` | Sage-Grün (Check-in Button in App) |

**⚠️ NICHT verwenden:** `#E8A85C` (veraltet). NUR `#E8785C` als Akzentfarbe.

### Logo
- **`logo-full.png`** — Zwei ineinandergreifende Ringe (orange/gold) + "SoloBond" Schriftzug → Header auf hellem Hintergrund
- **`logo-icon.png`** — Nur die zwei Ringe, transparenter Hintergrund → Favicon, OG-Image, dunkle Hintergründe, Footer
- Logo-Farben (Orange-Gradient → Gold) sind Brand Identity, NICHT verändern

### Typografie

| Rolle | Font | Weight |
|-------|------|--------|
| Headlines / Display | Plus Jakarta Sans | 700, 800 |
| Body / UI | DM Sans | 400, 500 |
| Fallback | system-ui, sans-serif | — |

---

## STOP-Regeln (NIEMALS machen)

- ❌ KEINE Testimonials (keine Nutzer vorhanden)
- ❌ KEINE Social-Proof-Zahlen
- ❌ KEINE generischen SaaS-Patterns (Feature-Grids mit blauen Icons)
- ❌ KEIN AI-Framing ("powered by AI")
- ❌ KEIN Three.js oder schwere JS-Libraries
- ❌ KEIN Tailwind CSS
- ❌ KEIN AOS.js, Animate.css
- ❌ KEINE Stock-Fotos (nur bereitgestellte Assets)
- ❌ KEINE Cookie-Banner (statisch, kein Tracking)
- ❌ KEIN Chat-Widget, KEINE Pop-ups
- ❌ KEIN Hamburger-Menü
- ❌ KEINE Emojis im Interface-Text
- ❌ KEIN lila/blau-Gradient
- ❌ KEINE Inter, Roboto oder Arial
- ❌ KEINE Dummy-Texte oder Lorem Ipsum
- ❌ KEINE Flaggen-Icons für Sprachumschalter

---

## Assets (bereits am richtigen Platz)

### `src/assets/images/`

| Datei | Inhalt | Verwendung |
|-------|--------|------------|
| `logo-full.png` | Logo + Schriftzug | Header |
| `logo-icon.png` | Nur Ringe, transparent | Favicon, OG, Footer |
| `hero-woman-rooftop.png` | Frau auf Rooftop, Sonnenuntergang | Hero-Section Visual |
| `screenshot-checkin.png` | App: "tap to CHECK-IN", Streak 14 | How-It-Works Step 1 |
| `screenshot-done.png` | App: Grüner Haken, Day Colors, Streak 15 | How-It-Works Step 2 |
| `screenshot-contact.png` | App: Dashboard Dark Mode | How-It-Works Step 3 |

### `src/assets/videos/`

| Datei | Verwendung |
|-------|------------|
| `checkin-flow.mp4` | Video-Mockup (Desktop only) |
| `app-demo.mp4` | Optional zweites Video |

### Bild-Optimierung
- PNGs → WebP (mit Fallback), Hero: `rel="preload"`, Rest: `loading="lazy"`
- Videos: H.264, max 720p, autoplay/muted/loop, nur Desktop

---

## Seitenstruktur & Dramaturgie

### Emotionale Reise des Besuchers
Die Seite erzählt eine Geschichte. Der Besucher soll diesen Bogen durchlaufen:
**Aufmerksamkeit → Identifikation → Verstehen → Vertrauen → Handeln**

### FEST: Oben — HERO (immer erste Section)
- **Content:** `content.hero.headline` + `content.hero.subline`
- **CTA:** Apple App Store Badge (Platzhalter `href="#"`) + `content.hero.comingSoon`
- **Visual:** 3D iPhone Mockup mit `screenshot-checkin.png` + Hero-Bild (Frau auf Rooftop)
- **Animation:** Floating Mockup, Glow-Pulse auf CTA
- **Ziel:** Aufmerksamkeit. In 3 Sekunden muss klar sein was SoloBond ist.

### FREI: Mittelteil — 5 Sections (Reihenfolge ist Agenten-Entscheidung)

Ordne diese 5 Sections so an, dass die emotionale Dramaturgie (Identifikation → Verstehen → Vertrauen) optimal funktioniert. Auch die Hintergrundfarben-Abfolge (Hell/Dunkel/Hell) sollte visuell stimmig sein.

**THE PROBLEM (Emotional Hook)**
- **Content:** `content.problem.headline` + `content.problem.body`
- **Charakter:** Text-zentriert, kein Bild, poetisch. "Would anyone notice?"
- **Ziel:** Identifikation. Der Besucher erkennt sich wieder.

**HOW IT WORKS (3 Steps)**
- **Content:** `content.howItWorks.headline` + 3 Steps
- **Visuals:** 3D iPhone Mockups — Step 1 → `screenshot-checkin.png`, Step 2 → `screenshot-done.png`, Step 3 → `screenshot-contact.png`
- **Video-Option:** `checkin-flow.mp4` bei Step 1 (Desktop only)
- **Ziel:** Verstehen. So einfach ist es — 3 Sekunden, fertig.

**FOR YOUR TRUSTED CONTACT**
- **Content:** `content.trustedContact`
- **Visual:** 3D Mockup mit `screenshot-contact.png` (Dark Mode Dashboard)
- **Empfehlung:** Dunkler Hintergrund (#1E1E1E) passt gut zu diesem Dark-Mode-Screenshot
- **Ziel:** Verstehen. Die andere Seite der Verbindung zeigen.

**FREE & PREMIUM**
- **Content:** `content.pricing.headline` + `content.pricing.body` + `content.pricing.premiumHint`
- **Kern-Botschaft:** Die App ist kostenlos. Premium kommt später (z.B. SMS-Alerts).
- **Visuell:** Kein Pricing-Table, kein Feature-Grid. Eleganter, kompakter Abschnitt.
- **Ziel:** Vertrauen. Keine versteckten Kosten.

**PRIVACY**
- **Content:** `content.privacy`
- **Visuell:** Minimalistisch, optional subtiles Lock/Shield-Icon
- **Ziel:** Vertrauen. Kein Tracking, keine Daten, keine Werbung.

**FAQ**
- **Content:** `content.faq.headline` + `content.faq.items[]` (7 Einträge)
- **Layout:** Akkordeon (klickbare Fragen → Antwort klappt auf/zu)
- **Tech:** `<details><summary>` oder Vanilla JS
- **Ziel:** Restliche Zweifel ausräumen.

### FEST: Unten — FINAL CTA + FOOTER (immer letzte Section)
- **CTA:** `content.cta.headline` + App Store Badge + Coming-Soon-Text
- **Footer-Links:**
  - `content.footer.privacyPolicy` → `href="/privacy"` (EN) bzw. `href="/de/privacy"` (DE)
  - `content.footer.legalTerms` → `href="/legal"` (EN) bzw. `href="/de/legal"` (DE)
  - Copyright
- **Animation:** CTA Glow-Pulse
- **Ziel:** Handeln. Der letzte Impuls zum Download (bzw. Waitlist).

---

## Platzhalter-Seiten

Erstelle minimale Seiten damit Links nicht ins Leere gehen:

| Route | Inhalt |
|-------|--------|
| `/privacy` | "Our Privacy Policy is being finalized and will be published here before launch." |
| `/legal` | "Our Legal Terms are being finalized and will be published here before launch." |
| `/de/privacy` | "Unsere Datenschutzerklärung wird derzeit finalisiert und vor dem Launch hier veröffentlicht." |
| `/de/legal` | "Unser Impressum und unsere AGB werden derzeit finalisiert und vor dem Launch hier veröffentlicht." |

Alle Platzhalter-Seiten nutzen `BaseLayout.astro` mit Header und Footer.

---

## 3D iPhone Mockup — `IPhoneMockup.astro`

Wiederverwendbar. Props: `src`, `alt`, `type`, `rotation`, `size`, `floating`.
Kern: CSS `perspective` + `rotateY/X` + `border-radius: 44px` + Dynamic Island.
Detaillierte Werte und Hover-Effekte: **Agenten-Entscheidung.**

---

## Animations-Übersicht

| Animation | Wo | Vorgabe |
|-----------|-----|---------|
| Scroll Fade-in | Alle Sections | Intersection Observer, `prefers-reduced-motion` respektieren |
| Parallax | Mockups, Deko | Nur Desktop, max 50px |
| Floating | Hero-Mockup | Sanftes Auf/Ab |
| Glow-Pulse | CTA-Buttons | Accent-Farbe |
| Akkordeon | FAQ | Sanftes Auf-/Zuklappen |

Timing, Easing, Stagger-Delays, zusätzliche Micro-Interactions: **Agenten-Entscheidung.**

---

## App Store Button

- Offizielles Apple Badge SVG → `public/badges/app-store-badge.svg`
- `href="#"` — Platzhalter
- Falls Datei fehlt: Agent erstellt SVG im Apple-Stil

---

## Projektstruktur

```
SoloBond_Website_Final/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── netlify.toml
├── CLAUDE.md
├── public/
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── og-image.png
│   ├── badges/
│   │   └── app-store-badge.svg
│   └── images/
│       ├── logo-icon.png                  ✅
│       └── logo-full.png                  ✅
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo-full.png              ✅
│   │   │   ├── logo-icon.png              ✅
│   │   │   ├── hero-woman-rooftop.png     ✅
│   │   │   ├── screenshot-checkin.png     ✅
│   │   │   ├── screenshot-done.png        ✅
│   │   │   └── screenshot-contact.png     ✅
│   │   └── videos/
│   │       ├── checkin-flow.mp4           ✅
│   │       └── app-demo.mp4              ✅
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   ├── ProblemSection.astro
│   │   ├── HowItWorksSection.astro
│   │   ├── TrustedContactSection.astro
│   │   ├── PricingSection.astro
│   │   ├── PrivacySection.astro
│   │   ├── FaqSection.astro
│   │   ├── CtaSection.astro
│   │   ├── IPhoneMockup.astro
│   │   ├── AppStoreButton.astro
│   │   ├── LanguageSwitch.astro
│   │   └── ScrollReveal.astro
│   ├── content/
│   │   ├── en.json                        ✅
│   │   └── de.json                        ✅
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── privacy.astro
│   │   ├── legal.astro
│   │   └── de/
│   │       ├── index.astro
│   │       ├── privacy.astro
│   │       └── legal.astro
│   └── styles/
│       ├── global.css
│       ├── animations.css
│       ├── typography.css
│       └── mockup.css
```

---

## netlify.toml

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/de"
  to = "/de/"
  status = 301

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

## Workflow-Phasen

### Phase 1: Setup & Design System
1. Astro init, CSS Custom Properties, Fonts, BaseLayout, Header, Footer
2. Legal-Platzhalter-Seiten (EN + DE)
3. `netlify.toml`
→ **🔴 CHECKPOINT**

### Phase 2: Komponenten
1. Reusable Components (Mockup, Badge, ScrollReveal, LanguageSwitch)
2. Alle 7 Sections + FAQ Akkordeon + Pricing
3. EN + DE Pages
→ **🔴 CHECKPOINT**

### Phase 3: Animationen & Polish
→ Agenten-Autonomie bei Details

### Phase 4: QA & Deploy
→ **🔴 CHECKPOINT: Live-Seite**

---

## Performance-Ziele

| Metrik | Ziel |
|--------|------|
| Lighthouse Performance | > 95 |
| Lighthouse Accessibility | > 95 |
| Lighthouse SEO | > 95 |
| FCP | < 1.5s |
| CLS | 0 |
| JS Bundle | < 50 KB |
