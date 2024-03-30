import {PrismaClient} from "@prisma/client"

export type newUserType = {
  user_id?: string,
  name: string,
  email: string,
  departament: string,
  position?: string,
  status?: string,
  obs?: string
};


const dbOrm = new PrismaClient();

export const getUsers = async () => {
  let resultData:Array<{}> = [];
  resultData = await dbOrm.users.findMany();
  return resultData;
}

export const getUserByID = async(user_id: string) => {
  let resultData = null;
  resultData = await dbOrm.users.findFirst({
    where: {
      user_id: user_id
    }
  });
  return resultData;
}

export const insertUsers = async (userdata: newUserType) => {
  let resultData = null;
  console.log("Dados: ", userdata.departament)
  resultData = await dbOrm.users.create({
    data: {
      user_name: userdata.name,
      user_email: userdata.email,
      user_department: userdata.departament,
      user_position: userdata.position,
      user_active: userdata.status,
      user_obs: userdata.obs
    }
  });
  return resultData;
}


export const updateUser = async (userdata: newUserType) => {
  let resultData = null;
  console.log("Dados: ", userdata)
  resultData = await dbOrm.users.update({
    where: {
      user_email: userdata.email,
    },
    data: {
      user_name: userdata.name,
      user_email: userdata.email,
      user_department: userdata.departament,
      user_position: userdata.position,
      user_active: userdata.status,
      user_obs: userdata.obs
    }
  });

  return resultData;
}


