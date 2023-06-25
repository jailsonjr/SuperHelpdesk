import Link from 'next/link'
import styles from '../devices.module.css'
import Image from 'next/image'

export default async function NewDevices() {


  return (
    <main className={styles.main}>
      <div className={styles.mainMenuBackground}>
      <div className={styles.mainMenu}>
          <div className={styles.logo}>
                  <Image 
                        src="/logo.png"
                        alt="Logo of treves" 
                        width={148}
                        height={25}
                        className={styles.logo}
                        priority
                    />
          </div>
          <nav className={styles.nav}>
            <Link href='/dash' className={styles.navlink}>
              <span className={`material-symbols-outlined ${styles.navicon}`}>grid_view</span>
              <span className={styles.navtext}>Dashboard</span>
            </Link>
            <Link href='/users' className={styles.navlink}>
              <span className={`material-symbols-outlined ${styles.navicon}`}>person</span>
              <span className={styles.navtext}>Users</span>
            </Link>
            <Link href='/devices' className={styles.navlink}>
              <span className={`material-symbols-outlined ${styles.navicon}`}>computer</span>
              <span className={styles.navtext}>Devices</span>
            </Link>
            <Link href='/contract' className={styles.navlink}>
              <span className={`material-symbols-outlined ${styles.navicon}`}>contract</span>
              <span className={styles.navtext}>Contracts</span>
            </Link>
          </nav>
      </div>
      </div>
      <div className={styles.submenu}>
        <div className={styles.title}>Novo Equipamento</div>
      </div>
      <div className={styles.grid}>
        <form className={styles.new_form}>
          <h3 className={styles.subtitle}>Informações do Dispositivo</h3>
          <fieldset>  
            <div>
              <span>ID Treves *</span>
              <input type='text' placeholder='ID Treves' required/>
            </div>

            <div>
              <span>Tipo do Dispositivo *</span>
              <select name='type' placeholder='status' required>
                <option value='ativo'>Desktop</option>
                <option value='quebrado'>Notebook</option>
                <option value='sem_uso'>Monitor</option>
                <option value='devolvido'>Impressora</option>
                <option value='sem_uso'>Smartphone</option>
                <option value='sem_uso'>Suporte</option>
                <option value='devolvido'>Headset</option>
                <option value='devolvido'>Mouse</option>
                <option value='devolvido'>Teclado</option>
                <option value='devolvido'>Leitor de Cod. de Barras</option>
              </select>
            </div>

            <div>
              <span>Marco - Modelo *</span>
              <input type='text' placeholder='Informe a Marca - Modelo' required/>
            </div>

            <div>
              <span>Número Serial *</span>
              <input type='text' placeholder='Número Serial' required/>
            </div>

            <div>
              <span>Status *</span>
              <select name='status' placeholder='status' required>
                <option value='ativo'>Ativo</option>
                <option value='quebrado'>Quebrado</option>
                <option value='devolvido'>Devolvido</option>
                <option value='sem_uso'>Sem uso</option>
              </select>
            </div>
          </fieldset>
          <h3 className={styles.subtitle}>Informações do Usuário / Local</h3>
          <fieldset>

            <div>
              <span>Filial *</span>
              <select name='filial' placeholder='status' required>
                <option value='ativo'>0101 - Quatro Barras</option>
                <option value='ativo'>0102 - Caçapava</option>
                <option value='ativo'>0103 - Trecin</option>
                <option value='ativo'>0104 - Betim</option>
                <option value='ativo'>0105 - Residente - Renault</option>
                <option value='ativo'>0106 - Residente - VW</option>
                <option value='ativo'>0107 - Residente - Honda</option>
              </select>
            </div>

            <div>
              <span>Usuário / Local</span>
              <input type='text' placeholder='Informe o usuário'/>
            </div>

            <div>
              <span>Date da Entrega</span>
              <input type='date' placeholder='date delivered'/>
            </div>
          </fieldset>

          <h3 className={styles.subtitle}>Informações do Proprietário</h3>

          <fieldset>

            <div>
              <span>Empresa *</span>
              <select name='proprietary' placeholder='Empresa' required>
                <option value='ativo'>Treves do Brasil</option>
                <option value='ativo'>Trecin Industrial</option>
                <option value='ativo'>Hexanet</option>
                <option value='ativo'>Treves SAS</option>
                <option value='ativo'>Copel</option>
                <option value='ativo'>Algar</option>
                <option value='ativo'>Embratel</option>
                <option value='ativo'>FCM</option>
                <option value='ativo'>Selbetti</option>
                <option value='ativo'>Ricohpy</option>
                <option value='ativo'>Telefonica</option>
                <option value='ativo'>As Informatica</option>
                <option value='ativo'>Bluepex</option>
              </select>
            </div>

            <div>
              <span>Número do Contrato</span>
              <input type='text' placeholder='Numero do Contrato'/>
            </div>

            <div>
              <span>Data do final do Contrato</span>
              <input type='date' placeholder='Data do Final do Contrato'/>
            </div>
          </fieldset>

          <h3 className={styles.subtitle}>Informações Adicionais</h3>

          <fieldset>
            <div>
              <span>IP Reservado</span>
              <input type='text' placeholder='Informe o IP'/>
            </div>

            <div>
              <span>Mac Address WIFI</span>
              <input type='text' placeholder='Mac Address WIFI'/>
            </div>

            <div>
              <span>Mac Address ETHERNET</span>
              <input type='text' placeholder='Mac Address ETHERNET'/>
            </div>
          </fieldset>
            <fieldset>
              <span>Observação</span>
              <textarea placeholder='Informações extras'/>
            </fieldset>

            <fieldset>
              <button className={styles.buttonSave}>Salvar</button>
            </fieldset>
        </form>
      </div>
    </main>
  )
}
