import Link from 'next/link'
import styles from './devices.module.css'
import Image from 'next/image'

export default async function Devices() {


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
                        priority
                    />
          </div>
          <nav className={styles.nav}>
            <Link href='/dash' className={styles.navlink}>
              <span className={`material-symbols-outlined ${styles.navicon}`}>grid_view</span>
              <span className={styles.navtext}>Dashboard</span>
            </Link>
            <Link href='/users' className={styles.navlink}>
              <span className={`material-symbols-outlined ${styles.navicon}`}>person</span>
              <span className={styles.navtext}>Users</span>
            </Link>
            <Link href='/devices' className={styles.navlink}>
              <span className={`material-symbols-outlined ${styles.navicon}`}>computer</span>
              <span className={styles.navtext}>Devices</span>
            </Link>
            <Link href='/contract' className={styles.navlink}>
              <span className={`material-symbols-outlined ${styles.navicon}`}>contract</span>
              <span className={styles.navtext}>Contracts</span>
            </Link>
          </nav>
      </div>
      </div>
      <div className={styles.submenu}>
        <div className={styles.title}>Devices</div>
        <input type='text' placeholder='Search for ID, Model, Brand' className={styles.field}/>
        <div>
          <span className={styles.total}>150 devices</span>
          <Link href='/devices/new-device' className={styles.newRegister}>New Device</Link>
        </div>
      </div>
      <div className={styles.grid}>
        <table border-collapse="collapse">
          <thead>
            <tr>
              <th>ID</th>
              <th>Plant</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Serial</th>
              <th>User</th>
              <th>Delivered</th>
              <th>Owner</th>
              <th>End Loan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td>DT-BR87-003</td>
              <td>Quatro Barras</td>
              <td>Dell</td>
              <td>Latitude 5400</td>
              <td>AKJF44985</td>
              <td>Jailson Junior</td>
              <td>12/04/2023</td>
              <td>04958 - Telefonica</td>
              <td>30/05/2024</td>
            </tr>

          </tbody>
          <tfoot>
          </tfoot>
        </table>
      </div>
    </main>
  )
}
