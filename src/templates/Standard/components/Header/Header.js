import './Header.scss';
import defaultProfileImage from "../../assets/default-profile.png";

const Header = (props) => {
  return (
    <div className="header" style={{ backgroundColor: props.color }}>
      <div className="header-image">
        <img src={defaultProfileImage} alt="" />
      </div>
      <div className="header-info">
        <p className="header-info-name">{ props.name }</p>
        <p className="header-info-title">{ props.specialty }</p>
      </div>
      <div className="header-contact">
        <ul>
          <li>
            <span target="_blank" rel="noopener noreferrer">
              <i className="fas fa-map-marker-alt"></i>
              { props.contact.location.text }
            </span>
          </li>
          <li>
            <span target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i> { props.contact.email.text }
            </span>
          </li>
          <li>
            <span target="_blank" rel="noopener noreferrer">
              <i className="fas fa-phone"></i> { props.contact.phone.text }
            </span>
          </li>
          <li>
            <span target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> { props.contact.linkedin.text }
            </span>
          </li>
          <li>
            <span target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> { props.contact.github.text }
            </span>
          </li>
          <li>
            <span target="_blank" rel="noopener noreferrer">
              <i className="fab fa-stack-overflow"></i> { props.contact.stackoverflow.text }
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
