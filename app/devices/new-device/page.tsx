'use client'
import Link from 'next/link'
import styles from '../devices.module.css'
import { useRouter } from 'next/navigation'
import { FormEvent, useState, useEffect } from 'react'
import useSWR from 'swr'
import MainLayout from '@/components/MainLayout/mainLayout'

async function getDataUsers() {
  let uri = `${process.env.NEXT_PUBLIC_URL_BASE}/api/users`;
  const result = await fetch(uri);
  const dataResult = await result.json();
  return dataResult
}

export default function NewDevices() {

  const getUsers = useSWR<any[]>('get-users',getDataUsers);

  const [deviceSerial, setDeviceSerial] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [deviceStatus, setDeviceStatus] = useState('');
  const [deviceDateDelivered, setDeviceDateDelivered] = useState('');
  const [deviceUser, setDeviceUser] = useState('');
  const [deviceContract, setDeviceContract] = useState('');
  const [deviceObs, setDeviceObs] = useState('');
  const [users, setUsers] = useState<any[] | undefined>();

  const nav = useRouter();

  useEffect(()=> {
    if(!getUsers.isLoading){
        setUsers(getUsers.data)
    }    
  }, [getUsers.data])

  const handleForm = async (event: FormEvent) => {
    event.preventDefault(); 

    const dataRaw = {
      deviceType,
      deviceSerial,
      deviceStatus,
      deviceUser,
      deviceDateDelivered,
      deviceContract,
      deviceObs
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
              <span>Número Serial *</span>
              <input type='text' placeholder='Número Serial' required onChange={(e) => {setDeviceSerial(e.target.value.toLocaleUpperCase())}}/>
            </div>

            <div>
              <span>Tipo do Dispositivo *</span>
              <select name='type' placeholder='status' required onChange={(e) => {setDeviceType(e.target.value)}} defaultValue=''>
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
              <span>Status *</span>
              <select name='status' placeholder='status' required onChange={(e) => {setDeviceStatus(e.target.value)}} defaultValue=''>
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
                <span>Usuário</span> 
                <select value={deviceUser} name='user' placeholder='user' onChange={(e) => {setDeviceUser(e.target.value)}}>
                  
                  {deviceUser == "" ? <option value="" selected></option>: <option value=""></option> }

                  {users?.map((items:any) => {

                    if(items.user_id == deviceUser){
                      return <option key={items.user_id} value={items.user_id} selected>{items.user_name}</option>
                    }else{
                      return <option key={items.user_id} value={items.user_id}>{items.user_name}</option>
                    }
                    
                  })}     
                </select>    
              </div>

            <div>
              <span>Date da Entrega</span>
              <input type='date' placeholder='date delivered' onChange={(e) => {setDeviceDateDelivered(e.target.value)}}/>
            </div>
          </fieldset>

          <h3 className={styles.subtitle}>Informações do Proprietário</h3>

          <fieldset>

            <div>
              <span>Contrato</span>
              <input type='text' placeholder='Numero do Contrato' onChange={(e) => {setDeviceContract(e.target.value)}}  />
            </div>

          </fieldset>

          <h3 className={styles.subtitle}>Informações Adicionais</h3>

            <fieldset>
              <span>Observação</span>
              <textarea placeholder='Informações extras' onChange={(e) => {setDeviceObs(e.target.value)}}/>
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
