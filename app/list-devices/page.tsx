'use client'
import styles from './users.module.css';
import useSWR from 'swr'
import MainLayout from '@/components/MainLayout/mainLayout';

async function getData() {
  let uri = `${process.env.NEXT_PUBLIC_URL_BASE}/api/users`;
  const result = await fetch(uri);
  const dataResult = await result.json();
  return dataResult
}

export default function Users() {
  
  const { data } = useSWR<any[]>('get-users',getData);

  let result = {length: data?.length || 0, data};

  return (
    <>
    <MainLayout limited_view={true}>
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
              <tr key={document.user_email}>
                <td>{document.user_name.toLocaleUpperCase()}</td>
                <td>{document.user_email}</td>
                <td>{document.user_department}</td>
                <td>{document.user_position}</td>
                <td>{document.user_active.toLocaleUpperCase()}</td>
              </tr>);
            })}
          </tbody>
        </table> : <p className={styles.sinResult}>Sem usuários cadastrados</p> } 
        
      </div>
    </MainLayout>
      </>
  )
}
