export const projects = [
  {
    id: 'panal',
    title: 'PANAL',
    company: 'Babel',
    client: 'ChileValora',
    category: 'app',
    date: 'Diciembre 2025 - Febrero 2026',
    thumbnail: '/img/proyectos/panal/1-login_main.png',
    images: [
      '/img/proyectos/panal/1-login_main.png',
      '/img/proyectos/panal/2-Home.png',
      '/img/proyectos/panal/3-Config_periodos.png',
      '/img/proyectos/panal/3.1-Formulariio_periodo.png',
      '/img/proyectos/panal/4-Solicitudes.png',
      '/img/proyectos/panal/5-Edicion Solicitud.png',
      '/img/proyectos/panal/6-historico.png',
      '/img/proyectos/panal/7-Documentos_solicitud.png',
      '/img/proyectos/panal/8-CV.png'
    ],
    description: [
      'PANAL es el sistema utilizado por ChileValora, institución responsable del Sistema Nacional de Certificación de Competencias Laborales. A través de esta plataforma se acreditan centros de evaluación y certificación, los cuales cuentan con evaluadores certificados encargados de validar las competencias laborales de los postulantes.',
      'En este proyecto desarrollé el módulo de gestión de evaluadores, el cual permite evaluar, certificar e incorporar de forma automatizada a los evaluadores de cada centro. Anteriormente este proceso se realizaba de manera manual, ingresando directamente los nombres de los evaluadores seleccionados al sistema.'
    ],
    technologies: ['Spring MVC', 'MySQL', 'Bootstrap', 'jQuery']
  },
  {
    id: 'bidat',
    title: 'BIDAT',
    company: 'Babel',
    client: 'Ministerio de Desarrollo Social y Familia',
    category: 'app',
    date: 'Junio 2025 - Diciembre 2025',
    thumbnail: '/img/proyectos/bidat/1-Home.png',
    images: [
      '/img/proyectos/bidat/1-Home.png',
      '/img/proyectos/bidat/2.0-Mantenedores.png',
      '/img/proyectos/bidat/2.1-Reportes.png',
      '/img/proyectos/bidat/3-Formulario_mantenedor_casen.png',
      '/img/proyectos/bidat/4-Formulario_mantenedor_rraa.png',
      '/img/proyectos/bidat/4.1-slide-casen.png',
      '/img/proyectos/bidat/5-graficos-casen.png',
      '/img/proyectos/bidat/6-graficos-rraa.png',
      '/img/proyectos/bidat/8-carga_masiva_datos.png'
    ],
    description: [
      'En este proyecto desarrollé el módulo de Visualizaciones para el Banco Integrado de Datos (BIDAT) del Ministerio de Desarrollo Social y Familia. El objetivo principal fue centralizar en una única plataforma diversos reportes que anteriormente se encontraban dispersos en archivos Excel o en sistemas separados.',
      {
        title: 'Reportes implementados:',
        items: [
          { bold: 'Encuesta CASEN:', text: 'Visualización de los resultados de la Encuesta de Caracterización Socioeconómica Nacional.' },
          { bold: 'Registro Social de Hogares:', text: 'Reportes con datos del registro que caracteriza la situación socioeconómica de los hogares chilenos.' },
          { bold: 'Banco Integrado de Inversión Pública:', text: 'Información consolidada sobre proyectos de inversión pública.' }
        ]
      }
    ],
    technologies: ['Laravel', 'Lumen', 'PostgreSQL', 'Bootstrap', 'jQuery']
  },
  {
    id: 'induccion-front',
    title: 'Sistemas de Inducción',
    company: 'RRHH3D',
    client: 'Varios',
    category: 'app',
    date: '2020 - 2025',
    thumbnail: '/img/proyectos/induccion-front/indu-tarragona.png',
    images: [
      '/img/proyectos/induccion-front/indu-tarragona.png',
      '/img/proyectos/induccion-front/nuestra_empresa.png',
      '/img/proyectos/induccion-front/donde_estamos.png',
      '/img/proyectos/induccion-front/productos_modal.png',
      '/img/proyectos/induccion-front/sostenibilidad.png',
      '/img/proyectos/induccion-front/evaluacion.png',
      '/img/proyectos/induccion-front/Progreso_act.png',
      '/img/proyectos/induccion-front/Progreso_act2.png'
    ],
    description: [
      'Los sistemas de inducción están diseñados para guiar a los nuevos colaboradores en su integración a la empresa. A través de la plataforma, los usuarios pueden acceder a diferentes módulos de contenido relacionados con los procesos y funciones de la organización. Cada módulo puede ser valorado por el colaborador y cuenta con una evaluación para verificar la comprensión del contenido.',
      'Además, estos sistemas permiten visualizar las distintas etapas del proceso de inducción, mostrando por cuáles ha pasado el colaborador, en cuál se encuentra actualmente y su progreso general en los módulos asignados.'
    ],
    technologies: ['PHP', 'Yii2', 'MySQL', 'Bootstrap', 'jQuery']
  },
  {
    id: 'induccion-back',
    title: 'Admin. Inducción',
    company: 'RRHH3D',
    client: 'Varios',
    category: 'app',
    date: '2020 - 2025',
    thumbnail: '/img/proyectos/induccion-back/dashboard_induccion.png',
    images: [
      '/img/proyectos/induccion-back/dashboard_induccion.png',
      '/img/proyectos/induccion-back/dashboard_8.png',
      '/img/proyectos/induccion-back/detalle_etapa.png',
      '/img/proyectos/induccion-back/detallecolaborador.png',
      '/img/proyectos/induccion-back/detalle_colaborador_induccion_1.png',
      '/img/proyectos/induccion-back/admin_induccionficha_usuario_ampliado.png'
    ],
    description: [
      'El sistema de administración de inducción está diseñado para gestionar y controlar todo el proceso de inducción de los colaboradores dentro de una organización. A medida que los colaboradores avanzan en su inducción, se les va asignando y moviendo de una etapa a otra, según su progreso y desempeño. Este sistema permite una visión clara y detallada del avance de cada colaborador, asegurando que completen todas las etapas requeridas.',
      {
        title: 'Características clave:',
        items: [
          { bold: 'Control de etapas del proceso:', text: 'El sistema organiza y gestiona las diferentes etapas del proceso de inducción, asegurando que cada colaborador pase por cada fase de manera adecuada.' },
          { bold: 'Reportes de seguimiento:', text: 'Se generan reportes detallados sobre el desempeño y el avance de los colaboradores a lo largo de las etapas, lo que permite a los administradores realizar un seguimiento efectivo del proceso de inducción y tomar decisiones informadas.' },
          { bold: 'Personalización y adaptación:', text: 'El sistema puede adaptarse a las necesidades específicas de la organización, permitiendo configuraciones de etapas y acciones que mejor se alineen con los objetivos de la inducción para la empresa.' }
        ]
      }
    ],
    technologies: ['PHP', 'Yii2', 'MySQL', 'Bootstrap', 'jQuery']
  },
  {
    id: 'encuesta',
    title: 'Módulo de Encuestas',
    company: 'RRHH3D',
    client: 'Varios',
    category: 'product',
    date: '2020 - 2025',
    thumbnail: '/img/proyectos/formulario_encuesta.png',
    video: '/video/video_encuesta.mp4',
    poster: '/video/poster/encuesta.jpg',
    description: 'Módulo de encuestas integrado al LMS que permite crear cuestionarios personalizados, recopilar respuestas y generar reportes estadísticos de satisfacción y retroalimentación.',
    technologies: ['PHP', 'Yii2', 'MySQL', 'JavaScript']
  },
  {
    id: 'carga-inteligente',
    title: 'Carga Masiva Inteligente',
    company: 'RRHH3D',
    client: 'Varios',
    category: 'product',
    date: '2020 - 2025',
    thumbnail: '/img/proyectos/dashboard.png',
    video: '/video/video_carga_inteligente.mp4',
    poster: '/video/poster/carga_inteligente.jpg',
    description: 'Sistema de carga masiva de datos con validación inteligente que permite importar información de empleados, cursos y evaluaciones desde archivos Excel con detección automática de errores.',
    technologies: ['PHP', 'Yii2', 'MySQL', 'PHPSpreadsheet']
  },
  {
    id: 'twilio-whatsapp',
    title: 'API Rest Twilio-WhatsApp',
    company: 'RRHH3D',
    client: 'Varios',
    category: 'product',
    date: '2020 - 2025',
    thumbnail: '/img/proyectos/home_lms.png',
    video: '/video/envio_wsp.mp4',
    poster: '/video/poster/wsp.jpg',
    description: 'API intermediaria para integración con Twilio que permite enviar notificaciones y recordatorios por WhatsApp a empleados sobre cursos, evaluaciones y vencimientos de certificaciones.',
    technologies: ['PHP', 'Slim', 'Twilio API', 'MySQL']
  },
    {
    id: 'clave-unica-chatbot',
    title: 'Integración ClaveÚnica - Chatbot ChileValora',
    company: 'Babel',
    client: 'ChileValora',
    category: 'product',
    date: '2026',
    thumbnail: '/video/poster/clave_unica.jpg',
    video: '/video/c_unica.mp4',
    poster: '/video/poster/clave_unica.jpg',
    description: 'Implementación del flujo de autenticación con ClaveÚnica para el chatbot institucional de ChileValora.',
    technologies: ['React', 'Node.js', 'AWS Lambda', 'OAuth2/OpenID']
  },
  {
    id: 'whatsapp-chatbot-chilevalora',
    title: 'Envío Masivo WhatsApp - Chatbot ChileValora',
    company: 'Babel',
    client: 'ChileValora',
    category: 'product',
    date: '2026',
    thumbnail: '/video/poster/wsp_chatbot.jpg',
    video: '/video/wsp_chatbot.mp4',
    poster: '/video/poster/wsp_chatbot.jpg',
    description: 'Flujo de selección de usuarios, encolamiento y envío masivo de templates de WhatsApp con seguimiento de estado.',
    technologies: ['React', 'Node.js', 'AWS SQS', 'WhatsApp API']
  },
{
    id: 'generacion-documento',
    title: 'Personalización de Documento',
    company: 'RRHH3D',
    client: 'Varios',
    category: 'product',
    date: '2020 - 2025',
    thumbnail: '/img/proyectos/grafico_enps.png',
    video: '/video/generacion_protocolo.mp4',
    poster: '/video/poster/generacion_documento.jpg',
    description: 'Sistema de generación de documentos personalizados (protocolos, certificados, constancias) con plantillas configurables y datos dinámicos de empleados y cursos completados.',
    technologies: ['PHP', 'Yii2', 'TCPDF', 'MySQL']
  },
  {
    id: 'lms',
    title: 'Sistema LMS',
    company: 'RRHH3D',
    client: 'Varios',
    category: 'app',
    date: '2020 - 2025',
    thumbnail: '/img/proyectos/lms/home.png',
    images: [
      '/img/proyectos/lms/home.png',
      '/img/proyectos/lms/milab_login.png',
      '/img/proyectos/lms/orizon_login.png',
      '/img/proyectos/lms/lista_cursos.png',
      '/img/proyectos/lms/detalle_curso.png',
      '/img/proyectos/lms/lms_elearning.png',
      '/img/proyectos/lms/Evaluacion_front.png',
      '/img/proyectos/lms/evaluacion_front2.png',
      '/img/proyectos/lms/resultado_evaluacion.png',
      '/img/proyectos/lms/avance_cursos.png',
      '/img/proyectos/lms/graficos.png',
      '/img/proyectos/lms/graficos2.png',
      '/img/proyectos/lms/indicadores.png',
      '/img/proyectos/lms/creacion_curso.png',
      '/img/proyectos/lms/matricular_colaboradores.png',
      '/img/proyectos/lms/nomina.png'
    ],
    description: [
      'Un Sistema de Gestión de Aprendizaje (LMS) es una plataforma diseñada para gestionar, administrar, entregar y monitorear el proceso de aprendizaje dentro de una organización o institución educativa. Este tipo de sistema facilita tanto la creación y distribución de contenido educativo como el seguimiento y evaluación del rendimiento de los estudiantes o empleados.',
      {
        title: 'Características clave:',
        items: [
          { bold: 'Gestión de cursos:', text: 'Este sistema permite a los administradores crear, organizar y administrar cursos o módulos de capacitación, con la posibilidad de estructurar el contenido en unidades, evaluaciones y materiales multimedia.' },
          { bold: 'Acceso a contenido:', text: 'Los estudiantes o empleados pueden acceder al contenido educativo en línea en cualquier momento y desde cualquier lugar, proporcionando flexibilidad en el aprendizaje.' },
          { bold: 'Seguimiento y evaluación:', text: 'Los administradores o instructores pueden monitorear el progreso de los estudiantes, evaluar su rendimiento a través de evaluaciones y cuestionarios, y generar informes detallados sobre su desempeño.' }
        ]
      }
    ],
    technologies: ['PHP', 'Yii2', 'MySQL', 'Bootstrap', 'jQuery', 'SCORM']
  },
  {
    id: 'brisas',
    title: 'Sitio web Las Brisas',
    company: 'ASSERTSOFT',
    client: '-',
    category: 'app',
    date: '2018 - 2020',
    thumbnail: '/img/proyectos/brisas/home_brisas.jpg',
    images: [
      '/img/proyectos/brisas/home_brisas.jpg',
      '/img/proyectos/brisas/brisas.png',
      '/img/proyectos/brisas/brisas_dptos.png',
      '/img/proyectos/brisas/detalle_brisas.png',
      '/img/proyectos/brisas/formulario_brisas.png',
      '/img/proyectos/brisas/mapa_brisas.png',
      '/img/proyectos/brisas/admin1.PNG',
      '/img/proyectos/brisas/admin2.PNG'
    ],
    description: 'Sitio web para la compra, venta y arriendo de casas y departamentos.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'jQuery']
  },
  {
    id: 'municipalidades',
    title: 'Sistema Municipalidades',
    company: 'ASSERTSOFT',
    client: 'Sernatur',
    category: 'app',
    date: '2018 - 2020',
    thumbnail: '/img/proyectos/municipalidades/Bienvenidos.png',
    images: [
      '/img/proyectos/municipalidades/Bienvenidos.png',
      '/img/proyectos/municipalidades/bienvenidos2.png',
      '/img/proyectos/municipalidades/comienza.png',
      '/img/proyectos/municipalidades/form.png',
      '/img/proyectos/municipalidades/panel.png'
    ],
    description: 'Sistema de postulación para las municipalidades de Chile, el cual permite a estas postular a una distinción otorgada por Sernatur.',
    technologies: ['PHP', 'Symfony', 'PostgreSQL', 'Bootstrap']
  },
  {
    id: 'south',
    title: 'Sitio web South Investment',
    company: 'ASSERTSOFT',
    client: '-',
    category: 'app',
    date: '2018 - 2020',
    thumbnail: '/img/proyectos/home_south.png',
    images: [
      '/img/proyectos/home_south.png'
    ],
    description: 'Sitio web para la compra, venta y arriendo de casas y departamentos.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap']
  },
  {
    id: 'onfield',
    title: 'Sistema Onfield',
    company: 'ASSERTSOFT',
    client: 'Claro',
    category: 'app',
    date: '2018 - 2020',
    thumbnail: '/img/proyectos/onfield/Lista de Chips.png',
    images: [
      '/img/proyectos/onfield/Lista de Chips.png',
      '/img/proyectos/onfield/Asignar Puntos.png',
      '/img/proyectos/onfield/Historial de Chips.png',
      '/img/proyectos/onfield/Movimiento de Chips.png'
    ],
    description: 'Sistema de gestión de todo el proceso de ventas de chips de la Empresa Claro. Permite asignarle chips y puntos de ventas a los vendedores. Cuando un vendedor vende un chip debe registrarlo en una app móvil, la cual envía los datos de venta al sistema mediante una API. El sistema permite ver el historial de chips vendidos y los puntos de ventas asignados a cada vendedor.',
    technologies: ['PHP', 'Symfony', 'MySQL', 'Bootstrap', 'API REST']
  },
  {
    id: 'sgi',
    title: 'Sistema Miembros SGI Cuba',
    company: 'Freelancer',
    client: 'Logia en Cuba',
    category: 'app',
    date: '2018',
    thumbnail: '/img/proyectos/sgi/portada.png',
    images: [
      '/img/proyectos/sgi/portada.png',
      '/img/proyectos/sgi/portada2.png',
      '/img/proyectos/sgi/miembros.png',
      '/img/proyectos/sgi/form1.png',
      '/img/proyectos/sgi/form2.png',
      '/img/proyectos/sgi/form3.png',
      '/img/proyectos/sgi/configuracion.png'
    ],
    description: 'Sistema de gestión de todos los miembros de una logia, donde se pueden gestionar los datos de cada miembro, así como su estado dentro de la logia.',
    technologies: ['PHP', 'Yii2', 'MySQL', 'Bootstrap']
  },
  {
    id: 'riesgos',
    title: 'Sistema de Gestión de Riesgos',
    company: 'CECMED',
    client: '-',
    category: 'app',
    date: '2015 - 2018',
    thumbnail: '/img/proyectos/riesgos/portada.png',
    images: [
      '/img/proyectos/riesgos/portada.png',
      '/img/proyectos/riesgos/tablas.png',
      '/img/proyectos/riesgos/Insercion.png',
      '/img/proyectos/riesgos/usuarios.png'
    ],
    description: 'Sistema de gestión de riesgos diseñado para identificar, evaluar, monitorear y mitigar los riesgos que pueden afectar el logro de los objetivos organizacionales. Este sistema tiene como objetivo principal minimizar las amenazas y aprovechar las oportunidades para mejorar la capacidad y el rendimiento de la empresa.',
    technologies: ['PHP', 'Yii2', 'MySQL', 'Bootstrap']
  },
  {
    id: 'eval-cap',
    title: 'Sistema de Gestión de Evaluación y Capacitación',
    company: 'CECMED',
    client: '-',
    category: 'app',
    date: '2015 - 2018',
    thumbnail: '/img/proyectos/eval-cap/portada.png',
    images: [
      '/img/proyectos/eval-cap/portada.png',
      '/img/proyectos/eval-cap/login.png',
      '/img/proyectos/eval-cap/evaluaciones.png',
      '/img/proyectos/eval-cap/porevaluar.png',
      '/img/proyectos/eval-cap/form-evaluacion.png',
      '/img/proyectos/eval-cap/form-evaluacion mod.png',
      '/img/proyectos/eval-cap/capacitacion.png',
      '/img/proyectos/eval-cap/capacitacion mod.png',
      '/img/proyectos/eval-cap/configuracion.png',
      '/img/proyectos/eval-cap/portada mod1(hightchart).png',
      '/img/proyectos/eval-cap/portada mod2.png'
    ],
    description: 'Sistema de gestión de evaluación y capacitación que permite crear evaluaciones de desempeño anuales y evaluar a los colaboradores. Permite también asignar cursos de capacitación a los colaboradores y guardar los certificados de los mismos una vez realizados.',
    technologies: ['PHP', 'Yii2', 'MySQL', 'Bootstrap']
  },
  {
    id: 'getel',
    title: 'Sistema de Gestión Telefónica',
    company: 'CECMED',
    client: '-',
    category: 'app',
    date: '2015 - 2018',
    thumbnail: '/img/proyectos/getel/portada.png',
    images: [
      '/img/proyectos/getel/portada.png',
      '/img/proyectos/getel/login.png',
      '/img/proyectos/getel/configuracion.png',
      '/img/proyectos/getel/filtro de llamadas.png',
      '/img/proyectos/getel/gastos por dpto.png',
      '/img/proyectos/getel/gastos por persona.png',
      '/img/proyectos/getel/reportes.png'
    ],
    description: 'Sistema de gestión telefónica que permite tener un control de los gastos telefónicos de la empresa, permitiendo filtrar las llamadas por diferentes criterios. El sistema obtiene los registros de llamadas de la pizarra telefónica y los almacena en una base de datos, que luego se utiliza para generar los diferentes reportes.',
    technologies: ['PHP', 'Yii2', 'MySQL', 'Bootstrap', 'Chart.js']
  },
  {
    id: 'materiales-referencia',
    title: 'Sistema Materiales de Referencia',
    company: 'CECMED',
    client: '-',
    category: 'app',
    date: '2015 - 2018',
    thumbnail: '/img/proyectos/materiales-referencias/portada.png',
    images: [
      '/img/proyectos/materiales-referencias/portada.png',
      '/img/proyectos/materiales-referencias/Autenticación.png',
      '/img/proyectos/materiales-referencias/materiales.png',
      '/img/proyectos/materiales-referencias/Insercion.png'
    ],
    description: 'Sistema de gestión para registrar todos los materiales utilizados en los laboratorios del CECMED.',
    technologies: ['PHP', 'Yii2', 'MySQL', 'Bootstrap']
  },
  {
    id: 'cecmed-web',
    title: 'Sitio Web CECMED',
    company: 'CECMED',
    client: '-',
    category: 'app',
    date: '2015 - 2018',
    thumbnail: '/img/proyectos/cecmed/web CECMED.png',
    images: [
      '/img/proyectos/cecmed/web CECMED.png'
    ],
    description: 'Sitio web del Centro para el Control Estatal de Medicamentos, Equipos y Dispositivos Médicos (CECMED) de Cuba.',
    technologies: ['Drupal', 'PHP', 'MySQL', 'CSS']
  },
  {
    id: 'cecmed-intranet',
    title: 'Intranet CECMED',
    company: 'CECMED',
    client: '-',
    category: 'app',
    date: '2015 - 2018',
    thumbnail: '/img/proyectos/cecmed/intranet cecmed.png',
    images: [
      '/img/proyectos/cecmed/intranet cecmed.png'
    ],
    description: 'Intranet del Centro para el Control Estatal de Medicamentos, Equipos y Dispositivos Médicos (CECMED) de Cuba.',
    technologies: ['Drupal', 'PHP', 'MySQL', 'CSS']
  }
];

export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};
