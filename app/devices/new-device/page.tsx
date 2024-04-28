'use client'
import Link from 'next/link'
import styles from '../devices.module.css'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import useSWR from 'swr'
import MainLayout from '@/components/MainLayout/mainLayout'

async function getDataUsers() {
  let uri = `${process.env.NEXT_PUBLIC_URL_BASE}/api/users`;
  const result = await fetch(uri);
  const dataResult = await result.json();
  return dataResult
}


async function getDataBrands() {
  let uri = `${process.env.NEXT_PUBLIC_URL_BASE}/api/brands`;
  const result = await fetch(uri);
  const dataResult = await result.json();
  return dataResult
}

export default function NewDevices() {

  const userData = useSWR<any[]>('get-users',getDataUsers);
  const brandsData = useSWR<any[]>('get-brands',getDataBrands);

  const [id_device, setIdDevice] = useState('');
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

    const dataNow = new Date();

    const dataRaw = {
      id_device,
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

    const request = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/devices`,{
      method: 'POST',
      body: JSON.stringify(dataRaw)
    })

    if(request.ok){
      alert('Cadastrado');
      nav.push('/devices?registered=ok')
    }
  }

  return (
    <>
    <MainLayout>
      <div className={styles.submenu}>
        <div className={styles.title}>Novo Equipamento</div>
        <Link href='/devices' className={styles.buttonCancel}>Cancelar</Link>
      </div>
      <div className={styles.grid}>
        <form className={styles.new_form} onSubmit={handleForm}>
          <h3 className={styles.subtitle}>Informações do Dispositivo</h3>
          <fieldset>  
            <div>
              <span>ID do Equipamento *</span>
              <input type='text' placeholder='ID do Equipamento' 
              onChange={(e) => {setIdDevice(e.target.value.toLocaleUpperCase())}}
              name='id_device' required/>
            </div>

            <div>
              <span>Tipo do Dispositivo *</span>
              <select name='type' placeholder='status' required onChange={(e) => {setType(e.target.value)}} defaultValue=''>
                <option value=''></option>
                <option value='desktop'>Desktop</option>
                <option value='notebook'>Notebook</option>
                <option value='carregador_nb'>Carregador Notebook</option>
                <option value='monitor'>Monitor</option>
                <option value='impressora'>Impressora</option>
                <option value='smartphone'>Smartphone</option>
                <option value='carregador_sm'>Carregador Smartphone</option>
                <option value='headset'>Headset</option>
                <option value='mouse'>Mouse</option>
                <option value='teclado'>Teclado</option>
                <option value='leitor_cod'>Leitor de Cod. de Barras</option>
                <option value='adaptador_wifi'>Adaptador Wifi</option>
              </select>
            </div>

            <div>
              <span>Marca - Modelo *</span>
              <input type='text' placeholder='Informe a Marca - Modelo' required onChange={(e) => {setBrand(e.target.value)}} list='brands'/>
              <datalist id='brands'>
                {brandsData.data && brandsData.data.map((brands) => {
                  return <option key={brands.doc_data.model} value={brands.doc_data.brand + ' ' + brands.doc_data.model}>{brands.doc_data.brand + ' ' + brands.doc_data.model}</option>
                })}
              </datalist>
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
              <span>E-mail do usuário</span>
              <input type='text' placeholder='Informe o usuário' onChange={(e) => {setUser(e.target.value)}} list='users' />
            </div>

            <div>
              <span>Date da Entrega</span>
              <input type='date' placeholder='date delivered' onChange={(e) => {setDateDelivered(e.target.value)}}/>
            </div>
          </fieldset>

          <h3 className={styles.subtitle}>Informações do Proprietário</h3>

          <fieldset>

            <div>
              <span>Contrato</span>
              <input type='text' placeholder='Numero do Contrato' onChange={(e) => {setNumContract(e.target.value)}}  />
            </div>

            <div>
              <span>Valor equipamento</span>
              <input type='text' placeholder='Valor do Equipamento' onChange={(e) => {setValueDevice(e.target.value)}} />
            </div>

          </fieldset>

          <h3 className={styles.subtitle}>Informações Adicionais</h3>

            <fieldset>
              <span>Observação</span>
              <textarea placeholder='Informações extras' onChange={(e) => {setOBS(e.target.value)}}/>
            </fieldset>

            <fieldset>
              <button className={styles.buttonSave} name='sendButton' type='submit'>Salvar</button>
            </fieldset>
        </form>
      </div>
    </MainLayout>
    </>
  )
}
