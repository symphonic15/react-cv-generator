import { useState } from 'react';
import Modal from 'react-modal';
import './scss/Modal.scss';

const CertificatesModal = ({properties, show, onClose}) => {
  const [certificatesCount, setCertificatesCount] = useState(properties.sections.certificates.length);
  const [titles, setTitles] = useState(properties.sections.certificates.map(item => item.title));
  const [institutions, setInstitutions] = useState(properties.sections.certificates.map(item => item.institution));
  const [rangeTimes, setRangeTimes] = useState(properties.sections.certificates.map(item => item.rangeTime));

  const confirmChanges = () => {
    let updatedCertificates = [];
    for(let i = 0; i < certificatesCount; i++) {
      updatedCertificates.push({
        title: titles[i],
        institution: institutions[i],
        rangeTime: rangeTimes[i]
      });
    }
    properties.sections.certificates = updatedCertificates;
    closeModal();
  }

  const closeModal = () => {
    setCertificatesCount(properties.sections.certificates.length);
    setTitles(properties.sections.certificates.map(item => item.title));
    setInstitutions(properties.sections.certificates.map(item => item.institution));
    setRangeTimes(properties.sections.certificates.map(item => item.rangeTime));
    onClose();
  }

  const setCertificateInput = (event, index) => {
    switch(event.target.name) {
      case 'title':
        return setTitles(titles => titles.map((title, i) => i === index ? event.target.value : title));
      case 'institution':
        return setInstitutions(institutions => institutions.map((institution, i) => i === index ? event.target.value : institution));
      case 'rangeTime':
        return setRangeTimes(rangeTimes => rangeTimes.map((rangeTime, i) => i === index ? event.target.value : rangeTime));
      default:
        return;
    }
  }

  const addCertificateItem = (event) => {
    event.preventDefault();
    setTitles([...titles, '']);
    setInstitutions([...institutions, '']);
    setRangeTimes([...rangeTimes, '']);
    setCertificatesCount(certificatesCount + 1);
  }

  const removeCertificatesItem = (event, index) => {
    event.preventDefault();
    console.log(titles);
    setTitles(titles.filter((value, i) => { return i !== index }));
    setInstitutions(institutions.filter((value, i) => { return i !== index }));
    setRangeTimes(rangeTimes.filter((value, i) => { return i !== index }));
    setCertificatesCount(certificatesCount - 1);
  }

  const CertificateItem = ({index}) => {
    return (
      <div className="form-edit-group" key={index}>
        <div className="form-edit-item">
          <label className="form-edit-label">Title - Título</label>
          <input type="text" name="title" className="form-edit-input" value={titles[index]} onChange={(e) => setCertificateInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <label className="form-edit-label">Institute - Instituto</label>
          <input type="text" name="institution" className="form-edit-input" value={institutions[index]} onChange={(e) => setCertificateInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <label className="form-edit-label">Period - Período</label>
          <input type="text" name="rangeTime" className="form-edit-input" value={rangeTimes[index]} onChange={(e) => setCertificateInput(e, index)} />
        </div>
        <div className="form-edit-item">
          <button className="remove-btn" onClick={(e) => removeCertificatesItem(e, index)}><i class="fas fa-trash-alt"></i></button>
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
          <h1>Certificates - Certificados</h1>
        </div>
        <div className="modal-close" onClick={() => closeModal()}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      
      <div className="modal-body">
        <form className="form-edit">
          {[...Array(certificatesCount)].map((item, index) => CertificateItem({index}))}
          <button className="add-btn" onClick={(e) => addCertificateItem(e)}><i class="fas fa-plus"></i></button>
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

export default CertificatesModal;