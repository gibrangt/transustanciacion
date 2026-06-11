/**
 * data.js — Contenido del debate sobre la transustanciación en los Padres de la Iglesia.
 *
 * REGLA DEL PROYECTO: nunca inventar citas ni fuentes.
 * Los campos `cita`, `fuente` y `link` quedan VACÍOS a propósito —
 * se llenan después con texto verificable de fuentes primarias
 * (newadvent.org, tertullian.org, ccel.org).
 *
 * Lo que sí está poblado son los argumentos, objeciones y ejes de conflicto
 * tal como los resumió el usuario.
 */

const DEBATE_DATA = {
  meta: {
    titulo: 'La Transustanciación en los Padres de la Iglesia',
    subtitulo: '¿Hay evidencia patrística del cambio de sustancia?',
    tesis: 'Examinando ambas posturas con fidelidad, los argumentos del Dr. Urbina resultan mejor sustentados.'
  },

  debatientes: {
    urbina: {
      nombre: 'Dr. Dante Urbina',
      titulo: '', // (lo completaremos después)
      bando: 'católica',
      postura:
        'Aunque la palabra «transustanciación» es posterior, la idea y la doctrina ' +
        'están presentes en los Padres desde los primeros siglos.'
    },
    pacheco: {
      nombre: 'Sr. Edgar Pacheco',
      titulo: '', // (lo completaremos después)
      bando: 'evangélica',
      postura:
        'La transustanciación es un desarrollo metafísico occidental posterior (s. XI en adelante) ' +
        'que no goza de un consenso unánime, antiguo ni explícito en la patrística.'
    }
  },

  // ── Sección 3 ───────────────────────────────────────────────────────────
  // Los 3 grandes ejes del debate, presentados de forma justa.
  conflictos: [
    {
      id: 'consenso',
      n: 1,
      titulo: 'La definición de «consenso»',
      pregunta: '¿Qué hace falta para hablar de un consenso de los Padres?',
      urbina:
        'Apela a un consenso moral: basta un número suficiente de citas convergentes ' +
        'para inferir legítimamente que la doctrina ya se profesaba.',
      pacheco:
        'Exige un consenso unánime y explícito, según los propios criterios del catolicismo ' +
        '(el canon de San Vicente de Lerins: lo creído «en todas partes, siempre y por todos»).'
    },
    {
      id: 'terminos',
      n: 2,
      titulo: 'La interpretación de los términos',
      pregunta: '¿Qué significaban realmente las palabras de los Padres?',
      urbina:
        'Términos griegos y latinos como metabolé y conversio implican una conversión real, ' +
        'un cambio en lo que el objeto es —es decir, en su sustancia.',
      pacheco:
        'Esos mismos términos pueden denotar un cambio sacramental o de uso, no necesariamente ' +
        'un cambio de sustancia en sentido aristotélico.'
    },
    {
      id: 'desarrollo',
      n: 3,
      titulo: 'Desarrollo doctrinal vs. innovación',
      pregunta: '¿Es la transustanciación un desarrollo de la fe o un cambio de ella?',
      urbina:
        'La doctrina se aclara y precisa con el tiempo, igual que ocurrió con el dogma de la Trinidad: ' +
        'el lenguaje madura, pero la fe es la misma.',
      pacheco:
        'La transustanciación es un cambio sustancial respecto de la fe original, no un simple ' +
        'desarrollo: introduce categorías ausentes en la Iglesia antigua.'
    }
  ],

  // ── Sección 4 (Eliminado) ────────────────────────────────────────────────────────
  // Los argumentos breves del scrollytelling han sido reemplazados por
  // argumentos_urbina_extendidos, que contiene los 10 argumentos numerados.
  argumentos_urbina: [],

  // ── Sección 4 (cont.) ─────────────────────────────────────────────────────
  // 10 argumentos de Urbina como tarjetas expandibles.
  // Numeración según Dr. Dante Urbina. El texto se reproduce literal del usuario.
  // Argumentos 1-5, 7-10 usan los resúmenes recibidos.
  // Argumento 6 es la versión detallada ya proporcionada.
  argumentos_urbina_extendidos: [
    {
      id: 'afirmaciones-patrísticas',
      n: 1,
      titulo: 'Afirmaciones patrísticas directas',
      padre: 'San Ignacio de Antioquía · San Efrén el Sirio · San Agustín · San Cirilo de Alejandría · San Juan Damasceno',
      intro:
        'Sostiene que, aunque no usaron la palabra técnica, los Padres expresaron la idea de un cambio en "lo que es" el pan y el vino.',
      descripcion:
        'Cita a San Ignacio de Antioquía, San Efrén el Sirio, San Agustín, San Cirilo de Alejandría y San Juan Damasceno ' +
        'para mostrar que hablaban del pan convirtiéndose verdaderamente en la carne de Cristo.',
      fuente: '',
      link: ''
    },
    {
      id: 'sustancia-especies',
      n: 2,
      titulo: 'La distinción entre sustancia y especies',
      padre: 'San Cirilo de Jerusalén · San Agustín',
      intro: 'Argumenta que los Padres distinguían entre la apariencia visible y la realidad invisible.',
      descripcion:
        'Menciona a San Cirilo de Jerusalén, quien afirmaba que el "aparente pan no es pan", y a San Agustín, ' +
        'quien distinguía lo que se ve de lo que es la sustancia.',
      fuente: '',
      link: ''
    },
    {
      id: 'transustanciacion-conversion',
      n: 3,
      titulo: 'La transustanciación implica conversión',
      padre: 'Múltiples Padres (siglos I-V)',
      intro:
        'Indica que los Padres utilizaron términos que implican una conversión real de los elementos (como metabole o transformación).',
      descripcion:
        'Cita a una larga lista de autores de oriente y occidente entre los siglos I y V que empleaban este lenguaje de conversión.',
      fuente: '',
      link: ''
    },
    {
      id: 'analogias-eucaristicas',
      n: 4,
      titulo: 'Las analogías eucarísticas',
      padre: 'Múltiples Padres',
      intro: 'Señala que los Padres usaron comparaciones que solo tienen sentido si hay un cambio sustancial.',
      descripcion:
        'Ejemplos: la vara de Moisés convertida en serpiente, o el agua convertida en vino en las bodas de Caná. ' +
        'Estas analogías implican cambio de sustancia, no mera adición de propiedades.',
      fuente: '',
      link: ''
    },
    {
      id: 'interpretacion-realista',
      n: 5,
      titulo: 'La interpretación realista de las palabras de la última cena',
      padre: 'San Agustín · Múltiples Padres',
      intro:
        'Afirma que los Padres interpretaron "esto es mi cuerpo" de forma literal y realista, no puramente simbólica.',
      descripcion:
        'Menciona incluso que San Agustín decía que Cristo "se cargó a sí mismo en sus propias manos" durante la institución de la Eucaristía, ' +
        'indicando una presencia y cambio verdaderos, no figurados.',
      fuente: '',
      link: ''
    },
    {
      id: 'adoracion-agustin',
      n: 6,
      titulo: 'La Adoración Eucarística como prueba de la Transustanciación',
      padre: 'San Agustín',
      intro:
        'Este argumento se basa en la premisa de que la adoración (latría) solo es debida a Dios. ' +
        'Si los Padres de la Iglesia exigían adorar los elementos eucarísticos antes de recibirlos, ' +
        'esto implica que no creían que lo que estaba allí fuera simplemente pan, sino la sustancia misma de Cristo.',
      secciones: [
        {
          titulo: '1. El fundamento bíblico: El "Escabel de sus pies"',
          intro: 'San Agustín analiza el versículo: "Adorad el escabel de sus pies, porque es santo".',
          puntos: [
            {
              label: 'El dilema:',
              texto:
                'Dado que la Escritura dice que "la tierra es el escabel de mis pies" y que solo se debe adorar a Dios, ' +
                'Agustín se pregunta cómo es posible adorar la tierra (el escabel) sin caer en la impiedad.'
            },
            {
              label: 'La resolución:',
              texto:
                'La solución se encuentra en la Encarnación. Cristo tomó "tierra de la tierra" al recibir su carne de la Virgen María. ' +
                'Por tanto, al ser la carne de Cristo parte de su Persona Divina, esa "tierra" puede y debe ser adorada.'
            }
          ]
        },
        {
          titulo: '2. El vínculo con la Eucaristía',
          intro: 'Agustín conecta directamente esta adoración de la carne de Cristo con el sacramento:',
          puntos: [
            {
              label: 'Mandato de adoración:',
              texto: 'Afirma que Cristo "nos dio esa misma carne en alimento para nuestra salvación".'
            },
            {
              label: 'Necesidad de la adoración:',
              texto: 'Establece de forma contundente que "nadie come esta carne sin antes adorarla".'
            },
            {
              label: 'Implicación moral:',
              texto: 'Concluye que no solo no es pecado adorar la Eucaristía, sino que "pecaremos si no lo adoramos".'
            }
          ]
        },
        {
          titulo: '3. Naturaleza de la presencia (Realidad vs. Simbolismo)',
          intro:
            'Para responder a posibles objeciones sobre un "comensalismo carnal" (pensar que se corta el cuerpo en trozos), Agustín aclara:',
          puntos: [
            {
              label: 'Entendimiento Espiritual:',
              texto: 'Aunque el sacramento se celebra de forma visible, debe entenderse espiritualmente para que vivifique.'
            },
            {
              label: 'Más que un símbolo:',
              texto:
                'Sin embargo, esta "espiritualidad" no anula la realidad de la carne. Agustín enfatiza que la carne que se adora ' +
                'es la misma que Cristo "tomó de la tierra" y en la que "anduvo por el mundo".'
            }
          ]
        }
      ],
      conclusion:
        'El texto de San Agustín sobre el Salmo 98 demuestra que en el siglo V la adoración de la Eucaristía no era una opción, ' +
        'sino un requisito previo a la comunión, fundamentado en la identidad ontológica entre el sacramento y la carne nacida de María.',
      fuente: 'San Agustín · Enarraciones sobre los Salmos',
      link: 'https://www.augustinus.it/spagnolo/esposizioni_salmi/esposizione_salmo_119_testo.htm'
    },
    {
      id: 'concilios',
      n: 7,
      titulo: 'Las afirmaciones de los concilios',
      padre: 'Concilios de Nicea y Éfeso',
      intro:
        'Apela a los concilios de Nicea y Éfeso, argumentando que estos identificaban directamente la Eucaristía con el cuerpo de Cristo.',
      descripcion:
        'Estos concilios ecuménicos presentan testimonio del consenso patrístico temprano sobre la realidad de la presencia eucarística.',
      fuente: '',
      link: ''
    },
    {
      id: 'filosofos-protestantes',
      n: 8,
      titulo: 'Los mayores filósofos protestantes lo refutan',
      padre: 'William Lane Craig · Gottfried Leibniz',
      intro:
        'Utiliza argumentos inductivos citando a eruditos protestantes como William Lane Craig y Gottfried Leibniz.',
      descripcion:
        'Estos autores reconocen que los antiguos afirmaban un cambio de sustancia o que la doctrina estaba ya desarrollada en la patrística. ' +
        'Se trata de testigos sin interés confesional en favorecer a Roma, lo que refuerza la lectura católica.',
      fuente: '',
      link: ''
    },
    {
      id: 'historiador-protestante',
      n: 9,
      titulo: 'El mayor historiador eclesiástico protestante lo refuta',
      padre: 'Philip Schaff',
      intro: 'Cita a Philip Schaff, historiador eclesiástico protestante de reconocida autoridad.',
      descripcion:
        'Schaff admite que el período de los padres nicenos estaba fuertemente inclinado hacia la doctrina de la transustanciación, ' +
        'reconociendo así la antigüedad de esta creencia en la Iglesia antigua.',
      fuente: '',
      link: ''
    },
    {
      id: 'indefinicion-protestante',
      n: 10,
      titulo: 'La indefinición de la postura protestante',
      padre: '',
      intro: 'Critica la división y falta de una postura única entre los protestantes respecto a la Eucaristía.',
      descripcion:
        'Contrasta la indefinición protestante respecto a qué es realmente la Eucaristía con la definición clara y consistente de la Iglesia Católica, ' +
        'lo que sugiere que la postura católica tiene mayor continuidad con la tradición patrística.',
      fuente: '',
      link: ''
    }
  ],

  // ── Sección 5 ───────────────────────────────────────────────────────────
  // Objeciones de Pacheco, presentadas con fidelidad y luego respondidas.
  // `respuesta_catolica` se deja vacía hasta redactar la réplica con sus fuentes.
  objeciones_pacheco: [
    {
      id: 'silencio',
      n: 1,
      titulo: 'Insuficiencia y silencio',
      objecion:
        'Más de treinta Padres de los primeros siglos no mencionan la Eucaristía de un modo relevante para ' +
        'este dogma. Ese silencio invalidaría la idea de un «consenso unánime» de los Padres.',
      respuesta_catolica: '',
      fuente: '',
      link: ''
    },
    {
      id: 'anacronismo',
      n: 2,
      titulo: 'El argumento del anacronismo',
      objecion:
        'La postura católica retroproyecta categorías aristotélicas y escolásticas (sustancia, accidentes, ' +
        'especies) sobre textos antiguos que hablaban en términos místicos, simbólicos o de «presencia real», ' +
        'pero no de transustanciación.',
      respuesta_catolica: '',
      fuente: '',
      link: ''
    },
    {
      id: 'gelasio',
      n: 3,
      titulo: 'El caso del Papa Gelasio I',
      objecion:
        'El Papa Gelasio I afirmó que en los sacramentos «no deja de existir la sustancia o naturaleza del pan ' +
        'y del vino». Esto contradeciría directamente la definición de Trento sobre la desaparición de la ' +
        'sustancia del pan.',
      respuesta_catolica: '',
      fuente: '',
      link: ''
    },
    {
      id: 'categorias',
      n: 4,
      titulo: 'Presencia real ≠ transustanciación',
      objecion:
        'Aceptar una «presencia real» —como hacen muchas confesiones protestantes y la ortodoxia— no equivale ' +
        'a aceptar la transustanciación romana, que exige la aniquilación ontológica del pan.',
      respuesta_catolica: '',
      fuente: '',
      link: ''
    }
  ],

  // ── Sección 6 ───────────────────────────────────────────────────────────
  // Fuentes y recursos. Links a completar con URLs verificables.
  fuentes: {
    primarias: [
      // { autor: '', obra: '', link: '' }
    ],
    secundarias: [
      // { autor: '', obra: '', link: '' }
    ],
    // Repositorios de referencia mencionados en el proyecto (links directos por verificar).
    repositorios: [
      { nombre: 'New Advent — Fathers of the Church', link: '' },
      { nombre: 'The Tertullian Project', link: '' },
      { nombre: 'Christian Classics Ethereal Library (CCEL)', link: '' }
    ]
  }
};

// Exposición global para app.js (sin módulos, compatible con GitHub Pages).
window.DEBATE_DATA = DEBATE_DATA;
