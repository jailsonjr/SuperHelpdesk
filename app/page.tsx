'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FormEvent, useState } from 'react'
import styles from './page.module.css'
import Icons from './icons';
import { useRouter as useNav} from 'next/navigation'
import AppLoading from '@/components/AppLoading/appLoading'

export default function Login() {

    const nav = useNav();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleForm = async (event: FormEvent) => {
        event.preventDefault(); 
        setLoading(true);

        const dataRaw = {
            email,
            password
        }

        const request = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/auth`,{
            method: 'post',
            body: JSON.stringify(dataRaw)
        })

        const resultData = await request.json();

        if(resultData.error){
            setLoading(false);
            alert("Credenciais erradas")
        } else {
            localStorage.setItem('session', resultData.token);
            nav.push('/dashboard');
        }

    }

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
            <form className={styles.formLoginWrapper} onSubmit={handleForm}>
                <fieldset className={styles.formLoginFieldset}>
                    <span className={styles.formLoginName}>E-mail</span>
                    <div className={styles.formLoginField}>
                        <Icons.email className={styles.formLoginWrapperIcon}/>
                        <input name='login_email' placeholder='Digite seu e-mail' type="email" required onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>
                </fieldset>
                <fieldset className={styles.formLoginFieldset}>
                    <span className={styles.formLoginName}>Senha</span>
                    <div className={styles.formLoginField}>
                        <Icons.lock className={styles.formLoginWrapperIcon}/>
                        <input 
                            name='login_senha' placeholder='Digite sua senha' 
                            type="password" required
                            onChange={(e) => {setPassword(e.target.value)}}
                        />
                    </div>
                </fieldset>
                <div className={styles.loginFormFooter}>     
                    {loading == true ? <AppLoading className={styles.modalLogin} size={30} /> : <>               
                    <input name='login_send' type="submit" value="Entrar" />
                    <Link href="/lost_password" className={styles.loginLink}>Esqueceu a senha?</Link>
                    </> }
                </div>
            </form>
            <footer className={styles.footerWrapper}>
                <span className={styles.rights}>2024. Todos direitos reservados</span>
            </footer>
        </section>
    </main>
  )
}
