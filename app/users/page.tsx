'use client'
import Link from 'next/link';
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
  
  const { data, isLoading } = useSWR<any[]>('get-users',getData);

  let result = {length: data?.length || 0, data};

  return (
    <>
    <MainLayout>
      <div className={styles.submenu}>
        <div className={styles.title}>Usuários</div>
        <div>
          {result.length > 0 ? <span className={styles.total}>{result.length} usuários</span> : <></>}
          <Link href='/users/new-user' className={styles.newRegister}>Novo usuário</Link>
        </div>
      </div>
        <div className={styles.grid}>        
        {result.length > 0 ? 
          <table border-collapse="collapse">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Departamento</th>
                <th>Cargo</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              
              {result && result.data?.map((document) => {
                return (
                <tr key={document.user_email}>
                  <td><Link href={`/users/${document.user_id}`}>{document.user_name.toLocaleUpperCase()}</Link></td>
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
