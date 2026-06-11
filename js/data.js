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

  // ── Sección 4 ───────────────────────────────────────────────────────────
  // Argumentos de Urbina, argumento por argumento.
  // `cita`, `fuente` y `link` se dejan vacíos hasta verificar la fuente primaria.
  argumentos_urbina: [
    {
      id: 'afirmaciones-directas',
      n: 1,
      titulo: 'Afirmaciones directas de cambio',
      padre: 'San Ignacio de Antioquía · San Efrén el Sirio · San Agustín',
      cita: '',
      fuente: '',
      link: '',
      explicacion:
        'Varios Padres afirman que el pan «pasa a ser» o «es» verdaderamente la carne de Cristo. ' +
        'No describen un símbolo, sino un cambio en lo que el objeto es: precisamente lo que más tarde ' +
        'se llamará cambio de sustancia.',
      solidez:
        'Son testimonios tempranos y explícitos sobre la identidad real del pan consagrado con el cuerpo de Cristo.'
    },
    {
      id: 'conversion-analogias',
      n: 2,
      titulo: 'Conversión real y la analogía de Caná',
      padre: '', // (Padre concreto: a completar tras verificar)
      cita: '',
      fuente: '',
      link: '',
      explicacion:
        'Los Padres recurren a analogías como el agua convertida en vino en las bodas de Caná para explicar ' +
        'lo que sucede en la Eucaristía. La fuerza de la analogía está en que en Caná la sustancia cambia: ' +
        'no queda agua «con sabor a vino», sino vino.',
      solidez:
        'La analogía elegida implica conversión sustancial, no mera presencia añadida a un pan que sigue siendo pan.'
    },
    {
      id: 'adoracion',
      n: 3,
      titulo: 'La adoración eucarística',
      padre: 'San Ambrosio · San Agustín',
      cita: '',
      fuente: '',
      link: '',
      explicacion:
        'Padres como Ambrosio y Agustín invitan a adorar la Eucaristía. Adorar lo que se recibe solo tiene ' +
        'sentido si se cree que ya no es pan, sino Dios: nadie adora un símbolo sin incurrir en idolatría.',
      solidez:
        'La práctica de la adoración presupone la convicción de que la sustancia del pan ha cedido el lugar a Cristo.'
    },
    {
      id: 'apoyo-externo',
      n: 4,
      titulo: 'Reconocimiento de eruditos no católicos',
      padre: '', // No es un Padre: son testigos externos.
      cita: '',
      fuente: '',
      link: '',
      explicacion:
        'Filósofos e historiadores protestantes —entre ellos Leibniz, William Lane Craig y Philip Schaff— ' +
        'reconocen que la idea de un cambio de sustancia, o la transustanciación misma, ya está presente o ' +
        'en desarrollo en los Padres.',
      solidez:
        'Se trata de testigos sin interés confesional en favorecer a Roma; su reconocimiento refuerza la lectura católica.'
    }
  ],

  // ── Sección 4 (cont.) ─────────────────────────────────────────────────────
  // Argumentos desarrollados como tarjetas expandibles (más extensos que los
  // resúmenes del scrollytelling). Numeración según la del Dr. Dante Urbina.
  // El texto se reproduce literalmente, tal como lo provee el usuario.
  argumentos_urbina_extendidos: [
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
