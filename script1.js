function searchEmployees() {
  const specialty = document.getElementById('specialty').value;
  const employeeResults = document.getElementById('employeeResults');
  
  // Limpiar resultados anteriores
  employeeResults.innerHTML = '';
  
  // Validar que se haya seleccionado una especialidad
  if (!specialty) {
    employeeResults.innerHTML = '<div class="alert alert-warning">Por favor selecciona una especialidad.</div>';
    return;
  }
  
  // Base de datos de especialistas ficticios
  const employees = {
    design: [
      {
        name: 'Carlos Martínez',
        specialty: 'Diseño Gráfico',
        experience: '5 años',
        location: 'San Salvador',
        description: 'Especialista en branding y diseño editorial con experiencia en proyectos para grandes marcas.',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      {
        name: 'Laura Rodríguez',
        specialty: 'Diseño Gráfico',
        experience: '3 años',
        location: 'Santa Ana',
        description: 'Diseñadora creativa enfocada en ilustración y diseño de personajes para medios digitales.',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
      },
      {
        name: 'Miguel Ángel Sánchez',
        specialty: 'Diseño Gráfico',
        experience: '7 años',
        location: 'San Miguel',
        description: 'Experto en diseño de packaging y identidad visual para productos de consumo.',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
      },
      {
        name: 'Ana Gómez',
        specialty: 'Diseño Gráfico',
        experience: '4 años',
        location: 'San Salvador',
        description: 'Diseñadora UX/UI con habilidades en prototipado y experiencia de usuario.',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
      },
      {
        name: 'José Hernández',
        specialty: 'Diseño Gráfico',
        experience: '6 años',
        location: 'La Libertad',
        description: 'Especialista en diseño publicitario y campañas visuales para redes sociales.',
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
      },
      {
        name: 'María López',
        specialty: 'Diseño Gráfico',
        experience: '2 años',
        location: 'Santa Tecla',
        description: 'Diseñadora gráfica con enfoque en motion graphics y animación digital.',
        avatar: 'https://randomuser.me/api/portraits/women/6.jpg'
      },
      {
        name: 'Roberto Pérez',
        specialty: 'Diseño Gráfico',
        experience: '8 años',
        location: 'San Salvador',
        description: 'Director de arte con experiencia en agencias de publicidad internacionales.',
        avatar: 'https://randomuser.me/api/portraits/men/7.jpg'
      },
      {
        name: 'Carmen Torres',
        specialty: 'Diseño Gráfico',
        experience: '5 años',
        location: 'Ahuachapán',
        description: 'Diseñadora textil y de patrones con experiencia en la industria de la moda.',
        avatar: 'https://randomuser.me/api/portraits/women/8.jpg'
      },
      {
        name: 'Fernando Ramírez',
        specialty: 'Diseño Gráfico',
        experience: '4 años',
        location: 'San Salvador',
        description: 'Especialista en diseño 3D y modelado para videojuegos y aplicaciones.',
        avatar: 'https://randomuser.me/api/portraits/men/9.jpg'
      },
      {
        name: 'Patricia Morales',
        specialty: 'Diseño Gráfico',
        experience: '6 años',
        location: 'Sonsonate',
        description: 'Diseñadora gráfica con experiencia en diseño editorial y maquetación de libros.',
        avatar: 'https://randomuser.me/api/portraits/women/10.jpg'
      }
    ],
    advertising: [
      {
        name: 'Alejandro Vargas',
        specialty: 'Publicista',
        experience: '7 años',
        location: 'San Salvador',
        description: 'Estratega de marketing digital con experiencia en campañas para redes sociales.',
        avatar: 'https://randomuser.me/api/portraits/men/11.jpg'
      },
      {
        name: 'Sofía Castro',
        specialty: 'Publicista',
        experience: '5 años',
        location: 'Santa Ana',
        description: 'Especialista en branding y posicionamiento de marcas en el mercado digital.',
        avatar: 'https://randomuser.me/api/portraits/women/12.jpg'
      },
      {
        name: 'Luis Mendoza',
        specialty: 'Publicista',
        experience: '6 años',
        location: 'San Miguel',
        description: 'Experto en publicidad exterior y campañas de marketing tradicional.',
        avatar: 'https://randomuser.me/api/portraits/men/13.jpg'
      },
      {
        name: 'Valeria Jiménez',
        specialty: 'Publicista',
        experience: '4 años',
        location: 'San Salvador',
        description: 'Community Manager con habilidades en gestión de comunidades online.',
        avatar: 'https://randomuser.me/api/portraits/women/14.jpg'
      },
      {
        name: 'Carlos Rivera',
        specialty: 'Publicista',
        experience: '8 años',
        location: 'La Libertad',
        description: 'Director de creatividad con experiencia en agencias de publicidad internacionales.',
        avatar: 'https://randomuser.me/api/portraits/men/15.jpg'
      },
      {
        name: 'Gabriela Flores',
        specialty: 'Publicista',
        experience: '3 años',
        location: 'Santa Tecla',
        description: 'Especialista en marketing de contenidos y creación de estrategias digitales.',
        avatar: 'https://randomuser.me/api/portraits/women/16.jpg'
      },
      {
        name: 'Javier Ruiz',
        specialty: 'Publicista',
        experience: '5 años',
        location: 'San Salvador',
        description: 'Experto en SEO y SEM con experiencia en optimización para motores de búsqueda.',
        avatar: 'https://randomuser.me/api/portraits/men/17.jpg'
      },
      {
        name: 'Daniela Herrera',
        specialty: 'Publicista',
        experience: '6 años',
        location: 'Ahuachapán',
        description: 'Especialista en email marketing y automatización de campañas.',
        avatar: 'https://randomuser.me/api/portraits/women/18.jpg'
      },
      {
        name: 'Ricardo Soto',
        specialty: 'Publicista',
        experience: '4 años',
        location: 'San Salvador',
        description: 'Analista de marketing digital con experiencia en métricas y KPIs.',
        avatar: 'https://randomuser.me/api/portraits/men/19.jpg'
      },
      {
        name: 'Claudia Ortiz',
        specialty: 'Publicista',
        experience: '7 años',
        location: 'Sonsonate',
        description: 'Especialista en publicidad programática y compra de medios digitales.',
        avatar: 'https://randomuser.me/api/portraits/women/20.jpg'
      }
    ],
    decorator: [
      {
        name: 'Eduardo Aguilar',
        specialty: 'Decorador',
        experience: '6 años',
        location: 'San Salvador',
        description: 'Diseñador de interiores especializado en espacios residenciales modernos.',
        avatar: 'https://randomuser.me/api/portraits/men/21.jpg'
      },
      {
        name: 'Mónica Rivas',
        specialty: 'Decorador',
        experience: '5 años',
        location: 'Santa Ana',
        description: 'Decoradora de interiores con experiencia en diseño de espacios comerciales.',
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg'
      },
      {
        name: 'Arturo Campos',
        specialty: 'Decorador',
        experience: '8 años',
        location: 'San Miguel',
        description: 'Especialista en diseño de paisajismo y exteriores residenciales.',
        avatar: 'https://randomuser.me/api/portraits/men/23.jpg'
      },
      {
        name: 'Lorena Vidal',
        specialty: 'Decorador',
        experience: '4 años',
        location: 'San Salvador',
        description: 'Decoradora con enfoque en diseño sostenible y uso de materiales ecológicos.',
        avatar: 'https://randomuser.me/api/portraits/women/24.jpg'
      },
      {
        name: 'Héctor Núñez',
        specialty: 'Decorador',
        experience: '7 años',
        location: 'La Libertad',
        description: 'Experto en diseño de iluminación y efectos visuales para espacios interiores.',
        avatar: 'https://randomuser.me/api/portraits/men/25.jpg'
      },
      {
        name: 'Paola Salazar',
        specialty: 'Decorador',
        experience: '3 años',
        location: 'Santa Tecla',
        description: 'Decoradora especializada en diseño de espacios infantiles y juveniles.',
        avatar: 'https://randomuser.me/api/portraits/women/26.jpg'
      },
      {
        name: 'Raúl Delgado',
        specialty: 'Decorador',
        experience: '9 años',
        location: 'San Salvador',
        description: 'Diseñador de interiores con experiencia en proyectos de restauración de edificios históricos.',
        avatar: 'https://randomuser.me/api/portraits/men/27.jpg'
      },
      {
        name: 'Teresa Romero',
        specialty: 'Decorador',
        experience: '5 años',
        location: 'Ahuachapán',
        description: 'Especialista en Feng Shui y diseño de espacios armoniosos.',
        avatar: 'https://randomuser.me/api/portraits/women/28.jpg'
      },
      {
        name: 'Oscar Paredes',
        specialty: 'Decorador',
        experience: '6 años',
        location: 'San Salvador',
        description: 'Experto en diseño de muebles a medida y carpintería decorativa.',
        avatar: 'https://randomuser.me/api/portraits/men/29.jpg'
      },
      {
        name: 'Beatriz Cisneros',
        specialty: 'Decorador',
        experience: '4 años',
        location: 'Sonsonate',
        description: 'Decoradora con experiencia en diseño de eventos y espacios temporales.',
        avatar: 'https://randomuser.me/api/portraits/women/30.jpg'
      }
    ],
    bilingual: [
      {
        name: 'Daniel Fuentes',
        specialty: 'Bilingüe',
        experience: '6 años',
        location: 'San Salvador',
        description: 'Traductor profesional inglés-español con experiencia en documentos técnicos.',
        avatar: 'https://randomuser.me/api/portraits/men/31.jpg'
      },
      {
        name: 'Isabel Solís',
        specialty: 'Bilingüe',
        experience: '5 años',
        location: 'Santa Ana',
        description: 'Interpretadora simultánea para conferencias y eventos internacionales.',
        avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
      },
      {
        name: 'Andrés Molina',
        specialty: 'Bilingüe',
        experience: '7 años',
        location: 'San Miguel',
        description: 'Asistente bilingüe con experiencia en atención a clientes internacionales.',
        avatar: 'https://randomuser.me/api/portraits/men/33.jpg'
      },
      {
        name: 'Cecilia Duarte',
        specialty: 'Bilingüe',
        experience: '4 años',
        location: 'San Salvador',
        description: 'Profesora de inglés con experiencia en enseñanza a adultos y empresas.',
        avatar: 'https://randomuser.me/api/portraits/women/34.jpg'
      },
      {
        name: 'Manuel Cornejo',
        specialty: 'Bilingüe',
        experience: '8 años',
        location: 'La Libertad',
        description: 'Traductor especializado en textos legales y contratos internacionales.',
        avatar: 'https://randomuser.me/api/portraits/men/35.jpg'
      },
      {
        name: 'Lucía Mercado',
        specialty: 'Bilingüe',
        experience: '3 años',
        location: 'Santa Tecla',
        description: 'Atención al cliente bilingüe para empresas de tecnología.',
        avatar: 'https://randomuser.me/api/portraits/women/36.jpg'
      },
      {
        name: 'Sergio Ponce',
        specialty: 'Bilingüe',
        experience: '5 años',
        location: 'San Salvador',
        description: 'Redactor de contenido bilingüe para sitios web y blogs internacionales.',
        avatar: 'https://randomuser.me/api/portraits/men/37.jpg'
      },
      {
        name: 'Adriana Cortez',
        specialty: 'Bilingüe',
        experience: '6 años',
        location: 'Ahuachapán',
        description: 'Traductora de literatura y libros del inglés al español.',
        avatar: 'https://randomuser.me/api/portraits/women/38.jpg'
      },
      {
        name: 'Erik Vásquez',
        specialty: 'Bilingüe',
        experience: '4 años',
        location: 'San Salvador',
        description: 'Soporte técnico bilingüe para software y aplicaciones.',
        avatar: 'https://randomuser.me/api/portraits/men/39.jpg'
      },
      {
        name: 'Verónica Quintanilla',
        specialty: 'Bilingüe',
        experience: '7 años',
        location: 'Sonsonate',
        description: 'Consultora bilingüe para empresas que buscan expandirse a mercados internacionales.',
        avatar: 'https://randomuser.me/api/portraits/women/40.jpg'
      }
    ],
    developer: [
      {
        name: 'David Marroquín',
        specialty: 'Desarrollador Web',
        experience: '6 años',
        location: 'San Salvador',
        description: 'Desarrollador frontend especializado en React y JavaScript moderno.',
        avatar: 'https://randomuser.me/api/portraits/men/41.jpg'
      },
      {
        name: 'Natalia Chávez',
        specialty: 'Desarrollador Web',
        experience: '5 años',
        location: 'Santa Ana',
        description: 'Desarrolladora backend con experiencia en Node.js y bases de datos.',
        avatar: 'https://randomuser.me/api/portraits/women/42.jpg'
      },
      {
        name: 'Roberto Quintanilla',
        specialty: 'Desarrollador Web',
        experience: '8 años',
        location: 'San Miguel',
        description: 'Desarrollador full stack con experiencia en proyectos e-commerce.',
        avatar: 'https://randomuser.me/api/portraits/men/43.jpg'
      },
      {
        name: 'Fátima Escobar',
        specialty: 'Desarrollador Web',
        experience: '4 años',
        location: 'San Salvador',
        description: 'Desarrolladora móvil especializada en aplicaciones para iOS y Android.',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      {
        name: 'Jorge Alvarado',
        specialty: 'Desarrollador Web',
        experience: '7 años',
        location: 'La Libertad',
        description: 'Experto en desarrollo de APIs y microservicios con Python.',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
      },
      {
        name: 'Camila Bonilla',
        specialty: 'Desarrollador Web',
        experience: '3 años',
        location: 'Santa Tecla',
        description: 'Desarrolladora frontend con experiencia en Angular y TypeScript.',
        avatar: 'https://randomuser.me/api/portraits/women/46.jpg'
      },
      {
        name: 'Luis Arévalo',
        specialty: 'Desarrollador Web',
        experience: '9 años',
        location: 'San Salvador',
        description: 'Arquitecto de software con experiencia en sistemas empresariales.',
        avatar: 'https://randomuser.me/api/portraits/men/47.jpg'
      },
      {
        name: 'Mariana Rivas',
        specialty: 'Desarrollador Web',
        experience: '5 años',
        location: 'Ahuachapán',
        description: 'Desarrolladora especializada en WordPress y CMS personalizados.',
        avatar: 'https://randomuser.me/api/portraits/women/48.jpg'
      },
      {
        name: 'Carlos Melgar',
        specialty: 'Desarrollador Web',
        experience: '6 años',
        location: 'San Salvador',
        description: 'Experto en desarrollo de aplicaciones web progresivas (PWA).',
        avatar: 'https://randomuser.me/api/portraits/men/49.jpg'
      },
      {
        name: 'Valentina Zelaya',
        specialty: 'Desarrollador Web',
        experience: '4 años',
        location: 'Sonsonate',
        description: 'Desarrolladora full stack con experiencia en Vue.js y Laravel.',
        avatar: 'https://randomuser.me/api/portraits/women/50.jpg'
      }
    ]
  };
  
  // Obtener los especialistas de la especialidad seleccionada
  const specialtyEmployees = employees[specialty];
  
  // Mostrar los especialistas
  specialtyEmployees.forEach(employee => {
    const employeeCard = document.createElement('div');
    employeeCard.className = 'employee-card';
    employeeCard.innerHTML = `
      <img src="${employee.avatar}" alt="${employee.name}" class="employee-avatar">
      <div class="employee-info">
        <div class="employee-name">${employee.name}</div>
        <div class="employee-specialty">${employee.specialty}</div>
        <div class="employee-description">${employee.description}</div>
        <div class="employee-meta">
          <div class="employee-location">
            <i class="fas fa-map-marker-alt"></i> ${employee.location}
          </div>
          <div class="employee-experience">
            <i class="fas fa-briefcase"></i> ${employee.experience}
          </div>
        </div>
      </div>
    `;
    employeeResults.appendChild(employeeCard);
  });
}