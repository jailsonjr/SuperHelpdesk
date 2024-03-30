import styles from './AppBar.module.css';
import Image from 'next/image';
import Icons from '../../app/icons';

export default function AppBar() {

    return (      
        <div className={styles.mainMenuBackground}>
          <div className={styles.mainMenu}>
            <div>
                <Icons.menu className={styles.menu} />
            </div>
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
          </div>
        </div>        
  )

  
}