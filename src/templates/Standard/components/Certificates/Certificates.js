import './Certificates.scss';

const Certificates = ({certificates}) => {
  return (
    (() => {
      if(certificates.length > 0) {
        return (
          <div className="section">
            <div className="section-container">
              <h3 className="section-title">
                <i className="fas fa-certificate title-icon"></i>Certificados
              </h3>
              <hr className="separator" />
              {certificates.map((item, itemKey) => {
                return (
                  <div key={itemKey} className="item">
                    <p className="item-title">
                      {item.title}<span className="item-time">{item.time}</span>
                    </p>
                    <p className="item-subtitle">{item.institute}</p>
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

export default Certificates;
