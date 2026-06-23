# Sección 8 "Para profundizar" — Biblioteca Recomendada — Plan de Implementación

> **Para agentes:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) para ejecutar task-by-task, o `superpowers:executing-plans` para ejecución inline.

**Goal:** Agregar una sección de bibliografía recomendada con 4 libros católicos sobre Eucaristía, presentados en tarjetas clickeables con imagen, título y autor.

**Architecture:** Una sección HTML simple con grid responsive (2 col desktop, 1 móvil) y estilos CSS puro. Cada tarjeta es un link `<a>` que envuelve la portada, título y autor. Sin JavaScript. Los estilos se agregan a `css/debate.css` siguiendo las variables y patrones existentes.

**Tech Stack:** HTML5 semántico, CSS3 (custom properties, grid, transiciones), sin JavaScript.

---

## Estructura de archivos

```
index.html                          (modificar: agregar sección .biblioteca)
css/debate.css                      (modificar: agregar estilos .biblioteca, .libro-card)
```

---

## Tasks

### Task 1: Agregar sección HTML y 4 tarjetas

**Files:**
- Modify: `index.html` (después de `<section class="videos" id="videos">`, antes de `</main>`)

- [ ] **Step 1: Localizar el lugar de inserción en index.html**

Abre `index.html` y busca la línea con `</section>` que cierra la sección de videos (línea ~935 aproximadamente). La nueva sección `.biblioteca` irá justo después, antes de `</main>`.

- [ ] **Step 2: Copiar y pegar el HTML de la sección**

Inserta el siguiente bloque completo después de la sección de videos y antes de `</main>`:

