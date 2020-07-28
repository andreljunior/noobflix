import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button'
import ButtonLink from './components/ButtonLink';

function Menu() {
    return ( 
    < nav className = "Menu" > 
            <a href = "/" > 
                <img className = "Logo" src = {Logo} alt = "Noobflix logo" /> 
            </a> 
            <ButtonLink href="/" className="ButtonLink">
                Novo vídeo
            </ButtonLink>          

    </nav> );
}
export default Menu;