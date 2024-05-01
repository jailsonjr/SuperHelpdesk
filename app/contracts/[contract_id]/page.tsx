'use client'
import Link from 'next/link'
import styles from '@/app/users/users.module.css'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import { FormEvent, useEffect, useState } from 'react'
import MainLayout from '@/components/MainLayout/mainLayout'
import AppLoading from '@/components/AppLoading/appLoading'

async function getDataContract(data: string) {
  const result = await fetch(data[0] + data[1]);
  const dataResult = await result.json();
  return dataResult
}

export default function EditContract({ params }: {params:any}) {

  const { data, isLoading } = useSWR<any>([
    `${process.env.NEXT_PUBLIC_URL_BASE}/api/contracts/`,
    params.contract_id
  ], getDataContract);

  const [contractDescription, setContractDescription] = useState('');
  const [contractStatus, setContractStatus] = useState('');
  const [contractDateBegin, setContractDateBegin] = useState('');
  const [contractDateEnd, setContractDateEnd] = useState('');
  const [contractObs, setContractObs] = useState('');
  const [supplierDescription, setSupplierDescription] = useState('');
  const [contractID, setContractID] = useState('');

  const nav = useRouter();

  useEffect(()=> {
    if(!isLoading){
      console.log(data)
      setContractDescription(data.contract_description);
      setContractStatus(data.contract_status);
      setContractDateBegin(data.contract_date_begin);
      setContractDateEnd(data.contract_end_begin);
      setContractObs(data.contract_obs);
      setSupplierDescription(data.supplier_description);
      setContractID(data.contract_id);  
    }    
  }, [data])

  

  const handleForm = async (event: FormEvent) => {
    event.preventDefault(); 
    setContractDescription(contractDescription);
    setContractStatus(contractStatus);
    setContractDateBegin(contractDateBegin);
    setContractDateEnd(contractDateEnd);
    setContractObs(contractObs);
    setSupplierDescription(supplierDescription);

    const dataRaw = {
      contractDescription,
      contractStatus,
      contractDateBegin,
      contractDateEnd,
      contractObs,
      supplierDescription,
      contractID
    } 

    const request = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/contracts`,{
      method: 'PUT',
      body: JSON.stringify(dataRaw)
    })

    

    if(request.ok){
      alert('Atualizado');
      nav.push('/contracts?registered=ok')
    }

  }

  return (
    <MainLayout>
      <div className={styles.submenu}>
        <div className={styles.title}>Editar contrato</div>
        <Link href='/devices' className={styles.buttonCancel}>Cancelar</Link>
      </div>

      {isLoading == true ? <AppLoading className={styles.modalUsers} size={30} /> :
      <div className={styles.grid}>
        <form className={styles.new_form} onSubmit={handleForm}>
          <h3 className={styles.subtitle}>Informações do contrato</h3>
          <fieldset>  
            <div>
              <span>Fornecedor *</span>
              <input type='text' placeholder='Fornecedor' 
              onChange={(e) => {setSupplierDescription(e.target.value.toLocaleUpperCase())}}
              value={supplierDescription}
              name='supplier' required/>
            </div>

            <div>
              <span>Descrição *</span>
              <input type='text' placeholder='decrição' 
              onChange={(e) => {setContractDescription(e.target.value)}}
              value={contractDescription}
              name='description' required/>
            </div>

            <div>
              <span>Status</span>
              <select value={contractStatus} name='status' placeholder='status' required onChange={(e) => {setContractStatus(e.target.value)}} >
                { contractStatus == "ativo" ? <option value='ativo' selected >Ativo</option> : <option value='ativo' >Ativo</option> }
                { contractStatus == "encerrado" ? <option value='encerrado' selected >Encerrado</option> : <option value='encerrado' >Encerrado</option> }
              </select>
            </div>             
          </fieldset>

          <h3 className={styles.subtitle}>Informações de datas</h3>

          <fieldset>
              <div>
                <span>Data de Inicio do Contrato</span> 
                <input value={contractDateBegin} type='date' placeholder='data de começo' onChange={(e) => {setContractDateBegin(e.target.value)}}/>
              </div>

              <div>
                <span>Data de Fim do Contrato</span> 
                <input value={contractDateEnd} type='date' placeholder='data de começo' onChange={(e) => {setContractDateEnd(e.target.value)}}/>
              </div>

          </fieldset>

          <h3 className={styles.subtitle}>Outras informações</h3>

            <fieldset>
              <span>Observação</span>
              <textarea placeholder='Informações extras' name='obs' onChange={(e) => {setContractObs(e.target.value)}}
              value={contractObs}
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
