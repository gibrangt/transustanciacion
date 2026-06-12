# Videos del Debate — Implementation Plan

> **For agentic workers:** RECOMMENDED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a new Section 7 (Videos del Debate) to the site with a featured debate video and three collapsible groups (Urbina, Pacheco, Terceros) showing YouTube thumbnails that link directly to YouTube.

**Architecture:** The section is pure HTML + CSS (no JavaScript). All content is static in `index.html`. Collapses are handled by native `<details>/<summary>` HTML elements.

**Tech Stack:** HTML5 semantic, CSS3 custom properties

---

## File Structure

**Files to Create:**
- `css/videos.css` — All styles for the videos section

**Files to Modify:**
- `index.html` — Add `#videos` link in nav, insert section HTML
- `css/main.css` — Add `--color-terceros` variable
- `CLAUDE.md` — Document that the site is now HTML + CSS only (no JS)

---

## Task 1: Update CLAUDE.md

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Update stack section**

Find the "## Stack" section and replace "JavaScript ES6+ vanilla (sin React, Vue, ni jQuery)" with "Sin JavaScript (HTML + CSS puro)"

Also update the line "CDN: Google Fonts, Tabler Icons, GSAP (scrollytelling)" to just "CDN: Google Fonts, Tabler Icons"

- [ ] **Step 2: Update file structure**

Remove references to `js/` directory. The structure should only have:
```
├── index.html
├── css/
│   ├── main.css
│   ├── debate.css
│   └── videos.css
└── assets/
```

- [ ] **Step 3: Update secciones section**

Replace the old "### 6. Fuentes y recursos" with:
```
### 6. Conclusión
- Síntesis de por qué los argumentos de Urbina prevalecen
- Tarjetas colapsables con argumentos clave

### 7. Videos del Debate
- Video principal del debate (protagonista)
- Tres grupos colapsables: Respuestas de Urbina, Pacheco, Terceros
- Miniaturas YouTube con links directos
```

- [ ] **Step 4: Replace Scrollytelling and data.js sections**

Remove the "## Scrollytelling" and "## Estructura de data.js" sections.

Replace with:

```markdown
## Interactividad (sin JavaScript)

Toda la interactividad es CSS puro usando:
- `<details>/<summary>` para colapsables (conclusión, videos)
- Hover effects y transiciones CSS
- Media queries para responsividad
```

- [ ] **Step 5: Update SEO section**

Replace the entire "## SEO: Generación de HTML estático desde data.js" section with:

```markdown
## SEO: Todo es HTML estático

Todas las secciones son HTML estático puro en `index.html`. No hay generación dinámica ni inyección de contenido. Buscadores ven el 100% del contenido sin necesidad de ejecutar JavaScript.
```

- [ ] **Step 6: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md — HTML + CSS only, no JavaScript"
```

---

## Task 2: Add --color-terceros Variable to main.css

**Files:**
- Modify: `css/main.css` (in the `:root` section)

- [ ] **Step 1: Open main.css and locate the :root color variables**

Find the section that looks like:
```css
:root {
  --color-bg: #F7F5F0;
  --color-urbina: #1B4F8A;
  --color-pacheco: #7A2E2E;
  /* ... other colors ... */
  --color-pacheco-deep: #5F2222;
}
```

- [ ] **Step 2: Add the --color-terceros variable**

After `--color-pacheco-deep: #5F2222;`, add:

```css
--color-terceros: #6B6560;  /* gris neutro para terceros */
```

- [ ] **Step 3: Verify the variable is added**

```bash
grep "color-terceros" css/main.css
```

Expected: Output shows `--color-terceros: #6B6560;`

- [ ] **Step 4: Commit**

```bash
git add css/main.css
git commit -m "refactor: add --color-terceros variable for video groups"
```

---

## Task 3: Create css/videos.css with All Styles

**Files:**
- Create: `css/videos.css`

