'use client'
import Link from 'next/link';
import styles from './devices.module.css';
import useSWR from 'swr'
import { useEffect, useState } from 'react';
import MainLayout from '@/components/MainLayout/mainLayout';

async function getData() {
  let uri = `${process.env.NEXT_PUBLIC_URL_BASE}/api/devices`;
  const result = await fetch(uri);
  const dataResult = await result.json();
  return dataResult
}

export default function Devices() {

  const { data, isLoading } = useSWR<any[]>('get-devices',getData);
  const [showModal, setShowModal] = useState('none');

  let result = {length: data?.length || 0, data};

  useEffect(()=> {
    if(isLoading){
      setShowModal('block')
    }else {
      setShowModal('none')
    }    
  }, [isLoading])

  return (
    <>
    <MainLayout>     
      <div className={styles.submenu}>
        <div className={styles.title}>Equipamentos</div>
    
        <div>
          {result.length > 0 ? <span className={styles.total}>{result.length} equipamentos</span> : <></>}
          <Link href='/devices/new-device' className={styles.newRegister}>Novo dispositivo</Link>
        </div>
      </div>
      <div className={styles.grid}>
      {result.length > 0 ? 
        <table border-collapse="collapse">
          <thead>
            <tr>
              <th>ID</th>
              <th>Planta</th>
              <th>Tipo</th>
              <th>Marca/Modelo</th>
              <th>Serial</th>
              <th>Usuario</th>
              <th>Proprietário</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {result && result.data?.map((document) => {
              return (
              <tr key={document.doc_data.id_treves}>
                <td>{document.doc_data.id_treves.toLocaleUpperCase()}</td>
                <td>{document.doc_data.filial}</td>
                <td>{document.doc_data.type.toLocaleUpperCase()}</td>
                <td>{document.doc_data.brandModel}</td>
                <td>{document.doc_data.serialNumber.toLocaleUpperCase()}</td>
                <td>{document.doc_data.user}</td>
                <td>{document.doc_data.company}</td>                
                <td>{document.doc_data.status.toLocaleUpperCase()}</td>
              </tr>);
            })}
          </tbody>
        </table> : <p className={styles.sinResult}>Sem equipamentos cadastrados</p> } 
      </div>
    </MainLayout>
      </>
  )
}