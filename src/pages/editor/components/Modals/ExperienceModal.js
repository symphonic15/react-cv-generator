import { useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import TagsInput from 'react-tagsinput';
import { setExperiences } from '../../../../redux/actions';
import 'react-tagsinput/react-tagsinput.css';
import './scss/Modal.scss';

const ExperienceModal = (props) => {
  const {stateExperiences, show, onClose} =  props;
  const [experiencesCount, setExperiencesCount] = useState(stateExperiences.length);
  const [titles, setTitles] = useState(stateExperiences.map(item => item.title));
  const [companies, setCompanies] = useState(stateExperiences.map(item => item.company));
  const [rangeTimes, setRangeTimes] = useState(stateExperiences.map(item => item.rangeTime));
  const [descriptions, setDescriptions] = useState(stateExperiences.map(item => item.description));
  const [features, setFeatures] = useState(stateExperiences.map(item => item.features));

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
    
    props.setExperiences(updatedExperience);
    onClose();
  }

  const closeModal = () => {
    setExperiencesCount(stateExperiences.length);
    setTitles(stateExperiences.map(item => item.title));
    setCompanies(stateExperiences.map(item => item.company));
    setRangeTimes(stateExperiences.map(item => item.rangeTime));
    setDescriptions(stateExperiences.map(item => item.description));
    setFeatures(stateExperiences.map(item => item.features));
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
          <label className="form-edit-label">Job title - Puesto laboral</label>
          <input type="text" name="title" className="form-edit-input" value={titles[index]} onChange={(e) => setExperienceInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <label className="form-edit-label">Organization - Organización</label>
          <input type="text" name="company" className="form-edit-input" value={companies[index]} onChange={(e) => setExperienceInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <label className="form-edit-label">Period - Período</label>
          <input type="text" name="rangeTime" className="form-edit-input" value={rangeTimes[index]} onChange={(e) => setExperienceInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <label className="form-edit-label">Description - Descripción</label>
          <textarea type="text" name="description" className="form-edit-input form-edit-input-textarea" value={descriptions[index]} onChange={(e) => setExperienceInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <label className="form-edit-label">Tasks and/or tools - Tareas y/o herramientas</label>
          <TagsInput name="features" className="form-edit-input form-edit-input-textarea" value={features[index]} onChange={(features) => setExperienceFeatures(features, index)} inputProps={{placeholder: "Type here - Escriba aquí"}} />
        </div>
        <div className="form-edit-item">
          <button className="remove-btn" onClick={(e) => removeExperienceItem(e, index)}><i className="fas fa-trash-alt"></i></button>
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
          <h1>Experience - Experiencia</h1>
        </div>
        <div className="modal-close" onClick={() => closeModal()}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      
      <div className="modal-body">
        <form className="form-edit">
          {[...Array(experiencesCount)].map((item, index) => ExperienceItem({index}))}
          <button className="add-btn" onClick={(e) => addExperienceItem(e)}><i className="fas fa-plus"></i></button>
        </form>
      </div>
      <div className="modal-footer">
        <button className="action-btn cancel-btn" onClick={() => closeModal()}>
          <i className="fas fa-times"></i>
        </button>
        <button className="action-btn accept-btn" onClick={() => confirmChanges()}>
          <i className="fas fa-check"></i>
        </button>
      </div>
    </Modal>
  );
}

const mapStateToProps = state => {
  return {
    stateExperiences: state.sections.experiences
  }
}

const mapDispatchToProps = {
  setExperiences
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceModal);