# Expansión Sección 8: Documentos Eclesiásticos — Plan de Implementación

> **Para agentes:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) para ejecutar task-by-task, o `superpowers:executing-plans` para ejecución inline.

**Goal:** Expandir Sección 8 "Para profundizar" agregando 5 documentos eclesiásticos (encíclicas + cartas apostólicas) con fotos de Papas en un grid separado de los 4 libros existentes.

**Architecture:** Agregar HTML (2 subheaders + 5 tarjetas documento) y 1 nueva regla CSS (.biblioteca__subtitle). Reutilizar toda la CSS existente de `.libro-card` sin modificaciones. Dos grids separados: libros primero, documentos después.

**Tech Stack:** HTML5 semántico, CSS3 (custom properties), sin JavaScript.

---

## Estructura de archivos

```
index.html                          (modificar: agregar subheaders + 5 documento-card)
css/debate.css                      (modificar: agregar .biblioteca__subtitle)
```

---

## Tasks

### Task 1: Agregar CSS para `.biblioteca__subtitle`

**Files:**
- Modify: `css/debate.css` (agregar antes de `.biblioteca__grid`)

- [ ] **Step 1: Localizar el lugar en CSS**

Abre `css/debate.css` y busca la sección `/* 8 · BIBLIOTECA */` (alrededor de línea 1083).

- [ ] **Step 2: Agregar nueva regla CSS**

Antes de `.biblioteca__grid` (línea ~1098), inserta:

```css
.biblioteca__subtitle {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: var(--step-1);
  color: var(--color-text);
  margin: var(--space-lg) 0 var(--space-md) 0;
  line-height: 1.2;
}
```

- [ ] **Step 3: Verificar que se guardó**

Busca `.biblioteca__subtitle` en el archivo para confirmar.

- [ ] **Step 4: Commit**

```bash
git add css/debate.css
git commit -m "feat: add .biblioteca__subtitle styles for section subheadings"
```

---

### Task 2: Agregar primer subheader "Libros recomendados"

**Files:**
- Modify: `index.html` (agregar h3 antes del primer `.biblioteca__grid`)

- [ ] **Step 1: Localizar el lugar en HTML**

Abre `index.html` y busca `<div class="biblioteca__grid">` (línea ~1275). Esta es la primera línea del grid de libros.

- [ ] **Step 2: Insertar subheader**

Justo ANTES de la línea `<div class="biblioteca__grid">`, inserta:

```html
  <h3 class="biblioteca__subtitle">Libros recomendados</h3>
```

Resultado: El subheader aparecerá arriba del grid de 4 libros.

- [ ] **Step 3: Verificar**

Busca "Libros recomendados" en `index.html` para confirmar que está ahí, justo antes del primer grid.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add 'Libros recomendados' subheader before book grid"
```

---

### Task 3: Agregar segundo subheader "Documentos de la Iglesia"

**Files:**
- Modify: `index.html` (agregar h3 después del primer grid, antes del nuevo grid)

- [ ] **Step 1: Localizar el cierre del primer grid**

Abre `index.html` y busca `</div>` que cierra el primer `.biblioteca__grid` (línea ~1297 aproximadamente, después de las 4 tarjetas de libros).

- [ ] **Step 2: Insertar subheader**

Justo DESPUÉS de ese `</div>` (después del primer grid), inserta:

```html
  <h3 class="biblioteca__subtitle">Documentos de la Iglesia</h3>
```

Resultado: El subheader aparecerá entre el grid de libros y el grid de documentos.

- [ ] **Step 3: Verificar**

Busca "Documentos de la Iglesia" en `index.html` para confirmar.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add 'Documentos de la Iglesia' subheader before document grid"
```

---

### Task 4: Agregar grid de documentos (HTML)

**Files:**
- Modify: `index.html` (agregar nuevo `<div class="biblioteca__grid">` con 5 tarjetas)

- [ ] **Step 1: Localizar el lugar**

En `index.html`, justo DESPUÉS del subheader "Documentos de la Iglesia" (línea ~1299), inserta un nuevo grid:

- [ ] **Step 2: Insertar el grid con 5 documento-cards**