```html
    <!-- ╔══════════════════════════════════════════════════════════╗ -->
    <!-- ║ 8 · BIBLIOTECA RECOMENDADA                                ║ -->
    <!-- ╚══════════════════════════════════════════════════════════╝ -->
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
        <a href="https://www.amazon.com.mx/El-libro-Eucarist%C3%ADa-Lovasik-Lawrence/dp/843214570X" class="libro-card" target="_blank" rel="noopener noreferrer">
          <img src="https://images-na.ssl-images-amazon.com/images/P/843214570X.01.L.jpg" alt="Portada: El libro de la Eucaristía" class="libro-card__portada" />
          <h3 class="libro-card__titulo">El libro de la Eucaristía</h3>
          <p class="libro-card__autor">Lawrence G. Lovasik</p>
        </a>

        <a href="https://www.amazon.com.mx/cena-del-cordero-cielo-tierra/dp/8432133795/ref=sr_1_1?crid=AL5QW0D8O5C1&dib=eyJ2IjoiMSJ9.7yirH5XwT3NCFzDi_8bWQqgWG20rMskXZN3PUAPS77q1zXIu8N38v9o0EanC_9jcCqR1ZjU1ZE5q1pQtBcgMdg.Bw8UyJ6ZYc9aaA8s4zf_aHD7PqlmXIUZ3h2eQtfD4uQ&dib_tag=se&keywords=la+cena+del+cordero+scott+hahn&qid=1781397110&sprefix=la+cena+del+cordero+scott%2Caps%2C133&sr=8-1&ufe=app_do%3Aamzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b" class="libro-card" target="_blank" rel="noopener noreferrer">
          <img src="https://covers.openlibrary.org/b/id/3326548-M.jpg" alt="Portada: La Cena del Cordero: La Misa, El Cielo En La Tierra" class="libro-card__portada" />
          <h3 class="libro-card__titulo">La Cena del Cordero: La Misa, El Cielo En La Tierra</h3>
          <p class="libro-card__autor">Scott Hahn</p>
        </a>

        <a href="https://www.amazon.com.mx/Presencia-real-significa-importante-Catholicism-ebook/dp/B0C2BLSRNN/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=162V7NDKXYUMA&dib=eyJ2IjoiMSJ9.LQVwjUU2vic5mgPBQzYBBewJUx2C7ejTP-HMK1OkPTXmLh-dNChs40I3h3_UZh509IzCSfsV_iu7k1ZV_5HGEa8qH2P4yHTCP4l4DEHYV7oo34uNG52Jt4wFCAiUI5wJVNMnYn68JTP_qLIaUMAPhP8NrtyUlnRfkSkGWSZVVXeotDsF5fDh1b_LpvsDKswcHS0ZyVbNXrdI63_1ZhPmNEzBaCdzlwSf37H8FcmszJp1sDBsztGC-JMFjB50Jgsd_6qnvit1pvd05Ew4_0J3z-GPd42HVw5h7bdofN-QvHg.riVDIrcfpChpVZpJp3XCGnL_Jw8gTyBgqOId1EX6ZeE&dib_tag=se&keywords=presencia+real&qid=1781397179&sprefix=presencia+real%2Caps%2C146&sr=8-1" class="libro-card" target="_blank" rel="noopener noreferrer">
          <img src="https://images-na.ssl-images-amazon.com/images/P/B0C2BLSRNN.01.L.jpg" alt="Portada: Presencia real: qué significa y por qué importa" class="libro-card__portada" />
          <h3 class="libro-card__titulo">Presencia real: qué significa y por qué importa</h3>
          <p class="libro-card__autor">Brett Salkeld</p>
        </a>

        <a href="https://www.amazon.com.mx/Jes%C3%BAs-las-ra%C3%ADces-jud%C3%ADas-Eucarist%C3%ADa/dp/8432160709/ref=sr_1_1?adgrpid=144736121926&dib=eyJ2IjoiMSJ9.0qTRnt0u_Rf5RWmnw646TF_0RnwsYjXgphc5TjZzSjb1CW0vjseov6RCWfnzj7ehOx2E1aD8NCkz2Jb4XMiOlH1l_4A4r_j9CXlmCTWFVhv175v0O85QDJSKbub0gbMFaYQk2tMiPgQmEBSfn2EI692b9D31jDFSqmOZ9WlS6Zcp9gVYVw7aNE6w10Ln3WK7JqEfw4f3f5T4Ncf28FpEdMRXkhUlm4q2Exjw9sTdsE9AaQv8QRqp3s5A3sW3ehVoUdi_CjlCPF-bhBoYmpwjVndTIiA-pcUgj5BZc575_vs.kZTYR-wvPIcM_ENWQCP4CV2PtHibsPWNnCIw3lgsKgM&dib_tag=se&hvadid=648118785271&hvdev=c&hvexpln=0&hvlocphy=1010086&hvnetw=g&hvocijid=18019120464519139738--&hvqmt=e&hvrand=18019120464519139738&hvtargid=kwd-2388137652937&hydadcr=6508_13242042&keywords=jes%C3%BAs+y+las+ra%C3%ADces+jud%C3%ADas&mcid=113203b3a0d338db8dc150e3a275c594&qid=1781397328&sr=8-1&ufe=app_do%3Aamzn1.fos.45030d3a-91a9-4303-890a-776dee9077c1" class="libro-card" target="_blank" rel="noopener noreferrer">
          <img src="https://covers.openlibrary.org/b/id/13704112-M.jpg" alt="Portada: Jesús y las raíces judías de la Eucaristía" class="libro-card__portada" />
          <h3 class="libro-card__titulo">Jesús y las raíces judías de la Eucaristía</h3>
          <p class="libro-card__autor">Brant Pitre</p>
        </a>
      </div>
    </section>
```

- [ ] **Step 3: Verificar que el HTML se guardó correctamente**

Abre `index.html` en un editor de texto y busca `<section class="biblioteca"` para confirmar que está ahí. La sección debe estar antes de `</main>`.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add HTML structure for biblioteca section with 4 book cards"
```

---

### Task 2: Agregar estilos base para grid y contenedor

**Files:**
- Modify: `css/debate.css` (agregar al final del archivo)

- [ ] **Step 1: Abrir css/debate.css y localizar el final**

Ve al final de `css/debate.css` (alrededor de la línea 900+).

- [ ] **Step 2: Agregar estilos para .biblioteca y .biblioteca__grid**

Pega lo siguiente al final de `css/debate.css`:

```css
/* ╔══════════════════════════════════════════════════════════╗
   ║ 8 · BIBLIOTECA                                            ║
   ╚══════════════════════════════════════════════════════════╝ */

.biblioteca {
  background-color: var(--color-bg);
  padding: var(--space-lg) var(--space-md);
}

@media (min-width: 768px) {
  .biblioteca {
    padding: var(--space-2xl) var(--space-lg);
  }
}

.biblioteca__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  max-width: var(--container);
  margin: var(--space-lg) auto 0;
}

