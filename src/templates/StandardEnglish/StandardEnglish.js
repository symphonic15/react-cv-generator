import React from "react";
import './StandardEnglish.scss';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Target from "./components/Target/Target";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Certificates from "./components/Certificates/Certificates";
import Languages from "./components/Languages/Languages";

const StandardEnglish = (props) => {
  const properties = props.properties;

  return (
    <div className="template-standard">
      <Header {...properties.header} />
      <Profile profileText={properties.sections.profile} />
      <Target targetText={properties.sections.target} />
      <Experience experience={properties.sections.experiences} />
      <Portfolio projects={properties.sections.projects} />
      <Skills skills={properties.sections.skills} />
      <Education studies={properties.sections.studies} />
      <Certificates certificates={properties.sections.certificates} />
      <Languages languages={properties.sections.languages} />
    </div>
  );
}

export default StandardEnglish;
