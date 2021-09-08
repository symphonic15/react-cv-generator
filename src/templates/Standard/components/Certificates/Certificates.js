import { connect } from 'react-redux';
import './Certificates.scss';

const Certificates = ({certificates}) => {
  return (
    (() => {
      if(certificates.length > 0) {
        return (
          <div className="section">
            <div className="section-container">
              <div className="section-header">
                <h3 className="section-title">
                  <i className="fas fa-certificate title-icon"></i>Certificados
                </h3>
              </div>
              <hr className="separator" />
              {certificates.map((item, itemKey) => {
                return (
                  <div key={itemKey} className="item">
                    <p className="item-title">
                      {item.title}<span className="item-time">{item.rangeTime}</span>
                    </p>
                    <p className="item-subtitle">{item.institution}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      } else {
        return (null);
      }
    })()
  );
}

const mapStateToProps = state => {
  return {
    certificates: state.sections.certificates
  }
}

export default connect(mapStateToProps, null)(Certificates);