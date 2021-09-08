import { connect } from 'react-redux';
import './Objectives.scss';

const Objectives = ({objectives}) => {
  return (
    (() => {
      if(objectives) {
        return (
          <div className="section">
            <div className="section-container">
              <div className="section-header">
                <h3 className="section-title">
                  <i className="fas fa-location-arrow title-icon"></i>Objetivos
                </h3>
              </div>
              <hr className="separator" />
              <p className="m-0">
                { objectives }
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

const mapStateToProps = state => {
  return {
    objectives: state.sections.objectives
  }
}

export default connect(mapStateToProps, null)(Objectives);
