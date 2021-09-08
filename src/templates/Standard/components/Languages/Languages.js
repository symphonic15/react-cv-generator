import { connect } from 'react-redux';
import './Languages.scss';

const Languages = ({languages}) => {
  return (
    (() => {
      if(languages.length > 0) {
        return (
          <div className="section pb-3">
            <div className="section-container">
              <div className="section-header">
                <h3 className="section-title">
                  <i className="fas fa-language title-icon"></i>Idiomas
                </h3>
              </div>
              <hr className="separator" />
              {languages.map((item, itemKey) => {
                return (
                  <div key={itemKey} className="item">
                    <p className="item-title">{item.language}</p>
                    <p className="item-subtitle">{item.level}</p>
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

const mapStateToProps = state => {
  return {
    languages: state.sections.languages
  }
}

export default connect(mapStateToProps, null)(Languages);