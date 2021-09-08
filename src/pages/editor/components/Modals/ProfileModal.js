import { useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { setProfile } from '../../../../redux/actions';
import './scss/Modal.scss';

const ProfileModal = (props) => {
  const { stateProfile, show, onClose } = props;
  const [profile, setProfile] = useState(stateProfile);
  
  const confirmChanges = () => {
    props.setProfile(profile);
    onClose();
  }

  const closeModal = () => {
    setProfile(stateProfile);
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
          <h1>Profile - Perfil</h1>
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
    stateProfile: state.sections.profile
  }
}

const mapDispatchToProps = {
  setProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal);