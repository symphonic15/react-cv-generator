import { useState } from 'react';
import Modal from 'react-modal';
import './scss/Modal.scss';

const TargetModal = ({properties, show, onClose}) => {
  const [target, setTarget] = useState(properties.sections.target);
  
  const confirmChanges = () => {
    properties.sections.target = target;
    closeModal();
  }

  const closeModal = () => {
    setTarget(properties.sections.target);
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
          <h1>Objetivos</h1>
        </div>
        <div className="modal-close" onClick={() => closeModal()}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      
      <div className="modal-body">
        <form className="form-edit">
          <div className="form-edit-item">
            <textarea type="text" className="form-edit-input form-edit-input-textarea" value={target} onChange={(e) => setTarget(e.target.value)} />
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

export default TargetModal;