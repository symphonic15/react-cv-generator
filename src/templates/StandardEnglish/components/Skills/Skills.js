import './Skills.scss';

const Skills = ({skills}) => {
  return (
    (() => {
      if(skills) {
        return (
          <div className="section">
            <div className="section-container">
              <div className="section-header">
                <h3 className="section-title">
                  <i className="fas fa-lightbulb title-icon"></i>Skills
                </h3>
              </div>
              <hr className="separator" />
              <div className="item">
                <div className="item-features">
                  {skills.map((item, itemKey) => {
                    return (
                      <span key={itemKey} className="skill">{item}</span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (null);
      }
    })()
  );
}

export default Skills;
