import 'reset-css';
import './App.css';
import Standard from './templates/Standard/Standard';

const App = () => {
  const properties = {
    header: {
      color: "#000",
      name: "Andrés Sánchez",
      specialty: "Técnico en Informática, desarrollador Front-end y colaborador activo en proyectos de código libre.",
      contact: {
        location: {
          text: "Mar del Plata - Buenos Aires",
          link: "https://goo.gl/maps/gPbh5civtvrC9c6r5",
        },
        email: {
          text: "szandres50@gmail.com",
          link: "mailto:szandres50@gmail.com",
        },
        phone: {
          text: "+54 (223) 6869680",
          link: "tel:+54 (223) 6869680",
        },
        linkedin: {
          text: "linkedin.com/in/szandres",
          link: "https://linkedin.com/in/szandres",
        },
        github: {
          text: "github.com/symphonic15",
          link: "https://github.com/symphonic15",
        },
        stackoverflow: {
          text: "stackoverflow.com/u/11003545",
          link: "https://stackoverflow.com/u/11003545",
        }
      },
    },
    sections: {
      profile: "Esto es una breve descripción de mi",
      target: "Estos son objetivos",
      experience: [
        {
          title: "Desarrollador Angular/Ionic",
          company: "Uxor IT",
          summary: "Encargado de Front-end en sistema Magiis, SaaS destinado a compañías de transporte, conductores y pasajeros.",
          tasks: "Diseño y rediseño de secciones. Análisis y desarrollo de nuevas funcionalidades. Corrección de bugs. Relevamiento de usuario. Soporte al cliente. Estimaciones. Testing unitario. Coaching.",
          features: ["JAVA"],
          time: "06/2020 - Presente",
        },
        {
          title: "Desarrollador PHP",
          company: "Uxor IT",
          summary: "Desarrollo y mantenimiento Full-stack en sistema Brolify, canal de venta digital multiempresa para compañías de seguro.",
          tasks: "Diseño y rediseño de secciones. Análisis y desarrollo de nuevas funcionalidades. Corrección de bugs. Estimaciones. Testing unitario. Coaching.",
          features: [],
          time: "09/2018 - 06/2020",
        },
        {
          title: "Desarrollador web",
          company: "Freelance",
          summary: "Diseño y desarrollo de gestor de torneos y ligas web.",
          tasks: "Análisis, diseño y desarrollo completo de sistema. Relevamiento de usuario. Testing unitario.",
          features: [],
          time: "08/2018 - 03/2019",
        },
        {
          title: "Desarrollador Front-end",
          company: "Freelance",
          summary: "Diseño y desarrollo de template para aplicación industrial web.",
          tasks: "Análisis, diseño y desarrollo de secciones. Testing unitario.",
          features: [],
          time: "08/2017 - 12/2017",
        },
      ],
      education: [
        {
          title: "Técnico Universitario en Programación",
          institute: "Universidad Tecnológica Nacional",
          time: "03/2019 - 12/2020",
        },
        {
          title: "Técnico en Informática",
          institute: "Escuela de Educación Secundaria Técnica №5",
          time: "03/2012 - 12/2018",
        },
      ],
      portfolio: [
        {
          title: "Investment Tracker",
          summary: "Aplicación personalizable diseñada para obtener toda la información general del estado de nuestras inversiones en el mercado, categorizandola y ofreciendo datos tales como las ganancias/pérdidas actuales e históricas, últimas operaciones de compra/venta y valor total invertido, entre otros.",
          features: [],
          link: "https://unjex.com/projects/investment-tracker",
        },
        {
          title: "Magiis",
          summary: "Plataforma digital destinada a compañías de transporte de personas para ofrecer a sus pasajeros una mejor experiencia de viaje, mediante servicios en la nube y aplicaciones móviles.",
          features: [],
          link: "https://magiis.com/",
        },
        {
          title: "Brolify",
          summary: "Canal de venta digital desarrollado para incrementar la cobertura comercial, brindando presencia directa y asesoría personalizada de manera automática.",
          features: [],
          link: "https://brokerdigital.brolify.com/",
        },
        {
          title: "Mind Voice",
          summary: "Aplicación gratuita desarrollada para ayudar a niños/as que se encuentran aprendiendo a leer y escribir y/o sufren problemas a la hora de comunicarse con el entorno. Todo esto mediante el uso de imágenes, texto, asistencias de voz y herramientas de accesibilidad.",
          features: [],
          link: "https://unjex.com/projects/mindvoice",
        },
      ],
      certificates: [
        {title: "Certificado 1", time: "12/2020", subtitle: "Subtitulo 1", institute: "Instituto"}
      ],
      skills: [
        "Angular", "Ionic", "Electron", "JavaScript", "jQuery", "AJAX", "PHP", "CakePHP 3", "Slim", "Java", "JSF", "MySQL", "Firebase", "HTML", "CSS", "Bootstrap", "Materialize", "API REST", "Scrum", "Kanban", "Git", "TortoiseSVN", "Github", "Gitlab", "Bitbucket", "Jira", "Trello", "Elips"
      ],
      languages: [
        {
          language: "Español",
          level: "Nativo"
        },
        {
          language: "Ingles",
          level: "Intermedio"
        },
      ]
    },
  };

  return (
    <Standard properties={properties} />
  );
}

export default App;
