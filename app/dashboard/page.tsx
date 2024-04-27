'use client'
import styles from './dashboard.module.css';
import useSWR from 'swr'
import MainLayout from '@/components/MainLayout/mainLayout';
import AppLoading from '@/components/AppLoading/appLoading';

async function getData() {
  let uri = `${process.env.NEXT_PUBLIC_URL_BASE}/api/kpis`;
  const result = await fetch(uri);
  const dataResult = await result.json();
  return dataResult
}

export default function Dashboard() {

  type KpiType = {
    users: number,
    devices: number,
  };

  const { data, isLoading } = useSWR<KpiType>('get-kpis',getData);

  return (
    <MainLayout>
      <div className={styles.kpisCardsWrappers}>
        <div className={styles.kpisCard}>
          <span className={styles.kpisTitle}>Total de usuários</span>
          <span className={styles.kpisAmount}>
            {isLoading == true ? <AppLoading size={20} /> :  data?.users }
          </span>
        </div>

        <div className={styles.kpisCard}>
          <span className={styles.kpisTitle}>Total de computadores</span>
          <span className={styles.kpisAmount}>150</span>
        </div>

        <div className={styles.kpisCard}>
          <span className={styles.kpisTitle}>Total de smartphones</span>
          <span className={styles.kpisAmount}>150</span>
        </div>

        <div className={styles.kpisCard}>
          <span className={styles.kpisTitle}>Total de perifericos</span>
          <span className={styles.kpisAmount}>150</span>
        </div>

        <div className={styles.kpisCard}>
          <span className={styles.kpisTitle}>Total de linhas telefonicas</span>
          <span className={styles.kpisAmount}>150</span>
        </div>

        <div className={styles.kpisCard}>
          <span className={styles.kpisTitle}>Total de contratos</span>
          <span className={styles.kpisAmount}>150</span>
        </div>
      </div>
    </MainLayout>
  )
}
