import Link from 'next/link';
import styles from './mainNavigation.module.css';
import Icons from '../../app/icons';

export default function MainNavigation() {

    return (   
        <nav className={styles.nav}>
          <Link href='/dashboard' className={styles.navlink}>
            <Icons.dash className={styles.navicon} />
            <span className={styles.navtext}>Dashboard</span>
          </Link>
          <Link href='/users' className={styles.navlink}>
            <Icons.users className={styles.navicon} />
            <span className={styles.navtext}>Usuários</span>
          </Link>
          <Link href='/devices' className={styles.navlink}>
            <Icons.devices className={styles.navicon} />
            <span className={styles.navtext}>Equipamentos</span>
          </Link>
          <Link href='/contracts' className={styles.navlink}>
            <Icons.contract className={styles.navicon} />
            <span className={styles.navtext}>Contratos</span>
          </Link>
        </nav>
    )
}