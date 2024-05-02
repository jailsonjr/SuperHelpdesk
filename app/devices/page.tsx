'use client'
import Link from 'next/link';
import styles from './devices.module.css';
import useSWR from 'swr'
import MainLayout from '@/components/MainLayout/mainLayout';
import AppLoading from '@/components/AppLoading/appLoading';

async function getData() {
  let uri = `${process.env.NEXT_PUBLIC_URL_BASE}/api/devices`;
  const result = await fetch(uri);
  const dataResult = await result.json();
  return dataResult
}

async function getUsers() {
  let uri = `${process.env.NEXT_PUBLIC_URL_BASE}/api/users`;
  const result = await fetch(uri);
  const dataResult = await result.json();
  return dataResult
}

async function getContracts() {
  let uri = `${process.env.NEXT_PUBLIC_URL_BASE}/api/contracts`;
  const result = await fetch(uri);
  const dataResult = await result.json();
  return dataResult
}

export default function Devices() {

  const { data, isLoading } = useSWR<any[]>('get-devices',getData);
  const users = useSWR<any>('get-users', getUsers);
  const contracts = useSWR<any>('get-contracts', getContracts);

  const getUserName = (userID:string, users: any) => {
    let result = "";
    
    users.data.forEach((user:any) => {
      if(user.user_id == userID) {
        result = user.user_name
      }
    })
    return result
  }

  const getContractName = (contractID:string, contracts: any) => {
    let result = "";
    
    contracts.data.forEach((contract:any) => {
      if(contract.contract_id == contractID) {
        result = contract.supplier_description + " - " + contract.contract_description
      }
    })
    return result
  }

  let result = {length: data?.length || 0, data};

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
      {isLoading == true && users.isLoading == true && contracts.isLoading == true ? 
      <AppLoading className={styles.modalUsers} size={30} /> :
      <div className={styles.grid}>
      {result.length > 0 ? 
        <table border-collapse="collapse">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Tipo</th>              
              <th>User</th>
              <th>Data Entregue</th>
              <th>Contrato</th>
              <th>Status</th>
              <th>OBS</th>
            </tr>
          </thead>
          <tbody>
            {result && result.data?.map((document) => {
              return (
              <tr key={document.device_id}>
                <td><Link href={`/devices/${document.device_id}`}>{document.device_serial}</Link></td>  
                <td>{document.device_type.toLocaleUpperCase()}</td>                
                <td>{getUserName(document.user_id, users)}</td>       
                <td>{document.device_date_delivered.toLocaleUpperCase()}</td>          
                <td>{getContractName(document.contract_id, contracts)}</td> 
                <td>{document.device_status.toLocaleUpperCase()}</td>
                <td>{document.device_obs.toLocaleUpperCase()}</td>
              </tr>);
            })}
          </tbody>
        </table> : <p className={styles.sinResult}>Sem equipamentos cadastrados</p> } 
      </div>
      }
    </MainLayout>
      </>
  )
}