- [ ] **Step 1: Create the file with the complete CSS**

Create `css/videos.css` with the following content:

```css
/* ============================================================================
   videos.css — Estilos para la sección 7: Videos del Debate
   ========================================================================== */

.videos-section {
  padding: var(--space-lg) 0;
  background: var(--color-bg);
  border-top: 1px solid var(--color-line);
}

.videos-section > .container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.videos-section h2 {
  font-family: var(--font-display);
  font-size: var(--step-3);
  color: var(--color-text);
  margin-bottom: var(--space-sm);
  font-weight: 600;
}

.videos-section .kicker {
  color: var(--color-text-muted);
  margin-bottom: var(--space-lg);
}

/* ── Video del Debate (Protagonista) ── */
.video-debate {
  max-width: var(--container-narrow);
  margin: 0 auto var(--space-2xl);
  text-align: center;
}

.video-debate .video-thumbnail-link {
  display: block;
  margin-bottom: var(--space-md);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  transition: all 0.3s ease;
}

.video-debate .video-thumbnail-link:hover {
  box-shadow: var(--shadow-lift);
  transform: scale(1.02);
}

.video-debate .video-thumbnail {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.video-debate .video-title {
  font-family: var(--font-display);
  font-size: var(--step-2);
  color: var(--color-text);
  font-weight: 600;
  line-height: 1.3;
}

/* ── Grupos Colapsables ── */
.video-groups {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.video-group {
  border: 1px solid var(--color-line);
  border-radius: var(--radius-lg);
  padding: var(--space-md);
  background: white;
}

.video-group__header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  cursor: pointer;
  font-family: var(--font-display);
  font-size: var(--step-1);
  font-weight: 600;
  padding: var(--space-sm) 0;
  border-bottom: 2px solid currentColor;
  user-select: none;
  transition: all 0.2s ease;
  list-style: none;
}

.video-group__header:hover {
  opacity: 0.8;
}

/* Color-coding por grupo */
.video-group--urbina .video-group__header {
  color: var(--color-urbina);
  border-color: var(--color-urbina-light);
}

.video-group--pacheco .video-group__header {
  color: var(--color-pacheco);
  border-color: var(--color-pacheco-light);
}

.video-group--terceros .video-group__header {
  color: var(--color-terceros);
}

.video-group__icon {
  display: inline-block;
  transition: transform 0.3s ease;
  font-size: 0.9em;
  flex-shrink: 0;
}

/* Rotación del icono en open/closed state */
details[open] .video-group__icon {
  transform: rotate(0deg);
}

details:not([open]) .video-group__icon {
  transform: rotate(-90deg);
}

/* Animación de contenido al abrir */
.video-grid {
  padding-top: var(--space-md);
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 9999px;
  }
}

/* ── Grid de Miniaturas ── */
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-md);
}

/* Responsive: 3 cols → 2 → 1 */
@media (min-width: 900px) {
  .video-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 600px) and (max-width: 900px) {
  .video-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .video-grid {
    grid-template-columns: 1fr;
  }
}

/* ── Miniatura Individual ── */
.video-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.video-item .video-thumbnail-link {
  display: block;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  transition: all 0.3s ease;
  text-decoration: none;
}

.video-item .video-thumbnail-link:hover {
  box-shadow: var(--shadow-lift);
  transform: scale(1.02);
}

.video-item .video-thumbnail {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.video-item__title {
  font-family: var(--font-body);
  font-size: var(--step-0);
  color: var(--color-text-muted);
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.video-item:hover .video-item__title {
  color: var(--color-text);
}

/* Accesibilidad: respeto a prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .video-debate .video-thumbnail-link,
  .video-item .video-thumbnail-link,
  .video-group__header,
  .video-group__icon {
    transition: none;
  }

  .video-grid {
    animation: none;
  }
}
```

- [ ] **Step 2: Verify the file was created**

```bash
ls -la css/videos.css && wc -l css/videos.css
```

