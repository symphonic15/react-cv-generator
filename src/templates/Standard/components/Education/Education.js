import './Education.scss';

const Education = ({education}) => {
  return (
    (() => {
      if(education.length > 0) {
        return (
          <div className="section">
            <div className="section-container">
              <h3 className="section-title">
                <i className="fas fa-graduation-cap title-icon"></i>Educación
              </h3>
              <hr className="separator" />
              {education.map((item, itemKey) => {
                return (
                  <div key={itemKey} className="item">
                    <p className="item-title">
                      {item.title}
                      <span className="item-time">{item.time}</span>
                    </p>
                    <p className="item-subtitle">{item.institute}</p>
                    <p className="item-time-mobile">{item.time}</p>
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
