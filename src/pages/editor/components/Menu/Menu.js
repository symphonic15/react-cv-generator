import './Menu.scss';

const Menu = ({onClickOption}) => {
  return (
    <nav className="navigation navigation--inline">
      <ul>
        <li onClick={() => {onClickOption('header')}}>
          <span><i className="fas fa-info"></i></span>
        </li>
        <li onClick={() => {onClickOption('profile')}}>
          <span><i className="fas fa-user title-icon"></i></span>
        </li>
        <li onClick={() => {onClickOption('target')}}>
          <span><i className="fas fa-location-arrow title-icon"></i></span>
        </li>
        <li onClick={() => {onClickOption('experience')}}>
          <span><i className="fas fa-star title-icon"></i></span>
        </li>
        <li onClick={() => {onClickOption('portfolio')}}>
          <span><i className="fas fa-tasks title-icon"></i></span>
        </li>
        <li onClick={() => {onClickOption('skills')}}>
          <span><i className="fas fa-lightbulb title-icon"></i></span>
        </li>
        <li onClick={() => {onClickOption('education')}}>
          <span><i className="fas fa-graduation-cap title-icon"></i></span>
        </li>
        <li onClick={() => {onClickOption('certificates')}}>
          <span><i className="fas fa-certificate title-icon"></i></span>
        </li>
        <li onClick={() => {onClickOption('languages')}}>
          <span><i className="fas fa-language title-icon"></i></span>
        </li>
        <li onClick={() => {onClickOption('download')}}>
          <span><i className="fas fa-file-download"></i></span>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;