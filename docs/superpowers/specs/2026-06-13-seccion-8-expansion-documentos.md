# Diseño: Expansión Sección 8 "Para profundizar" — Documentos Eclesiásticos

**Fecha:** 2026-06-13  
**Autor:** Claude  
**Estado:** Diseño aprobado

---

## 1. Visión general

Expandir la Sección 8 "Para profundizar" (actual: biblioteca de 4 libros) para incluir una segunda subsección con 5 documentos eclesiásticos (encíclicas y cartas apostólicas) de diferentes Papas. Mantener el diseño compacto actual.

**Estructura final:**
- Sección 8 = Encabezado principal + Intro
  - Subsección A: "Libros recomendados" (4 libros existentes)
  - Subsección B: "Documentos de la Iglesia" (5 documentos nuevos)

---

## 2. Documentos a agregar

| # | Documento | Papa | Fecha | URL Vatican | Foto Papa |
|---|-----------|------|-------|-------------|-----------|
| 1 | Mysterium Fidei | Pablo VI | 3 sept 1965 | https://www.vatican.va/content/paul-vi/es/encyclicals/documents/hf_p-vi_enc_03091965_mysterium.html | https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Pope_Paul_VI_1969_Portrait_%284x5_cropped%29.jpg/250px-Pope_Paul_VI_1969_Portrait_%284x5_cropped%29.jpg |
| 2 | Ecclesia de Eucharistia | Juan Pablo II | 17 abr 2003 | https://www.vatican.va/content/john-paul-ii/es/encyclicals/documents/hf_jp-ii_enc_20030417_eccl-de-euch.html | https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/ADAMELLO_-_PAPA_-_Giovanni_Paolo_II_-_panoramio_%28cropped%29.jpg/250px-ADAMELLO_-_PAPA_-_Giovanni_Paolo_II_-_panoramio_%28cropped%29.jpg |
| 3 | Mane Nobiscum Domine | Juan Pablo II | 7 oct 2004 | https://www.vatican.va/content/john-paul-ii/es/apost_letters/2004/documents/hf_jp-ii_apl_20041008_mane-nobiscum-domine.html | (misma que #2) |
| 4 | Sacramentum Caritatis | Benedicto XVI | 22 feb 2007 | https://www.vatican.va/content/benedict-xvi/es/apost_exhortations/documents/hf_ben-xvi_exh_20070222_sacramentum-caritatis.html | https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Benedykt_XVI_%282010-10-17%29_2.jpg/250px-Benedykt_XVI_%282010-10-17%29_2.jpg |
| 5 | Audiencia General | Papa Francisco | 21 mar 2018 | https://www.vatican.va/content/francesco/es/audiences/2018/documents/papa-francesco_20180321_udienza-generale.html | https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Pope_Francis_Korea_Haemi_Castle_19_%284x5_cropped%29.jpg/250px-Pope_Francis_Korea_Haemi_Castle_19_%284x5_cropped%29.jpg |

---

## 3. Estructura HTML

### 3.1 Sección principal (sin cambios)
```html
<section class="biblioteca" id="biblioteca">
  <div class="section-head">
    <span class="section-head__num">08</span>
    <p class="kicker">Profundización académica</p>
    <h2 class="section-head__title">Para profundizar</h2>
    <p class="section-head__lead">
      Esta bibliografía completa y sustenta los argumentos presentados en el debate,
      ofreciendo perspectivas católicas profundas sobre la Eucaristía, la presencia real
      y la transustanciación.
    </p>
  </div>

  <!-- SUBSECCIÓN 1: LIBROS -->
  <h3 class="biblioteca__subtitle">Libros recomendados</h3>
  <div class="biblioteca__grid">
    <!-- 4 libro-card existentes (sin cambios) -->
  </div>

  <!-- SUBSECCIÓN 2: DOCUMENTOS -->
  <h3 class="biblioteca__subtitle">Documentos de la Iglesia</h3>
  <div class="biblioteca__grid">
    <!-- 5 documento-card (nuevo) -->
  </div>
</section>
```

### 3.2 Tarjeta de documento (idéntica a libro-card en estructura)
```html
<a href="[URL-Vatican]" class="libro-card" target="_blank" rel="noopener noreferrer" aria-label="[Título documento], por [Papa]. Abre en nueva pestaña">
  <img src="[URL-Foto-Papa]" alt="Foto: [Papa]" class="libro-card__portada" />
  <h3 class="libro-card__titulo">[Título documento]</h3>
  <p class="libro-card__autor">[Nombre Papa]</p>
</a>
```

---

## 4. Estilos CSS

### 4.1 Nuevo: `.biblioteca__subtitle`

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

**Ubicación:** Antes de `.biblioteca__grid` en `css/debate.css`

### 4.2 Reutilización de CSS existente

- `.biblioteca__grid` → usa la misma clase (4 col desktop, 1 móvil)
- `.libro-card`, `.libro-card__portada`, `.libro-card__titulo`, `.libro-card__autor` → reutilizan sin cambios
- Transiciones y hover effects → idénticos (brightness + scale en imagen)

**No hay nuevas reglas CSS para tarjetas.** Solo el subheader es nuevo.

---

## 5. Estructura de archivos

```
index.html
  └─ Sección 8 expandida:
      ├─ section-head (existente)
      ├─ h3.biblioteca__subtitle "Libros recomendados"
      ├─ div.biblioteca__grid (4 libro-card existentes)
      ├─ h3.biblioteca__subtitle "Documentos de la Iglesia"
      └─ div.biblioteca__grid (5 documento-card nuevos)

css/debate.css
  └─ Nueva regla: .biblioteca__subtitle
```

---

## 6. Responsividad

| Breakpoint | Libros | Documentos | Comportamiento |
|-----------|--------|-----------|----------------|
| Mobile (<768px) | 1 col | 1 col | Stacked vertical, uno debajo del otro |
| Desktop (≥768px) | 4 col | 4 col | Grid de 4 columnas ambos |

**Subheaders:** No cambian, escalan fluidamente con `--step-1`

---

## 7. Accesibilidad

- **Alt text en imágenes:** `alt="Foto: [Papa]"` (descriptivo)
- **aria-label en links:** `"[Título documento], por [Papa]. Abre en nueva pestaña"`
- **Focus visible:** Heredado de `.libro-card:focus-visible` (outline dorado)
- **Semántica:** `<h3>` para subheaders (jerarquía clara)

---

## 8. Datos de las URLs

**Links a Vatican.va:** Sin modificación de parámetros (como con Amazon)

**Fotos de Papas:** URLs directas de Wikimedia Commons (públicas, sin descarga local)

---

## 9. Checklist de implementación

- [ ] Agregar 2 `<h3 class="biblioteca__subtitle">` en HTML
- [ ] Agregar 5 `documento-card` (mismo HTML que libro-card)
- [ ] Agregar CSS para `.biblioteca__subtitle`
- [ ] Verificar responsividad (mobile + desktop)
- [ ] Verificar accesibilidad (alt text, aria-label, focus)
- [ ] Verificar links (abren en nueva pestaña)
- [ ] Commit

---

## 10. Notas técnicas

- **Sin JavaScript:** Todo CSS puro (como el resto del sitio)
- **Reutilización máxima:** La CSS de `.libro-card` funciona para documentos sin modificación
- **Compacidad mantenida:** 4 columnas desktop, gaps y padding igual a libros
- **Fotos de Papas:** Max-width 160px (heredado de `.libro-card__portada`)
