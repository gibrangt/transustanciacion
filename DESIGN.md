---
name: La Transustanciación en los Padres de la Iglesia
description: Sitio apologético que examina el debate Urbina vs. Pacheco sobre la evidencia patrística de la transustanciación
colors:
  ancient-parchment: "#F7F5F0"
  parchment-deep: "#EFEBE2"
  ecclesial-navy: "#1B4F8A"
  ecclesial-navy-light: "#E8EFF8"
  ecclesial-navy-deep: "#163F6E"
  argument-crimson: "#7A2E2E"
  argument-crimson-light: "#F5EAEA"
  argument-crimson-deep: "#5F2222"
  gospel-gold: "#C4922A"
  gospel-gold-deep: "#A4781D"
  manuscript-ink: "#1A1814"
  muted-ink: "#6B6560"
  margin-rule: "#DAD3C6"
  surface-white: "#ffffff"
typography:
  display:
    fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.49rem, 1.74rem + 3.75vw, 5.6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Fraunces', Georgia, serif"
    fontSize: "clamp(2.07rem, 1.6rem + 2.35vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Fraunces', Georgia, serif"
    fontSize: "clamp(1.44rem, 1.25rem + 0.95vw, 2.1rem)"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "'Spectral', Georgia, serif"
    fontSize: "clamp(1rem, 0.93rem + 0.34vw, 1.19rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'IBM Plex Mono', ui-monospace, monospace"
    fontSize: "clamp(0.83rem, 0.78rem + 0.22vw, 0.94rem)"
    fontWeight: 500
    letterSpacing: "0.22em"
rounded:
  sm: "4px"
  lg: "10px"
  circle: "50%"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.75rem"
  lg: "3rem"
  xl: "5rem"
  "2xl": "8rem"
components:
  tile-urbina:
    backgroundColor: "{colors.ecclesial-navy-light}"
    textColor: "{colors.ecclesial-navy}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm}"
  tile-urbina-hover:
    backgroundColor: "#ffffff"
  tile-pacheco:
    backgroundColor: "{colors.argument-crimson-light}"
    textColor: "{colors.argument-crimson}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm}"
  tile-active:
    backgroundColor: "rgba(196, 146, 42, 0.12)"
    textColor: "{colors.gospel-gold}"
  prose-card:
    backgroundColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  panel-urbina:
    backgroundColor: "{colors.ecclesial-navy-light}"
    rounded: "{rounded.lg}"
  panel-pacheco:
    backgroundColor: "{colors.argument-crimson-light}"
    rounded: "{rounded.lg}"
  conclusion-item:
    backgroundColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
---

# Design System: La Transustanciación en los Padres de la Iglesia

## 1. Overview

**Creative North Star: "The Patristic Witness"**

The design is a courtroom, not a chapel. Two debaters — one Catholic, one Evangelical — are cross-examined by two thousand years of documented testimony. Every typographic and color decision carries rhetorical weight: what is large asserts; what is restrained defers; what is gold concludes. The interface is itself an argument.

