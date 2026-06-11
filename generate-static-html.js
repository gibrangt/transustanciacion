/**
 * generate-static-html.js
 * Genera HTML estático a partir de data.js para SEO
 *
 * Uso: node generate-static-html.js > static-output.html
 * Copia el output a index.html en los contenedores #argumentos-extra y #objeciones-extra
 */

const fs = require('fs');

// Leer data.js como string puro
const dataFile = fs.readFileSync('./js/data.js', 'utf-8');

// Extraer la declaración de DEBATE_DATA (sin la línea window.DEBATE_DATA)
const dataMatch = dataFile.match(/const DEBATE_DATA = \{[\s\S]*?\n\};/);
if (!dataMatch) {
  console.error('❌ Error: No se pudo extraer DEBATE_DATA de data.js');
  process.exit(1);
}

let DEBATE_DATA;
try {
  // Ejecutar en un contexto donde DEBATE_DATA esté definido
  const result = new Function(dataMatch[0] + '; return DEBATE_DATA;')();
  DEBATE_DATA = result;
} catch (e) {
  console.error('❌ Error al evaluar DEBATE_DATA:', e.message);
  process.exit(1);
}

if (!DEBATE_DATA) {
  console.error('❌ DEBATE_DATA is undefined');
  process.exit(1);
}

const isEmpty = (v) => !v || !String(v).trim();

function generateArgumentoHTML(a) {
  let contenido = '';

  if (a.secciones && a.secciones.length > 0) {
    contenido = a.secciones
      .map((s) => {
        const intro = isEmpty(s.intro) ? '' : `<p class="arg-card__sec-intro">${s.intro}</p>`;
        const puntos = (s.puntos || [])
          .map(
            (p) => `<li class="arg-card__punto">
              <span class="arg-card__punto-label">${p.label}</span> ${p.texto}
            </li>`
          )
          .join('');
        return `
            <div class="arg-card__sec">
              <h4 class="arg-card__sec-titulo">${s.titulo}</h4>
              ${intro}
              ${puntos ? `<ul class="arg-card__puntos">${puntos}</ul>` : ''}
            </div>`;
      })
      .join('');
  } else if (!isEmpty(a.descripcion)) {
    contenido = `<p class="arg-card__descripcion">${a.descripcion}</p>`;
  }

  const conclusion = isEmpty(a.conclusion)
    ? ''
    : `<p class="arg-card__conclusion"><b>Conclusión del argumento</b>${a.conclusion}</p>`;

  const fuente = isEmpty(a.link)
    ? isEmpty(a.fuente)
      ? `<span class="fuente-tag fuente-tag--pendiente"><i class="ti ti-link" aria-hidden="true"></i>Fuente por añadir</span>`
      : `<span class="fuente-tag"><i class="ti ti-quote" aria-hidden="true"></i>${a.fuente}</span>`
    : `<a class="arg-card__fuente" href="${a.link}" target="_blank" rel="noopener noreferrer">
        <i class="ti ti-external-link" aria-hidden="true"></i>
        ${isEmpty(a.fuente) ? 'Ver fuente' : a.fuente}
      </a>`;

  return `    <details class="arg-card reveal" id="arg-card-${a.id}">
      <summary class="arg-card__summary">
        <span class="arg-card__n" aria-hidden="true">${String(a.n).padStart(2, '0')}</span>
        <span class="arg-card__head">
          <span class="arg-card__kicker">Argumento ${a.n}</span>
          <span class="arg-card__titulo">${a.titulo}</span>
          ${isEmpty(a.padre) ? '' : `<span class="arg-card__padre">${a.padre}</span>`}
        </span>
        <i class="ti ti-chevron-down arg-card__chevron" aria-hidden="true"></i>
      </summary>
      <div class="arg-card__body">
        ${isEmpty(a.intro) ? '' : `<p class="arg-card__intro">${a.intro}</p>`}
        ${contenido}
        ${conclusion}
        ${fuente ? `<div class="arg-card__footer">${fuente}</div>` : ''}
      </div>
    </details>`;
}

function generateObjecionHTML(o) {
  let contenido = '';

  if (o.secciones && o.secciones.length > 0) {
    contenido = o.secciones
      .map((s) => {
        const intro = isEmpty(s.intro) ? '' : `<p class="objecion-card__sec-intro">${s.intro}</p>`;
        const puntos = (s.puntos || [])
          .map(
            (p) => `<li class="objecion-card__punto">
              <span class="objecion-card__punto-label">${p.label}</span> ${p.texto}
            </li>`
          )
          .join('');
        return `
            <div class="objecion-card__sec">
              <h4 class="objecion-card__sec-titulo">${s.titulo}</h4>
              ${intro}
              ${puntos ? `<ul class="objecion-card__puntos">${puntos}</ul>` : ''}
            </div>`;
      })
      .join('');
  } else if (!isEmpty(o.descripcion)) {
    contenido = `<p class="objecion-card__descripcion">${o.descripcion}</p>`;
  }

  const fuente = isEmpty(o.link)
    ? isEmpty(o.fuente)
      ? `<span class="fuente-tag fuente-tag--pendiente"><i class="ti ti-link" aria-hidden="true"></i>Fuente por añadir</span>`
      : `<span class="fuente-tag"><i class="ti ti-quote" aria-hidden="true"></i>${o.fuente}</span>`
    : `<a class="objecion-card__fuente" href="${o.link}" target="_blank" rel="noopener noreferrer">
        <i class="ti ti-external-link" aria-hidden="true"></i>
        ${isEmpty(o.fuente) ? 'Ver fuente' : o.fuente}
      </a>`;

  return `    <details class="objecion-card reveal" id="objecion-card-${o.id}">
      <summary class="objecion-card__summary">
        <span class="objecion-card__n" aria-hidden="true">${String(o.n).padStart(2, '0')}</span>
        <span class="objecion-card__head">
          <span class="objecion-card__kicker">Objeción ${o.n}</span>
          <span class="objecion-card__titulo">${o.titulo}</span>
          ${isEmpty(o.padre) ? '' : `<span class="objecion-card__padre">${o.padre}</span>`}
        </span>
        <i class="ti ti-chevron-down objecion-card__chevron" aria-hidden="true"></i>
      </summary>
      <div class="objecion-card__body">
        ${isEmpty(o.intro) ? '' : `<p class="objecion-card__intro">${o.intro}</p>`}
        ${contenido}
        ${fuente ? `<div class="objecion-card__footer">${fuente}</div>` : ''}
      </div>
    </details>`;
}

// Generar HTML
console.log('<!-- ══════════════════════════════════════════════════════════');
console.log('     ARGUMENTOS DE URBINA - HTML estático para SEO');
console.log('     Copia esto dentro de: <div id="argumentos-extra">');
console.log('     ═════════════════════════════════════════════════════════ -->');
console.log('');

const argumentosHTML = DEBATE_DATA.argumentos_urbina_extendidos
  .map(a => generateArgumentoHTML(a))
  .join('\n');
console.log(argumentosHTML);

console.log('');
console.log('');
console.log('<!-- ══════════════════════════════════════════════════════════');
console.log('     OBJECIONES DE PACHECO - HTML estático para SEO');
console.log('     Copia esto dentro de: <div id="objeciones-extra">');
console.log('     ═════════════════════════════════════════════════════════ -->');
console.log('');

const objecionesHTML = DEBATE_DATA.objeciones_pacheco
  .map(o => generateObjecionHTML(o))
  .join('\n');
console.log(objecionesHTML);

console.log('');
console.log('<!-- ✅ FIN DE HTML GENERADO -->');