```html
  <div class="biblioteca__grid">
    <a href="https://www.vatican.va/content/paul-vi/es/encyclicals/documents/hf_p-vi_enc_03091965_mysterium.html" class="libro-card" target="_blank" rel="noopener noreferrer" aria-label="Mysterium Fidei, por Pablo VI. Abre en nueva pestaña">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Pope_Paul_VI_1969_Portrait_%284x5_cropped%29.jpg/250px-Pope_Paul_VI_1969_Portrait_%284x5_cropped%29.jpg" alt="Foto: Pablo VI" class="libro-card__portada" />
      <h3 class="libro-card__titulo">Mysterium Fidei</h3>
      <p class="libro-card__autor">Pablo VI</p>
    </a>

    <a href="https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_20030417_eccl-de-euch.html" class="libro-card" target="_blank" rel="noopener noreferrer" aria-label="Ecclesia de Eucharistia, por Juan Pablo II. Abre en nueva pestaña">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/ADAMELLO_-_PAPA_-_Giovanni_Paolo_II_-_panoramio_%28cropped%29.jpg/250px-ADAMELLO_-_PAPA_-_Giovanni_Paolo_II_-_panoramio_%28cropped%29.jpg" alt="Foto: Juan Pablo II" class="libro-card__portada" />
      <h3 class="libro-card__titulo">Ecclesia de Eucharistia</h3>
      <p class="libro-card__autor">Juan Pablo II</p>
    </a>

    <a href="https://www.vatican.va/content/john-paul-ii/es/apost_letters/2004/documents/hf_jp-ii_apl_20041008_mane-nobiscum-domine.html" class="libro-card" target="_blank" rel="noopener noreferrer" aria-label="Mane Nobiscum Domine, por Juan Pablo II. Abre en nueva pestaña">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/ADAMELLO_-_PAPA_-_Giovanni_Paolo_II_-_panoramio_%28cropped%29.jpg/250px-ADAMELLO_-_PAPA_-_Giovanni_Paolo_II_-_panoramio_%28cropped%29.jpg" alt="Foto: Juan Pablo II" class="libro-card__portada" />
      <h3 class="libro-card__titulo">Mane Nobiscum Domine</h3>
      <p class="libro-card__autor">Juan Pablo II</p>
    </a>

    <a href="https://www.vatican.va/content/benedict-xvi/es/apost_exhortations/documents/hf_ben-xvi_exh_20070222_sacramentum-caritatis.html" class="libro-card" target="_blank" rel="noopener noreferrer" aria-label="Sacramentum Caritatis, por Benedicto XVI. Abre en nueva pestaña">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Benedykt_XVI_%282010-10-17%29_2.jpg/250px-Benedykt_XVI_%282010-10-17%29_2.jpg" alt="Foto: Benedicto XVI" class="libro-card__portada" />
      <h3 class="libro-card__titulo">Sacramentum Caritatis</h3>
      <p class="libro-card__autor">Benedicto XVI</p>
    </a>

    <a href="https://www.vatican.va/content/francesco/es/audiences/2018/documents/papa-francesco_20180321_udienza-generale.html" class="libro-card" target="_blank" rel="noopener noreferrer" aria-label="Audiencia General, por Papa Francisco. Abre en nueva pestaña">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Pope_Francis_Korea_Haemi_Castle_19_%284x5_cropped%29.jpg/250px-Pope_Francis_Korea_Haemi_Castle_19_%284x5_cropped%29.jpg" alt="Foto: Papa Francisco" class="libro-card__portada" />
      <h3 class="libro-card__titulo">Audiencia General</h3>
      <p class="libro-card__autor">Papa Francisco</p>
    </a>
  </div>
```

- [ ] **Step 3: Verificar estructura**

Abre `index.html` y verifica:
- Localiza "Documentos de la Iglesia" subheader
- Verifica que hay un `<div class="biblioteca__grid">` inmediatamente después
- Verifica que contiene 5 `<a class="libro-card">` (documento-cards)
- Verifica que cada tarjeta tiene `<img>`, `<h3>`, `<p>` con contenido correcto

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add 5 ecclesiastical documents to biblioteca section with papal photos"
```

---

### Task 5: Verificar responsividad y accesibilidad

**Files:**
- Test: Abrir `index.html` en navegador (sin archivos nuevos)

- [ ] **Step 1: Iniciar servidor**

```bash
cd /home/gi/proyectos/transubstanciacion
python3 -m http.server 8000
```

- [ ] **Step 2: Abrir en navegador**

Abre `http://localhost:8000` y haz scroll a Sección 8.

- [ ] **Step 3: Verificar layout desktop (≥768px)**

En ancho normal (≥768px):
- ✅ Ves subheader "Libros recomendados"
- ✅ Ves 4 libros en grid de 4 columnas
- ✅ Ves subheader "Documentos de la Iglesia"
- ✅ Ves 5 documentos (con fotos de Papas) en grid de 4 columnas
- ✅ Ambos grids tienen el mismo espaciado (compacto)
- ✅ Las fotos de Papas tienen max-width 160px (igual que portadas de libros)

- [ ] **Step 4: Verificar layout móvil (<768px)**

Abre DevTools (F12), activa Responsive Design (Ctrl+Shift+M), establece 375px:
- ✅ Los 4 libros están en 1 columna
- ✅ Los 5 documentos están en 1 columna
- ✅ Subheaders están claramente visibles
- ✅ Espaciado es cómodo (no apiñado)

- [ ] **Step 5: Verificar links**

Haz click en uno de los documentos (cualquier parte):
- ✅ Abre el link de Vatican.va en nueva pestaña (`target="_blank"`)
- ✅ La URL es correcta

- [ ] **Step 6: Verificar focus (accesibilidad)**

Presiona Tab repetidamente:
- ✅ Cada tarjeta (libros + documentos) muestra outline dorado en focus
- ✅ Outline es visible

- [ ] **Step 7: Detener servidor**

Presiona Ctrl+C en la terminal.

---

### Task 6: Commit final y verificación

**Files:**
- Verify: Todo lo anterior

- [ ] **Step 1: Ver estado de git**

```bash
git log --oneline -5
```

Expected: Los 4 commits recientes de esta implementación.

- [ ] **Step 2: Verificar working tree limpio**

```bash
git status
```

Expected: "working tree clean" o "nothing to commit"

- [ ] **Step 3: Hacer push (opcional)**

Si quieres subir a GitHub Pages:

```bash
git push origin main
```

Si no, omite este paso.
