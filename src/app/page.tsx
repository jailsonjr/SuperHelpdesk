import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Login() {
  return (
    <main className={styles.main}>
        <section className={styles.loginWrapper}>
            <header className={styles.headerWrapper}>
                <div className={styles.headerLogo}>
                    <Image 
                        src="/logo.png"
                        alt="Logo of Superhelpdesk" 
                        width={185}
                        height={60}
                        className={styles.logo}
                    />
                </div>
                <div className={styles.headerTitle}>
                    <h1>Bem vindo de volta!</h1>
                </div>
            </header>
            <form className={styles.formLoginWrapper}>
                <fieldset className={styles.formLoginFieldset}>
                    <span className={styles.formLoginName}>E-mail</span>
                    <div className={styles.formLoginField}>
                        <div className={styles.formLoginWrapperIcon}>
                            <Image 
                                src="/icons/mail.png"
                                alt="icon of mail" 
                                width={25}
                                height={20}
                                className={styles.formLoginIcon}
                            />
                        </div>
                        <input name='login_email' placeholder='Digite seu e-mail' type="email" required/>
                    </div>
                </fieldset>
                <fieldset className={styles.formLoginFieldset}>
                    <span className={styles.formLoginName}>Senha</span>
                    <div className={styles.formLoginField}>
                        <div className={styles.formLoginWrapperIcon}>
                            <Image 
                                src="/icons/lock_pass.png"
                                alt="icon of password" 
                                width={25}
                                height={20}
                                className={styles.formLoginIcon}
                            />
                        </div>
                        <input name='login_senha' placeholder='Digite sua senha' type="password" required/>
                    </div>
                </fieldset>
                <div className={styles.loginFormFooter}>
                    <Link href="/lost_password" className={styles.loginLink}>Esqueceu a senha?</Link>
                    <input name='login_send' type="submit" value="entrar"/>
                </div>
            </form>
            <footer className={styles.footerWrapper}>
                <span className={styles.rights}>2023. Todos direitos reservados. TDB</span>
            </footer>
        </section>
    </main>
  )
}
