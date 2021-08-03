import { useState } from 'react';
import Modal from 'react-modal';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import './scss/Modal.scss';

const SkillsModal = ({properties, show, onClose}) => {
  const [skills, setSkills] = useState(properties.sections.skills);
  
  const confirmChanges = () => {
    properties.sections.skills = skills;
    closeModal();
  }

  const closeModal = () => {
    setSkills(properties.sections.skills);
    onClose();
  }

  const onChangeSkills = (skills) => {
    setSkills(skills);
  }

  return (
    <Modal
      isOpen={show}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <div className="modal-title">
          <h1>Aptitudes principales</h1>
        </div>
        <div className="modal-close" onClick={() => closeModal()}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      
      <div className="modal-body">
        <form className="form-edit">
          <div className="form-edit-item">
            <TagsInput className="form-edit-input form-edit-input-textarea" value={skills} onChange={(skills) => onChangeSkills(skills)} inputProps={{placeholder: "Escriba aquí"}} />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button className="action-btn cancel-btn" onClick={() => closeModal()}>Cancelar</button>
        <button className="action-btn accept-btn" onClick={() => confirmChanges()}>Guardar</button>
      </div>
    </Modal>
  );
}

export default SkillsModal;