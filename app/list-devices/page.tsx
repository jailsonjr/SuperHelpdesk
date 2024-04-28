'use client'
import styles from './users.module.css';
import useSWR from 'swr'
import MainLayout from '@/components/MainLayout/mainLayout';

import AppLoading from '@/components/AppLoading/appLoading';


async function getData() {
  let uri = `${process.env.NEXT_PUBLIC_URL_BASE}/api/devices/list-devices`;
  const result = await fetch(uri, { credentials: 'include' });
  const dataResult = await result.json();
  return dataResult.resultDevices
}

export default function ListDevices() {
  
  const { data, isLoading } = useSWR<any[]>('get-ListDevices',getData);
  let result = {length: data?.length || 0, data};

  return (
    <>
    <MainLayout limited_view={true}>
      { isLoading == true ? <AppLoading className={styles.modalUsers} size={30} /> : <>
      <div className={styles.submenu}>
        <div className={styles.title}>Dispositivos</div>
        <div>
          {result.length > 0 ? <span className={styles.total}>{result.length} dispositivos com você</span> : <></>}
        </div>
      </div>
      <div className={styles.grid}>
      {result.length > 0 ? 
        <table border-collapse="collapse">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo</th>
              <th>Serial</th>
              <th>Data Entregue</th>
              <th>Status</th>
              <th>OBS</th>
            </tr>
          </thead>
          <tbody>
            
            {result && result.data?.map((document) => {
              return (
              <tr key={document.device_id}>
                <td>{document.device_id}</td>
                <td>{document.device_type}</td>
                <td>{document.device_serial}</td>
                <td>{document.device_date_delivered}</td>
                <td>{document.device_status}</td>
                <td>{document.device_obs}</td>
              </tr>);
            })}
          </tbody>
        </table> : <p className={styles.sinResult}>Sem dispositivos cadastrados</p> } 
        
      </div>
      </>}
    </MainLayout>
      </>
  )
}
