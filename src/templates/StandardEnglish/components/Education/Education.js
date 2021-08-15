import './Education.scss';

const Education = ({studies}) => {
  return (
    (() => {
      if(studies.length > 0) {
        return (
          <div className="section">
            <div className="section-container">
              <div className="section-header">
                <h3 className="section-title">
                  <i className="fas fa-graduation-cap title-icon"></i>Studies
                </h3>
              </div>
              <hr className="separator" />
              {studies.map((item, itemKey) => {
                return (
                  <div key={itemKey} className="item">
                    <p className="item-title">
                      {item.title}
                      <span className="item-time">{item.rangeTime}</span>
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

export default Education;
