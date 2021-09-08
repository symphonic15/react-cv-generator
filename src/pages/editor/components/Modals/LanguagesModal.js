import { useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { setLanguages } from '../../../../redux/actions';
import './scss/Modal.scss';

const LanguagesModal = (props) => {
  const {stateLanguages, show, onClose} = props;
  const [languagesCount, setLanguagesCount] = useState(stateLanguages.length);
  const [languages, setLanguages] = useState(stateLanguages.map(item => item.language));
  const [levels, setLevels] = useState(stateLanguages.map(item => item.level));

  const confirmChanges = () => {
    let updatedLanguages = [];
    for(let i=0; i < languagesCount; i++) {
      updatedLanguages.push({
        language: languages[i],
        level: levels[i]
      });
    }
    props.setLanguages(updatedLanguages);
    onClose();
  }

  const closeModal = () => {
    setLanguagesCount(stateLanguages.length);
    setLanguages(stateLanguages.map(item => item.language));
    setLevels(stateLanguages.map(item => item.level));
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
          <label className="form-edit-label">Language - Idioma</label>
          <input type="text" name="language" className="form-edit-input" value={languages[index]} onChange={(e) => setLanguageInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <label className="form-edit-label">Level - Nivel</label>
          <input type="text" name="level" className="form-edit-input" value={levels[index]} onChange={(e) => setLanguageInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <button className="remove-btn" onClick={(e) => removeLanguageItem(e, index)}><i className="fas fa-trash-alt"></i></button>
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
          <h1>Languages - Idiomas</h1>
        </div>
        <div className="modal-close" onClick={() => closeModal()}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      
      <div className="modal-body">
        <form className="form-edit">
          {[...Array(languagesCount)].map((item, index) => LanguageItem({index}))}
          <button className="add-btn" onClick={(e) => addLanguageItem(e)}><i className="fas fa-plus"></i></button>
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
    stateLanguages: state.sections.languages
  }
}

const mapDispatchToProps = {
  setLanguages
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesModal);