'use client'
import styles from './AppBar.module.css';
import Image from 'next/image';
import Icons from '../../app/icons';
import { useRouter as useNav} from 'next/navigation'

import { FormEvent } from 'react'

export default function AppBar() {

  const nav = useNav();
  const handleLogoff = async (event: FormEvent) => {
    event.preventDefault();
    const requestLogoff = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/logoff`,{
      method: 'POST',
    })
  
    const dataResult = await requestLogoff.json();
  
    if(dataResult){
      nav.push('/dashboard');
    }
  }

  return (      
      <div className={styles.mainMenuBackground}>
        <div className={styles.mainMenu}>
            <div className={styles.logo}>
              <Image 
                    src="/logo.png"
                    alt="Logo of treves" 
                    width={105}
                    height={33}
                    className={styles.logo}
                    priority
                />
            </div>

          <div className={styles.exitApp} onClick={handleLogoff}>
              <Icons.sair className={styles.menu} />
              <span>Sair</span>
          </div>
        </div>
      </div>        
  )

  
}