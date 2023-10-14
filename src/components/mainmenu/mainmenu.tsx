import Link from 'next/link';
import styles from './mainmenu.module.css';
import Image from 'next/image';

export default function MainMenu() {

    return (      
        <div className={styles.mainMenuBackground}>
        <div className={styles.mainMenu}>
            <div className={styles.logo}>
                    <Image 
                          src="/logo.png"
                          alt="Logo of treves" 
                          width={77}
                          height={25}
                          className={styles.logo}
                          priority
                      />
            </div>
            <nav className={styles.nav}>
              <Link href='/dash' className={styles.navlink}>
                <span className={`material-symbols-outlined ${styles.navicon}`}>grid_view</span>
                <span className={styles.navtext}>Dash</span>
              </Link>
              <Link href='/users' className={styles.navlink}>
                <span className={`material-symbols-outlined ${styles.navicon}`}>person</span>
                <span className={styles.navtext}>Usuários</span>
              </Link>
              <Link href='/devices' className={styles.navlink}>
                <span className={`material-symbols-outlined ${styles.navicon}`}>computer</span>
                <span className={styles.navtext}>Equipamentos</span>
              </Link>
              <Link href='/contracts' className={styles.navlink}>
                <span className={`material-symbols-outlined ${styles.navicon}`}>contract</span>
                <span className={styles.navtext}>Contratos</span>
              </Link>
            </nav>
        </div>
        </div>)
}