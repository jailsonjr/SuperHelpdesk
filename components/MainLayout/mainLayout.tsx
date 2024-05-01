'use client'
import styles from './mainLayout.module.css';
import MainMenu from '@/components/mainNavigation/mainNavigation';
import AppBar from '@/components/AppBar/appBar';

import { SpeedInsights } from "@vercel/speed-insights/next"


export default function MainLayout(props: any) {
  
  return (    
      <main className={styles.main}>
        <SpeedInsights />
          <AppBar />
          <section className={styles.twoColumns}>
            {props.limited_view ? '' : <MainMenu />}
            
            <div className={styles.mainContent}>
                {props.children}
            </div>
          </section>
      </main>   

  )
}
