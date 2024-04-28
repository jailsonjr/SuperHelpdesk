'use client'
import Link from 'next/link'
import styles from '@/app/users/users.module.css'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import { FormEvent, useEffect, useState } from 'react'
import MainLayout from '@/components/MainLayout/mainLayout'
import AppLoading from '@/components/AppLoading/appLoading'

async function getDataDevice(data: string) {
  const result = await fetch(data[0] + data[1]);
  const dataResult = await result.json();
  return dataResult
}

async function getData() {
  let uri = `${process.env.NEXT_PUBLIC_URL_BASE}/api/users`;
  const result = await fetch(uri);
  const dataResult = await result.json();
  return dataResult
}

export default function EditUsers({ params }: {params:any}) {

  const { data, isLoading } = useSWR<any>([
    `${process.env.NEXT_PUBLIC_URL_BASE}/api/devices/`,
    params.device_id
  ], getDataDevice);

  const users = useSWR<any>('get-users', getData);

  const [deviceSerial, setDeviceSerial] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [deviceStatus, setDeviceStatus] = useState('');
  const [deviceDateDelivered, setDeviceDateDelivered] = useState('');
  const [deviceUser, setDeviceUser] = useState('');
  const [deviceContract, setDeviceContract] = useState('');
  const [deviceObs, setDeviceObs] = useState('');
  const [deviceID, setDeviceID] = useState('');

  const nav = useRouter();

  useEffect(()=> {
    if(!isLoading && !users.isLoading){
      setDeviceSerial(data.device_serial);
      setDeviceType(data.device_type);
      setDeviceStatus(data.device_status);
      if(data.device_date_delivered){
        let dataFormatada = new Date(data.device_date_delivered)
        setDeviceDateDelivered(dataFormatada.toISOString().substring(0,10));
      }
      setDeviceUser(data.user_id);
      setDeviceContract(data.contract_id);
      setDeviceObs(data.device_obs);  
      setDeviceID(params.device_id)
    }    
  }, [data, users.data])

  

  const handleForm = async (event: FormEvent) => {
    event.preventDefault(); 
    setDeviceSerial(deviceSerial);
    setDeviceType(deviceType);
    setDeviceStatus(deviceStatus);
    setDeviceDateDelivered(deviceDateDelivered);
    setDeviceUser(deviceUser);
    setDeviceContract(deviceContract);
    setDeviceObs(deviceObs);

    const dataRaw = {
      deviceID,
      deviceSerial,
      deviceType,
      deviceStatus,
      deviceDateDelivered,
      deviceUser,
      deviceContract,
      deviceObs
    }
 

    const request = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/devices`,{
      method: 'PUT',
      body: JSON.stringify(dataRaw)
    })

    

    if(request.ok){
      alert('Atualizado');
      nav.push('/devices?registered=ok')
    }

  }

  return (
    <MainLayout>
      <div className={styles.submenu}>
        <div className={styles.title}>Editar dispositivo</div>
        <Link href='/devices' className={styles.buttonCancel}>Cancelar</Link>
      </div>

      {isLoading && users.isLoading == true ? <AppLoading className={styles.modalUsers} size={30} /> :
      <div className={styles.grid}>
        <form className={styles.new_form} onSubmit={handleForm}>
          <h3 className={styles.subtitle}>Informações do Dispositivo</h3>
          <fieldset>  
            <div>
              <span>Serial *</span>
              <input type='text' placeholder='Serial' 
              onChange={(e) => {setDeviceSerial(e.target.value.toLocaleUpperCase())}}
              value={deviceSerial}
              name='serial' required/>
            </div>
              
            <div>
              <span>Tipo </span>
              <select value={deviceType} name='serial' placeholder='Tipo do Dispositivo' required onChange={(e) => {setDeviceType(e.target.value)}} >
                { deviceType == "desktop" ? <option value='desktop' selected >Desktop</option> : <option value='desktop' >Desktop</option> }
                { deviceType == "notebook" ? <option value='notebook' selected >Notebook</option> : <option value='notebook' >Notebook</option> }
                { deviceType == "carregador_nb" ? <option value='carregador_nb' selected >Carregador de Notebook</option> : <option value='carregador_nb' >Carregador de Notebook</option> }
                { deviceType == "monitor" ? <option value='monitor' selected >Monitor</option> : <option value='monitor' >Monitor</option> }
                { deviceType == "impressora" ? <option value='impressora' selected >Impressora</option> : <option value='impressora' >Impressora</option> }
                { deviceType == "smartphone" ? <option value='smartphone' selected >Smartphone</option> : <option value='smartphone' >Smartphone</option> }
                { deviceType == "carregador_sm" ? <option value='carregador_sm' selected >Carregador Smartphone</option> : <option value='carregador_sm' >Carregador Smartphone</option> }
                { deviceType == "headset" ? <option value='headset' selected >Headset</option> : <option value='headset' >Headset</option> }
                { deviceType == "mouse" ? <option value='mouse' selected >Mouse</option> : <option value='mouse' >Mouse</option> }
                { deviceType == "teclado" ? <option value='teclado' selected >Teclado</option> : <option value='teclado' >Teclado</option> }
                { deviceType == "leitor_cod" ? <option value='leitor_cod' selected >Leitor de Cód. barras</option> : <option value='leitor_cod' >Leitor de Cód. barras</option> }
                { deviceType == "adaptador_wifi" ? <option value='adaptador_wifi' selected >Adaptador Wifi</option> : <option value='adaptador_wifi' >Adaptador Wifi</option> }
              </select>
            </div>

            <div>
              <span>Status</span>
              <select value={deviceStatus} name='status' placeholder='status' required onChange={(e) => {setDeviceStatus(e.target.value)}} >
                { deviceStatus == "ativo" ? <option value='ativo' selected >Ativo</option> : <option value='ativo' >Ativo</option> }
                { deviceStatus == "manutencao" ? <option value='manutencao' selected >Manutenção</option> : <option value='manutencao' >Manutenção</option> }
                { deviceStatus == "quebrado" ? <option value='quebrado' selected >Quebrado</option> : <option value='quebrado' >Quebrado</option> }
                { deviceStatus == "roubado" ? <option value='roubado' selected >Roubado</option> : <option value='roubado' >Roubado</option> }
              </select>
            </div>             
          </fieldset>

          <fieldset>
              <span>Observação</span>
              <textarea placeholder='Informações extras' name='obs' onChange={(e) => {setDeviceObs(e.target.value)}}
              value={deviceObs}
              />
            </fieldset>

          <h3 className={styles.subtitle}>Informações do Usuário</h3>

          <fieldset>
              <div>
                <span>Usuário {deviceUser} </span> 
                <select value={deviceUser} name='user' placeholder='user' onChange={(e) => {setDeviceUser(e.target.value)}}>
                  
                  {deviceUser == "" ? <option value="" selected></option>: <option value=""></option> }

                  {users.data.map((items:any) => {

                    if(items.user_id == deviceUser){
                      return <option value={items.user_id} selected>{items.user_name}</option>
                    }else{
                      return <option value={items.user_id}>{items.user_name}</option>
                    }
                    
                  })}     
                </select>    
              </div>

              <div>
                <span>Date da Entrega</span>
                <input value={deviceDateDelivered} type='date' placeholder='data de entrega' onChange={(e) => {setDeviceDateDelivered(e.target.value)}}/>
              </div>
          </fieldset>

          <h3 className={styles.subtitle}>Informações do Contrato</h3>

            <fieldset>
                <div>
                  <span>Contrato</span>
                  <input type='text' placeholder='contrato' 
                  onChange={(e) => {setDeviceSerial(e.target.value.toLocaleUpperCase())}}
                  value={deviceContract}
                  name='contrato'/>
                </div>
            </fieldset>



            <fieldset>
              <button className={styles.buttonSave} name='sendButton' type='submit'>Atualizar</button>
            </fieldset>
        </form>
      </div> }
    </MainLayout>
  )
}
