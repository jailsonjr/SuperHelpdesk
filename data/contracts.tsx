import dbOrm from "./dbInstance";

export type newContractType = {
  contractID: string,
  contractDescription: string,
  contractStatus: string,
  contractDateBegin: string,
  contractDateEnd?: string,
  contractObs?: string,
  supplierDescription: string
};

export const insertContract = async (contractData: newContractType) => {
  let resultData = null;
  resultData = await dbOrm.contracts.create({
    data: {
      contract_description: contractData.contractDescription,              
      contract_status: contractData.contractStatus,           
      contract_date_begin: contractData.contractDateBegin,           
      contract_end_begin: contractData.contractDateEnd,  
      contract_obs: contractData.contractObs,              
      supplier_description: contractData.supplierDescription
    }
  });

  return resultData;
}

export const getContracts = async () => {
  let resultData:Array<{}> = [];
  resultData = await dbOrm.contracts.findMany();
  return resultData;
}

export const getContractByID = async (contractID: string) => {
  let resultData = await dbOrm.contracts.findFirst({
    where: {
      contract_id: contractID
    }
  });
  return resultData;
}

export const updateContract = async (contractData: newContractType) => {
  let resultData = null;
  resultData = await dbOrm.contracts.update({
    where: {
      contract_id: contractData.contractID,
    },
    data: {
      contract_description: contractData.contractDescription,              
      contract_status: contractData.contractStatus,           
      contract_date_begin: contractData.contractDateBegin,           
      contract_end_begin: contractData.contractDateEnd,  
      contract_obs: contractData.contractObs,              
      supplier_description: contractData.supplierDescription
    }
  });

  
  return resultData;
}
