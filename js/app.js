/* ============================================================================
   app.js — renderizado del contenido + interactividad
   - Lee window.DEBATE_DATA (js/data.js)
   - Scrollytelling con GSAP ScrollTrigger (secciones 3 y 4)
   - Respeta prefers-reduced-motion y degrada con fallback
   ========================================================================== */
(function () {
  'use strict';

  const DATA = window.DEBATE_DATA;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

  /* ── Utilidades ── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const el = (tag, cls, html) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html != null) node.innerHTML = html;
    return node;
  };
  // Marca de posición para campos aún vacíos (citas/fuentes/links).
  const isEmpty = (v) => !v || !String(v).trim();

  /* ─────────────────────────────────────────────────────────
     1 · HERO
     ───────────────────────────────────────────────────────── */
  function renderHero() {
    $('#hero-subtitle').textContent = DATA.meta.subtitulo;
    $('#hero-tesis').textContent = DATA.meta.tesis;

    const { urbina, pacheco } = DATA.debatientes;
    const lado = (d, mod) => `
      <div class="duelo__lado duelo__lado--${mod}">
        <span class="duelo__bando">Postura ${d.bando}</span>
        <span class="duelo__nombre">${d.nombre}</span>
        <span class="duelo__postura">${d.postura}</span>
      </div>`;
    $('#duelo').innerHTML =
      lado(urbina, 'urbina') +
      '<div class="duelo__vs" aria-hidden="true">vs</div>' +
      lado(pacheco, 'pacheco');
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
              <p class="cara__quien">${DATA.debatientes.urbina.nombre}</p>
              <p class="cara__texto">${c.urbina}</p>
            </div>
            <div class="cara cara--pacheco">
              <p class="cara__quien">${DATA.debatientes.pacheco.nombre}</p>
              <p class="cara__texto">${c.pacheco}</p>
            </div>
          </div>
        </div>`;
      list.appendChild(node);
    });
  }

  /* ─────────────────────────────────────────────────────────
     4 · ARGUMENTOS (sticky scrollytelling)
     ───────────────────────────────────────────────────────── */
  function figureMarkup(a) {
    const cita = isEmpty(a.cita)
      ? `<p class="arg-figure__cita arg-figure__cita--vacia">«Cita patrística por incorporar»</p>`
      : `<blockquote class="arg-figure__cita">${a.cita}</blockquote>`;
    const padre = isEmpty(a.padre)
      ? ''
      : `<p class="arg-figure__padre">${a.padre}</p>`;
    return `
      <span class="arg-figure__n" aria-hidden="true">${String(a.n).padStart(2, '0')}</span>
      <h3 class="arg-figure__titulo">${a.titulo}</h3>
      ${padre}
      ${cita}
      <p class="arg-figure__solidez"><b>Por qué es sólido</b>${a.solidez}</p>`;
  }

  function renderArgumentos() {
    const figureWrap = $('#argumento-figure');
    const steps = $('#argumentos-steps');

    DATA.argumentos_urbina.forEach((a, i) => {
      // Tarjeta fija (desktop): todas apiladas, se activa la que corresponde
      const fig = el('article', 'arg-figure');
      fig.id = `arg-figure-${i}`;
      fig.innerHTML = figureMarkup(a);
      if (i === 0) fig.classList.add('is-active');
      figureWrap.appendChild(fig);

      // Paso de texto
      const step = el('div', 'arg-step');
      step.id = `arg-step-${i}`;
      step.dataset.index = i;
      if (i === 0) step.classList.add('is-active');
      step.innerHTML = `
        <p class="arg-step__kicker">Argumento ${a.n} de ${DATA.argumentos_urbina.length}</p>
        <h3 class="arg-step__titulo">${a.titulo}</h3>
        ${isEmpty(a.padre) ? '' : `<p class="arg-step__padre">${a.padre}</p>`}
        <p class="arg-step__explicacion">${a.explicacion}</p>
        <div class="arg-step__figure-mobile">
          <article class="arg-figure">${figureMarkup(a)}</article>
        </div>`;
      steps.appendChild(step);
    });
  }

  function activateArgumento(index) {
    document.querySelectorAll('.scrolly__figure .arg-figure').forEach((f, i) =>
      f.classList.toggle('is-active', i === index)
    );
    document.querySelectorAll('.arg-step').forEach((s, i) =>
      s.classList.toggle('is-active', i === index)
    );
  }

  /* ─────────────────────────────────────────────────────────
     5 · OBJECIONES
     ───────────────────────────────────────────────────────── */
  function renderObjeciones() {
    const list = $('#objeciones-list');
    DATA.objeciones_pacheco.forEach((o) => {
      const respuesta = isEmpty(o.respuesta_catolica)
        ? `<p class="objecion__pendiente">Respuesta católica por redactar.</p>`
        : `<p class="objecion__texto">${o.respuesta_catolica}</p>`;
      const fuente = isEmpty(o.fuente)
        ? ''
        : `<div class="objecion__footer"><span class="fuente-tag"><i class="ti ti-quote" aria-hidden="true"></i>${o.fuente}</span></div>`;

      const node = el('article', 'objecion');
      node.id = `objecion-${o.id}`;
      node.innerHTML = `
        <div class="objecion__head">
          <span class="objecion__n" aria-hidden="true">${String(o.n).padStart(2, '0')}</span>
          <h3 class="objecion__titulo">${o.titulo}</h3>
        </div>
        <div class="objecion__bloque objecion__bloque--pacheco">
          <p class="objecion__rol"><i class="ti ti-message-2" aria-hidden="true"></i>Objeción de ${DATA.debatientes.pacheco.nombre}</p>
          <p class="objecion__texto">${o.objecion}</p>
        </div>
        <div class="objecion__bloque objecion__bloque--respuesta">
          <p class="objecion__rol"><i class="ti ti-message-2-check" aria-hidden="true"></i>Respuesta católica</p>
          ${respuesta}
        </div>
        ${fuente}`;
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
      if (!arr || arr.length === 0) {
        ul.appendChild(el('li', 'fuentes__empty', 'Por completar.'));
        return;
      }
      arr.forEach((f) => ul.appendChild(fuenteItem(f)));
    });
  }

  /* ─────────────────────────────────────────────────────────
     Navegación: toggle móvil + estado scrolled
     ───────────────────────────────────────────────────────── */
  function initNav() {
    const nav = $('#site-nav');
    const toggle = $('#nav-toggle');
    const links = $('.site-nav__links');

    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.innerHTML = open
        ? '<i class="ti ti-x" aria-hidden="true"></i>'
        : '<i class="ti ti-menu-2" aria-hidden="true"></i>';
    });
    links.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<i class="ti ti-menu-2" aria-hidden="true"></i>';
      }
    });

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          nav.classList.toggle('site-nav--scrolled', window.scrollY > 12);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─────────────────────────────────────────────────────────
     Barra de progreso de lectura
     ───────────────────────────────────────────────────────── */
  function initProgressBar() {
    const bar = $('#progress-bar');
    let ticking = false;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const ratio = max > 0 ? h.scrollTop / max : 0;
      bar.style.transform = `scaleX(${ratio})`;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ─────────────────────────────────────────────────────────
     Reveal genérico (IntersectionObserver) para .reveal
     ───────────────────────────────────────────────────────── */
  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (prefersReducedMotion) {
      items.forEach((i) => i.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          // stagger leve según orden de entrada
          entry.target.style.transitionDelay = `${(idx % 3) * 90}ms`;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach((i) => io.observe(i));
  }

  /* ─────────────────────────────────────────────────────────
     Scrollytelling sección 3 (reveal progresivo de conflictos)
     ───────────────────────────────────────────────────────── */
  function initConflictosScroll() {
    const conflictos = document.querySelectorAll('.conflicto');
    if (prefersReducedMotion) {
      conflictos.forEach((c) => c.classList.add('is-in'));
      return;
    }
    if (hasGSAP) {
      conflictos.forEach((c) => {
        window.ScrollTrigger.create({
          trigger: c,
          start: 'top 80%',
          onEnter: () => c.classList.add('is-in'),
          once: true
        });
      });
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.2 });
      conflictos.forEach((c) => io.observe(c));
    }
  }

  /* ─────────────────────────────────────────────────────────
     Scrollytelling sección 4 (sticky: paso activo)
     ───────────────────────────────────────────────────────── */
  function initArgumentosScroll() {
    const steps = document.querySelectorAll('.arg-step');
    const isDesktop = window.matchMedia('(min-width: 861px)').matches;

    // En móvil todo se muestra apilado; no hace falta tracking.
    if (!isDesktop || prefersReducedMotion) {
      activateArgumento(0);
      return;
    }
    if (hasGSAP) {
      steps.forEach((step, i) => {
        window.ScrollTrigger.create({
          trigger: step,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => activateArgumento(i),
          onEnterBack: () => activateArgumento(i)
        });
      });
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) activateArgumento(Number(e.target.dataset.index));
        });
      }, { threshold: 0.5 });
      steps.forEach((s) => io.observe(s));
    }
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
    renderArgumentos();
    renderObjeciones();
    renderFuentes();

    initNav();
    initProgressBar();
    initReveal();
    initConflictosScroll();
    initArgumentosScroll();

    // Recalcular triggers si cambia el tamaño (desktop ⇄ móvil).
    if (hasGSAP) {
      let rt;
      window.addEventListener('resize', () => {
        clearTimeout(rt);
        rt = setTimeout(() => window.ScrollTrigger.refresh(), 200);
      }, { passive: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
