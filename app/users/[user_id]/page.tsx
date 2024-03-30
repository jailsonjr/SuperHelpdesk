'use client'
import Link from 'next/link'
import styles from '@/app/users/users.module.css'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import { FormEvent, useEffect, useState } from 'react'
import MainLayout from '@/components/MainLayout/mainLayout'

async function getDataUser(data: string) {
  const result = await fetch(data[0] + data[1]);
  const dataResult = await result.json();
  console.log("uri: " + data[0] + data[1])
  console.log(dataResult)
  return dataResult
}

export default function EditUsers({ params }: {params:any}) {

  const { data, isLoading } = useSWR<any>([
    `${process.env.NEXT_PUBLIC_URL_BASE}/api/users/`,
    params.user_id
  ], getDataUser);
  const [showModal, setShowModal] = useState('none');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [filial, setFilial] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [cargo, setCargo] = useState('');
  const [OBS, setOBS] = useState('');

  const nav = useRouter();

  useEffect(()=> {
    if(isLoading){
      setShowModal('block')
    }else {
      setShowModal('none')
      setName(data.user_name);
      setEmail(data.user_email);
      setCargo(data.user_position);
      setOBS(data.user_obs);
    }    
  }, [isLoading, data])

  const handleForm = async (event: FormEvent) => {
    event.preventDefault(); 
    setShowModal('block');

    const dataNow = new Date();
    

    const dataRaw = {
      name,
      email,
      status,
      filial,
      departamento,
      cargo,
      OBS,
      timestamps: {
        created_at: dataNow.getDate().toString().padStart(2,'0') + '/' + dataNow.getMonth().toString().padStart(2,'0') + '/' + dataNow.getFullYear() + ' - ' + dataNow.getHours() + ':' + dataNow.getMinutes(),
        updated_at: dataNow.getDate().toString().padStart(2,'0') + '/' + dataNow.getMonth().toString().padStart(2,'0') + '/' + dataNow.getFullYear() + ' - ' + dataNow.getHours() + ':' + dataNow.getMinutes()
      }
    }

    const request = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/users`,{
      method: 'POST',
      body: JSON.stringify(dataRaw)
    })

    if(request.ok){
      alert('Cadastrado');
      setShowModal('none');
      nav.push('/users?registered=ok')
    }
  }

  return (
    <MainLayout>
      <div className={styles.submenu}>
        <div className={styles.title}>Editar usuário</div>
        <Link href='/users' className={styles.buttonCancel}>Cancelar</Link>
      </div>
      <div className={styles.grid}>
        <form className={styles.new_form} onSubmit={handleForm}>
          <h3 className={styles.subtitle}>Informações do Usuário</h3>
          <fieldset>  
            <div>
              <span>Nome completo do Usuário *</span>
              <input type='text' placeholder='Nome do Usuário' 
              onChange={(e) => {setName(e.target.value.toLocaleUpperCase())}}
              value={name}
              name='name' required/>
            </div>

            <div>
              <span>E-mail *</span>
              <input type='text' placeholder='Informe o email' required 
              onChange={(e) => {setEmail(e.target.value)}} 
              value={email}/>
            </div>

            <div>
              <span>Status *</span>
              <select name='status' placeholder='status' required onChange={(e) => {setStatus(e.target.value)}} defaultValue=''>
                <option value=''></option>
                <option value='ativo'>Ativo</option>
                <option value='desligado'>Desligado</option>
              </select>
            </div>
          </fieldset>
          <h3 className={styles.subtitle}>Informações do Departamento / Local</h3>
          <fieldset>

            <div>
              <span>Filial *</span>
              <select name='filial' placeholder='Filial do usuario' required onChange={(e) => {setFilial(e.target.value)}} defaultValue=''>
                <option value=''></option>
                <option value='0101 - Quatro Barras'>0101 - Quatro Barras</option>
                <option value='0102 - Caçapava'>0102 - Caçapava</option>
                <option value='0103 - Trecin'>0103 - Trecin</option>
                <option value='0104 - Betim'>0104 - Betim</option>
                <option value='0105 - Residente - Renault'>0105 - Residente - Renault</option>
                <option value='0106 - Residente - VW'>0106 - Residente - VW</option>
                <option value='0107 - Residente - Honda'>0107 - Residente - Honda</option>
              </select>
            </div>

            <div>
              <span>Departamento</span>
              <select name='departamento' placeholder='Departamento' onChange={(e) => {setDepartamento(e.target.value)}} defaultValue=''>
                <option value=''></option>
                <option value='D01 - Logistica'>Logistica</option>
                <option value='D02 - Fiscal'>Fiscal</option>
                <option value='D03 - Financeiro'>Financeiro</option>
                <option value='D04 - RH'>RH</option>
                <option value='D05 - Qualidade'>Qualidade</option>
                <option value='D06 - Comercial'>Comercial</option>
                <option value='D07 - Sprint'>Sprint</option>
                <option value='D08 - Controladoria'>Controladoria</option>
                <option value='D09 - Engenharia'>Engenharia</option>
                <option value='D10 - Projetos'>Projetos</option>
                <option value='D11 - Diretor'>Diretor</option>
                <option value='D12 - Contabilidade'>Contabilidade</option>
                <option value='D13 - TI'>TI</option>
                <option value='D14 - Produção'>Produção</option>
                <option value='D15 - Portaria'>Portaria</option>
                <option value='D16 - Compras'>Compras</option>
                <option value='D17 - Industrial'>Industrial</option>
              </select>
            </div>

            <div>
              <span>Cargo</span>
              <input type='text' placeholder='Informe o cargo' 
              onChange={(e) => {setCargo(e.target.value)}}
              value={cargo}
              />
            </div>
          </fieldset>
            <fieldset>
              <span>Observação</span>
              <textarea placeholder='Informações extras' onChange={(e) => {setOBS(e.target.value)}}
              value={OBS}
              />
            </fieldset>

            <fieldset>
              <button className={styles.buttonSave} name='sendButton' type='submit'>Atualizar</button>
            </fieldset>
        </form>
      </div>
    </MainLayout>
  )
}