Expected: File exists with ~180+ lines.

- [ ] **Step 3: Link the stylesheet in index.html**

In `index.html`, find the `<head>` section where other stylesheets are linked (after `css/debate.css` or similar), and add:

```html
<link rel="stylesheet" href="css/videos.css" />
```

Expected location (after other CSS):
```html
<link rel="stylesheet" href="css/main.css" />
<link rel="stylesheet" href="css/debate.css" />
<link rel="stylesheet" href="css/videos.css" />
```

- [ ] **Step 4: Verify the link was added**

```bash
grep "videos.css" index.html
```

Expected: Output shows the link tag.

- [ ] **Step 5: Commit**

```bash
git add css/videos.css index.html
git commit -m "feat: add videos section CSS with responsive grids and collapsible groups"
```

---

## Task 4: Add #videos Link to Navigation Menu

**Files:**
- Modify: `index.html` (in the `<nav class="site-nav__links">` section)

- [ ] **Step 1: Find the navigation links in index.html**

Search for `<nav class="site-nav__links">` and locate the last `<a>` tag (should be "Conclusión").

- [ ] **Step 2: Add the #videos link**

After the last navigation link, add:

```html
<a href="#videos">Videos</a>
```

The nav should now look like:

```html
<nav class="site-nav__links" aria-label="Secciones del sitio">
  <a href="#contexto">Contexto</a>
  <a href="#conflictos">Conflictos</a>
  <a href="#argumentos">Argumentos</a>
  <a href="#objeciones">Objeciones</a>
  <a href="#conclusion">Conclusión</a>
  <a href="#videos">Videos</a>
</nav>
```

- [ ] **Step 3: Verify the link was added**

```bash
grep -A 7 'site-nav__links' index.html | grep 'videos'
```

