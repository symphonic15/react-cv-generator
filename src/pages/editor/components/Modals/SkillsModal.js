import { useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import TagsInput from 'react-tagsinput';
import { setSkills } from '../../../../redux/actions';
import 'react-tagsinput/react-tagsinput.css';
import './scss/Modal.scss';

const SkillsModal = (props) => {
  const {stateSkills, show, onClose} = props;
  const [skills, setSkills] = useState(stateSkills);
  
  const confirmChanges = () => {
    props.setSkills(skills);
    onClose();
  }

  const closeModal = () => {
    setSkills(stateSkills);
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
          <h1>Core skills - Aptitudes principales</h1>
        </div>
        <div className="modal-close" onClick={() => closeModal()}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      
      <div className="modal-body">
        <form className="form-edit">
          <div className="form-edit-item">
            <TagsInput className="form-edit-input form-edit-input-textarea" value={skills} onChange={(skills) => onChangeSkills(skills)} inputProps={{placeholder: "Type here - Escriba aquí"}} />
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
    stateSkills: state.sections.skills
  }
}

const mapDispatchToProps = {
  setSkills
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsModal);