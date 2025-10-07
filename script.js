function searchJobs() {
  const specialty = document.getElementById('specialty').value;
  const jobResults = document.getElementById('jobResults');
  
  // Limpiar resultados anteriores
  jobResults.innerHTML = '';
  
  // Validar que se haya seleccionado una especialidad
  if (!specialty) {
    jobResults.innerHTML = '<div class="alert alert-warning">Por favor selecciona una especialidad.</div>';
    return;
  }
  
  // Base de datos de empleos ficticios
  const jobs = {
    design: [
      {
        title: 'Diseñador Gráfico Senior',
        company: 'Creativa Studio',
        description: 'Buscamos un diseñador gráfico con experiencia en branding y diseño digital para unirse a nuestro equipo creativo.',
        location: 'San Salvador',
        salary: '$800 - $1200'
      },
      {
        title: 'Diseñador UI/UX',
        company: 'Tech Solutions',
        description: 'Necesitamos un diseñador UI/UX para crear experiencias digitales innovadoras para nuestros clientes.',
        location: 'Remoto',
        salary: '$900 - $1500'
      },
      {
        title: 'Diseñador de Contenido Digital',
        company: 'Digital Media Co.',
        description: 'Unirse a nuestro equipo para crear contenido visual atractivo para redes sociales y plataformas digitales.',
        location: 'Santa Ana',
        salary: '$700 - $1000'
      }
    ],
    advertising: [
      {
        title: 'Especialista en Marketing Digital',
        company: 'Growth Agency',
        description: 'Buscamos un publicista con experiencia en campañas digitales y análisis de métricas.',
        location: 'San Salvador',
        salary: '$1000 - $1500'
      },
      {
        title: 'Community Manager',
        company: 'Social Media Pro',
        description: 'Gestionar comunidades online y crear contenido atractivo para diversas marcas.',
        location: 'Remoto',
        salary: '$800 - $1200'
      },
      {
        title: 'Estratega de Publicidad',
        company: 'Brand Masters',
        description: 'Desarrollar estrategias publicitarias integrales para clientes de diversos sectores.',
        location: 'San Miguel',
        salary: '$1200 - $1800'
      }
    ],
    decorator: [
      {
        title: 'Diseñador de Interiores',
        company: 'Espacios Armoniosos',
        description: 'Buscamos un decorador con experiencia en diseño residencial y comercial.',
        location: 'San Salvador',
        salary: '$900 - $1400'
      },
      {
        title: 'Asesor de Imagen',
        company: 'Estilo y Elegancia',
        description: 'Asesorar a clientes en la selección de decoración y mobiliario para sus hogares.',
        location: 'Santa Tecla',
        salary: '$700 - $1100'
      },
      {
        title: 'Diseñador de Escaparates',
        company: 'Retail Vision',
        description: 'Crear diseños atractivos para escaparates comerciales y espacios de venta.',
        location: 'San Salvador',
        salary: '$800 - $1200'
      }
    ],
    bilingual: [
      {
        title: 'Asistente Bilingüe',
        company: 'Global Connections',
        description: 'Brindar soporte administrativo en inglés y español para equipo internacional.',
        location: 'San Salvador',
        salary: '$800 - $1200'
      },
      {
        title: 'Atención al Cliente Bilingüe',
        company: 'Service Plus',
        description: 'Resolver consultas de clientes en inglés y español con excelente comunicación.',
        location: 'Remoto',
        salary: '$700 - $1000'
      },
      {
        title: 'Traductor Profesional',
        company: 'Language Bridge',
        description: 'Traducir documentos y contenido multimedia entre inglés y español.',
        location: 'Santa Ana',
        salary: '$900 - $1400'
      }
    ],
    developer: [
      {
        title: 'Desarrollador Frontend',
        company: 'WebTech Solutions',
        description: 'Crear interfaces web modernas y responsivas utilizando las últimas tecnologías.',
        location: 'San Salvador',
        salary: '$1200 - $1800'
      },
      {
        title: 'Desarrollador Backend',
        company: 'Data Systems',
        description: 'Desarrollar y mantener sistemas backend robustos y escalables.',
        location: 'Remoto',
        salary: '$1300 - $2000'
      },
      {
        title: 'Desarrollador Full Stack',
        company: 'Innovate Apps',
        description: 'Trabajar en todas las capas del desarrollo de aplicaciones web y móviles.',
        location: 'San Miguel',
        salary: '$1500 - $2200'
      }
    ]
  };
  
  // Obtener los empleos de la especialidad seleccionada
  const specialtyJobs = jobs[specialty];
  
  // Mostrar los empleos
  specialtyJobs.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.className = 'job-card';
    jobCard.innerHTML = `
      <div class="job-title">${job.title}</div>
      <div class="job-company">${job.company}</div>
      <div class="job-description">${job.description}</div>
      <div class="job-meta">
        <div class="job-location">
          <i class="fas fa-map-marker-alt"></i> ${job.location}
        </div>
        <div class="job-salary">${job.salary}</div>
      </div>
    `;
    jobResults.appendChild(jobCard);
  });
}