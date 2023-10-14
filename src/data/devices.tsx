
export type newDeviceType = {
  id_treves: string,
  type: string,
  brandModel: string,
  serialNumber: string,
  status: string,
  filial?: string,
  user?: string,
  dateDelivered?: Date,
  contractCompany?: string,
  numberContract?: string,
  deviceValue?: number,
  monthlyAmount?: number,
  dateEndLoan?: string,
  properties?: {
    ip?: string,
    macaddress1?: string,
    macaddress2?: string
  },
  obs?: string,
  timestamps: {
    created_at: string,
    updated_at: string
  }
  
};

export const insertDevices = async (devicedata: newDeviceType) => {
  return [];
}

export const getDevices = async () => {
  let resultData:Array<{}> = [];
  return resultData;
}
