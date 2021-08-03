import './Profile.scss';

const Profile = ({profileText}) => {
  return (
    (() => {
      if(profileText) {
        return (
          <div className="section">
            <div className="section-container">
              <div className="section-header">
                <h3 className="section-title">
                  <i className="fas fa-user title-icon"></i>Perfil
                </h3>
              </div>
              <hr className="separator" />
              <p className="m-0">
                { profileText }
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

export default Profile;
