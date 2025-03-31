import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Skills from './src/components/Skills';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          profile: "Profile",
          education: "Education",
          skills: "Skills",
          projectsLink: "Projects",
          contact: "Contact",
          nombre: "Baroni Eliseo",
          ocupacion: "Programmer",
          name: "Sobre mi",
          description: "Desarrollador full stack con experiencia en programación web. Dominio básico de varios lenguajes de programación. Capaz de autogestión eficaz en proyectos independientes y buenas habilidades de colaboración dentro de un equipo productivo.",
          downloadCV: "Descargar CV",          
          datosPersonales: "Personal Data",
          formacion: "Education",
          portafolio: "Portfolio",
          contacto: "Contacto",
          fechaNacimiento: "Date of Birth: 10/03/1997",
          dni: "DNI: 40355406",
          lugarNacimiento: "Place of Birth: Argentina - San Miguel de Tucumán",
          telefono: "Phone: +54 3815123346",
          licenciaturaCienciasComputacion: "Bachelor's Degree in Computer Science",
          licenciaturaCienciasComputacionText: "Siglo 21 University. 2021 - Present. Currently studying the degree, focusing on data analysis, resource optimization, network security, and solution development.",
          programadorFullStack: "Full Stack Developer",
          programadorFullStackText: "RollingCode. 2020. Experience in web programming with tools and concepts like Scrum methodology, HTML5, CSS3, Bootstrap 4, GIT, JavaScript, LocalStorage, React.js, MongoDB, among others.",
          cursoInglesAdultos: "English Course for Adults",
          cursoInglesAdultosText: "A.T.I.C.A.N.A. 2021. Intermediate English with a focus on communication and written comprehension.",
          analistaProgramador: "Knowledge Analyst, Dimensión Programmer",
          analistaProgramadorText: "Plan 111mil. 2017. Basic training in Java knowledge and Object-Oriented Programming.",
          ingenieriaSistemas: "Systems Engineering",
          ingenieriaSistemasText: "UTN. 2016. Acquired fundamental knowledge in software development, system analysis, and IT infrastructure.",
          tecnicoIT: "Technical Professional and IT Personnel",
          tecnicoITText: "Escuela Técnica N°5. 2015. Technical secondary education with knowledge in computing and technology.",
          tecnicoReparacionPC: "PC Repair Technician",
          tecnicoReparacionPCText: "UTN. 2014. Hardware diagnostics and repair, operating systems, and network troubleshooting.",
          habilidadesDesarrollo: "Development",
          habilidadesDiseno: "Design",
          habilidadesPersonal: "Personal",
          html5: "HTML5",
          css3: "CSS3",
          bootstrap: "Bootstrap 4",
          git: "GIT",
          javascript: "JavaScript",
          localstorage: "LocalStorage",
          java: "Java",
          react: "React",
          mongodb: "MongoDB",
          mysql: "MySQL",
          ciberseguridad: "Cybersecurity",
          builder3d: "3D Builder",
          photoshop: "Adobe Photoshop",
          fusion360: "Autodesk Fusion 360",
          publisher: "Adobe Publisher",
          lightroom: "Adobe Lightroom",
          crecer: "Desire to grow",
          metodologiaScrum: "Scrum Methodology",
          liderazgo: "Leadership",
          capacidadDetalles: "Attention to detail",
          responsabilidad: "High levels of responsibility",
          creatividad: "Creativity",
          herramientasDigitales: "Digital tool proficiency",
          ingles: "English",
          projects: {
            1: {
              title: "Wonderful World",
              description: "A travel blog project inviting us to discover different places around the world.",
              badgeText: "Rolling Project",
              type: "Travel Blog",
            },
            2: {
              title: "Rolling News",
              description: "A news website project, including weather forecasts and currency prices.",
              badgeText: "Rolling Project",
              type: "News",
            },
            3: {
              title: "Rolling Ubisoft",
              description: "A gaming page project inspired by the Ubisoft platform.",
              badgeText: "Rolling Project",
              type: "Video Games",
            },
            4: {
              title: "Discord Bot",
              description: "A Discord bot built with JavaScript that assigns roles and sends automatic messages.",
              badgeText: "Personal",
              type: "Personal Project",
            },
          },
          description2: "Feel free to get in touch with me by filling out the form or sending me a WhatsApp message.",
          email: "Email",
          subject: "Subject",
          message: "Your message",
          send: "Send",
          copyright: "Developed with ❤️ "

        },
      },
      es: {
        translation: {
          home: "Inicio",
          profile: "Perfil",
          education: "Formación",
          skills: "Habilidades",
          projectsLink: "Proyectos",
          contact: "Contacto",
          nombre: "Baroni Eliseo",
          ocupacion: "Programador",
          name: "About me",
          description: "Full stack developer with web programming experience. Basic mastery of various programming languages. Capable of effective self-management in independent projects and strong collaboration skills within a productive team.",
          downloadCV: "Download CV",
          datosPersonales: "Datos Personales",
          formacion: "Formación",
          habilidades: "Skills",
          portafolio: "Portafolio",
          contacto: "Contact",
          fechaNacimiento: "Fecha de Nacimiento: 10/03/1997",
          dni: "DNI: 40355406",
          lugarNacimiento: "Lugar de Nacimiento: Argentina - San Miguel de Tucumán",
          telefono: "Teléfono: +54 3815123346",
          licenciaturaCienciasComputacion: "Licenciatura en Ciencias de la Computación",
          licenciaturaCienciasComputacionText: "Universidad Siglo 21. 2021 - Presente. Actualmente cursando la carrera, enfocándome en análisis de datos, optimización de recursos, seguridad en redes y desarrollo de soluciones.",
          programadorFullStack: "Programador Full Stack",
          programadorFullStackText: "RollingCode. 2020. Experiencia en programación web con herramientas y conceptos como metodología Scrum, HTML5, CSS3, Bootstrap 4, GIT, JavaScript, LocalStorage, React.js, MongoDB, entre otros.",
          cursoInglesAdultos: "Curso de Inglés para Adultos",
          cursoInglesAdultosText: "A.T.I.C.A.N.A. 2021. Inglés intermedio con enfoque en comunicación y comprensión escrita.",
          analistaProgramador: "Analista de Conocimientos, Programador Dimensión",
          analistaProgramadorText: "Plan 111mil. 2017. Capacitación en conocimientos básicos de Java y Programación Orientada a Objetos.",
          ingenieriaSistemas: "Ingeniería en Sistemas",
          ingenieriaSistemasText: "UTN. 2016. Adquirí conocimientos fundamentales en desarrollo de software, análisis de sistemas e infraestructura IT.",
          tecnicoIT: "Técnico Profesional y Personal en IT",
          tecnicoITText: "Escuela Técnica N°5. 2015. Formación secundaria técnica con conocimientos en informática y tecnología.",
          tecnicoReparacionPC: "Técnico en Reparación de PC",
          tecnicoReparacionPCText: "UTN. 2014. Diagnóstico y reparación de hardware, sistemas operativos y solución de problemas en redes.",
          habilidadesDesarrollo:"Desarrollo",
          habilidadesDiseno: "Diseño",
          habilidadesPersonal: "Personal",
          html5: "HTML5",
          css3: "CSS3",
          bootstrap: "Bootstrap 4",
          git: "GIT",
          javascript: "JavaScript",
          localstorage: "LocalStorage",
          java: "Java",
          react: "React",
          mongodb: "MongoDB",
          mysql: "MySQL",
          ciberseguridad: "Ciberseguridad",
          builder3d: "3D Builder",
          photoshop: "Adobe Photoshop",
          fusion360: "Autodesk Fusion 360",
          publisher: "Adobe Publisher",
          lightroom: "Adobe Lightroom",
          crecer: "Ganas de crecer",
          metodologiaScrum: "Metodología Scrum",
          liderazgo: "Liderazgo",
          capacidadDetalles: "Capacidad para los detalles",
          responsabilidad: "Altos márgenes de responsabilidad",
          creatividad: "Creatividad",
          herramientasDigitales: "Manejo de herramientas digitales",
          ingles: "Inglés",
          projects: {
            1: {
              title: "Maravilloso Mundo",
              description: "Proyecto de un blog de viajes que nos invita a conocer distintos lugares del mundo.",
              badgeText: "Proyecto-Rolling",
              type: "Blog de viajes",
            },
            2: {
              title: "Rolling News",
              description: "Proyecto de una página de noticias, pronóstico del tiempo y precio de moneda.",
              badgeText: "Proyecto-Rolling",
              type: "Noticias",
            },
            3: {
              title: "Rolling Ubisoft",
              description: "Proyecto de una página de juegos basada en la plataforma Ubisoft.",
              badgeText: "Proyecto-Rolling",
              type: "Videojuegos",
            },
            4: {
              title: "Discord Bot",
              description: "Un bot de Discord creado con JavaScript que permite asignar roles y enviar mensajes automáticos.",
              badgeText: "Personal",
              type: "Proyecto personal",
            },
          },
          description2: "No dudes en ponerte en contacto conmigo completando el formulario o enviándome un Whatsapp.",
          email: "Email",
          subject: "Asunto",
          message: "Tu mensaje",
          send: "Enviar",
          copyright: "Desarrollado con ❤️ "


        },
      },
    },
    lng: "es", // Idioma predeterminado
    fallbackLng: "es", // Idioma fallback en caso de que no se encuentre una traducción
    interpolation: {
      escapeValue: false, // no escapar valores
    },
  });

export default i18next;