Ancient Parchment (#F7F5F0) sets the ground: a warm, slightly textural page that reads as physical, not digital. On this ground, two competing palettes face each other — Ecclesial Navy for the Catholic position, Argument Crimson for the Evangelical challenge — organized by a single theological color law: blue argues forward, crimson argues back, and neither carries the final word. That belongs to Gospel Gold (#C4922A), which appears only at threshold moments: cited sources, stated conclusions, active selections. Its rarity is the argument.

Typography is the primary carrier. Fraunces (optical serif, variable weight) handles display and structure; Spectral (designed for long-form on-screen reading) carries the body text; IBM Plex Mono voices the scholarly apparatus — labels, kickers, citations, source references. This three-voice system encodes three editorial registers: the claim, the evidence, and the footnote. No decorative imagery replaces this. The page IS the design.

**Key Characteristics:**
- Two-color dialectic (Navy vs. Crimson) that visually encodes the debate at every interactive level
- Gospel Gold reserved for threshold moments: conclusions, citations, active `:target` tiles — its rarity is rhetorical
- Ancient Parchment ground treated as a manuscript page, not a software screen
- Fraunces italic carries theological weight; Fraunces upright carries structural frame
- IBM Plex Mono voices the scholarly apparatus: citations, labels, kickers, cross-references
- Elevation responds to attention: surfaces lift only when the reader engages them
- Pure HTML+CSS interactivity: `:target` for argument/objection panels, `<details>` for collapsible content


## 2. Colors: The Doctrinal Palette

A four-role palette organized by theological function, not aesthetics. Each color names a party in the dispute.

### Primary
- **Ecclesial Navy** (#1B4F8A): The Catholic position (Dr. Urbina). Tile backgrounds, panel headers, interactive elements, typographic emphasis within the Catholic argument. Never used for negative or error states.
- **Gospel Gold** (#C4922A): The threshold color. Accent underlines, active `:target` tile borders, source links, conclusion highlights, the hero thesis statement, and the cross symbol in the navigation mark. Prohibited in large surface areas; its rarity is the point.
- **Gospel Gold Deep** (#A4781D): Gold at hover and in high-contrast label contexts where full gold reads too light against parchment.

### Secondary
- **Argument Crimson** (#7A2E2E): The Evangelical challenge (Mr. Pacheco). Structurally parallel to Ecclesial Navy — same tile pattern, same panel pattern — but visually coded as the opposing voice. Never used for affirmative, success, or primary-action states.

### Tertiary
- **Ecclesial Navy Deep** (#163F6E): Conclusion text, strong emphasis within Catholic-coded panels, body copy that needs more authority than full Navy.
- **Argument Crimson Deep** (#5F2222): Body text within Pacheco-coded panels only.

### Neutral
- **Ancient Parchment** (#F7F5F0): The page. Fixed body background, enhanced at the hero by a radial gold gradient overlay.
- **Parchment Deep** (#EFEBE2): Alternating section background (Conflictos, footer). Creates vertical rhythm without hue contrast.
- **Manuscript Ink** (#1A1814): Primary text. Near-black with a warm undertone — not pure black, not cool gray. The distinction is legible at small sizes.
- **Muted Ink** (#6B6560): Secondary text, section leads, timestamps, metadata. Warm gray-brown; not neutral.
- **Margin Rule** (#DAD3C6): All borders and dividers. Reads as a printed rule, not a UI separator.
- **Surface White** (#ffffff): Pure white for card and panel surfaces — Prose Cards, detail panels, conclusion accordion items, and video group cards. The lift between white surfaces and the Ancient Parchment ground is the primary depth signal on the page.

### Named Rules

**The Doctrinal Color Rule.** Ecclesial Navy belongs to the Catholic position; Argument Crimson belongs to the Evangelical challenge. Never invert these roles. Crimson must never signal correctness, approval, or primary action. Navy must never signal objection, challenge, or opposition.

**The Gospel Gold Rule.** Gold appears only at threshold moments: a citation referenced, a conclusion reached, an argument selected. Its share of any given screen must stay below 10%. More than that turns accent into noise and ruins the hierarchy.


## 3. Typography: Three Scholarly Voices

**Display Font:** Fraunces (optical size axis 9–144, italic variants included), Georgia, Times New Roman, serif
**Body Font:** Spectral (ital, wght 400–600), Georgia, serif
**Label/Mono Font:** IBM Plex Mono (wght 400–600), ui-monospace, monospace

**Character:** Fraunces is the argumentation font — its variable optical axis shifts letter forms from intimate (body context) to commanding (hero display) without losing coherence. Spectral, designed specifically for screen reading at paragraph lengths, handles continuous evidence and reasoning. IBM Plex Mono provides the scholarly apparatus: the footnote voice, the citation tack, the label imprint.

### Hierarchy

- **Display** (wt 600, `clamp(2.49rem → 5.6rem)`, lh 1.02, ls –0.01em): Hero title only. One per page. At its minimum size it still commands.
- **Headline** (wt 600, `clamp(2.07rem → 4rem)`, lh 1.08, ls –0.01em): Section heads and detail panel ordinals (the large italic numbers at opacity 0.35, used as structural weight not as content).
- **Title** (wt 600, `clamp(1.44rem → 2.1rem)`, lh 1.2): Panel headings, conflict titles, conclusion accordion summaries.
- **Body** (wt 400, `clamp(1rem → 1.19rem)`, lh 1.65): Primary reading text. Line length capped at 65–75ch via `max-width: var(--container-narrow)` on all prose containers.
- **Label** (wt 500, `clamp(0.83rem → 0.94rem)`, ls 0.22em, UPPERCASE): Section kickers, debater banners (POSTURA CATÓLICA / POSTURA EVANGÉLICA), source citations, panel sub-headings. Always IBM Plex Mono.

### Named Rules

**The Fraunces Italic Rule.** Fraunces italic carries the theological claim — the word being argued about, the debater's name, the emphatic phrase. Fraunces upright carries the structural container: the section head, the panel heading, the ordinal number. If a word needs to feel like it *means* something, it goes italic. If it needs to feel like it *organizes* something, it goes upright.

**The Mono Apparatus Rule.** IBM Plex Mono speaks in the scholarly third person. It never leads; it annotates. Use it for: section kickers, debater labels, source links, date/meta fields, panel close buttons, navigation links. Never for paragraph text or any headline that carries an argument.


## 4. Elevation

This system uses **tonal layering as the primary depth signal** and shadows as a secondary, attention-responsive overlay. Surfaces are flat at rest. Elevation is not decorative; it indicates that a surface has responded to the reader's attention.

Two shadow levels are defined. Neither is decorative; both are state signals:

### Shadow Vocabulary
- **Soft** (`0 1px 2px rgba(26,24,20,0.04), 0 8px 24px -12px rgba(26,24,20,0.18)`): Ambient, default state for cards, tiles, and panels. Barely visible in isolation; perceptible against other surfaces. Cards without this shadow feel detached from the page.
- **Lift** (`0 2px 4px rgba(26,24,20,0.06), 0 20px 48px -20px rgba(26,24,20,0.28)`): Hover and active states, `:target` panels. Clearly elevated. Applied via `transition: box-shadow 0.4s ease` for a smooth response to attention.

Depth is also communicated through background tint: Prose Cards use white (#fff) against the Parchment body; the Objeciones section uses Argument Crimson Light as its full background to lift the entire section into the Pacheco register.

### Named Rules

**The Reader's Focus Rule.** The `:target` detail panel is always the highest-elevation surface visible on screen. Nothing else should match or exceed its shadow weight. Two competing Lift-shadow surfaces break this hierarchy.

**The Flat-By-Default Rule.** Sections at the page level are flat. Only interactive leaves — tiles, cards, thumbnails — carry ambient shadows. Section backgrounds are tonal, not shadowed.


## 5. Components

Components feel like printed and stamped artifacts, not rendered UI elements. Borders are typographic rules; color zones encode debater identity; interactions are responses to reader attention.

### Argument / Objection Tiles (`.arg-tile`)

The primary interactive primitive. A compact clickable tile that activates a full-width detail panel via CSS `:target`. Two variants: Urbina (navy) and Pacheco (crimson).

- **Shape:** 10px radius; 4px left-edge accent stroke in debater color at default state
- **Background:** Gradient from white to the debater's light tint (`linear-gradient(160deg, #fff, --light-tint)`)
- **Typography:** Fraunces italic ordinal in debater color, Spectral semibold keyword
- **Hover:** `translateY(-3px)`, shadow Soft → Lift, full border in debater color
- **Active (`:target`):** Left-edge transitions to Gospel Gold; background shifts to a gold tint
- **Focus visible:** 2px Gospel Gold outline, offset 2px
- **Reduced motion:** All transforms disabled; only color state changes remain

### Prose Cards (`.prose-card`)

Informational cards for the Contexto section. White surface on the Parchment ground.

- **Shape:** 10px radius, 1px Margin Rule border, Soft shadow
- **Icon:** 3rem circle in Parchment Deep, Gospel Gold icon (Tabler Icons)
- **Hover:** `translateY(-4px)`, shadow → Lift, `transition: 0.4s cubic-bezier(0.22,1,0.36,1)`

### Debate Face Cards (`.cara`)

Used in the Conflictos section to display each debater's position side by side.

- **Shape:** 4px radius, top 3px border in debater color
- **Background:** Debater light tint
- **Label:** Mono uppercase in debater color + 36px avatar with ring
- **Layout:** Always 2-column grid (1-column on mobile); always paired, never shown alone

### Detail Panels (`.detalle`)

Full-width content panels triggered by `:target`. The highest-elevation surface on screen when active.

- **Visibility:** `display: none` by default; `display: block` when `:target`
- **Shape:** 10px radius, 1px Margin Rule border, Lift shadow
- **Header:** 4px left accent in debater color + gradient tint; italic ordinal at opacity 0.35
- **Background:** Vertical gradient from white (top) to debater light tint (bottom)
- **Close:** Mono uppercase, 1px Margin Rule border; debater-color text; top-right and bottom-right

### Navigation (`.site-nav`)

Fixed top bar with the single authorized blur effect in the system.

- **Background:** Ancient Parchment at 82% opacity + `backdrop-filter: blur(12px)`
- **Border:** Transparent at top; transitions to 1px Margin Rule on `.site-nav--scrolled`
- **Brand mark:** Gospel Gold cross (✛) + Fraunces title
- **Links:** IBM Plex Mono, Muted Ink at rest; Manuscript Ink on hover; gold underline `scaleX(0→1)`
- **Mobile:** CSS-only hamburger (`<input type="checkbox">` + `<label>`); menu slides from top via `translateY`

### Conclusion Items (`.conclusion-item`)

`<details>`/`<summary>` accordion. Gospel Gold throughout.

- **Shape:** 10px radius, 1px Margin Rule border, 4px left Gospel Gold stroke, Soft shadow
- **Open state:** Shadow → Lift; chevron rotates 180°
- **Summary:** Fraunces italic ordinal in Gospel Gold; title in Ecclesial Navy Deep; chevron in Gospel Gold
- **Body:** Spectral body, bullet list with `▸` marker in Gospel Gold

### Duelo (Signature Component — `.duelo`)

The hero centerpiece: a three-column card (Urbina | vs | Pacheco) presenting both debaters face to face. The visual thesis statement of the site.

- **Layout:** `grid-template-columns: 1fr auto 1fr`; center column = "vs" separator
- **Left column:** Ecclesial Navy Light background, Navy debater label
- **Right column:** Argument Crimson Light background, Crimson debater label
- **Center:** Parchment background, Fraunces italic "vs" in Gospel Gold, Margin Rule borders on both sides
- **Avatar:** 110px portrait, 3px/5px ring system (bg-color gap + debater-color outer ring)
- **Mobile:** Stacks vertically; border directions switch from inline to block


## 6. Do's and Don'ts

### Do:
- **Do** color-code every component by debater: Ecclesial Navy for the Catholic position, Argument Crimson for the Evangelical challenge — without exception.
- **Do** reserve Gospel Gold for threshold moments: cited sources, conclusions, active `:target` tiles, and the hero thesis statement. Treat its scarcity as rhetorical.
- **Do** present the Pacheco (Evangelical) arguments with identical structural dignity to the Urbina arguments — same tile pattern, same panel pattern, same typographic hierarchy. The site's credibility depends on this symmetry.
- **Do** use IBM Plex Mono exclusively for the scholarly apparatus: kickers, labels, source citations, panel sub-headings, navigation links. Never for paragraph text.
- **Do** cap body copy at 65–75ch using `max-width: var(--container-narrow)` on all prose containers.
- **Do** respect `prefers-reduced-motion`: every `transform` and `animation` must have a `@media (prefers-reduced-motion: reduce)` alternative. Interactivity survives as color-state changes when motion is off.

### Don't:
- **Don't** use stock-photo crosses, clip-art Catholic iconography, or gold filigree ornamental borders. These collapse the design into the generic Catholic parish aesthetic this site is explicitly positioned against.
- **Don't** use gradient text (`background-clip: text` combined with a gradient background). Use a single solid color; emphasis comes from weight and size.
- **Don't** use glassmorphism decoratively. The navigation's `backdrop-filter: blur(12px)` is the single authorized instance. No other surface blurs.
- **Don't** apply Argument Crimson to affirmative, success, or primary-action UI states. Crimson encodes challenge and opposition. Misuse inverts the Doctrinal Color Rule.
- **Don't** use the hero-metric template (large number, small label, gradient accent, stat row). It belongs to the SaaS register, not the scholarly apologetic register.
- **Don't** extend the `border-left: 4px solid` stripe pattern to new components. The current instances are established identity; new components should use full borders, background tints, or numbered markers as depth signals instead.
- **Don't** build new card grids with identical structure (same icon circle + heading + text block repeated). Vary the affordance by content type.
- **Don't** use Argument Crimson Deep as typographic emphasis outside Pacheco-coded panels. In a Navy context it reads as an error state, not a heading.
