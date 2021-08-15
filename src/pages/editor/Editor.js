import React, { useRef } from 'react';
import Modal from 'react-modal';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Editor.scss';

// Modals
import Menu from './components/Menu/Menu';
import HeaderModal from './components/Modals/HeaderModal';
import ProfileModal from './components/Modals/ProfileModal';
import TargetModal from './components/Modals/TargetModal';
import ExperienceModal from './components/Modals/ExperienceModal';
import PortfolioModal from './components/Modals/PortfolioModal';
import EducationModal from './components/Modals/EducationModal';
import CertificatesModal from './components/Modals/CertificatesModal';
import LanguagesModal from './components/Modals/LanguagesModal';
import SkillsModal from './components/Modals/SkillsModal';

// CV Templates
import Standard from '../../templates/Standard/Standard';
import StandardEnglish from '../../templates/StandardEnglish/StandardEnglish';

// General CV Properties
import properties from './properties';

const Editor = ({selectedTemplate}) => {
  const appContainer = useRef(null);
  const pdfRef = useRef(null);
  const [editingHeader, setEditingHeader] = React.useState(false);
  const [editingProfile, setEditingProfile] = React.useState(false);
  const [editingTarget, setEditingTarget] = React.useState(false);
  const [editingExperience, setEditingExperience] = React.useState(false);
  const [editingPortfolio, setEditingPortfolio] = React.useState(false);
  const [editingSkills, setEditingSkills] = React.useState(false);
  const [editingEducation, setEditingEducation] = React.useState(false);
  const [editingCertificates, setEditingCertificates] = React.useState(false);
  const [editingLanguages, setEditingLanguages] = React.useState(false);

  const Template = () => {
    switch(selectedTemplate) {
      case 'Standard':
        return <Standard properties={properties} />;
      case 'StandardEnglish':
        return <StandardEnglish properties={properties} />;
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
      target: setEditingTarget,
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
        <Template properties={properties} />
      </div>
      <HeaderModal properties={properties} show={editingHeader} onClose={() => setEditingHeader(false)} />
      <ProfileModal properties={properties} show={editingProfile} onClose={() => setEditingProfile(false)} />
      <TargetModal properties={properties} show={editingTarget} onClose={() => setEditingTarget(false)} />
      <ExperienceModal properties={properties} show={editingExperience} onClose={() => setEditingExperience(false)} />
      <SkillsModal properties={properties} show={editingSkills} onClose={() => setEditingSkills(false)} />
      <PortfolioModal properties={properties} show={editingPortfolio} onClose={() => setEditingPortfolio(false)} />
      <EducationModal properties={properties} show={editingEducation} onClose={() => setEditingEducation(false)} />
      <CertificatesModal properties={properties} show={editingCertificates} onClose={() => setEditingCertificates(false)} />
      <LanguagesModal properties={properties} show={editingLanguages} onClose={() => setEditingLanguages(false)} />
    </div>
  );
}

export default Editor;