import { useRouter } from "next/router";
import Link from "next/link.js";
import Cross from './Cross.js';

import styles from "./Menu.module.css"


const Menu = ({ onClick, expanded }) => {
    const router = useRouter();
  return (  
    <nav className={expanded ? styles["Menu"] + ' ' + styles["expanded"] : styles.Menu}>
      <Cross       
        onClick={onClick}
      />  
      <ul>
          <li>
            <Link href="/">
                      <a className={router.pathname == "/" ? styles.active : styles.navItem}>ACCUEIL</a>
            </Link>
          </li>      
        <li>
          <Link href="/galerie">
                      <a className={router.pathname == "/galerie" ? styles.active : styles.navItem}>GALERIE</a>
          </Link>
        </li>
        <li>
          <Link href="/prestations">
                      <a className={router.pathname == "/prestations" ? styles.active : styles.navItem}>PRESTATIONS</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
                      <a className={router.pathname == "/contact" ? styles.active : styles.navItem}>CONTACT</a>
          </Link>
        </li>
      </ul>
    </nav>
  )}
;

export default Menu;