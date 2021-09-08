import React, { useRef } from 'react';
import Modal from 'react-modal';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Editor.scss';

// Modals
import Menu from './components/Menu/Menu';
import HeaderModal from './components/Modals/HeaderModal';
import ProfileModal from './components/Modals/ProfileModal';
import ObjectivesModal from './components/Modals/ObjectivesModal';
import ExperienceModal from './components/Modals/ExperienceModal';
import PortfolioModal from './components/Modals/PortfolioModal';
import EducationModal from './components/Modals/EducationModal';
import CertificatesModal from './components/Modals/CertificatesModal';
import LanguagesModal from './components/Modals/LanguagesModal';
import SkillsModal from './components/Modals/SkillsModal';

// CV Templates
import Standard from '../../templates/Standard/Standard';
import StandardEnglish from '../../templates/StandardEnglish/StandardEnglish';

const Editor = ({selectedTemplate}) => {
  const appContainer = useRef(null);
  const pdfRef = useRef(null);
  const [editingHeader, setEditingHeader] = React.useState(false);
  const [editingProfile, setEditingProfile] = React.useState(false);
  const [editingObjectives, setEditingObjectives] = React.useState(false);
  const [editingExperience, setEditingExperience] = React.useState(false);
  const [editingPortfolio, setEditingPortfolio] = React.useState(false);
  const [editingSkills, setEditingSkills] = React.useState(false);
  const [editingEducation, setEditingEducation] = React.useState(false);
  const [editingCertificates, setEditingCertificates] = React.useState(false);
  const [editingLanguages, setEditingLanguages] = React.useState(false);

  const Template = () => {
    switch(selectedTemplate) {
      case 'Standard':
        return <Standard />;
      case 'StandardEnglish':
        return <StandardEnglish />;
      default:
        return;
    }
  }

  const onMenuOptionClick = (option) => {
    if(option === 'download') save();
    else onEditSection(option);
  }

  const onEditSection = (section) => {
    const editOptions = {
      header: setEditingHeader,
      profile: setEditingProfile,
      objectives: setEditingObjectives,
      experience: setEditingExperience,
      portfolio: setEditingPortfolio,
      skills: setEditingSkills,
      education: setEditingEducation,
      certificates: setEditingCertificates,
      languages: setEditingLanguages
    }

    editOptions[section](true);
  }

  const save = () => {
    const input = pdfRef.current;
    html2canvas(input, {
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p','mm', [canvas.height * 0.26458, canvas.width * 0.26458]);
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("CV.pdf");
      });
  }

  Modal.setAppElement(appContainer.current);

  return (
    <div className="editor-container" ref={appContainer}>
      <Menu onClickOption={onMenuOptionClick} />
      <div className="document" ref={pdfRef}>
        <Template />
      </div>
      <HeaderModal show={editingHeader} onClose={() => setEditingHeader(false)} />
      <ProfileModal show={editingProfile} onClose={() => setEditingProfile(false)} />
      <ObjectivesModal show={editingObjectives} onClose={() => setEditingObjectives(false)} />
      <ExperienceModal show={editingExperience} onClose={() => setEditingExperience(false)} />
      <PortfolioModal show={editingPortfolio} onClose={() => setEditingPortfolio(false)} />
      <SkillsModal show={editingSkills} onClose={() => setEditingSkills(false)} />
      <EducationModal show={editingEducation} onClose={() => setEditingEducation(false)} />
      <CertificatesModal show={editingCertificates} onClose={() => setEditingCertificates(false)} />
      <LanguagesModal show={editingLanguages} onClose={() => setEditingLanguages(false)} />
    </div>
  );
}

export default Editor;