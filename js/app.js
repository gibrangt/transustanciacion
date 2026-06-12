/* ============================================================================
   app.js — renderizado mínimo de datos dinámicos (sin interactividad)
   - Lee window.DEBATE_DATA (js/data.js)
   - Renderiza hero, conflictos y fuentes
   - TODO lo demás es CSS puro (details, reveal, scroll suave, menú móvil)
   ========================================================================== */
(function () {
  'use strict';

  const DATA = window.DEBATE_DATA;

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const el = (tag, cls, html) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html != null) node.innerHTML = html;
    return node;
  };
  const isEmpty = (v) => !v || !String(v).trim();

  /* ─────────────────────────────────────────────────────────
     1 · HERO
     ───────────────────────────────────────────────────────── */
  function renderHero() {
    $('#hero-subtitle').textContent = DATA.meta.subtitulo;
    $('#hero-tesis').textContent = DATA.meta.tesis;
  }

  /* ─────────────────────────────────────────────────────────
     3 · CONFLICTOS
     ───────────────────────────────────────────────────────── */
  function renderConflictos() {
    const list = $('#conflictos-list');
    DATA.conflictos.forEach((c) => {
      const node = el('article', 'conflicto');
      node.id = `conflicto-${c.id}`;
      node.innerHTML = `
        <div class="conflicto__index" aria-hidden="true">${String(c.n).padStart(2, '0')}</div>
        <div class="conflicto__body">
          <h3 class="conflicto__titulo">${c.titulo}</h3>
          <p class="conflicto__pregunta">${c.pregunta}</p>
          <div class="conflicto__caras">
            <div class="cara cara--urbina">
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <img
                  src="assets/images/urbina.jpg"
                  alt="Dr. Dante Urbina"
                  class="avatar-small avatar-urbina"
                />
                <p class="cara__quien">${DATA.debatientes.urbina.nombre}</p>
              </div>
              <p class="cara__texto">${c.urbina}</p>
            </div>
            <div class="cara cara--pacheco">
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <img
                  src="assets/images/pacheco.jpg"
                  alt="Sr. Edgar Pacheco"
                  class="avatar-small avatar-pacheco"
                />
                <p class="cara__quien">${DATA.debatientes.pacheco.nombre}</p>
              </div>
              <p class="cara__texto">${c.pacheco}</p>
            </div>
          </div>
        </div>`;
      list.appendChild(node);
    });
  }

  /* ─────────────────────────────────────────────────────────
     6 · FUENTES
     ───────────────────────────────────────────────────────── */
  function fuenteItem(f) {
    const nombre = f.nombre || [f.autor, f.obra].filter(Boolean).join(' — ') || 'Fuente';
    const link = isEmpty(f.link)
      ? `<span class="fuente-item__link-pendiente">link por añadir</span>`
      : `<a href="${f.link}" target="_blank" rel="noopener noreferrer">Ver fuente <i class="ti ti-external-link" aria-hidden="true"></i></a>`;
    const li = el('li', 'fuente-item');
    li.innerHTML = `<p class="fuente-item__nombre">${nombre}</p>${link}`;
    return li;
  }

  function renderFuentes() {
    const map = [
      ['#fuentes-primarias', DATA.fuentes.primarias],
      ['#fuentes-secundarias', DATA.fuentes.secundarias],
      ['#fuentes-repositorios', DATA.fuentes.repositorios]
    ];
    map.forEach(([sel, arr]) => {
      const ul = $(sel);
      if (!ul) return;
      if (!arr || arr.length === 0) {
        ul.appendChild(el('li', 'fuentes__empty', 'Por completar.'));
        return;
      }
      arr.forEach((f) => ul.appendChild(fuenteItem(f)));
    });
  }

  /* ─────────────────────────────────────────────────────────
     Utilidades CSS-only: asegurar que los reveals sean visibles
     ───────────────────────────────────────────────────────── */
  function initReveal() {
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('is-visible');
    });
  }

  /* ─────────────────────────────────────────────────────────
     Init
     ───────────────────────────────────────────────────────── */
  function init() {
    if (!DATA) {
      console.error('[app] No se encontró DEBATE_DATA. ¿Cargó js/data.js antes que app.js?');
      return;
    }
    renderHero();
    renderConflictos();
    renderFuentes();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
