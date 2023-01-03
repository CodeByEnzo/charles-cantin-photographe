import { useRouter } from "next/router";
import Link from "next/link.js";
import Cross from './Cross.js';

import styles from "./Menu.module.css"


const Menu = ({ onClick, expanded }) => {
  const {asPath} = useRouter()

  return (  
    <nav className={expanded ? styles["Menu"] + ' ' + styles["expanded"] : styles.Menu}>
      <Cross       
        onClick={onClick}
      />  
      <ul>
          <li>
            <Link href="/">
              <a className={asPath === '/' ? 'active' : 'item'}>ACCUEIL</a>
            </Link>
          </li>      
        <li>
          <Link href="/galerie">
            <a className={asPath === '/galerie' ? 'active' : 'item'}>GALERIE</a>
          </Link>
        </li>
        <li>
          <Link href="/prestations">
            <a className={asPath === '/prestations' ? 'active' : 'item'}>PRESTATIONS</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={asPath === '/contact' ? 'active' : 'item'}>CONTACT</a>
          </Link>
        </li>
      </ul>
    </nav>
  )}
;

export default Menu;