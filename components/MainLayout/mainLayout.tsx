import styles from './mainLayout.module.css';
import MainMenu from '@/components/mainNavigation/mainNavigation';
import AppBar from '@/components/AppBar/appBar';

export default function MainLayout({children}: any) {

  return (
    <main className={styles.main}>
      <AppBar />
      <section className={styles.twoColumns}>
        <MainMenu />
        <div className={styles.mainContent}>
            {children}
        </div>
      </section>
    </main>

  )
}
