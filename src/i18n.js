import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // General
        lugar: "Place",
        ano: "Year",
        presente: "Present",

        // Navbar & Sections
        inicio: "Home",
        datosPersonales: "Personal Data",
        formacion: "Education",
        experienciaLaboral: "Work Experience",
        habilidades: "Skills",
        portafolio: "Portfolio",
        contacto: "Contact",

        // HeroSection
        holaSoy: "Hello, I'm",
        desarrolladorWeb: "Developer",
        description: "Full stack developer focused on web and advanced student of the Bachelor's degree in Informatics. I transform needs into functional solutions with performance, accessibility, and maintainability. End-to-end experience, documentation, and support.",

        // PersonalData
        nombre: "Eliseo Baroni",
        ocupacion: "Developer",
        fechaNacimiento: "Date of Birth",
        dni: "ID: 40355406",
        lugarNacimiento: "Place of Birth: San Miguel de Tucumán",
        nacionalidad: "Nationality",
        residencia: "Residence",
        email: "Email",
        celular: "Phone",
        descargarCV: "Download CV",

        // Banner
        bannerAlt: "Banner image showing a person working on a computer with code",

        // Footer
        sitioDesarrolladoPor: "This site was developed by",
        derechosReservados: "All rights reserved",

        // Timeline
        timelineFormacion: "Education Timeline",
        timelineExperiencia: "Work Experience Timeline",

        // Education Items
        licenciaturaCienciasComputacionTitle: "Bachelor of Informatics",
        licenciaturaCienciasComputacionPlace: "Universidad Siglo XXI",
        licenciaturaCienciasComputacionDate: "In Progress",
        licenciaturaCienciasComputacionText: "As an advanced student, I've learned to design and build software, organize information for decision-making, and manage infrastructure. My key takeaway is a work methodology: order, clarity, and a results-oriented focus, always as a team.",

        iaCourseTitle: "Introductory Course to AI Development",
        iaCoursePlace: "BIG School",
        iaCourseDate: "2024",
        iaCourseText: "Introductory training to the world of Artificial Intelligence and its programming applications.",

        englishForDevelopersTitle: "English for Developers",
        englishForDevelopersPlace: "Vlue English",
        englishForDevelopersDate: "2023",
        englishForDevelopersText: "Specific training in technical vocabulary and communication skills for the IT field.",

        jovenInversorTitle: "Technical Analysis Course",
        jovenInversorPlace: "Joven Inversor",
        jovenInversorDate: "2023",
        jovenInversorText: "Course on personal finance administration and Financial Technical Analysis.",

        programadorFullStackTitle: "Full Stack Programmer",
        programadorFullStackPlace: "RollingCode School",
        programadorFullStackDate: "2020",
        programadorFullStackText: "Experience in web programming with tools like Scrum, HTML5, CSS3, Bootstrap, GIT, JavaScript, React.js, and MongoDB.",

        cursoInglesAdultosTitle: "English Course for Adults",
        cursoInglesAdultosPlace: "A.T.I.C.A.N.A.",
        cursoInglesAdultosDate: "2021",
        cursoInglesAdultosText: "Intermediate English with a focus on communication and written comprehension.",

        introduccionPentestingTitle: "Introduction to Pentesting",
        introduccionPentestingPlace: "UTN",
        introduccionPentestingDate: "2018",
        introduccionPentestingText: "Acquired basic knowledge of ethical hacking and information security.",

        analistaProgramadorTitle: "Knowledge Analyst, Dimension Programmer",
        analistaProgramadorPlace: "Plan 111 mil",
        analistaProgramadorDate: "2017",
        analistaProgramadorText: "Training in basic knowledge of Java and Object-Oriented Programming.",

        ingenieriaSistemasTitle: "Systems Engineering",
        ingenieriaSistemasPlace: "U.T.N.",
        ingenieriaSistemasDate: "2016",
        ingenieriaSistemasText: "Acquired fundamental knowledge in software development, systems analysis, and IT infrastructure.",

        tecnicoITTitle: "Professional and Personal IT Technician",
        tecnicoITPlace: "Escuela Técnica N°5",
        tecnicoITDate: "2015",
        tecnicoITText: "Technical secondary education with knowledge in computing and technology.",

        tecnicoReparacionPCTitle: "Intermediate PC Repair Technician",
        tecnicoReparacionPCPlace: "U.T.N.",
        tecnicoReparacionPCDate: "2014",
        tecnicoReparacionPCText: "Diagnosis and repair of hardware, operating systems, and troubleshooting in networks.",

        // Experience Items
        seccionAlumnosTitle: "Student Section",
        seccionAlumnosPlace: "Facultad de Cs. Exactas y Naturales - U.N.T.",
        seccionAlumnosDate: "2022 - Present",
        seccionAlumnosDescription: "I handle student procedures and provide tech support: diagnosing and solving incidents, maintaining equipment and networks, and optimizing processes with digital tools.",

        fundacionSolTitle: "S.O.L. Foundation — Website Development",
        fundacionSolPlace: "Fundación S.O.L.",
        fundacionSolDate: "2025",
        fundacionSolDescription: "I design and develop the institutional website end-to-end: content architecture, responsive UI, basic SEO, and deployment, with a focus on accessibility and performance.",

        // Skills
        habilidadesDesarrollo: "Development",
        habilidadesDiseno: "Design",
        habilidadesPersonal: "Personal",
        html5: "HTML5",
        css3: "CSS3",
        bootstrap: "Bootstrap 4",
        git: "GIT",
        javascript: "JavaScript",
        desarrolloIA: "AI Development",
        openai: "OpenAI",
        react: "React.js",
        mongodb: "MongoDB",
        nodejs: "Node.js",
        scrum: "Scrum",
        figma: "Figma",
        canva: "Canva",
        photoshop: "Photoshop",
        comunicacion: "Communication",
        trabajoEnEquipo: "Teamwork",
        resolucionDeProblemas: "Problem Solving",
        creatividad: "Creativity",
        gestionDelTiempo: "Time Management",
        liderazgo: "Leadership",
        
        // Contact
        contactTitle: "Let's Talk!",
        contactText: "I am available to discuss new projects, collaborations, or job opportunities. Feel free to send me a message.",
        thanksForJoining: "Thanks for joining!",
        description2: "I am available to discuss new projects, collaborations, or job opportunities. Feel free to send me a message.",
        message: "Message",
        sending: "Sending...",
        send: "Send",

        // Portfolio
        portfolioSubtitle: "Main Projects",
        projects: {
          "1": {
            title: "Wonderful World",
            description: "A travel blog, where you can see different places I have visited.",
            badgeText: "Maquetado",
            type: "Web"
          },
          "2": {
            title: "Rolling News",
            description: "A news blog, where you can see the most relevant news of the day.",
            badgeText: "Maquetado",
            type: "Web"
          },
          "3": {
            title: "Rolling Ubisoft",
            description: "A clone of the Ubisoft page, made to practice my web layout skills.",
            badgeText: "Maquetado",
            type: "Web"
          },
          "4": {
            title: "Discord Bot",
            description: "A bot for the Discord platform, which allows you to manage roles, play music, and more.",
            badgeText: "Development",
            type: "Bot"
          },
          "5": {
            title: "Personal Website",
            description: "My personal website, where you can find my portfolio, my CV, and my contact information.",
            badgeText: "Development",
            type: "Web"
          }
        },

        // Modal
        zoomIn: "Zoom In",
        zoomOut: "Zoom Out",
        resetZoom: "Reset Zoom"
      },
    },
    es: {
      translation: {
        // General
        lugar: "Lugar",
        ano: "Año",
        presente: "Presente",

        // Navbar & Sections
        inicio: "Inicio",
        datosPersonales: "Datos Personales",
        formacion: "Formación",
        experienciaLaboral: "Experiencia Laboral",
        habilidades: "Habilidades",
        portafolio: "Portafolio",
        contacto: "Contacto",

        // HeroSection
        holaSoy: "Hola, soy",
        desarrolladorWeb: "Desarrollador",
        description: "Desarrollador full stack enfocado en web y estudiante avanzado de la carrera de Lic. en Informática. Transformo necesidades en soluciones funcionales con performance, accesibilidad y mantenibilidad. Experiencia end-to-end, documentación y soporte.",
        
        // PersonalData
        nombre: "Eliseo Baroni",
        ocupacion: "Desarrollador",
        fechaNacimiento: "Fecha de Nacimiento",
        dni: "DNI: 40355406",
        lugarNacimiento: "Lugar de Nacimiento: San Miguel de Tucumán",
        nacionalidad: "Nacionalidad",
        residencia: "Residencia",
        email: "Email",
        celular: "Celular",
        descargarCV: "Descargar CV",

        // Banner
        bannerAlt: "Imagen de banner que muestra una persona trabajando en una computadora con código",

        // Footer
        sitioDesarrolladoPor: "Este sitio fue desarrollado por",
        derechosReservados: "Todos los derechos reservados",

        // Timeline
        timelineFormacion: "Cronología de Formación",
        timelineExperiencia: "Cronología de Experiencia Laboral",

        // Education Items
        licenciaturaCienciasComputacionTitle: "Licenciatura en Informática",
        licenciaturaCienciasComputacionPlace: "Universidad Siglo XXI",
        licenciaturaCienciasComputacionDate: "En curso",
        licenciaturaCienciasComputacionText: "Como estudiante avanzado, aprendí a diseñar y construir software, organizar información para la toma de decisiones y gestionar la infraestructura. Mi principal aprendizaje es una metodología de trabajo: orden, claridad y un enfoque orientado a resultados, siempre en equipo.",

        iaCourseTitle: "Curso de Iniciación al Desarrollo con IA",
        iaCoursePlace: "BIG School",
        iaCourseDate: "2024",
        iaCourseText: "Formación introductoria al mundo de la Inteligencia Artificial y sus aplicaciones en programación.",

        englishForDevelopersTitle: "Inglés para Desarrolladores",
        englishForDevelopersPlace: "Vlue English",
        englishForDevelopersDate: "2024",
        englishForDevelopersText: "Formación específica en vocabulario técnico y habilidades comunicativas para el ámbito IT.",

        jovenInversorTitle: "Curso de Analisis Tecnico",
        jovenInversorPlace: "Joven Inversor",
        jovenInversorDate: "2023",
        jovenInversorText: "Curso de administracion de finanzas personales y Analisis Tecnico Financiero.",

        programadorFullStackTitle: "Programador Full Stack",
        programadorFullStackPlace: "RollingCode School",
        programadorFullStackDate: "2020",
        programadorFullStackText: "Experiencia en programación web con herramientas como Scrum, HTML5, CSS3, Bootstrap, GIT, JavaScript, React.js y MongoDB.",

        cursoInglesAdultosTitle: "Curso de Inglés para Adultos",
        cursoInglesAdultosPlace: "A.T.I.C.A.N.A.",
        cursoInglesAdultosDate: "2021",
        cursoInglesAdultosText: "Inglés intermedio con enfoque en comunicación y comprensión escrita.",

        introduccionPentestingTitle: "Introducción al Pentesting",
        introduccionPentestingPlace: "UTN",
        introduccionPentestingDate: "2018",
        introduccionPentestingText: "Conocimientos básicos de hacking ético y seguridad informática.",

        analistaProgramadorTitle: "Analista de Conocimientos, Programador Dimensión",
        analistaProgramadorPlace: "Plan 111 mil",
        analistaProgramadorDate: "2017",
        analistaProgramadorText: "Capacitación en conocimientos básicos de Java y Programación Orientada a Objetos.",

        ingenieriaSistemasTitle: "Ingeniería en Sistemas",
        ingenieriaSistemasPlace: "U.T.N.",
        ingenieriaSistemasDate: "2016",
        ingenieriaSistemasText: "Adquirí conocimientos fundamentales en desarrollo de software, análisis de sistemas e infraestructura IT.",

        tecnicoITTitle: "Técnico Profesional y Personal en IT",
        tecnicoITPlace: "Escuela Técnica N°5",
        tecnicoITDate: "2015",
        tecnicoITText: "Formación secundaria técnica con conocimientos en informática y tecnología.",

        tecnicoReparacionPCTitle: "Reparador de PC Intermedio",
        tecnicoReparacionPCPlace: "U.T.N.",
        tecnicoReparacionPCDate: "2014",
        tecnicoReparacionPCText: "Diagnóstico y reparación de hardware, sistemas operativos y solución de problemas en redes.",

        // Experience Items
        seccionAlumnosTitle: "Sección Alumnos",
        seccionAlumnosPlace: "Facultad de Cs. Exactas y Naturales - U.N.T.",
        seccionAlumnosDate: "2022 - Presente",
        seccionAlumnosDescription: "Atiendo y gestiono trámites estudiantiles. Además, brindo apoyo tecnológico y soporte técnico: diagnostico y soluciono incidentes, mantengo equipos y redes, y optimizo procesos con herramientas digitales.",

        fundacionSolTitle: "Fundación S.O.L — Desarrollo del sitio web",
        fundacionSolPlace: "Fundación S.O.L.",
        fundacionSolDate: "2025",
        fundacionSolDescription: "Diseño y desarrollo la web institucional end-to-end: arquitectura de contenidos, UI responsive, SEO básico y despliegue, con foco en accesibilidad y rendimiento.",

        // Skills & Contact
        habilidadesDesarrollo: "Desarrollo",
        habilidadesDiseno: "Diseño",
        habilidadesPersonal: "Personal",
        html5: "HTML5",
        css3: "CSS3",
        bootstrap: "Bootstrap 4",
        git: "GIT",
        javascript: "JavaScript",
        desarrolloIA: "Desarrollo con IA",
        openai: "OpenAI",
        react: "React.js",
        mongodb: "MongoDB",
        nodejs: "Node.js",
        scrum: "Scrum",
        figma: "Figma",
        canva: "Canva",
        photoshop: "Photoshop",
        comunicacion: "Comunicación",
        trabajoEnEquipo: "Trabajo en equipo",
        resolucionDeProblemas: "Resolución de problemas",
        creatividad: "Creatividad",
        gestionDelTiempo: "Gestión del tiempo",
        liderazgo: "Liderazgo",
        contactTitle: "¡Hablemos!",
        contactText: "Estoy disponible para conversar sobre nuevos proyectos, colaboraciones o oportunidades laborales. No dudes en enviarme un mensaje.",
        thanksForJoining: "¡Gracias por unirte!",
        description2: "Estoy disponible para conversar sobre nuevos proyectos, colaboraciones u oportunidades laborales. No dudes en enviarme un mensaje.",
        message: "Mensaje",
        sending: "Enviando...",
        send: "Enviar",
        
        // Portfolio
        portfolioSubtitle: "Proyectos Principales",
        projects: {
          "1": {
            title: "Maravilloso Mundo",
            description: "Un blog de viajes, donde puedes ver diferentes lugares que he visitado.",
            badgeText: "Maquetado",
            type: "Web"
          },
          "2": {
            title: "Rolling News",
            description: "Un blog de noticias, donde puedes ver las noticias más relevantes del día.",
            badgeText: "Maquetado",
            type: "Web"
          },
          "3": {
            title: "Rolling Ubisoft",
            description: "Un clon de la página de Ubisoft, hecho para practicar mis habilidades de maquetación web.",
            badgeText: "Maquetado",
            type: "Web"
          },
          "4": {
            title: "Discord Bot",
            description: "Un bot para la plataforma Discord, que te permite administrar roles, reproducir música y más.",
            badgeText: "Desarrollo",
            type: "Bot"
          },
          "5": {
            title: "Sitio Web Personal",
            description: "Mi sitio web personal, donde puedes encontrar mi portafolio, mi CV y mi información de contacto.",
            badgeText: "Desarrollo",
            type: "Web"
          }
        },
        
        // Modal
        zoomIn: "Acercar",
        zoomOut: "Alejar",
        resetZoom: "Restablecer Zoom"
      },
    },
  },
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
