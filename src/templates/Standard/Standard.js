import React from "react";
import './Standard.scss';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Target from "./components/Target/Target";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Certificates from "./components/Certificates/Certificates";
import Languages from "./components/Languages/Languages";

const Standard = (props) => {
  const properties = props.properties;

  return (
    <div className="template-standard">
      <Header {...properties.header} />
      <Profile profileText={properties.sections.profile} />
      <Target targetText={properties.sections.target} />
      <Experience experience={properties.sections.experience} />
      <Portfolio portfolio={properties.sections.portfolio} />
      <Skills skills={properties.sections.skills} />
      <Education education={properties.sections.education} />
      <Certificates certificates={properties.sections.certificates} />
      <Languages languages={properties.sections.languages} />
    </div>
  );
}

export default Standard;
