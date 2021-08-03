import { useState } from 'react';
import Modal from 'react-modal';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import './scss/Modal.scss';

const ExperienceModal = ({properties, show, onClose}) => {
  const [experiencesCount, setExperiencesCount] = useState(properties.sections.experiences.length);
  const [titles, setTitles] = useState(properties.sections.experiences.map(item => item.title));
  const [companies, setCompanies] = useState(properties.sections.experiences.map(item => item.company));
  const [rangeTimes, setRangeTimes] = useState(properties.sections.experiences.map(item => item.rangeTime));
  const [descriptions, setDescriptions] = useState(properties.sections.experiences.map(item => item.description));
  const [features, setFeatures] = useState(properties.sections.experiences.map(item => item.features));

  const confirmChanges = () => {
    let updatedExperience = [];
    for(let i=0; i < experiencesCount; i++) {
      updatedExperience.push({
        title: titles[i],
        company: companies[i],
        rangeTime: rangeTimes[i],
        description: descriptions[i],
        features: features[i]
      });
    }
    properties.sections.experiences = updatedExperience;
    closeModal();
  }

  const closeModal = () => {
    setExperiencesCount(properties.sections.experiences.length);
    setTitles(properties.sections.experiences.map(item => item.title));
    setCompanies(properties.sections.experiences.map(item => item.company));
    setRangeTimes(properties.sections.experiences.map(item => item.rangeTime));
    setDescriptions(properties.sections.experiences.map(item => item.description));
    setFeatures(properties.sections.experiences.map(item => item.features));
    onClose();
  }

  const setExperienceInput = (event, index) => {
    switch(event.target.name) {
      case 'title':
        return setTitles(titles => titles.map((title, i) => i === index ? event.target.value : title));
      case 'company':
        return setCompanies(companies => companies.map((company, i) => i === index ? event.target.value : company));
      case 'rangeTime':
        return setRangeTimes(rangeTimes => rangeTimes.map((rangeTime, i) => i === index ? event.target.value : rangeTime));
      case 'description':
        return setDescriptions(descriptions => descriptions.map((description, i) => i === index ? event.target.value : description));
      default:
        return;
    }
  }

  const setExperienceFeatures = (updatedFeatures, index) => {
    setFeatures(features => features.map((featureList, i) => i === index ? updatedFeatures : featureList));
  }

  const addExperienceItem = (event) => {
    event.preventDefault();
    setTitles([...titles, '']);
    setCompanies([...companies, '']);
    setRangeTimes([...rangeTimes, '']);
    setDescriptions([...descriptions, '']);
    setFeatures([]);
    setExperiencesCount(experiencesCount + 1);
  }

  const removeExperienceItem = (event, index) => {
    event.preventDefault();
    setTitles(titles.filter((value, i) => i !== index));
    setCompanies(companies.filter((value, i) => i !== index));
    setRangeTimes(rangeTimes.filter((value, i) => i !== index));
    setDescriptions(descriptions.filter((value, i) => i !== index));
    setFeatures(features.filter((value, i) => i !== index));
    setExperiencesCount(experiencesCount - 1);
  }

  const ExperienceItem = ({index}) => {
    return (
      <div className="form-edit-group" key={index}>
        <div className="form-edit-item">
          <label className="form-edit-label">Puesto</label>
          <input type="text" name="title" className="form-edit-input" value={titles[index]} onChange={(e) => setExperienceInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <label className="form-edit-label">Organización</label>
          <input type="text" name="company" className="form-edit-input" value={companies[index]} onChange={(e) => setExperienceInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <label className="form-edit-label">Período</label>
          <input type="text" name="rangeTime" className="form-edit-input" value={rangeTimes[index]} onChange={(e) => setExperienceInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <label className="form-edit-label">Descripción</label>
          <textarea type="text" name="description" className="form-edit-input form-edit-input-textarea" value={descriptions[index]} onChange={(e) => setExperienceInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <label className="form-edit-label">Tareas y/o herramientas</label>
          <TagsInput name="features" className="form-edit-input form-edit-input-textarea" value={features[index]} onChange={(features) => setExperienceFeatures(features, index)} inputProps={{placeholder: "Escriba aquí"}} />
        </div>
        <div className="form-edit-item">
          <button className="remove-btn" onClick={(e) => removeExperienceItem(e, index)}>Eliminar</button>
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
          <h1>Experiencia</h1>
        </div>
        <div className="modal-close" onClick={() => closeModal()}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      
      <div className="modal-body">
        <form className="form-edit">
          {[...Array(experiencesCount)].map((item, index) => ExperienceItem({index}))}
          <button className="add-btn" onClick={(e) => addExperienceItem(e)}>Agregar experiencia</button>
        </form>
      </div>
      <div className="modal-footer">
        <button className="action-btn cancel-btn" onClick={() => closeModal()}>Cancelar</button>
        <button className="action-btn accept-btn" onClick={() => confirmChanges()}>Guardar</button>
      </div>
    </Modal>
  );
}

export default ExperienceModal;