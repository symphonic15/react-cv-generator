import defaultProfileImage from "../../assets/img/default-profile.png";

const properties = {
  header: {
    color: "#000",
    thumbnail: defaultProfileImage,
    showThumbnail: true,
    fullname: "Nombre Completo",
    specialty: "Puesto, rol y/o especialidad",
    contact: {
      location: "Ciudad - Provincia/estado",
      phone: "+54 (123) 1234567",
      email: "demo@demo.com",
      linkedin: "linkedin.com/in/username",
      github: "github.com/username",
      stackoverflow: "stackoverflow.com/u/1234567"
    }
  },
  sections: {
    profile: "Una breve descripción acerca de mí",
    objectives: "Objetivos profesionales que espero poder cumplir.",
    experiences: [
      {
        title: "Puesto/rol",
        company: "Empresa",
        rangeTime: "06/2020 - Presente",
        description: "Una breve descripción de la experiencia.",
        features: ['Primer herramienta', 'Segunda herramienta', 'Tarea N°1', 'Tarea N°2'],
      },
      {
        title: "Puesto/rol",
        company: "Empresa",
        rangeTime: "09/2018 - 06/2020",
        description: "Una breve descripción de la experiencia.",
        features: ['Herramienta', 'Tarea N°1', 'Tarea N°2'],
      }
    ],
    projects: [
      {
        title: "Proyecto N°1",
        description: "Breve descripción del proyecto."
      },
      {
        title: "Proyecto N°2",
        description: "Breve descripción del proyecto.",
      },
      {
        title: "Proyecto N°3",
        description: "Breve descripción del proyecto.",
      }
    ],
    skills: [
      "Aptitud N°1", "Aptitud N°2", "Aptitud N°3"
    ],
    studies: [
      {
        title: "Título y/o carrera",
        institution: "Institución",
        rangeTime: "03/2019 - 12/2020",
      },
      {
        title: "Título y/o carrera",
        institution: "Institución",
        rangeTime: "03/2012 - 12/2018",
      }
    ],
    certificates: [
      {
        title: "Certificado N°1",
        rangeTime: "08/2020",
        institution: "Institución"
      },
      {
        title: "Certificado N°2",
        rangeTime: "12/2019",
        institution: "Institución"
      }
    ],
    languages: [
      {
        language: "Idioma N°1",
        level: "Nativo"
      },
      {
        language: "Idioma N°2",
        level: "Intermedio"
      }
    ]
  }
};

export default properties;