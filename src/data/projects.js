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
      '/img/proyectos/panal/6-Historico_solicitud.png',
      '/img/proyectos/panal/7-Documentos_solicitud.png',
      '/img/proyectos/panal/8-CV.png'
    ],
    description: 'Sistema de gestión de evaluadores para el proceso de certificación de competencias laborales. Permite administrar evaluadores, gestionar evaluaciones, generar reportes y controlar perfiles de usuario con diferentes niveles de acceso.',
    technologies: ['Symfony', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript']
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
    description: 'Banco Integrado de Datos con visualizaciones de datos de la encuesta CASEN, registro social de hogares e inversión pública. Plataforma de consulta y análisis de indicadores sociales con filtros dinámicos y exportación de datos.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'D3.js', 'Bootstrap']
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
    description: 'Sistema de inducción para nuevos empleados con módulos de contenido interactivo, evaluaciones y seguimiento de progreso. Permite a las empresas crear programas de onboarding personalizados.',
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
    description: 'Panel de administración para gestionar programas de inducción. Permite configurar etapas, asignar empleados, crear contenidos, diseñar evaluaciones y generar certificados de completitud.',
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
    title: 'LMS',
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
    description: 'Sistema de Gestión de Aprendizaje completo con gestión de cursos, contenidos multimedia, evaluaciones, certificados automáticos, seguimiento de progreso y reportes de cumplimiento.',
    technologies: ['PHP', 'Yii2', 'MySQL', 'Bootstrap', 'jQuery', 'SCORM']
  },
  {
    id: 'brisas',
    title: 'Las Brisas Santo Domingo',
    company: 'ASSERTSOFT',
    client: 'Las Brisas',
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
    description: 'Portal inmobiliario para compra, venta y arriendo de propiedades con búsqueda avanzada, galería de imágenes, formulario de contacto y panel de administración para gestión de propiedades.',
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
    description: 'Sistema de postulación para municipalidades chilenas al programa de distinciones turísticas de Sernatur. Permite gestionar formularios, evaluar postulaciones y generar reportes de resultados.',
    technologies: ['PHP', 'Symfony', 'PostgreSQL', 'Bootstrap']
  },
  {
    id: 'south',
    title: 'South Investment',
    company: 'ASSERTSOFT',
    client: 'South Investment',
    category: 'app',
    date: '2018 - 2020',
    thumbnail: '/img/proyectos/home_south.png',
    images: [
      '/img/proyectos/home_south.png'
    ],
    description: 'Sitio web inmobiliario para inversionistas con catálogo de propiedades, información de proyectos y formulario de contacto para potenciales compradores e inversionistas.',
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
    description: 'Sistema de gestión de ventas para distribución de chips con seguimiento de puntos de venta, control de inventario, reportes de ventas e integración con aplicación móvil de vendedores.',
    technologies: ['PHP', 'Symfony', 'MySQL', 'Bootstrap', 'API REST']
  },
  {
    id: 'sgi',
    title: 'Miembros SGI Cuba',
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
    description: 'Sistema de gestión de miembros para organización masónica con registro de afiliados, gestión de logias, calendario de eventos, cuotas y generación de reportes administrativos.',
    technologies: ['PHP', 'Yii2', 'MySQL', 'Bootstrap']
  },
  {
    id: 'riesgos',
    title: 'Gestión de Riesgos',
    company: 'CECMED',
    client: 'CECMED',
    category: 'app',
    date: '2015 - 2018',
    thumbnail: '/img/proyectos/riesgos/portada.png',
    images: [
      '/img/proyectos/riesgos/portada.png',
      '/img/proyectos/riesgos/tablas.png',
      '/img/proyectos/riesgos/Insercion.png',
      '/img/proyectos/riesgos/usuarios.png'
    ],
    description: 'Sistema de identificación, evaluación y mitigación de riesgos organizacionales con matrices de probabilidad-impacto, planes de acción y seguimiento de indicadores de gestión.',
    technologies: ['PHP', 'Yii2', 'MySQL', 'Bootstrap']
  },
  {
    id: 'eval-cap',
    title: 'Evaluación y Capacitación',
    company: 'CECMED',
    client: 'CECMED',
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
    description: 'Sistema de evaluación de desempeño y gestión de capacitaciones con planificación de cursos, registro de asistencia, emisión de certificados y reportes de cumplimiento de formación.',
    technologies: ['PHP', 'Yii2', 'MySQL', 'Bootstrap']
  },
  {
    id: 'getel',
    title: 'Gestión Telefónica',
    company: 'CECMED',
    client: 'CECMED',
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
    description: 'Sistema de control de gastos telefónicos con registro de llamadas, asignación de extensiones por departamento, filtros de análisis y reportes de consumo con gráficos estadísticos.',
    technologies: ['PHP', 'Yii2', 'MySQL', 'Bootstrap', 'Chart.js']
  },
  {
    id: 'materiales-referencia',
    title: 'Materiales de Referencia',
    company: 'CECMED',
    client: 'CECMED',
    category: 'app',
    date: '2015 - 2018',
    thumbnail: '/img/proyectos/materiales-referencias/portada.png',
    images: [
      '/img/proyectos/materiales-referencias/portada.png',
      '/img/proyectos/materiales-referencias/Autenticación.png',
      '/img/proyectos/materiales-referencias/materiales.png',
      '/img/proyectos/materiales-referencias/Insercion.png'
    ],
    description: 'Sistema de registro y gestión de materiales de referencia de laboratorio con control de inventario, trazabilidad, fechas de vencimiento y certificados de análisis.',
    technologies: ['PHP', 'Yii2', 'MySQL', 'Bootstrap']
  },
  {
    id: 'cecmed-web',
    title: 'Sitio Web CECMED',
    company: 'CECMED',
    client: 'CECMED',
    category: 'app',
    date: '2015 - 2018',
    thumbnail: '/img/proyectos/cecmed/web CECMED.png',
    images: [
      '/img/proyectos/cecmed/web CECMED.png'
    ],
    description: 'Sitio web público del Centro Estatal para el Control de Medicamentos, Equipos y Dispositivos Médicos de Cuba con información institucional, normativas, trámites y noticias del sector.',
    technologies: ['Drupal', 'PHP', 'MySQL', 'CSS']
  },
  {
    id: 'cecmed-intranet',
    title: 'Intranet CECMED',
    company: 'CECMED',
    client: 'CECMED',
    category: 'app',
    date: '2015 - 2018',
    thumbnail: '/img/proyectos/cecmed/intranet cecmed.png',
    images: [
      '/img/proyectos/cecmed/intranet cecmed.png'
    ],
    description: 'Portal intranet para el personal de CECMED con acceso a documentos internos, directorio de empleados, calendario institucional, noticias internas y enlaces a sistemas corporativos.',
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
