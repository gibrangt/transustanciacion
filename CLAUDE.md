# CLAUDE.md — Sitio apologético: La Transubstanciación en los Padres de la Iglesia

## Qué es este proyecto

Sitio web educativo-apologético en **HTML + CSS + JS vanilla**, alojado en **GitHub Pages**.

Presenta el debate entre el Dr. Dante Urbina (postura católica) y el Sr. Edgar Pacheco (postura evangélica) sobre si existe evidencia de la transubstanciación en los Padres de la Iglesia. El sitio tiene una tesis clara: **los argumentos de Urbina están mejor sustentados**. Para ser creíble, presenta los argumentos de Pacheco con fidelidad antes de responderlos.

El contenido (citas, argumentos, links, explicaciones) lo provee el usuario progresivamente. Claude construye estructura, diseño e interactividad. **Nunca inventar contenido, citas ni fuentes.**

## Stack

- HTML5 semántico
- CSS3 con custom properties (sin frameworks)
- JavaScript ES6+ vanilla (sin React, Vue, ni jQuery)
- GitHub Pages: todo desde la raíz, sin build step
- CDN: Google Fonts, Tabler Icons, GSAP (scrollytelling)

## Estructura de archivos

```
/
├── index.html
├── css/
│   ├── main.css       # variables, reset, tipografía, layout
│   └── debate.css     # componentes específicos
├── js/
│   ├── data.js        # contenido: argumentos, citas, fuentes, links
│   └── app.js         # interactividad
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

### 4. Los argumentos de Urbina sustentados
- Argumento por argumento con sus citas reales de los Padres
- Links a fuentes primarias verificables (newadvent.org, tertullian.org, ccel.org)
- Explicación de por qué cada argumento es sólido

### 5. Las objeciones de Pacheco respondidas
- Cada objeción presentada con fidelidad
- Respuesta desde la postura católica
- Incluye el caso Gelasio I y el argumento del anacronismo

### 6. Fuentes y recursos
- Fuentes primarias con links directos
- Fuentes secundarias citadas en el debate
- Para seguir estudiando

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

## Scrollytelling

Usar skill `scrollytelling` para:
- Sección 3 (puntos de conflicto): cada eje aparece al hacer scroll
- Sección 4 (argumentos): el argumento visual se queda fijo mientras la explicación scrollea

## Estructura de data.js

```javascript
const DEBATE_DATA = {
  debatientes: {
    urbina: { nombre: '', titulo: '', postura: '' },
    pacheco: { nombre: '', titulo: '', postura: '' }
  },
  conflictos: [
    // { id, titulo, urbina: '', pacheco: '' }
  ],
  argumentos_urbina: [
    // { id, titulo, padre, cita, fuente, link, explicacion, solidez }
  ],
  objeciones_pacheco: [
    // { id, titulo, objecion, respuesta_catolica, fuente }
  ],
  fuentes: {
    primarias: [], // { autor, obra, link }
    secundarias: []
  }
};
```

## Reglas

- Mobile-first, responsive desde 375px
- `lang="es"` en el `<html>`
- ARIA labels en elementos interactivos
- `prefers-reduced-motion` respetado
- Colores siempre desde variables CSS
- Los argumentos de Pacheco se presentan con fidelidad antes de responderlos
- Solo usar contenido que provea el usuario — nunca inventar citas ni fuentes
