import './Header.scss';

const Header = (props) => {
  return (
    <div className="header" style={{ backgroundColor: props.color }}>
      <div className="header-image">
        <img src={props.thumbnail} alt="" />
      </div>
      <div className="header-info">
        <p className="header-info-name">{ props.fullname }</p>
        <p className="header-info-title">{ props.specialty }</p>
      </div>
      <div className="header-contact">
        <ul>
          <li>
            <span>
              <i className="fas fa-map-marker-alt"></i> { props.contact.location }
            </span>
          </li>
          <li>
            <span>
              <i className="fas fa-phone"></i> { props.contact.phone }
            </span>
          </li>
          <li>
            <span>
              <i className="fas fa-envelope"></i> { props.contact.email }
            </span>
          </li>
          <li>
            <span>
              <i className="fab fa-linkedin"></i> { props.contact.linkedin }
            </span>
          </li>
          <li>
            <span>
              <i className="fab fa-github"></i> { props.contact.github }
            </span>
          </li>
          <li>
            <span>
              <i className="fab fa-stack-overflow"></i> { props.contact.stackoverflow }
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
