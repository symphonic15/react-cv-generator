import './Experience.scss';

const Experience = ({experience}) => {
  return (
    (() => {
      if(experience.length > 0) {
        return (
          <div className="section">
            <div className="section-container">
              <h3 className="section-title">
                <i className="fas fa-star title-icon"></i>Experiencia
              </h3>
              <hr className="separator" />
              {experience.map((item, itemKey) => {
                return (
                  <div key={itemKey} className="item">
                    <p className="item-title">
                      {item.title} <span className="item-time">{item.time}</span>
                    </p>
                    <p className="item-subtitle">{item.company}</p>
                    <p className="item-time-mobile">{item.time}</p>
                    <p className="item-description">{item.summary}</p>
                    <p className="item-tasks">{item.tasks}</p>
                    <p className="item-features">
                      {item.features.map((feature, featureKey) => {
                        return (
                          <span key={featureKey}>{feature}</span>
                        );
                      })}
                    </p>
                  </div>
                )
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

export default Experience;
