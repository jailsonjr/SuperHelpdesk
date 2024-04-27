'use client'
import styles from './AppBar.module.css';
import Image from 'next/image';
import Icons from '../../app/icons';
import { useRouter as useNav} from 'next/navigation'

import { FormEvent, useState } from 'react'

export default function AppBar() {

  const nav = useNav();
  const [showModal, setShowModal] = useState(false)

  const handleLogoff = async (event: FormEvent) => {
    setShowModal(() => true);

    event.preventDefault();
    const requestLogoff = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/logoff`,{
      method: 'POST',
    })
  
    const dataResult = await requestLogoff.json();
  
    if(dataResult){
      nav.push('/');
    }
  }

  return (      
      <div className={styles.mainMenuBackground}>
        <div className={styles.mainMenu}>
            <div className={styles.logo}>
              <Image 
                    src="/logo.png"
                    alt="Logo" 
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
        {showModal && 
          <div className={styles.modalExit}>
              <Image 
                    src={Icons.loading}
                    alt="Logo of treves" 
                    width={30}
                    height={35}
                    priority
                />
          </div>
        }
      </div>        
  )

  
}