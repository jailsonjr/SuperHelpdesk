import Link from 'next/link';
import styles from './devices.module.css';
import Image from 'next/image';
import { newDeviceType } from '@/data/devices'

type resultType = {
  doc_id: string,
  doc_data: newDeviceType
}

export default async function Devices() {

  const request = await fetch(`http://localhost:3000/api/devices`, {cache: 'no-cache'});
  const result:resultType[] = await request.json();

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
        <div className={styles.title}>Equipamentos</div>
        <input type='text' placeholder='Pesquise por ID, Modelo, Serial ....' className={styles.field}/>
        <div>
          <span className={styles.total}>{result.length} equipamentos</span>
          <Link href='/devices/new-device' className={styles.newRegister}>Novo dispositivo</Link>
        </div>
      </div>
      <div className={styles.grid}>
        <table border-collapse="collapse">
          <thead>
            <tr>
              <th>ID</th>
              <th>Planta</th>
              <th>Marca/Modelo</th>
              <th>Serial</th>
              <th>Usuario</th>
              <th>Proprietário</th>
              <th>Fim do Contrato</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {result.length > 0 && result.map((document:resultType) => {
              return (<tr key={document.doc_data.id_treves}>
                <td>{document.doc_data.id_treves.toLocaleUpperCase()}</td>
                <td>{document.doc_data.filial}</td>
                <td>{document.doc_data.brandModel}</td>
                <td>{document.doc_data.serialNumber.toLocaleUpperCase()}</td>
                <td>{document.doc_data.user}</td>
                <td>{document.doc_data.contractCompany}</td>
                <td>{document.doc_data.dateEndLoan}</td>
                <td>{document.doc_data.status.toLocaleUpperCase()}</td>
              </tr>);
            })}
          </tbody>
        </table> 
      </div>
    </main>
  )
}
