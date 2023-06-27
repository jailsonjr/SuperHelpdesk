'use client'
import Link from 'next/link';
import styles from './devices.module.css';
import Image from 'next/image';
import { newDeviceType } from '@/app/data/devices';
import useSWR from 'swr'
import { useEffect, useState } from 'react';
import LoadingIcon from '../../../public/icons/loading.gif';

type resultType = {
  doc_id: string,
  doc_data: newDeviceType
}

async function getData() {
  let uri = `${process.env.NEXT_PUBLIC_URL_BASE}/api/devices`;
  const result = await fetch(uri);
  const dataResult = await result.json();
  return dataResult
}

export default function Devices() {

  const { data, isLoading } = useSWR<any[]>('get-devices',getData);
  const [showModal, setShowModal] = useState('none');

  let result = {length: data?.length, data};

  useEffect(()=> {
    if(isLoading){
      setShowModal('block')
    }else {
      setShowModal('none')
    }    
  }, [isLoading])

  return (
    <>
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
            
            {result && result.data?.map((document) => {
              return (
              <tr key={document.doc_data.id_treves}>
                <td>{document.doc_data.id_treves.toLocaleUpperCase()}</td>
                <td>{document.doc_data.filial}</td>
                <td>{document.doc_data.brandModel}</td>
                <td>{document.doc_data.serialNumber.toLocaleUpperCase()}</td>
                <td>{document.doc_data.user}</td>
                <td>{document.doc_data.company}</td>
                <td>{document.doc_data.dateEndLoan}</td>
                <td>{document.doc_data.status.toLocaleUpperCase()}</td>
              </tr>);
            })}
          </tbody>
        </table> 
      </div>
    </main>
        <div style={{display: showModal}} className={styles.modal}>
        <div className={styles.content}>
           <Image 
                  unoptimized={true}
                  src={LoadingIcon}
                  alt="Loading icon" 
                  width={24}
                  height={24}
                  className={styles.IconLoading}
            />
            <span>Carregando</span>
          </div>
      </div>
      </>
  )
}
