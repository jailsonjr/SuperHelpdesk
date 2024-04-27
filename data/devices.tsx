import {PrismaClient} from "@prisma/client"

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
  obs?: string,
  timestamps: {
    created_at: string,
    updated_at: string
  }  
};

const dbOrm = new PrismaClient();


export const insertDevices = async (devicedata: newDeviceType) => {
  return [];
}

export const getDevices = async () => {
  let resultData:Array<{}> = [];
  resultData = await dbOrm.devices.findMany();
  return resultData;
}

export const getDevicesByUser = async (user_id: string) => {
  let resultData = await dbOrm.devices.findMany({
    where: {
      user_id: user_id
    }
  });
  return resultData;
}
