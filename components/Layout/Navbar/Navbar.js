import React, { useState, useEffect } from 'react';
import styles from "./Navbar.module.css"
import { NavLink } from 'react-router-dom';


export default function Navbar
    () {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth)
    const toggleMenuSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);
            if (window.innerWidth > 700) {
                setToggleMenu(false);
            }
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }

    }, [])

    return (
        <div className={`navContainer' ${toggleMenu ? "showNav" : "hideNav"}`}>
            <span className='logo'></span>

            <nav>
                {(toggleMenu || largeur > 700) && (
                    <ul className={styles.list}>
                        <NavLink to='/' className={(nav) => (nav.isActive ? "active" : "item")}>
                            <li> Acceuil </li>
                        </NavLink >
                        <NavLink to='/galerie' className={(nav) => (nav.isActive ? "active" : "item")}>
                            <li> Galerie </li>
                        </NavLink >

                        <NavLink to='/prestations' className={(nav) => (nav.isActive ? "active" : "item")}>
                            <li> Tarifs et prestations</li>
                        </NavLink >
                        <NavLink to='/contact' className={(nav) => (nav.isActive ? "active" : "item")}>
                            <li> Contact </li>
                        </NavLink >
                        <li>
                            <a href='https://www.facebook.com/' className={styles.socials}><i class="fa-brands fa-facebook socials"></i></a>
                            <a href='https://www.facebook.com/' className={styles.socials}><i class="fa-brands fa-instagram socials"></i></a>
                        </li>
                    </ul>

                )}



                <button onClick={toggleMenuSmallScreen} className='btn'>
                    <span className='burgerBar'></span>
                </button>
            </nav>
        </div>
    )
}
