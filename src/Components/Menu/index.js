import React from 'react';
import Logo from '../../Assets/Image/image_devflix.png'
import './menu.css';
import Button from '../Button'
//import ButtonLink from './Components/ButtonLink';

function Menu() {
    return (
    <nav className="Menu">
        <a href="/">
           <img class="Logo" src={Logo} alt="DevFlix logo"/>
        </a>

        <Button as="a" className="ButtonLink" href="/">
            Novo Video
        </Button>
    </nav>
    );
}

export default Menu;