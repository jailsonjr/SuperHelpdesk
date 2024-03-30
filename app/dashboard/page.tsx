import styles from './dashboard.module.css';
import MainLayout from '@/components/MainLayout/mainLayout';

export default function Dashboard() {

  return (
    <MainLayout>
      <div className={styles.kpisCardsWrappers}>
        <div className={styles.kpisCard}>
          <span className={styles.kpisTitle}>Total de usuários</span>
          <span className={styles.kpisAmount}>150</span>
        </div>

        <div className={styles.kpisCard}>
          <span className={styles.kpisTitle}>Total de computadores</span>
          <span className={styles.kpisAmount}>150</span>
        </div>

        <div className={styles.kpisCard}>
          <span className={styles.kpisTitle}>Total de computadores</span>
          <span className={styles.kpisAmount}>150</span>
        </div>

        <div className={styles.kpisCard}>
          <span className={styles.kpisTitle}>Total de usuários</span>
          <span className={styles.kpisAmount}>150</span>
        </div>

        <div className={styles.kpisCard}>
          <span className={styles.kpisTitle}>Total de computadores</span>
          <span className={styles.kpisAmount}>150</span>
        </div>

        <div className={styles.kpisCard}>
          <span className={styles.kpisTitle}>Total de computadores</span>
          <span className={styles.kpisAmount}>150</span>
        </div>

      </div>
    </MainLayout>
  )
}
