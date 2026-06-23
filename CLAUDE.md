# CLAUDE.md — Sitio apologético: La Transubstanciación en los Padres de la Iglesia

## Qué es este proyecto

Sitio web educativo-apologético en **HTML + CSS puro**, alojado en **GitHub Pages**.

Presenta el debate entre el Dr. Dante Urbina (postura católica) y el Sr. Edgar Pacheco (postura evangélica) sobre si existe evidencia de la transubstanciación en los Padres de la Iglesia. El sitio tiene una tesis clara: **los argumentos de Urbina están mejor sustentados**. Para ser creíble, presenta los argumentos de Pacheco con fidelidad antes de responderlos.

El contenido (citas, argumentos, links, explicaciones) lo provee el usuario progresivamente. Claude construye estructura, diseño e interactividad. **Nunca inventar contenido, citas ni fuentes.**

## Stack

- HTML5 semántico
- CSS3 con custom properties (sin frameworks)
- Sin JavaScript (HTML + CSS puro)
- GitHub Pages: todo desde la raíz, sin build step
- CDN: Google Fonts, Tabler Icons

## Estructura de archivos

```
/
├── index.html
├── css/
│   ├── main.css       # variables, reset, tipografía, layout
│   ├── debate.css     # componentes: conflictos, argumentos, objeciones
│   └── videos.css     # componentes: sección de videos
└── assets/
```

## Secciones del sitio (en orden)

### 1. Hero
- Título del debate y tesis del sitio
- Presentación breve de los dos debatientes: Dr. Dante Urbina y Sr. Edgar Pacheco
- Qué está en juego en el debate

### 2. Contexto
- Qué es la transubstanciación (definición simple)
- Por qué importa la evidencia patrística
- Qué son los Padres de la Iglesia y por qué su testimonio es relevante

### 3. Puntos de conflicto
- Los 3 grandes ejes del debate presentados de forma justa:
  1. Definición de "consenso" (moral vs. unánime)
  2. Interpretación de términos griegos/latinos (metabole, conversio)
  3. Desarrollo doctrinal vs. innovación posterior

### 4. Los argumentos de Urbina sustentados (10 argumentos)
- Grid de tiles compactos (4 col desktop / 2 col tablet-mobile)
- Cada tile: número + avatar + palabra clave (ej. "Afirmaciones", "Sustancia")
- Al hacer clic en un tile, se despliega un panel a todo el ancho con el contenido completo
- Panel contiene: citas reales de los Padres, razonamiento, contraparte de Pacheco, links a fuentes

### 5. Las objeciones de Pacheco respondidas (7 objeciones)
- Mismo patrón de grid + paneles que sección 4, con identidad de color rojo/--color-pacheco
- Cada objeción presentada con fidelidad, seguida de la respuesta de Urbina
- Incluye el caso Gelasio I y el argumento del anacronismo

### 6. Conclusión
- Síntesis de por qué los argumentos de Urbina prevalecen
- Tarjetas colapsables (`<details>/<summary>`) con argumentos clave

### 7. Videos del Debate
- Video principal del debate (protagonista)
- Tres grupos colapsables: Respuestas de Urbina, Pacheco, Terceros
- Miniaturas YouTube con links directos

### 8. Biblioteca
- Libros recomendados: 4 títulos con portada, autor y link a Amazon MX
- Documentos de la Iglesia: 5 documentos papales con foto del autor y link al Vaticano

## Diseño

Usar skill `frontend-design` antes de escribir CSS. Estética académica y editorial — no genérica.

```css
:root {
  --color-bg: #F7F5F0;
  --color-urbina: #1B4F8A;      /* azul — postura católica */
  --color-urbina-light: #E8EFF8;
  --color-pacheco: #7A2E2E;     /* rojo oscuro — postura evangélica */
  --color-pacheco-light: #F5EAEA;
  --color-accent: #C4922A;      /* dorado — acentos, highlights */
  --color-text: #1A1814;
  --color-text-muted: #6B6560;
}
```

## Interactividad (sin JavaScript)

Toda la interactividad es CSS puro:

- **Secciones 4 y 5 — tiles + paneles `:target`**: cada tile es un `<a href="#arg-N">` o `<a href="#obj-N">`. El panel de detalle (`.detalle`) vive fuera del grid y se muestra solo cuando es el `:target`. Cierre con `href="#cerrado"` (id inexistente → ningún `:target` → panel oculto). Esto evita que el grid cambie de altura al abrir un panel.
- **Sección 6 (Conclusión) y 7 (Videos)**: `<details>/<summary>` para grupos colapsables.
- Hover effects, transiciones CSS, `:has()` para resaltar el tile activo.
- Media queries para responsividad.

## Reglas

- Mobile-first, responsive desde 375px
- `lang="es"` en el `<html>`
- ARIA labels en elementos interactivos
- `prefers-reduced-motion` respetado
- Colores siempre desde variables CSS
- Los argumentos de Pacheco se presentan con fidelidad antes de responderlos
- Solo usar contenido que provea el usuario — nunca inventar citas ni fuentes

## SEO: Todo es HTML estático

Todas las secciones son HTML estático puro en `index.html`. No hay generación dinámica ni inyección de contenido. Buscadores ven el 100% del contenido sin necesidad de ejecutar JavaScript.
