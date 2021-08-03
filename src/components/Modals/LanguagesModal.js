import { useState } from 'react';
import Modal from 'react-modal';
import './scss/Modal.scss';

const LanguagesModal = ({properties, show, onClose}) => {
  const [languagesCount, setLanguagesCount] = useState(properties.sections.languages.length);
  const [languages, setLanguages] = useState(properties.sections.languages.map(item => item.language));
  const [levels, setLevels] = useState(properties.sections.languages.map(item => item.level));

  const confirmChanges = () => {
    let updatedLanguages = [];
    for(let i=0; i < languagesCount; i++) {
      updatedLanguages.push({
        language: languages[i],
        level: levels[i]
      });
    }
    properties.sections.languages = updatedLanguages;
    closeModal();
  }

  const closeModal = () => {
    setLanguagesCount(properties.sections.languages.length);
    setLanguages(properties.sections.languages.map(item => item.language));
    setLevels(properties.sections.languages.map(item => item.level));
    onClose();
  }

  const setLanguageInput = (event, index) => {
    switch(event.target.name) {
      case 'language':
        return setLanguages(languages => languages.map((language, i) => i === index ? event.target.value : language));
      case 'level':
        return setLevels(levels => levels.map((level, i) => i === index ? event.target.value : level));
      default:
        return;
    }
  }

  const addLanguageItem = (event) => {
    event.preventDefault();
    setLanguages([...languages, '']);
    setLevels([...levels, '']);
    setLanguagesCount(languagesCount + 1);
  }

  const removeLanguageItem = (event, index) => {
    event.preventDefault();
    setLanguages(languages.filter((value, i) => { return i !== index }));
    setLevels(levels.filter((value, i) => { return i !== index }));
    setLanguagesCount(languagesCount - 1);
  }

  const LanguageItem = ({index}) => {
    return (
      <div className="form-edit-group" key={index}>
        <div className="form-edit-item">
          <label className="form-edit-label">Idioma</label>
          <input type="text" name="language" className="form-edit-input" value={languages[index]} onChange={(e) => setLanguageInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <label className="form-edit-label">Nivel</label>
          <input type="text" name="level" className="form-edit-input" value={levels[index]} onChange={(e) => setLanguageInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <button className="remove-btn" onClick={(e) => removeLanguageItem(e, index)}>Eliminar</button>
        </div>
      </div>
    );
  }

  return (
    <Modal
      isOpen={show}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <div className="modal-title">
          <h1>Idiomas</h1>
        </div>
        <div className="modal-close" onClick={() => closeModal()}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      
      <div className="modal-body">
        <form className="form-edit">
          {[...Array(languagesCount)].map((item, index) => LanguageItem({index}))}
          <button className="add-btn" onClick={(e) => addLanguageItem(e)}>Agregar idioma</button>
        </form>
      </div>
      <div className="modal-footer">
        <button className="action-btn cancel-btn" onClick={() => closeModal()}>Cancelar</button>
        <button className="action-btn accept-btn" onClick={() => confirmChanges()}>Guardar</button>
      </div>
    </Modal>
  );
}

export default LanguagesModal;