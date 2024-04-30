import {PrismaClient} from "@prisma/client"

export type newDeviceType = {
  deviceID: string,
  deviceType: string,
  deviceSerial: string,
  deviceStatus: string,
  deviceUser?: string,
  deviceDateDelivered?: string,
  deviceContract?: string,
  deviceObs?: string,
  timestamps: {
    created_at: string,
    updated_at: string
  }  
};

const dbOrm = new PrismaClient();

export const insertDevices = async (devicedata: newDeviceType) => {
  let resultData = null;
  resultData = await dbOrm.devices.create({
    data: {
      device_type: devicedata.deviceType,              
      device_serial: devicedata.deviceSerial,           
      device_status: devicedata.deviceStatus,           
      device_date_delivered: devicedata.deviceDateDelivered,  
      device_obs: devicedata.deviceObs,              
      user_id: devicedata.deviceUser,               
      contract_id: devicedata.deviceContract
    }
  });
  return resultData;
}

export const getDevices = async () => {
  let resultData:Array<{}> = [];
  resultData = await dbOrm.devices.findMany();
  return resultData;
}

export const getDevicesByUser = async (user_id: string) => {
  let resultData = await dbOrm.devices.findMany({
    orderBy:{
      device_id: "desc"
    },
    where: {
      user_id: user_id
    }
  });
  return resultData;
}

export const getDeviceByID = async (deviceID: string) => {
  let resultData = await dbOrm.devices.findFirst({
    where: {
      device_id: deviceID
    }
  });
  return resultData;
}

export const updateDevice = async (devicedata: newDeviceType) => {
  let resultData = null;
  resultData = await dbOrm.devices.update({
    where: {
      device_id: devicedata.deviceID,
    },
    data: {
      device_serial: devicedata.deviceSerial,
      device_type: devicedata.deviceType,
      device_status: devicedata.deviceStatus,
      device_obs: devicedata.deviceObs,
      device_date_delivered: devicedata.deviceDateDelivered,
      user_id: devicedata.deviceUser,
      contract_id: devicedata.deviceContract
    }
  });

  
  return resultData;
}

export const getDeviceByType = async (deviceType: string) => {
  let resultData = await dbOrm.devices.findMany({
    where: {
      device_type: deviceType
    }
  });
  return resultData;
}
