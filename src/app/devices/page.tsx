import Link from 'next/link'
import styles from './devices.module.css'
import Image from 'next/image'

export default function Devices() {
  return (
    <main className={styles.main}>
      <div className={styles.mainMenu}>
          <nav>
            <Link href='/'>
              <Image 
                        src="/icons/mail.png"
                        alt="Logo of treves" 
                        width={20}
                        height={20}
                        className={styles.logo}
               />
              <span>Dash</span>
            </Link>
            <Link href='/'>
              <Image 
                        src="/icons/mail.png"
                        alt="Logo of treves" 
                        width={20}
                        height={20}
                        className={styles.logo}
               />
              <span>Pessoas</span>
            </Link>
            <Link href='/'>
              <Image 
                        src="/icons/mail.png"
                        alt="Logo of treves" 
                        width={20}
                        height={20}
                        className={styles.logo}
               />
              <span>Equipamentos</span>
            </Link>
            <Link href='/'>
              <Image 
                        src="/icons/mail.png"
                        alt="Logo of treves" 
                        width={20}
                        height={20}
                        className={styles.logo}
               />
              <span>Contratos</span>
            </Link>
            <Link href='/'>
              <Image 
                        src="/icons/mail.png"
                        alt="Logo of treves" 
                        width={20}
                        height={20}
                        className={styles.logo}
               />
              <span>Budget</span>
            </Link>
          </nav>
      </div>
      <div>sub menu</div>
      <div>grid</div>
    </main>
  )
}
