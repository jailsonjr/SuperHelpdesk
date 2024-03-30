import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import Icons from './icons';

export default function Login() {
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
                    <h1>Entre na sua conta</h1>
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
                <fieldset className={styles.formLoginFieldset}>
                    <span className={styles.formLoginName}>Senha</span>
                    <div className={styles.formLoginField}>
                        <Icons.lock className={styles.formLoginWrapperIcon}/>
                        <input 
                            name='login_senha' placeholder='Digite sua senha' 
                            type="password" required
                        />
                    </div>
                </fieldset>
                <div className={styles.loginFormFooter}>                    
                    <input name='login_send' type="submit" value="entrar"/>
                    <Link href="/lost_password" className={styles.loginLink}>Esqueceu a senha?</Link>
                </div>
            </form>
            <footer className={styles.footerWrapper}>
                <span className={styles.rights}>2024. Todos direitos reservados</span>
            </footer>
        </section>
    </main>
  )
}
