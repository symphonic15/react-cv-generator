import { useState } from 'react';
import Modal from 'react-modal';
import './scss/Modal.scss';

const ProfileModal = ({properties, show, onClose}) => {
  const [profile, setProfile] = useState(properties.sections.profile);
  
  const confirmChanges = () => {
    properties.sections.profile = profile;
    closeModal();
  }

  const closeModal = () => {
    setProfile(properties.sections.profile);
    onClose();
  }

  return (
    <Modal
      isOpen={show}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <div className="modal-title">
          <h1>Perfil</h1>
        </div>
        <div className="modal-close" onClick={() => closeModal()}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      
      <div className="modal-body">
        <form className="form-edit">
          <div className="form-edit-item">
            <textarea type="text" className="form-edit-input form-edit-input-textarea" value={profile} onChange={(e) => setProfile(e.target.value)} />
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

export default ProfileModal;