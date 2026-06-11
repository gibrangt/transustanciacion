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
        'Si bien los padres de la Iglesia no utilizaron la palabra "transustanciación", sí se encuentra en ellos la idea fundamental de un cambio en "lo que es" el pan y el vino. Para probarlo, presenta las siguientes citas y razonamientos:',
      secciones: [
        {
          titulo: 'San Ignacio de Antioquía (año 106)',
          intro: 'Afirma que "los herejes no admiten que la Eucaristía es la carne de nuestro Salvador Jesucristo".',
          puntos: [
            {
              label: 'El argumento:',
              texto:
                'Urbina argumenta que, dado que al inicio es pan pero luego se dice que es la carne de Cristo, ' +
                'se ha dado un cambio en lo que el objeto es (transustanciación), y que Ignacio identifica como herejes ' +
                'a quienes no creen esto.'
            }
          ]
        },
        {
          titulo: 'San Efrén el Sirio',
          intro: 'Señala que "al principio era solo pan, pero luego pasa a ser el cuerpo; eso es lo que en realidad es".',
          puntos: [
            {
              label: 'La implicación:',
              texto:
                'Esto implica, según el ponente, un cambio en la sustancia: primero era pan, pero luego es el cuerpo de Cristo. ' +
                'No es una adición o coexistencia, sino un cambio en la realidad misma del objeto.'
            }
          ]
        },
        {
          titulo: 'San Agustín',
          intro: 'Enseña que "sin la palabra no hay más que pan y vino; se pronuncia la palabra y ya hay otra cosa", siendo esa otra cosa el cuerpo y la sangre de Cristo.',
          puntos: [
            {
              label: 'El cambio sustancial:',
              texto:
                'Urbina destaca que aquí se afirma claramente un cambio en la "cosa" que es, es decir, la sustancia. ' +
                'Antes de la consagración hay pan; después, hay otra cosa: el cuerpo de Cristo.'
            }
          ]
        },
        {
          titulo: 'San Cirilo de Alejandría',
          intro: 'Exhorta a no juzgar lo que se ve como un "mero símbolo", sino que las ofrendas son "verdaderamente cambiadas en el cuerpo y la sangre de Cristo".',
          puntos: [
            {
              label: 'Rechazo del simbolismo:',
              texto:
                'Para Urbina, esto indica un cambio real en la realidad de los elementos, no meramente en su significado o uso simbólico. ' +
                'Cirilo es explícito: no es un símbolo, sino una transformación real.'
            }
          ]
        },
        {
          titulo: 'San Juan Damasceno',
          intro: 'Indica que el pan y el vino son "transformados en el cuerpo y sangre de Cristo" y que no son meras figuras, sino el cuerpo deificado del Señor mismo.',
          puntos: [
            {
              label: 'Transformación sin símbolo:',
              texto:
                'Damasceno afirma explícitamente que los elementos son transformados y que no permanecen como figuras o símbolos. ' +
                'Son el cuerpo deificado del Señor mismo, indicando una presencia real y sustancial.'
            }
          ]
        }
      ],
      conclusion:
        'Dante Urbina concluye que estas afirmaciones no son compatibles con una visión puramente simbolista ni con una presencia meramente espiritual, ' +
        'ya que se habla de que el elemento es el cuerpo de Cristo. Tampoco considera que sean compatibles con la consubstanciación ' +
        '(donde permanece la sustancia del pan), porque los Padres no dicen que el pan "contiene" el cuerpo, sino que directamente lo es. ' +
        'Estructura su argumento en el siguiente silogismo: (1) La transustanciación consiste en un cambio de "lo que es"; ' +
        '(2) Los padres de la Iglesia afirmaron un cambio de "lo que es" en la Eucaristía; (3) Por tanto, los padres de la Iglesia ' +
        'afirmaron el concepto de transustanciación, más allá de la palabra técnica.',
      fuente: '',
      link: ''
    },
    {
      id: 'sustancia-especies',
      n: 2,
      titulo: 'La distinción entre sustancia y especies',
      padre: 'San Cirilo de Jerusalén · San Agustín · Padres del Desierto',
      intro:
        'Urbina explica que el Concilio de Trento formula la transustanciación basándose en que cambia la sustancia pero permanecen las especies ' +
        '(entendidas como las apariencias). Sostiene que, aunque los Padres de la Iglesia no usaron necesariamente estas palabras técnicas, ' +
        'sí tenían claras las ideas que estas implican.',
      secciones: [
        {
          titulo: 'San Cirilo de Jerusalén',
          intro: 'Afirmó que "el aparente pan no es pan aunque sensible al gusto, sino el cuerpo de Cristo".',
          puntos: [
            {
              label: 'La distinción sustancia-especies:',
              texto:
                'Urbina destaca que aquí se ve que del pan solo permanecen las apariencias (el "aparente pan"), ' +
                'pero ya no su sustancia ("no es pan"), siendo ahora la sustancia el cuerpo de Cristo. ' +
                'Según el ponente, esto muestra el concepto de transustanciación más de 1,000 años antes de Trento.'
            }
          ]
        },
        {
          titulo: 'San Agustín',
          intro: 'Enseñó que "lo que podéis ver es un pan, pero es el cuerpo de Cristo".',
          puntos: [
            {
              label: 'Apariencia vs. realidad:',
              texto:
                'Urbina argumenta que Agustín ya distinguía entre la apariencia visible (lo que se ve) y la sustancia (lo que es). ' +
                'Resalta además que Agustín llegó a esta conclusión bajo una influencia neoplatónica y no aristotélica, ' +
                'lo que demuestra que la distinción es independiente de la filosofía aristotélica utilizada en Trento.'
            }
          ]
        },
        {
          titulo: 'Padres del Desierto',
          intro: 'Se refirieron a "la naturaleza del cuerpo y la sangre de Cristo que latía bajo las especies de pan y vino".',
          puntos: [
            {
              label: 'El conocimiento generalizado:',
              texto:
                'Urbina señala que incluso estos monjes retirados, sin ser filósofos de biblioteca, ya manejaban estas distinciones específicas. ' +
                'Esto indica que la idea no era peculiar de un solo Padre culto, sino que formaba parte del entendimiento común de la Iglesia antigua.'
            }
          ]
        }
      ],
      conclusion:
        'El Dr. Urbina concluye que estas citas no representan simplemente una idea genérica e indefinida de "presencia real", ' +
        'sino que constituyen evidencia de las distinciones específicas (sustancia/especies) que son propias de la doctrina de la transustanciación.',
      fuente: '',
      link: ''
    },
    {
      id: 'transustanciacion-conversion',
      n: 3,
      titulo: 'La transustanciación implica conversión',
      padre: 'San Ireneo · Orígenes · Serapión · San Atanasio · San Ambrosio · San Cirilo de Jerusalén · San Gregorio de Nisa · San Cirilo de Alejandría · San Juan Crisóstomo',
      intro:
        'Dante Urbina argumenta que la doctrina de la transustanciación conlleva intrínsecamente la idea de una conversión real de los elementos, ' +
        'un concepto que la mayoría de los protestantes rechazan. Para sustentar que los Padres de la Iglesia sí creían en esta conversión, ' +
        'presenta los siguientes puntos:',
      secciones: [
        {
          titulo: '1. Refutación de la postura reformada',
          intro: 'Urbina cita directamente a Edgar Pacheco, quien afirma que en la postura reformada "no hay conversión".',
          puntos: [
            {
              label: 'El contraste:',
              texto:
                'Frente a esto, Urbina contrapone el lenguaje utilizado por los Padres de la Iglesia entre los siglos I y V, ' +
                'tanto en Oriente como en Occidente, que consistentemente hablan de conversión o transformación.'
            }
          ]
        },
        {
          titulo: '2. Padres que afirman "se convierten"',
          intro: 'El ponente enumera autores que utilizan este lenguaje de cambio:',
          puntos: [
            {
              label: 'Testimonios directos:',
              texto:
                'San Ireneo de Lyon, Orígenes, Serapión de Timuis, San Atanasio, San Ambrosio de Milán, San Gaudencio de Brescia y San Agustín ' +
                'todos afirman que los elementos se convierten.'
            }
          ]
        },
        {
          titulo: '3. Padres que afirman "transforman" o "son transformados"',
          intro: 'Otros autores utilizan lenguaje de transformación inmediata:',
          puntos: [
            {
              label: 'Terminología de transformación:',
              texto:
                'San Cirilo de Jerusalén, San Gregorio de Nisa, Teodoro de Mopsuestia, San Cirilo de Alejandría y San Juan Crisóstomo ' +
                'utilizan expresiones como "es inmediatamente transformado" o "transforman" para referirse a lo que sucede en la Eucaristía.'
            }
          ]
        },
        {
          titulo: '4. Terminología técnica griega',
          intro: 'Urbina señala que los términos griegos originales implican una conversión real:',
          puntos: [
            {
              label: 'El significado de metabole:',
              texto:
                'Los términos griegos originales utilizados por estos autores (como metabole y otros afines) implican intrínsecamente una conversión real, ' +
                'no una mera adición, coexistencia o presencia sin cambio.'
            }
          ]
        },
        {
          titulo: '5. Deducción lógica del cambio sustancial',
          intro: 'Urbina presenta un razonamiento que demuestra qué debe cambiar necesariamente:',
          puntos: [
            {
              label: 'Lo que necesariamente cambia:',
              texto:
                'Argumenta que, dado que es evidente que en la Eucaristía las apariencias externas (los accidentes) no cambian visiblemente, ' +
                'lo que necesariamente debe cambiar para que se hable de una "conversión" o "transformación" es la sustancia de los elementos. ' +
                'Esto constituye precisamente la esencia de la transustanciación.'
            }
          ]
        }
      ],
      conclusion:
        'El Dr. Urbina concluye que la fe de los Padres de la Iglesia deja "recontrarrefutada" la postura reformada clásica, ' +
        'ya que los antiguos hablaban consistentemente en términos de una conversión que no es compatible con una mera presencia simbólica o espiritual sin cambio ontológico.',
      fuente: '',
      link: ''
    },
    {
      id: 'analogias-eucaristicas',
      n: 4,
      titulo: 'Las analogías eucarísticas',
      padre: 'San Ambrosio · San Cirilo de Jerusalén · San Gaudencio de Brescia',
      intro:
        'Urbina sostiene que en los escritos de los Padres de la Iglesia se encuentran comparaciones o analogías que solo tienen sentido ' +
        'si se acepta una conversión real y total de una sustancia en otra. Según su postura, estas analogías no son compatibles con una simple ' +
        'idea genérica de "presencia real" ni con la consustanciación, sino específicamente con la transustanciación.',
      secciones: [
        {
          titulo: 'San Ambrosio: La vara de Moisés y el río Nilo',
          intro: 'Compara la Eucaristía con la vara de Moisés que se convirtió en serpiente y con el agua del río Nilo que se convirtió en sangre.',
          puntos: [
            {
              label: 'La fuerza de la analogía:',
              texto:
                'Ambrosio elige deliberadamente milagros donde la sustancia de una cosa se convierte completamente en otra. ' +
                'La vara no "contiene" serpiente, sino que es transformada en serpiente. El agua del Nilo no "tiene" propiedades de sangre, ' +
                'sino que es convertida en sangre. Esto ilustra exactamente lo que sucede en la Eucaristía según la transustanciación.'
            }
          ]
        },
        {
          titulo: 'San Cirilo de Jerusalén y San Gaudencio de Brescia: El milagro de Caná',
          intro: 'Comparan el sacramento con el agua convertida en vino en las bodas de Caná.',
          puntos: [
            {
              label: 'El cambio del agua en vino:',
              texto:
                'En Caná, el agua no "se enriquece" con propiedades de vino ni "adquiere" una presencia del vino. Más bien, ' +
                'la sustancia del agua es transformada en la sustancia del vino. Cuando estos Padres emplean esta analogía para la Eucaristía, ' +
                'sugieren que así como el agua se convierte en vino, el pan se convierte en el cuerpo de Cristo.'
            }
          ]
        }
      ],
      conclusion:
        'El Dr. Urbina concluye este punto afirmando que Pacheco no podría emplear estas analogías para defender su propia postura ' +
        '(que rechaza la conversión sustancial), lo que, según él, demuestra que la fe de su oponente no coincide con la de los Padres de la Iglesia. ' +
        'Las analogías patrísticas presuponen una transustanciación verdadera, no meramente una presencia espiritual o simbólica.',
      fuente: '',
      link: ''
    },
    {
      id: 'interpretacion-realista',
      n: 5,
      titulo: 'La interpretación realista de las palabras de la última cena',
      padre: 'Afraates · Cirilo de Alejandría · Gregorio de Nisa · Teodoro de Mopsuestia · Juan Crisóstomo · Macario Magnes · San Agustín',
      intro:
        'Dante Urbina sostiene que la interpretación de las palabras de Cristo en la Última Cena ("Esto es mi cuerpo") ' +
        'por parte de los Padres de la Iglesia fue contundentemente realista y literal, contradiciendo la postura de Edgar Pacheco, ' +
        'quien afirma que en ese momento Jesús no hablaba de un cuerpo literal.',
      secciones: [
        {
          titulo: '1. Evidencia patrística del realismo literal',
          intro: 'Urbina cita a una serie de Padres que interpretaron estas palabras de forma realista y literal:',
          puntos: [
            {
              label: 'Testimonios del consenso:',
              texto:
                'Afraates, Cirilo de Alejandría, Gregorio de Nisa, Teodoro de Mopsuestia, Juan Crisóstomo y Macario Magnes ' +
                'todos interpretaron "Esto es mi cuerpo" de manera realista, no simbólica. Este consenso es amplio y abarca tanto ' +
                'autores griegos como sirios.'
            }
          ]
        },
        {
          titulo: '2. El testimonio especial de San Agustín',
          intro: 'El ponente destaca especialmente la postura de San Agustín sobre la Última Cena:',
          puntos: [
            {
              label: 'La indignación ante el simbolismo:',
              texto:
                'Urbina afirma que San Agustín se indignaría ante una interpretación no literal de las palabras de institución. ' +
                'Resalta que Agustín afirmó con tal fuerza la realidad del cuerpo de Cristo en la Eucaristía que llegó a decir que, ' +
                'en la Última Cena, "Cristo se cargó a sí mismo en sus propias manos". Esta expresión denota una presencia real y ' +
                'sustancial del Señor, no una figura o símbolo.'
            }
          ]
        }
      ],
      conclusion:
        'Para el Dr. Urbina, este consenso entre los Padres sobre la literalidad de las palabras de la institución refuerza la idea de que ' +
        'no veían el pan simplemente como un símbolo, sino como la realidad sustancial del Cuerpo del Señor, lo cual es coherente con ' +
        'la doctrina de la transustanciación.',
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
      padre: 'Concilio de Nicea · Concilio de Éfeso',
      intro:
        'Urbina apela a la autoridad de los grandes concilios ecuménicos de la Iglesia primitiva, argumentando que estos identificaban de forma ' +
        'directa y sustancial la Eucaristía con el Cuerpo de Cristo.',
      secciones: [
        {
          titulo: 'Concilio de Nicea (318 obispos)',
          intro:
            'Urbina señala que este concilio habla de administrar la Eucaristía como el equivalente a "dar el cuerpo de Cristo".',
          puntos: [
            {
              label: 'La identificación directa:',
              texto:
                'El concilio identifica la Eucaristía como siendo directamente el cuerpo de Cristo. Urbina cuestiona irónicamente si alguien ' +
                'se atrevería a decir que los mismos padres que defendieron la ortodoxia trinitaria contra el arrianismo eran "herejes ' +
                'respecto de la Eucaristía". Si estos 318 obispos comprendían bien la sustancia (ousia) en la Trinidad, ' +
                'es razonable suponer que también comprendían lo que significa un cambio de sustancia en la Eucaristía.'
            }
          ]
        },
        {
          titulo: 'Concilio de Éfeso (250 obispos)',
          intro:
            'Cita un texto del concilio que describe la recepción del sacramento como "la carne misma del Verbo mismo".',
          puntos: [
            {
              label: 'El lenguaje conciliar preciso:',
              texto:
                'Urbina enfatiza que el lenguaje conciliar no dice que el pan meramente "representa" la carne (lo cual sería simbolismo) ' +
                'ni que "incluye" o "contiene" el cuerpo (lo cual sería consustanciación). En cambio, identifica directamente lo que la sustancia es ' +
                'con el cuerpo de Cristo. Esta identificación sustancial es la esencia de la transustanciación.'
            }
          ]
        }
      ],
      conclusion:
        'El ponente concluye con un razonamiento lógico: dado que al inicio del rito todos están de acuerdo en que la sustancia es pan, ' +
        'pero el concilio afirma que luego es "la carne misma del Verbo", se deduce necesariamente que ha ocurrido un cambio de "lo que es". ' +
        'Por lo tanto, sostiene que la transustanciación está implícita en las definiciones de estos concilios antiguos, y que los mismos padres ' +
        'que condenaron el arrianismo también defendieron, aunque sin la palabra técnica, la realidad de la conversión eucarística.',
      fuente: '',
      link: ''
    },
    {
      id: 'filosofos-protestantes',
      n: 8,
      titulo: 'Los mayores filósofos protestantes lo refutan',
      padre: 'William Lane Craig · Gottfried Leibniz',
      intro:
        'Este argumento es de índole inductiva, lo que significa que no busca establecer una conclusión de forma apodíctica (necesaria), ' +
        'sino aumentar la probabilidad de la postura católica y reducir la de la postura evangélica al citar a grandes pensadores del propio campo protestante. ' +
        'Urbina utiliza este argumento para refutar la afirmación de Edgar Pacheco de que "no vas a encontrar la transustanciación en los padres ' +
        'de la Iglesia en ninguno, ni uno solo".',
      secciones: [
        {
          titulo: 'William Lane Craig: La transustanciación plenamente desarrollada',
          intro: 'Urbina lo cita como el filósofo protestante contemporáneo más importante.',
          puntos: [
            {
              label: 'El testimonio de Craig:',
              texto:
                'William Lane Craig afirma que en San Juan Damasceno ya se encuentra la doctrina de la transustanciación "plenamente desarrollada". ' +
                'Esta es una admisión significativa viniendo de uno de los intelectuales protestantes más respetados de nuestra época, ' +
                'quien no tiene interés confesional en favorecer la postura católica.'
            }
          ]
        },
        {
          titulo: 'Gottfried Leibniz: El reconocimiento universal de la antigüedad',
          intro: 'Presentado como el mayor erudito protestante de la historia.',
          puntos: [
            {
              label: 'El testimonio de Leibniz:',
              texto:
                'Leibniz es citado afirmando que los antiguos "universalmente reconocieron un cambio de sustancia" ' +
                '(metastois o metastoicheiosis), el cual los latinos (la Iglesia Católica) identificaron correctamente como transustanciación. ' +
                'Este reconocimiento de Leibniz, una de las mentes más grandes del protestantismo histórico, ' +
                'concede la mayor parte del argumento de Urbina.'
            }
          ]
        }
      ],
      conclusion:
        'El Dr. Urbina concluye que, si incluso los mayores eruditos y filósofos del protestantismo reconocen que los Padres de la Iglesia ' +
        'enseñaban un cambio de sustancia equivalente a la transustanciación, la postura de una negación total de esta evidencia por parte de Pacheco ' +
        'queda desestimada. Según Urbina, esto demuestra que la transustanciación no es un invento posterior de la Iglesia Católica, ' +
        'sino el reconocimiento de una creencia antigua que el mismo mundo protestante ha tenido que admitir al estudiar las fuentes patrísticas.',
      fuente: 'William Lane Craig · Defenders Podcast Series 3',
      link: 'https://www.reasonablefaith.org/podcasts/defenders-podcast-series-3/s3-doctrine-of-the-church/doctrine-of-the-church-part-9'
    },
    {
      id: 'historiador-protestante',
      n: 9,
      titulo: 'El mayor historiador eclesiástico protestante lo refuta',
      padre: 'Philip Schaff',
      intro:
        'Este argumento, al igual que el anterior, es de carácter inductivo y busca demostrar que expertos de la propia tradición protestante ' +
        'contradicen la tesis de Edgar Pacheco sobre la ausencia de la transustanciación en la Iglesia primitiva.',
      secciones: [
        {
          titulo: '1. La premisa de Pacheco que debe ser refutada',
          intro: 'Urbina cita directamente lo que Pacheco ha afirmado:',
          puntos: [
            {
              label: 'La negación de Pacheco:',
              texto:
                'Pacheco afirmó que "la transustanciación no está ni cerca de lo que creían los padres de la iglesia". ' +
                'Esta es una afirmación categórica y absoluta, sin matices ni salvedad.'
            }
          ]
        },
        {
          titulo: '2. La autoridad de Philip Schaff',
          intro: 'Para contrarrestar esa afirmación, Urbina apela a una autoridad histórica de peso:',
          puntos: [
            {
              label: 'Quién es Schaff:',
              texto:
                'Urbina describe a Philip Schaff como el "mayor historiador eclesiástico protestante de toda la historia". ' +
                'Schaff fue un erudito protestante de origen alemán, profesor en seminarios protestantes, y autor de la monumental ' +
                '"History of the Christian Church", considerada la obra de referencia en historiografía eclesiástica protestante.'
            },
            {
              label: 'El testimonio de Schaff:',
              texto:
                'Urbina cita directamente a Schaff, quien reconoce que el periodo de los padres nicenos (siglo IV) "estaba ya muy fuertemente ' +
                'inclinado hacia la doctrina de la transustanciación". Esta es una admisión histórica importante de alguien sin prejuicio católico.'
            }
          ]
        }
      ],
      conclusion:
        'El Dr. Urbina utiliza este testimonio para señalar que la postura de Pacheco no solo es rechazada por la teología católica, ' +
        'sino que carece de respaldo incluso entre los historiadores más prestigiosos de su propia confesión religiosa. ' +
        'Según Urbina, esto refuerza la idea de que la transustanciación no es un invento medieval, sino una doctrina cuyas raíces y desarrollo ' +
        'ya eran evidentes en los primeros siglos del cristianismo, según reconocen hasta los historiadores protestantes más autorizados.',
      fuente: '',
      link: ''
    },
    {
      id: 'indefinicion-protestante',
      n: 10,
      titulo: 'La indefinición de la postura protestante',
      padre: '',
      intro:
        'Urbina utiliza este último argumento para contrastar lo que él considera la claridad de la doctrina católica frente a la fragmentación ' +
        'de las posturas protestantes. Su tesis es que los críticos de la transustanciación no tienen una alternativa coherente que ofrecer.',
      secciones: [
        {
          titulo: '1. Unidad en la negación, división en la afirmación',
          intro:
            'El ponente afirma que los protestantes se ponen de acuerdo fácilmente para decir que la transustanciación es falsa, ' +
            'pero están "recontradividos" cuando se les pregunta cuál es la verdad sobre la Eucaristía.',
          puntos: [
            {
              label: 'El contraste:',
              texto:
                'Los protestantes forman un bloque cohesionado en su rechazo a la transustanciación, pero cuando se les cuestiona ' +
                'sobre qué es realmente la Eucaristía, esa cohesión se desmorona completamente en múltiples posiciones incompatibles.'
            }
          ]
        },
        {
          titulo: '2. Contradicciones internas en el equipo de Pacheco',
          intro:
            'Urbina señala que incluso dentro del círculo cercano de Edgar Pacheco no hay consenso. Menciona que mientras Pacheco busca una postura realista, ' +
            'sus colaboradores cercanos sostienen visiones opuestas:',
          puntos: [
            {
              label: 'Néstor Díaz:',
              texto: 'Afirma que Cristo está presente en un "sentido poético".'
            },
            {
              label: 'Carlos Veloz:',
              texto:
                'Cuestiona la idea de que se pueda afirmar sin problemas que se come la carne y se bebe la sangre de forma literal.'
            }
          ]
        },
        {
          titulo: '3. La "teología de estilo fluido": diversas interpretaciones protestantes',
          intro:
            'Urbina enumera una serie de interpretaciones divergentes entre diversos autores protestantes para demostrar la falta de una fe común sobre el sacramento:',
          puntos: [
            {
              label: 'Pueño:',
              texto: 'La califica como una "idea un poco rara".'
            },
            {
              label: 'Basi:',
              texto: 'Sostiene que es "espiritual o simbólica".'
            },
            {
              label: 'Osmán:',
              texto: 'La llama "representación simbólica".'
            },
            {
              label: 'Izquierdo:',
              texto: 'Sostiene que es la presencia del Espíritu Santo, no del cuerpo de Cristo.'
            },
            {
              label: 'Barragán:',
              texto: 'La ve simplemente como un "recordatorio".'
            }
          ]
        }
      ],
      conclusion:
        'El Dr. Urbina cierra su bloque de diez argumentos afirmando que, tras presentar toda esta evidencia, queda claro que la transustanciación ' +
        'no es una doctrina nueva, sino una "palabra nueva para designar una doctrina antigua" que ya estaba presente en los Padres de la Iglesia. ' +
        'Finaliza su intervención proclamando: "esta es la fe de los padres de la Iglesia, ¡viva Cristo Eucaristía!".',
      fuente: '',
      link: ''
    }
  ],

  // ── Sección 5 ───────────────────────────────────────────────────────────
  // Las objeciones/argumentos de Pacheco, presentadas como tarjetas expandibles.
  // Estructura similar a argumentos_urbina_extendidos.
  // Conforme se detallen, se añadirán subsecciones.
  objeciones_pacheco: [
    {
      id: 'consenso-unanime',
      n: 1,
      titulo: 'Exigencia de Consenso Unánime y Carga de la Prueba',
      padre: '',
      intro:
        'Basado en el Concilio de Trento y el credo de Pío IV, Pacheco sostiene que Roma está obligada a demostrar ' +
        'que la transustanciación fue creída siempre y por todos bajo un "consentimiento unánime".',
      descripcion:
        'Argumenta que Dante Urbina no debe probar solo una "presencia real" o lenguaje reverente, sino la doctrina ' +
        'específica de la conversión ontológica donde desaparece la sustancia del pan.',
      fuente: '',
      link: ''
    },
    {
      id: 'insuficiencia-patristica',
      n: 2,
      titulo: 'Insuficiencia del Testimonio Patrístico',
      padre: 'Clemente de Roma · Policarpo · Atenágoras',
      intro:
        'Pacheco presenta una lista de más de 30 padres de la Iglesia que no tratan el tema de la Eucaristía de forma ' +
        'relevante para este dogma o que guardan silencio total sobre cuestiones metafísicas de la sustancia.',
      descripcion:
        'Esto, según él, invalida cualquier pretensión de unanimidad patrística. Si más de 30 Padres guardaban silencio ' +
        'o no abordaban el tema con la precisión que Urbina exige, entonces no puede hablarse de un consenso ecuménico.',
      fuente: '',
      link: ''
    },
    {
      id: 'anacronismo-dogmatico',
      n: 3,
      titulo: 'Anacronismo y Retroproyección Dogmática',
      padre: '',
      intro:
        'Acusa a la postura católica de imponer categorías aristotélicas y escolásticas posteriores (como "accidentes sin sujeto") ' +
        'en textos antiguos que no manejaban esa precisión conceptual.',
      descripcion:
        'Sostiene que Roma lee "presencia real" e inmediatamente asume que es "transustanciación", lo cual considera una definición paupérrima de categorías. ' +
        'Los Padres no pensaban en términos de aristotelismo; proyectar esa filosofía sobre ellos es anacrónico.',
      fuente: '',
      link: ''
    },
    {
      id: 'gelasio-contrario',
      n: 4,
      titulo: 'El Caso del Papa Gelasio I (Evidencia Contraria)',
      padre: 'Papa Gelasio I',
      intro:
        'Pacheco destaca que el Papa Gelasio I afirmó explícitamente que en el sacramento "no deja de existir la sustancia ' +
        'o naturaleza del pan y del vino".',
      descripcion:
        'Argumenta que si un obispo de Roma pudo sostener la permanencia de la sustancia sin ser considerado hereje, ' +
        'la transustanciación no podía ser una creencia universal en el siglo V. Un Papa del siglo V rechazando implícitamente ' +
        'la transustanciación es una prueba contundente en su contra.',
      fuente: '',
      link: ''
    },
    {
      id: 'confusion-categorias',
      n: 5,
      titulo: 'Confusión de Categorías Eucarísticas',
      padre: '',
      intro:
        'Pacheco explica que existen múltiples modelos de presencia (consubstanciación, presencia espiritual real, memorialismo, transignificación) ' +
        'y que el uso de lenguaje realista en los padres ("esto es mi cuerpo") no implica necesariamente el modelo de la transustanciación romana.',
      descripcion:
        'El hecho de que los Padres usen lenguaje realista no significa que creyeran en la doctrina específica de Trento. ' +
        'Podrían haber creído en presencia real de otros modos, sin que eso equivalga a transustanciación.',
      fuente: '',
      link: ''
    },
    {
      id: 'claridad-historica',
      n: 6,
      titulo: 'Inexistencia de Claridad Histórica (Debates Medievales)',
      padre: 'Pascasio Radberto · Ratramno de Corbie',
      intro:
        'Pacheco señala que las controversias del siglo IX entre Pascasio Radberto y Ratramno de Corbie demuestran que la tradición ' +
        'no era unánime ni obvia.',
      descripcion:
        'Si la transustanciación hubiera sido la lectura clara y evidente de los padres antiguos, tales debates habrían sido innecesarios. ' +
        'La existencia de estas controversias demuestra que la tradición patrística permitía interpretaciones diversas.',
      fuente: '',
      link: ''
    },
    {
      id: 'circularidad',
      n: 7,
      titulo: 'Circularidad y Petición de Principio',
      padre: '',
      intro:
        'Pacheco concluye que el argumento católico es circular: define la doctrina mediante Trento, interpreta a los padres a través de ese lente ' +
        'y luego afirma que los padres prueban Trento, sin permitir que los autores antiguos hablen en su propio contexto y gramática teológica.',
      descripcion:
        'El método es vicioso: presuponenla conclusión que quieren probar. Esto invalida todo el edificio argumentativo de Urbina, ' +
        'pues se basa en una interpretación forzada de los Padres para hacerlos encajar en categorías medievales.',
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
