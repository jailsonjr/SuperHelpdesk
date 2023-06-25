import db from '@/lib/firebase';

export type newDeviceType = {
  id_treves: string,
  type: string,
  brandModel: string,
  serialNumber: string,
  status: string,
  filial: string,
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
  const devicesRef = db.collection('devices').doc();
  return await devicesRef.set(devicedata);
}

export const getDevices = async () => {
  let resultData:Array<{}> = [];
  const devicesRef = db.collection('devices');
  const result = await devicesRef.get();
  result.docs.forEach((doc) => {
    let data = {doc_id: doc.id, doc_data: doc.data()};
    if(data){resultData.push(data)}
  });
  return resultData;
}
