import React, { useEffect } from "react";
import {NavLink} from 'react-router-dom';
import * as Logo from '../../Images/VektorProsjektLogo.png';
import * as Href from '../Links';
import '../../CSS/Navigation.css';

function navSize() {
    const nav = document.getElementById('nav');
    if(window.innerWidth < 1200) {
        nav.classList.add('mobile');
    } else {
        nav.classList.remove('mobile');
    }
}

function navMenu(menu = 'false') {
    const menuButton = document.getElementsByClassName('toggle');
    const target = menuButton[0];
    const navMenu = document.getElementById('navMenu');

    if(menu === true) {
        navMenu.classList.add('nav__visible');
        target.setAttribute('data-status', false);
    } 
    else {
        navMenu.classList.remove('nav__visible');
        target.setAttribute('data-status', true);
    }
}

const Navigation = () => {

    useEffect(() => {
        window.addEventListener('resize', () => {
            navSize();
        })
        navSize();

        const menuButton = document.getElementsByClassName('toggle');
        menuButton[0].addEventListener('click', () => {
            const target = menuButton[0];
            var status = target.getAttribute('data-status');

            if(status === 'true') {
                navMenu(true);
            } else if(status === 'false') {
                navMenu(false);
            }
            
        })
    });

    return (
            <nav id="nav">
                <NavLink exact to={Href.Home} className="logo" onClick={navMenu}>
                    <img src={Logo} alt="Vektor Prosjekt Logo"/>
                </NavLink>

                <div className="toggle" data-status={true}>
                    Meny
                    <i className="far fa-bars"></i>
                </div>

                <ul id="navMenu">
                    <li className="nav__item">
                        <NavLink 
                            to={Href.Kopi} 
                            activeClassName='nav__active__link' 
                            className='nav__link' onClick={navMenu}>
                            Kopi, Print og Tapeter
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink 
                            to={Href.Etterlysende} 
                            activeClassName='nav__active__link' 
                            className='nav__link' onClick={navMenu}>
                            Etterlysende Produkter
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink 
                            to={Href.Tunneler} 
                            activeClassName='nav__active__link' 
                            className='nav__link' onClick={navMenu}>
                            Tunneler
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink 
                            to={Href.Taktil} 
                            activeClassName='nav__active__link' 
                            className='nav__link' onClick={navMenu}>
                            Taktil Merking
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink 
                            to={Href.Maritime} 
                            activeClassName='nav__active__link' 
                            className='nav__link' onClick={navMenu}>
                            Vektor Maritime
                        </NavLink>
                    </li>
                </ul>
            </nav>
    )
}

export default Navigation;