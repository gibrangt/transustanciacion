# Diseño: Sección 7 — Videos del Debate

**Fecha:** 2026-06-12  
**Proyecto:** Sitio apologético La Transustanciación en los Padres de la Iglesia  
**Descripción:** Nueva sección de videos del debate con categorización escalable

---

## 1. Propósito

Crear una sección dedicada a los videos del debate entre Dr. Urbina y Sr. Pacheco, permitiendo al usuario explorar:
- El video del debate en vivo (protagonista)
- Respuestas posteriores de Urbina
- Respuestas posteriores de Pacheco
- Análisis de terceros

La sección debe ser **escalable** (actualmente 3 videos/categoría, crecerá) y **accesible** (miniaturas + títulos, click directo a YouTube).

---

## 2. Estructura del Sitio

La sección 7 "Videos del Debate" se inserta **después de la Conclusión** en el flujo del sitio:

```
1. Hero
2. Contexto
3. Conflictos
4. Argumentos de Urbina
5. Objeciones de Pacheco
6. Conclusión
7. Videos del Debate ← NUEVA SECCIÓN
```

Se agrega un link en el menú de navegación (`nav.site-nav__links`) apuntando a `#videos`.

---

## 3. Arquitectura Visual

### 3.1 Estructura HTML

```
<section id="videos" class="videos-section">
  <div class="container">
    <h2>Videos del Debate</h2>
    <p class="kicker">Mira el debate completo y las respuestas posteriores</p>

    <!-- Video del debate (protagonista) -->
    <div class="video-debate">
      <a href="[youtube_url]" target="_blank" rel="noopener noreferrer" class="video-thumbnail-link">
        <img src="[thumbnail_url]" alt="[titulo]" class="video-thumbnail" />
      </a>
      <h3 class="video-title">[titulo]</h3>
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
          [miniaturas individuales]
        </div>
      </details>

      <!-- Grupo Pacheco -->
      <details class="video-group video-group--pacheco">
        <summary class="video-group__header">
          <span class="video-group__icon">▼</span>
          Respuestas de Pacheco
        </summary>
        <div class="video-grid">
          [miniaturas individuales]
        </div>
      </details>

      <!-- Grupo Terceros -->
      <details class="video-group video-group--terceros">
        <summary class="video-group__header">
          <span class="video-group__icon">▼</span>
          Análisis de terceros
        </summary>
        <div class="video-grid">
          [miniaturas individuales]
        </div>
      </details>
    </div>
  </div>
</section>
```

**Nota técnica:** Usamos `<details>/<summary>` nativo en HTML para colapso, sin JavaScript. `open` en Urbina expande ese grupo por defecto.

### 3.2 Miniatura Individual

```
<div class="video-item">
  <a href="[youtube_url]" target="_blank" rel="noopener noreferrer" class="video-thumbnail-link">
    <img src="[thumbnail_url]" alt="[titulo]" class="video-thumbnail" />
  </a>
  <h4 class="video-item__title">[titulo]</h4>
</div>
```

---

## 4. Diseño Visual (CSS)

### 4.1 Colores

```css
:root {
  /* Colores de grupos (ya existentes + nueva variable) */
  --color-terceros: #6B6560;  /* gris neutro para terceros */
}
```

### 4.2 Sección Principal

```css
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
}

.videos-section .kicker {
  color: var(--color-text-muted);
  margin-bottom: var(--space-lg);
}
```

### 4.3 Video del Debate (Protagonista)

```css
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
}
```

### 4.4 Grupos Colapsables

```css
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
}

.video-group__header:hover {
  opacity: 0.8;
}

.video-group__icon {
  display: inline-block;
  transition: transform 0.3s ease;
  font-size: 0.9em;
}

/* Rotación del icono en open state */
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
```

### 4.5 Grid de Miniaturas

```css
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
```

### 4.6 Miniatura Individual

```css
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

.video-item__title:hover {
  color: var(--color-text);
}
```

---

## 5. HTML Estático (todo en index.html)

No hay estructura de datos separada. Todo el contenido es HTML estático en `index.html`. Para agregar videos:

1. Actualizar `index.html` directamente con nuevos `<div class="video-item">` dentro de cada grupo
2. YouTube genera thumbnails automáticamente: `https://img.youtube.com/vi/[YOUTUBE_ID]/maxresdefault.jpg`
3. Fallback: `hqdefault.jpg` si maxres no está disponible

Ejemplo de URL YouTube:
- Video: `https://www.youtube.com/watch?v=UzCqErTu0WE`
- ID: `UzCqErTu0WE`
- Thumbnail: `https://img.youtube.com/vi/UzCqErTu0WE/maxresdefault.jpg`

---

## 7. Responsividad

| Breakpoint | Layout |
|-----------|--------|
| > 900px | 3 columnas en grids |
| 600–900px | 2 columnas en grids |
| < 600px | 1 columna, full-width |
| Mobile | Padding lateral `--space-md`, miniaturas stacked |

Video del debate: siempre centrado, máx ancho `--container-narrow` (50rem).

---

## 8. Accesibilidad

- `target="_blank"` con `rel="noopener noreferrer"` en todos los links a YouTube
- Alt text en imágenes (títulos de videos)
- `<details>/<summary>` nativo (no requiere JS, totalmente accesible)
- Color-coding refuerza categorías (no es el único diferenciador)
- Títulos truncados con ellipsis, pero el link es clickeable

---

## 9. Escalabilidad

- Grid con `auto-fill` se adapta automáticamente al número de videos
- Estructura `<details>` permite agregar más grupos fácilmente
- Data centralizada en `data.js` (única fuente de verdad)
- No hay límite implícito de videos por categoría

---

## 10. Pasos de Implementación

1. Crear `videos.css` con los estilos anteriores
2. Actualizar `CLAUDE.md` para documentar la nueva sección
3. Agregar link "#videos" al menú de navegación en `index.html`
4. Crear la sección HTML estática en `index.html` (después de conclusión)
5. Probar responsividad en mobile, tablet, desktop
6. Verificar accesibilidad (ARIA, keyboard navigation)
7. Commit todo junto

---

## Validación

✓ Miniaturas + título, sin embeds  
✓ Click directo a YouTube  
✓ Grupos colapsables (Urbina, Pacheco, Terceros)  
✓ Escalable (crece sin romper layout)  
✓ Coherente con tono académico del sitio  
✓ Mobile-first, responsive desde 375px  
✓ Sin JavaScript (HTML + CSS puro)
