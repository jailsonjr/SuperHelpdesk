'use client'
import Link from 'next/link'
import styles from '../devices.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import LoadingIcon from '../../../../public/icons/loading.gif'
import { FormEvent, useState } from 'react'


export default function NewDevices() {

  const [showModal, setShowModal] = useState('none');
  const [IDTreves, setIdTreves] = useState('');
  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');
  const [ns, setNs] = useState('');
  const [status, setStatus] = useState('');
  const [filial, setFilial] = useState('');
  const [user, setUser] = useState('');
  const [dateDelivered, setDateDelivered] = useState('');
  const [company, setCompany] = useState('');
  const [numContract, setNumContract] = useState('');
  const [amountContract, setAmountCompany] = useState('');
  const [valueDevices, setValueDevice] = useState('');
  const [dateEndLoan, setDateEndLoan] = useState('');
  const [ip, setIP] = useState('');
  const [macaddress1, setMacAddress1] = useState('');
  const [macaddress2, setMacAddress2] = useState('');
  const [OBS, setOBS] = useState('');

  const nav = useRouter();

  const handleForm = async (event: FormEvent) => {
    event.preventDefault(); 
    setShowModal('block');

    const dataNow = new Date();

    const dataRaw = {
      id_treves: IDTreves,
      type,
      brandModel: brand,
      serialNumber: ns,
      status,
      filial,
      user,
      dateDelivered,
      company,
      numContract,
      amountContract,
      valueDevices,
      dateEndLoan,
      properties: {
        ip,
        macaddress1,
        macaddress2
      },
      OBS,
      timestamps: {
        created_at: dataNow.getDate().toString().padStart(2,'0') + '/' + dataNow.getMonth().toString().padStart(2,'0') + '/' + dataNow.getFullYear() + ' - ' + dataNow.getHours() + ':' + dataNow.getMinutes(),
        updated_at: dataNow.getDate().toString().padStart(2,'0') + '/' + dataNow.getMonth().toString().padStart(2,'0') + '/' + dataNow.getFullYear() + ' - ' + dataNow.getHours() + ':' + dataNow.getMinutes()
      }
    }

    let uri = process.env.URL_BASE;
    const request = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/devicesAPI`,{
      method: 'POST',
      body: JSON.stringify(dataRaw)
    })

    if(request.ok){
      alert('Cadastrado');
      setShowModal('none');
      nav.push('/devices?registered=ok')
    }
  }

  return (
    <>
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
        <Link href='/devices' className={styles.buttonCancel}>Cancelar</Link>
      </div>
      <div className={styles.grid}>
        <form className={styles.new_form} onSubmit={handleForm}>
          <h3 className={styles.subtitle}>Informações do Dispositivo</h3>
          <fieldset>  
            <div>
              <span>ID Treves *</span>
              <input type='text' placeholder='ID Treves' 
              onChange={(e) => {setIdTreves(e.target.value.toLocaleUpperCase())}}
              name='id_treves' required/>
            </div>

            <div>
              <span>Tipo do Dispositivo *</span>
              <select name='type' placeholder='status' required onChange={(e) => {setType(e.target.value)}} defaultValue=''>
                <option value=''></option>
                <option value='desktop'>Desktop</option>
                <option value='notebook'>Notebook</option>
                <option value='monitor'>Monitor</option>
                <option value='impressora'>Impressora</option>
                <option value='smartphone'>Smartphone</option>
                <option value='suporte'>Suporte</option>
                <option value='headset'>Headset</option>
                <option value='mouse'>Mouse</option>
                <option value='teclado'>Teclado</option>
                <option value='leitor_cod'>Leitor de Cod. de Barras</option>
              </select>
            </div>

            <div>
              <span>Marca - Modelo *</span>
              <input type='text' placeholder='Informe a Marca - Modelo' required onChange={(e) => {setBrand(e.target.value)}}/>
            </div>

            <div>
              <span>Número Serial *</span>
              <input type='text' placeholder='Número Serial' required onChange={(e) => {setNs(e.target.value.toLocaleUpperCase())}}/>
            </div>

            <div>
              <span>Status *</span>
              <select name='status' placeholder='status' required onChange={(e) => {setStatus(e.target.value)}} defaultValue=''>
                <option value=''></option>
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
              <select name='filial' placeholder='status' required onChange={(e) => {setFilial(e.target.value)}} defaultValue=''>
                <option value=''></option>
                <option value='F0101'>0101 - Quatro Barras</option>
                <option value='F0102'>0102 - Caçapava</option>
                <option value='F0103'>0103 - Trecin</option>
                <option value='F0104'>0104 - Betim</option>
                <option value='F0105'>0105 - Residente - Renault</option>
                <option value='F0106'>0106 - Residente - VW</option>
                <option value='F0107'>0107 - Residente - Honda</option>
              </select>
            </div>

            <div>
              <span>Usuário / Local</span>
              <input type='text' placeholder='Informe o usuário' onChange={(e) => {setUser(e.target.value)}} />
            </div>

            <div>
              <span>Date da Entrega</span>
              <input type='date' placeholder='date delivered' onChange={(e) => {setDateDelivered(e.target.value)}}/>
            </div>
          </fieldset>

          <h3 className={styles.subtitle}>Informações do Proprietário</h3>

          <fieldset>

            <div>
              <span>Empresa *</span>
              <select name='proprietary' placeholder='Empresa' required onChange={(e) => {setCompany(e.target.value)}} defaultValue=''>
                <option value=''></option>
                <option value='P01'>Treves do Brasil</option>
                <option value='P02'>Trecin Industrial</option>
                <option value='P03'>Hexanet</option>
                <option value='P04'>Treves SAS</option>
                <option value='P05'>Copel</option>
                <option value='P06'>Algar</option>
                <option value='P07'>Embratel</option>
                <option value='P08'>FCM</option>
                <option value='P09'>Selbetti</option>
                <option value='P10'>Ricohpy</option>
                <option value='P11'>Telefonica</option>
                <option value='P12'>As Informatica</option>
                <option value='P13'>Bluepex</option>
              </select>
            </div>

            <div>
              <span>Número do Contrato</span>
              <input type='text' placeholder='Numero do Contrato' onChange={(e) => {setNumContract(e.target.value)}}  />
            </div>

            <div>
              <span>Valor equipamento</span>
              <input type='text' placeholder='Valor do Equipamento' onChange={(e) => {setValueDevice(e.target.value)}} />
            </div>

            <div>
              <span>Valor Mensal</span>
              <input type='text' placeholder='Valor Mensal R$' onChange={(e) => {setAmountCompany(e.target.value)}} />
            </div>

            <div>
              <span>Data do final do Contrato</span>
              <input type='date' placeholder='Data do Final do Contrato' onChange={(e) => {setDateEndLoan(e.target.value)}} />
            </div>
          </fieldset>

          <h3 className={styles.subtitle}>Informações Adicionais</h3>

          <fieldset>
            <div>
              <span>IP Reservado</span>
              <input type='text' placeholder='Informe o IP' onChange={(e) => {setIP(e.target.value)}}/>
            </div>

            <div>
              <span>Mac Address WIFI</span>
              <input type='text' placeholder='Mac Address WIFI' onChange={(e) => {setMacAddress1(e.target.value.toLocaleUpperCase())}}/>
            </div>

            <div>
              <span>Mac Address ETHERNET</span>
              <input type='text' placeholder='Mac Address ETHERNET' onChange={(e) => {setMacAddress2(e.target.value.toLocaleUpperCase())}}/>
            </div>
          </fieldset>
            <fieldset>
              <span>Observação</span>
              <textarea placeholder='Informações extras' onChange={(e) => {setOBS(e.target.value)}}/>
            </fieldset>

            <fieldset>
              <button className={styles.buttonSave} name='sendButton' type='submit'>Salvar</button>
            </fieldset>
        </form>
      </div>
    </main>
    <div style={{display: showModal}} className={styles.modal}>
      <div className={styles.content}>
         <Image 
                unoptimized={true}
                src={LoadingIcon}
                alt="Loading icon" 
                width={24}
                height={24}
                className={styles.IconLoading}
          />
          <span>Salvando</span>
        </div>
    </div>
    </>
  )
}