Expected: Output shows `<a href="#videos">Videos</a>`

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add Videos link to navigation menu"
```

---

## Task 5: Add Videos Section HTML to index.html

**Files:**
- Modify: `index.html` (after the Conclusión section, before closing `</main>`)

- [ ] **Step 1: Find the Conclusión section in index.html**

Search for `<section class="conclusion"` or `id="conclusion"` or `id="conclusion"`.

- [ ] **Step 2: Add the Videos section HTML after Conclusión**

After the closing `</section>` of Conclusión, insert:

```html
<!-- ╔══════════════════════════════════════════════════════════╗ -->
<!-- ║ 7 · VIDEOS DEL DEBATE                                     ║ -->
<!-- ╚══════════════════════════════════════════════════════════╝ -->
<section id="videos" class="videos-section">
  <div class="container">
    <h2>Videos del Debate</h2>
    <p class="kicker">Mira el debate completo y las respuestas posteriores</p>

    <!-- Video del debate (protagonista) -->
    <div class="video-debate">
      <a href="https://www.youtube.com/watch?v=UzCqErTu0WE" target="_blank" rel="noopener noreferrer" class="video-thumbnail-link">
        <img src="https://img.youtube.com/vi/UzCqErTu0WE/maxresdefault.jpg" alt="Dr. Urbina vs Sr. Pacheco: Transubstanciación en los Padres" class="video-thumbnail" />
      </a>
      <h3 class="video-title">Dr. Urbina vs Sr. Pacheco: Transubstanciación en los Padres</h3>
    </div>

    <!-- Grupos colapsables -->
    <div class="video-groups">
      <!-- Grupo Urbina -->
      <details class="video-group video-group--urbina" open>
        <summary class="video-group__header">
          <span class="video-group__icon">▼</span>
          Respuestas de Urbina
        </summary>
        <div class="video-grid">
          <div class="video-item">
            <a href="https://www.youtube.com/watch?v=VIDEO_ID_1" target="_blank" rel="noopener noreferrer" class="video-thumbnail-link">
              <img src="https://img.youtube.com/vi/VIDEO_ID_1/maxresdefault.jpg" alt="Respuesta a Pacheco (Parte 1)" class="video-thumbnail" />
            </a>
            <h4 class="video-item__title">Respuesta a Pacheco (Parte 1)</h4>
          </div>
          <div class="video-item">
            <a href="https://www.youtube.com/watch?v=VIDEO_ID_2" target="_blank" rel="noopener noreferrer" class="video-thumbnail-link">
              <img src="https://img.youtube.com/vi/VIDEO_ID_2/maxresdefault.jpg" alt="Respuesta a Pacheco (Parte 2)" class="video-thumbnail" />
            </a>
            <h4 class="video-item__title">Respuesta a Pacheco (Parte 2)</h4>
          </div>
          <div class="video-item">
            <a href="https://www.youtube.com/watch?v=VIDEO_ID_3" target="_blank" rel="noopener noreferrer" class="video-thumbnail-link">
              <img src="https://img.youtube.com/vi/VIDEO_ID_3/maxresdefault.jpg" alt="Aclaración sobre Gelasio I" class="video-thumbnail" />
            </a>
            <h4 class="video-item__title">Aclaración sobre Gelasio I</h4>
          </div>
        </div>
      </details>

      <!-- Grupo Pacheco -->
      <details class="video-group video-group--pacheco">
        <summary class="video-group__header">
          <span class="video-group__icon">▼</span>
          Respuestas de Pacheco
        </summary>
        <div class="video-grid">
          <div class="video-item">
            <a href="https://www.youtube.com/watch?v=VIDEO_ID_4" target="_blank" rel="noopener noreferrer" class="video-thumbnail-link">
              <img src="https://img.youtube.com/vi/VIDEO_ID_4/maxresdefault.jpg" alt="Contrarréplica a Urbina" class="video-thumbnail" />
            </a>
            <h4 class="video-item__title">Contrarréplica a Urbina</h4>
          </div>
          <div class="video-item">
            <a href="https://www.youtube.com/watch?v=VIDEO_ID_5" target="_blank" rel="noopener noreferrer" class="video-thumbnail-link">
              <img src="https://img.youtube.com/vi/VIDEO_ID_5/maxresdefault.jpg" alt="Análisis de fuentes patrísticas" class="video-thumbnail" />
            </a>
            <h4 class="video-item__title">Análisis de fuentes patrísticas</h4>
          </div>
        </div>
      </details>

      <!-- Grupo Terceros -->
      <details class="video-group video-group--terceros">
        <summary class="video-group__header">
          <span class="video-group__icon">▼</span>
          Análisis de terceros
        </summary>
        <div class="video-grid">
          <div class="video-item">
            <a href="https://www.youtube.com/watch?v=VIDEO_ID_6" target="_blank" rel="noopener noreferrer" class="video-thumbnail-link">
              <img src="https://img.youtube.com/vi/VIDEO_ID_6/maxresdefault.jpg" alt="Análisis independiente del debate" class="video-thumbnail" />
            </a>
            <h4 class="video-item__title">Análisis independiente del debate</h4>
          </div>
          <div class="video-item">
            <a href="https://www.youtube.com/watch?v=VIDEO_ID_7" target="_blank" rel="noopener noreferrer" class="video-thumbnail-link">
              <img src="https://img.youtube.com/vi/VIDEO_ID_7/maxresdefault.jpg" alt="Perspectiva ecuménica" class="video-thumbnail" />
            </a>
            <h4 class="video-item__title">Perspectiva ecuménica</h4>
          </div>
          <div class="video-item">
            <a href="https://www.youtube.com/watch?v=VIDEO_ID_8" target="_blank" rel="noopener noreferrer" class="video-thumbnail-link">
              <img src="https://img.youtube.com/vi/VIDEO_ID_8/maxresdefault.jpg" alt="Estudio crítico de la patrística" class="video-thumbnail" />
            </a>
            <h4 class="video-item__title">Estudio crítico de la patrística</h4>
          </div>
        </div>
      </details>
    </div>
  </div>
