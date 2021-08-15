import { useState } from 'react';
import Modal from 'react-modal';
import './scss/Modal.scss';

const EducationModal = ({properties, show, onClose}) => {
  const [studiesCount, setStudiesCount] = useState(properties.sections.studies.length);
  const [titles, setTitles] = useState(properties.sections.studies.map(item => item.title));
  const [institutions, setInstitutions] = useState(properties.sections.studies.map(item => item.institution));
  const [rangeTimes, setRangeTimes] = useState(properties.sections.studies.map(item => item.rangeTime));

  const confirmChanges = () => {
    let updatedStudies = [];
    for(let i=0; i < studiesCount; i++) {
      updatedStudies.push({
        title: titles[i],
        institution: institutions[i],
        rangeTime: rangeTimes[i]
      });
    }
    properties.sections.studies = updatedStudies;
    closeModal();
  }

  const closeModal = () => {
    setStudiesCount(properties.sections.studies.length);
    setTitles(properties.sections.studies.map(item => item.title));
    setInstitutions(properties.sections.studies.map(item => item.institution));
    setRangeTimes(properties.sections.studies.map(item => item.rangeTime));
    onClose();
  }

  const setEducationInput = (event, index) => {
    switch(event.target.name) {
      case 'title':
        return setTitles(titles => titles.map((title, i) => i === index ? event.target.value : title));
      case 'institution':
        return setInstitutions(institutions => institutions.map((institution, i) => i === index ? event.target.value : institution));
      case 'rangeTime':
        return setRangeTimes(rangeTimes => rangeTimes.map((rangeTime, i) => i === index ? event.target.value : rangeTime));
      default:
        return;
    }
  }

  const addEducationItem = (event) => {
    event.preventDefault();
    setTitles([...titles, '']);
    setInstitutions([...institutions, '']);
    setRangeTimes([...rangeTimes, '']);
    setStudiesCount(studiesCount + 1);
  }

  const removeEducationItem = (event, index) => {
    event.preventDefault();
    console.log(titles);
    setTitles(titles.filter((value, i) => i !== index));
    setInstitutions(institutions.filter((value, i) => i !== index ));
    setRangeTimes(rangeTimes.filter((value, i) => i !== index ));
    setStudiesCount(studiesCount - 1);
  }

  const EducationItem = ({index}) => {
    return (
      <div className="form-edit-group" key={index}>
        <div className="form-edit-item">
          <label className="form-edit-label">Title - Título</label>
          <input type="text" name="title" className="form-edit-input" value={titles[index]} onChange={(e) => setEducationInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <label className="form-edit-label">Institute - Instituto</label>
          <input type="text" name="institution" className="form-edit-input" value={institutions[index]} onChange={(e) => setEducationInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <label className="form-edit-label">Period - Período</label>
          <input type="text" name="rangeTime" className="form-edit-input" value={rangeTimes[index]} onChange={(e) => setEducationInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <button className="remove-btn" onClick={(e) => removeEducationItem(e, index)}><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    );
  }

  return (
    <Modal
      isOpen={show}
      className="modal modal-lg"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <div className="modal-title">
          <h1>Studies - Estudios</h1>
        </div>
        <div className="modal-close" onClick={() => closeModal()}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      
      <div className="modal-body">
        <form className="form-edit">
          {[...Array(studiesCount)].map((item, index) => EducationItem({index}))}
          <button className="add-btn" onClick={(e) => addEducationItem(e)}><i class="fas fa-plus"></i></button>
        </form>
      </div>
      <div className="modal-footer">
        <button className="action-btn cancel-btn" onClick={() => closeModal()}>
          <i class="fas fa-times"></i>
        </button>
        <button className="action-btn accept-btn" onClick={() => confirmChanges()}>
          <i class="fas fa-check"></i>
        </button>
      </div>
    </Modal>
  );
}

export default EducationModal;