'use client'
import Link from 'next/link'
import styles from '../contract.module.css'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import MainLayout from '@/components/MainLayout/mainLayout'


export default function NewContract() {

  const [contractDescription, setContractDescription] = useState('');
  const [contractStatus, setContractStatus] = useState('');
  const [contractDateBegin, setContractDateBegin] = useState('');
  const [contractDateEnd, setContractDateEnd] = useState('');
  const [contractObs, setContractObs] = useState('');
  const [supplierDescription, setSupplierDescription] = useState('');

  const nav = useRouter();

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
      supplierDescription
    } 

    const request = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/contracts`,{
      method: 'POST',
      body: JSON.stringify(dataRaw)
    })

    if(request.ok){
      alert('Cadastrado');
      nav.push('/contracts?registered=ok')
    }   
    
  }

  return (
    <>
    <MainLayout>
      <div className={styles.submenu}>
        <div className={styles.title}>Novo Contrato</div>
        <Link href='/devices' className={styles.buttonCancel}>Cancelar</Link>
      </div>
      <div className={styles.grid}>
        <form className={styles.new_form} onSubmit={handleForm}>
        <h3 className={styles.subtitle}>Informações do contrato</h3>
          <fieldset>  
            <div>
              <span>Fornecedor *</span>
              <input type='text' placeholder='Fornecedor' 
              onChange={(e) => {setSupplierDescription(e.target.value.toLocaleUpperCase())}}
              name='supplier' required/>
            </div>

            <div>
              <span>Descrição *</span>
              <input type='text' placeholder='Descrição' 
              onChange={(e) => {setContractDescription(e.target.value)}}
              name='description' required/>
            </div>

            <div>
              <span>Status *</span>
              <select value={contractStatus} name='status' placeholder='status' required onChange={(e) => {setContractStatus(e.target.value)}} >
                <option value='' selected></option>
                <option value='ativo'>Ativo</option>
                <option value='encerrado' >Encerrado</option>
              </select>
            </div>             
          </fieldset>

          <h3 className={styles.subtitle}>Informações de datas</h3>

          <fieldset>
              <div>
                <span>Data de Inicio do Contrato</span> 
                <input type='date' placeholder='data de começo' onChange={(e) => {setContractDateBegin(e.target.value)}}/>
              </div>

              <div>
                <span>Data de Fim do Contrato</span> 
                <input type='date' placeholder='data de começo' onChange={(e) => {setContractDateEnd(e.target.value)}}/>
              </div>

          </fieldset>

          <h3 className={styles.subtitle}>Outras informações</h3>

            <fieldset>
              <span>Observação</span>
              <textarea placeholder='Informações extras' name='obs' onChange={(e) => {setContractObs(e.target.value)}}/>
            </fieldset>


            <fieldset>
              <button className={styles.buttonSave} name='sendButton' type='submit'>Atualizar</button>
            </fieldset>
        </form>
      </div>
    </MainLayout>
    </>
  )
}
