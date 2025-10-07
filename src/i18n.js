import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Navbar
        inicio: "Home",
        datosPersonales: "Personal Data",
        formacion: "Education",
        experienciaLaboral: "Work Experience",
        habilidades: "Skills",
        portafolio: "Portfolio",
        contacto: "Contact",
        // HeroSection
        holaSoy: "Hello, I'm",
        desarrolladorWeb: "Web Developer",
        // PersonalData
        nombre: "Name",
        fechaNacimiento: "Date of Birth",
        nacionalidad: "Nationality",
        residencia: "Residence",
        email: "Email",
        celular: "Phone",
        descargarCV: "Download CV",
        // Banners
        bannerAlt:
          "Banner image showing a person working on a computer with code",
        // Footer
        sitioDesarrolladoPor: "This site was developed by",
        derechosReservados: "All rights reserved",
        // SectionTitle
        datosPersonales: "Personal Data",
        formacion: "Education",
        experienciaLaboral: "Work Experience",
        habilidades: "Skills",
        portafolio: "Portfolio",
        contacto: "Contact",
        // Timeline
        timelineFormacion: "Education Timeline",
        // Education Items
        licenciaturaCienciasComputacion: "Bachelor of Informatics",
        licenciaturaCienciasComputacionText:
          "I am an advanced student and in these years I learned to design and build software, to organize information to make decisions and to take care of the infrastructure so that everything works well. I am left with a way of working: order, clarity and focus on results, always as a team.",
        programadorFullStack: "Full Stack Programmer",
        programadorFullStackText:
          "RollingCode. 2020. Experience in web programming with tools and concepts such as Scrum methodology, HTML5, CSS3, Bootstrap 4, GIT, JavaScript, LocalStorage, React.js, MongoDB, among others.",
        cursoInglesAdultos: "English Course for Adults",
        cursoInglesAdultosText:
          "A.T.I.C.A.N.A. 2021. Intermediate English with a focus on communication and written comprehension.",
        analistaProgramador:
          "Knowledge Analyst, Dimension Programmer",
        analistaProgramadorText:
          "Training in basic knowledge of Java and Object Oriented Programming.",
        ingenieriaSistemas: "Systems Engineering",
        ingenieriaSistemasText:
          "UTN. 2016. I acquired fundamental knowledge in software development, systems analysis and IT infrastructure.",
        tecnicoIT: "Professional and Personal IT Technician",
        tecnicoITText:
          "Technical School N°5. 2015. Technical secondary education with knowledge in computing and technology.",
        tecnicoReparacionPC: "PC Repair Technician",
        tecnicoReparacionPCText:
          "UTN. 2014. Diagnosis and repair of hardware, operating systems and troubleshooting in networks.",

        jovenInversorTitle: "Young Investor Course: First Steps",
        jovenInversorText:
          "Course on personal finance and basic investment principles.",
        jovenInversorDate: "2023",

        englishForDevelopersTitle: "English for Developers",
        englishForDevelopersText:
          "Specific training in technical vocabulary and communication skills for the IT field.",
        englishForDevelopersDate: "2023",

        iaCourseTitle: "Introductory Course to AI Development",
        iaCourseText:
          "Introductory training to the world of Artificial Intelligence and its programming applications.",
        iaCourseDate: "2024",

        // Experience Items
        seccionAlumnosTitle: "Student Section",
        seccionAlumnosDescription:
          "I handle and manage student procedures. In addition, I provide technological support and technical assistance: I diagnose and solve incidents, maintain equipment and networks, and optimize processes with digital tools.",
        seccionAlumnosDate: "2022 - Present",

        fundacionSolTitle: "S.O.L. Foundation — Website Development",
        fundacionSolDescription:
          "I design and develop the institutional website end-to-end: content architecture, responsive UI, basic SEO and deployment, with a focus on accessibility and performance.",
        fundacionSolDate: "2025",

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
        contactText:
          "I am available to discuss new projects, collaborations, or job opportunities. Feel free to send me a message.",
        // Portfolio
        portfolioSubtitle: "Main Projects",
      },
    },
    es: {
      translation: {
        // Navbar
        inicio: "Inicio",
        datosPersonales: "Datos Personales",
        formacion: "Formación",
        experienciaLaboral: "Experiencia Laboral",
        habilidades: "Habilidades",
        portafolio: "Portafolio",
        contacto: "Contacto",
        // HeroSection
        holaSoy: "Hola, soy",
        desarrolladorWeb: "Desarrollador Web",
        // PersonalData
        nombre: "Nombre",
        fechaNacimiento: "Fecha de Nacimiento",
        nacionalidad: "Nacionalidad",
        residencia: "Residencia",
        email: "Email",
        celular: "Celular",
        descargarCV: "Descargar CV",
        // Banners
        bannerAlt:
          "Imagen de banner que muestra una persona trabajando en una computadora con código",
        // Footer
        sitioDesarrolladoPor: "Este sitio fue desarrollado por",
        derechosReservados: "Todos los derechos reservados",
        // SectionTitle
        datosPersonales: "Datos Personales",
        formacion: "Formación",
        experienciaLaboral: "Experiencia Laboral",
        habilidades: "Habilidades",
        portafolio: "Portafolio",
        contacto: "Contacto",
        // Timeline
        timelineFormacion: "Cronología de Formación",
        // Education Items
        licenciaturaCienciasComputacion: "Licenciatura en Informatica",
        licenciaturaCienciasComputacionText:
          "Soy estudiante avanzado y en estos años aprendí a diseñar y construir software, a organizar la información para tomar decisiones y a cuidar la infraestructura para que todo funcione bien. Me quedo con una forma de trabajo: orden, claridad y foco en resultados, siempre en equipo.",
        programadorFullStack: "Programador Full Stack",
        programadorFullStackText:
          "RollingCode. 2020. Experiencia en programación web con herramientas y conceptos como metodología Scrum, HTML5, CSS3, Bootstrap 4, GIT, JavaScript, LocalStorage, React.js, MongoDB, entre otros.",
        cursoInglesAdultos: "Curso de Inglés para Adultos",
        cursoInglesAdultosText:
          "A.T.I.C.A.N.A. 2021. Inglés intermedio con enfoque en comunicación y comprensión escrita.",
        analistaProgramador:
          "Analista de Conocimientos, Programador Dimensión",
        analistaProgramadorText:
          "Capacitación en conocimientos básicos de Java y Programación Orientada a Objetos.",
        ingenieriaSistemas: "Ingeniería en Sistemas",
        ingenieriaSistemasText:
          "UTN. 2016. Adquirí conocimientos fundamentales en desarrollo de software, análisis de sistemas e infraestructura IT.",
        tecnicoIT: "Técnico Profesional y Personal en IT",
        tecnicoITText:
          "Escuela Técnica N°5. 2015. Formación secundaria técnica con conocimientos en informática y tecnología.",
        tecnicoReparacionPC: "Técnico en Reparación de PC",
        tecnicoReparacionPCText:
          "UTN. 2014. Diagnóstico y reparación de hardware, sistemas operativos y solución de problemas en redes.",
        jovenInversorTitle: "Curso Joven Inversor: Primeros Pasos",
        jovenInversorText:
          "Curso sobre finanzas personales y principios básicos de inversión.",
        jovenInversorDate: "2023",
        englishForDevelopersTitle: "Inglés para Desarrolladores",
        englishForDevelopersText:
          "Formación específica en vocabulario técnico y habilidades comunicativas para el ámbito IT.",
        englishForDevelopersDate: "2023",

        iaCourseTitle: "Curso de Iniciación al Desarrollo con IA",
        iaCourseText:
          "Formación introductoria al mundo de la Inteligencia Artificial y sus aplicaciones en programación.",
        iaCourseDate: "2024",

        // Experience Items
        seccionAlumnosTitle: "Seccion Alumnos",
        seccionAlumnosDescription:
          "Atiendo y gestiono trámites estudiantiles. Además, brindo apoyo tecnológico y soporte técnico: diagnostico y soluciono incidentes, mantengo equipos y redes, y optimizo procesos con herramientas digitales.",
        seccionAlumnosDate: "2022 - Presente",

        fundacionSolTitle: "Fundación S.O.L — Desarrollo del sitio web",
        fundacionSolDescription:
          "Diseño y desarrollo la web institucional end-to-end: arquitectura de contenidos, UI responsive, SEO básico y despliegue, con foco en accesibilidad y rendimiento.",
        fundacionSolDate: "2025",

        // Skills
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
        // Contact
        contactTitle: "¡Hablemos!",
        contactText:
          "Estoy disponible para conversar sobre nuevos proyectos, colaboraciones o oportunidades laborales. No dudes en enviarme un mensaje.",
        // Portfolio
        portfolioSubtitle: "Proyectos Principales",
      },
    },
  },
  lng: "es", // if you're using a language detector, do not define the lng option
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
