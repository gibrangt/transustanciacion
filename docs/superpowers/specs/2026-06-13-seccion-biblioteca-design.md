# Diseño: Sección 8 "Para profundizar" — Biblioteca Recomendada

**Fecha:** 2026-06-13  
**Autor:** Claude  
**Estado:** Diseño aprobado

---

## 1. Visión general

Agregar una nueva sección al sitio que presenta una bibliografía selecta de libros católicos sobre Eucaristía, presencia real y transustanciación. La sección sustenta y profundiza los argumentos presentados en el debate entre Urbina y Pacheco.

**Ubicación en el sitio:** Después de la sección de videos (#6), antes del footer.  
**Número de sección:** 8 (mantiene la numeración existente)

---

## 2. Estructura HTML

### 2.1 Contenedor de sección
```
<section class="biblioteca" id="biblioteca">
  <div class="section-head">
    <span class="section-head__num">08</span>
    <p class="kicker">Para profundizar</p>
    <h2 class="section-head__title">Para profundizar</h2>
    <p class="section-head__lead">
      Esta bibliografía completa y sustenta los argumentos presentados en el debate,
      ofreciendo perspectivas católicas profundas sobre la Eucaristía, la presencia real
      y la transustanciación.
    </p>
  </div>

  <div class="biblioteca__grid">
    <!-- 4 tarjetas de libros aquí -->
  </div>
</section>
```

### 2.2 Tarjeta de libro
Cada tarjeta es un enlace único que envuelve toda su estructura. Al clickear cualquier parte (portada, título, autor), navega al link de Amazon proporcionado.

```html
<a href="[amazon-url]" class="libro-card" target="_blank" rel="noopener noreferrer">
  <img src="[portada-url]" alt="Portada: [título]" class="libro-card__portada" />
  <h3 class="libro-card__titulo">[Título]</h3>
  <p class="libro-card__autor">[Autor]</p>
</a>
```

---

## 3. Datos de los libros

| # | Título | Autor | ASIN/ISBN | URL Amazon |
|---|--------|-------|-----------|-----------|
| 1 | El libro de la Eucaristía | Lawrence G. Lovasik | 843214570X | [Enlace original] |
| 2 | La Cena del Cordero: La Misa, El Cielo En La Tierra | Scott Hahn | 8432133795 | [Enlace original + params] |
| 3 | Presencia real: qué significa y por qué importa | Brett Salkeld | B0C2BLSRNN | [Enlace original + params] |
| 4 | Jesús y las raíces judías de la Eucaristía | Brant Pitre | 8432160709 | [Enlace original + params] |

**URLs de portada:**
- Libro 1: `https://images-na.ssl-images-amazon.com/images/P/843214570X.01.L.jpg`
- Libro 2: `https://covers.openlibrary.org/b/id/3326548-M.jpg` (alternativa: Open Library)
- Libro 3: `https://images-na.ssl-images-amazon.com/images/P/B0C2BLSRNN.01.L.jpg`
- Libro 4: `https://covers.openlibrary.org/b/id/13704112-M.jpg` (alternativa: Open Library)

---

## 4. Estilos CSS

### 4.1 Grid responsivo
- **Desktop (≥768px):** 2 columnas, gap 2rem (16px)
- **Móvil (<768px):** 1 columna, gap 1.5rem (12px)

### 4.2 Tarjeta `.libro-card`
- **Estructura:** flex column, no-wrap
- **Ancho:** fluido dentro del grid
- **Fondo:** transparente
- **Decoración:** border suave (`1px solid var(--color-line)`)
- **Bordes:** `border-radius: var(--radius-lg)` (10px)
- **Sombra:** `--shadow-soft` (reposo), `--shadow-lift` (hover)
- **Padding interno:** `1rem` (space-sm)
- **Transición:** `all 0.25s ease` (hover effects)

### 4.3 Imagen de portada `.libro-card__portada`
- **Ancho:** 100% del contenedor
- **Aspect ratio:** 3:4 (portrait)
- **Objeto-fit:** `cover`
- **Bordes:** `border-radius: var(--radius-lg)`
- **Sombra:** `0 2px 8px rgba(26, 24, 20, 0.1)`
- **Hover:** `filter: brightness(1.05)` + `transform: scale(1.02)` (muy sutil)

### 4.4 Título `.libro-card__titulo`
- **Fuente:** `Spectral`, 600 weight
- **Tamaño:** `var(--step-0)` (fluido: ~1rem a 1.19rem)
- **Color:** `var(--color-text)`
- **Margin:** `0.75rem 0 0.25rem 0`
- **Line-height:** 1.3 (títulos ajustados)

### 4.5 Autor `.libro-card__autor`
- **Fuente:** `Spectral`, 400 weight
- **Tamaño:** `var(--step--1)` (fluido: ~0.83rem a 0.94rem)
- **Color:** `var(--color-text-muted)`
- **Margin:** `0`

### 4.6 Estados interactivos
- **Hover en tarjeta:**
  - Sombra: `--shadow-lift`
  - Imagen: `brightness(1.05) scale(1.02)`
- **Focus (accesibilidad):**
  - Outline: `2px solid var(--color-accent)` con offset `2px`

---

## 5. Responsive design

### 5.1 Breakpoints
- **Mobile:** <576px → 1 columna, padding contenedor: 1rem
- **Tablet:** 576px–768px → 1 columna, padding: 1.5rem
- **Desktop:** ≥768px → 2 columnas, padding: 2rem

### 5.2 Typography fluida
- Ya usa `clamp()` en `main.css`, no requiere ajustes especiales

### 5.3 Touch targets
- **Mínimo:** 44px × 44px (accesibilidad móvil)
- Las tarjetas completas son clickeables, cumple este requisito

---

## 6. Accesibilidad

- **Links con target="_blank":** Incluir `rel="noopener noreferrer"` ✅
- **Alt text en imágenes:** `alt="Portada: [título del libro]"`
- **Semántica:** Usar `<a>` wrapper en lugar de JS para la navegación
- **Focus visible:** Outline claro en focus (outline CSS)
- **Contraste:** Los colores respetan WCAG AA (textos sobre fondos)

---

## 7. Ubicación en el documento

```
<main>
  <!-- Secciones 1-7 -->
  
  <!-- NUEVA SECCIÓN 8 -->
  <section class="biblioteca" id="biblioteca">
    ...
  </section>
  
  <footer>
    ...
  </footer>
</main>
```

Se añade también el enlace en la navegación header (si es necesario):
```html
<a href="#biblioteca">Biblioteca</a>
```

---

## 8. Archivos a modificar

1. **`index.html`**
   - Agregar sección `.biblioteca` con 4 tarjetas
   - Opcionalmente: agregar enlace en `<nav class="site-nav__links">`

2. **`css/debate.css`** o nuevo archivo **`css/biblioteca.css`**
   - Estilos de `.biblioteca`, `.biblioteca__grid`, `.libro-card`, y variantes

---

## 9. Notas técnicas

- **Sin JavaScript:** Todo es CSS puro (como el resto del sitio)
- **URLs de Amazon:** Verificadas y sin modificación de parámetros
- **Imágenes de portada:** URLs públicas de Open Library o Amazon (no requieren descarga local)
- **Compatibilidad:** Works on all modern browsers; graceful degradation for older browsers

---

## 10. Checklist de implementación

- [ ] Crear sección `.biblioteca` en HTML
- [ ] Agregar 4 tarjetas `.libro-card` con enlaces y imágenes
- [ ] Crear estilos CSS (grid, tarjeta, hover, responsive)
- [ ] Verificar responsividad en móvil
- [ ] Probar enlaces a Amazon (target="_blank" funciona)
- [ ] Revisar accesibilidad (alt text, contraste, focus)
- [ ] Actualizar navegación header (opcional)
