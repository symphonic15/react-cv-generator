import { connect } from 'react-redux';
import './Experience.scss';

const Experience = ({experiences}) => {
  return (
    (() => {
      if(experiences.length > 0) {
        return (
          <div className="section">
            <div className="section-container">
              <div className="section-header">
                <h3 className="section-title">
                  <i className="fas fa-star title-icon"></i>Experiencia
                </h3>
              </div>
              <hr className="separator" />
              {experiences.map((item, itemKey) => {
                return (
                  <div key={itemKey} className="item">
                    <p className="item-title">
                      {item.title} <span className="item-time">{item.rangeTime}</span>
                    </p>
                    <p className="item-subtitle">{item.company}</p>
                    <p className="item-description">{item.description}</p>
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

const mapStateToProps = state => {
  return {
    experiences: state.sections.experiences
  }
}

export default connect(mapStateToProps, null)(Experience);