@media (min-width: 768px) {
  .biblioteca__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }
}
```

- [ ] **Step 3: Verificar que los estilos se guardaron**

Abre `css/debate.css` al final y busca `.biblioteca__grid` para confirmar.

- [ ] **Step 4: Commit**

```bash
git add css/debate.css
git commit -m "feat: add grid layout styles for biblioteca section"
```

---

### Task 3: Agregar estilos para tarjetas .libro-card

**Files:**
- Modify: `css/debate.css` (agregar antes de la siguiente Task)

- [ ] **Step 1: Agregar estilos de tarjeta base**

Pega lo siguiente al final de `css/debate.css`, después de `.biblioteca__grid`:

```css
.libro-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  text-decoration: none;
  color: inherit;
  padding: var(--space-sm);
  border: 1px solid var(--color-line);
  border-radius: var(--radius-lg);
  background-color: transparent;
  transition: all 0.25s ease;
}

.libro-card__portada {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: var(--radius-lg);
  display: block;
  box-shadow: 0 2px 8px rgba(26, 24, 20, 0.1);
  transition: filter 0.25s ease, transform 0.25s ease;
}

.libro-card__titulo {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--step-0);
  color: var(--color-text);
  margin: 0.75rem 0 0.25rem 0;
  line-height: 1.3;
}

.libro-card__autor {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: var(--step--1);
  color: var(--color-text-muted);
  margin: 0;
}
```

- [ ] **Step 2: Verificar los estilos en el archivo**

Busca `.libro-card__portada` en `css/debate.css` para confirmar.

- [ ] **Step 3: Commit**

```bash
git add css/debate.css
git commit -m "feat: add base styles for libro-card tarjetas"
```

---

### Task 4: Agregar estilos hover y focus (interactividad)

**Files:**
- Modify: `css/debate.css` (agregar después de los estilos de Task 3)

- [ ] **Step 1: Agregar hover y focus effects**

Pega lo siguiente al final de `css/debate.css`:

```css
.libro-card:hover {
  box-shadow: var(--shadow-lift);
}

.libro-card:hover .libro-card__portada {
  filter: brightness(1.05);
  transform: scale(1.02);
}

.libro-card:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .libro-card,
  .libro-card__portada {
    transition: none;
  }
  
  .libro-card:hover .libro-card__portada {
    transform: none;
  }
}
```

- [ ] **Step 2: Verificar los estilos**

Busca `.libro-card:hover` en `css/debate.css` para confirmar.

- [ ] **Step 3: Commit**

```bash
git add css/debate.css
git commit -m "feat: add hover, focus, and prefers-reduced-motion styles for libro-card"
```

---

### Task 5: Verificar responsividad en móvil y desktop

**Files:**
- Test: Abrir `index.html` en navegador (sin archivos nuevos)

- [ ] **Step 1: Iniciar servidor local**

```bash
cd /home/gi/proyectos/transubstanciacion
python3 -m http.server 8000
```

Expected: Servidor local en `http://localhost:8000`

- [ ] **Step 2: Abrir el sitio en navegador**

Abre `http://localhost:8000` en tu navegador.

- [ ] **Step 3: Desplazarse a la sección Biblioteca**

Haz scroll hasta la sección "Para profundizar" (Sección 8) o clickea en el navegador (si está el link).

- [ ] **Step 4: Verificar layout desktop (≥768px)**

En un navegador normal (ancho ≥768px):
- ✅ Las 4 tarjetas deben estar en **2 columnas** (2 filas × 2 columnas)
- ✅ Las portadas deben tener aspect ratio **3:4** (más altas que anchas)
- ✅ El título y autor deben estar debajo de la portada
- ✅ Al pasar el mouse sobre la tarjeta, debe haber sombra y ligero zoom en la imagen

- [ ] **Step 5: Verificar layout móvil (<768px)**

Abre DevTools (F12) y cambia a modo "Mobile" (responsive design). Establece ancho a ~375px:
- ✅ Las 4 tarjetas deben estar en **1 columna** (4 filas × 1 columna)
- ✅ Las tarjetas deben ser legibles y no cortadas
- ✅ El espaciado debe ser cómodo (no apiñado)
- ✅ El tap/click debe funcionar (link a Amazon)

- [ ] **Step 6: Verificar los links**

Haz click en una tarjeta (cualquier parte):
- ✅ Debe abrir el link de Amazon en pestaña nueva (`target="_blank"`)
- ✅ Los links deben ser correctos (verificar que coincidan con los proporcionados)

- [ ] **Step 7: Detener servidor**

