import './Target.scss';

const Target = ({targetText}) => {
  return (
    (() => {
      if(targetText) {
        return (
          <div className="section">
            <div className="section-container">
              <div className="section-header">
                <h3 className="section-title">
                  <i className="fas fa-location-arrow title-icon"></i>Objectives
                </h3>
              </div>
              <hr className="separator" />
              <p className="m-0">
                { targetText }
              </p>
            </div>
          </div>
        );
      } else {
        return (null);
      }
    })()
  );
}

export default Target;
