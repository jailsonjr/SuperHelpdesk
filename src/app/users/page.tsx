'use client'
import Link from 'next/link';
import styles from './users.module.css';
import Image from 'next/image';
import { newDeviceType } from '@/data/devices';
import useSWR from 'swr'
import { useEffect, useState } from 'react';
import LoadingIcon from '../../../public/icons/loading.gif';
import MainMenu from '@/components/mainmenu/mainmenu';

type resultType = {
  doc_id: string,
  doc_data: newDeviceType
}

async function getData() {
  let uri = `${process.env.NEXT_PUBLIC_URL_BASE}/api/users`;
  const result = await fetch(uri);
  const dataResult = await result.json();
  return dataResult
}

export default function Users() {

  const { data, isLoading } = useSWR<any[]>('get-users',getData);
  const [showModal, setShowModal] = useState('none');

  let result = {length: data?.length, data};

  console.log(result);

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
      <MainMenu />
      <div className={styles.submenu}>
        <div className={styles.title}>Usuários</div>
        <input type='text' placeholder='Pesquise por Nome, email ....' className={styles.field}/>
        <div>
          <span className={styles.total}>{result.length} usuários</span>
          <Link href='/users/new-user' className={styles.newRegister}>Novo usuário</Link>
        </div>
      </div>
      <div className={styles.grid}>
        <table border-collapse="collapse">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Planta</th>
              <th>Departamento</th>
              <th>Cargo</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            
            {result && result.data?.map((document) => {
              return (
              <tr key={document.doc_data.email}>
                <td>{document.doc_data.name.toLocaleUpperCase()}</td>
                <td>{document.doc_data.email}</td>
                <td>{document.doc_data.filial}</td>
                <td>{document.doc_data.departamento}</td>
                <td>{document.doc_data.cargo}</td>
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
