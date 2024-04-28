'use client'
import Link from 'next/link'
import styles from '@/app/users/users.module.css'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import { FormEvent, useEffect, useState } from 'react'
import MainLayout from '@/components/MainLayout/mainLayout'
import AppLoading from '@/components/AppLoading/appLoading'

async function getDataUser(data: string) {
  const result = await fetch(data[0] + data[1]);
  const dataResult = await result.json();
  return dataResult
}

export default function EditUsers({ params }: {params:any}) {

  const { data, isLoading } = useSWR<any>([
    `${process.env.NEXT_PUBLIC_URL_BASE}/api/users/`,
    params.user_id
  ], getDataUser);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [password, setPassword] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [cargo, setCargo] = useState('');
  const [OBS, setOBS] = useState('');
  const [userID, setUserID] = useState('');

  const nav = useRouter();

  useEffect(()=> {
    if(!isLoading){
      setName(data.user_name);
      setEmail(data.user_email);
      setPassword(data.user_password);
      setStatus(data.user_active);
      setDepartamento(data.user_department);
      setCargo(data.user_position);
      setOBS(data.user_obs);
      setUserID(params.user_id)
    }    
  }, [data])

  const handleForm = async (event: FormEvent) => {
    event.preventDefault(); 
    setName(name);
    setEmail(email);
    setPassword(password);
    setDepartamento(departamento);
    setCargo(cargo);
    setStatus(status);
    setOBS(OBS);

    const dataRaw = {
      user_id: userID,
      name,
      email,
      password,
      status,
      departament: departamento,
      position: cargo,
      obs: OBS
    }

    const request = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/users`,{
      method: 'PUT',
      body: JSON.stringify(dataRaw)
    })

    if(request.ok){
      alert('Atualizado');
      nav.push('/users?registered=ok')
    }

  }

  return (
    <MainLayout>
      <div className={styles.submenu}>
        <div className={styles.title}>Editar usuário</div>
        <Link href='/users' className={styles.buttonCancel}>Cancelar</Link>
      </div>

      {isLoading == true ? <AppLoading className={styles.modalUsers} size={30} /> :
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
              <span>Senha</span>
              <input type='text' placeholder='Senha' required 
              onChange={(e) => {setPassword(e.target.value)}} 
              value={password}/>
            </div>

            <div>
              <span>Status</span>
              <select value={status} name='status' placeholder='status' required onChange={(e) => {setStatus(e.target.value)}} >
                { status == "ativo" ? <option value='ativo' selected >Ativo</option> : <option value='ativo' >Ativo</option> }
                { status == "desligado" ? <option value='desligado' selected >Desligado</option> : <option value='desligado' >Desligado</option> }
              </select>
            </div>
          </fieldset>
          <h3 className={styles.subtitle}>Informações do Departamento / Local</h3>
          <fieldset>

            <div>
              <span>Departamento</span>
              <select value={departamento} name='departamento' placeholder='Departamento' onChange={(e) => {setDepartamento(e.target.value)}} >
              { departamento == "D01 - Logistica" ? <option value='D01 - Logistica' selected >Logistica</option> : <option value='D01 - Logistica'>Logistica</option> }
              { departamento == "D02 - Fiscal" ? <option value='D02 - Fiscal' selected >Fiscal</option> : <option value='D02 - Fiscal' >Fiscal</option> }
              { departamento == "D03 - Financeiro" ? <option value='D03 - Financeiro' selected >Financeiro</option> : <option value='D03 - Financeiro' >Financeiro</option> }
              { departamento == "D04 - RH" ? <option value='D04 - RH' selected >RH</option> : <option value='D04 - RH'  >RH</option> }
              { departamento == "D05 - Qualidade" ? <option value='D05 - Qualidade' selected >Qualidade</option> : <option value='D05 - Qualidade'  >Qualidade</option> }
              { departamento == "D06 - Comercial" ? <option value='D06 - Comercial' selected >Comercial</option> : <option value='D06 - Comercial'  >Comercial</option> }
              { departamento == "D07 - Sprint" ? <option value='D07 - Sprint' selected >Sprint</option> : <option value='D07 - Sprint'  >Sprint</option> }
              { departamento == "D08 - Controladoria" ? <option value='D08 - Controladoria' selected >Controladoria</option> : <option value='D08 - Controladoria'  >Controladoria</option> }
              { departamento == "D09 - Engenharia" ? <option value='D09 - Engenharia' selected >Engenharia</option> : <option value='D09 - Engenharia'  >Engenharia</option> }
              { departamento == "D10 - Projetos" ? <option value='D10 - Projetos' selected >Projetos</option> : <option value='D10 - Projetos'  >Projetos</option> }
              { departamento == "D11 - Diretor" ? <option value='D11 - Diretor' selected >Diretor</option> : <option value='D11 - Diretor'  >Diretor</option>  }
              { departamento == "D12 - Contabilidade" ? <option value='D12 - Contabilidade' selected >Contabilidade</option> : <option value='D12 - Contabilidade'  >Contabilidade</option> }
              { departamento == "D13 - TI" ? <option value='D13 - TI' selected >TI</option> : <option value='D13 - TI'  >TI</option>}
              { departamento == "D14 - Produção" ? <option value='D14 - Produção' selected >Produção</option> : <option value='D14 - Produção'  >Produção</option>  }
              { departamento == "D15 - Portaria" ? <option value='D15 - Portaria' selected >Portaria</option> : <option value='D15 - Portaria' >Portaria</option>  }
              { departamento == "D16 - Compras" ? <option value='D16 - Compras' selected >Compras</option> : <option value='D16 - Compras' >Compras</option>  }
              { departamento == "D17 - Industrial" ? <option value='D17 - Industrial' selected >Industrial</option> : <option value='D17 - Industrial' >Industrial</option> }
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
      </div> }
    </MainLayout>
  )
}
