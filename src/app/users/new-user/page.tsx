'use client'
import Link from 'next/link'
import styles from '../users.module.css'
import Image from 'next/image'
import { useRouter as useNav} from 'next/navigation'
import LoadingIcon from '../../../../public/icons/loading.gif'
import { FormEvent, useState } from 'react'
import MainMenu from '@/components/mainmenu/mainmenu';

async function getDataUsers() {
  let uri = `${process.env.NEXT_PUBLIC_URL_BASE}/api/users`;
  const result = await fetch(uri);
  const dataResult = await result.json();
  return dataResult
}

export default function NewUsers() {

  const [showModal, setShowModal] = useState('none');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [filial, setFilial] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [cargo, setCargo] = useState('');
  const [OBS, setOBS] = useState('');

  const nav = useNav();

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
      OBS
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
    <>
    <main className={styles.main}>
      <MainMenu />
      <div className={styles.submenu}>
        <div className={styles.title}>Novo usuário</div>
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
              name='name' required/>
            </div>

            <div>
              <span>E-mail *</span>
              <input type='text' placeholder='Informe o email' required onChange={(e) => {setEmail(e.target.value)}}/>
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
              <input type='text' placeholder='Informe o cargo' onChange={(e) => {setCargo(e.target.value)}}/>
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