</section>
```

**Note:** Replace `VIDEO_ID_1`, `VIDEO_ID_2`, etc. with actual YouTube video IDs when you have them.

- [ ] **Step 2: Verify the section was added**

```bash
grep -c 'id="videos"' index.html
```

Expected: Output is `1`

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add videos section HTML with featured debate and response groups"
```

---

## Task 6: Test Responsiveness Across Device Sizes

**Files:**
- Test: Open `index.html` in a browser

- [ ] **Step 1: Start a local dev server (or open file directly)**

If you have a dev server running, use it. Otherwise, open `file:///home/gi/proyectos/transubstanciacion/index.html` directly in your browser.

- [ ] **Step 2: Test on Desktop (1200px+)**

- Scroll to the Videos section
- Video del debate should be centered, ~50rem wide max
- Grid below should show **3 columns** of thumbnail videos
- Hover over any thumbnail: shadow intensifies, scales 1.02x
- Click on a thumbnail: opens YouTube in new tab ✓

- [ ] **Step 3: Test on Tablet (600px - 900px)**

Resize browser to 768px width, then:

- Video del debate still centered, responsive
- Grids in collapsed groups should show **2 columns**
- Thumbnail hovers work smoothly
- Collapsible groups expand/collapse on click

- [ ] **Step 4: Test on Mobile (< 600px)**

Resize browser to 375px width, then:

- Video del debate centered, full-width (with padding)
- Grids should show **1 column** (stacked)
- Titles truncate to 2 lines with ellipsis
- Thumbnails are clickable
- All text is readable

- [ ] **Step 5: Test Collapsible Groups**

- Urbina group: starts open (has `open` attribute)
- Pacheco & Terceros: start collapsed
- Click each summary to toggle expand/collapse
- Chevron icon rotates
- Animation is smooth (0.3s)

- [ ] **Step 6: Test Accessibility**

- Keyboard navigation: Tab through all links, all should be focusable
- All images have alt text
- Color-coding + text labels (not color-only differentiation)

- [ ] **Step 7: Verify All Links Open in New Tab**

Click a few video thumbnails and verify:
- Opens YouTube in a **new tab** (`target="_blank"`)
- Current site stays open

---

## Task 7: Final Verification and Commit

**Files:**
- Review: All modified/created files

- [ ] **Step 1: Check git status**

```bash
git status
```

Expected: All files are staged or committed (no uncommitted changes).

- [ ] **Step 2: Review git log**

```bash
git log --oneline -n 7
```

Expected: Latest commits should include the videos section commits.

- [ ] **Step 3: Run final visual inspection**

Open the site in your browser and:
- Scroll through entire page
- Verify Videos section appears at bottom, after Conclusion
- Menu includes "Videos" link
- All videos load thumbnails without errors
- Collapsible groups work smoothly
- Responsive layout works on different sizes

- [ ] **Step 4: Check for console errors**

Open browser DevTools (F12) → Console tab:

Expected: No JavaScript errors, no broken image links (404s).

- [ ] **Step 5: Final commit summary**

```bash
git log --oneline -n 7
```

Verify all commits are present.

---

## Summary

This plan creates a production-ready Videos section (Section 7) with:
- ✓ Featured debate video (prominent, centered)
- ✓ Three collapsible groups (Urbina, Pacheco, Terceros) with color-coding
- ✓ YouTube thumbnails + direct links (no embeds)
- ✓ Fully responsive (3 cols → 2 → 1)
- ✓ Native HTML `<details>/<summary>` (no JS required)
- ✓ Accessible (ARIA, keyboard navigation, alt text)
- ✓ Scalable (easy to add more videos)

Total files: 1 created (`css/videos.css`), 3 modified (`index.html`, `css/main.css`, `CLAUDE.md`).
