import { connect } from 'react-redux';
import './Header.scss';

const Header = ({header}) => {
  return (
    <div className="header" style={{ backgroundColor: header.color }}>
      <div className="header-image">
        <img src={header.thumbnail} alt="" />
      </div>
      <div className="header-info">
        <p className="header-info-name">{ header.fullname }</p>
        <p className="header-info-title">{ header.specialty }</p>
      </div>
      <div className="header-contact">
        <ul>
          <li>
            <span>
              <i className="fas fa-map-marker-alt"></i> { header.contact.location }
            </span>
          </li>
          <li>
            <span>
              <i className="fas fa-phone"></i> { header.contact.phone }
            </span>
          </li>
          <li>
            <span>
              <i className="fas fa-envelope"></i> { header.contact.email }
            </span>
          </li>
          <li>
            <span>
              <i className="fab fa-linkedin"></i> { header.contact.linkedin }
            </span>
          </li>
          <li>
            <span>
              <i className="fab fa-github"></i> { header.contact.github }
            </span>
          </li>
          <li>
            <span>
              <i className="fab fa-stack-overflow"></i> { header.contact.stackoverflow }
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    header: state.header
  }
}

export default connect(mapStateToProps, null)(Header);
