import Link from 'next/link'
import styles from './devices.module.css'
import Image from 'next/image'

export default function Devices() {
  return (
    <main className={styles.main}>
      <div className={styles.mainMenuBackground}>
      <div className={styles.mainMenu}>
          <div className={styles.logo}>
                  <Image 
                        src="/logo.png"
                        alt="Logo of treves" 
                        width={148}
                        height={25}
                        className={styles.logo}
                    />
          </div>
          <nav className={styles.nav}>
            <Link href='/dash' className={styles.navlink}>
              <span className={`material-symbols-outlined ${styles.navicon}`}>grid_view</span>
              <span className={styles.navtext}>Dash</span>
            </Link>
            <Link href='/people' className={styles.navlink}>
              <span className={`material-symbols-outlined ${styles.navicon}`}>person</span>
              <span className={styles.navtext}>Pessoas</span>
            </Link>
            <Link href='/devices' className={styles.navlink}>
              <span className={`material-symbols-outlined ${styles.navicon}`}>computer</span>
              <span className={styles.navtext}>Equipamentos</span>
            </Link>
            <Link href='/contract' className={styles.navlink}>
              <span className={`material-symbols-outlined ${styles.navicon}`}>contract</span>
              <span className={styles.navtext}>Contratos</span>
            </Link>
          </nav>
      </div>
      </div>
      <div className={styles.submenu}>
        <div className={styles.filter}>
          <div className={styles.title}>Equipamentos</div>
          <input type='text' placeholder='pesquise por id, serial' className={styles.field}/>
        </div>
        <span className={styles.total}>150 equipamentos</span>
      </div>
      <div className={styles.grid}>
          <div className={styles.gridheader}>header</div>
          <div className={styles.gridcontent}>content</div>
          <div className={styles.gridfooter}>footer</div>
      </div>
    </main>
  )
}
