import './Portfolio.scss';

const Portfolio = ({portfolio}) => {
  return (
    (() => {
      if(portfolio.length > 0) {
        return (
          <div className="section">
            <div className="section-container">
              <h3 className="section-title">
                <i className="fas fa-tasks title-icon"></i>Portfolio
              </h3>
              <hr className="separator" />
              {portfolio.map((item, itemKey) => {
                return (
                  <div key={itemKey} className="item">
                    <p className="item-title">
                      <span>{item.title}</span>
                    </p>
                    <p className="item-description">
                      {item.summary}
                    </p>
                    <p className="item-features">
                      {item.features.map((feature, featureKey) => {
                        return (
                          <span key={featureKey}>{feature}</span>
                        );
                      })}
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
