'use client'
import Link from 'next/link';
import styles from './contract.module.css';
import useSWR from 'swr'
import MainLayout from '@/components/MainLayout/mainLayout';
import AppLoading from '@/components/AppLoading/appLoading';

async function getData() {
  let uri = `${process.env.NEXT_PUBLIC_URL_BASE}/api/contracts`;
  const result = await fetch(uri);
  const dataResult = await result.json();
  return dataResult
}

export default function Contracts() {

  const { data, isLoading } = useSWR<any[]>('get-contracts',getData);

  let result = {length: data?.length || 0, data};

  return (
    <>
    <MainLayout>     
      <div className={styles.submenu}>
        <div className={styles.title}>Contratos</div>
    
        <div>
          {result.length > 0 ? <span className={styles.total}>{result.length} contratos</span> : <></>}
          <Link href='/contracts/new-contract' className={styles.newRegister}>Novo contrato</Link>
        </div>
      </div>
      {isLoading == true ? <AppLoading className={styles.modalUsers} size={30} /> :
      <div className={styles.grid}>
      {result.length > 0 ? 
        <table border-collapse="collapse">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fornecedor</th>              
              <th>Data Inicio</th>
              <th>Data Fim</th>
              <th>Status</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {result && result.data?.map((document) => {
              return (
              <tr key={document.contract_id}>
                <td><Link href={`/contracts/${document.contract_id}`}>{document.contract_id}</Link></td>  
                <td>{document.supplier_description}</td>                
                <td>{document.contract_date_begin}</td>       
                <td>{document.contract_end_begin}</td>          
                <td>{document.contract_status.toLocaleUpperCase()}</td> 
                <td>{document.contract_description}</td>
              </tr>);
            })}
          </tbody>
        </table> : <p className={styles.sinResult}>Sem contratos cadastrados</p> } 
      </div>
      }
    </MainLayout>
      </>
  )
}
