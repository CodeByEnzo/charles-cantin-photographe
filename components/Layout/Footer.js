import Socials from './Socials';
import Link from 'next/link';
import styles from './Footer.module.css'

const Footer = () => (
  <div className={styles.Footer}>
    <div className={styles.Container}>
            <Socials />
            <Link href="/contact">
                <a className={styles.contactLinkFooter}>Contact</a>
            </Link>
    </div>  
  </div>     
    
);

export default Footer;