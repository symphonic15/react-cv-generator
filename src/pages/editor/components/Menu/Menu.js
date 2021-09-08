import ReactTooltip from 'react-tooltip';
import './Menu.scss';

const Menu = ({onClickOption}) => {
  return (
    <>
      <nav className="navigation navigation--inline">
        <ul>
          <li data-tip="Header | Encabezado" onClick={() => {onClickOption('header')}}>
            <span><i className="fas fa-info"></i></span>
          </li>
          <li data-tip="Profile | Perfil" onClick={() => {onClickOption('profile')}}>
            <span><i className="fas fa-user title-icon"></i></span>
          </li>
          <li data-tip="Objectives | Objetivos" onClick={() => {onClickOption('objectives')}}>
            <span><i className="fas fa-location-arrow title-icon"></i></span>
          </li>
          <li data-tip="Experience | Experiencia" onClick={() => {onClickOption('experience')}}>
            <span><i className="fas fa-star title-icon"></i></span>
          </li>
          <li data-tip="Portfolio" onClick={() => {onClickOption('portfolio')}}>
            <span><i className="fas fa-tasks title-icon"></i></span>
          </li>
          <li data-tip="Skills | Aptitudes" onClick={() => {onClickOption('skills')}}>
            <span><i className="fas fa-lightbulb title-icon"></i></span>
          </li>
          <li data-tip="Studies | Estudios" onClick={() => {onClickOption('education')}}>
            <span><i className="fas fa-graduation-cap title-icon"></i></span>
          </li>
          <li data-tip="Certificates | Certificados" onClick={() => {onClickOption('certificates')}}>
            <span><i className="fas fa-certificate title-icon"></i></span>
          </li>
          <li data-tip="Languages | Idiomas" onClick={() => {onClickOption('languages')}}>
            <span><i className="fas fa-language title-icon"></i></span>
          </li>
          <li data-tip="Download | Descargar" onClick={() => {onClickOption('download')}}>
            <span><i className="fas fa-file-download"></i></span>
          </li>
        </ul>
      </nav>
      <ReactTooltip effect="solid" border={true} />
    </>
  );
}

export default Menu;