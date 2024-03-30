import Link from 'next/link'
import Image from 'next/image'
import styles from './lost_password.module.css'
import Icons from '../icons';

export default function LostPassword() {
  return (
    <main className={styles.main}>
        <section className={styles.loginWrapper}>
            <header className={styles.headerWrapper}>
                <div className={styles.headerLogo}>
                    <Image 
                        src="/logo.png"
                        alt="Logo of Superhelpdesk" 
                        width={105}
                        height={35}
                        className={styles.logo}
                    />
                </div>
                <div className={styles.headerTitle}>
                    <h1>Recupere sua senha</h1>
                </div>
            </header>
            <form className={styles.formLoginWrapper}>
                <fieldset className={styles.formLoginFieldset}>
                    <span className={styles.formLoginName}>E-mail</span>
                    <div className={styles.formLoginField}>
                        <Icons.email className={styles.formLoginWrapperIcon}/>
                        <input name='login_email' placeholder='Digite seu e-mail' type="email" required/>
                    </div>
                </fieldset>
                <div className={styles.loginFormFooter}>                    
                    <input name='reset_send' type="submit" value="Recuperar"/>
                    <Link href="/" className={styles.loginLink}>Ja possui conta?</Link>
                </div>
            </form>
            <footer className={styles.footerWrapper}>
                <span className={styles.rights}>2024. Todos direitos reservados</span>
            </footer>
        </section>
    </main>
  )
}
