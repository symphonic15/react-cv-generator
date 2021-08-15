import { useState } from 'react';
import Modal from 'react-modal';
import './scss/Modal.scss';

const PortfolioModal = ({properties, show, onClose}) => {
  const [projectsCount, setProjectsCount] = useState(properties.sections.projects.length);
  const [titles, setTitles] = useState(properties.sections.projects.map(item => item.title));
  const [descriptions, setDescriptions] = useState(properties.sections.projects.map(item => item.description));

  const confirmChanges = () => {
    let updatedProjects = [];
    for(let i = 0; i < projectsCount; i++) {
      updatedProjects.push({
        title: titles[i],
        description: descriptions[i]
      });
    }
    properties.sections.projects = updatedProjects;
    closeModal();
  }

  const closeModal = () => {
    setProjectsCount(properties.sections.projects.length);
    setTitles(properties.sections.projects.map(item => item.title));
    setDescriptions(properties.sections.projects.map(item => item.description));
    onClose();
  }

  const setPortfolioInput = (event, index) => {
    switch(event.target.name) {
      case 'title':
        return setTitles(titles => titles.map((title, i) => i === index ? event.target.value : title));
      case 'description':
        return setDescriptions(descriptions => descriptions.map((description, i) => i === index ? event.target.value : description));
      default:
        return;
    }
  }

  const addPortfolioItem = (event) => {
    event.preventDefault();
    setTitles([...titles, '']);
    setDescriptions([...descriptions, '']);
    setProjectsCount(projectsCount + 1);
  }

  const removePortfolioItem = (event, index) => {
    event.preventDefault();
    setTitles(titles.filter((value, i) => i !== index));
    setDescriptions(descriptions.filter((value, i) => i !== index));
    setProjectsCount(projectsCount - 1);
  }

  const PortfolioItem = ({index}) => {
    return (
      <div className="form-edit-group" key={index}>
        <div className="form-edit-item">
          <label className="form-edit-label">Title - Título</label>
          <input type="text" name="title" className="form-edit-input" value={titles[index]} onChange={(e) => setPortfolioInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <label className="form-edit-label">Description - Descripción</label>
          <textarea type="text" name="description" className="form-edit-input form-edit-input-textarea" value={descriptions[index]} onChange={(e) => setPortfolioInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <button className="remove-btn" onClick={(e) => removePortfolioItem(e, index)}><i class="fas fa-trash-alt"></i></button>
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
          <h1>Portfolio</h1>
        </div>
        <div className="modal-close" onClick={() => closeModal()}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      
      <div className="modal-body">
        <form className="form-edit">
          {[...Array(projectsCount)].map((item, index) => PortfolioItem({index}))}
          <button className="add-btn" onClick={(e) => addPortfolioItem(e)}><i class="fas fa-plus"></i></button>
        </form>
      </div>
      <div className="modal-footer">
        <button className="action-btn cancel-btn" onClick={() => closeModal()}>
          <i class="fas fa-times"></i>
        </button>
        <button className="action-btn accept-btn" onClick={() => confirmChanges()}>
          <i class="fas fa-check"></i>
        </button>
      </div>
    </Modal>
  );
}

export default PortfolioModal;