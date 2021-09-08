import React from 'react';
import './Templates.scss';

// Template previews
import standardPreview from '../../templates/Standard/assets/preview.png';

const Templates = ({onTemplateSelect}) => {
  return (
    <div className="templates-container">
      <div className="templates-header">
        <h1>CV Generator</h1>
        <p>Seleccione una plantilla</p>
      </div>
      <div className="templates-options">
        <div className="templates-option" onClick={() => onTemplateSelect('Standard')}>
          <h3 className="templates-option-title">
            Estandar (español)
          </h3>
          <img src={standardPreview} alt="" className="templates-option-image" />
        </div>
        <div className="templates-option" onClick={() => onTemplateSelect('StandardEnglish')}>
          <h3 className="templates-option-title">
            Standard (english)
          </h3>
          <img src={standardPreview} alt="" className="templates-option-image" />
        </div>
      </div>
    </div>
  );
}

export default Templates;