import React from "react";
import './StandardEnglish.scss';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Objectives from "./components/Objectives/Objectives";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Certificates from "./components/Certificates/Certificates";
import Languages from "./components/Languages/Languages";

const StandardEnglish = () => {

  return (
    <div className="template-standard">
      <Header />
      <Profile />
      <Objectives />
      <Experience />
      <Portfolio />
      <Skills />
      <Education />
      <Certificates />
      <Languages />
    </div>
  );
}

export default StandardEnglish;
