import './Portfolio.scss';

const Portfolio = ({projects}) => {
  return (
    (() => {
      if(projects.length > 0) {
        return (
          <div className="section">
            <div className="section-container">
              <div className="section-header">
                <h3 className="section-title">
                  <i className="fas fa-tasks title-icon"></i>Portfolio
                </h3>
              </div>
              <hr className="separator" />
              {projects.map((item, itemKey) => {
                return (
                  <div key={itemKey} className="item">
                    <p className="item-title">
                      <span>{item.title}</span>
                    </p>
                    <p className="item-description">
                      {item.description}
                    </p>
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

export default Portfolio;
