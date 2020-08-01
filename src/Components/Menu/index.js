import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Image/image_devflix.png';
import './menu.css';
import Button from '../Button';
// import ButtonLink from './Components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="DevFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu;
