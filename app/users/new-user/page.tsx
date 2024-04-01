'use client'
import Link from 'next/link'
import styles from '../users.module.css'
import { useRouter as useNav} from 'next/navigation'
import { FormEvent, useState } from 'react'
import MainLayout from '@/components/MainLayout/mainLayout'


async function getDataUsers() {
  let uri = `${process.env.NEXT_PUBLIC_URL_BASE}/api/users`;
  const result = await fetch(uri);
  const dataResult = await result.json();
  return dataResult
}

export default function NewUsers() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [departament, setDepartament] = useState('');
  const [position, setPosition] = useState('');
  const [obs, setOBS] = useState('');

  const nav = useNav();

  const handleForm = async (event: FormEvent) => {
    event.preventDefault(); 

    const dataRaw = {
      name,
      email,
      password,
      status,
      departament,
      position,
      obs
    }

    console.log("DADOS REQUISICAO:", dataRaw)


    const requestSave = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/users`,{
      method: 'POST',
      body: JSON.stringify(dataRaw)
    })

    if(requestSave.ok){
      alert('Cadastrado');
      nav.push('/users?registered=ok')
    }
  }

  return (
    <MainLayout>
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
              <input type='text' name='email' placeholder='Informe o email' required onChange={(e) => {setEmail(e.target.value)}}/>
            </div>

            <div>
              <span>Password *</span>
              <input type='text' name='password' placeholder='Informe a senha' required onChange={(e) => {setPassword(e.target.value)}}/>
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
          
          <h3 className={styles.subtitle}>Informações do Departamento</h3>
          <fieldset>

            <div>
              <span>Departamento</span>
              <select name='departament' placeholder='Departament' onChange={(e) => {setDepartament(e.target.value)}} defaultValue=''>
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
              <input type='text' placeholder='Informe o cargo' name='position' onChange={(e) => {setPosition(e.target.value)}}/>
            </div>
          </fieldset>
            <fieldset>
              <span>Observação</span>
              <textarea placeholder='Informações extras' name='obs' onChange={(e) => {setOBS(e.target.value)}}/>
            </fieldset>

            <fieldset>
              <button className={styles.buttonSave} name='sendButton' type='submit'>Salvar</button>
            </fieldset>
        </form>
      </div>
      </MainLayout>
  )
}
