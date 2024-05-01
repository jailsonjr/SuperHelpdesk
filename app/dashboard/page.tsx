'use client'
import styles from './dashboard.module.css';
import useSWR from 'swr'
import MainLayout from '@/components/MainLayout/mainLayout';
import AppLoading from '@/components/AppLoading/appLoading';
import Link from 'next/link';

async function getData() {
  let uri = `${process.env.NEXT_PUBLIC_URL_BASE}/api/kpis`;
  const result = await fetch(uri);
  const dataResult = await result.json();
  return dataResult
}

export default function Dashboard() {

  type KpiType = {
    users: number,
    desktops: number,
    notebooks: number,
    monitores: number,
    teclados: number,
    devices: number,
    contracts: number
  };

  const { data, isLoading } = useSWR<KpiType>('get-kpis',getData);

  return (
    <MainLayout>
      <h3 className={styles.subTitle}>Resumo</h3>
      <div className={styles.kpisCardsWrappers}>
      <Link href="/users" className={styles.kpisCard}>
          <span className={styles.kpisTitle}>Total de usuários</span>
          <span className={styles.kpisAmount}>
            {isLoading == true ? <AppLoading size={20} /> :  data?.users }
          </span>
      </Link>

      <Link href="/devices" className={styles.kpisCard}>
          <span className={styles.kpisTitle}>Total de dispositivos</span>
          <span className={styles.kpisAmount}>
            {isLoading == true ? <AppLoading size={20} /> :  data?.devices }
          </span>
      </Link>

      <Link href="/contracts" className={styles.kpisCard}>
          <span className={styles.kpisTitle}>Total de Contratos</span>
          <span className={styles.kpisAmount}>
            {isLoading == true ? <AppLoading size={20} /> :  data?.contracts }
          </span>
      </Link>

        <div className={styles.kpisCard}>
          <span className={styles.kpisTitle}>Valor total de Equipamentos</span>
          <span className={styles.kpisAmount}>150</span>
        </div>
      </div>
      <h3 className={styles.subTitle}>Tipo de Dispositivos</h3>
      <div className={styles.kpisCardsWrappers}>
        <div className={styles.kpisCard}>
            <span className={styles.kpisTitle}>Total de Desktops</span>
            <span className={styles.kpisAmount}>
            {isLoading == true ? <AppLoading size={20} /> :  data?.desktops }
            </span>
          </div>

          <div className={styles.kpisCard}>
            <span className={styles.kpisTitle}>Total de Notebooks</span>
            <span className={styles.kpisAmount}>
            {isLoading == true ? <AppLoading size={20} /> :  data?.notebooks }
            </span>
          </div>

          <div className={styles.kpisCard}>
            <span className={styles.kpisTitle}>Total de Monitores</span>
            <span className={styles.kpisAmount}>
            {isLoading == true ? <AppLoading size={20} /> :  data?.monitores }
            </span>
          </div>

          <div className={styles.kpisCard}>
            <span className={styles.kpisTitle}>Total de Impressoras</span>
            <span className={styles.kpisAmount}>
            {isLoading == true ? <AppLoading size={20} /> :  data?.monitores }
            </span>
          </div>

          <div className={styles.kpisCard}>
            <span className={styles.kpisTitle}>Total de Smartphone</span>
            <span className={styles.kpisAmount}>
            {isLoading == true ? <AppLoading size={20} /> :  350 }
            </span>
          </div>

          <div className={styles.kpisCard}>
            <span className={styles.kpisTitle}>Total de headsets</span>
            <span className={styles.kpisAmount}>
            {isLoading == true ? <AppLoading size={20} /> :  250 }
            </span>
          </div>
      </div>
                
    </MainLayout>
  )
}
