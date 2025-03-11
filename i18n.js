import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to React",
          maravillosoMundo: "Wonderful World",
          blogViajes: "Travel blog inviting us to discover different places around the world.",
          rollingNews: "Rolling News",
          noticias: "News page, weather forecast, and currency price.",
          rollingUbisoft: "Rolling Ubisoft",
          paginaDeJuegos: "A page about video games based on Ubisoft platform.",
          discordBot: "Discord Bot",
          discordBotDescription: "A Discord bot created with JavaScript that assigns roles and sends automatic messages.",
          eliseoBaroni: "Eliseo Baroni",
          paginaProfesional: "Professional website of Eliseo Baroni.",
          proyectoRolling: "Rolling Project",
          proyectoPersonal: "Personal Project",
        },
      },
      es: {
        translation: {
          welcome: "Bienvenido a React",
          maravillosoMundo: "Maravilloso Mundo",
          blogViajes: "Blog de viajes invitándonos a descubrir distintos lugares del mundo.",
          rollingNews: "Rolling News",
          noticias: "Página de noticias, pronóstico del tiempo y precio de monedas.",
          rollingUbisoft: "Rolling Ubisoft",
          paginaDeJuegos: "Página de videojuegos basada en la plataforma Ubisoft.",
          discordBot: "Bot de Discord",
          discordBotDescription: "Un bot de Discord creado con JavaScript que asigna roles y envía mensajes automáticos.",
          eliseoBaroni: "Eliseo Baroni",
          paginaProfesional: "Página profesional de Eliseo Baroni.",
          proyectoRolling: "Proyecto Rolling",
          proyectoPersonal: "Proyecto Personal",
        },
      },
    },
    lng: "es", // Idioma predeterminado
    fallbackLng: "es",
    interpolation: {
      escapeValue: false, // no escapar valores
    },
  });

export default i18next;
