import { connect } from 'react-redux';
import './Profile.scss';

const Profile = ({profile}) => {
  return (
    (() => {
      if(profile) {
        return (
          <div className="section">
            <div className="section-container">
              <div className="section-header">
                <h3 className="section-title">
                  <i className="fas fa-user title-icon"></i>Profile
                </h3>
              </div>
              <hr className="separator" />
              <p className="m-0">
                { profile }
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
    profile: state.sections.profile
  }
}

export default connect(mapStateToProps, null)(Profile);