```bash
# Presiona Ctrl+C en la terminal donde corre el servidor
```

---

### Task 6: Verificar accesibilidad

**Files:**
- Test: Revisar HTML en `index.html` (sin cambios)

- [ ] **Step 1: Verificar alt text en las imágenes**

Abre `index.html` y busca cada `<img class="libro-card__portada"`. Cada una debe tener un `alt` atributo con el formato:
```html
alt="Portada: [Título del libro]"
```

Confirma que los 4 tienen alt text descriptivo.

- [ ] **Step 2: Verificar que los links tienen rel="noopener noreferrer"**

En cada `<a class="libro-card"`, verifica que tiene `target="_blank" rel="noopener noreferrer"`:
```html
<a href="..." class="libro-card" target="_blank" rel="noopener noreferrer">
```

Confirma que los 4 lo tienen.

- [ ] **Step 3: Verificar contraste de colores**

En el navegador (con DevTools abierto), haz click derecho en el título o autor dentro de una tarjeta, selecciona "Inspect". Verifica que:
- Texto sobre fondo: contraste suficiente (WCAG AA mínimo)
- Color del texto: `var(--color-text)` (oscuro) sobre `var(--color-bg)` (claro) ✅

- [ ] **Step 4: Verificar focus visible**

En el navegador, presiona **Tab** repetidamente para navegar entre elementos:
- ✅ Cada tarjeta debe mostrar un outline claro cuando tiene focus
- ✅ El outline debe ser visible (color dorado/accent)

---

### Task 7: Actualizar navegación header (opcional, si deseas)

**Files:**
- Modify: `index.html` (línea ~46-52, dentro de `<nav class="site-nav__links">`)

- [ ] **Step 1: Localizar la navegación**

Abre `index.html` y busca:
```html
<nav class="site-nav__links" aria-label="Secciones del sitio">
  <a href="#contexto">Contexto</a>
  ...
  <a href="#videos">Videos</a>
</nav>
```

- [ ] **Step 2: Agregar enlace a Biblioteca**

Agrega una nueva línea antes de `</nav>`:
```html
      <a href="#biblioteca">Biblioteca</a>
```

El nav debe quedar así:
```html
<nav class="site-nav__links" aria-label="Secciones del sitio">
  <a href="#contexto">Contexto</a>
  <a href="#conflictos">Conflictos</a>
  <a href="#argumentos">Argumentos</a>
  <a href="#objeciones">Objeciones</a>
  <a href="#conclusion">Conclusión</a>
  <a href="#videos">Videos</a>
  <a href="#biblioteca">Biblioteca</a>
</nav>
```

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add biblioteca link to navigation header"
```

---

### Task 8: Commit final y verificación

**Files:**
- Verify: Todo lo anterior

- [ ] **Step 1: Verificar estado de git**

```bash
git status
```

Expected: Working tree clean, o solo cambios planeados staged.

- [ ] **Step 2: Ver el log de commits**

```bash
git log --oneline -10
```

Expected: Deberías ver los commits de esta sesión (biblioteca section, grid, styles, etc.)

- [ ] **Step 3: Hacer una revisión visual final**

Abre `http://localhost:8000` en el navegador (inicia servidor si no está corriendo):
- ✅ Sección visible y bien formateada
- ✅ Imágenes cargan correctamente
- ✅ Layout responsivo funciona
- ✅ Links funcionan

- [ ] **Step 4: Push a main (si es necesario)**

```bash
git push origin main
```

(Solo si tienes permisos y quieres subir a GitHub Pages)

---

## Auto-revisión del plan

**Spec coverage:** ✅
- Estructura HTML: Task 1 ✅
- Grid responsivo (2 col desktop, 1 móvil): Task 2 ✅
- Tarjetas `.libro-card` con imagen, título, autor: Task 3 ✅
- Hover, focus, accesibilidad: Task 4 + Task 6 ✅
- Verificación en navegador: Task 5 ✅
- Navegación (opcional): Task 7 ✅

**Placeholder scan:** ✅
- No hay TBD, TODO, "similar to", "fill in details"
- Todos los pasos tienen código completo o comandos exactos
- Todos los pasos tienen expected output claro

**Type/naming consistency:** ✅
- `.biblioteca` en todas partes
- `.biblioteca__grid` en grid
- `.libro-card`, `.libro-card__portada`, `.libro-card__titulo`, `.libro-card__autor` consistente
