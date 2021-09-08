import { useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { setObjectives } from '../../../../redux/actions';
import './scss/Modal.scss';

const ObjectivesModal = (props) => {
  const {stateObjectives, show, onClose} = props;
  const [objectives, setObjectives] = useState(stateObjectives);
  
  const confirmChanges = () => {
    props.setObjectives(objectives);
    onClose();
  }

  const closeModal = () => {
    setObjectives(stateObjectives);
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
          <h1>Objectives - Objetivos</h1>
        </div>
        <div className="modal-close" onClick={() => closeModal()}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      
      <div className="modal-body">
        <form className="form-edit">
          <div className="form-edit-item">
            <textarea type="text" className="form-edit-input form-edit-input-textarea" value={objectives} onChange={(e) => setObjectives(e.target.value)} />
          </div>
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
    stateObjectives: state.sections.objectives
  }
}

const mapDispatchToProps = {
  setObjectives
}

export default connect(mapStateToProps, mapDispatchToProps)(ObjectivesModal);